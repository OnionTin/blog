<template><div><h2 id="react-高阶组件" tabindex="-1"><a class="header-anchor" href="#react-高阶组件"><span>react 高阶组件</span></a></h2>
<ol>
<li><code v-pre>React.memo</code>: 适用于函数组件，但不适用于 class 组件
<blockquote>
<p><code v-pre>React.memo()使用场景就是纯函数组件频繁渲染props</code>; <code v-pre>React.memo 仅检查 props 变更</code>,且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍<code v-pre>会重新渲染</code>;其实就是在实现 shouldComponentUpdate 生命周期。</p>
</blockquote>
</li>
<li><code v-pre>React.PureComponent</code>: 在 class 组件中使用。
<blockquote>
<p>React.PureComponent 与 React.Component 唯一的区别在于 Rect.Component 没有实现 shouldComponentUpdate(), 而 React.PureComponent 中<code v-pre>以浅层对比 props 和state 的方式</code>来实现了该函数。</p>
</blockquote>
</li>
<li><code v-pre>withRouter</code>： <code v-pre>withRouter</code>的作用就是, 如果我们某个东西不是一个<code v-pre>Router</code>, 但是我们要依靠它去跳转一个页面。
<blockquote>
<p>比如点击页面的<code v-pre>logo</code>, <code v-pre>返回首页</code>。, 这时候就可以使用<code v-pre>withRouter</code>来做.<code v-pre>withRouter</code>, 作用是将一个组件包裹进<code v-pre>Route</code>里面, 然后<code v-pre>react-router</code>的三个对象<code v-pre>history, location, match</code>就会被放进这个组件的<code v-pre>props</code>属性中。被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作</p>
</blockquote>
</li>
</ol>
</div></template>


