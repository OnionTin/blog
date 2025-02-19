import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/Calendar.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Calendar.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Calendar\",\"slug\":\"calendar\",\"link\":\"#calendar\",\"children\":[{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710404435000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/Calendar.md\",\"excerpt\":\"<h2>Calendar</h2>\\n<p>需要导包，在 java.util 包下, 抽象类，使用时需要创建子对象</p>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>getInstance()</td>\\n<td>获取 Calender 的子对象</td>\\n</tr>\\n<tr>\\n<td>int get(int field)</td>\\n<td>获取年、月、日、小时、分钟、秒等</td>\\n</tr>\\n<tr>\\n<td>void set(int field, int value)</td>\\n<td>设置年、月、日、小时、分钟、秒等</td>\\n</tr>\\n<tr>\\n<td>final Date getTime()</td>\\n<td>获取 Date 对象(将 Calendar 转成 Date 类型)</td>\\n</tr>\\n<tr>\\n<td>abstract void add(int field, int amount)</td>\\n<td>对年、月、日等进行增将或减量</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
