import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/多线程/多线程概述.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%A6%82%E8%BF%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"多线程概述\",\"slug\":\"多线程概述\",\"link\":\"#多线程概述\",\"children\":[{\"level\":3,\"title\":\"多线程中的概念\",\"slug\":\"多线程中的概念\",\"link\":\"#多线程中的概念\",\"children\":[]},{\"level\":3,\"title\":\"杀进程\",\"slug\":\"杀进程\",\"link\":\"#杀进程\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/多线程/多线程概述.md\",\"excerpt\":\"<h2>多线程概述</h2>\\n<h3>多线程中的概念</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>术语</th>\\n<th>解释</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>进程</td>\\n<td>正在执行的应用程序，看作为开启了一个进程。</td>\\n</tr>\\n<tr>\\n<td>线程</td>\\n<td>一个进程可以开启多个线程，一个线程可以执行多个任务。</td>\\n</tr>\\n<tr>\\n<td>多线程</td>\\n<td>一个进程中可以开启多个线程，多个线程可以同时执行多个任务。</td>\\n</tr>\\n<tr>\\n<td>并发</td>\\n<td>在同一时刻，多个任务在，宏观上，这些任务是同时执行的。</td>\\n</tr>\\n<tr>\\n<td>并行</td>\\n<td>在同一时刻，多个任务在，微观上，这些任务是同时执行的。</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
