import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/reactive函数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/reactive%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"reactive 函数\",\"slug\":\"reactive-函数\",\"link\":\"#reactive-函数\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/reactive函数.md\",\"excerpt\":\"<h2>reactive 函数</h2>\\n<blockquote>\\n<p>定义一个对象类型的响应式数据(基本类型不要用它,要用 ref 函数)；reactive 定义的响应式数据是“深层次的”。内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。</p>\\n</blockquote>\\n<div class=\\\"language-vue\\\" data-ext=\\\"vue\\\" data-title=\\\"vue\\\"><pre class=\\\"language-vue\\\"><code><span class=\\\"token comment\\\">&lt;!-- 接收一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象） --&gt;</span>\\nconst 代理对象 = reactive(源对象)\\n</code></pre></div>\"}")
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
