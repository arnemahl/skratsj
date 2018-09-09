export default {
  name: 'personalProject',
  title: 'Project, personal',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'readableUrl',
      title: 'Readable URL',
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
      title: 'GitHub URL',
      type: 'url',
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
  ],

  preview: {
    select: {
      title: 'title.en',
    },
  }
}
