import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/pinia/store._forceUpdate.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._forceUpdate.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"store.$forceUpdate\",\"slug\":\"store-forceupdate\",\"link\":\"#store-forceupdate\",\"children\":[]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/pinia/store.$forceUpdate.md\",\"excerpt\":\"<h2>store.$forceUpdate</h2>\\n<blockquote>\\n<p>强制更新 store 中的数据</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> defineStore <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"pinia\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">const</span> useStore <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">defineStore</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"main\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function-variable function\\\">state</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">count</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">actions</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token function\\\">increment</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>count<span class=\\\"token operator\\\">++</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token function\\\">$forceUpdate</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">$patch</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token literal-property property\\\">count</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>count <span class=\\\"token operator\\\">+</span> <span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">,</span>\\n      <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
