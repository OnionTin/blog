import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/jsp/jsp语法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jsp%E8%AF%AD%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"jsp 语法\",\"slug\":\"jsp-语法\",\"link\":\"#jsp-语法\",\"children\":[{\"level\":3,\"title\":\"jsp 脚本\",\"slug\":\"jsp-脚本\",\"link\":\"#jsp-脚本\",\"children\":[]},{\"level\":3,\"title\":\"jsp 指令\",\"slug\":\"jsp-指令\",\"link\":\"#jsp-指令\",\"children\":[]},{\"level\":3,\"title\":\"jsp 注释\",\"slug\":\"jsp-注释\",\"link\":\"#jsp-注释\",\"children\":[]},{\"level\":3,\"title\":\"jsp 九大内置对象\",\"slug\":\"jsp-九大内置对象\",\"link\":\"#jsp-九大内置对象\",\"children\":[]},{\"level\":3,\"title\":\"EL 表达式\",\"slug\":\"el-表达式\",\"link\":\"#el-表达式\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/jsp/jsp语法.md\",\"excerpt\":\"<h2>jsp 语法</h2>\\n<h3>jsp 脚本</h3>\\n<ol>\\n<li>\\n<p>格式一：<code>&lt;% java 代码 %&gt;</code></p>\\n<p>在这里写的 java 代码，翻译后存在于 servlet 类中的 server() 方法内部(类似于内部变量、方法)</p>\\n</li>\\n<li>\\n<p>格式二：<code>&lt;%! java 代码 %&gt;</code></p>\\n<p>在这里写的 java 代码，翻译后存在于 servlet 类中的成员位置上(类似于成员变量、方法)</p>\\n</li>\\n<li>\\n<p>格式三：<code>&lt;%= java 代码 %&gt;</code></p>\\n<p>在这里写的 java 代码翻译后会打印到浏览器页面上</p>\\n</li>\\n</ol>\"}")
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
