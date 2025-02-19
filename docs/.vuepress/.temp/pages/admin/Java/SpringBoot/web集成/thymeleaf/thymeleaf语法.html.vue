<template><div><h2 id="thymeleaf-语法" tabindex="-1"><a class="header-anchor" href="#thymeleaf-语法"><span>thymeleaf 语法</span></a></h2>
<blockquote>
<p>thymeleaf 和 vue 一样，都是模板引擎，用于在 html 中插入数据；只是 thymeleaf 的开头是 th:，而 vue 是 v-</p>
</blockquote>
<h3 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式"><span>表达式</span></a></h3>
<table>
<thead>
<tr>
<th>语法</th>
<th>说明</th>
<th>语法</th>
<th>说明</th>
<th>语法</th>
<th>说明</th>
<th>语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>${...}</td>
<td>变量表达式</td>
<td>[[...]]</td>
<td>文本</td>
<td>th:if</td>
<td>判断</td>
<td>th:href</td>
<td>设置 href 属性</td>
</tr>
<tr>
<td>*{...}</td>
<td>选择表达式</td>
<td>[(...)]</td>
<td>属性</td>
<td>th:unless</td>
<td>判断</td>
<td>th:src</td>
<td>设置 src 属性</td>
</tr>
<tr>
<td>#{...}</td>
<td>消息表达式</td>
<td>[()]</td>
<td>消息</td>
<td>th:switch</td>
<td>判断</td>
<td>th:attr</td>
<td>设置任意属性</td>
</tr>
<tr>
<td>@{...}</td>
<td>URL 表达式</td>
<td>[()]</td>
<td>URL</td>
<td>th:case</td>
<td>判断</td>
<td>th:class</td>
<td>设置 class 属性</td>
</tr>
<tr>
<td>~{...}</td>
<td>片段表达式</td>
<td>[()]</td>
<td>片段</td>
<td>th:each</td>
<td>遍历</td>
<td>th:style</td>
<td>设置 style 属性</td>
</tr>
<tr>
<td>th:message</td>
<td>设置文本内容</td>
<td>th:messages</td>
<td>设置文本内容</td>
<td>th:text</td>
<td>设置文本内容</td>
<td>th:utext</td>
<td>同 th:tex，唯一区别是会转义 html 标签</td>
</tr>
</tbody>
</table>
<h4 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例：</span></a></h4>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>utext</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;h1>${user.name}&lt;/h1><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:${users}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:${users}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>[[${user}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.age > 18}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{${user.avatar}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:${users}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>[[${user.name}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 条件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.age > 18}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>unless</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.age > 18}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>未成年<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>switch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.sex}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>case</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>case</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">th:</span>case</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>*<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>未知<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 循环 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:${users}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>[[${user.name}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 属性设置 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/list}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>用户列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name"><span class="token namespace">th:</span>src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{/user/avatar}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title=${user.name}, data-id=${user.id}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name"><span class="token namespace">th:</span>attr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
    title=${user.name},
    data-id=${user.id},
    class=${user.sex == 1 ? 'man' : 'woman'}
  <span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.sex == 1 ? 'man' : 'woman'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>color: ' + (${user.sex == 1 ? 'blue' : 'red'})<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 消息表达式属性赋值 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#{user.name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#{user.name(${user.name})}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表达式对象" tabindex="-1"><a class="header-anchor" href="#表达式对象"><span>表达式对象</span></a></h3>
<table>
<thead>
<tr>
<th>语法</th>
<th>说明</th>
<th>语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>#ctx</td>
<td>web context 对象</td>
<td>#session</td>
<td>HttpSession 对象</td>
</tr>
<tr>
<td>#vars</td>
<td>变量对象</td>
<td>#servletContext</td>
<td>ServletContext 对象</td>
</tr>
<tr>
<td>#locale</td>
<td>locale 对象</td>
<td>#execInfo</td>
<td>表达式解析器相关信息</td>
</tr>
<tr>
<td>#request</td>
<td>HttpServletRequest 对象</td>
<td>#config</td>
<td>配置对象</td>
</tr>
<tr>
<td>#response</td>
<td>HttpServletResponse 对象</td>
<td>#objects</td>
<td>全部对象</td>
</tr>
</tbody>
</table>
<h4 id="举例-1" tabindex="-1"><a class="header-anchor" href="#举例-1"><span>举例：</span></a></h4>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#ctx.request.contextPath}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#vars.user.name}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#locale.language}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#request.getAttribute('user')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#response.getHeader('Content-Type')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#session.getAttribute('user')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#servletContext.getAttribute('user')}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#execInfo.templateName}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${#config.maxUploadSize}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表达式运算符" tabindex="-1"><a class="header-anchor" href="#表达式运算符"><span>表达式运算符</span></a></h3>
<table>
<thead>
<tr>
<th>语法</th>
<th>说明</th>
<th>语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>+</td>
<td>加法运算符</td>
<td>!=</td>
<td>不等于运算符</td>
</tr>
<tr>
<td>-</td>
<td>减法运算符</td>
<td>&lt;</td>
<td>小于运算符</td>
</tr>
<tr>
<td>*</td>
<td>乘法运算符</td>
<td>&gt;</td>
<td>大于运算符</td>
</tr>
<tr>
<td>/</td>
<td>除法运算符</td>
<td>&lt;=</td>
<td>小于等于运算符</td>
</tr>
<tr>
<td>%</td>
<td>取模运算符</td>
<td>&gt;=</td>
<td>大于等于运算符</td>
</tr>
<tr>
<td>==</td>
<td>等于运算符</td>
<td>!</td>
<td>逻辑非运算符</td>
</tr>
</tbody>
</table>
<h4 id="举例-2" tabindex="-1"><a class="header-anchor" href="#举例-2"><span>举例：</span></a></h4>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.age % 2}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${user.age != 18}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${!user.sex}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="片段表达式" tabindex="-1"><a class="header-anchor" href="#片段表达式"><span>片段表达式</span></a></h3>
<table>
<thead>
<tr>
<th>语法</th>
<th>说明</th>
<th>语法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>th:insert</td>
<td>插入片段</td>
<td>th:fragment</td>
<td>定义片段</td>
</tr>
<tr>
<td>th:replace</td>
<td>替换片段</td>
<td>th:remove</td>
<td>移除片段</td>
</tr>
<tr>
<td>th:include</td>
<td>包含片段</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h4 id="举例-3" tabindex="-1"><a class="header-anchor" href="#举例-3"><span>举例：</span></a></h4>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 定义片段 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>fragment</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user:${users}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>[[${user.name}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 插入片段 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>insert</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{userList::userList}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 替换片段 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>replace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{userList::userList}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 包含片段 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>~{userList::userList}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 移除片段 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>移除所有<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>移除标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>移除内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all-but-first<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>移除除第一个外的所有<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>all-but-last<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>移除除最后一个外的所有<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>remove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>不移除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="真实案例" tabindex="-1"><a class="header-anchor" href="#真实案例"><span>真实案例</span></a></h3>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>th</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.thymeleaf.org<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--/*@thymesVar id="msg" type=""*/--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>utext</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${msg}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!--/*@thymesVar id="url" type=""*/--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name"><span class="token namespace">th:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@{${url}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!--/*@thymesVar id="lists" type=""*/--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list:${lists}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">th:</span>text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${list}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">th:</span>each</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list:${lists}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>[[${list}]]<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Controller</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>ui<span class="token punctuation">.</span></span><span class="token class-name">Model</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token comment">// 在templates目录下的页面只能通过controller来跳转</span>
<span class="token comment">// 需要thymeleaf模板引擎的支持</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexController</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/a"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token class-name">Model</span> model<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"java"</span><span class="token punctuation">,</span><span class="token string">"python"</span><span class="token punctuation">,</span><span class="token string">"c++"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"msg"</span><span class="token punctuation">,</span><span class="token string">"&lt;h1>Hello Thymeleaf&lt;/h1>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">,</span><span class="token string">"https://www.baidu.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    model<span class="token punctuation">.</span><span class="token function">addAttribute</span><span class="token punctuation">(</span><span class="token string">"lists"</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">"index"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


