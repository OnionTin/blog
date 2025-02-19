import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/虚拟dom实现原理.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/%E8%99%9A%E6%8B%9Fdom%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"虚拟 dom 实现原理\",\"slug\":\"虚拟-dom-实现原理\",\"link\":\"#虚拟-dom-实现原理\",\"children\":[{\"level\":3,\"title\":\"虚拟 dom 优点：\",\"slug\":\"虚拟-dom-优点\",\"link\":\"#虚拟-dom-优点\",\"children\":[]},{\"level\":3,\"title\":\"虚拟 dom 缺点：\",\"slug\":\"虚拟-dom-缺点\",\"link\":\"#虚拟-dom-缺点\",\"children\":[]},{\"level\":3,\"title\":\"React 组件的渲染过程：\",\"slug\":\"react-组件的渲染过程\",\"link\":\"#react-组件的渲染过程\",\"children\":[]},{\"level\":3,\"title\":\"虚拟 DOM 的组成——ReactElementelement 对象结构：\",\"slug\":\"虚拟-dom-的组成——reactelementelement-对象结构\",\"link\":\"#虚拟-dom-的组成——reactelementelement-对象结构\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727684271000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":2}]},\"filePathRelative\":\"web/React/虚拟dom实现原理.md\",\"excerpt\":\"<h2>虚拟 dom 实现原理</h2>\\n<blockquote>\\n<p>虚拟 dom 是用 js 模拟一颗 dom 树,放在浏览器内存中，相当于在 js 和真实 dom 中加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。</p>\\n</blockquote>\\n<h3>虚拟 dom 优点：</h3>\\n<blockquote>\\n<ol>\\n<li>虚拟 DOM 具有批处理和高效的 Diff 算法,最终表现在 DOM 上的修改只是变更的部分，可以保证非常高效的渲染,优化性能；</li>\\n<li>虚拟 DOM 不会立马进行排版与重绘操作，对虚拟 DOM 进行频繁修改，最后一次性比较并修改真实 DOM 中需要改的部分；</li>\\n<li>虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部；</li>\\n</ol>\\n</blockquote>\"}")
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
