import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/计算属性的缓存机制与事件的区别.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E4%B8%8E%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%8C%BA%E5%88%AB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"计算属性的缓存机制与事件的区别\",\"slug\":\"计算属性的缓存机制与事件的区别\",\"link\":\"#计算属性的缓存机制与事件的区别\",\"children\":[{\"level\":3,\"title\":\"计算属性（Computed Properties）\",\"slug\":\"计算属性-computed-properties\",\"link\":\"#计算属性-computed-properties\",\"children\":[]},{\"level\":3,\"title\":\"特点：\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":3,\"title\":\"事件（Events）\",\"slug\":\"事件-events\",\"link\":\"#事件-events\",\"children\":[]},{\"level\":3,\"title\":\"特点：\",\"slug\":\"特点-1\",\"link\":\"#特点-1\",\"children\":[]},{\"level\":3,\"title\":\"区别\",\"slug\":\"区别\",\"link\":\"#区别\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/计算属性的缓存机制与事件的区别.md\",\"excerpt\":\"<h2>计算属性的缓存机制与事件的区别</h2>\\n<blockquote>\\n<p>计算属性（Computed Properties）和事件（Events）是两个不同的概念，它们在功能和用途上有所区别。下面分别介绍它们的特点和区别。</p>\\n</blockquote>\\n<h3>计算属性（Computed Properties）</h3>\\n<blockquote>\\n<p>计算属性是基于它们的响应式依赖进行缓存的属性。只有当计算属性依赖的响应式数据发生变化时，计算属性才会重新计算。这意味着计算属性是惰性的：只有在需要时它们才会计算。</p>\\n</blockquote>\\n<h3>特点：</h3>\\n<ol>\\n<li>缓存机制： 计算属性的结果会被缓存，只有当依赖的数据发生变化时，缓存才会失效，然后重新计算。</li>\\n<li>响应式： 计算属性是响应式的，它们会根据依赖的数据变化自动更新。</li>\\n<li>无副作用： 计算属性应该只依赖于它们的响应式输入，不应该产生副作用。</li>\\n</ol>\"}")
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
