import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/jsp/jstl.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jstl.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"jstl\",\"slug\":\"jstl\",\"link\":\"#jstl\",\"children\":[{\"level\":3,\"title\":\"jslt 如何使用\",\"slug\":\"jslt-如何使用\",\"link\":\"#jslt-如何使用\",\"children\":[]},{\"level\":3,\"title\":\"常见的标签\",\"slug\":\"常见的标签\",\"link\":\"#常见的标签\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/jsp/jstl.md\",\"excerpt\":\"<h2>jstl</h2>\\n<blockquote>\\n<p>jstl 是 Jsp 标准标签函式库，用来替代 Java 代码的，提高了页面的维护性</p>\\n</blockquote>\\n<h3>jslt 如何使用</h3>\\n<ol>\\n<li>导入相关的 jar 包(依赖)</li>\\n<li>再 jsp 页面上引入指令</li>\\n<li>在 jsp 页面中写 jstl 标签库</li>\\n</ol>\\n<h3>常见的标签</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>标签</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>if 标签</td>\\n<td>条件判断</td>\\n</tr>\\n<tr>\\n<td>c:forEach</td>\\n<td>循环</td>\\n</tr>\\n<tr>\\n<td>c:forTokens</td>\\n<td>循环</td>\\n</tr>\\n<tr>\\n<td>c:choose</td>\\n<td>分支选择</td>\\n</tr>\\n<tr>\\n<td>c:when</td>\\n<td>分支选择</td>\\n</tr>\\n<tr>\\n<td>c:otherwise</td>\\n<td>分支选择</td>\\n</tr>\\n<tr>\\n<td>c:out</td>\\n<td>输出</td>\\n</tr>\\n<tr>\\n<td>c:set</td>\\n<td>赋值</td>\\n</tr>\\n<tr>\\n<td>c:remove</td>\\n<td>删除</td>\\n</tr>\\n<tr>\\n<td>c:catch</td>\\n<td>异常处理</td>\\n</tr>\\n<tr>\\n<td>c:import</td>\\n<td>引入</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
