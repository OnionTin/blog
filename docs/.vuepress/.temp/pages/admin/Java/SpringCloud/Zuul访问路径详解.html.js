import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/Zuul访问路径详解.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/Zuul%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84%E8%AF%A6%E8%A7%A3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Zuul 访问路径详解\",\"slug\":\"zuul-访问路径详解\",\"link\":\"#zuul-访问路径详解\",\"children\":[]}],\"git\":{\"updatedTime\":1726824508000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/Zuul访问路径详解.md\",\"excerpt\":\"<h2>Zuul 访问路径详解</h2>\\n<blockquote>\\n<p>都是根据一步步的配置进行图例展示</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p>Zuul 注册到 Eureka</p>\\n<p></p>\\n</li>\\n<li>\\n<p>服务端访问路径</p>\\n<p></p>\\n</li>\\n<li>\\n<p>走路由网关访问路径</p>\\n<p></p>\\n</li>\\n<li>\\n<p>走路由网关访问路径(代理路径，避免爆露微服务名)</p>\\n<p>\\n</p>\\n</li>\\n<li>\\n<p>走路由网关访问路径(多服务统一前缀)</p>\\n<p></p>\\n</li>\\n</ol>\\n\"}")
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
