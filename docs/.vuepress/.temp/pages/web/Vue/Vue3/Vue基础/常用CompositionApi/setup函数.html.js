import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/setup函数.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/setup%E5%87%BD%E6%95%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"setup 函数\",\"slug\":\"setup-函数\",\"link\":\"#setup-函数\",\"children\":[{\"level\":3,\"title\":\"setup 函数的两种返回值:\",\"slug\":\"setup-函数的两种返回值\",\"link\":\"#setup-函数的两种返回值\",\"children\":[]},{\"level\":3,\"title\":\"注意点:\",\"slug\":\"注意点\",\"link\":\"#注意点\",\"children\":[]},{\"level\":3,\"title\":\"setup 的两个注意点\",\"slug\":\"setup-的两个注意点\",\"link\":\"#setup-的两个注意点\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/setup函数.md\",\"excerpt\":\"<h2>setup 函数</h2>\\n<blockquote>\\n<p>Vue3.0 中一个新的配置项，值为一个函数。setup 是所有 Composition API(组合 API)“表演的舞台”。组件中所用到的:数据、方法等等，均要配置在 setup 中。</p>\\n</blockquote>\\n<h3>setup 函数的两种返回值:</h3>\\n<ol>\\n<li>若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。(重点关注!)</li>\\n<li>若返回一个渲染函数，则可定义渲染内容。(了解)</li>\\n</ol>\\n<h3>注意点:</h3>\\n<ol>\\n<li>\\n<p><strong>尽量不要与 Vue2.x 配置混用</strong></p>\\n<ul>\\n<li>Vue2.x 配置(data、methods、computed...)中可以访问到 setup 中的属性、方法。</li>\\n<li>但在 setup 中不能访问到 Vue2.x 配置(data、methods、computed...)。</li>\\n<li>如果有重名，setup 优先。</li>\\n</ul>\\n</li>\\n<li>\\n<p>setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。</p>\\n</li>\\n</ol>\"}")
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
