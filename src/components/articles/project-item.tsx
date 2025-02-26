import { Project } from '@content';
import { LinkIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function ProjectItem({
  project,
  url,
  body,
}: Project): ReactNode {
  return (
    <article className="space-y-4">
      <div className="space-y-1">
        <Heading className="text-balance" level={3}>
          {project}
        </Heading>

        <Prose html={body.html} />

        <div className="text-neutral-11 flex items-center gap-2 text-lg font-semibold tracking-wide">
          <LinkIcon className="h-4" />
          <a href={url}> {url}</a>
        </div>
      </div>
    </article>
  );
}
