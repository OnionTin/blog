<template><div><h2 id="io-流概述" tabindex="-1"><a class="header-anchor" href="#io-流概述"><span>IO 流概述</span></a></h2>
<p>所有相关的抽象类和实现类，都需要导包，且都在 java.io 包下。</p>
<p>什么是 IO 流？</p>
<p>I：Input，<font color=red>读、输入</font>，将数据从本地磁盘中<code v-pre>读</code>出来，<code v-pre>输入</code>到内存中(大脑里)</p>
<p>O：Output，<font color=red>写、输出</font>，将内存中的数据<code v-pre>写</code>下来，<code v-pre>输出</code>到本地磁盘中(写纸上)</p>
<h3 id="io-流的体系结构" tabindex="-1"><a class="header-anchor" href="#io-流的体系结构"><span>IO 流的体系结构</span></a></h3>
<p><img src="@source/admin/images/IO.svg" alt="IO流"></p>
<h3 id="io-流的分类" tabindex="-1"><a class="header-anchor" href="#io-流的分类"><span>IO 流的分类</span></a></h3>
<ul>
<li>
<p>按照流向分</p>
<ul>
<li>输入流</li>
<li>输出流</li>
</ul>
</li>
<li>
<p>按照类型分</p>
<ul>
<li>字节流</li>
<li>字符流</li>
</ul>
</li>
<li>
<p>按习惯分类</p>
<ul>
<li>字节输入流</li>
<li>字节输出流</li>
<li>字符输入流</li>
<li>字符输出流</li>
</ul>
</li>
</ul>
<h3 id="流的选择" tabindex="-1"><a class="header-anchor" href="#流的选择"><span>流的选择</span></a></h3>
<ul>
<li>字符流操作文本</li>
<li>字节流是万能流</li>
</ul>
<h3 id="流的转换" tabindex="-1"><a class="header-anchor" href="#流的转换"><span>流的转换</span></a></h3>
<p>转换流，可以将字节流转换成字符流。</p>
<h3 id="流的打印" tabindex="-1"><a class="header-anchor" href="#流的打印"><span>流的打印</span></a></h3>
<p>打印流，只能是输出流；既有字节打印流，又有字符打印流。</p>
</div></template>


