import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/watchEffect函数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/watchEffect%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Vue3 中的 watch 和 watchEffect\",\"slug\":\"vue3-中的-watch-和-watcheffect\",\"link\":\"#vue3-中的-watch-和-watcheffect\",\"children\":[{\"level\":3,\"title\":\"watch 和 watchEffect 的区别\",\"slug\":\"watch-和-watcheffect-的区别\",\"link\":\"#watch-和-watcheffect-的区别\",\"children\":[]},{\"level\":3,\"title\":\"watchEffect 与 computed 的对比\",\"slug\":\"watcheffect-与-computed-的对比\",\"link\":\"#watcheffect-与-computed-的对比\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/watchEffect函数.md\",\"excerpt\":\"<h2>Vue3 中的 watch 和 watchEffect</h2>\\n<h3>watch 和 watchEffect 的区别</h3>\\n<ul>\\n<li>watch：既要指明监视的属性，也要指明监视的回调。</li>\\n<li>watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。</li>\\n</ul>\\n<h3>watchEffect 与 computed 的对比</h3>\\n<ul>\\n<li><strong>watchEffect</strong> 有点像 <code>computed</code>：\\n<ul>\\n<li>但 <code>computed</code> 注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。</li>\\n<li>而 <code>watchEffect</code> 更注重的是过程（回调函数的函数体），所以不用写返回值。</li>\\n<li><code>watchEffect</code> 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。</li>\\n</ul>\\n</li>\\n</ul>\"}")
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
