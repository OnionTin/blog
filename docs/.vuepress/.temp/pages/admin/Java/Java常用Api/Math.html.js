import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java常用Api/Math.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Math.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Math\",\"slug\":\"math\",\"link\":\"#math\",\"children\":[{\"level\":3,\"title\":\"常用的成员方法\",\"slug\":\"常用的成员方法\",\"link\":\"#常用的成员方法\",\"children\":[]}]}],\"git\":{\"updatedTime\":1711099054000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/Java常用Api/Math.md\",\"excerpt\":\"<h2>Math</h2>\\n<p>不需要导包，工具类(构造方法是私有的，成员方法是静态的)</p>\\n<h3>常用的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>static int abs(int a)</td>\\n<td>返回参数的绝对值</td>\\n</tr>\\n<tr>\\n<td>static int max(int a,int b)</td>\\n<td>返回两个参数中的较大值</td>\\n</tr>\\n<tr>\\n<td>static int min(int a,int b)</td>\\n<td>返回两个参数中的较小值</td>\\n</tr>\\n<tr>\\n<td>static double ceil(double a)</td>\\n<td>向上取整</td>\\n</tr>\\n<tr>\\n<td>static double floor(double a)</td>\\n<td>向下取整</td>\\n</tr>\\n<tr>\\n<td>static double pow(double a,double b)</td>\\n<td>返回 a 的 b 次幂</td>\\n</tr>\\n<tr>\\n<td>static long round(double a)</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>static double random()</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
