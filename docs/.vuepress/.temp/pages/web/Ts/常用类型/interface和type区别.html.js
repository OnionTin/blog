import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/interface和type区别.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/interface%E5%92%8Ctype%E5%8C%BA%E5%88%AB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"interface 和 type 区别\",\"slug\":\"interface-和-type-区别\",\"link\":\"#interface-和-type-区别\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/interface和type区别.md\",\"excerpt\":\"<h2>interface 和 type 区别</h2>\\n<blockquote>\\n<p>类型别名和接口非常相似，在很多情况下你可以在它们之间自由选择。interface 的几乎所有功能都在 type 中可用，主要区别在于无法重新打开类型以添加 ​​ 新属性，而接口始终可扩展。</p>\\n</blockquote>\\n\"}")
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
