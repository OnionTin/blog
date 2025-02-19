<template><div><h2 id="预处理语句" tabindex="-1"><a class="header-anchor" href="#预处理语句"><span>预处理语句</span></a></h2>
<p>解决 SQL 注入问题</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">/*
 * 预处理语句的优点：
 * 1. 预编译，性能高
 * 2. 防止 SQL 注入
 * 3. PreparedStatement 是 Statement 的子类，所以方法基本都一样
 * 4. ?：占位符，可以动态传入参数
 * 5. 占位符的索引从 1 开始
 * 6. ps.set 后设置的值是什么类型，就跟什么类型就行
*/</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from user where username = ? and password = ?"</span><span class="token punctuation">;</span>
<span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> username<span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token comment">// 输入姓名和密码，验证用户是否存在</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token constant">JDBC</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoLoginIn</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输入姓名和密码，验证用户是否存在</span>
    <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入用户名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"请输入年龄"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Integer</span> age <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token function">extracted</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录成功"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"登录失败"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">extracted</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Properties</span> pt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pt<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"user"</span><span class="token punctuation">,</span> <span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    pt<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token string">"Sap@1q2w3e4r"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">"jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"</span><span class="token punctuation">;</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> pt<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*
    Statement sta = conn.createStatement();

    String sql = "select * from user where
    name = '" + name + "' and age = '" + age + "'";
    ResultSet rs = sta.executeQuery(sql);
    */</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">"select * from user where name = ? and age = ?"</span>
    <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    ps<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 增sql语句</span>
    <span class="token comment">/*
    String sql = "insert into user(name, age) values(?, ?)";
    PreparedStatement ps = conn.prepareStatement(sql);
    ps.setString(1, name);
    ps.setInt(2, age);
    int i = ps.executeUpdate();
    */</span>

    <span class="token comment">// 删sql语句</span>
    <span class="token comment">/*
    String sql = "delete from user where name = ? and age = ?";
    PreparedStatement ps = conn.prepareStatement(sql);
    ps.setString(1, name);
    ps.setInt(2, age);
    int i = ps.executeUpdate();
    */</span>

    <span class="token comment">// 改sql语句</span>
    <span class="token comment">/*
    String sql = "update user set name = ? where age = ?";
    PreparedStatement ps = conn.prepareStatement(sql);
    ps.setString(1, name);
    ps.setInt(2, age);
    int i = ps.executeUpdate();
    */</span>

    <span class="token keyword">boolean</span> hasNext <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rs<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> hasNext<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


