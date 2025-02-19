import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/技术点/侦听器watch与watchEffect.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E4%BE%A6%E5%90%AC%E5%99%A8watch%E4%B8%8EwatchEffect.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"侦听器 watch 与 watchEffect\",\"slug\":\"侦听器-watch-与-watcheffect\",\"link\":\"#侦听器-watch-与-watcheffect\",\"children\":[{\"level\":3,\"title\":\"watchEffect\",\"slug\":\"watcheffect\",\"link\":\"#watcheffect\",\"children\":[]},{\"level\":3,\"title\":\"watch\",\"slug\":\"watch\",\"link\":\"#watch\",\"children\":[]},{\"level\":3,\"title\":\"选择 watch 还是 watchEffect？\",\"slug\":\"选择-watch-还是-watcheffect\",\"link\":\"#选择-watch-还是-watcheffect\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/技术点/侦听器watch与watchEffect.md\",\"excerpt\":\"<h2>侦听器 watch 与 watchEffect</h2>\\n<blockquote>\\n<p>在 Vue 3 中，<code>watch</code> 和 <code>watchEffect</code> 是用于响应式侦听的 API，它们允许你对响应式数据的变化做出反应。</p>\\n</blockquote>\\n<h3><code>watchEffect</code></h3>\\n<blockquote>\\n<p><code>watchEffect</code> 侦听器在被创建时立即执行，并在其依赖的响应式数据变化时重新执行。任何 someReactiveSource 或 anotherReactiveSource 的变化都会触发回调函数的重新执行。</p>\\n</blockquote>\"}")
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
