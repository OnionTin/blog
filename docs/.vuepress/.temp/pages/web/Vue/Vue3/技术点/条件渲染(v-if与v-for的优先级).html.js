import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/条件渲染(v-if与v-for的优先级).html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93(v-if%E4%B8%8Ev-for%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7).html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"条件渲染(v-if 与 v-for 的优先级)\",\"slug\":\"条件渲染-v-if-与-v-for-的优先级\",\"link\":\"#条件渲染-v-if-与-v-for-的优先级\",\"children\":[{\"level\":3,\"title\":\"为什么 v-for 优先级更高？\",\"slug\":\"为什么-v-for-优先级更高\",\"link\":\"#为什么-v-for-优先级更高\",\"children\":[]},{\"level\":3,\"title\":\"性能考虑\",\"slug\":\"性能考虑\",\"link\":\"#性能考虑\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/条件渲染(v-if与v-for的优先级).md\",\"excerpt\":\"<h2>条件渲染(v-if 与 v-for 的优先级)</h2>\\n<blockquote>\\n<p>v-if 和 v-for 都是常用的指令，用于条件渲染和列表渲染。它们在使用时有明确的优先级规则:</p>\\n<p>v-for 有比 v-if 更高的优先级。</p>\\n<p>当 v-if 和 v-for 同时出现在同一个元素上时，v-for 会被首先处理。</p>\\n</blockquote>\\n<h3>为什么 v-for 优先级更高？</h3>\\n<blockquote>\\n<p>Vue 官方文档中提到，这是为了优化性能。因为 v-for 创建的每个节点都会执行 v-if，如果 v-if 在 v-for 之前解析，那么它将多次运行，这会降低效率。所以 Vue 设计为先进行 v-for 循环，然后对每个循环项应用 v-if 条件。\\nv-for: 首先遍历 items 数组，为每个元素创建一个&lt;li&gt;元素。\\nv-if: 然后对每个生成的&lt;li&gt;元素应用 v-if 条件，只有当 item.isVisible 为 true 时，该元素才会被渲染。</p>\\n</blockquote>\"}")
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
