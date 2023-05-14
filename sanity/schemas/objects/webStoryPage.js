export default {
    title : 'Story Page',
    name : 'storyPage',
    type : 'object',
    fields : [
        {
            name : 'storyHeader',
            title : 'Story Header',
            type : 'string'
        },
        {
            name : 'paragraph',
            title : 'Paragraph',
            type : 'string'
        },
        {
            name : 'mediaType',
            title : 'mediaType',
            type : 'string',
            options :{
                list :  [{title : 'Video', value : 'video'},{title : 'Image', value : 'image'}]
            },
        },
        {
            title : 'Source File',
            name : 'mediaSource',
            type : 'file'
        }
    ]
}