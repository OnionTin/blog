import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/type(类型别名).html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/type(%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D).html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"type(类型别名)\",\"slug\":\"type-类型别名\",\"link\":\"#type-类型别名\",\"children\":[]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/type(类型别名).md\",\"excerpt\":\"<h2>type(类型别名)</h2>\\n<blockquote>\\n<p>类型别名允许你为复杂的类型定义创建简洁的名称，从而简化代码</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">type</span> <span class=\\\"token class-name\\\">UserID</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 类型别名</span>\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">getUserByID</span><span class=\\\"token punctuation\\\">(</span>id<span class=\\\"token operator\\\">:</span> UserID<span class=\\\"token punctuation\\\">)</span><span class=\\\"token operator\\\">:</span> User <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\">// 实现根据 ID 获取用户</span>\\n  <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"Fetching user with ID:\\\"</span><span class=\\\"token punctuation\\\">,</span> id<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">as</span> User<span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 模拟返回用户</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
