import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Http/Request对象/Request对象获取请求消息.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/Request%E5%AF%B9%E8%B1%A1%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E6%B6%88%E6%81%AF.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Request 对象获取请求消息\",\"slug\":\"request-对象获取请求消息\",\"link\":\"#request-对象获取请求消息\",\"children\":[{\"level\":3,\"title\":\"1. 获取请求行数据\",\"slug\":\"_1-获取请求行数据\",\"link\":\"#_1-获取请求行数据\",\"children\":[]},{\"level\":3,\"title\":\"2. 获取请求头数据\",\"slug\":\"_2-获取请求头数据\",\"link\":\"#_2-获取请求头数据\",\"children\":[]},{\"level\":3,\"title\":\"3. 获取请求体数据\",\"slug\":\"_3-获取请求体数据\",\"link\":\"#_3-获取请求体数据\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Http/Request对象/Request对象获取请求消息.md\",\"excerpt\":\"<h2>Request 对象获取请求消息</h2>\\n<h3>1. 获取请求行数据</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>String getMethod()</td>\\n<td>获取请求方式</td>\\n</tr>\\n<tr>\\n<td>String getContextPath()</td>\\n<td>获取虚拟目录</td>\\n</tr>\\n<tr>\\n<td>String getServletPath()</td>\\n<td>获取 Servlet 路径</td>\\n</tr>\\n<tr>\\n<td>String getRequestURI()</td>\\n<td>获取请求 URI</td>\\n</tr>\\n<tr>\\n<td>StringBuffer getRequestURL()</td>\\n<td>获取请求 URL</td>\\n</tr>\\n<tr>\\n<td>String getQueryString()</td>\\n<td>获取请求参数</td>\\n</tr>\\n<tr>\\n<td>String getProtocol()</td>\\n<td>获取请求协议</td>\\n</tr>\\n<tr>\\n<td>String getRemoteAddr()</td>\\n<td>获取客户端 IP</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
