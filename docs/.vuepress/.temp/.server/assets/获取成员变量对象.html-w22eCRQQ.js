import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="获取成员变量对象" tabindex="-1"><a class="header-anchor" href="#获取成员变量对象"><span>获取成员变量对象</span></a></h2><p>成员变量对象的访问权限相关的要求，与`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java进阶/反射/获取构造方法.md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`构造方法对象`);
      } else {
        return [
          createTextVNode("构造方法对象")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的访问权限相关的要求相同，都涉及到`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`暴力反射`);
      } else {
        return [
          createTextVNode("暴力反射")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`相关内容。</p><h3 id="如何成员变量的对象" tabindex="-1"><a class="header-anchor" href="#如何成员变量的对象"><span>如何成员变量的对象</span></a></h3><p>获取`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`public`);
      } else {
        return [
          createTextVNode("public")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 修饰的成员变量对象</p><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public Field getField(String name)</td><td>获取单个成员变量对象</td></tr><tr><td>public Field[] getFields()</td><td>获取所有公共的成员变量对象</td></tr></tbody></table><p>获取`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`忽略修饰符`);
      } else {
        return [
          createTextVNode("忽略修饰符")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的成员变量对象</p><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public Field getDeclaredField(String name)</td><td>获取单个成员变量对象</td></tr><tr><td>public Field[] getDeclaredFields()</td><td>获取所有的成员变量对象</td></tr></tbody></table><h3 id="field-类中的方法" tabindex="-1"><a class="header-anchor" href="#field-类中的方法"><span>Field 类中的方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public void set(Object obj, Object value)</td><td>给某个具体的的实例对象，设置其具体的某个成员变量的值</td></tr><tr><td>public Object get(Object obj)</td><td>获取具体的实例对象的成员变量的值</td></tr><tr><td>public void setAccessible(boolean flag)</td><td>设置成员变量是否可以访问(true：不校验，false：校验)</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Reflex</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo05</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取字节码文件对象</span>
        <span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.api.Reflex.Dog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 name 的成员变量对象</span>
        <span class="token class-name">Field</span> f_name <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 age 的成员变量对象</span>
        <span class="token class-name">Field</span> f_age <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 获取 color 的成员变量对象 color不是public修饰的</span>
        <span class="token class-name">Field</span> f_color <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f_age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// public java.lang.String com.api.Reflex.Dog.name</span>
        <span class="token comment">// public int com.api.Reflex.Dog.age</span>
        <span class="token comment">// private java.lang.String com.api.Reflex.Dog.color</span>

        <span class="token class-name">Object</span> obj1 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> obj2 <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置暴力反射</span>
        f_color<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给 name 的成员变量对象赋值</span>
        f_name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">&quot;淘宝&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给 age 的成员变量对象赋值</span>
        f_age<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 给 color 的成员变量对象赋值</span>
        f_color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span><span class="token string">&quot;黑色&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        f_name<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">&quot;京东&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f_age<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        f_color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span><span class="token string">&quot;红色&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// Dog{name=&#39;淘宝&#39;, age=3, color=&#39;黑色&#39;}</span>
        <span class="token comment">// Dog{name=&#39;京东&#39;, age=2, color=&#39;红色&#39;}</span>

        <span class="token class-name">Object</span> dog1_name <span class="token operator">=</span> f_name<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> dog1_age <span class="token operator">=</span> f_age<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> dog1_color <span class="token operator">=</span> f_color<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dog1_name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dog1_age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>dog1_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// 淘宝</span>
        <span class="token comment">// 3</span>
        <span class="token comment">// 黑色</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> color<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;空参构造&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Dog{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">&quot;, color=&#39;&quot;</span> <span class="token operator">+</span> color <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/反射/获取成员变量对象.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "获取成员变量对象.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"获取成员变量对象","slug":"获取成员变量对象","link":"#获取成员变量对象","children":[{"level":3,"title":"如何成员变量的对象","slug":"如何成员变量的对象","link":"#如何成员变量的对象","children":[]},{"level":3,"title":"Field 类中的方法","slug":"field-类中的方法","link":"#field-类中的方法","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/反射/获取成员变量对象.md","excerpt":"<h2>获取成员变量对象</h2>\\n<p>成员变量对象的访问权限相关的要求，与<a href=\\"/blog/admin/Java/Java进阶/反射/获取构造方法.md\\" target=\\"_blank\\">构造方法对象</a>的访问权限相关的要求相同，都涉及到相关内容。</p>\\n<h3>如何成员变量的对象</h3>\\n<p>获取 修饰的成员变量对象</p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public Field getField(String name)</td>\\n<td>获取单个成员变量对象</td>\\n</tr>\\n<tr>\\n<td>public Field[] getFields()</td>\\n<td>获取所有公共的成员变量对象</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  _________html as comp,
  data
};
