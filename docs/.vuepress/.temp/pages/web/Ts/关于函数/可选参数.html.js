import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/可选参数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"可选参数\",\"slug\":\"可选参数\",\"link\":\"#可选参数\",\"children\":[{\"level\":3,\"title\":\"可选参数的基本用法\",\"slug\":\"可选参数的基本用法\",\"link\":\"#可选参数的基本用法\",\"children\":[]},{\"level\":3,\"title\":\"在回调函数中的可选参数\",\"slug\":\"在回调函数中的可选参数\",\"link\":\"#在回调函数中的可选参数\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/可选参数.md\",\"excerpt\":\"<h2>可选参数</h2>\\n<blockquote>\\n<p>可选参数是指在函数调用时不是必须的参数。你可以通过在参数类型后面添加一个问号 ? 来标记一个参数为可选的。这意味着在调用函数时，可以省略这个参数，如果省略了，它将默认为 undefined。</p>\\n</blockquote>\\n<h3>可选参数的基本用法</h3>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">greet</span><span class=\\\"token punctuation\\\">(</span>name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">,</span> greeting<span class=\\\"token operator\\\">?</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span>greeting <span class=\\\"token operator\\\">?</span> greeting <span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"Hello\\\"</span><span class=\\\"token punctuation\\\">,</span> name<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token function\\\">greet</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"World\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 输出: Hello World</span>\\n<span class=\\\"token function\\\">greet</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"World\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"Hi\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 输出: Hi World</span>\\n</code></pre></div>\"}")
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
