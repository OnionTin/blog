import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/注解/元注解.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E5%85%83%E6%B3%A8%E8%A7%A3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"元注解\",\"slug\":\"元注解\",\"link\":\"#元注解\",\"children\":[{\"level\":3,\"title\":\"@Target 元注解的参数\",\"slug\":\"target-元注解的参数\",\"link\":\"#target-元注解的参数\",\"children\":[]},{\"level\":3,\"title\":\"@Retention 元注解的参数\",\"slug\":\"retention-元注解的参数\",\"link\":\"#retention-元注解的参数\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/注解/元注解.md\",\"excerpt\":\"<h2>元注解</h2>\\n<p>用来标注注解的注解就称为元注解</p>\\n<table>\\n<thead>\\n<tr>\\n<th>元注解</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Target</td>\\n<td>限制被元注解标注的注解，可以用在什么地方</td>\\n</tr>\\n<tr>\\n<td>@Retention</td>\\n<td>限制被元注解标注的注解，生命时常</td>\\n</tr>\\n<tr>\\n<td>@Documented</td>\\n<td>被该元注解所标注的注解能够存在于帮助文档中；没有参数</td>\\n</tr>\\n<tr>\\n<td>@Inherited</td>\\n<td>被该元注解所标注的注解能够被子类继承(即子类也有该注解)；没有参数</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
