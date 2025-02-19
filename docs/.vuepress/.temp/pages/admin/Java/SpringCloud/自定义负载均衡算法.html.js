import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/自定义负载均衡算法.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%AE%97%E6%B3%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"自定义负载均衡算法\",\"slug\":\"自定义负载均衡算法\",\"link\":\"#自定义负载均衡算法\",\"children\":[{\"level\":3,\"title\":\"IRule 中的负载均衡策略\",\"slug\":\"irule-中的负载均衡策略\",\"link\":\"#irule-中的负载均衡策略\",\"children\":[]},{\"level\":3,\"title\":\"自定义策略\",\"slug\":\"自定义策略\",\"link\":\"#自定义策略\",\"children\":[]}]}],\"git\":{\"updatedTime\":1726736496000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/SpringCloud/自定义负载均衡算法.md\",\"excerpt\":\"<!-- @format -->\\n<h2>自定义负载均衡算法</h2>\\n<h3>IRule 中的负载均衡策略</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>类名</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>RandomRule</td>\\n<td>随机</td>\\n</tr>\\n<tr>\\n<td>RoundRobinRule</td>\\n<td>轮询(默认)</td>\\n</tr>\\n<tr>\\n<td>RetryRule</td>\\n<td>重试</td>\\n</tr>\\n<tr>\\n<td>AvailabilityFilteringRule</td>\\n<td>过滤崩溃或者叫跳闸的服务，剩下的轮询</td>\\n</tr>\\n<tr>\\n<td>WeightedResponseTimeRule</td>\\n<td>响应时间权重</td>\\n</tr>\\n<tr>\\n<td>BestAvailableRule</td>\\n<td>最小并发</td>\\n</tr>\\n<tr>\\n<td>ZoneAvoidanceRule</td>\\n<td>区域权重</td>\\n</tr>\\n<tr>\\n<td>RandomWeightedRule</td>\\n<td>随机权重</td>\\n</tr>\\n<tr>\\n<td>RetryRule</td>\\n<td>重试规则</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
