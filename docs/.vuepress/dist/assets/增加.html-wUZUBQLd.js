import{_ as s,r as t,o as e,c as p,d as o,w as c,a,e as l,b as i}from"./app-CvP7wor-.js";const u={},d=a("h2",{id:"mybatis-单表添加",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#mybatis-单表添加"},[a("span",null,"MyBatis 单表添加")])],-1),r=l(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Doc</span>
<span class="token comment">// 添加一条</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加一条后获取id值进行后续操作</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addReturnId</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain.User<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain.User<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  insert into user set id = #{id}, name = #{name}, age = #{age}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addReturnId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>selectKey</span> <span class="token attr-name">keyColumn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span> <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AFTER<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select last_insert_id()
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>selectKey</span><span class="token punctuation">&gt;</span></span>
  insert into user values (null, #{name}, #{age})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(m,v){const n=t("RouteLink");return e(),p("div",null,[d,o(n,{to:"/admin/Java/Java进阶/MyBatis/MyBatis的CRUD"},{default:c(()=>[i("MyBatis 的 CRUD 详细案例")]),_:1}),r])}const b=s(u,[["render",k],["__file","增加.html.vue"]]),y=JSON.parse('{"path":"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E5%A2%9E%E5%8A%A0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MyBatis 单表添加","slug":"mybatis-单表添加","link":"#mybatis-单表添加","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/单表操作/增加.md","excerpt":"<h2>MyBatis 单表添加</h2>\\n<a href=\\"/blog/admin/Java/Java进阶/MyBatis/MyBatis的CRUD\\" target=\\"_blank\\">MyBatis 的 CRUD 详细案例</a><div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// Doc</span>\\n<span class=\\"token comment\\">// 添加一条</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">User</span> user<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 添加一条后获取id值进行后续操作</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">addReturnId</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">User</span> user<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{b as comp,y as data};
