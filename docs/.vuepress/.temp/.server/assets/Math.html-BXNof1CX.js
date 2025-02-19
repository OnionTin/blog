import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>Math</span></a></h2><p>不需要导包，工具类(构造方法是私有的，成员方法是静态的)</p><h3 id="常用的成员方法" tabindex="-1"><a class="header-anchor" href="#常用的成员方法"><span>常用的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>static int abs(int a)</td><td>返回参数的绝对值</td></tr><tr><td>static int max(int a,int b)</td><td>返回两个参数中的较大值</td></tr><tr><td>static int min(int a,int b)</td><td>返回两个参数中的较小值</td></tr><tr><td>static double ceil(double a)</td><td>向上取整</td></tr><tr><td>static double floor(double a)</td><td>向下取整</td></tr><tr><td>static double pow(double a,double b)</td><td>返回 a 的 b 次幂</td></tr><tr><td>static long round(double a)</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`四舍五入`);
      } else {
        return [
          createTextVNode("四舍五入")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>static double random()</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`0-1 之间的随机数`);
      } else {
        return [
          createTextVNode("0-1 之间的随机数")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取较大值</span>

<span class="token keyword">double</span> num <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0-1之间的随机数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/Math.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Math_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Math.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Math.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Math","slug":"math","link":"#math","children":[{"level":3,"title":"常用的成员方法","slug":"常用的成员方法","link":"#常用的成员方法","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/Math.md","excerpt":"<h2>Math</h2>\\n<p>不需要导包，工具类(构造方法是私有的，成员方法是静态的)</p>\\n<h3>常用的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>static int abs(int a)</td>\\n<td>返回参数的绝对值</td>\\n</tr>\\n<tr>\\n<td>static int max(int a,int b)</td>\\n<td>返回两个参数中的较大值</td>\\n</tr>\\n<tr>\\n<td>static int min(int a,int b)</td>\\n<td>返回两个参数中的较小值</td>\\n</tr>\\n<tr>\\n<td>static double ceil(double a)</td>\\n<td>向上取整</td>\\n</tr>\\n<tr>\\n<td>static double floor(double a)</td>\\n<td>向下取整</td>\\n</tr>\\n<tr>\\n<td>static double pow(double a,double b)</td>\\n<td>返回 a 的 b 次幂</td>\\n</tr>\\n<tr>\\n<td>static long round(double a)</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>static double random()</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  Math_html as comp,
  data
};
