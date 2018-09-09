export default {
  name: 'personalProject',
  title: 'Prosjekt, personlig',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'localeString',
    },
    {
      name: 'readableUrl',
      title: 'Lesbar URL',
      description: 'Kan vises i print-versjon',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'GitHub-URL',
      type: 'url',
    },
    {
      name: 'start',
      title: 'Start',
      type: 'date',
    },
    {
      name: 'end',
      title: 'Slutt',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      subTitle: 'Hva gikk prosjektet ut på?',
      type: 'localeText',
    },
    {
      name: 'technologies',
      title: 'Teknologier',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'role',
      title: 'Rolle',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Tittel',
          type: 'localeString',
        },
        {
          name: 'description',
          title: 'Beskrivelse',
          subTitle: 'Hva gjorde du?',
          type: 'localeText',
        },
      ],
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'logo',
      subTitle: 'company.name',
    },
  }
}
