import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/ref函数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/ref%E5%87%BD%E6%95%B0.html\",\"title\":\"ref 函数\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/ref函数.md\",\"excerpt\":\"\\n<blockquote>\\n<p>定义一个响应式的数据。包含响应式数据的引用对象（reference 对象，简称 ref 对象）。</p>\\n</blockquote>\\n<ul>\\n<li><strong>备注</strong>:\\n<ul>\\n<li>接收的数据可以是基本类型，也可以是对象类型。</li>\\n<li>基本类型的数据: 响应式依然是靠<code>Object.defineProperty()</code>的<code>get</code>与<code>set</code>完成的。</li>\\n<li>对象类型的数据: 内部“求助”了 Vue 3.0 中的一个新函数<code>reactive</code>函数。</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
