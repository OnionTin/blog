import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/单列集合Collection/Collection接口.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Collection%E6%8E%A5%E5%8F%A3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Collection 接口\",\"slug\":\"collection-接口\",\"link\":\"#collection-接口\",\"children\":[{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"集合的遍历\",\"slug\":\"集合的遍历\",\"link\":\"#集合的遍历\",\"children\":[]},{\"level\":3,\"title\":\"方法的应用\",\"slug\":\"方法的应用\",\"link\":\"#方法的应用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/单列集合Collection/Collection接口.md\",\"excerpt\":\"<h2>Collection 接口</h2>\\n<p>单列集合；需要导包，在 java.util 下；Collection 接口，不是类，是单列集合的顶层</p>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>boolean add(Object e)</td>\\n<td>添加元素</td>\\n</tr>\\n<tr>\\n<td>boolean addAll(Collection c)</td>\\n<td>添加集合</td>\\n</tr>\\n<tr>\\n<td>boolean remove(Object o)</td>\\n<td>删除元素</td>\\n</tr>\\n<tr>\\n<td>boolean removeIf(Predicate filter)</td>\\n<td>按照条件删除元素</td>\\n</tr>\\n<tr>\\n<td>void clear()</td>\\n<td>清空集合</td>\\n</tr>\\n<tr>\\n<td>int size()</td>\\n<td>获取集合长度</td>\\n</tr>\\n<tr>\\n<td>boolean contains(Object o)</td>\\n<td>是否包含</td>\\n</tr>\\n<tr>\\n<td>boolean isEmpty</td>\\n<td>是否为空</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><code>Iterator&lt;E&gt; iterator()</code></td>\\n<td>获取迭代器对象</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
