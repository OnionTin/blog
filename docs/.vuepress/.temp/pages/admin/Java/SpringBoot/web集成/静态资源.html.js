import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringBoot/web集成/静态资源.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"静态资源\",\"slug\":\"静态资源\",\"link\":\"#静态资源\",\"children\":[{\"level\":3,\"title\":\"静态资源引入\",\"slug\":\"静态资源引入\",\"link\":\"#静态资源引入\",\"children\":[]},{\"level\":3,\"title\":\"webjars 引入\",\"slug\":\"webjars-引入\",\"link\":\"#webjars-引入\",\"children\":[]},{\"level\":3,\"title\":\"修改静态资源路径\",\"slug\":\"修改静态资源路径\",\"link\":\"#修改静态资源路径\",\"children\":[]},{\"level\":3,\"title\":\"源码\",\"slug\":\"源码\",\"link\":\"#源码\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725354999000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringBoot/web集成/静态资源.md\",\"excerpt\":\"<h2>静态资源</h2>\\n<h3>静态资源引入</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方式</th>\\n<th>文件所在路径</th>\\n<th>优先级</th>\\n<th>一般如何使用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>resources</td>\\n<td>classpath:/resources</td>\\n<td>1</td>\\n<td>上传的文件</td>\\n</tr>\\n<tr>\\n<td>static</td>\\n<td>classpath:/static</td>\\n<td>2</td>\\n<td>静态的图片等</td>\\n</tr>\\n<tr>\\n<td>public</td>\\n<td>classpath:/public</td>\\n<td>3</td>\\n<td>公共的 js</td>\\n</tr>\\n<tr>\\n<td>/</td>\\n<td>项目根目录</td>\\n<td>4</td>\\n<td>一般不使用</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
