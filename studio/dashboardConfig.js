export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '620e4de3a29c8e14093fe1b4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio-hhewfwkz',
                  apiId: 'dbd4c228-35ef-4df7-89c6-3d87692a4e9d'
                },
                {
                  buildHookId: '620e4de4f285c81162b1b9f0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-web-onsp7wvh',
                  apiId: '592ee4d2-322b-49a3-8fad-955d57441cad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bobeta/sanity-nextjs-landing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-web-onsp7wvh.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
