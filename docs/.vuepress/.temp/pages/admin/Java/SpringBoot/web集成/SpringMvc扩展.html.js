import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/web集成/SpringMvc扩展.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/SpringMvc%E6%89%A9%E5%B1%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"SpringMvc 扩展\",\"slug\":\"springmvc-扩展\",\"link\":\"#springmvc-扩展\",\"children\":[]}],\"git\":{\"updatedTime\":1725381275000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/web集成/SpringMvc扩展.md\",\"excerpt\":\"<!-- @format -->\\n<h2>SpringMvc 扩展</h2>\\n<blockquote>\\n<ol>\\n<li>首先编写一个@Configuration 注解的类，用于扫描自定义的注解</li>\\n<li>这个类要实现 WebMvcConfigurer 接口，并且不能标注@EnableWebMvc 注解，否则会覆盖掉默认的配置</li>\\n<li>编写自定义的类或者说组件，并通过@Bean 把他交给 SpringBoot 管理，SpringBoot 就会帮我们自动装配</li>\\n<li>这样我们就完成了针对 SpringMvc 的自定义的扩展</li>\\n</ol>\\n</blockquote>\"}")
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
