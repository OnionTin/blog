import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/IO流/字节流/输出/FileOutputStream类.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E8%BE%93%E5%87%BA/FileOutputStream%E7%B1%BB.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"FileOutputStream 类.md\",\"slug\":\"fileoutputstream-类-md\",\"link\":\"#fileoutputstream-类-md\",\"children\":[{\"level\":3,\"title\":\"常见的构造方法\",\"slug\":\"常见的构造方法\",\"link\":\"#常见的构造方法\",\"children\":[]},{\"level\":3,\"title\":\"常见的成员方法\",\"slug\":\"常见的成员方法\",\"link\":\"#常见的成员方法\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]},{\"level\":3,\"title\":\"两个小问题\",\"slug\":\"两个小问题\",\"link\":\"#两个小问题\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/IO流/字节流/输出/FileOutputStream类.md\",\"excerpt\":\"<h2>FileOutputStream 类.md</h2>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public FileOutputStream(File file)</td>\\n<td>将输出流写到给定 File 对象的文件中</td>\\n</tr>\\n<tr>\\n<td>public FileOutputStream(String name)</td>\\n<td>作用同上，区别先去创建一个文件对象</td>\\n</tr>\\n<tr>\\n<td>public FileOutputStream(String name, Boolean append)</td>\\n<td>目的同上，但是与上边两个不同点是可以控制是否</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
