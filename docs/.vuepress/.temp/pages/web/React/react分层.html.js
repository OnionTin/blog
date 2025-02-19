import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/react分层.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/react%E5%88%86%E5%B1%82.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react 分层\",\"slug\":\"react-分层\",\"link\":\"#react-分层\",\"children\":[]}],\"git\":{\"updatedTime\":1727684271000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/react分层.md\",\"excerpt\":\"<h2>react 分层</h2>\\n<p><code>State</code>: 数据状态</p>\\n<p><code>Reducer</code>：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。</p>\\n<p><code>View</code>：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。</p>\\n<p><code>Action</code>：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。</p>\\n\"}")
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
