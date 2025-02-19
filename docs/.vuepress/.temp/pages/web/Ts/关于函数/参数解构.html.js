import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/Ts/关于函数/参数解构.html.vue"
const data = JSON.parse("{\"path\":\"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%84.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"参数解构\",\"slug\":\"参数解构\",\"link\":\"#参数解构\",\"children\":[{\"level\":3,\"title\":\"对象参数解构\",\"slug\":\"对象参数解构\",\"link\":\"#对象参数解构\",\"children\":[]},{\"level\":3,\"title\":\"数组参数解构\",\"slug\":\"数组参数解构\",\"link\":\"#数组参数解构\",\"children\":[]},{\"level\":3,\"title\":\"默认参数值\",\"slug\":\"默认参数值\",\"link\":\"#默认参数值\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727255714000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/Ts/关于函数/参数解构.md\",\"excerpt\":\"<h2>参数解构</h2>\\n<blockquote>\\n<p>参数解构（Parameter Destructuring）是一种方便的功能，允许你在函数调用时直接解构传递给函数的参数。这意味着你可以在函数体内直接访问对象或数组的特定属性或元素，而不需要显式地从参数中提取它们。</p>\\n</blockquote>\\n<h3>对象参数解构</h3>\\n<blockquote>\\n<p>当你的函数接受一个对象作为参数时，你可以在函数定义时直接解构这个对象。greetUser 函数在参数定义时解构了 User 对象，并且为 email 提供了一个默认值。</p>\\n</blockquote>\\n<div class=\\\"language-typescript\\\" data-ext=\\\"ts\\\" data-title=\\\"ts\\\"><pre class=\\\"language-typescript\\\"><code><span class=\\\"token keyword\\\">interface</span> <span class=\\\"token class-name\\\">User</span> <span class=\\\"token punctuation\\\">{</span>\\n  name<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">;</span>\\n  age<span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">number</span><span class=\\\"token punctuation\\\">;</span>\\n  email<span class=\\\"token operator\\\">?</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token builtin\\\">string</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 可选属性</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">greet</span><span class=\\\"token punctuation\\\">(</span>user<span class=\\\"token operator\\\">:</span> User<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token template-string\\\"><span class=\\\"token template-punctuation string\\\">`</span><span class=\\\"token string\\\">Hello, </span><span class=\\\"token interpolation\\\"><span class=\\\"token interpolation-punctuation punctuation\\\">${</span>user<span class=\\\"token punctuation\\\">.</span>name<span class=\\\"token interpolation-punctuation punctuation\\\">}</span></span><span class=\\\"token string\\\">!</span><span class=\\\"token template-punctuation string\\\">`</span></span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token comment\\\">// 使用解构</span>\\n<span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">greetUser</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">{</span> name<span class=\\\"token punctuation\\\">,</span> age<span class=\\\"token punctuation\\\">,</span> email <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"no email provided\\\"</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token operator\\\">:</span> User<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token template-string\\\"><span class=\\\"token template-punctuation string\\\">`</span><span class=\\\"token string\\\">Hello, </span><span class=\\\"token interpolation\\\"><span class=\\\"token interpolation-punctuation punctuation\\\">${</span>name<span class=\\\"token interpolation-punctuation punctuation\\\">}</span></span><span class=\\\"token string\\\">! You are </span><span class=\\\"token interpolation\\\"><span class=\\\"token interpolation-punctuation punctuation\\\">${</span>age<span class=\\\"token interpolation-punctuation punctuation\\\">}</span></span><span class=\\\"token string\\\"> years old.</span><span class=\\\"token template-punctuation string\\\">`</span></span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">if</span> <span class=\\\"token punctuation\\\">(</span>email<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token template-string\\\"><span class=\\\"token template-punctuation string\\\">`</span><span class=\\\"token string\\\">Your email is </span><span class=\\\"token interpolation\\\"><span class=\\\"token interpolation-punctuation punctuation\\\">${</span>email<span class=\\\"token interpolation-punctuation punctuation\\\">}</span></span><span class=\\\"token string\\\">.</span><span class=\\\"token template-punctuation string\\\">`</span></span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">else</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token builtin\\\">console</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">log</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"No email provided.\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">const</span> user <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span> name<span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"Alice\\\"</span><span class=\\\"token punctuation\\\">,</span> age<span class=\\\"token operator\\\">:</span> <span class=\\\"token number\\\">30</span><span class=\\\"token punctuation\\\">,</span> email<span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"alice@example.com\\\"</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token function\\\">greetUser</span><span class=\\\"token punctuation\\\">(</span>user<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n</code></pre></div>\"}")
export { comp, data }
