import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h2><blockquote><p>注意：</p><p>avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。</p><p>还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。</p></blockquote><table><thead><tr><th>函数</th><th>作用</th></tr></thead><tbody><tr><td>count()</td><td>统计数量</td></tr><tr><td>sum()</td><td>求和</td></tr><tr><td>max()</td><td>最大值</td></tr><tr><td>min()</td><td>最小值</td></tr><tr><td>avg()</td><td>平均值</td></tr><tr><td>truncate(x,y)</td><td>保留 y 位小数</td></tr><tr><td>round(x,y)</td><td>保留 y 位小数</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ifnull(x,y)`);
      } else {
        return [
          createTextVNode("ifnull(x,y)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`如果 x 值为 Null，返回 y`);
      } else {
        return [
          createTextVNode("如果 x 值为 Null，返回 y")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 查询学生数量</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">as</span> 总的人数 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token operator">and</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄总和</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 总年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 总年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄最大值</span>
<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">max</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄最小值</span>
<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token function">min</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 最大年龄 <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>


<span class="token comment">-- 查询学生年龄平均值</span>
<span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生平均年龄保持两位小数</span>
<span class="token keyword">select</span> <span class="token keyword">truncate</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token keyword">truncate</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 查询学生平均年龄保留一位小数</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>


<span class="token comment">-- 查询学生平均年龄保留一位小数</span>
<span class="token keyword">select</span> <span class="token function">round</span><span class="token punctuation">(</span>ifnull<span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">as</span> 学生平均年龄 <span class="token keyword">from</span> student<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MySql/单表查询/聚合函数.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "聚合函数.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"聚合函数","slug":"聚合函数","link":"#聚合函数","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MySql/单表查询/聚合函数.md","excerpt":"<h2>聚合函数</h2>\\n<blockquote>\\n<p>注意：</p>\\n<p>avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。</p>\\n<p>还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>函数</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>count()</td>\\n<td>统计数量</td>\\n</tr>\\n<tr>\\n<td>sum()</td>\\n<td>求和</td>\\n</tr>\\n<tr>\\n<td>max()</td>\\n<td>最大值</td>\\n</tr>\\n<tr>\\n<td>min()</td>\\n<td>最小值</td>\\n</tr>\\n<tr>\\n<td>avg()</td>\\n<td>平均值</td>\\n</tr>\\n<tr>\\n<td>truncate(x,y)</td>\\n<td>保留 y 位小数</td>\\n</tr>\\n<tr>\\n<td>round(x,y)</td>\\n<td>保留 y 位小数</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  _____html as comp,
  data
};
