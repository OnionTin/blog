import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/TypeScript.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/TypeScript.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"TypeScript\",\"slug\":\"typescript\",\"link\":\"#typescript\",\"children\":[]}],\"git\":{\"updatedTime\":1727164099000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/TypeScript.md\",\"excerpt\":\"<h2>TypeScript</h2>\\n<blockquote>\\n<p>ts 是 js 的超级，在满足所有的 js 语法基础上，又增加了类型判断等特性，通过 tsc 编译成我们想要的 js 版本</p>\\n</blockquote>\\n\"}")
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
