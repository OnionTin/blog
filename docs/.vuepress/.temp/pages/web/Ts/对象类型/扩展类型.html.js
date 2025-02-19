import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/对象类型/扩展类型.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%89%A9%E5%B1%95%E7%B1%BB%E5%9E%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"扩展类型\",\"slug\":\"扩展类型\",\"link\":\"#扩展类型\",\"children\":[{\"level\":3,\"title\":\"使用 interface 扩展类型\",\"slug\":\"使用-interface-扩展类型\",\"link\":\"#使用-interface-扩展类型\",\"children\":[]},{\"level\":3,\"title\":\"使用 type 扩展类型\",\"slug\":\"使用-type-扩展类型\",\"link\":\"#使用-type-扩展类型\",\"children\":[]},{\"level\":3,\"title\":\"扩展现有类型\",\"slug\":\"扩展现有类型\",\"link\":\"#扩展现有类型\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/对象类型/扩展类型.md\",\"excerpt\":\"<h2>扩展类型</h2>\\n<blockquote>\\n<p>对象类型的扩展可以通过接口（interface）和类型别名（type）来实现。这两种方式都允许你基于现有的类型定义新的类型，从而增加新的属性或方法。</p>\\n</blockquote>\\n<h3>使用 interface 扩展类型</h3>\\n<blockquote>\\n<p>接口可以通过 extends 关键字来扩展一个或多个接口，从而继承它们的属性。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">Bear</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  honey<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">boolean</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">const</span> bear<span class=\\\"token operator\\\">:</span> Bear <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  name<span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\" Winnie\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n  honey<span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
