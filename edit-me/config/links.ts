import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { CMSLink } from 'edit-me/types/cms-link';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/jakobedvardsson',
    icon: faGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jakob-edvardsson',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'mailto:jakob@edvardsson.tech',
    icon: faEnvelope,
    title: 'Email',
  },
];
