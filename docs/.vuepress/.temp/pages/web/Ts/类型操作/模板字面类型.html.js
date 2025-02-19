import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类型操作/模板字面类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%A8%A1%E6%9D%BF%E5%AD%97%E9%9D%A2%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"模板字面类型\",\"slug\":\"模板字面类型\",\"link\":\"#模板字面类型\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/类型操作/模板字面类型.md\",\"excerpt\":\"<h2>模板字面类型</h2>\\n<blockquote>\\n<p>模板字面类型（Template Literal Types）是从字符串字面类型构建的，并且可以通过联合类型扩展成多个字符串。它们与 JavaScript 中的模板字面字符串具有相同的语法，但用于类型位置。当与具体的字面类型一起使用时，模板字面通过连接内容生成新的字符串字面类型\\n。</p>\\n</blockquote>\\n<blockquote>\\n<p>定义一个类型，它通过连接一个已知的字符串和一个泛型参数来创建一个新的字符串字面类型:</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">World</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"world\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">Greeting</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token template-string\\\"><span class=\\\"token template-punctuation string\\\">`</span><span class=\\\"token string\\\">hello </span><span class=\\\"token interpolation\\\"><span class=\\\"token interpolation-punctuation punctuation\\\">${</span>World<span class=\\\"token interpolation-punctuation punctuation\\\">}</span></span><span class=\\\"token template-punctuation string\\\">`</span></span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// Greeting 类型为 \\\"hello world\\\"</span>\\n</code></pre></div>\"}")
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
