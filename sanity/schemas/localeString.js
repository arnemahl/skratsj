const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'es', title: 'Spanish'},
  {id: 'nb', title: 'Norwegian'}
];

export default {
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
    {
      name: 'nb',
      title: 'Norwegian Bokmål',
      type: 'string',
      fieldset: 'translations',
    },
  ],
}
