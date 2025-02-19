import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/在idea中集成Tomcat.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/%E5%9C%A8idea%E4%B8%AD%E9%9B%86%E6%88%90Tomcat.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"在 idea 中集成 Tomcat\",\"slug\":\"在-idea-中集成-tomcat\",\"link\":\"#在-idea-中集成-tomcat\",\"children\":[]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/在idea中集成Tomcat.md\",\"excerpt\":\"<h2>在 idea 中集成 Tomcat</h2>\\n<ol>\\n<li>创建新的 Web 项目\\n<ul>\\n<li>打开 IntelliJ IDEA，选择 File &gt; New &gt; Project。</li>\\n<li>在新窗口中，选择 Java Enterprise 类别下的 Web Application，点击 Next &gt; Next。</li>\\n<li>填写项目名称（例如 MyWebApp），选择项目存储位置，点击 Finish。</li>\\n</ul>\\n</li>\\n<li>配置 Tomcat 服务器\\n<ul>\\n<li>打开 File &gt; Settings（或 Preferences on macOS）。</li>\\n<li>转到 Build, Execution, Deployment &gt; Application Servers，点击+，选择本地安装的 Tomcat 路径，点击 OK。</li>\\n</ul>\\n</li>\\n<li>添加 Servlet 依赖 -如果你的项目是 Maven 项目，确保 pom.xml 文件中包含以下 Servlet API 依赖：</li>\\n</ol>\"}")
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
