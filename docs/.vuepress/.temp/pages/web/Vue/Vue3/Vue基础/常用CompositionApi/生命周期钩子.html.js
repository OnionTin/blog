import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/生命周期钩子.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Vue 3 生命周期与对应钩子\",\"slug\":\"vue-3-生命周期与对应钩子\",\"link\":\"#vue-3-生命周期与对应钩子\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/生命周期钩子.md\",\"excerpt\":\"<h2>Vue 3 生命周期与对应钩子</h2>\\n<ul>\\n<li><code>beforeCreate</code> ==&gt; <code>setup()</code></li>\\n<li><code>created</code> ==&gt; <code>setup()</code></li>\\n<li><code>beforeMount</code> ==&gt; <code>onBeforeMount</code></li>\\n<li><code>mounted</code> ==&gt; <code>onMounted</code></li>\\n<li><code>beforeUpdate</code> ==&gt; <code>onBeforeUpdate</code></li>\\n<li><code>updated</code> ==&gt; <code>onUpdated</code></li>\\n<li><code>beforeUnmount</code> ==&gt; <code>onBeforeUnmount</code></li>\\n<li><code>unmounted</code> ==&gt; <code>onUnmounted</code></li>\\n</ul>\"}")
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
