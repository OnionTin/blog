import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/ServletContext.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/ServletContext.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ServletContext\",\"slug\":\"servletcontext\",\"link\":\"#servletcontext\",\"children\":[{\"level\":3,\"title\":\"ServletContext 对象生命周期\",\"slug\":\"servletcontext-对象生命周期\",\"link\":\"#servletcontext-对象生命周期\",\"children\":[]},{\"level\":3,\"title\":\"获取 ServletContext 对象\",\"slug\":\"获取-servletcontext-对象\",\"link\":\"#获取-servletcontext-对象\",\"children\":[]},{\"level\":3,\"title\":\"ServletContext 对象的作用\",\"slug\":\"servletcontext-对象的作用\",\"link\":\"#servletcontext-对象的作用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/ServletContext.md\",\"excerpt\":\"<h2>ServletContext</h2>\\n<blockquote>\\n<p>代表当前的项目，每一个项目，有且只有一个 ServletContext 对象；且只有被服务器部署的项目才有 ServletContext 对象。</p>\\n</blockquote>\\n<h3>ServletContext 对象生命周期</h3>\\n<blockquote>\\n<p>创建：当服务器开启的时候，ServletContext 对象就会被创建出来</p>\\n<p>销毁：当服务器关闭的时候或者当前的项目被卸载的时候，ServletContext 对象就会被销毁</p>\\n</blockquote>\\n<h3>获取 ServletContext 对象</h3>\"}")
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
