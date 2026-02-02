import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Portfolio',
  description: '项目 / 论文 / 荣誉 / 简历',
  base: '/portfolio/',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Projects', link: '/projects' },
      { text: 'Publications', link: '/publications' },
      { text: 'Honors', link: '/honors' },
      { text: 'CV', link: '/cv' },
      { text: 'Gateway', link: 'https://chenyuheee.github.io/' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenyuheee' }]
  }
})
