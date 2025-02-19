import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/reactive和ref对比.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/reactive%E5%92%8Cref%E5%AF%B9%E6%AF%94.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ref 与 reactive 对比\",\"slug\":\"ref-与-reactive-对比\",\"link\":\"#ref-与-reactive-对比\",\"children\":[{\"level\":3,\"title\":\"从定义数据角度对比:\",\"slug\":\"从定义数据角度对比\",\"link\":\"#从定义数据角度对比\",\"children\":[]},{\"level\":3,\"title\":\"从原理角度对比:\",\"slug\":\"从原理角度对比\",\"link\":\"#从原理角度对比\",\"children\":[]},{\"level\":3,\"title\":\"从使用角度对比:\",\"slug\":\"从使用角度对比\",\"link\":\"#从使用角度对比\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/reactive和ref对比.md\",\"excerpt\":\"<h2>ref 与 reactive 对比</h2>\\n<h3>从定义数据角度对比:</h3>\\n<ul>\\n<li><code>ref</code> 用来定义：基本类型数据。</li>\\n<li><code>reactive</code> 用来定义：对象（或数组）类型数据。</li>\\n<li><strong>备注</strong>: <code>ref</code> 也可以用来定义对象（或数组）类型数据，它内部会自动通过 <code>reactive</code> 转为代理对象。</li>\\n</ul>\\n<h3>从原理角度对比:</h3>\\n<ul>\\n<li><code>ref</code> 通过 <code>Object.defineProperty()</code> 的 <code>get</code> 与 <code>set</code> 来实现响应式（数据劫持）。</li>\\n<li><code>reactive</code> 通过使用 <code>Proxy</code> 来实现响应式（数据劫持），并通过 <code>Reflect</code> 操作源对象内部的数据。</li>\\n</ul>\"}")
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
