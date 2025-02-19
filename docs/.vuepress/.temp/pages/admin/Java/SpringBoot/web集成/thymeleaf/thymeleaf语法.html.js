import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/web集成/thymeleaf/thymeleaf语法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/thymeleaf/thymeleaf%E8%AF%AD%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"thymeleaf 语法\",\"slug\":\"thymeleaf-语法\",\"link\":\"#thymeleaf-语法\",\"children\":[{\"level\":3,\"title\":\"表达式\",\"slug\":\"表达式\",\"link\":\"#表达式\",\"children\":[]},{\"level\":3,\"title\":\"表达式对象\",\"slug\":\"表达式对象\",\"link\":\"#表达式对象\",\"children\":[]},{\"level\":3,\"title\":\"表达式运算符\",\"slug\":\"表达式运算符\",\"link\":\"#表达式运算符\",\"children\":[]},{\"level\":3,\"title\":\"片段表达式\",\"slug\":\"片段表达式\",\"link\":\"#片段表达式\",\"children\":[]},{\"level\":3,\"title\":\"真实案例\",\"slug\":\"真实案例\",\"link\":\"#真实案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725354999000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/web集成/thymeleaf/thymeleaf语法.md\",\"excerpt\":\"<h2>thymeleaf 语法</h2>\\n<blockquote>\\n<p>thymeleaf 和 vue 一样，都是模板引擎，用于在 html 中插入数据；只是 thymeleaf 的开头是 th:，而 vue 是 v-</p>\\n</blockquote>\\n<h3>表达式</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>语法</th>\\n<th>说明</th>\\n<th>语法</th>\\n<th>说明</th>\\n<th>语法</th>\\n<th>说明</th>\\n<th>语法</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>${...}</td>\\n<td>变量表达式</td>\\n<td>[[...]]</td>\\n<td>文本</td>\\n<td>th:if</td>\\n<td>判断</td>\\n<td>th:href</td>\\n<td>设置 href 属性</td>\\n</tr>\\n<tr>\\n<td>*{...}</td>\\n<td>选择表达式</td>\\n<td>[(...)]</td>\\n<td>属性</td>\\n<td>th:unless</td>\\n<td>判断</td>\\n<td>th:src</td>\\n<td>设置 src 属性</td>\\n</tr>\\n<tr>\\n<td>#{...}</td>\\n<td>消息表达式</td>\\n<td>[()]</td>\\n<td>消息</td>\\n<td>th:switch</td>\\n<td>判断</td>\\n<td>th:attr</td>\\n<td>设置任意属性</td>\\n</tr>\\n<tr>\\n<td>@{...}</td>\\n<td>URL 表达式</td>\\n<td>[()]</td>\\n<td>URL</td>\\n<td>th:case</td>\\n<td>判断</td>\\n<td>th:class</td>\\n<td>设置 class 属性</td>\\n</tr>\\n<tr>\\n<td>~{...}</td>\\n<td>片段表达式</td>\\n<td>[()]</td>\\n<td>片段</td>\\n<td>th:each</td>\\n<td>遍历</td>\\n<td>th:style</td>\\n<td>设置 style 属性</td>\\n</tr>\\n<tr>\\n<td>th:message</td>\\n<td>设置文本内容</td>\\n<td>th:messages</td>\\n<td>设置文本内容</td>\\n<td>th:text</td>\\n<td>设置文本内容</td>\\n<td>th:utext</td>\\n<td>同 th:tex，唯一区别是会转义 html 标签</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
