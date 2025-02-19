import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/pinia/持久pinia.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/%E6%8C%81%E4%B9%85pinia.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"持久化 pinia\",\"slug\":\"持久化-pinia\",\"link\":\"#持久化-pinia\",\"children\":[{\"level\":3,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":3,\"title\":\"持久化插件\",\"slug\":\"持久化插件\",\"link\":\"#持久化插件\",\"children\":[]},{\"level\":3,\"title\":\"pinia-plugin-persist\",\"slug\":\"pinia-plugin-persist\",\"link\":\"#pinia-plugin-persist\",\"children\":[]},{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":3,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":3,\"title\":\"整体案例\",\"slug\":\"整体案例\",\"link\":\"#整体案例\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/pinia/持久pinia.md\",\"excerpt\":\"<h2>持久化 pinia</h2>\\n<h3>介绍</h3>\\n<blockquote>\\n<p>Pinia 提供了插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。</p>\\n</blockquote>\\n<h3>持久化插件</h3>\\n<blockquote>\\n<p>Pinia 提供了一个插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。其中，持久化插件可以将 Pinia 的状态持久化到本地存储中，比如 localStorage 或者 sessionStorage，这样即使页面刷新或者关闭，状态也不会丢失。</p>\\n</blockquote>\"}")
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
