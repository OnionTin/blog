import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/反射/获取成员方法对象.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B1%A1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"获取成员方法对象\",\"slug\":\"获取成员方法对象\",\"link\":\"#获取成员方法对象\",\"children\":[{\"level\":3,\"title\":\"如何获取普通的成员方法的对象\",\"slug\":\"如何获取普通的成员方法的对象\",\"link\":\"#如何获取普通的成员方法的对象\",\"children\":[]},{\"level\":3,\"title\":\"Method 类中的方法\",\"slug\":\"method-类中的方法\",\"link\":\"#method-类中的方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/反射/获取成员方法对象.md\",\"excerpt\":\"<h2>获取成员方法对象</h2>\\n<p>成员方法对象的访问权限相关的要求，与<a href=\\\"/blog/admin/Java/Java进阶/反射/获取构造方法.md\\\" target=\\\"_blank\\\">构造方法对象</a>的访问权限相关的要求相同，都涉及到相关内容。</p>\\n<h3>如何获取普通的成员方法的对象</h3>\\n<p>获取 修饰的成员变量对象</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Method getMethod(String name, Class&lt;?&gt;... parameterTypes)</td>\\n<td>获取单个成员方法对象</td>\\n</tr>\\n<tr>\\n<td>public Method[] getMethods()</td>\\n<td>获取成员方法对象</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
