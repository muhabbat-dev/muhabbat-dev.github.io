export default {
    name: 'webStory',
    type: 'document',
    title: 'Web Story',
    fields: [
      {
        name: 'storyTitle',
        title: 'Story Title',
        type: 'string'
      },
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        description:
          "Some frontends will require a slug to be set to be able to show the post",
        options: {
          source: "storyTitle",
          maxLength: 96,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'storyCover',
        title: 'Story Coversanity ',
        type: 'figure'
      },
      {
        name: 'publisher',
        title: 'Publisher',
        type: 'array',
        of: [{type: 'reference', to: {type: 'author'}}],
        validation : Rule => Rule.max(1)
      },
      {
        name : 'storyPages',
        title : 'Story Pages',
        type : 'array',
        of : [{title : 'Pages', type : 'storyPage'}]
      },
      {
        name: "publishedAt",
        type: "datetime",
        title: "Published at",
        description: "This can be used to schedule post for publishing",
      },
      {
        name : 'readMoreUrl',
        title : 'Read More URL',
        type : 'url'
      },
      {
        title : 'Blog Reference',
        name : 'blogRef',
        type : 'reference',
        to : {type : 'blogPost'},
      }
    ]
  }
  