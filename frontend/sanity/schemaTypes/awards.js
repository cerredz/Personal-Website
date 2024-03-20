export default {
  name: 'awards',
  title: 'Awards',
  type: 'document',
  fields: [
    {
      name: 'award',
      title: 'Award',
      type: 'string',
    },
    {
      name: 'event',
      title: 'Event',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'readMoreImage',
      title: 'Read More Image',
      type: 'image',
    },
    {
      name: 'github',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'devpost',
      title: 'Devpost Link',
      type: 'url',
    },
    {
      name: 'preview',
      title: 'Preview text',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'string',
    },
  ],
}
