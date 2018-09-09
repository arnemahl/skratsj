export default {
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {
        collapsible: true,
        collapsed: true,
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
