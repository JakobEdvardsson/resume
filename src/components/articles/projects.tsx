import { CommandLineIcon } from '@heroicons/react/24/solid';
import { Fragment, ReactNode } from 'react';
import Separator from 'src/components/articles/separator';
import SectionHeading from 'src/components/section-heading/section-heading';
import { sortedProjects } from 'src/helpers/utilities';
import ProjectItem from './project-item';

export default function Projects(): ReactNode {
  return (
    <article className="border-neutral-6 bg-neutral-2 rounded-xl border py-8 shadow-md">
      <div className="container space-y-6">
        <SectionHeading
          className="justify-center"
          Icon={CommandLineIcon}
          level={2}
          text="Projects"
        />

        {sortedProjects.map((project) => (
          <Fragment key={project._id}>
            <ProjectItem {...project} />
            <Separator />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
