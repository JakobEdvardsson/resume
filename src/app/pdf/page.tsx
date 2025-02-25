'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import PDF from 'src/components/pdf/pdf';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((module) => module.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading document...</p>,
  },
);

export default function Page(): ReactNode {
  return (
    <div>
      <PDFViewer className="h-svh w-full">
        <PDF />
      </PDFViewer>

      {/* <PDFDownloadLink document={<PDF />}>Download</PDFDownloadLink> */}
    </div>
  );
}
