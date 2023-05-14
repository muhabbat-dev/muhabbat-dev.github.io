import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdOutlineHistoryToggleOff } from "react-icons/md";
import { GrBlog } from 'react-icons/gr'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { FaUserEdit } from 'react-icons/fa'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'sampleProject', 'siteSettings', 'blogPost', 'author', 'webStory'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Projects')
        .schemaType('sampleProject')
        .child(S.documentTypeList('sampleProject').title('Projects'))
        .icon(AiOutlineFundProjectionScreen),
      S.listItem()
      .title('Blogs')
      .schemaType('blogPost')
      .child(S.documentTypeList('blogPost').title('Blog Post'))
      .icon(GrBlog),
      S.listItem()
      .title('Web Story')
      .schemaType('webStory')
      .child(S.documentTypeList('webStory').title('Web Stories'))
      .icon(MdOutlineHistoryToggleOff),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories'))
        .icon(BiCategory),
        S.listItem()
        .title('Author')
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors'))
        .icon(FaUserEdit),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
