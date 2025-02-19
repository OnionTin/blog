import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/Function.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/Function.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Function\",\"slug\":\"function\",\"link\":\"#function\",\"children\":[{\"level\":3,\"title\":\"注意\",\"slug\":\"注意\",\"link\":\"#注意\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/Function.md\",\"excerpt\":\"<h2>Function</h2>\\n<blockquote>\\n<p>全局类型 Function 是所有 JavaScript 函数值的类型。它包括了所有函数对象共有的属性，如 call、bind 和 apply。此外，Function 类型的值可以被调用，并且这些调用返回 any 类型 。</p>\\n</blockquote>\\n<blockquote>\\n<p>当你在函数中声明 this 参数时，你为该函数调用时的上下文对象提供了一个类型注解。这在对象的方法或回调函数中尤其有用，以确保函数调用时 this 的类型是正确的。Printer 接口定义了一个 print 方法，该方法声明了 this 参数为 Printer 类型。这确保了 print 方法中的 this 指的是 Printer 类型的对象。</p>\\n</blockquote>\"}")
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
