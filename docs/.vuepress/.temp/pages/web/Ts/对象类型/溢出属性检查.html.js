import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/对象类型/溢出属性检查.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%BA%A2%E5%87%BA%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"溢出属性检查\",\"slug\":\"溢出属性检查\",\"link\":\"#溢出属性检查\",\"children\":[{\"level\":3,\"title\":\"要解决这个问题，你可以做以下几件事情之一：\",\"slug\":\"要解决这个问题-你可以做以下几件事情之一\",\"link\":\"#要解决这个问题-你可以做以下几件事情之一\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/Ts/对象类型/溢出属性检查.md\",\"excerpt\":\"<h2>溢出属性检查</h2>\\n<blockquote>\\n<p>对象类型的溢出属性检查（Excess Property Checks）是一种类型安全特性，它会在对象字面量被赋值给变量或者作为参数传递给函数时，检查对象字面量是否包含目标类型未定义的属性。如果对象字面量有目标类型中不存在的属性，编译器将会报错。</p>\\n</blockquote>\\n<blockquote>\\n<p>例如，如果有一个接口 SquareConfig，它定义了 color 和 width 属性，然后你尝试创建一个对象字面量并将其赋值给一个 SquareConfig 类型的变量，但对象字面量中包含了一个 SquareConfig 未定义的属性，如下所示：</p>\\n</blockquote>\"}")
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
