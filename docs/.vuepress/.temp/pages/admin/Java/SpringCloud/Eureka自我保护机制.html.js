import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/Eureka自我保护机制.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/Eureka%E8%87%AA%E6%88%91%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Eureka 自我保护机制\",\"slug\":\"eureka-自我保护机制\",\"link\":\"#eureka-自我保护机制\",\"children\":[]}],\"git\":{\"updatedTime\":1726648298000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/Eureka自我保护机制.md\",\"excerpt\":\"<h2>Eureka 自我保护机制</h2>\\n<blockquote>\\n<p>总结就是好死不如赖活着</p>\\n</blockquote>\\n<blockquote>\\n<p>比如某一个服务，因为断电等原因，导致服务下线，Eureka 接收不到心跳，但是服务并没有真正的下线，此时不该注销该服务，Eureka 会保存注册中心的服务信息，宁可错误保留，也不盲目注销或删除，这就是好死不如赖活着。</p>\\n</blockquote>\\n<blockquote>\\n<p>当 Eureka 再次收到心跳时，服务会被重新注册，这就是自我保护机制。</p>\\n</blockquote>\\n\"}")
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
