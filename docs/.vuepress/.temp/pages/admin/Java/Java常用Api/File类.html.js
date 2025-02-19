import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/File类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/File%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"File 类\",\"slug\":\"file-类\",\"link\":\"#file-类\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"递归删除文件夹 aaa\",\"slug\":\"递归删除文件夹-aaa\",\"link\":\"#递归删除文件夹-aaa\",\"children\":[]},{\"level\":3,\"title\":\"递归获取 aaa 目录下的所有.java 文件\",\"slug\":\"递归获取-aaa-目录下的所有-java-文件\",\"link\":\"#递归获取-aaa-目录下的所有-java-文件\",\"children\":[]},{\"level\":3,\"title\":\"其他方法的使用\",\"slug\":\"其他方法的使用\",\"link\":\"#其他方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/File类.md\",\"excerpt\":\"<h2>File 类</h2>\\n<p>需要导包，在 java.io 下</p>\\n<p>什么是 File 类？</p>\\n<p>代表文件或者文件夹(目录)类，也就是说将文件或者文件夹，通过 File 类封装成对象。</p>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public File(String pathname)</td>\\n<td>将给定的路径转换为 File 实例</td>\\n</tr>\\n<tr>\\n<td>public File(String parent, String child)</td>\\n<td>通过父路径和子路径创建新的 File 实例</td>\\n</tr>\\n<tr>\\n<td>public File(File parent, String child)</td>\\n<td>通过父路径和子路径创建新的 File 实例</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
