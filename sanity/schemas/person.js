export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Job title/profession',
      type: 'localeString',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'localeText',
    },
    {
      name: 'keyInfo',
      title: 'Key info',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'Location',
          description: 'F.eks. Oslo. Ikke full adresse.',
          type: 'localeString',
        },
        {
          name: 'birthYear',
          title: 'Bith year',
          type: 'string',
        },
        {
          name: 'emailAddress',
          title: 'Email address',
          type: 'string',
        },
        {
          name: 'phoneNumber',
          title: 'Phone number',
          type: 'string',
        },
        {
          name: 'websiteUrl',
          title: 'Website',
          type: 'url',
        },
        {
          name: 'linkedInHandle',
          title: 'LinkedIn',
          description: 'For example arnemahl',
          type: 'string',
        },
        {
          name: 'githubHandle',
          title: 'GitHub',
          description: 'For example arnemahl',
          type: 'string',
        },
        {
          name: 'twitterHandle',
          title: 'Twitter handle',
          description: 'For example @arnemahl',
          type: 'string',
        },
        {
          name: 'instagramHandle',
          title: 'Instagram handle',
          description: 'For example @iluvk4tz',
          type: 'string',
        },
      ],
    },
    {
      name: 'expertise',
      title: 'Expertise',
      type: 'array',
      of: [{
        name: 'area',
        title: 'Area',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Name of area',
            description: 'E.g. frontend',
            type: 'string',
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
        ],
      }],
    },
    {
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'job'}],
      }],
    },
    {
      name: 'professionalProjects',
      title: 'Professional projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'professionalProject'}],
      }],
    },
    {
      name: 'personalProjects',
      title: 'Personal projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'personalProject'}],
      }],
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{
        type: 'reference',
        to: {type: 'education'},
      }],
    },
    {
      name: 'volunteerWorkPositions',
      title: 'Volunteer work positions',
      type: 'array',
      of: [{
        type: 'reference',
        to: {type: 'volunteerWorkPosition'},
      }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
