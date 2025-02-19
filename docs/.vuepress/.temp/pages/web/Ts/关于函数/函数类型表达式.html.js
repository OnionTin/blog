import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/函数类型表达式.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E8%A1%A8%E8%BE%BE%E5%BC%8F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"函数类型表达式\",\"slug\":\"函数类型表达式\",\"link\":\"#函数类型表达式\",\"children\":[{\"level\":3,\"title\":\"基本函数类型表达式\",\"slug\":\"基本函数类型表达式\",\"link\":\"#基本函数类型表达式\",\"children\":[]},{\"level\":3,\"title\":\"函数类型的组成部分\",\"slug\":\"函数类型的组成部分\",\"link\":\"#函数类型的组成部分\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/函数类型表达式.md\",\"excerpt\":\"<h2>函数类型表达式</h2>\\n<blockquote>\\n<p>函数类型表达式用于定义函数的类型。这包括函数的参数类型、返回值类型以及可选的 this 上下文类型。函数类型表达式可以是匿名的，也可以是具名的（类型别名）。</p>\\n</blockquote>\\n<h3>基本函数类型表达式</h3>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">// 匿名函数类型表达式</span>\\n<span class=\\\"token keyword\\\">let</span> <span class=\\\"token function-variable function\\\">myFunction</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span>param<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 具名函数类型表达式</span>\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">MyFunctionType</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span>param<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
