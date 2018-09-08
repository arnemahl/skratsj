export default {
  name: 'professionalProject',
  title: 'Project, professional',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'company',
      title: 'Company',
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
      title: 'End',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'localeString',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'localeText',
        },
      ],
    },
    {
      name: 'readableUrl',
      title: 'Readable URL',
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
