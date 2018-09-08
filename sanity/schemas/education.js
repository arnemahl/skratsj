export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'institutionName',
      title: 'Institution',
      type: 'localeString',
    },
    {
      name: 'degree',
      title: 'Degree',
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
