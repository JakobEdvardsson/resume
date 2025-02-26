import { personal } from '@content';
import Image from 'next/image';
import { UserIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import Prose from 'src/components/prose/prose';
import SectionHeading from 'src/components/section-heading/section-heading';

export default function AboutMe(): ReactNode {
  return (
    //border-neutral-6 rounded-xl border py-8 shadow-md
    <article className="border-neutral-6 grid grid-flow-row gap-x-6 space-y-4 gap-y-2 rounded-xl border py-8 shadow-md md:col-span-3">
      <div className="container space-y-6">
        <SectionHeading
          className="justify-center"
          Icon={UserIcon}
          level={3}
          text="About Me"
        />
        <div className="grid grid-flow-row gap-x-6 gap-y-2 lg:grid-flow-col">
          <Image
            className="rounded-md"
            src="/images/picture-of-me.jpg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Prose html={personal.body.html} />
        </div>
      </div>
    </article>
  );
}
