import { defineConfig } from "vitepress";

import escookConfig from "@escook/vitepress-theme/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: escookConfig,
  title: "yinxing233的笔记本",
  description: "Record learning",
  outDir: "docs", //打包输出的目录
  base: "/notes/", //部署到github pages的路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "yinxing233的笔记本",
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/frontend" },
      { text: "后端", link: "/backend" },
      { text: "408", link: "/408" },
      { text: "架构", link: "/architect" },
      { text: "医学", link: "/medicine" },
    ],
    sidebar: {
      // 当用户在 `前端` 目录页面下将会展示这个侧边栏
      "/frontend/": [
        {
          text: "介绍",
          items: [{ text: "目的", link: "/frontend/" }],
        },
        {
          text: "HTML",
          items: [{ text: "HTML基础", link: "/frontend/html" }],
        },
        {
          text: "CSS",
          items: [{ text: "CSS", link: "/frontend/css" }],
        },
        {
          text: "JavaScript",
          items: [
            { text: "JavaScript基础", link: "/frontend/js01" },
            { text: "JavaScript进阶", link: "/frontend/js02" },
            { text: "JavaScript高级", link: "/frontend/js03" },
          ],
        },
        {
          text: "TypeScript",
          items: [{ text: "TypeScript", link: "/frontend/ts" }],
        },
        {
          text: "Vue",
          items: [
            { text: "Vue源码", link: "/frontend/vue01.md" },
            { text: "Vue周边生态", link: "/frontend/vue02.md" },
          ],
        },
        {
          text: "工程化",
          items: [
            { text: "Vite", link: "/frontend/vite.md" },
            { text: "Webpack", link: "/frontend/webpack.md" },
          ],
        },
      ],

      // 当用户在 `后端` 目录页面下将会展示这个侧边栏
      "/backend/": [
        {
          text: "后端知识",
          items: [{ text: "介绍", link: "/backend/" }],
        },
        {
          text: "Node",
          items: [
            { text: "Node.js介绍", link: "/backend/node01" },
            { text: "Node.js全局变量", link: "/backend/node02" },
            { text: "CSR/SSR/SEO", link: "/backend/node03" },
            { text: "Node.js Path模块", link: "/backend/node04" },
            { text: "Node.js OS模块", link: "/backend/node05" },
            { text: "Node.js Process", link: "/backend/node06" },
            { text: "Node.js Child Process", link: "/backend/node07" },
            { text: "ffmpeg", link: "/backend/node08" },
            { text: "events事件触发器", link: "/backend/node09" },
            { text: "util工具", link: "/backend/node10" },
          ],
        },
        {
          text: "Express",
          items: [{ text: "Express基础", link: "/backend/express" }],
        },
        {
          text: "数据库",
          items: [{ text: "数据库基础", link: "/backend/database" }],
        },
      ],

      // 当用户在 `408` 目录页面下将会展示这个侧边栏
      "/408/": [
        {
          text: "408知识",
          items: [{ text: "介绍", link: "/408/" }],
        },
        {
          text: "数据结构与算法",
          items: [{ text: "数据结构与算法", link: "/408/408-dsa" }],
        },
        {
          text: "操作系统",
          items: [{ text: "操作系统", link: "/408/408-os" }],
        },
        {
          text: "计算机组成原理",
          items: [{ text: "计算机组成原理", link: "/408/408-coa" }],
        },
        {
          text: "计算机网络",
          items: [
            { text: "计算机网络", link: "/408/408-cn01" },
            { text: "http请求类型", link: "/408/408-cn02" },
            { text: "http / https", link: "/408/408-cn03" },
            { text: "http 各版本介绍", link: "/408/408-cn04" },
            { text: "TCP / UDP 协议", link: "/408/408-cn05" },
            { text: "CDN", link: "/408/408-cn06" },
            { text: "DNS", link: "/408/408-cn07" },
          ],
        },
      ],

      // 当用户在 `架构` 目录页面下将会展示这个侧边栏
      "/architect/": [
        {
          text: "架构知识",
          items: [{ text: "介绍", link: "/architect/" }],
        },
        {
          text: "包管理器",
          items: [
            { text: "npm", link: "/architect/npm" },
            { text: "pnpm", link: "/architect/pnpm" },
          ],
        },
        {
          text: "CI / CD",
          items: [{ text: "CI / CD", link: "/architect/cicd" }],
        },
        {
          text: "Monorepo",
          items: [
            { text: "Monorepo介绍", link: "/architect/monorepo01" },
            { text: "Monorepo实施", link: "/architect/monorepo02" },
          ],
        },
      ],
      "/medicine/": [
        {
          text: "医学知识",
          items: [{ text: "医学知识介绍", link: "/medicine/" }],
        },
        {
          text: "呼吸道疾病的防治",
          items: [
            { text: "呼吸道疾病的治疗", link: "/medicine/treatment" },
            { text: "呼吸道疾病的防护", link: "/medicine/prevention" },
          ],
        },
        {
          text: "新冠后遗症",
          items: [{ text: "新冠后遗症的治疗", link: "/medicine/sequelae" }],
        },
      ],
    },

    //搜索栏
    search: {
      provider: "local",
    },

    //最后更新时间
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/yinxing233" }],
    footer: {
      copyright: "Copyright © 2023-present yinxing233",
    },
  },
  vite: {
    ssr: {
      noExternal: ["@excook/vitepress-theme", "vitepress"],
    },
  },
});