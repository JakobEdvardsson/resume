import { allSkills } from '@content';
import { CheckIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';
import SectionHeading from 'src/components/section-heading/section-heading';

export default function Skills(): ReactNode {
  return (
    <article className="border-neutral-6 space-y-4 rounded-xl border py-8 shadow-md md:col-span-5">
      <div className="container space-y-6">
        <SectionHeading Icon={CheckIcon} level={3} text="Skills" />

        <div className="grid grid-flow-row gap-x-6 gap-y-2 lg:grid-flow-col">
          {allSkills.map((skill) => (
            <div className="space-y-2" key={skill._id}>
              <Heading level={4}>
                <div className="flex items-center gap-2">{skill.title}</div>
              </Heading>

              <Prose className="text-neutral-11" html={skill.body.html} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
