import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/组件注册(局部与全局).html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C(%E5%B1%80%E9%83%A8%E4%B8%8E%E5%85%A8%E5%B1%80).html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"组件注册(局部与全局)\",\"slug\":\"组件注册-局部与全局\",\"link\":\"#组件注册-局部与全局\",\"children\":[{\"level\":3,\"title\":\"全局注册\",\"slug\":\"全局注册\",\"link\":\"#全局注册\",\"children\":[]},{\"level\":3,\"title\":\"局部注册\",\"slug\":\"局部注册\",\"link\":\"#局部注册\",\"children\":[]},{\"level\":3,\"title\":\"自动化全局注册\",\"slug\":\"自动化全局注册\",\"link\":\"#自动化全局注册\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/组件注册(局部与全局).md\",\"excerpt\":\"<h2>组件注册(局部与全局)</h2>\\n<blockquote>\\n<p>组件可以全局注册，使得它们可以在应用的任何地方使用；也可以局部注册，使得它们只在一个组件的模板中可用。</p>\\n</blockquote>\\n<h3>全局注册</h3>\\n<blockquote>\\n<p>全局注册的组件可以在应用的任何组件模板中使用。在 Vue 3 中，全局注册可以通过应用实例的<code>.component()</code>方法实现。</p>\\n</blockquote>\\n<h4>使用方法</h4>\\n<blockquote>\\n<p>MyComponent 将全局注册，可以在任何组件的模板中通过&lt;my-component-name&gt;使用。</p>\\n</blockquote>\"}")
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
