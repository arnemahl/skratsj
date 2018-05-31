// Company, Location — Job Title
// MONTH 20XX - PRESENT
// Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.

export default {
  name: 'job',
  title: 'Jobb',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Selskap',
      type: 'reference',
      to: [{type: 'company'}],
    },
    {
      name: 'title',
      title: 'Jobbtittel',
      type: 'string',
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
      title: 'Kort beskrivelse',
      type: 'text',
    },
  ],
  preview: {
    select: {
      jobTitle: 'title',
      companyName:  'company.name',
    },
    prepare: s => ({
      title: `${s.companyName} — ${s.jobTitle}`
    }),
  },
};
