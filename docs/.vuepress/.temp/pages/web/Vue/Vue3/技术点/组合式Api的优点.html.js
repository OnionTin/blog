import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/组合式Api的优点.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%BB%84%E5%90%88%E5%BC%8FApi%E7%9A%84%E4%BC%98%E7%82%B9.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"组合式 Api 可以像一样 react-hooks 拆分\",\"slug\":\"组合式-api-可以像一样-react-hooks-拆分\",\"link\":\"#组合式-api-可以像一样-react-hooks-拆分\",\"children\":[{\"level\":3,\"title\":\"组合式 API\",\"slug\":\"组合式-api\",\"link\":\"#组合式-api\",\"children\":[]},{\"level\":3,\"title\":\"React Hooks\",\"slug\":\"react-hooks\",\"link\":\"#react-hooks\",\"children\":[]},{\"level\":3,\"title\":\"对比\",\"slug\":\"对比\",\"link\":\"#对比\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/组合式Api的优点.md\",\"excerpt\":\"<h2>组合式 Api 可以像一样 react-hooks 拆分</h2>\\n<blockquote>\\n<p>Vue 3 引入了组合式 API（Composition API），它提供了一种新的方式来组织和共享代码逻辑。React 则通过 Hooks 提供了类似的能力。以下是对两者的详细对比。</p>\\n</blockquote>\\n<h3>组合式 API</h3>\\n<h4>定义与特点</h4>\\n<p>组合式 API 是 Vue 3 中引入的一套新的 API，允许开发者使用函数的方式组织组件代码。它的核心是 <code>setup</code> 函数，它是组件的入口点，可以返回响应式数据、方法、计算属性等。</p>\"}")
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
