import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/yaml/yaml.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/yaml/yaml.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"yaml\",\"slug\":\"yaml\",\"link\":\"#yaml\",\"children\":[{\"level\":3,\"title\":\"yaml 语法\",\"slug\":\"yaml-语法\",\"link\":\"#yaml-语法\",\"children\":[]},{\"level\":3,\"title\":\"yaml 与 properties 的区别\",\"slug\":\"yaml-与-properties-的区别\",\"link\":\"#yaml-与-properties-的区别\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725354999000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/yaml/yaml.md\",\"excerpt\":\"<h2>yaml</h2>\\n<blockquote>\\n<p><a href=\\\"https://docs.spring.io/spring-boot/appendix/application-properties/index.html#appendix.application-properties\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">官方配置</a></p>\\n<p>yaml 比 properties 更加简洁，并且支持数据类型更多</p>\\n<p>yaml 文件可以注入到配置类中</p>\\n</blockquote>\\n<h3>yaml 语法</h3>\"}")
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
