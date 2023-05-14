export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6383210848c65532a5f7946c',
                  title: 'Sanity Studio',
                  name: 'gatsby-sanity-portfolio-studio',
                  apiId: '640699c9-c3dd-4df5-b8dd-0a61ff34bb06'
                },
                {
                  buildHookId: '63832109d901c53aad13881f',
                  title: 'Portfolio Website',
                  name: 'gatsby-sanity-portfolio-web',
                  apiId: '4574dd70-f4f4-4706-806b-b29b9450cfd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dev-mohib/gatsby-sanity-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-sanity-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
