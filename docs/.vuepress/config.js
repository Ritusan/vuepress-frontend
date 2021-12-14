module.exports = {
  title: '夏代有工的玉',
  description: 'just write something for my love',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Handbook', link: '/handbook/' },
      { text: 'Pages', link: '/pages/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      // '/',
      // '/guide/',
      // ['/webpack/', 'Explicit link text']
      '/handbook/': [
        {
          title: "chapter1",
          collapsable: true,
          path: "/handbook/chapter1",
        },
        {
          title: "chapter2",
          collapsable: true,
          children: [
            { title: "mian", path: "/handbook/chapter2" },
            { title: "music", path: "/music/" },
          ],
        },
        {
          title: "chapter2",
          collapsable: true,
          children: [
            { title: "内置功能", path: "/handbook/chapter2" },
            { title: "music", path: "/music/" },
          ],
        },
      ],
      '/interview/': [
        {
          title: "Interview",
          collapsable: true,
          path: "/interview/",
        },
        {
          title: "HTML",
          collapsable: true,
          path: "/interview/html",
        },
        {
          title: "CSS",
          collapsable: true,
          path: "/interview/css",
        },
        {
          title: "JavaScript",
          collapsable: true,
          path: "/interview/javascript",
        },
        {
          title: "HTTP",
          collapsable: true,
          path: "/interview/http",
        },
        {
          title: "Vue",
          collapsable: true,
          path: "/interview/vue",
        },
        {
          title: "NodeJs",
          collapsable: true,
          path: "/interview/nodejs",
        },
        {
          title: "webpack",
          collapsable: true,
          path: "/interview/webpack",
        },
        {
          title: "others",
          collapsable: true,
          path: "/interview/others",
        },
        {
          title: "pluses",
          collapsable: true,
          path: "/interview/pluses",
        },
        {
          title: "details",
          collapsable: true,
          path: "/interview/details",
        }
      ]
    }
  }
}