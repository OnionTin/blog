<template><div><h2 id="多线程概述" tabindex="-1"><a class="header-anchor" href="#多线程概述"><span>多线程概述</span></a></h2>
<h3 id="多线程中的概念" tabindex="-1"><a class="header-anchor" href="#多线程中的概念"><span>多线程中的概念</span></a></h3>
<table>
<thead>
<tr>
<th>术语</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>进程</td>
<td>正在执行的应用程序，看作为开启了一个进程。</td>
</tr>
<tr>
<td>线程</td>
<td>一个进程可以开启多个线程，一个线程可以执行多个任务。</td>
</tr>
<tr>
<td>多线程</td>
<td>一个进程中可以开启多个线程，多个线程可以同时执行多个任务。</td>
</tr>
<tr>
<td>并发</td>
<td>在同一时刻，多个任务在<font color = red>多个 CPU 上交替执行</font>，宏观上，这些任务是同时执行的。</td>
</tr>
<tr>
<td>并行</td>
<td>在同一时刻，多个任务在<font color = red>同一 CPU 上同时执行</font>，微观上，这些任务是同时执行的。</td>
</tr>
</tbody>
</table>
<h3 id="杀进程" tabindex="-1"><a class="header-anchor" href="#杀进程"><span>杀进程</span></a></h3>
<p>一、使用命令提示符</p>
<ol>
<li>首先打开命令提示符，输入 netstat -nao，找到对应的端口号</li>
<li>输入 tasklist | findstr 端口号，找到对应的进程号</li>
<li>输入 taskkill /pid 进程号 /f，杀掉进程</li>
</ol>
<p>二、使用任务管理器</p>
<ol>
<li>首先打开命令提示符，输入 netstat -nao，找到对应的端口号</li>
<li>Ctrl + Alt + Del，打开任务管理器</li>
<li>选择“详细信息”选项卡，根据端口号找到对应的进程，右键选择“结束进程树”</li>
</ol>
</div></template>


