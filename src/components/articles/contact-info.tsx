import { personal } from '@content';
import { IdentificationIcon } from '@heroicons/react/24/solid';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ReactNode } from 'react';
import SectionHeading from 'src/components/section-heading/section-heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'src/components/button/button';

export default function ContactInformation(): ReactNode {
  return (
    <article className="border-neutral-6 space-y-4 rounded-xl border py-8 shadow-md md:col-span-2">
      <div className="container space-y-6">
        <SectionHeading
          Icon={IdentificationIcon}
          level={3}
          text="Contact Information"
        />

        <ul>
          <li className="my-4">
            <Button asChild size="lg" className="w-full" color="neutral">
              <a href={`mailto:${personal.email}`}>
                <FontAwesomeIcon icon={faEnvelope} aria-hidden />
                Email Me
              </a>
            </Button>
          </li>
          <li className="my-4">
            <Button asChild size="lg" className="w-full" color="neutral">
              <a href={personal.github}>
                <FontAwesomeIcon icon={faGithub} aria-hidden />
                See My Work
              </a>
            </Button>
          </li>
          <li className="my-4">
            <Button asChild size="lg" className="w-full" color="neutral">
              <a href={personal.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} aria-hidden />
                Connect With Me
              </a>
            </Button>
          </li>
        </ul>

        {/* <ul>
          {privateInformation?.map((privateField) => (
            <li className="mt-3" key={privateField.label}>
              <strong>{privateField.label}</strong>{' '}
              <div
                dangerouslySetInnerHTML={{ __html: privateField.body.html }}
              />
            </li>
          ))}
        </ul> */}
      </div>
    </article>
  );
}
