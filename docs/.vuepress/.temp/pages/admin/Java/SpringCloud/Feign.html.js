import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/Feign.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/Feign.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Feign\",\"slug\":\"feign\",\"link\":\"#feign\",\"children\":[{\"level\":3,\"title\":\"Ribbon 调用过程\",\"slug\":\"ribbon-调用过程\",\"link\":\"#ribbon-调用过程\",\"children\":[]},{\"level\":3,\"title\":\"Feign 调用过程\",\"slug\":\"feign-调用过程\",\"link\":\"#feign-调用过程\",\"children\":[]},{\"level\":3,\"title\":\"Feign 的优缺点\",\"slug\":\"feign-的优缺点\",\"link\":\"#feign-的优缺点\",\"children\":[]},{\"level\":3,\"title\":\"Feign 具体步骤\",\"slug\":\"feign-具体步骤\",\"link\":\"#feign-具体步骤\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726736496000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/Feign.md\",\"excerpt\":\"<h2>Feign</h2>\\n<blockquote>\\n<p>Feign 和 Ribbon 都可以远程接口调用，Feign 中集成了 Ribbon，区别在于 Feign 需要编写接口，而 Ribbon 需要编写配置类。</p>\\n</blockquote>\\n<h3>Ribbon 调用过程</h3>\\n<blockquote>\\n<ol>\\n<li>配置实现负载均衡的 RestTemplate</li>\\n<li>restTemplate.getForObject(REST_URL_PREFIX + \\\"/dept/list\\\", List.class)</li>\\n</ol>\\n</blockquote>\\n<h3>Feign 调用过程</h3>\"}")
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
