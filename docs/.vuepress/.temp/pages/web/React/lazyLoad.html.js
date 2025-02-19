import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/lazyLoad.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/lazyLoad.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"lazyLoad\",\"slug\":\"lazyload\",\"link\":\"#lazyload\",\"children\":[{\"level\":3,\"title\":\"路由组件的 lazyLoad\",\"slug\":\"路由组件的-lazyload\",\"link\":\"#路由组件的-lazyload\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/lazyLoad.md\",\"excerpt\":\"<!-- @format -->\\n<h2>lazyLoad</h2>\\n<h3>路由组件的 lazyLoad</h3>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token comment\\\">// 1.通过 React 的 lazy 函数配合 import()函数动态加载路由组件===&gt;路由组件代码会被分开打包</span>\\n<span class=\\\"token keyword\\\">const</span> Login <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">lazy</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token keyword\\\">import</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'@/pages/Login'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
