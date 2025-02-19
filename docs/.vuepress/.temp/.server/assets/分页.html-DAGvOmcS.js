import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询"><span>分页查询</span></a></h2><blockquote><p>select * from 表名 limit 个数, 每页条数;</p><p>其中，个数从 0 开始，即默认为 0；每页条数默认为 10 条；个数等于 第 n 页 * 每页条数</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 查询第一页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第二页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第三页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第四页的记录</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询第n页</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> students <span class="token keyword">limit</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> 每页条数<span class="token punctuation">,</span> 每页条数<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/单表查询/分页.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "分页.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%88%86%E9%A1%B5.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/单表查询/分页.md","excerpt":"<h2>分页查询</h2>\\n<blockquote>\\n<p>select * from 表名 limit 个数, 每页条数;</p>\\n<p>其中，个数从 0 开始，即默认为 0；每页条数默认为 10 条；个数等于 第 n 页 * 每页条数</p>\\n</blockquote>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token comment\\">-- 查询第一页的记录</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> students <span class=\\"token keyword\\">limit</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 查询第二页的记录</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> students <span class=\\"token keyword\\">limit</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 查询第三页的记录</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> students <span class=\\"token keyword\\">limit</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 查询第四页的记录</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> students <span class=\\"token keyword\\">limit</span> <span class=\\"token number\\">30</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">-- 查询第n页</span>\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> students <span class=\\"token keyword\\">limit</span> <span class=\\"token punctuation\\">(</span>n<span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> 每页条数<span class=\\"token punctuation\\">,</span> 每页条数<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  ___html as comp,
  data
};
