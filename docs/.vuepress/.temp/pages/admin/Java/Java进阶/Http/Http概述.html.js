import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Http/Http概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Http%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Http 概述.md\",\"slug\":\"http-概述-md\",\"link\":\"#http-概述-md\",\"children\":[{\"level\":3,\"title\":\"Http 协议的特点\",\"slug\":\"http-协议的特点\",\"link\":\"#http-协议的特点\",\"children\":[]},{\"level\":3,\"title\":\"Http 请求消息格式\",\"slug\":\"http-请求消息格式\",\"link\":\"#http-请求消息格式\",\"children\":[]},{\"level\":3,\"title\":\"Http 响应消息格式\",\"slug\":\"http-响应消息格式\",\"link\":\"#http-响应消息格式\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Http/Http概述.md\",\"excerpt\":\"<h2>Http 概述.md</h2>\\n<blockquote>\\n<p>超文本传输协议(HyperText Transfer Protocol)</p>\\n<p>超文本：超级文本，不是一般的文本</p>\\n<p>传输协议：定义客户端和服务器端通信时，数据传输的格式</p>\\n</blockquote>\\n<h3>Http 协议的特点</h3>\\n<ol>\\n<li>基于 TCP/IP 的高级协议</li>\\n<li>默认端口号 80(一般网站把服务器端口设置成 80，所以访问的时候一般都不带端口号)</li>\\n<li>基于请求/响应模型的，一次请求对应一次响应</li>\\n<li>无状态的协议，在两个请求和响应之间，互相不干涉不影响</li>\\n</ol>\"}")
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
