import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/BrowserRouter.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/BrowserRouter.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"BrowserRouter(利用 h5 Api 实现路由切换)\",\"slug\":\"browserrouter-利用-h5-api-实现路由切换\",\"link\":\"#browserrouter-利用-h5-api-实现路由切换\",\"children\":[{\"level\":3,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":3,\"title\":\"组件\",\"slug\":\"组件\",\"link\":\"#组件\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/BrowserRouter.md\",\"excerpt\":\"<h2>BrowserRouter(利用 h5 Api 实现路由切换)</h2>\\n<blockquote>\\n<p><code>BrowserRouter</code> 是 React Router 库中的一个组件，用于在 React 应用程序中创建单页面应用程序（SPA）的路由。它使用 HTML5 的 <code>history</code> API 来实现页面的导航，不会触发页面的重新加载。</p>\\n</blockquote>\\n<h3>特点</h3>\\n<ul>\\n<li><strong>无需刷新</strong>：利用 <code>history</code> API 的 <code>pushState</code> 和 <code>replaceState</code> 方法，实现无刷新的路由切换。</li>\\n<li><strong>动态路由匹配</strong>：可以动态地匹配 URL 路径，并渲染对应的组件。</li>\\n<li><strong>嵌套路由</strong>：支持嵌套路由，方便创建复杂的页面结构。</li>\\n<li><strong>链接（Link）组件</strong>：提供了 <code>&lt;Link&gt;</code> 组件，用于创建可导航的链接，与普通 <code>&lt;a&gt;</code> 标签不同，它不会重新加载页面。</li>\\n</ul>\"}")
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
