import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/text/",
  title: "一号机的文档",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: [2, 6], //二级标题与6级标题
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "八股", link: "/" },
      { text: "面试总结", link: "/markdown-examples" },
      {
        text: "视频代码",
        items: [
          { text: "DOM", link: "/front-end/react/" },
          { text: "油猴", link: "/front-end/react/油猴.md" },
        ],
      },
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/131649292?spm_id_from=333.1007.0.0",
      },
    ],
    footer: {
      copyright: "copyright@2024 yihaoji",
    },
  },
});
