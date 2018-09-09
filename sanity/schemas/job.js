export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{type: 'company'}],
    },
    {
      name: 'title',
      title: 'Job title',
      type: 'localeString',
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
  ],
  preview: {
    select: {
      jobTitle: 'title.en',
      companyName:  'company.name',
    },
    prepare: s => ({
      title: `${s.companyName} — ${s.jobTitle}`
    }),
  },
};
