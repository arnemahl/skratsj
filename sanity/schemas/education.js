export default {
  name: 'education',
  title: 'Utdannelse',
  type: 'document',
  fields: [
    {
      name: 'institutionName',
      title: 'Institusjon',
      type: 'string',
    },
    {
      name: 'degree',
      title: 'Oppnådd grad',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
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
      inst: 'institutionName',
      deg: 'degree',
      start: 'start',
      end: 'end',
    },
    prepare({ inst, deg, start, end }) {
      return {
        title: `${inst}, ${deg}`,
        subtitle: `${start} - ${end}`,
      };
    },
  }
}
