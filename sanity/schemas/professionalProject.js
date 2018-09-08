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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        auto: true,
      },
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
      media: 'mainImage',
      subTitle: 'company.name',
    },
  }
}
