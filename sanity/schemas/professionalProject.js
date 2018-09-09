export default {
  name: 'professionalProject',
  title: 'Prosjekt, profesjonelt',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'localeString',
    },
    {
      name: 'company',
      title: 'Selskap',
      type: 'reference',
      to: {type: 'company'},
      weak: true,
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
      name: 'readableUrl',
      title: 'Lesbar URL',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],

  preview: {
    select: {
      title: 'title.en',
      subTitle: 'company.name',
    },
  }
}
