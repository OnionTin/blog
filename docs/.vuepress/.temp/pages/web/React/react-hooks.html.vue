<template><div><h2 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks"><span>react-hooks</span></a></h2>
<blockquote>
<p>React 一直提倡使用函数组件，但是有一些功能只有类组件具备，比如函数组件没有实例，没有生命周期函数，而 React 16.8 提出的 Hooks 概念可以在不编写 Class 的情况下，使用 React 特性。凡是 use 开头的 React API 都是 Hooks。</p>
</blockquote>
<h3 id="hooks-使用的注意事项" tabindex="-1"><a class="header-anchor" href="#hooks-使用的注意事项"><span>Hooks 使用的注意事项:</span></a></h3>
<ol>
<li>只能<font color=red>在函数内部的最外层调用 Hook，且只能在 react 的函数组件中调用</font>，不要在其他 javascript 函数中调用。</li>
<li>不要在循环，条件判断或者子函数中调用。</li>
<li>只有 Hook 的调用顺序保持一致，React 才能正确地将内部 state 和对应的 Hook 进行关联。</li>
<li>React Hooks 内部是链表结构的，如果不按照顺序书写或者某个 useState 没有执行，就会导致指针移动出错，数据存取出错。</li>
</ol>
<h3 id="内置-hooks-分类" tabindex="-1"><a class="header-anchor" href="#内置-hooks-分类"><span>内置 Hooks 分类</span></a></h3>
<ol>
<li>
<p>路由 Hooks</p>
<blockquote>
<p>被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作。</p>
</blockquote>
<table>
<thead>
<tr>
<th>Hooks</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>useHistory</td>
<td>跳转路由</td>
</tr>
<tr>
<td>useLocation</td>
<td>得到 url 对象</td>
</tr>
<tr>
<td>useParams</td>
<td>得到 url 上的参数</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>状态 Hooks</p>
<table>
<thead>
<tr>
<th>Hooks</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>useState</td>
<td>useState 通过在函数组件里调用它来给组件添加一些内部 state(函数组件是没有 state 的,class 组件有)。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。</td>
</tr>
<tr>
<td>useReducer</td>
<td>状态管理</td>
</tr>
<tr>
<td>useSelector</td>
<td>子组件用来访问父组件 state 中的数据</td>
</tr>
<tr>
<td>useDispatch</td>
<td>子组件用来触发父组件 action 的函数</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>上下文 Hooks</p>
<table>
<thead>
<tr>
<th>Hooks</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>useContext</td>
<td>获取上下文</td>
</tr>
<tr>
<td>useReducerContext</td>
<td>获取上下文</td>
</tr>
<tr>
<td>useStoreContext</td>
<td>获取上下文</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>事件 Hooks</p>
<table>
<thead>
<tr>
<th>Hooks</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>useMemo</td>
<td>缓存计算结果</td>
</tr>
<tr>
<td>useCallback</td>
<td>缓存回调函数。与 useMemo 类似;useMemo 与 useCallback 相同，接收一个函数作为参数，也同样接收第二个参数作为依赖列表；useCallback 是对传过来的回调函数优化，返回的是一个函数。</td>
</tr>
<tr>
<td>useRef</td>
<td>用来获取 ref 绑定的 dom 对象,获取的对象只有个 current 属性，只在函数式组件用，与 createRef 的写法一致；</td>
</tr>
<tr>
<td>useImperativeHandle</td>
<td>自定义暴露给父组件的实例值</td>
</tr>
<tr>
<td>useLayoutEffect</td>
<td>布局钩子，useLayoutEffect 有 DOM 操作的副作用,在 DOM 更新之后执行和 useEffet 类似，但是执行时机不同，useLayoutEffect 在 DOM 更新之后执行，useEffect 在 render 渲染结束后执行，也就是说 useLayoutEffect 比 useEffect 先执行，这是因为 DOM 更新之后，渲染才结束或者渲染还会结束。useLayoutEffect 执行比较 useEffect 快，useEffect 每次都是完整流程，而 useLayoutEffect 在 vdom 后先不渲染，先更新，最后只渲染一次。</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>副作用 Hooks</p>
<table>
<thead>
<tr>
<th>Hooks</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>useEffect</td>
<td>可以看作是 componentDidMount,componentDidUpdate,componentWillUnmount 三个的组合,这个函数就是用来处理&quot;副作用&quot;的, 举个通俗一点的例子, 假如感冒了本来吃点药就没事了, 但是吃了药发现身体过敏了,而这个&quot;过敏&quot;就是副作用。放到 React 中，本来只是想渲染 DOM 展示到页面上，但除了 DOM 之外还有数据，而这些数据必须从外部的数据源中获取，这个&quot;获取外部数据源&quot;的过程就是副作用。</td>
</tr>
<tr>
<td>useDeferredValue</td>
<td>延迟值钩子</td>
</tr>
<tr>
<td>useTransition</td>
<td>过渡钩子</td>
</tr>
</tbody>
</table>
</li>
<li>
<p>其他 Hooks</p>
<table>
<thead>
<tr>
<th>Hooks</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>useDebugValue</td>
<td>调试钩子</td>
</tr>
<tr>
<td>useId</td>
<td>唯一 ID 钩子</td>
</tr>
<tr>
<td>useSyncExternalStore</td>
<td>同步外部存储钩子</td>
</tr>
<tr>
<td>useInsertionEffect</td>
<td>插入钩子</td>
</tr>
</tbody>
</table>
</li>
</ol>
<h3 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect"><span>useEffect</span></a></h3>
<blockquote>
<p>可以看作是 componentDidMount,componentDidUpdate,componentWillUnmount 三个的组合,这个函数就是用来处理&quot;副作用&quot;的, 举个通俗一点的例子, 假如感冒了本来吃点药就没事了, 但是吃了药发现身体过敏了,而这个&quot;过敏&quot;就是副作用。放到 React 中，本来只是想渲染 DOM 展示到页面上，但除了 DOM 之外还有数据，而这些数据必须从外部的数据源中获取，这个&quot;获取外部数据源&quot;的过程就是副作用。</p>
</blockquote>
<h4 id="_1-不传递" tabindex="-1"><a class="header-anchor" href="#_1-不传递"><span>1. 不传递</span></a></h4>
<blockquote>
<p>useEffect 不传递第二个参数会导致每次渲染都会运行 useEffect。然后，当它运行时， 它获取数据并更新状态。然后，一旦状态更新，组件将重新呈现， 这将再次触发 useEffect，这就是问题所在。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setNumber</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//所有更新都执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-传递空数组" tabindex="-1"><a class="header-anchor" href="#_2-传递空数组"><span>2. 传递空数组</span></a></h4>
<blockquote>
<p>如果传递一个空数组作为第二个参数，useEffect 只会在组件挂载和卸载时运行一次。但是，当 props.number 改变时，它不会重新运行，因为 useEffect 的第二个参数没有包含 props.number。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setNumber</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//只在挂载和卸载时执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-传递一个值" tabindex="-1"><a class="header-anchor" href="#_3-传递一个值"><span>3. 传递一个值</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//count更新时执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-传递多个" tabindex="-1"><a class="header-anchor" href="#_4-传递多个"><span>4. 传递多个</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">Asynchronous</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> number <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number2<span class="token punctuation">,</span> setNumber2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setNumber2</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>number<span class="token punctuation">,</span> setNumber2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//监听 props 对象 number 的更改</span>
  <span class="token comment">//setNumber2 是 useState 返回的 setter,所以不会在每次渲染时重新创建它,</span>
  <span class="token comment">//因此 effect 只会运行一次</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传递-props-的对象-传递的-usestate-返回的-setter" tabindex="-1"><a class="header-anchor" href="#传递-props-的对象-传递的-usestate-返回的-setter"><span>传递 props 的对象 传递的 useState 返回的 setter</span></a></h4>
<h4 id="return-方法" tabindex="-1"><a class="header-anchor" href="#return-方法"><span>return 方法</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// useEffect方法的第一个参数是一个函数，函数可以return一个方法，</span>
<span class="token comment">//这个方法就是在组件销毁的时候会被调用</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo"><span>useMemo</span></a></h3>
<blockquote>
<p>useMemo 是用来缓存计算结果的，用来做缓存用。useMemo 使用场景，比如有两个变量（依赖项），只需要在其中一个变量变化时发生变化，否则拿缓存的值；或者其中另一个变量的变化不需要引起重新计算时使用。该属性类似于 vue 中的计算属性，有返回值。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> memoizedValue <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// callback是一个函数用于处理逻辑</span>
<span class="token comment">// array 控制useMemo重新执行的数组，array改变时才会重新执行useMemo</span>
<span class="token comment">// 不传数组，每次更新都会重新计算</span>
<span class="token comment">// 空数组，只会计算一次</span>
<span class="token comment">// 依赖对应的值当对应的值发生变化时才会重新计算(可以依赖另外一个useMemo 返回的值)</span>
<span class="token comment">// useMemo的返回值是一个记忆值，是callback的返回值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate"><span>useState</span></a></h3>
<blockquote>
<p>useState 通过在函数组件里调用它来给组件添加一些内部 state(函数组件是没有 state 的,class 组件有)。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//state: 定义的状态</span>
<span class="token comment">//setState: 更新状态的方法</span>
<span class="token comment">//initialState: 初始状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useref-和-useimperativehandle-以及-react-forwardref" tabindex="-1"><a class="header-anchor" href="#useref-和-useimperativehandle-以及-react-forwardref"><span>useRef 和 useImperativeHandle 以及 React.forwardRef:</span></a></h3>
<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// 基于forwardRef实现ref转发，目的：获取子组件内部的某个元素…</span>

<span class="token comment">// 函数子组件内部，可以有自己的状态和方法了；</span>
<span class="token comment">// 如何实现：基于forwardRef实现ref转发的同时，获取函数子组件内部的状态或者方法呢？useImperativeHandle</span>

<span class="token keyword">const</span> Child <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Child</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">[</span>text<span class="token punctuation">,</span> setText<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"你好世界"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useImperativeHandle</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 在这里返回的内容，都可以被父组件的REF对象获取到</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> text<span class="token punctuation">,</span> submit <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">哈哈哈</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 父组件</span>
<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里可以访问到Child组件内部的text和submit</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


