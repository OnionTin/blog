import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/refEffect.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/refEffect.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"refEffect\",\"slug\":\"refeffect\",\"link\":\"#refeffect\",\"children\":[{\"level\":3,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":3,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"link\":\"#使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/refEffect.md\",\"excerpt\":\"<!-- @format -->\\n<h2>refEffect</h2>\\n<blockquote>\\n<p>RefHook 可以在函数组件中存储/查找组件内的标签或任意其它数据</p>\\n</blockquote>\\n<h3>语法</h3>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token keyword\\\">const</span> refContainer <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">useRef</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
