import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/自定义hook.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E8%87%AA%E5%AE%9A%E4%B9%89hook.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"自定义 Hook\",\"slug\":\"自定义-hook\",\"link\":\"#自定义-hook\",\"children\":[{\"level\":3,\"title\":\"自定义 Hook 的优势\",\"slug\":\"自定义-hook-的优势\",\"link\":\"#自定义-hook-的优势\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/自定义hook.md\",\"excerpt\":\"<h2>自定义 Hook</h2>\\n<blockquote>\\n<p>本质上是一个函数，把<code>setup</code>函数中使用的 Composition API 进行了封装。 类似于 Vue 2.x 中的 mixin。</p>\\n</blockquote>\\n<h3>自定义 Hook 的优势</h3>\\n<ul>\\n<li><strong>复用代码</strong>：可以在多个组件之间复用状态逻辑。</li>\\n<li><strong>让<code>setup</code>中的逻辑更清楚易懂</strong>：通过将相关逻辑组织在自定义 Hook 中，使得<code>setup</code>函数更加简洁和可读。</li>\\n</ul>\"}")
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
