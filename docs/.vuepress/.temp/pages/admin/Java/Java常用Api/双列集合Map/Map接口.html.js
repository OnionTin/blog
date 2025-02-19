import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/双列集合Map/Map接口.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/Map%E6%8E%A5%E5%8F%A3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Map 接口\",\"slug\":\"map-接口\",\"link\":\"#map-接口\",\"children\":[{\"level\":3,\"title\":\"Map 集合的特性\",\"slug\":\"map-集合的特性\",\"link\":\"#map-集合的特性\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"Map 集合的遍历\",\"slug\":\"map-集合的遍历\",\"link\":\"#map-集合的遍历\",\"children\":[]},{\"level\":3,\"title\":\"方法的应用\",\"slug\":\"方法的应用\",\"link\":\"#方法的应用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/双列集合Map/Map接口.md\",\"excerpt\":\"<h2>Map 接口</h2>\\n<p>双列集合；需要导包，在 java.util 下；Map 接口，不是类，是双列集合的顶层。</p>\\n<h3>Map 集合的特性</h3>\\n<ol>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n<li>\\n</li>\\n</ol>\\n<p></p>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>V put(K key, V value)</td>\\n<td>添加元素，返回添加之前的值；修改元素，返回被修改之前的值</td>\\n</tr>\\n<tr>\\n<td>V remove(Object key)</td>\\n<td>根据键来删除元素，返回被删除的元素的值</td>\\n</tr>\\n<tr>\\n<td>int size()</td>\\n<td>获取长度</td>\\n</tr>\\n<tr>\\n<td>void clear()</td>\\n<td>清空</td>\\n</tr>\\n<tr>\\n<td>V get(Object key)</td>\\n<td>根据键来获取值</td>\\n</tr>\\n<tr>\\n<td>boolean containsKey(Object key)</td>\\n<td>判断是否包含，键为给定的内容，的元素</td>\\n</tr>\\n<tr>\\n<td>boolean containsValue(Object value)</td>\\n<td>判断是否包含，值为给定的内容，的元素</td>\\n</tr>\\n<tr>\\n<td><code>Set&lt;K&gt; keySet()</code></td>\\n<td>获取所有的键，并用 Set 集合接收</td>\\n</tr>\\n<tr>\\n<td><code>Collection&lt;V&gt; values()</code></td>\\n<td>获取所有的值，并用 Collection(或其他结合) 集合接收</td>\\n</tr>\\n<tr>\\n<td><code>Set&lt;Map.Entry&lt;K,V&gt;&gt; entrySet()</code></td>\\n<td>获取所有的键值对，并用 Set 结合接收</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
