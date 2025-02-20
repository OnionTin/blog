import{_ as s,r as t,o as e,c as o,d as p,w as c,a,e as l,b as i}from"./app-C_RrakEG.js";const u={},d=a("h2",{id:"mybatis-单表删除",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mybatis-单表删除"},[a("span",null,"MyBatis 单表删除")])],-1),r=l(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Doc</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delete<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain.User<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  delete from user where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(k,v){const n=t("RouteLink");return e(),o("div",null,[d,p(n,{to:"/admin/Java/Java进阶/MyBatis/MyBatis的CRUD"},{default:c(()=>[i("MyBatis 的 CRUD 详细案例")]),_:1}),r])}const g=s(u,[["render",m],["__file","删除.html.vue"]]),h=JSON.parse('{"path":"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E5%88%A0%E9%99%A4.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MyBatis 单表删除","slug":"mybatis-单表删除","link":"#mybatis-单表删除","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/单表操作/删除.md","excerpt":"<h2>MyBatis 单表删除</h2>\\n<a href=\\"/blog/admin/Java/Java进阶/MyBatis/MyBatis的CRUD\\" target=\\"_blank\\">MyBatis 的 CRUD 详细案例</a><div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// Doc</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">delete</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> id<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{g as comp,h as data};
