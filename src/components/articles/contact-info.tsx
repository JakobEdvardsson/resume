import { PrivateField, personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';

interface ContactInformationProperties {
  privateInformation?: PrivateField[];
}

export default function ContactInformation({
  privateInformation,
}: ContactInformationProperties): ReactNode {
  return (
    <article className="space-y-4 md:col-span-2">
      <SectionHeading
        Icon={IdentificationIcon}
        level={3}
        text="Contact Information"
      />

      <ul>
        <li>
          <strong>Name:</strong> {personal.givenName} {personal.familyName}
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
        </li>
        <li>
          <strong>Website:</strong>{' '}
          <a href={`https://${personal.domain}`}>{personal.domain}</a>
        </li>
        <li>
          <strong>Location:</strong> {personal.location}
        </li>

        {/* private access required */}
        {privateInformation?.map((privateField) => (
          <li className="mt-3" key={privateField.label}>
            <strong>{privateField.label}</strong>{' '}
            <div dangerouslySetInnerHTML={{ __html: privateField.body.html }} />
          </li>
        ))}
      </ul>
    </article>
  );
}
