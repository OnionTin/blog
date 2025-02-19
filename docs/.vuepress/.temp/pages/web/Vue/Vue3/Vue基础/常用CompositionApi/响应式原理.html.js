import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/常用CompositionApi/响应式原理.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"vue2.x 的响应式\",\"slug\":\"vue2-x-的响应式\",\"link\":\"#vue2-x-的响应式\",\"children\":[{\"level\":3,\"title\":\"实现原理:\",\"slug\":\"实现原理\",\"link\":\"#实现原理\",\"children\":[]}]},{\"level\":2,\"title\":\"Vue3.0 的响应式\",\"slug\":\"vue3-0-的响应式\",\"link\":\"#vue3-0-的响应式\",\"children\":[{\"level\":3,\"title\":\"实现原理:\",\"slug\":\"实现原理-1\",\"link\":\"#实现原理-1\",\"children\":[]}]},{\"level\":2,\"title\":\"defineProperty\",\"slug\":\"defineproperty\",\"link\":\"#defineproperty\",\"children\":[{\"level\":3,\"title\":\"Vue2 真实实现\",\"slug\":\"vue2-真实实现\",\"link\":\"#vue2-真实实现\",\"children\":[]}]},{\"level\":2,\"title\":\"Proxy\",\"slug\":\"proxy\",\"link\":\"#proxy\",\"children\":[]},{\"level\":2,\"title\":\"Reflect.defineProperty\",\"slug\":\"reflect-defineproperty\",\"link\":\"#reflect-defineproperty\",\"children\":[]},{\"level\":2,\"title\":\"Vue3 实现\",\"slug\":\"vue3-实现\",\"link\":\"#vue3-实现\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/常用CompositionApi/响应式原理.md\",\"excerpt\":\"<h2>vue2.x 的响应式</h2>\\n<h3>实现原理:</h3>\\n<ul>\\n<li>\\n<p>对象类型: 通过 <code>Object.defineProperty()</code> 对属性的读取、修改进行拦截（数据劫持）。</p>\\n</li>\\n<li>\\n<p>数组类型: 通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</p>\\n</li>\\n</ul>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code>Object<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">defineProperty</span><span class=\\\"token punctuation\\\">(</span>data<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"count\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">get</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token function\\\">set</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
export { comp, data }
