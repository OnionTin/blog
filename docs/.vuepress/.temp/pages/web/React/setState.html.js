import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/setState.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/setState.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"setState\",\"slug\":\"setstate\",\"link\":\"#setstate\",\"children\":[{\"level\":3,\"title\":\"setState 更新状态的 2 种写法\",\"slug\":\"setstate-更新状态的-2-种写法\",\"link\":\"#setstate-更新状态的-2-种写法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/setState.md\",\"excerpt\":\"<!-- @format -->\\n<h2>setState</h2>\\n<blockquote>\\n<p>setState 触发更新是异步的，函数式的话在函数体内能够获取到最新的值</p>\\n</blockquote>\\n<h3>setState 更新状态的 2 种写法</h3>\\n<h4>1. setState(stateChange,[callback]) ------对象式的 setState</h4>\\n<ol>\\n<li>stateChange 为状态改变对象(该对象可以体现出状态的更改)</li>\\n<li>callback 是可选的回调函数，它在状态更新完毕、界面也更新后(render 调用后)才被调用</li>\\n</ol>\"}")
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
