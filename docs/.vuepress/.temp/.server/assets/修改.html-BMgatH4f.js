import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="mybatis-单表修改" tabindex="-1"><a class="header-anchor" href="#mybatis-单表修改"><span>MyBatis 单表修改</span></a></h2>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java进阶/MyBatis/MyBatis的CRUD" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`MyBatis 的 CRUD 详细案例`);
      } else {
        return [
          createTextVNode("MyBatis 的 CRUD 详细案例")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Doc</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain.User<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.api.MyBatis.domain.User<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  update user set name = #{name}, age = #{age} where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/MyBatis/单表操作/修改.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "修改.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E4%BF%AE%E6%94%B9.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"MyBatis 单表修改","slug":"mybatis-单表修改","link":"#mybatis-单表修改","children":[]}],"git":{"updatedTime":1726219315000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/MyBatis/单表操作/修改.md","excerpt":"<h2>MyBatis 单表修改</h2>\\n<a href=\\"/blog/admin/Java/Java进阶/MyBatis/MyBatis的CRUD\\" target=\\"_blank\\">MyBatis 的 CRUD 详细案例</a><div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// Doc</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">update</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">User</span> user<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  ___html as comp,
  data
};
