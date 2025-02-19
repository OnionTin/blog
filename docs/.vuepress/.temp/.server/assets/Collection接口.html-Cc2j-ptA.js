import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="collection-接口" tabindex="-1"><a class="header-anchor" href="#collection-接口"><span>Collection 接口</span></a></h2><p>单列集合；需要导包，在 java.util 下；Collection 接口，不是类，是单列集合的顶层</p><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>boolean add(Object e)</td><td>添加元素</td></tr><tr><td>boolean addAll(Collection c)</td><td>添加集合</td></tr><tr><td>boolean remove(Object o)</td><td>删除元素</td></tr><tr><td>boolean removeIf(Predicate filter)</td><td>按照条件删除元素</td></tr><tr><td>void clear()</td><td>清空集合</td></tr><tr><td>int size()</td><td>获取集合长度</td></tr><tr><td>boolean contains(Object o)</td><td>是否包含</td></tr><tr><td>boolean isEmpty</td><td>是否为空</td></tr><tr><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Object[] toArray()`);
      } else {
        return [
          createTextVNode("Object[] toArray()")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`集合转数组`);
      } else {
        return [
          createTextVNode("集合转数组")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td><code>Iterator&lt;E&gt; iterator()</code></td><td>获取迭代器对象</td></tr></tbody></table><h3 id="集合的遍历" tabindex="-1"><a class="header-anchor" href="#集合的遍历"><span>集合的遍历</span></a></h3><ol><li>转数组循环遍历</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Collection</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> obj <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> obj<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>迭代器遍历</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Collection</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Iterator</span> it <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Object</span> obj <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>增强 for 循环(for each 遍历)</li></ol><blockquote><p>增强 for 循环底层也是迭代器遍历，只是简化写法</p><p>增强 for 循环也可以用来遍历数组</p><p>格式：for(数据类型 变量名 : 数组名/集合名){...}</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Collection</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj <span class="token operator">:</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法的应用" tabindex="-1"><a class="header-anchor" href="#方法的应用"><span>方法的应用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Collection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoCollection</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 多态格式的，Collection是类，所以只能创建子对象</span>
        <span class="token class-name">Collection</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 结果为[]: 说明底层重写了toString方法</span>

        <span class="token comment">// boolean add(Object e)：集合中添加一个元素</span>
        c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Collection只能添加引用类型，这块不报错说明底层自动转成Integer类型了</span>
        c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, bbb, 111]</span>

        <span class="token comment">// boolean addAll(Collection c)：集合中添加一个集合</span>
        <span class="token class-name">Collection</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c1<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, bbb, 111]</span>

        <span class="token comment">// boolean remove(Object o)：删除某一元素</span>
        c1<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [bbb, 111]</span>

        <span class="token comment">// boolean removeIf(Predicate filter)：根据条件删除</span>
        <span class="token comment">// Object是泛型，当然可以换成String等</span>
        c<span class="token punctuation">.</span><span class="token function">removeIf</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">Object</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Object和上边对应</span>
                <span class="token comment">// return true; // 满足条件，要把该元素删除掉</span>
                <span class="token comment">// reutrn false; // 不满足，不能删掉元素</span>
                <span class="token keyword">return</span> t <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// c.removeIf((o) -&gt; o.equals(111)); // 与上边的重写方法一样效果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, bbb]</span>

        <span class="token comment">// boolean isEmpty()：是否为空</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

        <span class="token comment">// int Size()：获取长度</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

        <span class="token comment">// boolean contains(Object o)：是否包含</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [aaa, bbb]</span>
        c<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;ddd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token comment">// void clear()：清空集合</span>
        c<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// []</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

        <span class="token comment">// Object[] toArray()：转成数组进行遍历</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [bbb, 111]</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> objs <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> objs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>objs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// bbb 111</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// Iterator&lt;E&gt; iterator()：通过迭代器对象遍历</span>
        c1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Pigs</span><span class="token punctuation">(</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：[bbb, 111, com.wuziqi.gobang.controller.Pigs@23fc625e]</span>
        <span class="token comment">// 给Pigs加上toString()方法后</span>
        <span class="token comment">// 打印结果：[bbb, 111, Pigs{name=&#39;小明&#39;, age=18}]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * Iterator是接口
         * 有两个子方法
         * hasNext()：判断是否还有元素
         * next()：获取下一个元素
         * */</span>
        <span class="token class-name">Iterator</span> it <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 需要导包，也是多态格式</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 打印结果：bbb 111 Pigs{name=&#39;小明&#39;, age=18}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 增强for循环(for each遍历)</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj <span class="token operator">:</span> c1<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 打印结果：bbb 111 Pigs{name=&#39;小明&#39;, age=18}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 增强for循环遍历数组</span>
        <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj <span class="token operator">:</span> arr<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1,2,3,4,5,6,7,8,9</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Pigs</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token class-name">Pigs</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Pigs{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/单列集合Collection/Collection接口.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Collection___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Collection接口.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Collection%E6%8E%A5%E5%8F%A3.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Collection 接口","slug":"collection-接口","link":"#collection-接口","children":[{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"集合的遍历","slug":"集合的遍历","link":"#集合的遍历","children":[]},{"level":3,"title":"方法的应用","slug":"方法的应用","link":"#方法的应用","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/单列集合Collection/Collection接口.md","excerpt":"<h2>Collection 接口</h2>\\n<p>单列集合；需要导包，在 java.util 下；Collection 接口，不是类，是单列集合的顶层</p>\\n<h3>常见的成员方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>boolean add(Object e)</td>\\n<td>添加元素</td>\\n</tr>\\n<tr>\\n<td>boolean addAll(Collection c)</td>\\n<td>添加集合</td>\\n</tr>\\n<tr>\\n<td>boolean remove(Object o)</td>\\n<td>删除元素</td>\\n</tr>\\n<tr>\\n<td>boolean removeIf(Predicate filter)</td>\\n<td>按照条件删除元素</td>\\n</tr>\\n<tr>\\n<td>void clear()</td>\\n<td>清空集合</td>\\n</tr>\\n<tr>\\n<td>int size()</td>\\n<td>获取集合长度</td>\\n</tr>\\n<tr>\\n<td>boolean contains(Object o)</td>\\n<td>是否包含</td>\\n</tr>\\n<tr>\\n<td>boolean isEmpty</td>\\n<td>是否为空</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n<tr>\\n<td><code>Iterator&lt;E&gt; iterator()</code></td>\\n<td>获取迭代器对象</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  Collection___html as comp,
  data
};
