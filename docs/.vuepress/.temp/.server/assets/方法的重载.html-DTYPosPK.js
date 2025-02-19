import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="重载-overload" tabindex="-1"><a class="header-anchor" href="#重载-overload"><span>重载(@Overload)</span></a></h2><h3 id="_1-重载的概念" tabindex="-1"><a class="header-anchor" href="#_1-重载的概念"><span>1. 重载的概念</span></a></h3><ul><li>重载：在同一个类中，出现多个方法的名字相同，但是它们的形参（参数个数、参数类型、参数顺序）不同的多个方法。</li><li>方法的重载与返回值类型无关。</li></ul><h3 id="_3-重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#_3-重载和重写的区别"><span>3. 重载和重写的区别</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, {
    active: "",
    to: "/admin/Java/Java基础/方法的重载.md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`重载`);
      } else {
        return [
          createTextVNode("重载")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，通过同名不同参数的方法重载。</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java基础/重写.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`重写`);
      } else {
        return [
          createTextVNode("重写")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`：子类根据需要对从父类继承来的方法进行改造，使得父类方法在子类中得到新的实现版本。</li><li>重写和重载都是实现多态的方式，区别在于<code>重载</code>发生于<code>同一个类</code>中，重载发生在<code>编译期</code>，<code>重写</code>发生于<code>继承体系</code>中，发生在<code>运行期</code>。</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
<span class="token comment">// 方法重载的案例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OverloadExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;无参数方法被调用！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int类型参数方法被调用！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">double</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;int类型和double类型参数方法被调用！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">double</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;double类型和int类型参数方法被调用！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;String类型参数方法被调用！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OverloadExample</span> ex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OverloadExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java基础/方法的重载.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "方法的重载.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%96%B9%E6%B3%95%E7%9A%84%E9%87%8D%E8%BD%BD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"重载(@Overload)","slug":"重载-overload","link":"#重载-overload","children":[{"level":3,"title":"1. 重载的概念","slug":"_1-重载的概念","link":"#_1-重载的概念","children":[]},{"level":3,"title":"3. 重载和重写的区别","slug":"_3-重载和重写的区别","link":"#_3-重载和重写的区别","children":[]}]}],"git":{"updatedTime":1710494011000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java基础/方法的重载.md","excerpt":"<h2>重载(@Overload)</h2>\\n<h3>1. 重载的概念</h3>\\n<ul>\\n<li>重载：在同一个类中，出现多个方法的名字相同，但是它们的形参（参数个数、参数类型、参数顺序）不同的多个方法。</li>\\n<li>方法的重载与返回值类型无关。</li>\\n</ul>\\n<h3>3. 重载和重写的区别</h3>\\n<ul>\\n<li>\\n<a active=\\"\\" href=\\"/blog/admin/Java/Java基础/方法的重载.md\\" target=\\"_blank\\">重载</a>：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，通过同名不同参数的方法重载。</li>\\n<li>\\n<a href=\\"/blog/admin/Java/Java基础/重写.md\\" target=\\"_blank\\">重写</a>：子类根据需要对从父类继承来的方法进行改造，使得父类方法在子类中得到新的实现版本。</li>\\n<li>重写和重载都是实现多态的方式，区别在于<code>重载</code>发生于<code>同一个类</code>中，重载发生在<code>编译期</code>，<code>重写</code>发生于<code>继承体系</code>中，发生在<code>运行期</code>。</li>\\n</ul>"}');
export {
  ______html as comp,
  data
};
