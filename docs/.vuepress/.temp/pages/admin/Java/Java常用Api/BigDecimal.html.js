import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/BigDecimal.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/BigDecimal.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"BigDecimal\",\"slug\":\"bigdecimal\",\"link\":\"#bigdecimal\",\"children\":[{\"level\":3,\"title\":\"常见构造方法\",\"slug\":\"常见构造方法\",\"link\":\"#常见构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/BigDecimal.md\",\"excerpt\":\"<h2>BigDecimal</h2>\\n<p>需要导包，在 java.math 包下</p>\\n<h3>常见构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public BigDecimal(double val)</td>\\n<td>将 double 转换为 BigDecimal</td>\\n</tr>\\n<tr>\\n<td>public BigDecimal(String val)</td>\\n<td>将 String 转换为 BigDecimal</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
