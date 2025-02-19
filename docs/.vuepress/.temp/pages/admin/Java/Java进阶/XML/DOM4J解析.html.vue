<template><div><h2 id="dom4j-解析" tabindex="-1"><a class="header-anchor" href="#dom4j-解析"><span>DOM4J 解析</span></a></h2>
<p>需要先导入相关的 jar 包</p>
<h3 id="dom4j-解析的步骤" tabindex="-1"><a class="header-anchor" href="#dom4j-解析的步骤"><span>DOM4J 解析的步骤：</span></a></h3>
<ol>
<li>创建一个 SAXReader 对象</li>
<li>调用 read 方法读取 XML 文件，并返回 Document 对象</li>
<li>获取根元素</li>
<li>获取子元素</li>
<li>获取属性</li>
<li>获取文本内容</li>
<li>遍历</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token comment">&lt;!--学生信息配置文件--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>students</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9527<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>student</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9528<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>李四<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>age</span><span class="token punctuation">></span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>age</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sex</span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sex</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>student</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>students</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关的常用-api" tabindex="-1"><a class="header-anchor" href="#相关的常用-api"><span>相关的常用 api</span></a></h3>
<p>SAXReader：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Document read(InputStream is)</td>
<td>将配置文件加载进内存，转成 dom 树，获取 document 对象</td>
</tr>
</tbody>
</table>
<p>Document：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>Element getRootElement()</td>
<td>获取根元素对象</td>
</tr>
</tbody>
</table>
<p>xpath：(xpath：//标签)</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>List&lt;Node&gt;selectNodes(String xpath)</td>
<td>根据 xpath 表达式获取多个节点对象</td>
</tr>
<tr>
<td>Node selectSingleNode(String xpath)</td>
<td>根据 xpath 表达式获取单个节点对象</td>
</tr>
</tbody>
</table>
<p>Element：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>List&lt;Element&gt; elements(String name)</td>
<td>获取指定名称的子节点对象集合</td>
</tr>
<tr>
<td>Element element(String name)</td>
<td>获取指定名称的第一个子节点对象</td>
</tr>
<tr>
<td>String getText()</td>
<td>获取当前节点的文本内容</td>
</tr>
<tr>
<td>String getName()</td>
<td>获取当前节点的名称</td>
</tr>
<tr>
<td>String attributeValue(String name)</td>
<td>获取指定名称的属性值</td>
</tr>
<tr>
<td>String elementText(String name)</td>
<td>获取指定名称的子节点文本内容</td>
</tr>
</tbody>
</table>
<p>node：</p>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>String getName()</td>
<td>获取节点对象名字</td>
</tr>
<tr>
<td>String getText()</td>
<td>获取节点对象标签文本</td>
</tr>
</tbody>
</table>
<h3 id="dom4j-解析-标签选择器方式" tabindex="-1"><a class="header-anchor" href="#dom4j-解析-标签选择器方式"><span>DOM4J 解析-标签选择器方式</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token constant">XML</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dom4j<span class="token punctuation">.</span></span><span class="token class-name">Document</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dom4j<span class="token punctuation">.</span></span><span class="token class-name">Element</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dom4j<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">SAXReader</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token comment">//xml解析</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlDemo01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建解析器对象</span>
        <span class="token class-name">SAXReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SAXReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 加载配置文件：配置文件在 classpath 类路径下</span>
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">XmlDemo01</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"/student.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inputStream <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 加载配置文件，获取Document对象</span>
            <span class="token class-name">Document</span> document <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 关闭输入流</span>
            inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取到根节点对象</span>
            <span class="token class-name">Element</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getRootElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取跟标签下的所有的子标签对象</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Element</span><span class="token punctuation">></span></span> elements <span class="token operator">=</span> rootElement<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> element <span class="token operator">:</span> elements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Element</span><span class="token punctuation">></span></span> eles <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">elements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取id属性的值</span>
                <span class="token class-name">String</span> id <span class="token operator">=</span> element<span class="token punctuation">.</span><span class="token function">attributeValue</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"id:"</span><span class="token operator">+</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取标签文本值</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Element</span> ele<span class="token operator">:</span>eles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ele<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">":"</span><span class="token operator">+</span>ele<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token comment">// 结果：</span>
                    <span class="token comment">// id:9527</span>
                    <span class="token comment">// name:张三</span>
                    <span class="token comment">// age:20</span>
                    <span class="token comment">// sex:男</span>
                    <span class="token comment">// id:9528</span>
                    <span class="token comment">// name:李四</span>
                    <span class="token comment">// age:20</span>
                    <span class="token comment">// sex:女</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无法找到student.xml文件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dom4j-解析-xpath-方式-更便捷" tabindex="-1"><a class="header-anchor" href="#dom4j-解析-xpath-方式-更便捷"><span>DOM4J 解析-xpath 方式(更便捷)</span></a></h3>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token constant">XML</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dom4j<span class="token punctuation">.</span></span><span class="token class-name">Document</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dom4j<span class="token punctuation">.</span></span><span class="token class-name">Node</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>dom4j<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">SAXReader</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlDemo02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建解析器对象</span>
        <span class="token class-name">SAXReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SAXReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 加载配置文件：配置文件在 classpath 类路径下</span>
        <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">XmlDemo01</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">"/student.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inputStream <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 加载配置文件，获取Document对象</span>
            <span class="token class-name">Document</span> document <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 关闭输入流</span>
            inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 使用xpath解析（//BBB：得到所有的BBB节点）</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> nodes_student <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">selectNodes</span><span class="token punctuation">(</span><span class="token string">"//student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 遍历所有的student节点</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> node <span class="token operator">:</span> nodes_student<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> name <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 结果：</span>
                <span class="token comment">// student</span>
                <span class="token comment">// student</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Node</span><span class="token punctuation">></span></span> nodes_name <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">selectNodes</span><span class="token punctuation">(</span><span class="token string">"//name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 遍历所有的name节点</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> node <span class="token operator">:</span> nodes_name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> name <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> value <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 结果：</span>
                <span class="token comment">// name:张三</span>
                <span class="token comment">// name:李四</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 获取单个节点</span>
            <span class="token class-name">Node</span> age_node_2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">selectSingleNode</span><span class="token punctuation">(</span><span class="token string">"(//age)[2]"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age_node_2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> age_node_2<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 结果：</span>
            <span class="token comment">// age：20</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"无法找到student.xml文件"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


