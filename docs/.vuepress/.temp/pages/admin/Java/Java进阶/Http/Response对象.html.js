import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Http/Response对象.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Response%E5%AF%B9%E8%B1%A1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Response 对象\",\"slug\":\"response-对象\",\"link\":\"#response-对象\",\"children\":[{\"level\":3,\"title\":\"设置响应状态码\",\"slug\":\"设置响应状态码\",\"link\":\"#设置响应状态码\",\"children\":[]},{\"level\":3,\"title\":\"设置响应头\",\"slug\":\"设置响应头\",\"link\":\"#设置响应头\",\"children\":[]},{\"level\":3,\"title\":\"重定向\",\"slug\":\"重定向\",\"link\":\"#重定向\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Http/Response对象.md\",\"excerpt\":\"<h2>Response 对象</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>void setStatus(int sc)</td>\\n<td>设置响应状态码</td>\\n</tr>\\n<tr>\\n<td>void setHeader(String name, String value)</td>\\n<td>设置响应头</td>\\n</tr>\\n<tr>\\n<td>void sendRedirect(String location)</td>\\n<td>重定向</td>\\n</tr>\\n<tr>\\n<td>PrintWriter getWriter()</td>\\n<td>获取字符输出流响应体</td>\\n</tr>\\n<tr>\\n<td>ServletOutputStream getOutputStream()</td>\\n<td>获取字节输出流响应体</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
