import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="arraylist-实现类" tabindex="-1"><a class="header-anchor" href="#arraylist-实现类"><span>ArrayList 实现类</span></a></h2><p>需要导包，在 java.util 下；ArrayList 是 List 接口的实现类；底层是数组数据结构。</p><h3 id="arraylist-类的特点-list-接口的特点" tabindex="-1"><a class="header-anchor" href="#arraylist-类的特点-list-接口的特点"><span>ArrayList 类的特点(List 接口的特点)</span></a></h3><ol><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`有序`);
      } else {
        return [
          createTextVNode("有序")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`的集合（即：存进去的顺序和取出来的顺序是一致的）</li><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`有索引`);
      } else {
        return [
          createTextVNode("有索引")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>元素都`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`允许重复`);
      } else {
        return [
          createTextVNode("允许重复")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public ArrayList</td><td>new 对象</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><p>和 `);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`List 接口`);
            } else {
              return [
                createTextVNode("List 接口")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` 中定义的方法基本一致，当然包括`);
        _push2(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Collection接口.md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Collection 集合`);
            } else {
              return [
                createTextVNode("Collection 集合")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`中的方法。`);
      } else {
        return [
          createVNode(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md" }, {
            default: withCtx(() => [
              createTextVNode("List 接口")
            ]),
            _: 1
          }),
          createTextVNode(" 中定义的方法基本一致，当然包括"),
          createVNode(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/Collection接口.md" }, {
            default: withCtx(() => [
              createTextVNode("Collection 集合")
            ]),
            _: 1
          }),
          createTextVNode("中的方法。")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3><p>和 `);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`List 接口`);
            } else {
              return [
                createTextVNode("List 接口")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` 中定义的遍历一样。`);
      } else {
        return [
          createVNode(_component_RouteLink, { to: "/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md" }, {
            default: withCtx(() => [
              createTextVNode("List 接口")
            ]),
            _: 1
          }),
          createTextVNode(" 中定义的遍历一样。")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 已知集合中存储了&quot;aaa&quot;、&quot;bbb&quot;、&quot;aaa&quot;、&quot;ccc&quot;、&quot;aaa&quot;、&quot;ddd&quot;
 *
 * 要求：把集合中的所有&quot;aaa&quot;干掉
*/</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayListDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;修改前的集合：&quot;</span> <span class="token operator">+</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 把集合中的所有&quot;aaa&quot;干掉</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                i<span class="token operator">--</span><span class="token punctuation">;</span>
                <span class="token doc-comment comment">/**
                 * 注意：
                 *      如果删除的是最后一个元素，则不会影响集合的长度
                 *      如果删除的不是最后一个元素，则需要重新计算下标的位置，重新开始
                 *      i--不能忘记，否则会出现删除不完全的情况
                 *      如果使用迭代器删除或者使用增强for循环删除，有可能会报错
                 *          java.util.ConcurrentModificationException
                 *          并发修改异常
                */</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 已知一个集合，有3个学生，遍历打印3个学生的信息
*/</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoList</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span> astu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        astu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        astu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;小张&quot;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        astu<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;rose&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> astu<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//for each 多态格式</span>
            <span class="token comment">// System.out.println(o); 这样直接打印没问题</span>
            <span class="token comment">// 换一种打印</span>
            <span class="token class-name">Student</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span> <span class="token comment">// 向下转型后才可以使用特有方法</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;...&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Student{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArrayList____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "ArrayList实现类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/ArrayList%E5%AE%9E%E7%8E%B0%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ArrayList 实现类","slug":"arraylist-实现类","link":"#arraylist-实现类","children":[{"level":3,"title":"ArrayList 类的特点(List 接口的特点)","slug":"arraylist-类的特点-list-接口的特点","link":"#arraylist-类的特点-list-接口的特点","children":[]},{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":3,"title":"案例","slug":"案例","link":"#案例","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md","excerpt":"<h2>ArrayList 实现类</h2>\\n<p>需要导包，在 java.util 下；ArrayList 是 List 接口的实现类；底层是数组数据结构。</p>\\n<h3>ArrayList 类的特点(List 接口的特点)</h3>\\n<ol>\\n<li>\\n的集合（即：存进去的顺序和取出来的顺序是一致的）</li>\\n<li>\\n</li>\\n<li>元素都</li>\\n</ol>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public ArrayList</td>\\n<td>new 对象</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  ArrayList____html as comp,
  data
};
