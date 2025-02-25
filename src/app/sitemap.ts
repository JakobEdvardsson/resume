export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { deployURL } from 'src/helpers/environment';

const baseURL = `https://${deployURL ?? ''}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
