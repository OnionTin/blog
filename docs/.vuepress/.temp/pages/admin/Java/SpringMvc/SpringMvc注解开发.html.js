import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringMvc/SpringMvc注解开发.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringMvc/SpringMvc%E6%B3%A8%E8%A7%A3%E5%BC%80%E5%8F%91.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"SpringMvc 注解开发\",\"slug\":\"springmvc-注解开发\",\"link\":\"#springmvc-注解开发\",\"children\":[{\"level\":3,\"title\":\"SpringMvc 注解开发步骤\",\"slug\":\"springmvc-注解开发步骤\",\"link\":\"#springmvc-注解开发步骤\",\"children\":[]},{\"level\":3,\"title\":\"注解开发实践\",\"slug\":\"注解开发实践\",\"link\":\"#注解开发实践\",\"children\":[]}]}],\"git\":{\"updatedTime\":1723909671000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringMvc/SpringMvc注解开发.md\",\"excerpt\":\"<!-- @format -->\\n<h2>SpringMvc 注解开发</h2>\\n<blockquote>\\n<p>注解是 SpringMvc 的灵魂!</p>\\n</blockquote>\\n<h3>SpringMvc 注解开发步骤</h3>\\n<ol>\\n<li>导入依赖并加上文件过滤</li>\\n<li>创建 web.xml：选择<code>添加框架支持</code>，选择<code>web应用程序</code>，默认选择最新版本 4.0</li>\\n<li>选择<code>项目结构</code>，再选<code>工件</code>，添加 lib 目录，并在 lib 目录下添加 jar 包</li>\\n<li>完善 web.xml 文件(后续不用再去修改)</li>\\n<li>添加 springmvc.xml 并完善(后续也不用再去修改)</li>\\n<li>在 WEB-INF 下创建 jsp 文件夹，并在 jsp 文件夹下创建 test.jsp 文件</li>\\n<li>创建 Controller 类，并添加注解</li>\\n<li>配置 Tomcat 工件启动项目</li>\\n</ol>\"}")
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
