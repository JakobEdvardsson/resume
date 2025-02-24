import { personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';

export default function ContactInformation(): ReactNode {
  return (
    <article className="space-y-4">
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
      </ul>
    </article>
  );
}
