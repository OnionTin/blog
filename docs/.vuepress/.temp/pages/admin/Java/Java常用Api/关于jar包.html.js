import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/关于jar包.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%85%B3%E4%BA%8Ejar%E5%8C%85.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"关于 jar 包\",\"slug\":\"关于-jar-包\",\"link\":\"#关于-jar-包\",\"children\":[]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/关于jar包.md\",\"excerpt\":\"<h2>关于 jar 包</h2>\\n<ol>\\n<li>如何打成 jar 包</li>\\n</ol>\\n<p>export 导出 -&gt; 选择 jar 文件类型 -&gt; 启动项选择当前项目的启动项 -&gt; 一路默认</p>\\n<ol start=\\\"2\\\">\\n<li>如何运行 jar 包</li>\\n</ol>\\n<ul>\\n<li>下载转换器，转成 .exe 文件运行</li>\\n<li>在 jar 包所在路径下，输入 java -jar 文件名.jar 即可运行</li>\\n</ul>\\n\"}")
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
