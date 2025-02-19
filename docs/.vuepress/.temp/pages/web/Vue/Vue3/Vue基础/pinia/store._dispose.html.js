import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/pinia/store._dispose.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._dispose.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"store.$dispose\",\"slug\":\"store-dispose\",\"link\":\"#store-dispose\",\"children\":[{\"level\":3,\"title\":\"用法\",\"slug\":\"用法\",\"link\":\"#用法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/pinia/store.$dispose.md\",\"excerpt\":\"<h2>store.$dispose</h2>\\n<blockquote>\\n<p><code>store.$dispose</code> 是 Pinia 提供的一个方法，用于手动销毁一个 store 实例。</p>\\n</blockquote>\\n<h3>用法</h3>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> createApp <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"vue\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> createPinia <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"pinia\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> app <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">createApp</span><span class=\\\"token punctuation\\\">(</span>App<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">const</span> pinia <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">createPinia</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> store <span class=\\\"token operator\\\">=</span> pinia<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">defineStore</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"myStore\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function-variable function\\\">state</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">count</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">actions</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token function\\\">increment</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>count<span class=\\\"token operator\\\">++</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\napp<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">use</span><span class=\\\"token punctuation\\\">(</span>pinia<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\napp<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">mount</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"#app\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 在某个时刻手动销毁 store 实例</span>\\nstore<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">$dispose</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
