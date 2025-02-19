<template><div><h2 id="sqlmapconfig" tabindex="-1"><a class="header-anchor" href="#sqlmapconfig"><span>SqlMapConfig</span></a></h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>typeAliases</td>
<td>配置别名，简化实体类文件的引用路径</td>
</tr>
<tr>
<td>properties</td>
<td>配置四大参数</td>
</tr>
<tr>
<td>environments</td>
<td>配置多个环境，想用哪个，default 的值就是哪个 environment 的 id 值</td>
</tr>
<tr>
<td>transactionManager</td>
<td>事务管理器</td>
</tr>
<tr>
<td>dataSource</td>
<td>数据源配置</td>
</tr>
<tr>
<td>mappers</td>
<td>配置映射文件</td>
</tr>
<tr>
<td>mapper</td>
<td>配置映射文件</td>
</tr>
<tr>
<td>package</td>
<td>配置映射文件包</td>
</tr>
<tr>
<td>cache</td>
<td>配置缓存</td>
</tr>
<tr>
<td>cache-ref</td>
<td>配置缓存</td>
</tr>
<tr>
<td>useCache</td>
<td>配置是否使用缓存</td>
</tr>
</tbody>
</table>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
    <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Config 3.0//EN"</span>
    <span class="token string">"http://mybatis.org/dtd/mybatis-3-config.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--动态配置四大参数--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc.properties<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--如果需要属性加密，可以在这里配置解密工具--></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--
      配置别名
      目的：简化实体类文件的引用路径
      type：指定别名指向的实体类
      alias：别名，在映射文件中用别名就可以替代实体类
      parameterType=“user”
      resultType=“person”
      typeAlias：配置文件的别名
      package：配置整个包下的所有实体类的别名
        比如User.java会用user来替代
  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
    &lt;typeAlias type="com.api.MyBatis.domain.User" alias="user">&lt;/typeAlias>
    &lt;typeAlias type="com.api.MyBatis.test.Person" alias="person">&lt;/typeAlias>
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAlias</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.test.Person<span class="token punctuation">"</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>person<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAlias</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.domain<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--
    environments：环境的详细配置；
    environments：可以配置多个环境，想用哪个，default的值就是哪个environment的id值。
  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!--
        transactionManager：事务管理器；
        type：参数，JDBC：表示使用JDBC的事务管理方式；
        Connection
          setAutoCommit(false)：开启事务；
          commit()：提交事务；
          rollback()：回滚事务。
      --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token comment">&lt;!--
        dataSource：数据源配置；
        type：有三个参数；
          POOLED：表示使用连接池，由MyBatis底层自己实现的；
          UNPOOLED：不使用连接池；
          JNDI：使用JNDI，一般不使用；
        property：配置四大参数
      --></span>
      <span class="token comment">&lt;!--
      &lt;dataSource type="POOLED">
        &lt;property name="driver" value="com.mysql.cj.jdbc.Driver"/>
        &lt;property
          name="url"
          value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"
        />
        &lt;property name="username" value="root"/>
        &lt;property name="password" value="Sap@1q2w3e4r"/>
      &lt;/dataSource>
      --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--使用${}引用properties文件中的属性--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${driver}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${url}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${username}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${password}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!--
    mappers：映射文件
    mapper：单独加载映射器；
      resource：映射文件的路径，文件夹之间用"/"隔开；
    package：批量加载映射器
      name：指定要扫描的包的名称
      recursive：是否递归扫描，默认为false，只扫描指定包下的映射器，不包括子包下的映射器，
      如果为true，则扫描指定包下的所有映射器，包括子包下的映射器；
      注意：dao中的java文件名和映射文件名必须一致，否则找不到映射文件
  --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
      如果使用package方式，且没有配置自动扫描，而是手动配置，则需要配置mapper接口的全类名
      如果使用package方式，且配置了自动扫描，则不需要配置mapper接口的全类名
      name：指定要扫描的包名
      需要保证接口文件和xml文件同名，且在同一个包下，
      所以需要在resources下创建com.api.MyBatis.dao文件下，将xml放在此文件夹下
      而使用mapper方式，则需要指定mapper接口的全类名(位置+文件名叫全类名)
    --></span>
    <span class="token comment">&lt;!--&lt;mapper resource="mappers/UserMapper.xml"/>--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.api.MyBatis.dao<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/admin/Java/MyBatis/images/Mybatis文件路径.jpg" alt="Mybatis文件路径"></p>
</div></template>


