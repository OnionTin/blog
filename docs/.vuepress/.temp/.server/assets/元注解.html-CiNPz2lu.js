import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="元注解" tabindex="-1"><a class="header-anchor" href="#元注解"><span>元注解</span></a></h2><p>用来标注注解的注解就称为元注解</p><table><thead><tr><th>元注解</th><th>作用</th></tr></thead><tbody><tr><td>@Target</td><td>限制被元注解标注的注解，可以用在什么地方</td></tr><tr><td>@Retention</td><td>限制被元注解标注的注解，生命时常</td></tr><tr><td>@Documented</td><td>被该元注解所标注的注解能够存在于帮助文档中；没有参数</td></tr><tr><td>@Inherited</td><td>被该元注解所标注的注解能够被子类继承(即子类也有该注解)；没有参数</td></tr></tbody></table><h3 id="target-元注解的参数" tabindex="-1"><a class="header-anchor" href="#target-元注解的参数"><span>@Target 元注解的参数</span></a></h3><table><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>ElementType.TYPE</td><td>限制当前注解，只能用来描述类、接口(包括注解类型) 或 enum 声明</td></tr><tr><td>ElementType.FIELD</td><td>同上，只能用于属性上方</td></tr><tr><td>ElementType.METHOD</td><td>同上，只能用于方法上</td></tr></tbody></table><blockquote><p>@Target 的参数，其实是 value，但是因为有且只有这一个参数，所以 value 就可以省略了，正常是 value={xxx}；当参数值是数组时，即{ElementType.FIELD,ElementType.METHOD}，那么此时 value 就不能省略了</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 只能作用在类上</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token annotation punctuation">@MyAnno</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>
\`\`\`java
<span class="token comment">// 只能作用在属性上</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@MyAnno</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 只能作用在方法上</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@MyAnno</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 可以作用在属性和方法上</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">FIELD</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnno</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@MyAnno</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@MyAnno</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retention-元注解的参数" tabindex="-1"><a class="header-anchor" href="#retention-元注解的参数"><span>@Retention 元注解的参数</span></a></h3><table><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>RetentionPolicy.SOURCE</td><td>存活在源文件中，编译之后就消失了</td></tr><tr><td>RetentionPolicy.CLASS</td><td>存活在源文件和字节码文件期间，运行之后就消失了</td></tr><tr><td>RetentionPolicy.RUNTIME</td><td>存活在源文件和字节码文件中，运行后不消失</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/注解/元注解.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "元注解.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E5%85%83%E6%B3%A8%E8%A7%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"元注解","slug":"元注解","link":"#元注解","children":[{"level":3,"title":"@Target 元注解的参数","slug":"target-元注解的参数","link":"#target-元注解的参数","children":[]},{"level":3,"title":"@Retention 元注解的参数","slug":"retention-元注解的参数","link":"#retention-元注解的参数","children":[]}]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/注解/元注解.md","excerpt":"<h2>元注解</h2>\\n<p>用来标注注解的注解就称为元注解</p>\\n<table>\\n<thead>\\n<tr>\\n<th>元注解</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>@Target</td>\\n<td>限制被元注解标注的注解，可以用在什么地方</td>\\n</tr>\\n<tr>\\n<td>@Retention</td>\\n<td>限制被元注解标注的注解，生命时常</td>\\n</tr>\\n<tr>\\n<td>@Documented</td>\\n<td>被该元注解所标注的注解能够存在于帮助文档中；没有参数</td>\\n</tr>\\n<tr>\\n<td>@Inherited</td>\\n<td>被该元注解所标注的注解能够被子类继承(即子类也有该注解)；没有参数</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  ____html as comp,
  data
};
