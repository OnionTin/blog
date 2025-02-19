import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/useState.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/useState.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"useState\",\"slug\":\"usestate\",\"link\":\"#usestate\",\"children\":[{\"level\":3,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":3,\"title\":\"useState()\",\"slug\":\"usestate-1\",\"link\":\"#usestate-1\",\"children\":[]},{\"level\":3,\"title\":\"setXxxState()两种写法\",\"slug\":\"setxxxstate-两种写法\",\"link\":\"#setxxxstate-两种写法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/useState.md\",\"excerpt\":\"<!-- @format -->\\n<h2>useState</h2>\\n<blockquote>\\n<p>常用的几个钩子：useState、useEffect、useContext、useRef</p>\\n<p>State Hook 让你在不编写 class 的情况下使用 state，即函数组件也有 state 状态，并进行读写操作</p>\\n</blockquote>\\n<h3>语法</h3>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">const</span> <span class=\\\"token punctuation\\\">[</span>xxxstate<span class=\\\"token punctuation\\\">,</span> setXxxState<span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">=</span> React<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">useState</span><span class=\\\"token punctuation\\\">(</span>initialState<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
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
