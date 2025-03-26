import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
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
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
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
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },
});
