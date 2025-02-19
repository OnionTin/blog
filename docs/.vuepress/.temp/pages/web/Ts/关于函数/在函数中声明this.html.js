import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/在函数中声明this.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%9C%A8%E5%87%BD%E6%95%B0%E4%B8%AD%E5%A3%B0%E6%98%8Ethis.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"在函数中声明 this\",\"slug\":\"在函数中声明-this\",\"link\":\"#在函数中声明-this\",\"children\":[{\"level\":3,\"title\":\"在对象方法中声明 this\",\"slug\":\"在对象方法中声明-this\",\"link\":\"#在对象方法中声明-this\",\"children\":[]},{\"level\":3,\"title\":\"在回调函数中声明 this\",\"slug\":\"在回调函数中声明-this\",\"link\":\"#在回调函数中声明-this\",\"children\":[]},{\"level\":3,\"title\":\"使用箭头函数和 this 参数\",\"slug\":\"使用箭头函数和-this-参数\",\"link\":\"#使用箭头函数和-this-参数\",\"children\":[]},{\"level\":3,\"title\":\"注意事项\",\"slug\":\"注意事项\",\"link\":\"#注意事项\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/在函数中声明this.md\",\"excerpt\":\"<h2>在函数中声明 this</h2>\\n<blockquote>\\n<p>可以在函数中声明 this 参数，以指定调用该函数时上下文对象的类型。这通常在对象的方法或回调函数中使用，以确保函数调用时 this 的类型正确。通过在函数中声明 this 参数，你可以提高代码的类型安全性，并减少因 this 引起的错误。</p>\\n</blockquote>\\n<h3>在对象方法中声明 this</h3>\\n<blockquote>\\n<p>在对象的方法中使用 this 时，你可以声明 this 参数来指定对象本身的类型。greet 方法声明了 this: User，这告诉 TypeScript this 指的是 User 类型的对象。</p>\\n</blockquote>\"}")
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
