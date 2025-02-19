import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/异常.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%BC%82%E5%B8%B8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"异常\",\"slug\":\"异常\",\"link\":\"#异常\",\"children\":[{\"level\":3,\"title\":\"处理异常\",\"slug\":\"处理异常\",\"link\":\"#处理异常\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/异常.md\",\"excerpt\":\"<h2>异常</h2>\\n<p>需要导包，在 java.lang 下</p>\\n<p>异常的体系结构?\\n</p>\\n<h3>处理异常</h3>\\n<blockquote>\\n<p>主要针对编译时期异常(非 RuntimeException，即 Exception)的处理，就是明明代码和格式都没问题，\\n但是编译时还是有异常警告</p>\\n</blockquote>\\n<p>捕获：一般都不用写，可以快速生成</p>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token keyword\\\">try</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 出现红线的代码</span>\\n<span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">catch</span><span class=\\\"token punctuation\\\">(</span>异常类名 对象名<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 处理方案</span>\\n<span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">finally</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 释放资源</span>\\n  <span class=\\\"token comment\\\">// 无论是否出现异常，都会执行</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
