import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/void.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/void.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"void\",\"slug\":\"void\",\"link\":\"#void\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/void.md\",\"excerpt\":\"<h2>void</h2>\\n<blockquote>\\n<p>函数没有返回值的时候用</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">a</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token comment\\\">// 或者</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token keyword\\\">undefined</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token comment\\\">// 或者</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token keyword\\\">null</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
