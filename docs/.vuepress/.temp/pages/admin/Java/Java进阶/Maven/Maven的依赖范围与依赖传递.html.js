import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Maven/Maven的依赖范围与依赖传递.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Maven/Maven%E7%9A%84%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E4%B8%8E%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Maven 的依赖范围与依赖传递\",\"slug\":\"maven-的依赖范围与依赖传递\",\"link\":\"#maven-的依赖范围与依赖传递\",\"children\":[{\"level\":3,\"title\":\"依赖的基本配置\",\"slug\":\"依赖的基本配置\",\"link\":\"#依赖的基本配置\",\"children\":[]},{\"level\":3,\"title\":\"Scope 依赖范围\",\"slug\":\"scope-依赖范围\",\"link\":\"#scope-依赖范围\",\"children\":[]},{\"level\":3,\"title\":\"依赖排除\",\"slug\":\"依赖排除\",\"link\":\"#依赖排除\",\"children\":[]},{\"level\":3,\"title\":\"依赖传递\",\"slug\":\"依赖传递\",\"link\":\"#依赖传递\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723195339000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Maven/Maven的依赖范围与依赖传递.md\",\"excerpt\":\"<h2>Maven 的依赖范围与依赖传递</h2>\\n<blockquote>\\n<p>比如正式环境肯定不需要测试环境的依赖了</p>\\n<p>依赖范围就是用来控制依赖的传递</p>\\n</blockquote>\\n<h3>依赖的基本配置</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>属性</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>groupid</td>\\n<td>公司名称</td>\\n</tr>\\n<tr>\\n<td>artifactid</td>\\n<td>项目名称</td>\\n</tr>\\n<tr>\\n<td>version</td>\\n<td>版本号</td>\\n</tr>\\n<tr>\\n<td>scope</td>\\n<td>依赖范围</td>\\n</tr>\\n<tr>\\n<td>type</td>\\n<td>依赖类型，默认就是 jar，基本不用变</td>\\n</tr>\\n<tr>\\n<td>exclusions</td>\\n<td>排除依赖</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
