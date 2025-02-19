import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/Suspense.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/Suspense.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Suspense\",\"slug\":\"suspense\",\"link\":\"#suspense\",\"children\":[{\"level\":3,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":3,\"title\":\"使用方法\",\"slug\":\"使用方法\",\"link\":\"#使用方法\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]},{\"level\":3,\"title\":\"Vue 3 的 Suspense\",\"slug\":\"vue-3-的-suspense\",\"link\":\"#vue-3-的-suspense\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/Suspense.md\",\"excerpt\":\"<h2>Suspense</h2>\\n<blockquote>\\n<p><code>Suspense</code> 是 React 的一个特性，它允许你在组件加载过程中显示一个备用内容（fallback）。这通常用于异步组件的加载，比如通过 <code>React.lazy</code> 动态导入的组件。</p>\\n</blockquote>\\n<h3>特点</h3>\\n<ul>\\n<li><strong>显示加载状态</strong>：在组件加载过程中展示备用内容，提高用户体验。</li>\\n<li><strong>嵌套使用</strong>：可以在多个层级中使用，以控制更细粒度的加载状态。</li>\\n</ul>\"}")
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
