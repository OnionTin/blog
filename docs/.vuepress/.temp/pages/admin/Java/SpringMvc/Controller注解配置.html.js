import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringMvc/Controller注解配置.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringMvc/Controller%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Controller 注解配置\",\"slug\":\"controller-注解配置\",\"link\":\"#controller-注解配置\",\"children\":[]}],\"git\":{\"updatedTime\":1724664291000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringMvc/Controller注解配置.md\",\"excerpt\":\"<!-- @format -->\\n<h2>Controller 注解配置</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>注解</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Controller</td>\\n<td>控制器，被 Spring 托管，返回数据和视图(类和方法上都行)</td>\\n</tr>\\n<tr>\\n<td>@RequestMapping</td>\\n<td>用于映射请求 URL 到控制器方法，可以指定请求方法、请求参数、请求头等</td>\\n</tr>\\n<tr>\\n<td>@GetMapping</td>\\n<td>映射 GET 请求</td>\\n</tr>\\n<tr>\\n<td>@PostMapping</td>\\n<td>映射 POST 请求</td>\\n</tr>\\n<tr>\\n<td>@PutMapping</td>\\n<td>映射 PUT 请求</td>\\n</tr>\\n<tr>\\n<td>@DeleteMapping</td>\\n<td>映射 DELETE 请求</td>\\n</tr>\\n<tr>\\n<td>@PathVariable</td>\\n<td>和@RequestMapping 一起使用，用于获取 URL 中的路径变量(即 url 传递的参数)</td>\\n</tr>\\n<tr>\\n<td>@RequestParam</td>\\n<td>用于获取请求参数</td>\\n</tr>\\n<tr>\\n<td>@RequestHeader</td>\\n<td>用于获取请求头</td>\\n</tr>\\n<tr>\\n<td>@RequestBody</td>\\n<td>用于获取请求体</td>\\n</tr>\\n<tr>\\n<td>@ResponseBody</td>\\n<td>用于返回请求的数据，同时限制@Controller 只返回数据没有视图</td>\\n</tr>\\n<tr>\\n<td>@RestController</td>\\n<td>同@Controller，不用限制，他只返回数据(注意: 只能用在类上)</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
