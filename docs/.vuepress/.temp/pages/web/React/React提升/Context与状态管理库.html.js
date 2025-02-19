import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/React提升/Context与状态管理库.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/React%E6%8F%90%E5%8D%87/Context%E4%B8%8E%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%BA%93.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Context 与状态管理库\",\"slug\":\"context-与状态管理库\",\"link\":\"#context-与状态管理库\",\"children\":[{\"level\":3,\"title\":\"React Context\",\"slug\":\"react-context\",\"link\":\"#react-context\",\"children\":[]},{\"level\":3,\"title\":\"状态管理库\",\"slug\":\"状态管理库\",\"link\":\"#状态管理库\",\"children\":[]},{\"level\":3,\"title\":\"结合使用\",\"slug\":\"结合使用\",\"link\":\"#结合使用\",\"children\":[]},{\"level\":3,\"title\":\"最佳实践\",\"slug\":\"最佳实践\",\"link\":\"#最佳实践\",\"children\":[]}]}],\"git\":{\"updatedTime\":1728487189000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/React提升/Context与状态管理库.md\",\"excerpt\":\"<!-- @format -->\\n<h2>Context 与状态管理库</h2>\\n<p>React Context 提供了一种在组件树中共享值的方式，而无需显式地通过每个层级传递 props。这使得它成为实现全局状态管理的理想选择，尤其是在与状态管理库结合使用时。</p>\\n<h3>React Context</h3>\\n<p>React Context 允许你创建一个全局的 state，通过<code>Provider</code>组件包裹你的应用，使得状态在整个应用中可访问。通过<code>useContext</code> Hook，你可以在任何组件中轻松地访问和更新这个全局状态。</p>\\n\"}")
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
