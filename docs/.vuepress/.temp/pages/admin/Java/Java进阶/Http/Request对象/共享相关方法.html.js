import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/Http/Request对象/共享相关方法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E5%85%B1%E4%BA%AB%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"共享相关方法\",\"slug\":\"共享相关方法\",\"link\":\"#共享相关方法\",\"children\":[{\"level\":3,\"title\":\"转发请求实现共享数据\",\"slug\":\"转发请求实现共享数据\",\"link\":\"#转发请求实现共享数据\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/Http/Request对象/共享相关方法.md\",\"excerpt\":\"<h2>共享相关方法</h2>\\n<blockquote>\\n<p>在 web 核心中有 4 大域对象(ServletContext、HttpSession、ServletRequest、HttpServletResponse)，\\n每个域对象负责管理自己所在的范围，Request 域对象负责管理的就是一次请求和一次响应之间的范围。根据域对象所具备的方法可以判断出，域对象就是一个容器，容器在一次请求时生成，在一次请求后就销毁了。注意，是一次请求和一次响应之间。</p>\\n</blockquote>\\n<p>域对象的产生和销毁\\n</p>\\n<table>\\n<thead>\\n<tr>\\n<th>域对象方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>void setAttribute(String name, Object value)</td>\\n<td>存储数据</td>\\n</tr>\\n<tr>\\n<td>Object getAttribute(String name)</td>\\n<td>获取数据</td>\\n</tr>\\n<tr>\\n<td>void removeAttribute(String name)</td>\\n<td>移除数据</td>\\n</tr>\\n</tbody>\\n</table>\"}")
export { comp, data }
