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
                  buildHookId: '5e96fe0363579d0234276b28',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wt6jcrux',
                  apiId: 'b2adb60b-2047-464c-8294-3e9644347250'
                },
                {
                  buildHookId: '5e96fe046f3ed401831ffe67',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zog48j24',
                  apiId: '0711fc5d-f8da-4ee2-b044-e38cce751c5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Promisemasimba/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zog48j24.netlify.com', category: 'apps'}
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
