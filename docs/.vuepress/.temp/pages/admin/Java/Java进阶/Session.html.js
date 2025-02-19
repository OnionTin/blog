import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Session.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Session.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Session\",\"slug\":\"session\",\"link\":\"#session\",\"children\":[{\"level\":3,\"title\":\"1. 什么是 Session\",\"slug\":\"_1-什么是-session\",\"link\":\"#_1-什么是-session\",\"children\":[]},{\"level\":3,\"title\":\"浏览器关闭服务端没有关闭会发生什么情况\",\"slug\":\"浏览器关闭服务端没有关闭会发生什么情况\",\"link\":\"#浏览器关闭服务端没有关闭会发生什么情况\",\"children\":[]},{\"level\":3,\"title\":\"重新打开浏览器依然能获取到 JSESSIONID\",\"slug\":\"重新打开浏览器依然能获取到-jsessionid\",\"link\":\"#重新打开浏览器依然能获取到-jsessionid\",\"children\":[]},{\"level\":3,\"title\":\"服务器关闭浏览器没有关闭会发生什么情况\",\"slug\":\"服务器关闭浏览器没有关闭会发生什么情况\",\"link\":\"#服务器关闭浏览器没有关闭会发生什么情况\",\"children\":[]},{\"level\":3,\"title\":\"session 消毁的情况\",\"slug\":\"session-消毁的情况\",\"link\":\"#session-消毁的情况\",\"children\":[]},{\"level\":3,\"title\":\"session 过期时间\",\"slug\":\"session-过期时间\",\"link\":\"#session-过期时间\",\"children\":[]},{\"level\":3,\"title\":\"Session 原理\",\"slug\":\"session-原理\",\"link\":\"#session-原理\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719328568000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Session.md\",\"excerpt\":\"<h2>Session</h2>\\n<h3>1. 什么是 Session</h3>\\n<blockquote>\\n<p>Session 是域对象，范围在一次会话之间；Session 是服务器端的一种数据存储机制，用来跟踪用户的状态，这个机制是依赖于 Cookie 的。</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>域对象三大方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>setAttribute(String name, Object value)</td>\\n<td>设置数据</td>\\n</tr>\\n<tr>\\n<td>getAttribute(String name)</td>\\n<td>获取数据</td>\\n</tr>\\n<tr>\\n<td>removeAttribute(String name)</td>\\n<td>移除数据</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
