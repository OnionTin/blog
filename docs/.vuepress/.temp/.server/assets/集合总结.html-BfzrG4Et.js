import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="集合总结" tabindex="-1"><a class="header-anchor" href="#集合总结"><span>集合总结</span></a></h2><h3 id="集合的特点" tabindex="-1"><a class="header-anchor" href="#集合的特点"><span>集合的特点</span></a></h3><p>单列集合：</p><table><thead><tr><th>接口名</th><th>类名</th><th>特性</th><th>查询</th><th>增删</th><th>底层</th></tr></thead><tbody><tr><td>List</td><td>-</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`有序，有索引，可重复`);
      } else {
        return [
          createTextVNode("有序，有索引，可重复")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>-</td><td>-</td><td>-</td></tr><tr><td>List</td><td>ArrayList</td><td>同上</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`快`);
      } else {
        return [
          createTextVNode("快")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>慢</td><td>数组</td></tr><tr><td>List</td><td>LinkedList</td><td>同上</td><td>慢</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`快`);
      } else {
        return [
          createTextVNode("快")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>链表</td></tr><tr><td>List</td><td>Vector</td><td>同上</td><td>慢</td><td>慢</td><td>数组</td></tr><tr><td>Set</td><td>-</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`无序，无索引，不可重复`);
      } else {
        return [
          createTextVNode("无序，无索引，不可重复")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Set</td><td>HashSet</td><td>同上，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`但是注意去重和 hashCode`);
      } else {
        return [
          createTextVNode("但是注意去重和 hashCode")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>快</td><td>慢</td><td>哈希表</td></tr><tr><td>Set</td><td>LinkedHashSet</td><td>有序</td><td>快</td><td>慢</td><td>链表和哈希表</td></tr><tr><td>Set</td><td>TreeSet</td><td>同上，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`但是可排序`);
      } else {
        return [
          createTextVNode("但是可排序")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>慢</td><td>快</td><td>红黑树</td></tr></tbody></table><p>双列集合：</p><table><thead><tr><th>接口名</th><th>类名</th><th>特性</th><th>查询</th><th>增删</th><th>底层</th><th>键值</th></tr></thead><tbody><tr><td>Map</td><td>-</td><td>无序，无索引，键不可重复，值可重复</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>Map</td><td>HashMap</td><td>同上</td><td>快</td><td>慢</td><td>哈希表</td><td>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`键和值都可为 null`);
      } else {
        return [
          createTextVNode("键和值都可为 null")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td>Map</td><td>TreeMap</td><td>同上，`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`但是可排序`);
      } else {
        return [
          createTextVNode("但是可排序")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td>慢</td><td>快</td><td>红黑树</td><td>不可为 null</td></tr><tr><td>Map</td><td>LinkedHashMap</td><td>同上，但是有序</td><td>快</td><td>慢</td><td>链表和哈希表</td><td>不可为 null</td></tr><tr><td>Map</td><td>HashTable</td><td>同上</td><td>慢</td><td>慢</td><td>哈希表</td><td>不可为 null</td></tr><tr><td>Map</td><td>Properties</td><td>同上</td><td>快</td><td>慢</td><td>数组和链表</td><td>可为 null，键值都是 String 类型</td></tr></tbody></table><h3 id="集合-tree-结构排序" tabindex="-1"><a class="header-anchor" href="#集合-tree-结构排序"><span>集合 Tree 结构排序</span></a></h3><ul><li><p>自然排序：元素需要实现 Comparable 接口，重写 compareTo 方法</p></li><li><p>比较器：元素需要实现 Comparator 接口，重写 compare 方法</p></li></ul><h3 id="集合-list-结构排序" tabindex="-1"><a class="header-anchor" href="#集合-list-结构排序"><span>集合 List 结构排序</span></a></h3><p>利用 Collections 工具类的 sort 方法进行排序</p><h3 id="集合的遍历" tabindex="-1"><a class="header-anchor" href="#集合的遍历"><span>集合的遍历</span></a></h3><p>单列集合：</p><ol><li><p>转数组循环遍历</p></li><li><p>迭代器遍历</p></li><li><p>增强 for 循环遍历(for each)</p></li><li><p>普通的 for 循环遍历(利用索引)</p></li></ol><p>双列集合：</p><ol><li><p>keySet()键找值遍历</p></li><li><p>entrySet()键值对遍历</p></li></ol><h3 id="集合的常用方法" tabindex="-1"><a class="header-anchor" href="#集合的常用方法"><span>集合的常用方法</span></a></h3><p>单列集合：</p><ul><li>add()：添加元素</li><li>remove()：删除元素</li><li>size()：获取元素个数</li><li>isEmpty()：判断是否为空</li><li>contains()：判断是否包含某个元素</li><li>clear()：清空集合</li><li>addAll()：添加多个元素</li><li>removeAll()：删除多个元素</li><li>retainAll()：保留多个元素</li><li>containsAll()：判断是否包含多个元素</li><li>equals()：判断是否相等</li><li>hashCode()：获取哈希码</li><li>toArray()：转换为数组</li><li>subList()：获取子集合</li><li>iterator()：获取迭代器</li><li>listIterator()：获取列表迭代器</li><li>spliterator()：获取集合的拆分器</li><li>stream()：获取流</li><li>parallelStream()：获取并行流</li><li>forEach()：遍历集合</li><li>forEachOrdered()：有序遍历集合</li><li>toString()：转换为字符串</li><li>removeIf()：删除满足条件的元素</li><li>replaceAll()：替换所有元素</li><li>replaceAll()：替换所有元素</li><li>sort()：排序</li><li>parallel()：并行处理</li><li>stream()：流式处理</li><li>parallelStream()：并行流式处理</li></ul><p>双列集合：</p><ul><li>put()：添加元素</li><li>remove()：删除元素</li><li>size()：获取元素个数</li><li>isEmpty()：判断是否为空</li><li>containsKey()：判断是否包含某个键</li><li>containsValue()：判断是否包含某个值</li><li>clear()：清空集合</li><li>putAll()：添加多个元素</li><li>removeAll()：删除多个元素</li><li>retainAll()：保留多个元素</li><li>containsAll()：判断是否包含多个键或值</li><li>equals()：判断是否相等</li><li>hashCode()：获取哈希码</li><li>toArray()：转换为数组</li><li>keySet()：获取所有键的集合</li><li>values()：获取所有值的集合</li><li>entrySet()：获取所有键值对的集合</li><li>iterator()：获取迭代器</li><li>listIterator()：获取列表迭代器</li><li>spliterator()：获取集合的拆分器</li><li>stream()：获取流</li><li>parallelStream()：获取并行流</li><li>forEach()：遍历集合</li><li>forEachOrdered()：有序遍历集合</li><li>toString()：转换为字符串</li><li>removeIf()：删除满足条件的元素</li><li>replaceAll()：替换所有元素</li><li>replaceAll()：替换所有元素</li><li>sort()：排序</li><li>parallel()：并行处理</li><li>stream()：流式处理</li><li>parallelStream()：并行流式处理</li></ul><h3 id="集合的使用" tabindex="-1"><a class="header-anchor" href="#集合的使用"><span>集合的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token class-name">Map</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoClassStudent</span> <span class="token punctuation">{</span>
     <span class="token doc-comment comment">/**
      * 定义一个学生类，
      * 属性：姓名（String name）、班级班号（String no）、成绩（double score）
      * 将n个学生对象存入List集合，并统计每个班级的总分和平均分
      * 思想：采用面向对象的思想
      * 不推荐使用Map&lt;String,List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Student</span><span class="token punctuation">&gt;</span></span>&gt;操作不方便
      * 推荐使用Map<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String,ClassRoom</span><span class="token punctuation">&gt;</span></span>
      */</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ClassRoom</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ClassRoom</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Stud</span><span class="token punctuation">&gt;</span></span> students1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Stud</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        students1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token string">&quot;小张&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        students1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        students1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token string">&quot;小王&quot;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        students1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token string">&quot;小王&quot;</span><span class="token punctuation">,</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Stud</span><span class="token punctuation">&gt;</span></span> students2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Stud</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        students2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token string">&quot;小亮&quot;</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        students2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token string">&quot;小萌&quot;</span><span class="token punctuation">,</span><span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;1班&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ClassRoom</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span> students1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;2班&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ClassRoom</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span> students2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 结果：</span>
        <span class="token comment">// {1班=ClassRoom{total=199.0, pjNum=49.75,</span>
        <span class="token comment">// students=[Stud{name=&#39;小张&#39;, score=100.0}, Stud{name=&#39;小李&#39;, score=33.0},</span>
        <span class="token comment">// Stud{name=&#39;小王&#39;, score=33.0}, Stud{name=&#39;小王&#39;, score=33.0}]},</span>
        <span class="token comment">// 2班=ClassRoom{total=88.0, pjNum=44.0,</span>
        <span class="token comment">// students=[Stud{name=&#39;小亮&#39;, score=50.0},Stud{name=&#39;小萌&#39;, score=38.0}]}}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">ClassRoom</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ClassRoom</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> total<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> pjNum<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span> students<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setTotal</span><span class="token punctuation">(</span><span class="token class-name">List</span> students<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> total<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span>  <span class="token keyword">void</span> <span class="token function">setPjNum</span><span class="token punctuation">(</span><span class="token class-name">List</span> students<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pjNum <span class="token operator">=</span> pjNum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ClassRoom</span><span class="token punctuation">(</span><span class="token class-name">Double</span> total<span class="token punctuation">,</span> <span class="token class-name">Double</span> pjNum<span class="token punctuation">,</span> <span class="token class-name">List</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>students <span class="token operator">=</span> students<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> total<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pjNum <span class="token operator">=</span> pjNum<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> students<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Stud</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Stud</span><span class="token punctuation">)</span>o<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">+=</span> s<span class="token punctuation">.</span>score<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pjNum <span class="token operator">=</span> <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span> students<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> total<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTotal</span><span class="token punctuation">(</span><span class="token class-name">Double</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>total <span class="token operator">=</span> total<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getPjNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pjNum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPjNum</span><span class="token punctuation">(</span><span class="token class-name">Double</span> pjNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pjNum <span class="token operator">=</span> pjNum<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span> <span class="token function">getStudents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> students<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setStudents</span><span class="token punctuation">(</span><span class="token class-name">List</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>students <span class="token operator">=</span> students<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ClassRoom{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;total=&quot;</span> <span class="token operator">+</span> total <span class="token operator">+</span>
                <span class="token string">&quot;, pjNum=&quot;</span> <span class="token operator">+</span> pjNum <span class="token operator">+</span>
                <span class="token string">&quot;, students=&quot;</span> <span class="token operator">+</span> students <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">ClassRoom</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPjNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">getPjNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Stud</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">double</span> score<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Stud</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">double</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">getScore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScore</span><span class="token punctuation">(</span><span class="token keyword">double</span> score<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Stud{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, score=&quot;</span> <span class="token operator">+</span> score <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/集合总结.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "集合总结.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E9%9B%86%E5%90%88%E6%80%BB%E7%BB%93.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"集合总结","slug":"集合总结","link":"#集合总结","children":[{"level":3,"title":"集合的特点","slug":"集合的特点","link":"#集合的特点","children":[]},{"level":3,"title":"集合 Tree 结构排序","slug":"集合-tree-结构排序","link":"#集合-tree-结构排序","children":[]},{"level":3,"title":"集合 List 结构排序","slug":"集合-list-结构排序","link":"#集合-list-结构排序","children":[]},{"level":3,"title":"集合的遍历","slug":"集合的遍历","link":"#集合的遍历","children":[]},{"level":3,"title":"集合的常用方法","slug":"集合的常用方法","link":"#集合的常用方法","children":[]},{"level":3,"title":"集合的使用","slug":"集合的使用","link":"#集合的使用","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/Java常用Api/集合总结.md","excerpt":"<h2>集合总结</h2>\\n<h3>集合的特点</h3>\\n<p>单列集合：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>接口名</th>\\n<th>类名</th>\\n<th>特性</th>\\n<th>查询</th>\\n<th>增删</th>\\n<th>底层</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>List</td>\\n<td>-</td>\\n<td></td>\\n<td>-</td>\\n<td>-</td>\\n<td>-</td>\\n</tr>\\n<tr>\\n<td>List</td>\\n<td>ArrayList</td>\\n<td>同上</td>\\n<td></td>\\n<td>慢</td>\\n<td>数组</td>\\n</tr>\\n<tr>\\n<td>List</td>\\n<td>LinkedList</td>\\n<td>同上</td>\\n<td>慢</td>\\n<td></td>\\n<td>链表</td>\\n</tr>\\n<tr>\\n<td>List</td>\\n<td>Vector</td>\\n<td>同上</td>\\n<td>慢</td>\\n<td>慢</td>\\n<td>数组</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>-</td>\\n<td></td>\\n<td>-</td>\\n<td>-</td>\\n<td>-</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>HashSet</td>\\n<td>同上，</td>\\n<td>快</td>\\n<td>慢</td>\\n<td>哈希表</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>LinkedHashSet</td>\\n<td>有序</td>\\n<td>快</td>\\n<td>慢</td>\\n<td>链表和哈希表</td>\\n</tr>\\n<tr>\\n<td>Set</td>\\n<td>TreeSet</td>\\n<td>同上，</td>\\n<td>慢</td>\\n<td>快</td>\\n<td>红黑树</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  _____html as comp,
  data
};
