import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/yaml/多环境配置.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/yaml/%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"多环境配置\",\"slug\":\"多环境配置\",\"link\":\"#多环境配置\",\"children\":[{\"level\":3,\"title\":\"配置文件的位置优先级\",\"slug\":\"配置文件的位置优先级\",\"link\":\"#配置文件的位置优先级\",\"children\":[]},{\"level\":3,\"title\":\"多环境配置\",\"slug\":\"多环境配置-1\",\"link\":\"#多环境配置-1\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725354999000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/yaml/多环境配置.md\",\"excerpt\":\"<h2>多环境配置</h2>\\n<blockquote>\\n<p>开发环境、测试环境、生产环境等</p>\\n</blockquote>\\n<h3>配置文件的位置优先级</h3>\\n<blockquote>\\n<p>下边四个位置，配置文件的优先级由高到低，优先级高的会覆盖优先级低的</p>\\n</blockquote>\\n<ol>\\n<li>在项目根目录下的 config 文件夹下</li>\\n<li>在项目根目录下</li>\\n<li>在 src/main/resources/config 文件夹下</li>\\n<li>在 src/main/resources 文件夹下</li>\\n</ol>\\n<h3>多环境配置</h3>\"}")
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
