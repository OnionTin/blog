import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/index.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react\",\"slug\":\"react\",\"link\":\"#react\",\"children\":[]}],\"git\":{\"updatedTime\":1728637409000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/README.md\",\"excerpt\":\"<h2>react</h2>\\n<p><a href=\\\"https://juejin.cn/post/7344536653463207973?searchId=20241028100534501A3668BA5B77E9B947\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">react 和 vue 对比,细致全面</a>\\n;</p>\\n\"}")
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
