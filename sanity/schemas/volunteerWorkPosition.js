export default {
  name: 'volunteerWorkPosition',
  title: 'Frivillige verv',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      description: 'Slå sammen feltene over: <Verv> [preposition] <Organisasjon>',
      type: 'localeString',
    },
    {
      name: 'organizationName',
      title: 'Organisasjon',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Verv',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'localeText',
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
