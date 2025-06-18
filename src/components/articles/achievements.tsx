import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import AchievementItem from 'src/components/articles/achievement-item';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedAchievements } from 'src/helpers/utilities';

export default function Achievements(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-8 shadow-md">
      <div className="container space-y-6">
        <SectionHeading
          className="justify-center"
          Icon={AcademicCapIcon}
          level={2}
          text="Education"
        />

        {sortedAchievements.map((achievement) => (
          <Fragment key={achievement._id}>
            <AchievementItem key={achievement._id} {...achievement} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
