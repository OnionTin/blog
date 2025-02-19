import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解"><span>自定义注解</span></a></h2><h3 id="自定义注解格式" tabindex="-1"><a class="header-anchor" href="#自定义注解格式"><span>自定义注解格式</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>元注解
修饰符 <span class="token annotation punctuation">@interface</span> 注解名字<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最基本的定义使用" tabindex="-1"><a class="header-anchor" href="#最基本的定义使用"><span>最基本的定义使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">ZhuJie</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno1</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token annotation punctuation">@MyAnno1</span>
<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反编译探索本质" tabindex="-1"><a class="header-anchor" href="#反编译探索本质"><span>反编译探索本质</span></a></h3><ol><li>将两个 java 文件(Demo.java A.java)放在同一个文件夹下</li><li>在当前文件夹下打开命令行，输入 javac Demo.java A.java</li><li>得到三个文件，分别为 Demo.class A.class MyAnno.class</li><li>使用 javap MyAnno.class 得到反编译后的文件</li><li>观察发现也得到了反编译后的文件内容，这个就是我们要探索的内容</li><li>得到内容为：public interface MyAnno1 extends java.lang.annotation.Annotation{}</li></ol><h3 id="注解的本质" tabindex="-1"><a class="header-anchor" href="#注解的本质"><span>注解的本质</span></a></h3><p>public interface MyAnno1 extends java.lang.annotation.Annotation{}</p>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`注解底层就是一个接口，该接口默认继承了 Annotation 接口`);
      } else {
        return [
          createTextVNode("注解底层就是一个接口，该接口默认继承了 Annotation 接口")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`；所以接口怎么写注解就怎么写<h3 id="注解的属性-就是抽象方法" tabindex="-1"><a class="header-anchor" href="#注解的属性-就是抽象方法"><span>注解的属性(就是抽象方法)</span></a></h3><p>在接口中有很多抽象方法，在接口中定义的方法叫抽象方法；在注解中定义的抽象方法，叫做注解的属性。</p><h3 id="注解属性格式" tabindex="-1"><a class="header-anchor" href="#注解属性格式"><span>注解属性格式</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno1</span> <span class="token punctuation">{</span>
  <span class="token comment">// 抽象方法</span>
  <span class="token comment">// 返回值数据类型 属性名(参数列表);</span>
  <span class="token comment">// 返回值数据类型 方法名();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值数据类型：</p><ol><li>基本数据类型</li><li>String(字符串类型)</li><li>Class</li><li>enum</li><li>Annotation</li><li>以及以上所有数据类型的数组类型</li></ol><h3 id="注解属性的定义与使用" tabindex="-1"><a class="header-anchor" href="#注解属性的定义与使用"><span>注解属性的定义与使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">ZhuJie</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 给注解的所有属性都要赋初始值</span>
<span class="token annotation punctuation">@MyAnno2</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> aaa <span class="token operator">=</span> <span class="token class-name">Enum</span><span class="token punctuation">.</span><span class="token constant">MONDAY</span><span class="token punctuation">,</span> bbb <span class="token operator">=</span> <span class="token annotation punctuation">@MyAnno</span><span class="token punctuation">,</span> ccc <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> getName <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">Demo2</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// MyAnno2.java</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">ZhuJie</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno2</span> <span class="token punctuation">{</span>
    <span class="token comment">// 看着像是字段，其实都是抽象方法，只不过去掉了abstract</span>
    <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">20</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Enum</span> <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">MyAnno</span> <span class="token function">bbb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">ccc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">Enum</span> <span class="token punctuation">{</span>
    <span class="token function">MONDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TUESDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">WEDNESDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Enum</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用注解的属性注意事项" tabindex="-1"><a class="header-anchor" href="#使用注解的属性注意事项"><span>使用注解的属性注意事项</span></a></h3><ol><li>注解的多个属性之间使用逗号隔开，属性之间的顺序无所谓</li><li>注解的属性可以赋默认值(用 default 设置)，如果有了默认值，则使用注解时，属性不需要赋值了</li><li>如果注解有，且只有一个属性时，并且属性的名称是 value，则 value 可以省略，直接定义值即可</li><li>数组赋值时，值使用 {} 包裹。如果数组中只有一个值，则 {} 可以省略</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/注解/自定义注解.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "自定义注解.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"自定义注解","slug":"自定义注解","link":"#自定义注解","children":[{"level":3,"title":"自定义注解格式","slug":"自定义注解格式","link":"#自定义注解格式","children":[]},{"level":3,"title":"最基本的定义使用","slug":"最基本的定义使用","link":"#最基本的定义使用","children":[]},{"level":3,"title":"反编译探索本质","slug":"反编译探索本质","link":"#反编译探索本质","children":[]},{"level":3,"title":"注解的本质","slug":"注解的本质","link":"#注解的本质","children":[]},{"level":3,"title":"注解的属性(就是抽象方法)","slug":"注解的属性-就是抽象方法","link":"#注解的属性-就是抽象方法","children":[]},{"level":3,"title":"注解属性格式","slug":"注解属性格式","link":"#注解属性格式","children":[]},{"level":3,"title":"注解属性的定义与使用","slug":"注解属性的定义与使用","link":"#注解属性的定义与使用","children":[]},{"level":3,"title":"使用注解的属性注意事项","slug":"使用注解的属性注意事项","link":"#使用注解的属性注意事项","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/注解/自定义注解.md","excerpt":"<h2>自定义注解</h2>\\n<h3>自定义注解格式</h3>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code>元注解\\n修饰符 <span class=\\"token annotation punctuation\\">@interface</span> 注解名字<span class=\\"token punctuation\\">{</span>\\n\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');
export {
  ______html as comp,
  data
};
