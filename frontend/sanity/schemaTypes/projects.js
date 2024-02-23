export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'github',
      title: 'Github Link',
      type: 'url',
    },
    {
      name: 'live',
      title: 'Live Link',
      type: 'boolean',
      description: 'Indicates if the project has a live website',
    },
    {
      name: 'redirect',
      title: 'Redirect URL',
      description: 'Internal URL where this project page redirects to',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'readMoreImg',
      title: 'Read More Image',
      type: 'image',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Hex code or gradient code for text color',
    },
    {
      name: 'preview',
      title: 'Preview Text',
      type: 'text',
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'object',
      fields: [
        {
          name: 'overview',
          title: 'Overview',
          type: 'text',
        },
        {
          name: 'technologies',
          title: 'Technologies Used',
          type: 'text',
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
        },
        {
          name: 'devpost',
          title: 'Devpost Link',
          type: 'string',
        },
        {
          name: 'award',
          title: 'Award',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Award Text',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Award Link',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}
