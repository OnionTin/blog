import comp from "D:/Programs/web/blog/docs/.vuepress/.temp/pages/web/React/react中事件处理.html.vue"
const data = JSON.parse("{\"path\":\"/web/React/react%E4%B8%AD%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"react 中事件处理\",\"slug\":\"react-中事件处理\",\"link\":\"#react-中事件处理\",\"children\":[{\"level\":3,\"title\":\"当事件绑定的元素正是你要操作的元素时\",\"slug\":\"当事件绑定的元素正是你要操作的元素时\",\"link\":\"#当事件绑定的元素正是你要操作的元素时\",\"children\":[]},{\"level\":3,\"title\":\"非受控组件\",\"slug\":\"非受控组件\",\"link\":\"#非受控组件\",\"children\":[]},{\"level\":3,\"title\":\"受控组件(推荐)\",\"slug\":\"受控组件-推荐\",\"link\":\"#受控组件-推荐\",\"children\":[]},{\"level\":3,\"title\":\"高阶组件-柯里化函数\",\"slug\":\"高阶组件-柯里化函数\",\"link\":\"#高阶组件-柯里化函数\",\"children\":[]},{\"level\":3,\"title\":\"高阶组件-不用柯里化函数()\",\"slug\":\"高阶组件-不用柯里化函数\",\"link\":\"#高阶组件-不用柯里化函数\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727972098000,\"contributors\":[{\"name\":\"OnionTin\",\"email\":\"2775376881@qq.com\",\"commits\":1},{\"name\":\"OnionTin]\",\"email\":\"2775376881@qq.com\",\"commits\":1}]},\"filePathRelative\":\"web/React/react中事件处理.md\",\"excerpt\":\"<!-- @format -->\\n<h2>react 中事件处理</h2>\\n<h3>当事件绑定的元素正是你要操作的元素时</h3>\\n<blockquote>\\n<p>可以省略 ref 绑定,通过 event.target 获取到当前元素(其实事件的触发是通过事件委托，委托元素的上级元素进行处理的，即冒泡)</p>\\n</blockquote>\\n<div class=\\\"language-jsx\\\" data-ext=\\\"jsx\\\" data-title=\\\"jsx\\\"><pre class=\\\"language-jsx\\\"><code><span class=\\\"token comment\\\">// 创建ref容器</span>\\nmyRef <span class=\\\"token operator\\\">=</span> React<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">createRef</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\nmyRef2 <span class=\\\"token operator\\\">=</span> React<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">createRef</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 展示左侧输入框的数据</span>\\n<span class=\\\"token function-variable function\\\">showData</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">alert</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>myRef<span class=\\\"token punctuation\\\">.</span>current<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token comment\\\">// 展示右侧输入框的数据</span>\\n<span class=\\\"token function-variable function\\\">showData2</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">event</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token function\\\">alert</span><span class=\\\"token punctuation\\\">(</span>event<span class=\\\"token punctuation\\\">.</span>target<span class=\\\"token punctuation\\\">.</span>value<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token function\\\">render</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">return</span> <span class=\\\"token punctuation\\\">(</span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token plain-text\\\">\\n      </span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token attr-name\\\">ref</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token script-punctuation punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>myRef<span class=\\\"token punctuation\\\">}</span></span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>text<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">placeholder</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>点击按钮提示数据<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span><span class=\\\"token plain-text\\\">\\n      </span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>button</span> <span class=\\\"token attr-name\\\">onClick</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token script-punctuation punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>showData<span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token plain-text\\\">点我提示左侧的数据</span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>button</span><span class=\\\"token punctuation\\\">&gt;</span></span><span class=\\\"token plain-text\\\">\\n      </span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>input</span> <span class=\\\"token attr-name\\\">onBlur</span><span class=\\\"token script language-javascript\\\"><span class=\\\"token script-punctuation punctuation\\\">=</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">this</span><span class=\\\"token punctuation\\\">.</span>showData2<span class=\\\"token punctuation\\\">}</span></span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>text<span class=\\\"token punctuation\\\">\\\"</span></span> <span class=\\\"token attr-name\\\">placeholder</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation attr-equals\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>失去焦点提示数据<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">/&gt;</span></span><span class=\\\"token plain-text\\\">\\n    </span><span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">&gt;</span></span>\\n  <span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
