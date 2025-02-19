import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Http/Request对象/转发请求参数的方法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E8%BD%AC%E5%8F%91%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E6%96%B9%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"转发请求参数的方法\",\"slug\":\"转发请求参数的方法\",\"link\":\"#转发请求参数的方法\",\"children\":[{\"level\":3,\"title\":\"请求参数中文出现乱码问题\",\"slug\":\"请求参数中文出现乱码问题\",\"link\":\"#请求参数中文出现乱码问题\",\"children\":[]},{\"level\":3,\"title\":\"BeanUtils 工具类的使用\",\"slug\":\"beanutils-工具类的使用\",\"link\":\"#beanutils-工具类的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Http/Request对象/转发请求参数的方法.md\",\"excerpt\":\"<h2>转发请求参数的方法</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Map &lt;String, String[]&gt; getParameterMap()</td>\\n<td>获取所有参数的 name 和 value</td>\\n</tr>\\n<tr>\\n<td>String getParameter(String name)</td>\\n<td>获取指定 name 的项目的 value 值(input)</td>\\n</tr>\\n<tr>\\n<td>Enumeration &lt;String&gt; getParameterNames()</td>\\n<td>获取所有参数的 name</td>\\n</tr>\\n<tr>\\n<td>String[] getParameterValues(String name)</td>\\n<td>获取指定 name 的所有项目的 value 值(radio 或者 checkbox)</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
