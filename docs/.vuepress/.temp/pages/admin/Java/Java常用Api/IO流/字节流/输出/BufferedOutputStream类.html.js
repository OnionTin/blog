import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/IO流/字节流/输出/BufferedOutputStream类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E8%BE%93%E5%87%BA/BufferedOutputStream%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"BufferedOutputStream 类\",\"slug\":\"bufferedoutputstream-类\",\"link\":\"#bufferedoutputstream-类\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/IO流/字节流/输出/BufferedOutputStream类.md\",\"excerpt\":\"<h2>BufferedOutputStream 类</h2>\\n<blockquote>\\n<p>缓冲字节输出流、有缓冲区、高效</p>\\n</blockquote>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public BufferedInputStream(OutputStream out)</td>\\n<td>将输出流写到给定 File 对象的文件</td>\\n</tr>\\n</tbody>\\n</table>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public void flush</td>\\n<td>刷新缓冲区</td>\\n</tr>\\n<tr>\\n<td>public void close</td>\\n<td>释放资源，同时自带刷新缓冲区的功能</td>\\n</tr>\\n<tr>\\n<td>其他方法</td>\\n<td><a href=\\\"/blog/admin/Java/Java常用Api/IO流/字节流/写入/FileOutputStream类.md\\\" target=\\\"_blank\\\">同 FileOutputStream</a></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
