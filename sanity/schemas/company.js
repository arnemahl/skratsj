export default {
  name: 'company',
  title: 'Selskap',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  }
}
