import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/admin/Java/Java进阶/MVC.html.vue"
const data = JSON.parse("{\"path\":\"/admin/Java/Java%E8%BF%9B%E9%98%B6/MVC.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"MVC\",\"slug\":\"mvc\",\"link\":\"#mvc\",\"children\":[{\"level\":3,\"title\":\"目前为止，登陆案例\",\"slug\":\"目前为止-登陆案例\",\"link\":\"#目前为止-登陆案例\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718958762000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"admin/Java/Java进阶/MVC.md\",\"excerpt\":\"<h2>MVC</h2>\\n<p></p>\\n<h3>目前为止，登陆案例</h3>\\n<div class=\\\"language-java\\\" data-ext=\\\"java\\\" data-title=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token comment\\\">// M(实体类)</span>\\n<span class=\\\"token keyword\\\">package</span> <span class=\\\"token namespace\\\">com<span class=\\\"token punctuation\\\">.</span>api<span class=\\\"token punctuation\\\">.</span></span><span class=\\\"token class-name\\\">Login</span><span class=\\\"token punctuation\\\">.</span>domain<span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">Sister</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">private</span> <span class=\\\"token keyword\\\">int</span> id<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">private</span> <span class=\\\"token class-name\\\">String</span> name<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token keyword\\\">private</span> <span class=\\\"token class-name\\\">String</span> password<span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">Sister</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">Sister</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">int</span> id<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token class-name\\\">String</span> name<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token class-name\\\">String</span> password<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>id <span class=\\\"token operator\\\">=</span> id<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> name<span class=\\\"token punctuation\\\">;</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>password <span class=\\\"token operator\\\">=</span> password<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">int</span> <span class=\\\"token function\\\">getId</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> id<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">setId</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">int</span> id<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>id <span class=\\\"token operator\\\">=</span> id<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">String</span> <span class=\\\"token function\\\">getName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> name<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">setName</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span> name<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> name<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">String</span> <span class=\\\"token function\\\">getPassword</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> password<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">setPassword</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span> password<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>password <span class=\\\"token operator\\\">=</span> password<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token annotation punctuation\\\">@Override</span>\\n  <span class=\\\"token keyword\\\">public</span> <span class=\\\"token class-name\\\">String</span> <span class=\\\"token function\\\">toString</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">return</span> <span class=\\\"token string\\\">\\\"Sister{\\\"</span> <span class=\\\"token operator\\\">+</span>\\n        <span class=\\\"token string\\\">\\\"id=\\\"</span> <span class=\\\"token operator\\\">+</span> id <span class=\\\"token operator\\\">+</span>\\n        <span class=\\\"token string\\\">\\\", name='\\\"</span> <span class=\\\"token operator\\\">+</span> name <span class=\\\"token operator\\\">+</span> <span class=\\\"token char\\\">'\\\\''</span> <span class=\\\"token operator\\\">+</span>\\n        <span class=\\\"token string\\\">\\\", password='\\\"</span> <span class=\\\"token operator\\\">+</span> password <span class=\\\"token operator\\\">+</span> <span class=\\\"token char\\\">'\\\\''</span> <span class=\\\"token operator\\\">+</span>\\n        <span class=\\\"token char\\\">'}'</span><span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
export { comp, data }
