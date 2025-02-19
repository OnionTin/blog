import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询"><span>子查询</span></a></h2><p>嵌套查询：查询语句里边还有查询语句；里边的查询语句称为子查询。</p><ol><li>子查询结果为一条记录</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 案例：查询 a 表中 id 值等于 b 表中名字为 Tony 的记录的 id</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">where</span> id XXX<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> b <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tony&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 子查询</span>
<span class="token keyword">select</span> id <span class="token keyword">from</span> a <span class="token keyword">where</span> id <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> b <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tony&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- +----+------+</span>
<span class="token comment">-- | id | name |</span>
<span class="token comment">-- +----+------+</span>
<span class="token comment">-- |  1 | Tony    |</span>
<span class="token comment">-- +----+------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>子查询结果为多个记录</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 案例：查询 a 表中 id 值等于 b 表中姓名为 Tony、Jerry 的记录的id</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">where</span> id <span class="token operator">in</span> XXX<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> b <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tony&#39;</span> <span class="token operator">or</span> name <span class="token operator">=</span> <span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 子查询</span>
<span class="token keyword">select</span> id <span class="token keyword">from</span> a <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> b <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tony&#39;</span> <span class="token operator">or</span> name <span class="token operator">=</span> <span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- +----+------+</span>
<span class="token comment">-- | id | name |</span>
<span class="token comment">-- +----+------+</span>
<span class="token comment">-- |  1 | Tony    |</span>
<span class="token comment">-- |  2 | Jerry    |</span>
<span class="token comment">-- +----+------+</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>子查询结果为一张表</li></ol><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 案例：查询 a 表中的记录信息，要求：用子查询实现按照 id 降序排列</span>

<span class="token comment">-- 子查询方式1</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> XXX<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span><span class="token punctuation">)</span> newA<span class="token punctuation">;</span>

<span class="token comment">-- 子查询方式2</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">where</span> id <span class="token operator">in</span> XXX<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span><span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> a <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> a <span class="token keyword">order</span> <span class="token keyword">by</span> id <span class="token keyword">desc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- +----+------+</span>
<span class="token comment">-- | id | name |</span>
<span class="token comment">-- +----+------+</span>
<span class="token comment">-- |  5 | Tony    |</span>
<span class="token comment">-- |  4 | Jerry    |</span>
<span class="token comment">-- |  3 | Tom      |</span>
<span class="token comment">-- |  2 | Jerry    |</span>
<span class="token comment">-- |  1 | Tony    |</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/多表查询/子查询.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "子查询.html.vue"]]);
const data = JSON.parse(`{"path":"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%AD%90%E6%9F%A5%E8%AF%A2.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"子查询","slug":"子查询","link":"#子查询","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/多表查询/子查询.md","excerpt":"<h2>子查询</h2>\\n<p>嵌套查询：查询语句里边还有查询语句；里边的查询语句称为子查询。</p>\\n<ol>\\n<li>子查询结果为一条记录</li>\\n</ol>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 案例：查询 a 表中 id 值等于 b 表中名字为 Tony 的记录的 id</span>\\n\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> a <span class=\\"token keyword\\">where</span> id XXX<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> b <span class=\\"token keyword\\">where</span> name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Tony'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 子查询</span>\\n<span class=\\"token keyword\\">select</span> id <span class=\\"token keyword\\">from</span> a <span class=\\"token keyword\\">where</span> id <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">select</span> id <span class=\\"token keyword\\">from</span> b <span class=\\"token keyword\\">where</span> name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Tony'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 结果：</span>\\n<span class=\\"token comment\\">-- +----+------+</span>\\n<span class=\\"token comment\\">-- | id | name |</span>\\n<span class=\\"token comment\\">-- +----+------+</span>\\n<span class=\\"token comment\\">-- |  1 | Tony    |</span>\\n<span class=\\"token comment\\">-- +----+------+</span>\\n</code></pre></div>"}`);
export {
  ____html as comp,
  data
};
