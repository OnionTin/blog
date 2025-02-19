import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/Date.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Date.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Date\",\"slug\":\"date\",\"link\":\"#date\",\"children\":[{\"level\":3,\"title\":\"常见构造方法\",\"slug\":\"常见构造方法\",\"link\":\"#常见构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"格式化时间(SimpleDateFormat)\",\"slug\":\"格式化时间-simpledateformat\",\"link\":\"#格式化时间-simpledateformat\",\"children\":[]},{\"level\":3,\"title\":\"实际应用\",\"slug\":\"实际应用\",\"link\":\"#实际应用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/Date.md\",\"excerpt\":\"<h2>Date</h2>\\n<p>需要导包，在 java.util 包下</p>\\n<h3>常见构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Date()</td>\\n<td>分配 Date 对象并初始化，以便它代表它被创建时的日期和时间</td>\\n</tr>\\n<tr>\\n<td>public Date(long date)</td>\\n<td>分配 Date 对象并初始化，以便它代表 date 参数中给出的毫秒时间值</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
