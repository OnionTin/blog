import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/Servlet执行流程.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Servlet 执行流程\",\"slug\":\"servlet-执行流程\",\"link\":\"#servlet-执行流程\",\"children\":[]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/Servlet执行流程.md\",\"excerpt\":\"<h2>Servlet 执行流程</h2>\\n<blockquote>\\n<p>浏览器发出请求后，Tomcat 接收到请求，去项目中的 web.xml 文件中找 Servlet 对象，没有再去 Tomcat 的 web.xml 中找 Servlet 对象，找到并开始 Servlet 的创建流程。，代表匹配所有的资源。</p>\\n</blockquote>\\n<p></p>\\n<blockquote>\\n<p>当在 Tomcat 的 web.xml 中，都找不到我们想要的资源，默认会设置，所以会去寻找 index.jsp 等设置的 文件，找到并开始 Servlet 的创建流程。</p>\\n</blockquote>\"}")
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
