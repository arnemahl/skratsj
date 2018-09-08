export default {
  name: 'volunteerWorkPosition',
  title: 'Volunteer work position',
  type: 'document',
  fields: [
    {
      name: 'organizationName',
      title: 'Organization',
      type: 'string',
    },
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
  ],

  preview: {
    select: {
      org: 'organizationName',
      pos: 'position.en',
      start: 'start',
      end: 'end',
    },
    prepare({ org, pos, start, end }) {
      return {
        title: `${org}, ${pos}`,
        description: `${start} - ${end}`,
      };
    },
  },

  orderings: [
    {
      title: 'Started First',
      name: 'startedFirst',
      by: [{field: 'start', direction: 'asc'}],
    },
    {
      title: 'Started Last',
      name: 'startedLast',
      by: [{field: 'start', direction: 'desc'}],
    },
    {
      title: 'Ended First',
      name: 'endedFirst',
      by: [{field: 'end', direction: 'asc'}],
    },
    {
      title: 'Ended Last',
      name: 'endedLast',
      by: [{field: 'end', direction: 'desc'}],
    },
  ],
}
