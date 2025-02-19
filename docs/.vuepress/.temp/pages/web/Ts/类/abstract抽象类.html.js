import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/类/abstract抽象类.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E7%B1%BB/abstract%E6%8A%BD%E8%B1%A1%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"abstract 抽象类\",\"slug\":\"abstract-抽象类\",\"link\":\"#abstract-抽象类\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/类/abstract抽象类.md\",\"excerpt\":\"<h2>abstract 抽象类</h2>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">abstract</span> <span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 抽象类: 专门用来给别人继承的, 没有其他作作用, 不能创建对象</span>\\n  name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token function\\\">constructor</span><span class=\\\"token punctuation\\\">(</span>name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">,</span> age<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> name<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token keyword\\\">abstract</span> <span class=\\\"token function\\\">say</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">void</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 抽象方法, 必须被字类重写</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Dog</span> <span class=\\\"token keyword\\\">extends</span> <span class=\\\"token class-name\\\">Animal</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 抽象方法重写</span>\\n  <span class=\\\"token function\\\">say</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">super</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">say</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token keyword\\\">const</span> dog <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">Dog</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"小黑\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\ndog<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">say</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
