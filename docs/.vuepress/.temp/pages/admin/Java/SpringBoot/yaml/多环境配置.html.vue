<template><div><h2 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置"><span>多环境配置</span></a></h2>
<blockquote>
<p>开发环境、测试环境、生产环境等</p>
</blockquote>
<h3 id="配置文件的位置优先级" tabindex="-1"><a class="header-anchor" href="#配置文件的位置优先级"><span>配置文件的位置优先级</span></a></h3>
<blockquote>
<p>下边四个位置，配置文件的优先级由高到低，优先级高的会覆盖优先级低的</p>
</blockquote>
<ol>
<li>在项目根目录下的 config 文件夹下</li>
<li>在项目根目录下</li>
<li>在 src/main/resources/config 文件夹下</li>
<li>在 src/main/resources 文件夹下</li>
</ol>
<h3 id="多环境配置-1" tabindex="-1"><a class="header-anchor" href="#多环境配置-1"><span>多环境配置</span></a></h3>
<blockquote>
<p>下面只以 yaml 为例，也可以采用多个 properties 实现(application-dev.properties、application-test.properties、application-prod.properties)
然后在 application.properties 中，给 profiles.active 赋值，例如：spring.profiles.active=dev</p>
</blockquote>
<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre v-pre class="language-yaml"><code><span class="token comment"># 多环境配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8082</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> dev
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> test
<span class="token punctuation">---</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">19200</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span> prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 8082 端口运行：
<img src="@source/admin/Java/SpringBoot/imgs/8082.jpg" alt="8082运行"></p>
</div></template>


