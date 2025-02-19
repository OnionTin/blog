import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Cookie.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Cookie.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"会话\",\"slug\":\"会话\",\"link\":\"#会话\",\"children\":[{\"level\":3,\"title\":\"会话的作用\",\"slug\":\"会话的作用\",\"link\":\"#会话的作用\",\"children\":[]},{\"level\":3,\"title\":\"方法\",\"slug\":\"方法\",\"link\":\"#方法\",\"children\":[]},{\"level\":3,\"title\":\"Cookie 能不能写多个 Cookie\",\"slug\":\"cookie-能不能写多个-cookie\",\"link\":\"#cookie-能不能写多个-cookie\",\"children\":[]},{\"level\":3,\"title\":\"Cookie 的 name 值能不能使用中文\",\"slug\":\"cookie-的-name-值能不能使用中文\",\"link\":\"#cookie-的-name-值能不能使用中文\",\"children\":[]},{\"level\":3,\"title\":\"Cookie 的 value 值能不能存储中文\",\"slug\":\"cookie-的-value-值能不能存储中文\",\"link\":\"#cookie-的-value-值能不能存储中文\",\"children\":[]},{\"level\":3,\"title\":\"Cookie 的生命周期\",\"slug\":\"cookie-的生命周期\",\"link\":\"#cookie-的生命周期\",\"children\":[]},{\"level\":3,\"title\":\"Cookie 的携带范围\",\"slug\":\"cookie-的携带范围\",\"link\":\"#cookie-的携带范围\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719328568000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Cookie.md\",\"excerpt\":\"<h2>会话</h2>\\n<blockquote>\\n<p>会话：一次会话就是一次对话，一次交谈，在这次交流中会有很多次请求和响应。只要其中一方断开不谈了，那么会话也就结束了。</p>\\n</blockquote>\\n<blockquote>\\n<p>Cookie: 客户端会话技术，数据存储到客户端浏览器中</p>\\n<p>Session: 服务器端会话技术，数据存储到服务器中</p>\\n</blockquote>\\n<h3>会话的作用</h3>\\n<p>在多次请求和多次响应中可以实现数据共享</p>\\n<h3>方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>response.addCookie(Cookie c)</td>\\n<td>设置 cookie</td>\\n</tr>\\n<tr>\\n<td>response.setHeader(\\\"set-cookie\\\", \\\"name=value\\\")</td>\\n<td>设置 cookie</td>\\n</tr>\\n<tr>\\n<td>response.setHeader(\\\"set-cookie\\\", \\\"name=value; maxAge=60\\\")</td>\\n<td>设置 cookie</td>\\n</tr>\\n<tr>\\n<td>request.getCookies()</td>\\n<td>获取 cookie</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
