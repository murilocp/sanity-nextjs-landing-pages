export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60b0e681ea11ec071aecda29',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xr4qo2c7',
                  apiId: '1ce51a18-1deb-46ff-a5f7-a043d3263212'
                },
                {
                  buildHookId: '60b0e681518660f0c7fa772c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zmx281s1',
                  apiId: 'ceecac9b-4b1f-4c5c-bb86-3a94903f1a5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/murilocp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zmx281s1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
