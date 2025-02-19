import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/pinia/pinia与vuex的区别.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/pinia%E4%B8%8Evuex%E7%9A%84%E5%8C%BA%E5%88%AB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"pinia 和 vuex 的区别\",\"slug\":\"pinia-和-vuex-的区别\",\"link\":\"#pinia-和-vuex-的区别\",\"children\":[]}],\"git\":{\"updatedTime\":1727600594000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/pinia/pinia与vuex的区别.md\",\"excerpt\":\"<h2>pinia 和 vuex 的区别</h2>\\n<ol>\\n<li>pinia 是一个更轻量级的状态管理库，而 vuex 是一个更重量级的状态管理库。</li>\\n<li>pinia 不需要 mutations，而 vuex 需要 mutations。</li>\\n<li>pinia 可以直接修改 state 中的数据，而 vuex 需要通过 mutations 来修改 state 中的数据。</li>\\n<li>pinia 的模块化不需要 modules，而 vuex 的模块化需要 modules。</li>\\n<li>pinia 的热模块替换功能比 vuex 更好。</li>\\n<li>pinia 的插件和社区支持比 vuex 更好。</li>\\n<li>pinia 的 TypeScript 支持比 vuex 更好。</li>\\n<li>pinia 的 devtools 支持比 vuex 更好。</li>\\n</ol>\"}")
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
