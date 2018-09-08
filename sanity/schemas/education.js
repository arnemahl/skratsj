export default {
  name: 'education',
  title: 'Utdannelse',
  type: 'document',
  fields: [
    {
      name: 'institutionName',
      title: 'Institusjon',
      type: 'localeString',
    },
    {
      name: 'degree',
      title: 'Oppnådd grad',
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
      inst: 'institutionName.en',
      deg: 'degree.en',
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
