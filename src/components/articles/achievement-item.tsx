import { Achievement } from '@content';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { Heading } from 'src/components/heading/heading';
import Prose from 'src/components/prose/prose';

export default function AchievementItem({
  achievement,
  body,
  organization,
  completionYear,
}: Achievement): ReactNode {
  return (
    <article className="space-y-4">
      <div className="space-y-1">
        <Heading className="text-balance" level={3}>
          {achievement}
        </Heading>

        <div className="text-neutral-11 flex items-center gap-2 text-lg font-semibold tracking-wide">
          <AcademicCapIcon className="h-4" />
          {organization}
        </div>
        <div className="text-neutral-11 text-sm leading-none tracking-wide">
          {completionYear}
        </div>
      </div>

      <Prose html={body.html} />
    </article>
  );
}
