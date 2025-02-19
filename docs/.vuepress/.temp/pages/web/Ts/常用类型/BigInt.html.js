import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/BigInt.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/BigInt.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"BigInt\",\"slug\":\"bigint\",\"link\":\"#bigint\",\"children\":[{\"level\":3,\"title\":\"创建 BigInt\",\"slug\":\"创建-bigint\",\"link\":\"#创建-bigint\",\"children\":[]},{\"level\":3,\"title\":\"BigInt 运算\",\"slug\":\"bigint-运算\",\"link\":\"#bigint-运算\",\"children\":[]},{\"level\":3,\"title\":\"类型检查\",\"slug\":\"类型检查\",\"link\":\"#类型检查\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]},{\"level\":3,\"title\":\"限制与建议\",\"slug\":\"限制与建议\",\"link\":\"#限制与建议\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/BigInt.md\",\"excerpt\":\"<h2>BigInt</h2>\\n<blockquote>\\n<p>BigInt 是一种特殊的数据类型，用于表示大于 2^53 - 1 的整数，这个值是 JavaScript 中可以用 Number 表示的最大整数。BigInt 可以表示任意大的整数，非常适合用于处理大整数运算，如加密算法、大数据处理等场景。</p>\\n</blockquote>\\n<h3>创建 BigInt</h3>\\n<blockquote>\\n<p>可以通过在整数后面添加 n 后缀，或者使用 BigInt() 函数创建 BigInt。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token comment\\\">// 使用 n 后缀</span>\\n<span class=\\\"token keyword\\\">const</span> bigNumber1 <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">123456789012345678901234567890n</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// 使用 BigInt 函数</span>\\n<span class=\\\"token keyword\\\">const</span> bigNumber2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">BigInt</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"123456789012345678901234567890\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
