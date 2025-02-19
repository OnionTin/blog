<template><div><h2 id="io-流的选择" tabindex="-1"><a class="header-anchor" href="#io-流的选择"><span>IO 流的选择</span></a></h2>
<blockquote>
<p>一般的 txt、java 等文件，内容能看得懂的可以使用字符流；如果看不懂，必须使用字节流；
字节流可以操作大多数文件，如 mp4、mp3、img 等；
docx 和 excel 文件不能用字符流，即便是用的是字节流，也可能出现内容丢失的情况。</p>
</blockquote>
<h3 id="_1-字符流" tabindex="-1"><a class="header-anchor" href="#_1-字符流"><span>1. 字符流</span></a></h3>
<ul>
<li>字符流只能操作文本文件</li>
</ul>
<h3 id="_2-字节流" tabindex="-1"><a class="header-anchor" href="#_2-字节流"><span>2. 字节流</span></a></h3>
<ul>
<li>万能流，可以操作所有文件</li>
</ul>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<p><img src="@source/admin/images/IO流选择.jpg" alt="IO流选择.jpg"></p>
</div></template>


