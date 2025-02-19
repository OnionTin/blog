import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Vue/Vue3/Vue基础/其他CompositionApi/readonly和shallowReadonly.html.vue"
const data = JSON.parse("{\"path\":\"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/readonly%E5%92%8CshallowReadonly.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"readonly 与 shallowReadonly\",\"slug\":\"readonly-与-shallowreadonly\",\"link\":\"#readonly-与-shallowreadonly\",\"children\":[]}],\"git\":{\"updatedTime\":1727429003000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Vue/Vue3/Vue基础/其他CompositionApi/readonly和shallowReadonly.md\",\"excerpt\":\"<h2>readonly 与 shallowReadonly</h2>\\n<blockquote>\\n<p>也可以是 ref 定义的;一般用于引用了别人的数据,并且在当前页面内不允许改。\\nreadonly 和 shallowReadonly 的区别在于 readonly 是深度只读,而 shallowReadonly 是浅度只读,只对第一层属性进行只读处理,不会对嵌套的属性进行只读处理</p>\\n</blockquote>\\n<div class=\\\"language-javascript\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre class=\\\"language-javascript\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> reactive<span class=\\\"token punctuation\\\">,</span> readonly<span class=\\\"token punctuation\\\">,</span> shallowReadonly <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">\\\"vue\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> state <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">reactive</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token literal-property property\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"张三\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">age</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">18</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token literal-property property\\\">info</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token literal-property property\\\">height</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">1.88</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token literal-property property\\\">weight</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">75</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// readonly:深度只读</span>\\n<span class=\\\"token keyword\\\">const</span> state2 <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">readonly</span><span class=\\\"token punctuation\\\">(</span>state<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// shallowReadonly:浅度只读</span>\\n<span class=\\\"token keyword\\\">const</span> state3 <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">shallowReadonly</span><span class=\\\"token punctuation\\\">(</span>state<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\nstate2<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"李四\\\"</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 报错</span>\\nstate3<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"李四\\\"</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 报错</span>\\nstate3<span class=\\\"token punctuation\\\">.</span>info<span class=\\\"token punctuation\\\">.</span>height <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1.88</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 不报错</span>\\n</code></pre></div>\"}")
export { comp, data }
