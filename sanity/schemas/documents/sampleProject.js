import {format,parseISO} from 'date-fns'
import projectTags from '../objects/projectTags'

export default {
  name: 'sampleProject',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name : 'bgColor',
      title : 'Background Color',
      type : 'string',
      description : 'Use tailwindcss color codes only'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to schedule projects where you show them',
      type: 'datetime'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'simplePortableText'
    },
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'projectMember'}]
    },
    {
      name: 'startedAt',
      title: 'Started at',
      type: 'datetime'
    },
    {
      name: 'endedAt',
      title: 'Ended at',
      type: 'datetime'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'figure'
    },
    {
      title : 'Project URL',
      name : 'projectUrl',
      type : 'url'
    },
    {
      name : 'gallerySlider',
      title : 'Gallery Slider',
      type : 'array',
      of : [
        {
          title : 'Images',
          type : 'mainImage'
        }
    ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name : 'tags',
      title : 'Tags',
      type : 'array',
      of : [{
        title : 'Tag',
        name : 'tag',
        type : 'string',
        options : {
          list : projectTags
        }
      }],
      validation : Rule => Rule.unique()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'projectPortableText'
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sampleProject'}}],
      validation : Rule => Rule.unique()
    }
  ],
  initialValue: () => ({
    bgColor: 'bg-blue-700'
  }),
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(parseISO(publishedAt), 'yyyy/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
