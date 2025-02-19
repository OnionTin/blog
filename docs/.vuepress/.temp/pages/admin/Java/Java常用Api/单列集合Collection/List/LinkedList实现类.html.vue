<template><div><h2 id="linkedlist-实现类" tabindex="-1"><a class="header-anchor" href="#linkedlist-实现类"><span>LinkedList 实现类</span></a></h2>
<p>需要导包，在 java.util 下；LinkedList 是 List 接口的实现类；底层是双向链表数据结构。</p>
<h3 id="linkedlist-类的特点-同-arraylist" tabindex="-1"><a class="header-anchor" href="#linkedlist-类的特点-同-arraylist"><span>LinkedList 类的特点(<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md">同 ArrayList</RouteLink>)</span></a></h3>
<ol>
<li>
<font color=red>有序</font>的集合（即：存进去的顺序和取出来的顺序是一致的）</li>
<li>
<font color=red>有索引</font></li>
<li>元素都<font color=red>允许重复</font></li>
</ol>
<h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public LinkedList</td>
<td>new 对象</td>
</tr>
</tbody>
</table>
<h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3>
<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md">同 ArrayList</RouteLink><table>
<thead>
<tr>
<th>LinkedList 特有的方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>public void addFirst(Object e)</td>
<td>在首位添加元素</td>
</tr>
<tr>
<td>public void addLast(Object e)</td>
<td>在末尾添加元素</td>
</tr>
<tr>
<td>public Object getFirst()</td>
<td>获取首位元素</td>
</tr>
<tr>
<td>public Object getLast()</td>
<td>获取末尾元素</td>
</tr>
<tr>
<td>public Object removeFirst()</td>
<td>删除首位元素，返回被删除的元素</td>
</tr>
<tr>
<td>public Object removeLast()</td>
<td>删除末尾元素，返回被删除的元素</td>
</tr>
</tbody>
</table>
<h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3>
<RouteLink to="/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md">同 ArrayList</RouteLink><h3 id="到底用-arraylist-还是-linkedlist" tabindex="-1"><a class="header-anchor" href="#到底用-arraylist-还是-linkedlist"><span>到底用 ArrayList 还是 LinkedList</span></a></h3>
<blockquote>
<p>需要判断对时间和空间的权衡来选择使用哪种集合类。</p>
<p>ArrayList：<RouteLink to="/admin/Java/Java常用Api/数据结构.md">数组数据结构</RouteLink>，<font color=red>查询快，增删慢</font></p>
<p>LinkedList：<RouteLink to="/admin/Java/Java常用Api/数据结构.md">链表数据结构</RouteLink>，<font color=red>查询慢，增删快</font></p>
</blockquote>
<ol>
<li>
<p>需要考虑存取速度和 LinkedList 需要更多的内存空间</p>
</li>
<li>
<p>如果需要频繁的插入和删除元素，建议使用 LinkedList</p>
</li>
<li>
<p>如果需要频繁的随机访问元素，建议使用 ArrayList</p>
</li>
</ol>
</div></template>


