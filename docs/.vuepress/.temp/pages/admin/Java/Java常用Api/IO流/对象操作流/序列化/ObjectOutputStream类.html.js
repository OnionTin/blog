import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/IO流/对象操作流/序列化/ObjectOutputStream类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E6%B5%81/%E5%BA%8F%E5%88%97%E5%8C%96/ObjectOutputStream%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ObjectOutputStream 类\",\"slug\":\"objectoutputstream-类\",\"link\":\"#objectoutputstream-类\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/IO流/对象操作流/序列化/ObjectOutputStream类.md\",\"excerpt\":\"<h2>ObjectOutputStream 类</h2>\\n<p>序列化流</p>\\n<blockquote>\\n<p>序列化：将内存中的对象，以流的形式，从内存中写出到本地。\\n序列化后的文件看不懂没关系，因为本身就是需要被反序列化才能用的东西\\n另外对象一定要实现 Serializable 类，否则会报异常</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public ObjectOutputStream(OutputStream out)</td>\\n<td>创建一个向指定的 OutputStream 写入 Java 对象序列的 ObjectOutputStream</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
