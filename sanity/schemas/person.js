export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Yrkestittel',
      description: 'Yrkestittel og evt. spesialisering, evt. innen et felt',
      type: 'string',
    },
    {
      name: 'introduction',
      title: 'Introduksjon',
      type: 'text',
    },
    {
      name: 'keyInfo',
      title: 'Nøkkelinfo',
      type: 'object',
      fields: [
        {
          name: 'recidence',
          title: 'Bosted',
          description: 'F.eks. Oslo. Ikke full adresse.',
          type: 'string',
        },
        {
          name: 'birthYear',
          title: 'Fødselsår',
          type: 'string',
        },
        {
          name: 'emailAddress',
          title: 'E-post',
          type: 'string',
        },
        {
          name: 'phoneNumber',
          title: 'Telefonnummer',
          type: 'string',
        },
        {
          name: 'website',
          title: 'Nettside',
          description: 'F.eks. hjemmeside eller blogg',
          type: 'url',
        },
        {
          name: 'linkedInUrl',
          title: 'LinkedIn',
          description: 'URL til LinkedIn-profil',
          type: 'url',
        },
        {
          name: 'twitterHandle',
          title: 'Twitter',
          description: 'F.eks. @realDonaldTrump',
          type: 'string',
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  }
}
