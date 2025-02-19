import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类型操作/keyof类型运算符.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/keyof%E7%B1%BB%E5%9E%8B%E8%BF%90%E7%AE%97%E7%AC%A6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"keyof 类型运算符\",\"slug\":\"keyof-类型运算符\",\"link\":\"#keyof-类型运算符\",\"children\":[{\"level\":3,\"title\":\"基本用法\",\"slug\":\"基本用法\",\"link\":\"#基本用法\",\"children\":[]},{\"level\":3,\"title\":\"结合索引签名\",\"slug\":\"结合索引签名\",\"link\":\"#结合索引签名\",\"children\":[]},{\"level\":3,\"title\":\"字符串字面量类型\",\"slug\":\"字符串字面量类型\",\"link\":\"#字符串字面量类型\",\"children\":[]},{\"level\":3,\"title\":\"在泛型中的应用\",\"slug\":\"在泛型中的应用\",\"link\":\"#在泛型中的应用\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/类型操作/keyof类型运算符.md\",\"excerpt\":\"<h2>keyof 类型运算符</h2>\\n<blockquote>\\n<p>keyof 类型运算符用于获取一个类型的所有键的联合，这些键可以是类型中的属性名、索引签名的键，或者是类型的字符串字面量类型。使用 keyof 类型运算符可以提高代码的复用性和灵活性。</p>\\n</blockquote>\\n<h3>基本用法</h3>\\n<blockquote>\\n<p>PointKeys 是一个类型，它包含了 Point 类型的所有键，即 \\\"x\\\" | \\\"y\\\" | \\\"z\\\"。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">Point</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  x<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n  y<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n  z<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">PointKeys</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">keyof</span> Point<span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token comment\\\">// \\\"x\\\" | \\\"y\\\" | \\\"z\\\"</span>\\n</code></pre></div>\"}")
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
