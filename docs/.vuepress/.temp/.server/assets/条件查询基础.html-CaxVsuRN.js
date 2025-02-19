import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询"><span>条件查询</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> 表名 <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>

<span class="token keyword">select</span> 字段<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">from</span> 表名 <span class="token keyword">where</span> 条件<span class="token punctuation">;</span>

<span class="token keyword">select</span> name<span class="token punctuation">,</span> age <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token operator">and</span> sex <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的条件" tabindex="-1"><a class="header-anchor" href="#常用的条件"><span>常用的条件</span></a></h3><table><thead><tr><th>操作符</th><th>描述</th></tr></thead><tbody><tr><td>=</td><td>等于</td></tr><tr><td>&gt;</td><td>大于</td></tr><tr><td>&lt;</td><td>小于</td></tr><tr><td>&gt;=</td><td>大于等于</td></tr><tr><td>&lt;=</td><td>小于等于</td></tr><tr><td>!= 或者 &lt;&gt;</td><td>不等于</td></tr><tr><td>between ... and ...</td><td>在范围内(包头包尾)</td></tr><tr><td>字段名 in(value1, value2, ...)</td><td>查询字段值为 xxx 的数据</td></tr><tr><td>is null</td><td>是空</td></tr><tr><td>is not null</td><td>不是空</td></tr><tr><td>and 或者 &amp;&amp;</td><td>逻辑与</td></tr><tr><td>or 或者 | |</td><td>逻辑或</td></tr><tr><td>distinct</td><td>去重</td></tr><tr><td>like</td><td>模糊查询</td></tr><tr><td>as</td><td>给列名或者表名起别名</td></tr></tbody></table><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> student<span class="token punctuation">(</span>
  id <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
  name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  age <span class="token keyword">int</span><span class="token punctuation">,</span>
  sex <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;Jerry&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;Rose&#39;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;Wei&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> student<span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sex<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;Wei&#39;</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">and</span> age <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> age <span class="token operator">between</span> <span class="token number">18</span> <span class="token operator">and</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> name <span class="token operator">in</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Rose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询是否空值，千万别写成 sex = null;</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> sex <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span> <span class="token operator">and</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;Tom&#39;</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

<span class="token comment">-- 针对某个字段去重</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> age <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 针对多个字段去重</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> name<span class="token punctuation">,</span> age <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 针对整体去重</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> <span class="token operator">*</span> <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 模糊查询：查询表中名字的第二个字母是e的数据</span>
<span class="token comment">-- %代表0个或多个字符，_代表任意的一个字符</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">&#39;_e%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 查询名字中包含e的</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">where</span> name <span class="token operator">like</span> <span class="token string">&#39;%e%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 可以用汉字，且不需要引号；引号加上也没问题</span>
<span class="token keyword">select</span> id <span class="token keyword">as</span> Id<span class="token punctuation">,</span> name <span class="token keyword">as</span> 姓名<span class="token punctuation">,</span> age <span class="token keyword">as</span> 年龄<span class="token punctuation">,</span> sex <span class="token keyword">as</span> 性别 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- as 也可以省略，同样也是给字段起别名</span>
<span class="token keyword">select</span> id Id<span class="token punctuation">,</span> name 姓名<span class="token punctuation">,</span> age 年龄<span class="token punctuation">,</span> sex 性别 <span class="token keyword">from</span> student<span class="token punctuation">;</span>

<span class="token comment">-- 给表起别名</span>
<span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> student <span class="token keyword">as</span> s<span class="token punctuation">;</span>

<span class="token keyword">select</span> s<span class="token punctuation">.</span>id<span class="token punctuation">,</span> s<span class="token punctuation">.</span>name<span class="token punctuation">,</span> s<span class="token punctuation">.</span>age<span class="token punctuation">,</span> s<span class="token punctuation">.</span>sex <span class="token keyword">from</span> student <span class="token keyword">as</span> s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java进阶/MySql/单表查询/条件查询基础.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "条件查询基础.html.vue"]]);
const data = JSON.parse(`{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2%E5%9F%BA%E7%A1%80.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"条件查询","slug":"条件查询","link":"#条件查询","children":[{"level":3,"title":"常用的条件","slug":"常用的条件","link":"#常用的条件","children":[]}]}],"git":{"updatedTime":1719909739000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/MySql/单表查询/条件查询基础.md","excerpt":"<h2>条件查询</h2>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> 表名 <span class=\\"token keyword\\">where</span> 条件<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">select</span> 字段<span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> 字段<span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> 字段<span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> <span class=\\"token keyword\\">from</span> 表名 <span class=\\"token keyword\\">where</span> 条件<span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">select</span> name<span class=\\"token punctuation\\">,</span> age <span class=\\"token keyword\\">from</span> student <span class=\\"token keyword\\">where</span> age <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">select</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">from</span> student <span class=\\"token keyword\\">where</span> age <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">18</span> <span class=\\"token operator\\">and</span> sex <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'男'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);
export {
  _______html as comp,
  data
};
