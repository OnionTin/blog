import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/IO流/字符流/写入/FileReader类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E7%AC%A6%E6%B5%81/%E5%86%99%E5%85%A5/FileReader%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"FileReader 类\",\"slug\":\"filereader-类\",\"link\":\"#filereader-类\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]},{\"level\":3,\"title\":\"文件的复制\",\"slug\":\"文件的复制\",\"link\":\"#文件的复制\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/IO流/字符流/写入/FileReader类.md\",\"excerpt\":\"<h2>FileReader 类</h2>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public FileReader(String fileName)</td>\\n<td>根据指定的文件名读取</td>\\n</tr>\\n<tr>\\n<td>public FileReader(File file)</td>\\n<td>根据指定的文件读取</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public int read()</td>\\n<td>一次读取一个字符数据</td>\\n</tr>\\n<tr>\\n<td>public int read(char[] cbuf)</td>\\n<td>一次读取一个字符数组，返回实际读取字符的个数</td>\\n</tr>\\n<tr>\\n<td>public int read(char[] cbuf, int off, int len)</td>\\n<td>一次读取一个字符数组的部分数据</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
