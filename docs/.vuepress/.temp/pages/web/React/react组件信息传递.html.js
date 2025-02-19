import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/react组件信息传递.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/react%E7%BB%84%E4%BB%B6%E4%BF%A1%E6%81%AF%E4%BC%A0%E9%80%92.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react 组件信息传递\",\"slug\":\"react-组件信息传递\",\"link\":\"#react-组件信息传递\",\"children\":[]}],\"git\":{\"updatedTime\":1727684271000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/react组件信息传递.md\",\"excerpt\":\"<h2>react 组件信息传递</h2>\\n<ol>\\n<li>（父组件）向（子组件）传递信息 :&nbsp;<strong>porps 传值</strong></li>\\n<li>（父组件）向更深层的（子组件） 进行传递信息 :&nbsp;<strong>context</strong></li>\\n<li>（子组件）向（父组件）传递信息：<strong>callback 事件</strong></li>\\n<li>没有任何嵌套关系的组件之间传值（比如：兄弟组件之间传值）:&nbsp;<strong>利用共同父组件 context 通信、自定义事件</strong></li>\\n<li>利用 react-redux 进行组件之间的状态信息共享 :&nbsp;<strong>组件间状态信息共享：redux、flux、mobx 等</strong></li>\\n<li>发布订阅: 利用第三方库, PubSubJs</li>\\n</ol>\"}")
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
