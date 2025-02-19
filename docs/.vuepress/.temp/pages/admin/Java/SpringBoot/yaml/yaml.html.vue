<template><div><h2 id="yaml" tabindex="-1"><a class="header-anchor" href="#yaml"><span>yaml</span></a></h2>
<blockquote>
<p><a href="https://docs.spring.io/spring-boot/appendix/application-properties/index.html#appendix.application-properties" target="_blank" rel="noopener noreferrer">官方配置<ExternalLinkIcon/></a></p>
<p>yaml 比 properties 更加简洁，并且支持数据类型更多</p>
<p>yaml 文件可以注入到配置类中</p>
</blockquote>
<h3 id="yaml-语法" tabindex="-1"><a class="header-anchor" href="#yaml-语法"><span>yaml 语法</span></a></h3>
<ol>
<li>key: value，冒号后面必须有空格</li>
<li>大小写敏感</li>
<li>使用缩进表示层级关系，k-v 对的缩进不允许使用 tab，只允许空格</li>
<li>缩进的空格数不重要，只要相同层级的元素左对齐即可</li>
<li>'#' 表示注释</li>
<li>字符串默认不使用引号，单引号和双引号都可以，单引号转义字符无效，双引号转义字符有效</li>
<li>yaml 支持的数据类型有：null、boolean、string、number、date、array、map</li>
<li>yaml 支持的数据结构有：scalar、sequence、mapping</li>
<li>yaml 文件可以注册到配置类中</li>
<li>yaml，支持松散绑定</li>
</ol>
<h3 id="yaml-与-properties-的区别" tabindex="-1"><a class="header-anchor" href="#yaml-与-properties-的区别"><span>yaml 与 properties 的区别</span></a></h3>
<ol>
<li>yaml 可以写对象或者数组，properties 不行</li>
<li>yaml 写对象可以使用行内写法</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">student</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> zhangsan
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
<span class="token comment"># 等价于</span>
<span class="token key atrule">student</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> zhangsan<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>yaml 写数组</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">pets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> cat
  <span class="token punctuation">-</span> dog
<span class="token comment"># 等价于</span>
<span class="token key atrule">pets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>cat<span class="token punctuation">,</span> dog<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>yaml 支持多行字符串，注意缩进</li>
</ol>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">my</span><span class="token punctuation">:</span>
  <span class="token key atrule">desc</span><span class="token punctuation">:</span> <span class="token punctuation">></span><span class="token scalar string">
    hello
    world</span>
<span class="token comment"># 等价于</span>
<span class="token key atrule">my</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">desc</span><span class="token punctuation">:</span> <span class="token string">"hello\nworld"</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


