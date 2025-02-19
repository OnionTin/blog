import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/XML/Jsoup解析.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/Jsoup%E8%A7%A3%E6%9E%90.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Jsoup 解析\",\"slug\":\"jsoup-解析\",\"link\":\"#jsoup-解析\",\"children\":[{\"level\":3,\"title\":\"常用 api\",\"slug\":\"常用-api\",\"link\":\"#常用-api\",\"children\":[]},{\"level\":3,\"title\":\"Jsoup 解析-标签选择器方式\",\"slug\":\"jsoup-解析-标签选择器方式\",\"link\":\"#jsoup-解析-标签选择器方式\",\"children\":[]},{\"level\":3,\"title\":\"Jsoup 解析-xpath 方式\",\"slug\":\"jsoup-解析-xpath-方式\",\"link\":\"#jsoup-解析-xpath-方式\",\"children\":[]}]}],\"git\":{\"updatedTime\":1719909739000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java进阶/XML/Jsoup解析.md\",\"excerpt\":\"<h2>Jsoup 解析</h2>\\n<h3>常用 api</h3>\\n<p>Jsoup：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>static Document parse(File in, String charsetName)</td>\\n<td>解析文件</td>\\n</tr>\\n</tbody>\\n</table>\\n<p>Document：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>Element getElementById(String id)</td>\\n<td>根据 id 获取元素</td>\\n</tr>\\n<tr>\\n<td>Elements getElementsByTag(String tag)</td>\\n<td>根据标签获取元素</td>\\n</tr>\\n<tr>\\n<td>Elements getElementsByClass(String className)</td>\\n<td>根据 class 获取元素</td>\\n</tr>\\n<tr>\\n<td>Elements getElementsByAttribute(String key)</td>\\n<td>根据属性获取元素</td>\\n</tr>\\n<tr>\\n<td>Elements getElementsByAttributeValue(String key, String value)</td>\\n<td>根据属性值获取元素</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
