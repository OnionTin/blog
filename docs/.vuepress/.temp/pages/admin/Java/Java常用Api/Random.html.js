import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/Random.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Random.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Random\",\"slug\":\"random\",\"link\":\"#random\",\"children\":[{\"level\":3,\"title\":\"构造方法\",\"slug\":\"构造方法\",\"link\":\"#构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常用方法\",\"slug\":\"常用方法\",\"link\":\"#常用方法\",\"children\":[]},{\"level\":3,\"title\":\"获取 1-100 之间的随机数\",\"slug\":\"获取-1-100-之间的随机数\",\"link\":\"#获取-1-100-之间的随机数\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/Random.md\",\"excerpt\":\"<h2>Random</h2>\\n<p>需要导包， 在 java.util 包下</p>\\n<h3>构造方法</h3>\\n<p>Random() 创建一个新的随机数生成器</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Random()</td>\\n<td>创建一个新的随机数生成器</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>常用方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>int nextInt(int n)</td>\\n<td>返回一个伪随机数，范围在 0（包括）到 n（不包括）之间</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
