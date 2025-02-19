import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/多线程/等待唤醒机制.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E7%AD%89%E5%BE%85%E5%94%A4%E9%86%92%E6%9C%BA%E5%88%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"等待唤醒机制\",\"slug\":\"等待唤醒机制\",\"link\":\"#等待唤醒机制\",\"children\":[{\"level\":3,\"title\":\"wait 和 sleep 的区别\",\"slug\":\"wait-和-sleep-的区别\",\"link\":\"#wait-和-sleep-的区别\",\"children\":[]},{\"level\":3,\"title\":\"关于 java 中线程安全的类\",\"slug\":\"关于-java-中线程安全的类\",\"link\":\"#关于-java-中线程安全的类\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/多线程/等待唤醒机制.md\",\"excerpt\":\"<h2>等待唤醒机制</h2>\\n<blockquote>\\n<p>用来解决生产者和消费者的问题(一个买票，一个出票，正常应该出一张票买一张票)</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public final void wait()</td>\\n<td>使当前线程等待</td>\\n</tr>\\n<tr>\\n<td>public final void notify()</td>\\n<td>唤醒正在等待的单个线程。</td>\\n</tr>\\n<tr>\\n<td>public final void notifyAll()</td>\\n<td>唤醒正在等待的所有线程。</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
