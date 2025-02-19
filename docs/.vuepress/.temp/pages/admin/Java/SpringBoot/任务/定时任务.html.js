import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/任务/定时任务.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/%E4%BB%BB%E5%8A%A1/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"定时任务\",\"slug\":\"定时任务\",\"link\":\"#定时任务\",\"children\":[{\"level\":3,\"title\":\"1. 使用注解\",\"slug\":\"_1-使用注解\",\"link\":\"#_1-使用注解\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726075894000,\"contributors\":[{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringBoot/任务/定时任务.md\",\"excerpt\":\"<!-- @format -->\\n<h2>定时任务</h2>\\n<h3>1. 使用注解</h3>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">// 在启动类上添加@EnableScheduling注解</span>\\n<span class=\\\"token annotation punctuation\\\">@SpringBootApplication</span>\\n<span class=\\\"token annotation punctuation\\\">@EnableScheduling</span>\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">SpringbootApplication</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">static</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">main</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span> args<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token class-name\\\">SpringApplication</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">run</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">SpringbootApplication</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token keyword\\\">class</span><span class=\\\"token punctuation\\\">,</span> args<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
