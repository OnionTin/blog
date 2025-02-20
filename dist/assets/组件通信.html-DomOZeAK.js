import{_ as l,o as i,c as n,e}from"./app-C_RrakEG.js";const a={},t=e('<h2 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信"><span>组件通信</span></a></h2><h3 id="组件间的关系" tabindex="-1"><a class="header-anchor" href="#组件间的关系"><span>组件间的关系:</span></a></h3><ul><li>父子组件</li><li>兄弟组件(非嵌套组件)</li><li>祖孙组件(跨级组件)</li></ul><h3 id="几种通信方式" tabindex="-1"><a class="header-anchor" href="#几种通信方式"><span>几种通信方式:</span></a></h3><ol><li><p>props:</p><ul><li>children props</li><li>render props</li></ul></li><li><p>消息订阅-发布:</p><ul><li>pubs-sub</li><li>event 等等</li></ul></li><li><p>集中式管理:</p><ul><li>redux</li><li>dva 等等</li></ul></li><li><p>conText:</p><ul><li>生产者-消费者模式</li></ul></li></ol><h3 id="比较好的搭配方式" tabindex="-1"><a class="header-anchor" href="#比较好的搭配方式"><span>比较好的搭配方式:</span></a></h3><ul><li>父子组件: props</li><li>兄弟组件: 消息订阅-发布、集中式管理</li><li>祖孙组件(跨级组件): 消息订阅-发布、集中式管理、conText(开发用的少,封装插件用的多)</li></ul>',7),r=[t];function s(p,o){return i(),n("div",null,r)}const h=l(a,[["render",s],["__file","组件通信.html.vue"]]),u=JSON.parse('{"path":"/web/React/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"组件通信","slug":"组件通信","link":"#组件通信","children":[{"level":3,"title":"组件间的关系:","slug":"组件间的关系","link":"#组件间的关系","children":[]},{"level":3,"title":"几种通信方式:","slug":"几种通信方式","link":"#几种通信方式","children":[]},{"level":3,"title":"比较好的搭配方式:","slug":"比较好的搭配方式","link":"#比较好的搭配方式","children":[]}]}],"git":{"updatedTime":1727972098000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/组件通信.md","excerpt":"<!-- @format -->\\n<h2>组件通信</h2>\\n<h3>组件间的关系:</h3>\\n<ul>\\n<li>父子组件</li>\\n<li>兄弟组件(非嵌套组件)</li>\\n<li>祖孙组件(跨级组件)</li>\\n</ul>\\n<h3>几种通信方式:</h3>\\n<ol>\\n<li>\\n<p>props:</p>\\n<ul>\\n<li>children props</li>\\n<li>render props</li>\\n</ul>\\n</li>\\n<li>\\n<p>消息订阅-发布:</p>\\n<ul>\\n<li>pubs-sub</li>\\n<li>event 等等</li>\\n</ul>\\n</li>\\n<li>\\n<p>集中式管理:</p>\\n<ul>\\n<li>redux</li>\\n<li>dva 等等</li>\\n</ul>\\n</li>\\n<li>\\n<p>conText:</p>\\n<ul>\\n<li>生产者-消费者模式</li>\\n</ul>\\n</li>\\n</ol>"}');export{h as comp,u as data};
