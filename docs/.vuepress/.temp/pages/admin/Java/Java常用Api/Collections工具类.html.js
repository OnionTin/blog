import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/Collections工具类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Collections%E5%B7%A5%E5%85%B7%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Collections 工具类(对 List 进行排序)\",\"slug\":\"collections-工具类-对-list-进行排序\",\"link\":\"#collections-工具类-对-list-进行排序\",\"children\":[{\"level\":3,\"title\":\"常用的成员方法\",\"slug\":\"常用的成员方法\",\"link\":\"#常用的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/Collections工具类.md\",\"excerpt\":\"<h2>Collections 工具类(对 List 进行排序)</h2>\\n<p>工具类(构造方法私有的，成员方法静态的)</p>\\n<h3>常用的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>public static &lt;T extends Comparable&lt;? super T&gt;&gt; void sort(List&lt;T&gt; list)</code></td>\\n<td>对 List 集合进行排序(自定义类)</td>\\n</tr>\\n<tr>\\n<td><code>public static &lt;T&gt; void sort(List&lt;T&gt; list, Comparator&lt;? super T&gt; c)</code></td>\\n<td>对 List 集合进行排序(不含自定义类)</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
