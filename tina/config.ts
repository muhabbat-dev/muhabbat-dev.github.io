import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: process.env.PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
	token: process.env.TINA_TOKEN, // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Blog Post',
				path: 'src/content/blog',
				format: 'mdx',
				fields: [
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post'
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select an category for this post',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						label: 'Description',
						required: true,
						name: 'description',
						description: 'A short description of the post'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Publication Date',
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'SButton',
						isBody: true,
						templates: [
							// Custom Components
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					},
					{
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'keywords',
						required: true,
						label: 'Keywords',
						description: 'Keywords for meta tag',
						list: true
						// ui: {
						// 	component: 'tags'
						// }
					}
				]
			},
			{
        name: "project",
        label: "Projects",
        path: "content/projects",
        fields: [
          {
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post',
					},
          {
            type: "image",
            list: true,
            name: "Images",
            description: "add all other images",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isTitle: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "string",
            name: "link",
            required: false,
          }
        ],
      },
      {
        name: "experience",
        label: "Experience",
        path: "content/experience",
        fields: [
          {
            type: "string",
            name: "role",
            label: "Role",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "company",
            label: "Company",
            required: true,
          },
          {
            type: "datetime",
            name: "startFrom",
            label: "Starting From",
            required: true,
          },
          {
            type: "datetime",
            name: "endedTo",
            label: "Ended To",
            required: false,
          },
          {
            type: "boolean",
            name: "isWorking",
            label: "Currently Working?",
            required: false,
          },
          {
            type: 'image',
            name: 'logo',
            label: 'Logo',
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          }
        ],
      },
      {
        name: "products",
        label: "Products",
        path: "content/products",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          }
        ],
      },
      {
        label: 'Site Settings',
        name: 'siteSettings',
        path: 'content/settings',
        format: 'json',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            description: "Site Title"
          },
          {
            type: 'string',
            label: 'Email',
            name: 'email',
            description: "Email address"
          },
          {
            type: 'string',
            label: 'Linkedin',
            name: 'linkedin',
            description: "Linkedin profile URL"
          },
          {
            type: 'object',
            name: "metadata",
            list: true,
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Meta name'
              },
              {
                type: 'string',
                name: 'content',
                label: 'Meta content'
              }
            ]
          },
		  {
            type: 'object',
            name: "menu",
            list: true,
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Name'
              },
              {
                type: 'string',
                name: 'path',
                label: 'Path'
              }
            ]
          },
		  {
            type: 'object',
            name: "experience",
            list: true,
            fields: [
              {
                type: 'string',
                name: 'dates',
                label: 'Date Duration'
              },
              {
                type: 'string',
                name: 'role',
                label: 'Role'
              },
			  {
                type: 'string',
                name: 'company',
                label: 'Company'
              },
			  {
                type: 'string',
                name: 'description',
                label: 'Description'
              },
			  {
                type: 'string',
                name: 'logo',
                label: 'Logo'
              },
            ]
          },
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },]
	}
})
