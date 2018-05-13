import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'dyub8zvy',
  dataset: 'production',
  useCdn: true,
  token: 'sk3UO9hKBDv9tcLf1mKuo5egd9l8ddH9EuiTTGujAOczry8Wzi8hRIhLe1OTQcRM414utAPKKMx3wk43JIMwD12O2LtUjDykMzXrxIkhEcWqWwJ00xEwNjBMo898uLUB0b1OY5yYw5dpZh9hQOOG50pqUDHyLE60tbGOKgpCViA9nGGr8kGB',
});

const builder = imageUrlBuilder(client);

export const createUrl = source => {
  return builder.image(source);
};
