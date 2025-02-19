import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/常用类型/字面量.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E5%AD%97%E9%9D%A2%E9%87%8F.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"字面量\",\"slug\":\"字面量\",\"link\":\"#字面量\",\"children\":[{\"level\":3,\"title\":\"使用场景\",\"slug\":\"使用场景\",\"link\":\"#使用场景\",\"children\":[]},{\"level\":3,\"title\":\"字符串字面量类型\",\"slug\":\"字符串字面量类型\",\"link\":\"#字符串字面量类型\",\"children\":[]},{\"level\":3,\"title\":\"数字数面量类型\",\"slug\":\"数字数面量类型\",\"link\":\"#数字数面量类型\",\"children\":[]},{\"level\":3,\"title\":\"布尔字面量类型(通常用于类型守卫)\",\"slug\":\"布尔字面量类型-通常用于类型守卫\",\"link\":\"#布尔字面量类型-通常用于类型守卫\",\"children\":[]},{\"level\":3,\"title\":\"模板字面量类型\",\"slug\":\"模板字面量类型\",\"link\":\"#模板字面量类型\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/常用类型/字面量.md\",\"excerpt\":\"<h2>字面量</h2>\\n<blockquote>\\n<p>字面量类型是指直接给出具体值的类型。它们通常用于那些只能有有限个具体值的变量。字面量类型可以是字符串字面量类型、数字字面量类型或者其他原始数据类型的字面量。</p>\\n</blockquote>\\n<h3>使用场景</h3>\\n<blockquote>\\n<p>字面量类型在以下场景中非常有用：</p>\\n<ol>\\n<li>限制变量的值：确保变量只能是某些特定的值。</li>\\n<li>类型守卫：与类型谓词结合使用，进行类型检查。</li>\\n<li>函数重载：用于区分函数的重载版本。</li>\\n<li>枚举类型的替代：在某些情况下，字面量类型可以作为枚举类型的替代。</li>\\n</ol>\\n</blockquote>\"}")
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
