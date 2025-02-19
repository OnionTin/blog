import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"tagline\":\"分享我的积累，祝你学习进步\",\"features\":[{\"title\":\"前端\",\"details\":\"Vue2、Vue3、React等相关技术分享，包括各语法的通信方式和常用Api详解。\"},{\"title\":\"后端\",\"details\":\"目前只有Java部分，包括SpringBoot、SpringCloud等相关技术分享，后期视情况可能增加有关Node或Python相关内容。\"},{\"title\":\"Ui相关\",\"details\":\"涵盖了各类UI设计相关的网站的一些网站，适用于查找素材或者设计模板。\"}],\"footer\":\"MIT Licensed | Copyright © 2024-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
