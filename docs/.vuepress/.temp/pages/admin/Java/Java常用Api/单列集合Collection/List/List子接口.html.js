import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/单列集合Collection/List/List子接口.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/List%E5%AD%90%E6%8E%A5%E5%8F%A3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"List 子接口\",\"slug\":\"list-子接口\",\"link\":\"#list-子接口\",\"children\":[{\"level\":3,\"title\":\"List 集合的特点\",\"slug\":\"list-集合的特点\",\"link\":\"#list-集合的特点\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"List 集合遍历\",\"slug\":\"list-集合遍历\",\"link\":\"#list-集合遍历\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用案例\",\"slug\":\"方法的使用案例\",\"link\":\"#方法的使用案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/单列集合Collection/List/List子接口.md\",\"excerpt\":\"<h2>List 子接口</h2>\\n<p>需要导包，在 java.util 下；List 也是接口，是 Collection 的子接口。</p>\\n<h3>List 集合的特点</h3>\\n<ol>\\n<li>\\n的集合（即：存进去的顺序和取出来的顺序是一致的）</li>\\n<li>\\n，所以 List 集合也被称为索引集合</li>\\n<li>元素都，所以 List 集合也被称为有序集合</li>\\n</ol>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>boolean add(Object e)</td>\\n<td>添加元素</td>\\n</tr>\\n<tr>\\n<td>void add(int index, Object element)</td>\\n<td>添加元素</td>\\n</tr>\\n<tr>\\n<td>boolean remove(Object o)</td>\\n<td>删除元素</td>\\n</tr>\\n<tr>\\n<td>boolean removeIf(Predicate filter)</td>\\n<td>按照条件删除元素</td>\\n</tr>\\n<tr>\\n<td>Object remove(int index)</td>\\n<td>删除指定索引处的元素</td>\\n</tr>\\n<tr>\\n<td>Object set(int index, Object element)</td>\\n<td>修改指定索引处的元素，返回被修改的数据</td>\\n</tr>\\n<tr>\\n<td>Object get(int index)</td>\\n<td>返回指定索引处的元素</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
