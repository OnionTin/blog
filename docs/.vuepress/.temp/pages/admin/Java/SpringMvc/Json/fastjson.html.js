import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringMvc/Json/fastjson.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringMvc/Json/fastjson.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"fastjson\",\"slug\":\"fastjson\",\"link\":\"#fastjson\",\"children\":[]},{\"level\":2,\"title\":\"常用注解\",\"slug\":\"常用注解\",\"link\":\"#常用注解\",\"children\":[{\"level\":3,\"title\":\"案例\",\"slug\":\"案例\",\"link\":\"#案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1724664291000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringMvc/Json/fastjson.md\",\"excerpt\":\"<h2>fastjson</h2>\\n<blockquote>\\n<p>阿里巴巴推出的一款插件</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>JSON.toJSONString()</code></td>\\n<td>java 对象转 json 字符串</td>\\n</tr>\\n<tr>\\n<td><code>JSON.parseObject()</code></td>\\n<td>json 字符串转 java 对象</td>\\n</tr>\\n<tr>\\n<td><code>JSON.parseArray()</code></td>\\n<td>json 字符串转 java 集合</td>\\n</tr>\\n<tr>\\n<td><code>JSON.toJavaObject()</code></td>\\n<td>json 字符串转 java 对象</td>\\n</tr>\\n<tr>\\n<td><code>JSON.parse()</code></td>\\n<td>json 字符串转 java 对象</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
