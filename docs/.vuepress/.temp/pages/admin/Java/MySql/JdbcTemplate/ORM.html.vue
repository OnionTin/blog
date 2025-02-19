<template><div><h2 id="orm" tabindex="-1"><a class="header-anchor" href="#orm"><span>ORM</span></a></h2>
<blockquote>
<p>JdbcTemplate 是 Spring 框架中针对 JDBC 的封装，是 JDBC 的工具类，简化代码的书写。</p>
<p>基于 ORM 思想的一个小框架。</p>
</blockquote>
<font color=red>ORM (Object Relational Mapping)思想：对象关系映射，将对象和数据库表进行映射，操作对象就可以操作数据库表</font>。<blockquote>
<ol>
<li>
<p>在实际开发中，往往是数据库中的一张表，会对应 Java 中的一个类；其中，类名和表名一般是一致的，表中的字段和类中的属性名也一般是一致的。</p>
</li>
<li>
<p>因为涉及到关系了，所以底层用的都是反射</p>
</li>
</ol>
</blockquote>
<p><img src="@source/admin/Java/MySql/images/ORM.jpg" alt="ORM"></p>
<h3 id="jdbctemplate-的基本使用步骤" tabindex="-1"><a class="header-anchor" href="#jdbctemplate-的基本使用步骤"><span>JdbcTemplate 的基本使用步骤</span></a></h3>
<ol>
<li>导入 jar 包(很多，可能由 5/6 个 jar 包组成，都放在 lib 下)</li>
<li>创建 JdbcTemplate 对象，依赖于数据源</li>
<li>将数据库连接池对象，封装到 JdbcTemplate 对象中</li>
<li>执行数据库 CRUD 操作</li>
</ol>
</div></template>


