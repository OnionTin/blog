import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Spring/注解自动装配.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Spring/%E6%B3%A8%E8%A7%A3%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"注解自动装配\",\"slug\":\"注解自动装配\",\"link\":\"#注解自动装配\",\"children\":[{\"level\":3,\"title\":\"使用注解三步骤\",\"slug\":\"使用注解三步骤\",\"link\":\"#使用注解三步骤\",\"children\":[]},{\"level\":3,\"title\":\"常用注解\",\"slug\":\"常用注解\",\"link\":\"#常用注解\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723453298000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Spring/注解自动装配.md\",\"excerpt\":\"<h2>注解自动装配</h2>\\n<blockquote>\\n<p>jdk1.5 开始支持注解，spring2.5 开始支持注解</p>\\n</blockquote>\\n<h3>使用注解三步骤</h3>\\n<ol>\\n<li>导入注解依赖</li>\\n<li>在配置文件中开启注解支持</li>\\n<li>在需要注入的类或属性上添加注解</li>\\n</ol>\\n<h3>常用注解</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>注解</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Autowired</td>\\n<td>自动装配，直接在属性上或者是 set 方法上使用，功能同 byName(根据 id 查找，id 不能重复)</td>\\n</tr>\\n<tr>\\n<td>@Qualifier</td>\\n<td>指定装配的 bean，功能同 ref</td>\\n</tr>\\n<tr>\\n<td>@Resource</td>\\n<td>自动装配，直接在属性上或者是 set 方法上使用；先根据 byName，找不到根据 byType(根据 class 查找，使用时指定 name 属性)</td>\\n</tr>\\n<tr>\\n<td>@Value</td>\\n<td>注入普通属性</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
