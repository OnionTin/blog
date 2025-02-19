import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/多线程/定时器.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%AE%9A%E6%97%B6%E5%99%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"定时器\",\"slug\":\"定时器\",\"link\":\"#定时器\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/多线程/定时器.md\",\"excerpt\":\"<h2>定时器</h2>\\n<blockquote>\\n<p>定时器的底层是多线程</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Timer()</td>\\n<td>创建一个定时器</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public void schedule(TimerTask task, Date time)</td>\\n<td>在特定时间执行一次指定任务</td>\\n</tr>\\n<tr>\\n<td>public void schedule(TimerTask task,long delay)</td>\\n<td>在延迟指定时间后执行一次指定任务</td>\\n</tr>\\n<tr>\\n<td>public void schedule(TimerTask task, Date firstTime, long period)</td>\\n<td>在特定时间开始，重复执行任务</td>\\n</tr>\\n<tr>\\n<td>public void schedule(TimerTask task,long delay,long period)</td>\\n<td>在延迟指定时间后，重复执行任务</td>\\n</tr>\\n<tr>\\n<td>public void cancel()</td>\\n<td>取消任务</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
