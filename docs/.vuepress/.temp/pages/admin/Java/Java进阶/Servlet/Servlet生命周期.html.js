import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Servlet/Servlet生命周期.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Servlet 生命周期\",\"slug\":\"servlet-生命周期\",\"link\":\"#servlet-生命周期\",\"children\":[{\"level\":3,\"title\":\"init\",\"slug\":\"init\",\"link\":\"#init\",\"children\":[]},{\"level\":3,\"title\":\"service\",\"slug\":\"service\",\"link\":\"#service\",\"children\":[]},{\"level\":3,\"title\":\"destory\",\"slug\":\"destory\",\"link\":\"#destory\",\"children\":[]},{\"level\":3,\"title\":\"如何将 Servlet 对象的创建提前\",\"slug\":\"如何将-servlet-对象的创建提前\",\"link\":\"#如何将-servlet-对象的创建提前\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Servlet/Servlet生命周期.md\",\"excerpt\":\"<h2>Servlet 生命周期</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>init</td>\\n<td>初始化</td>\\n</tr>\\n<tr>\\n<td>service</td>\\n<td>执行方法</td>\\n</tr>\\n<tr>\\n<td>destory</td>\\n<td>销毁方法</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>init</h3>\\n<ul>\\n<li>初始化方法，在 servlet 被创建时执行，只会执行一次</li>\\n<li>用于加载资源，初始化 servlet 对象</li>\\n</ul>\"}")
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
