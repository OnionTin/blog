import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/集合总结.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E9%9B%86%E5%90%88%E6%80%BB%E7%BB%93.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"集合总结\",\"slug\":\"集合总结\",\"link\":\"#集合总结\",\"children\":[{\"level\":3,\"title\":\"集合的特点\",\"slug\":\"集合的特点\",\"link\":\"#集合的特点\",\"children\":[]},{\"level\":3,\"title\":\"集合 Tree 结构排序\",\"slug\":\"集合-tree-结构排序\",\"link\":\"#集合-tree-结构排序\",\"children\":[]},{\"level\":3,\"title\":\"集合 List 结构排序\",\"slug\":\"集合-list-结构排序\",\"link\":\"#集合-list-结构排序\",\"children\":[]},{\"level\":3,\"title\":\"集合的遍历\",\"slug\":\"集合的遍历\",\"link\":\"#集合的遍历\",\"children\":[]},{\"level\":3,\"title\":\"集合的常用方法\",\"slug\":\"集合的常用方法\",\"link\":\"#集合的常用方法\",\"children\":[]},{\"level\":3,\"title\":\"集合的使用\",\"slug\":\"集合的使用\",\"link\":\"#集合的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/集合总结.md\",\"excerpt\":\"<h2>集合总结</h2>\\n<h3>集合的特点</h3>\\n<p>单列集合：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>接口名</th>\\n<th>类名</th>\\n<th>特性</th>\\n<th>查询</th>\\n<th>增删</th>\\n<th>底层</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>List</td>\\n<td>-</td>\\n<td></td>\\n<td>-</td>\\n<td>-</td>\\n<td>-</td>\\n</tr>\\n<tr>\\n<td>List</td>\\n<td>ArrayList</td>\\n<td>同上</td>\\n<td></td>\\n<td>慢</td>\\n<td>数组</td>\\n</tr>\\n<tr>\\n<td>List</td>\\n<td>LinkedList</td>\\n<td>同上</td>\\n<td>慢</td>\\n<td></td>\\n<td>链表</td>\\n</tr>\\n<tr>\\n<td>List</td>\\n<td>Vector</td>\\n<td>同上</td>\\n<td>慢</td>\\n<td>慢</td>\\n<td>数组</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>-</td>\\n<td></td>\\n<td>-</td>\\n<td>-</td>\\n<td>-</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>HashSet</td>\\n<td>同上，</td>\\n<td>快</td>\\n<td>慢</td>\\n<td>哈希表</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>LinkedHashSet</td>\\n<td>有序</td>\\n<td>快</td>\\n<td>慢</td>\\n<td>链表和哈希表</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>TreeSet</td>\\n<td>同上，</td>\\n<td>慢</td>\\n<td>快</td>\\n<td>红黑树</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
