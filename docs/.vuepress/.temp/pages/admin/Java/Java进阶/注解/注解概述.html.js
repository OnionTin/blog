import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/注解/注解概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E6%B3%A8%E8%A7%A3%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"注解概述\",\"slug\":\"注解概述\",\"link\":\"#注解概述\",\"children\":[{\"level\":3,\"title\":\"注解的作用\",\"slug\":\"注解的作用\",\"link\":\"#注解的作用\",\"children\":[]},{\"level\":3,\"title\":\"注解分类\",\"slug\":\"注解分类\",\"link\":\"#注解分类\",\"children\":[]},{\"level\":3,\"title\":\"注解使用时的位置\",\"slug\":\"注解使用时的位置\",\"link\":\"#注解使用时的位置\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/注解/注解概述.md\",\"excerpt\":\"<h2>注解概述</h2>\\n<blockquote>\\n<p>用来解释说明的，注解也叫元数据。</p>\\n<p>注释是给人看的，注解是给程序看的。</p>\\n</blockquote>\\n<h3>注解的作用</h3>\\n<ol>\\n<li>生成文档：可以使用 javadoc 工具编译 java 文件，使其根据注解生成 java 参考帮助文档。</li>\\n<li>编译检查：通过代码里标识的元数据让编译器能够实现基本的编译检查【Override】</li>\\n<li>代码分析：通过代码里标识的元数据对代码进行分析【使用反射】</li>\\n<li>实现配置文件功能：相当于配置文件</li>\\n</ol>\\n<h3>注解分类</h3>\"}")
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
