import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/XML/XML解析.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E8%A7%A3%E6%9E%90.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"XML 解析\",\"slug\":\"xml-解析\",\"link\":\"#xml-解析\",\"children\":[{\"level\":3,\"title\":\"常见的解析器\",\"slug\":\"常见的解析器\",\"link\":\"#常见的解析器\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/XML/XML解析.md\",\"excerpt\":\"<h2>XML 解析</h2>\\n<blockquote>\\n<p>xml 当作配置文件使用时，所谓解析就是获取这些重要的数据；分 Dom 解析和 SAX 解析。</p>\\n<p>Dom 解析：一次性把整个 xml 文件加载到内存形成 DOM 树，通过 document 对象实现增删改查；但是树太大的话会比较占内存。</p>\\n<p>SAX 解析：逐行读取 xml 文件，边读边解析，占用内存少，适合于 xml 文件较大的情况；但是因为边解析同时边释放，所以只能查，不能增删改。</p>\\n</blockquote>\\n<h3>常见的解析器</h3>\\n<p>DOM4J：开源组织提供的，基于 DOM 和 SAX 综合方式的解析。</p>\"}")
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
