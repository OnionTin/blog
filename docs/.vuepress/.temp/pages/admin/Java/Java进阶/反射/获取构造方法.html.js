import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/反射/获取构造方法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"获取构造方法\",\"slug\":\"获取构造方法\",\"link\":\"#获取构造方法\",\"children\":[{\"level\":3,\"title\":\"如何获取构造方法的对象\",\"slug\":\"如何获取构造方法的对象\",\"link\":\"#如何获取构造方法的对象\",\"children\":[]},{\"level\":3,\"title\":\"构造方法类对象中的方法\",\"slug\":\"构造方法类对象中的方法\",\"link\":\"#构造方法类对象中的方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/反射/获取构造方法.md\",\"excerpt\":\"<h2>获取构造方法</h2>\\n<h3>如何获取构造方法的对象</h3>\\n<p>获取 修饰的构造方法对象</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Constructor&lt;T&gt; getConstructor(Class&lt;?&gt;... parameterTypes)</td>\\n<td>获取单个 public 修饰的构造方法对象</td>\\n</tr>\\n<tr>\\n<td>public Constructor&lt;T&gt;[] getConstructors()</td>\\n<td>获取所有 public 修饰的构造方法对象</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
