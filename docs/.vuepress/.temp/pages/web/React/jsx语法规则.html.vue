<template><div><h2 id="jsx-语法规则" tabindex="-1"><a class="header-anchor" href="#jsx-语法规则"><span>jsx 语法规则</span></a></h2>
<ol>
<li>
<p>定义虚拟 DOM 时，不要写引号。</p>
</li>
<li>
<p>标签中混入 JS 表达式时要用{}。</p>
</li>
<li>
<p>样式的类名指定不要用 class，要用 className。</p>
</li>
<li>
<p>内联样式，要用 <code v-pre>style={{key:value}}</code>的形式去写。</p>
</li>
<li>
<p>只有一个根标签</p>
</li>
<li>
<p>标签必须闭合</p>
</li>
<li>
<p>标签首字母</p>
<ul>
<li>若小写字母开头，则将该标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，</li>
<li>若大写字母开头,react 就去渲染对应的组件,若组件没有定义</li>
</ul>
</li>
</ol>
</div></template>


