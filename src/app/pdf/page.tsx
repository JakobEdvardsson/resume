'use client';

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { ReactNode } from 'react';
import PDF from 'src/components/pdf/pdf';

export default function Page(): ReactNode {
  return (
    <div>
      <PDFViewer className="h-svh w-full">
        <PDF />
      </PDFViewer>

      <PDFDownloadLink document={<PDF />}>Download</PDFDownloadLink>
    </div>
  );
}
