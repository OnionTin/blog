import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/Ribbon负载均衡.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/Ribbon%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Ribbon 负载均衡\",\"slug\":\"ribbon-负载均衡\",\"link\":\"#ribbon-负载均衡\",\"children\":[{\"level\":3,\"title\":\"负载均衡\",\"slug\":\"负载均衡\",\"link\":\"#负载均衡\",\"children\":[]},{\"level\":3,\"title\":\"负载均衡的好处\",\"slug\":\"负载均衡的好处\",\"link\":\"#负载均衡的好处\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726648298000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/Ribbon负载均衡.md\",\"excerpt\":\"<h2>Ribbon 负载均衡</h2>\\n<blockquote>\\n<p>是基于 Netflix Ribbon 实现的负载均衡工具</p>\\n</blockquote>\\n<h3>负载均衡</h3>\\n<blockquote>\\n<p>将用户的请求分摊到多个服务上，从而达到系统的 HA(高可用性)，负载均衡有很多方式，包括。常见的负载均衡方式有：Nginx、LVS 等。</p>\\n</blockquote>\\n<h3>负载均衡的好处</h3>\\n<blockquote>\\n<p>举例：A 早上用网，100M 的网速，100 元/月；B 和 C 也类似，B 中午，C 晚上；负载均衡可以将 A、B、C 的网速叠加，达到 300M，节省了成本。然后在用户使用的时候，让用户每个月还是 100 元，但是可以享受 300M 的网速。</p>\\n</blockquote>\"}")
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
