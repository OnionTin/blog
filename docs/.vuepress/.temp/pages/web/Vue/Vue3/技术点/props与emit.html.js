import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/props与emit.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/props%E4%B8%8Eemit.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"props 与 emit\",\"slug\":\"props-与-emit\",\"link\":\"#props-与-emit\",\"children\":[{\"level\":3,\"title\":\"## Props\",\"slug\":\"props\",\"link\":\"#props\",\"children\":[]},{\"level\":3,\"title\":\"Emit\",\"slug\":\"emit\",\"link\":\"#emit\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/props与emit.md\",\"excerpt\":\"<h2>props 与 emit</h2>\\n<blockquote>\\n<p>在 Vue 3 中，组件之间的通信是非常重要的，尤其是父子组件之间的数据传递。<code>props</code> 和 <code>emit</code> 是实现这种通信的两个核心机制。</p>\\n</blockquote>\\n<h3>## Props</h3>\\n<blockquote>\\n<p><code>props</code> 是父组件向子组件传递数据的一种方式。在 Vue 3 中，你可以使用 <code>defineProps</code> 来定义组件接收的 <code>props</code>。</p>\\n</blockquote>\"}")
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
