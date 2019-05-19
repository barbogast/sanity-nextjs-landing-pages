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
                  buildHookId: '5ce1105797442633661838fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-88i3c5td',
                  apiId: '49bd3da1-8a79-4ec3-a508-1464e33c6771'
                },
                {
                  buildHookId: '5ce11057e40cf1e6e8be157d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bfcvt22e',
                  apiId: '27736c84-09ae-4442-afd0-0120bbd9c0d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/barbogast/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bfcvt22e.netlify.com', category: 'apps'}
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
