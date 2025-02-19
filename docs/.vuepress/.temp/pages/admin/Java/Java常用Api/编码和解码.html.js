import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/编码和解码.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E7%BC%96%E7%A0%81%E5%92%8C%E8%A7%A3%E7%A0%81.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"编码和解码\",\"slug\":\"编码和解码\",\"link\":\"#编码和解码\",\"children\":[{\"level\":3,\"title\":\"编码表\",\"slug\":\"编码表\",\"link\":\"#编码表\",\"children\":[]},{\"level\":3,\"title\":\"编码\",\"slug\":\"编码\",\"link\":\"#编码\",\"children\":[]},{\"level\":3,\"title\":\"解码\",\"slug\":\"解码\",\"link\":\"#解码\",\"children\":[]},{\"level\":3,\"title\":\"方法的使用\",\"slug\":\"方法的使用\",\"link\":\"#方法的使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1715073877000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java常用Api/编码和解码.md\",\"excerpt\":\"<h2>编码和解码</h2>\\n<h3>编码表</h3>\\n<ol>\\n<li>ASCII：最基本表，主要针对数字、英文、少数标点符号</li>\\n<li>GBK：国标，21003 个汉字，其中包括 ASCII，一个中文占 2 个字节</li>\\n<li>Unicode：国际标准，包含全世界所有文字，每个文字都对应一个唯一的编号，其中 UTF-8 最常用</li>\\n<li>UTF-8: 使用 1-4 个字节来表示一个字符，其中一个中文占 3 个字节</li>\\n</ol>\\n<h3>编码</h3>\\n<blockquote>\\n<p>编码是将字符串转换为字节的过程。</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public byte[] getBytes()</td>\\n<td>根据平台的默认编码，将字符串转成字节数组</td>\\n</tr>\\n<tr>\\n<td>public byte[] getBytes(String charsetName)</td>\\n<td>根据指定的字符集编码，将字符串转成字节数组</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
