import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/声明类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"声明类型\",\"slug\":\"声明类型\",\"link\":\"#声明类型\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/声明类型.md\",\"excerpt\":\"<h2>声明类型</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:center\\\">类型</th>\\n<th style=\\\"text-align:center\\\">例子</th>\\n<th style=\\\"text-align:center\\\">描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:center\\\">number</td>\\n<td style=\\\"text-align:center\\\">1, 2, 3, 4</td>\\n<td style=\\\"text-align:center\\\">任意数字</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">string</td>\\n<td style=\\\"text-align:center\\\">'hello'</td>\\n<td style=\\\"text-align:center\\\">任意字符串</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">boolean</td>\\n<td style=\\\"text-align:center\\\">true, false</td>\\n<td style=\\\"text-align:center\\\">布尔值 true 或 false</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">字面量</td>\\n<td style=\\\"text-align:center\\\">其本身</td>\\n<td style=\\\"text-align:center\\\">限制变量的取值只能是字面量</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">any</td>\\n<td style=\\\"text-align:center\\\">any</td>\\n<td style=\\\"text-align:center\\\">任意类型</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">unkown</td>\\n<td style=\\\"text-align:center\\\">unknown</td>\\n<td style=\\\"text-align:center\\\">未知类型，类型安全的 any</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">void</td>\\n<td style=\\\"text-align:center\\\">void</td>\\n<td style=\\\"text-align:center\\\">没有值，或者 undefined</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">array</td>\\n<td style=\\\"text-align:center\\\">[1, 2, 3]</td>\\n<td style=\\\"text-align:center\\\">任意数字数组</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">tuple</td>\\n<td style=\\\"text-align:center\\\">[1, 'a']</td>\\n<td style=\\\"text-align:center\\\">固定长度数组</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">enum</td>\\n<td style=\\\"text-align:center\\\">enum{A,B}</td>\\n<td style=\\\"text-align:center\\\">枚举类型</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">object</td>\\n<td style=\\\"text-align:center\\\">{name:'孙悟空'}</td>\\n<td style=\\\"text-align:center\\\">任意对象</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">null</td>\\n<td style=\\\"text-align:center\\\">null</td>\\n<td style=\\\"text-align:center\\\">只能是 null</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">never</td>\\n<td style=\\\"text-align:center\\\">never</td>\\n<td style=\\\"text-align:center\\\">永不发生</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
