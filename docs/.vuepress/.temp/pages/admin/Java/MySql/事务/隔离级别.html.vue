<template><div><h2 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别"><span>隔离级别</span></a></h2>
<h3 id="事务的四大特性" tabindex="-1"><a class="header-anchor" href="#事务的四大特性"><span>事务的四大特性</span></a></h3>
<p>原子性(最小的单位，不能再往下分)、持久性、一致性(操作前后是一致的)、隔离性(事务间没有关系，互不影响)</p>
<p>当多个事务，<font color=red>并发</font>操作同一张表时，会打破隔离性，以此产生新的问题(脏读、不可重复读、幻读，幻读也是虚读)</p>
<ol>
<li>
<p>脏读：事务 A 读到了事务 B 未提交的数据</p>
</li>
<li>
<p>不可重复读：事务 A 读到了事务 B 提交后 修改(update)的 数据</p>
</li>
<li>
<p>幻读：事务 A 读到了事务 B 提交后 新增(insert)的或减少的 数据</p>
</li>
<li>
<p>丢失更新：事务 A 更新了事务 B 未提交的数据</p>
</li>
</ol>
<h3 id="事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的隔离级别"><span>事务的隔离级别</span></a></h3>
<p>串行化：事务 A 执行时，事务 B 必须等待事务 A 执行完毕后才能执行；这就比较卡。</p>
<table>
<thead>
<tr>
<th>隔离级别</th>
<th>是否会脏读</th>
<th>不可重复读</th>
<th>幻读</th>
<th>丢失更新</th>
<th>默认级别</th>
</tr>
</thead>
<tbody>
<tr>
<td>读未提交(read uncommitted)</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>---</td>
</tr>
<tr>
<td>读已提交(read committed)</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>是</td>
<td>Oracle</td>
</tr>
<tr>
<td>可重复读(repeatable read)</td>
<td>否</td>
<td>否</td>
<td>是</td>
<td>是</td>
<td>MySQL</td>
</tr>
<tr>
<td>串行化(serializable)</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>否</td>
<td>---</td>
</tr>
</tbody>
</table>
<h3 id="设置隔离级别" tabindex="-1"><a class="header-anchor" href="#设置隔离级别"><span>设置隔离级别</span></a></h3>
<table>
<thead>
<tr>
<th>隔离级别相关命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>select @@tx_isolation</td>
<td>查看当前隔离级别</td>
</tr>
<tr>
<td>set global transaction isolation level 隔离级别</td>
<td>设置全局的隔离级别</td>
</tr>
<tr>
<td>set session transaction isolation level 隔离级别</td>
<td>设置当前会话的隔离级别</td>
</tr>
</tbody>
</table>
</div></template>


