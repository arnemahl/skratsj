import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'dyub8zvy',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const createUrl = source => {
  return builder.image(source);
};
