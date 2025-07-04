import { resumeConfig } from '@config/resume-config';
import {
  PrivateField,
  ProfessionalExperience,
  allSkills,
  personal,
} from '@content';
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  Link,
  Image,
} from '@react-pdf/renderer';
import path from 'node:path';
import { HtmlProps } from 'node_modules/react-pdf-html/dist/types/Html';
import { ReactNode } from 'react';
import Html from 'react-pdf-html';
import BuildingColumns from 'src/components/pdf/icons/building-columns';
import CircleBriefcase from 'src/components/pdf/icons/circle-briefcase';
import CircleCheck from 'src/components/pdf/icons/circle-check';
import CircleCommandLine from 'src/components/pdf/icons/circle-command-line';
import CircleGraduationCap from 'src/components/pdf/icons/circle-graduation-cap';
import CircleIdCard from 'src/components/pdf/icons/circle-id-card';
import CircleUser from 'src/components/pdf/icons/circle-user';
import LinkIcon from 'src/components/pdf/icons/link';
import { getAccentColor, getNeutralColor } from 'src/helpers/colors';
import {
  fullName,
  sortedAchievements,
  sortedProfessionalExperiences,
  sortedProjects,
} from 'src/helpers/utilities';

const theme = resumeConfig.pdfTheme;

Font.register({
  family: 'Albert Sans',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: path.join(process.cwd(), 'src/fonts/AlbertSans-Regular.ttf'),
    },
    {
      fontStyle: 'italic',
      fontWeight: 400,
      src: path.join(process.cwd(), 'src/fonts/AlbertSans-Italic.ttf'),
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: path.join(process.cwd(), 'src/fonts/AlbertSans-Bold.ttf'),
    },
    {
      fontStyle: 'italic',
      fontWeight: 700,
      src: path.join(process.cwd(), 'src/fonts/AlbertSans-BoldIatalic.ttf'),
    },
  ],
});

Font.register({
  family: 'JetBrains Mono',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 500,
      src: path.join(process.cwd(), 'src/fonts/JetBrainsMono-Medium.ttf'),
    },
  ],
});

const hyphenationCallback = (word: string): string[] => {
  // don't hyphenate
  return [word];
};

Font.registerHyphenationCallback(hyphenationCallback);

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
});

const fontSizes = {
  xl: 20,
  l: 18,
  m: 14,
  s: 13,
  xs: 12,
  xxs: 10,
};

const spacers = {
  1: '6px',
  2: '8px',
  3: '10px',
  4: '12px',
  5: '14px',
  6: '16px',
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'stretch',
    backgroundColor: getNeutralColor(1, theme),
    color: getNeutralColor(12, theme),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontFamily: 'Albert Sans',
    fontSize: fontSizes.xxs,
    justifyContent: 'flex-start',
    lineHeight: 1.3,
  },
  sidebar: {
    alignSelf: 'stretch',
    backgroundColor: getNeutralColor(3, theme),
    display: 'flex',
    color: getNeutralColor(12, theme),
    flexBasis: '30%',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
  },
  sidebarContent: { padding: spacers[4] },
  header: {
    backgroundColor: getAccentColor(6, theme),
    color: getNeutralColor(12, theme),
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: spacers[4],
  },
  headerTitle: { fontSize: fontSizes.l, fontWeight: 700 },
  headerSubtitle: { fontSize: fontSizes.m, fontWeight: 700 },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: '70%',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    padding: spacers[4],
  },
  section: { marginBottom: spacers[4] },
  sectionHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
  },
  sectionHeadingNonHTML: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  sectionHeadingIcon: {
    height: fontSizes.m,
    marginRight: spacers[1],
    width: fontSizes.m,
  },
  sectionHeadingStars: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  sectionParagraph: {
    fontWeight: 400,
    margin: 0,
  },
  itemHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.s,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
    marginTop: spacers[3],
  },
  itemSubheadingRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  itemSubheadingSubRow: {
    display: 'flex',
    flex: '0 0 100%',
  },
  itemSubheading: {
    fontSize: fontSizes.xxs,
  },
  itemSubheadingItalic: {
    fontSize: fontSizes.xxs,
    fontStyle: 'italic',
  },
  professionalTitle: {
    backgroundColor: getNeutralColor(12, theme),
    borderRadius: '3px',
    color: getNeutralColor(1, theme),
    fontWeight: 700,
    paddingHorizontal: spacers[1],
  },
  bold: { fontWeight: 700 },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  flexRow: { alignItems: 'center', display: 'flex', flexDirection: 'row' },
  flexRowAlignStart: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  a: {
    color: getAccentColor(11, theme),
    textDecoration: 'underline',
  },
  list: {
    marginTop: spacers[2],
  },
  code: {
    backgroundColor: getNeutralColor(4, theme),
    borderRadius: '3px',
    fontFamily: 'JetBrains Mono',
    fontWeight: 500,
    paddingHorizontal: spacers[2],
  },
  image: {
    borderRadius: '0.375rem',
    width: '150px',
    height: '150px',
    alignSelf: 'center',
  },
});

const htmlProperties: Omit<HtmlProps, 'children'> = {
  style: { fontSize: fontSizes.xxs },
  stylesheet: {
    a: styles.a,
    p: styles.sectionParagraph,
    ul: styles.list,
    ol: styles.list,
    code: styles.code,
  },
};

interface PDFProperties {
  privateInformation?: PrivateField[];
}

interface ProfessionExperienceProperties {
  professionalExperience: ProfessionalExperience;
}

function ProfessionalExperienceDetails({
  professionalExperience,
}: ProfessionExperienceProperties): ReactNode {
  return (
    <>
      <View style={styles.itemSubheadingRow}>
        <View style={styles.itemSubheadingSubRow}>
          {professionalExperience.titles.map((title, index) => (
            <Text key={index} style={styles.itemSubheadingItalic}>
              {title.title} {title.startDate}—{title.endDate ?? 'Current'}
            </Text>
          ))}
        </View>
      </View>
    </>
  );
}

export default function PDF({ privateInformation }: PDFProperties): ReactNode {
  const year = new Date().getFullYear();

  return (
    <Document
      author={fullName}
      title={`Resume for ${fullName}, ${year.toString()}`}
    >
      <Page size="LETTER" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{fullName}</Text>
            <Image
              src={'https://www.edvardsson.tech/images/picture-of-me.jpg'}
              style={styles.image}
            />
            <Text style={styles.headerSubtitle}>{personal.title}</Text>
          </View>
          <View style={styles.sidebarContent}>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <CircleUser size={fontSizes.m} />
                <Text>About Me</Text>
              </View>
              <Html {...htmlProperties}>{personal.body.html}</Html>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <CircleIdCard size={fontSizes.m} />
                <Text>Contact Information</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Name:</Text>
                <Text>
                  &nbsp;{personal.givenName} {personal.familyName}
                </Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Email:</Text>
                <Text>&nbsp;{personal.email}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Website: </Text>
                <Link
                  src={`https://${personal.domain}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {personal.domain}
                </Link>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Location:</Text>
                <Text>&nbsp;{personal.location}</Text>
              </View>
              {privateInformation?.map((privateField) => (
                <View key={privateField._id}>
                  <Text style={styles.bold}>{privateField.label}:&nbsp;</Text>
                  <Html {...htmlProperties}>{privateField.body.html}</Html>
                </View>
              ))}
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <CircleCheck size={fontSizes.m} />
                <Text>Skills</Text>
              </View>
              {allSkills.map((skill) => (
                <View key={skill._id}>
                  <View style={styles.itemHeading}>
                    <Text style={styles.bold}>{skill.title}</Text>
                  </View>
                  <Html {...htmlProperties}>{skill.body.html}</Html>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CircleBriefcase size={fontSizes.m} />
              <Text>Professional Experience</Text>
            </View>
            {sortedProfessionalExperiences.map((professionalExperience) => (
              <View key={professionalExperience._id}>
                <View style={styles.itemHeading}>
                  <Text>{professionalExperience.organization}</Text>
                </View>
                <ProfessionalExperienceDetails
                  professionalExperience={professionalExperience}
                />
                <Html {...htmlProperties}>
                  {professionalExperience.body.html}
                </Html>
              </View>
            ))}
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#999',
              marginVertical: 4,
            }}
          />

          {/* Projects */}
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CircleCommandLine size={fontSizes.m} />
              <Text>Projects</Text>
            </View>
            {sortedProjects.map((projects) => (
              <View key={projects._id}>
                <View style={styles.itemHeading}>
                  <Text style={styles.bold}>{projects.project}</Text>
                </View>
                <View style={styles.itemSubheadingRow}>
                  <LinkIcon size={fontSizes.xxs} />
                  <Text style={styles.itemSubheading}>{projects.url}</Text>
                </View>
                <Html {...htmlProperties}>{projects.body.html}</Html>
              </View>
            ))}
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#999',
              marginVertical: 8,
            }}
          />
          {/* Education */}
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CircleGraduationCap size={fontSizes.m} />
              <Text>Education</Text>
            </View>
            {sortedAchievements.map((achievement) => 
              !achievement.course && (
              <View key={achievement._id}>
                <View style={styles.itemHeading}>
                  <Text style={styles.bold}>{achievement.achievement}</Text>
                </View>
                <View style={styles.itemSubheadingRow}>
                  <BuildingColumns size={fontSizes.xxs} />
                  <Text style={styles.itemSubheading}>
                    {achievement.organization}
                  </Text>
                </View>
                <Html {...htmlProperties}>{achievement.body.html}</Html>
              </View>
            ))}
          </View>

          {/* Courses */}
          <View style={styles.section}>
            <View style={[styles.sectionHeading, { marginBottom: 4 }]}>
              <CircleGraduationCap size={fontSizes.m} />
              <Text>Courses</Text>
            </View>
            {sortedAchievements.map((achievement) => 
              achievement.course == true && (

              <View key={achievement._id} style={[styles.flexRow, { marginVertical: 3 }]}>
                <Text style={styles.bold}>{achievement.achievement}: </Text>
                <Text>
                  &nbsp;{achievement.organization}
                </Text>
              </View>

              // <View key={achievement._id}>
              //   <View style={styles.itemHeading}>
              //     <Text >{achievement.achievement}</Text>
              //   </View>
              // </View>
            ))}
          </View>


          {/* <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#999',
              marginVertical: 8,
            }}
          />
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <CirclePaintbrush size={fontSizes.m} />
              <Text>{additionalInfo.title}</Text>
            </View>
            <Html
              {...htmlProperties}
              stylesheet={{
                // eslint-disable-next-line @typescript-eslint/no-misused-spread
                ...htmlProperties.stylesheet,
                p: { marginBottom: spacers[1] },
              }}
            >
              {additionalInfo.body.html}
            </Html>
          </View> */}
        </View>
      </Page>
    </Document>
  );
}
