import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/双列集合Map/HashMap实现类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/HashMap%E5%AE%9E%E7%8E%B0%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"HashMap 实现类\",\"slug\":\"hashmap-实现类\",\"link\":\"#hashmap-实现类\",\"children\":[{\"level\":3,\"title\":\"HashMap 集合的特性\",\"slug\":\"hashmap-集合的特性\",\"link\":\"#hashmap-集合的特性\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"HashMap 集合的遍历\",\"slug\":\"hashmap-集合的遍历\",\"link\":\"#hashmap-集合的遍历\",\"children\":[]},{\"level\":3,\"title\":\"方法的应用\",\"slug\":\"方法的应用\",\"link\":\"#方法的应用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/双列集合Map/HashMap实现类.md\",\"excerpt\":\"<h2>HashMap 实现类</h2>\\n<p>和<a active=\\\"\\\" href=\\\"/blog/admin/Java/Java常用Api/双列集合Map/Map接口.md\\\" target=\\\"_blank\\\">Map</a>一模一样；\\n双列集合；需要导包，在 java.util 下； HashMap 是实现类。</p>\\n<h3>HashMap 集合的特性</h3>\\n<ol>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ol>\\n<p></p>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>V put(K key, V value)</td>\\n<td>添加元素，返回添加之前的值；修改元素，返回被修改之前的值</td>\\n</tr>\\n<tr>\\n<td>V remove(Object key)</td>\\n<td>根据键来删除元素，返回被删除的元素的值</td>\\n</tr>\\n<tr>\\n<td>int size()</td>\\n<td>获取长度</td>\\n</tr>\\n<tr>\\n<td>void clear()</td>\\n<td>清空</td>\\n</tr>\\n<tr>\\n<td>V get(Object key)</td>\\n<td>根据键来获取值</td>\\n</tr>\\n<tr>\\n<td>boolean containsKey(Object key)</td>\\n<td>判断是否包含，键为给定的内容，的元素</td>\\n</tr>\\n<tr>\\n<td>boolean containsValue(Object value)</td>\\n<td>判断是否包含，值为给定的内容，的元素</td>\\n</tr>\\n<tr>\\n<td><code>Set&lt;K&gt; keySet()</code></td>\\n<td>获取所有的键，并用 Set 集合接收</td>\\n</tr>\\n<tr>\\n<td><code>Collection&lt;V&gt; values()</code></td>\\n<td>获取所有的值，并用 Collection(或其他结合) 集合接收</td>\\n</tr>\\n<tr>\\n<td><code>Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</code></td>\\n<td>获取所有的键值对，并用 Set 结合接收</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
