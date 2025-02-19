<template><div><h2 id="mybatis-单表修改" tabindex="-1"><a class="header-anchor" href="#mybatis-单表修改"><span>MyBatis 单表修改</span></a></h2>
<RouteLink to="/admin/Java/Java进阶/MyBatis/MyBatis的CRUD">MyBatis 的 CRUD 详细案例</RouteLink><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// Doc</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>update<span class="token punctuation">"</span></span>
  <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.domain.User<span class="token punctuation">"</span></span>
  <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.domain.User<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  update user set name = #{name}, age = #{age} where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


