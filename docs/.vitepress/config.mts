import { defineConfig } from 'vitepress'

// GitHubのロボット（GitHub Actions）が動いているときだけ、自動でリポジトリ名にする設定
// @ts-ignore
const base = process.env.GITHUB_ACTIONS ? '/vitepress-site/' : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Sample P",
  description: "Sample dayo",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: base, // 自動判定された設定をここに適応します
  
})
