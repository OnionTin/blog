<template><div><!-- @format -->
<h2 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信"><span>组件通信</span></a></h2>
<h3 id="组件间的关系" tabindex="-1"><a class="header-anchor" href="#组件间的关系"><span>组件间的关系:</span></a></h3>
<ul>
<li>父子组件</li>
<li>兄弟组件(非嵌套组件)</li>
<li>祖孙组件(跨级组件)</li>
</ul>
<h3 id="几种通信方式" tabindex="-1"><a class="header-anchor" href="#几种通信方式"><span>几种通信方式:</span></a></h3>
<ol>
<li>
<p>props:</p>
<ul>
<li>children props</li>
<li>render props</li>
</ul>
</li>
<li>
<p>消息订阅-发布:</p>
<ul>
<li>pubs-sub</li>
<li>event 等等</li>
</ul>
</li>
<li>
<p>集中式管理:</p>
<ul>
<li>redux</li>
<li>dva 等等</li>
</ul>
</li>
<li>
<p>conText:</p>
<ul>
<li>生产者-消费者模式</li>
</ul>
</li>
</ol>
<h3 id="比较好的搭配方式" tabindex="-1"><a class="header-anchor" href="#比较好的搭配方式"><span>比较好的搭配方式:</span></a></h3>
<ul>
<li>父子组件: props</li>
<li>兄弟组件: 消息订阅-发布、集中式管理</li>
<li>祖孙组件(跨级组件): 消息订阅-发布、集中式管理、conText(开发用的少,封装插件用的多)</li>
</ul>
</div></template>


