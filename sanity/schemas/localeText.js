const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'es', title: 'Spanish'},
  {id: 'nb', title: 'Norwegian'}
];

export default {
  name: 'localeText',
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
      type: 'text',
    },
    {
      name: 'nb',
      title: 'Norwegian Bokmål',
      type: 'text',
      fieldset: 'translations',
    },
  ],
}
