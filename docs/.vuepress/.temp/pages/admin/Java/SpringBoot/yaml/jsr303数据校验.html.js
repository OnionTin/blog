import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/yaml/jsr303数据校验.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/yaml/jsr303%E6%95%B0%E6%8D%AE%E6%A0%A1%E9%AA%8C.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"jsr303 数据校验\",\"slug\":\"jsr303-数据校验\",\"link\":\"#jsr303-数据校验\",\"children\":[{\"level\":3,\"title\":\"常用注解\",\"slug\":\"常用注解\",\"link\":\"#常用注解\",\"children\":[]},{\"level\":3,\"title\":\"空检查\",\"slug\":\"空检查\",\"link\":\"#空检查\",\"children\":[]},{\"level\":3,\"title\":\"Boolean 检查\",\"slug\":\"boolean-检查\",\"link\":\"#boolean-检查\",\"children\":[]},{\"level\":3,\"title\":\"长度检查\",\"slug\":\"长度检查\",\"link\":\"#长度检查\",\"children\":[]},{\"level\":3,\"title\":\"日期检查\",\"slug\":\"日期检查\",\"link\":\"#日期检查\",\"children\":[]},{\"level\":3,\"title\":\"数值检查\",\"slug\":\"数值检查\",\"link\":\"#数值检查\",\"children\":[]},{\"level\":3,\"title\":\"案例说明\",\"slug\":\"案例说明\",\"link\":\"#案例说明\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725354999000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/yaml/jsr303数据校验.md\",\"excerpt\":\"<h2>jsr303 数据校验</h2>\\n<h3>常用注解</h3>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:left\\\">注解</th>\\n<th style=\\\"text-align:left\\\">作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:left\\\">@Validated</td>\\n<td style=\\\"text-align:left\\\">开启校验</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\">@Range(min=, max=)</td>\\n<td style=\\\"text-align:left\\\">被指定的元素必须在合适的范围内</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\">@CreditCardNumber</td>\\n<td style=\\\"text-align:left\\\">信用卡验证</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\">@Email</td>\\n<td style=\\\"text-align:left\\\">邮箱地址验证</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\">@Pattern</td>\\n<td style=\\\"text-align:left\\\">正则表达式验证</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:left\\\">@URL</td>\\n<td style=\\\"text-align:left\\\">URL 地址验证</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
