import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="mybatis-延迟加载" tabindex="-1"><a class="header-anchor" href="#mybatis-延迟加载"><span>MyBatis 延迟加载</span></a></h2><blockquote><p>在`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`MyBatis 一堆多查询中`);
      } else {
        return [
          createTextVNode("MyBatis 一堆多查询中")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。</p></blockquote><h3 id="开启延迟加载" tabindex="-1"><a class="header-anchor" href="#开启延迟加载"><span>开启延迟加载</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>SqlMapConfig.xml
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--全局开启延迟加载--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazyLoadingEnabled<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aggressiveLazyLoading<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MyBatis/MyBatis延迟加载.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyBatis_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "MyBatis延迟加载.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MyBatis/MyBatis%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MyBatis 延迟加载","slug":"mybatis-延迟加载","link":"#mybatis-延迟加载","children":[{"level":3,"title":"开启延迟加载","slug":"开启延迟加载","link":"#开启延迟加载","children":[]}]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/MyBatis延迟加载.md","excerpt":"<h2>MyBatis 延迟加载</h2>\\n<blockquote>\\n<p>在，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。</p>\\n</blockquote>\\n<h3>开启延迟加载</h3>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code>SqlMapConfig.xml\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>settings</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token comment\\">&lt;!--全局开启延迟加载--&gt;</span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>setting</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>lazyLoadingEnabled<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>setting</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>aggressiveLazyLoading<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>false<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">/&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>settings</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');
export {
  MyBatis_____html as comp,
  data
};
