import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/HashRouter.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/HashRouter.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"HashRouter(利用 hash 实现路由切换)\",\"slug\":\"hashrouter-利用-hash-实现路由切换\",\"link\":\"#hashrouter-利用-hash-实现路由切换\",\"children\":[{\"level\":3,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":3,\"title\":\"安装\",\"slug\":\"安装\",\"link\":\"#安装\",\"children\":[]},{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]},{\"level\":3,\"title\":\"配置\",\"slug\":\"配置\",\"link\":\"#配置\",\"children\":[]},{\"level\":3,\"title\":\"HashRouter 与 BrowserRouter 的比较\",\"slug\":\"hashrouter-与-browserrouter-的比较\",\"link\":\"#hashrouter-与-browserrouter-的比较\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/HashRouter.md\",\"excerpt\":\"<h2>HashRouter(利用 hash 实现路由切换)</h2>\\n<blockquote>\\n<p><code>HashRouter</code> 是 React Router v6 中用于在 Web 浏览器中创建路由的组件之一，特别适合在不支持或不需要使用 HTML5 History API 的情况下使用。它通过 URL 的 hash（即 URL 中 <code>#</code> 后面的部分）来管理路由状态，这意味着路由路径不会发送到服务器。</p>\\n</blockquote>\\n<h3>特点</h3>\\n<ul>\\n<li><strong>无服务器依赖</strong>：<code>HashRouter</code> 不依赖服务器配置，适用于那些你无法控制服务器配置的情况。</li>\\n<li><strong>简单易用</strong>：只需将应用包裹在 <code>HashRouter</code> 组件内，即可实现路由功能。</li>\\n<li><strong>兼容性好</strong>：几乎所有浏览器都支持 URL hash，因此 <code>HashRouter</code> 在浏览器兼容性方面表现良好。</li>\\n</ul>\"}")
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
