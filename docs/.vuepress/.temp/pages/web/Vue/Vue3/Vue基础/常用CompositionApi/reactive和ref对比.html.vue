<template><div><h2 id="ref-与-reactive-对比" tabindex="-1"><a class="header-anchor" href="#ref-与-reactive-对比"><span>ref 与 reactive 对比</span></a></h2>
<h3 id="从定义数据角度对比" tabindex="-1"><a class="header-anchor" href="#从定义数据角度对比"><span>从定义数据角度对比:</span></a></h3>
<ul>
<li><code v-pre>ref</code> 用来定义：基本类型数据。</li>
<li><code v-pre>reactive</code> 用来定义：对象（或数组）类型数据。</li>
<li><strong>备注</strong>: <code v-pre>ref</code> 也可以用来定义对象（或数组）类型数据，它内部会自动通过 <code v-pre>reactive</code> 转为代理对象。</li>
</ul>
<h3 id="从原理角度对比" tabindex="-1"><a class="header-anchor" href="#从原理角度对比"><span>从原理角度对比:</span></a></h3>
<ul>
<li><code v-pre>ref</code> 通过 <code v-pre>Object.defineProperty()</code> 的 <code v-pre>get</code> 与 <code v-pre>set</code> 来实现响应式（数据劫持）。</li>
<li><code v-pre>reactive</code> 通过使用 <code v-pre>Proxy</code> 来实现响应式（数据劫持），并通过 <code v-pre>Reflect</code> 操作源对象内部的数据。</li>
</ul>
<h3 id="从使用角度对比" tabindex="-1"><a class="header-anchor" href="#从使用角度对比"><span>从使用角度对比:</span></a></h3>
<ul>
<li><code v-pre>ref</code> 定义的数据：操作数据需要 <code v-pre>.value</code>，读取数据时模板中直接读取不需要 <code v-pre>.value</code>。</li>
<li><code v-pre>reactive</code> 定义的数据：操作数据与读取数据均不需要 <code v-pre>.value</code>。</li>
</ul>
</div></template>


