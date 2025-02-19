import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/SpringCloud/客户端连接服务端访问远程.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/SpringCloud/%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AE%BF%E9%97%AE%E8%BF%9C%E7%A8%8B.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"客户端连接服务端访问远程\",\"slug\":\"客户端连接服务端访问远程\",\"link\":\"#客户端连接服务端访问远程\",\"children\":[{\"level\":3,\"title\":\"1. 配置设置(设置读取文件的相关信息)\",\"slug\":\"_1-配置设置-设置读取文件的相关信息\",\"link\":\"#_1-配置设置-设置读取文件的相关信息\",\"children\":[]},{\"level\":3,\"title\":\"2. 启动类\",\"slug\":\"_2-启动类\",\"link\":\"#_2-启动类\",\"children\":[]},{\"level\":3,\"title\":\"3. 测试接口\",\"slug\":\"_3-测试接口\",\"link\":\"#_3-测试接口\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727061891000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"admin/Java/SpringCloud/客户端连接服务端访问远程.md\",\"excerpt\":\"<h2>客户端连接服务端访问远程</h2>\\n<h3>1. 配置设置(设置读取文件的相关信息)</h3>\\n<div class=\\\"language-yaml\\\" data-ext=\\\"yml\\\" data-title=\\\"yml\\\"><pre class=\\\"language-yaml\\\"><code><span class=\\\"token comment\\\"># bootstrap.yml文件</span>\\n\\n<span class=\\\"token comment\\\"># 系统级别的配置(比application.yml级别高)</span>\\n<span class=\\\"token key atrule\\\">spring</span><span class=\\\"token punctuation\\\">:</span>\\n  <span class=\\\"token key atrule\\\">cloud</span><span class=\\\"token punctuation\\\">:</span>\\n    <span class=\\\"token key atrule\\\">config</span><span class=\\\"token punctuation\\\">:</span>\\n      <span class=\\\"token comment\\\"># 从gitee上读取的文件名(不要后缀)</span>\\n      <span class=\\\"token key atrule\\\">name</span><span class=\\\"token punctuation\\\">:</span> client\\n      <span class=\\\"token comment\\\"># 使用读取的文件中的哪个环境</span>\\n      <span class=\\\"token key atrule\\\">profile</span><span class=\\\"token punctuation\\\">:</span> dev\\n      <span class=\\\"token comment\\\"># 读取服务端的地址</span>\\n      <span class=\\\"token key atrule\\\">uri</span><span class=\\\"token punctuation\\\">:</span> http<span class=\\\"token punctuation\\\">:</span>//localhost<span class=\\\"token punctuation\\\">:</span><span class=\\\"token number\\\">3344</span>\\n      <span class=\\\"token comment\\\"># 从哪个分支上获取</span>\\n      <span class=\\\"token key atrule\\\">label</span><span class=\\\"token punctuation\\\">:</span> master\\n</code></pre></div>\"}")
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
