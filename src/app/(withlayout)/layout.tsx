import { PropsWithChildren, ReactNode } from 'react';
import Footer from 'src/components/footer/footer';
import Header from 'src/components/header/header';

export default function RootLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <div className="space-y-12">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
