import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/Servlet体系结构.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Servlet 体系结构\",\"slug\":\"servlet-体系结构\",\"link\":\"#servlet-体系结构\",\"children\":[{\"level\":3,\"title\":\"Servlet 的多种实现方式\",\"slug\":\"servlet-的多种实现方式\",\"link\":\"#servlet-的多种实现方式\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/Servlet体系结构.md\",\"excerpt\":\"<h2>Servlet 体系结构</h2>\\n<blockquote>\\n<p>Servlet 接口：</p>\\n<p>javax.servlet.Servlet 接口，通用的顶级接口</p>\\n</blockquote>\\n<blockquote>\\n<p>GenericServlet 类：</p>\\n<p>javax.servlet.GenericServlet 类，实现了 Servlet 接口，是一个通用的抽象类</p>\\n</blockquote>\\n<blockquote>\\n<p>HttpServlet 类：</p>\\n<p>javax.servlet.http.HttpServlet 类，继承了 GenericServlet 类，实现了 HttpServletRequest 接口，是一个抽象类</p>\\n</blockquote>\"}")
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
