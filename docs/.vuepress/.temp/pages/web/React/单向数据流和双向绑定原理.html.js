import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/单向数据流和双向绑定原理.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81%E5%92%8C%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"单向数据流和双向绑定原理\",\"slug\":\"单向数据流和双向绑定原理\",\"link\":\"#单向数据流和双向绑定原理\",\"children\":[]}],\"git\":{\"updatedTime\":1727684271000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/单向数据流和双向绑定原理.md\",\"excerpt\":\"<h2>单向数据流和双向绑定原理</h2>\\n<blockquote>\\n<p>react 的<code>单向数据流</code>是指只允许父组件向子组件传递数据，子组件绝对不能修改父组件传的数据，如果想要修改数据，则要在子组件中执行父组件传递过来的回调函数，提醒父组件对数据进行修改。数据单向流让所有的状态改变可以追溯，有利于应用的可维护性；angular 中实现了双向数据绑定，代码编写方便，但是不利于维护</p>\\n</blockquote>\\n\"}")
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
