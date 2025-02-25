import { personal } from '@content';
import { Metadata, Viewport } from 'next';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren, ReactNode } from 'react';
import { cn, fullName } from 'src/helpers/utils';
import './styles/globals.css';

export const generateMetadata = (): Metadata => {
  const baseURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://edvardsson.tech';
  const siteName = `${fullName} Professional Resume`;
  const title = `Resume | ${fullName}`;
  const description = `Professional resume for ${fullName}.`;

  return {
    applicationName: siteName,
    authors: { name: fullName },
    creator: fullName,
    description,
    generator: 'Next.js',
    keywords: ['resume', fullName, 'next.js', 'pdf'],
    metadataBase: new URL(baseURL),
    openGraph: {
      type: 'profile',
      firstName: personal.givenName,
      lastName: personal.familyName,
      title,
      description,
      siteName,
      url: baseURL,
    },
    title,
    twitter: {
      site: siteName,
      creator: fullName,
      description,
      title,
    },
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <html
      lang="en"
      className={cn('font-albert', 'font-jetbrains-mono')}
      suppressHydrationWarning
    >
      <body className="bg-neutral-1 text-neutral-12 selection:bg-accent-11 selection:text-neutral-1">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="space-y-12">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
