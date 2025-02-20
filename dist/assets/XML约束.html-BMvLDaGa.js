import{_ as n,o as s,c as a,e as t}from"./app-C_RrakEG.js";const e={},p=t(`<h2 id="xml-约束" tabindex="-1"><a class="header-anchor" href="#xml-约束"><span>XML 约束</span></a></h2><blockquote><p>schema 约束：xsd 格式的约束文档 (推荐使用)</p><p>dtd 约束：dtd 格式的约束文档</p></blockquote><h4 id="根据-dtd-文档编写-xml" tabindex="-1"><a class="header-anchor" href="#根据-dtd-文档编写-xml"><span>根据 dtd 文档编写 xml</span></a></h4><blockquote><p>ELEMENT：元素；#PCDATA：标签属性</p><p>ATTLIST：属性；CDATA：元素属性；#FIXED：固定值；#REQUIRED：必须有值；#IMPLIED：可选值</p></blockquote><p>案例 1：</p><div class="language-dtd line-numbers-mode" data-ext="dtd" data-title="dtd"><pre class="language-dtd"><code>  &lt;!-- book.dtd --&gt;
  &lt;!ELEMENT 书架 (书+)&gt;
    &lt;!ELEMENT 书 (书名, 作者, 价格)&gt;
      &lt;!ELEMENT 书名 (#PCDATA)&gt;
      &lt;!ELEMENT 作者 (#PCDATA)&gt;
      &lt;!ELEMENT 价格 (#PCDATA)&gt;
  &lt;!ATTLIST 书
    出版社 CDATA &quot;新华书店&quot;
    属性1 CDATA #FIXED &quot;不能修改&quot;
    编号 ID #REQUIRED
  &gt;
  &lt;!ATTLIST 作者
    性别(男|女) #IMPLIED
    年龄(18|19|20) #IMPLIED
  &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- book.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">书架</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;book.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书架</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书</span> <span class="token attr-name">编号</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>001<span class="token punctuation">&quot;</span></span> <span class="token attr-name">出版社</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>新华出版社<span class="token punctuation">&quot;</span></span> <span class="token attr-name">属性1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>不能修改<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书名</span><span class="token punctuation">&gt;</span></span>Java 编程思想<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书名</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>作者</span> <span class="token attr-name">性别</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>男<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bruce Eckel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>作者</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>价格</span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>价格</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书</span> <span class="token attr-name">编号</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>002<span class="token punctuation">&quot;</span></span> <span class="token attr-name">出版社</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>新华出版社<span class="token punctuation">&quot;</span></span> <span class="token attr-name">属性1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>不能修改<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书名</span><span class="token punctuation">&gt;</span></span>Java 核心技术<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书名</span><span class="token punctuation">&gt;</span></span>
        &lt;作者 年龄=20&quot;&quot;&gt;Cay S. Horstmann<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>作者</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>价格</span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>价格</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书架</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例 2：</p><div class="language-dtd line-numbers-mode" data-ext="dtd" data-title="dtd"><pre class="language-dtd"><code>&lt;!-- student.dtd --&gt;
&lt;!ELEMENT students (student*)&gt;
&lt;!ELEMENT student (name, ages,sex)&gt;
&lt;!ELEMENT student name(#PCDATA)&gt;
&lt;!ELEMENT student age(#PCDATA)&gt;
&lt;!ELEMENT student sex(#PCDATA)&gt;
&lt;!ATTLIST student
    number ID #REQUIRED
  &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- student.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">students</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;student.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>students</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>001<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ages</span><span class="token punctuation">&gt;</span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ages</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">&gt;</span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>002<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>李四<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ages</span><span class="token punctuation">&gt;</span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ages</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">&gt;</span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="根据-xsd-文档编写-xml" tabindex="-1"><a class="header-anchor" href="#根据-xsd-文档编写-xml"><span>根据 xsd 文档编写 xml</span></a></h4><blockquote><p>schema 约束文档，自身也是一个 xml，其中，根标签的属性是引入的 xsd 的地址</p><p>xml 中 xmlns 的值：xsd 文档中 targetNamespace 的值，默认名称空间；</p><p>xml 中 xmlns:xsi 的值(xsi: 不固定，别名)：xsd 文档中 xsi:schemaLocation 的值 + &quot;-instance&quot;；</p><p>xml 中 xsi(xsi: 同上):schemaLocation 的值：xsd 文档中 targetNamespace 的值 + xsd 文件;</p></blockquote><p>案例 1：</p><div class="language-xsd line-numbers-mode" data-ext="xsd" data-title="xsd"><pre class="language-xsd"><code>&lt;!-- book.xsd --&gt;
&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema
  xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
  targetNamespace=&quot;xxx&quot;
  elementFormDefault=&quot;qualified&quot;
  &gt;
  &lt;xs:element name=&quot;书架&quot;&gt;
    &lt;!-- xs:complexType：复杂的类型 --&gt;
    &lt;xs:complexType&gt;
      &lt;!-- xs:sequence：要求其子元素必须按照顺序 --&gt;
      &lt;xs:sequence&gt;
        &lt;!-- maxOccurs=&quot;unbounded&quot; 子元素可以出现无限次 --&gt;
        &lt;xs:element name=&quot;书&quot; maxOccurs=&quot;unbounded&quot;&gt;
          &lt;xs:complexType&gt;
            &lt;xs:sequence&gt;
              &lt;!-- xs:element name=&quot;xxx&quot; type=&quot;yyy&quot; xxx：元素名称 yyy：元素类型 --&gt;
              &lt;xs:element name=&quot;书名&quot; type=&quot;xs:string&quot;/&gt;
              &lt;xs:element name=&quot;作者&quot; type=&quot;xs:string&quot;/&gt;
              &lt;xs:element name=&quot;价格&quot; type=&quot;xs:int&quot;/&gt;
            &lt;/xs:sequence&gt;
            &lt;xs:attribute name=&quot;编号&quot; type=&quot;xs:int&quot; use=&quot;required&quot;/&gt;
            &lt;xs:attribute name=&quot;出版社&quot; type=&quot;xs:string&quot; use=&quot;required&quot;/&gt;
            &lt;xs:attribute name=&quot;属性1&quot; type=&quot;xs:string&quot; use=&quot;required&quot;/&gt;
          &lt;/xs:complexType&gt;
        &lt;/xs:element&gt;
      &lt;/xs:sequence&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- book.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书架</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx book.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书名</span><span class="token punctuation">&gt;</span></span>Java 编程思想<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书名</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>作者</span><span class="token punctuation">&gt;</span></span>Bruce Eckel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>作者</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>价格</span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>价格</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>编号</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>编号</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>出版社</span><span class="token punctuation">&gt;</span></span>机械工业出版社<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>出版社</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>属性1</span><span class="token punctuation">&gt;</span></span>Java 编程思想<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>属性1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>书名</span><span class="token punctuation">&gt;</span></span>Effective Java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书名</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>作者</span><span class="token punctuation">&gt;</span></span>Joshua Bloch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>作者</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>价格</span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>价格</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>编号</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>编号</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>书架</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例 2：</p><div class="language-xsd line-numbers-mode" data-ext="xsd" data-title="xsd"><pre class="language-xsd"><code>&lt;!-- shiporder.xsd --&gt;

&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;xs:schema
  xmlns:xs=&quot;http://www.w3.org/2001/XMLSchema&quot;
  targetNamespace=&quot;http:www.baidu.com&quot;
  elementFormDefault=&quot;qualified&quot;
  &gt;
  &lt;xs:element name=&quot;shiporder&quot;&gt;
    &lt;xs:complexType&gt;
      &lt;xs:element name=&quot;orderpersonal&quot; type=&quot;xs:string&quot;/&gt;
      &lt;xs:element name=&quot;shipto&quot;&gt;
        &lt;xs:complexType&gt;
          &lt;xs:sequence&gt;
            &lt;xs:element name=&quot;name&quot; type=&quot;xs:string&quot;/&gt;
            &lt;xs:element name=&quot;address&quot; type=&quot;xs:string&quot;/&gt;
            &lt;xs:element name=&quot;city&quot; type=&quot;xs:string&quot;/&gt;
            &lt;xs:element name=&quot;country&quot; type=&quot;xs:string&quot;/&gt;
          &lt;/xs:sequence&gt;
        &lt;/xs:complexType&gt;
      &lt;/xs:element&gt;
      &lt;xs:element name=&quot;item&quot; maxOccurs=&quot;unbounded&quot;&gt;
        &lt;xs:complexType&gt;
          &lt;xs:sequence&gt;
            &lt;xs:element name=&quot;title&quot; type=&quot;xs:string&quot;/&gt;
            &lt;xs:element name=&quot;note&quot; type=&quot;xs:string&quot; minOccurs=&quot;0&quot;/&gt;
            &lt;xs:element name=&quot;quantity&quot; type=&quot;xs:positiveInteger&quot;/&gt;
            &lt;xs:element name=&quot;price&quot; type=&quot;xs:decimal&quot;/&gt;
          &lt;/xs:sequence&gt;
          &lt;xs:attribute name=&quot;id&quot; type=&quot;xs:string&quot; use=&quot;required&quot;/&gt;
        &lt;/xs:complexType&gt;
      &lt;/xs:element&gt;
    &lt;/xs:complexType&gt;
  &lt;/xs:element&gt;
&lt;/xs:schema&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- shiporder.xml --&gt;</span>
<span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shiporder</span>
  <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http:www.baidu.com<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http:www.baidu.com shiporder.xsd<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>orderpersonal</span><span class="token punctuation">&gt;</span></span>John Smith<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>orderpersonal</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>shipto</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Ola Nordmann<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>address</span><span class="token punctuation">&gt;</span></span>Langgt 23<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>address</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>city</span><span class="token punctuation">&gt;</span></span>4000 Stavanger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>city</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>country</span><span class="token punctuation">&gt;</span></span>Norway<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>country</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>shipto</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Basketball<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>note</span><span class="token punctuation">&gt;</span></span>Basketball is a physical sport<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>note</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>quantity</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>quantity</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>BK001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Gaming Console<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>quantity</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>quantity</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>price</span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>price</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>GC001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>shiporder</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[p];function o(c,u){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","XML约束.html.vue"]]),k=JSON.parse('{"path":"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E7%BA%A6%E6%9D%9F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"XML 约束","slug":"xml-约束","link":"#xml-约束","children":[]}],"git":{"updatedTime":1718958762000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java进阶/XML/XML约束.md","excerpt":"<h2>XML 约束</h2>\\n<blockquote>\\n<p>schema 约束：xsd 格式的约束文档 (推荐使用)</p>\\n<p>dtd 约束：dtd 格式的约束文档</p>\\n</blockquote>\\n<h4>根据 dtd 文档编写 xml</h4>\\n<blockquote>\\n<p>ELEMENT：元素；#PCDATA：标签属性</p>\\n<p>ATTLIST：属性；CDATA：元素属性；#FIXED：固定值；#REQUIRED：必须有值；#IMPLIED：可选值</p>\\n</blockquote>\\n<p>案例 1：</p>\\n<div class=\\"language-dtd\\" data-ext=\\"dtd\\" data-title=\\"dtd\\"><pre class=\\"language-dtd\\"><code>  &lt;!-- book.dtd --&gt;\\n  &lt;!ELEMENT 书架 (书+)&gt;\\n    &lt;!ELEMENT 书 (书名, 作者, 价格)&gt;\\n      &lt;!ELEMENT 书名 (#PCDATA)&gt;\\n      &lt;!ELEMENT 作者 (#PCDATA)&gt;\\n      &lt;!ELEMENT 价格 (#PCDATA)&gt;\\n  &lt;!ATTLIST 书\\n    出版社 CDATA \\"新华书店\\"\\n    属性1 CDATA #FIXED \\"不能修改\\"\\n    编号 ID #REQUIRED\\n  &gt;\\n  &lt;!ATTLIST 作者\\n    性别(男|女) #IMPLIED\\n    年龄(18|19|20) #IMPLIED\\n  &gt;\\n</code></pre></div>"}');export{d as comp,k as data};
