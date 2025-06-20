import { links } from '@config/links';
import { personal } from '@content';
import { ReactNode } from 'react';
import { Button } from 'src/components/button/button';
import { fullName } from 'src/helpers/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(): ReactNode {
  return (
    <footer className="border-neutral-6 bg-neutral-2 text-neutral-12 border-t py-12">
      <div className="container space-y-8 text-center">
        <div>
          <h3 className="text-neutral-12 font-sans text-2xl font-bold text-balance md:text-3xl">
            Links
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Button
              asChild
              className="h-12 w-12 rounded-full"
              key={link.title}
              size="icon"
            >
              <a href={link.href}>
                <span className="sr-only">
                  {personal.givenName} on {link.title}
                </span>
                <FontAwesomeIcon icon={link.icon} aria-hidden />
              </a>
            </Button>
          ))}
        </div>

        <div className="space-y-1">
          <div>
            Copyright © {new Date().getFullYear()} {fullName}
          </div>
        </div>
      </div>
    </footer>
  );
}
