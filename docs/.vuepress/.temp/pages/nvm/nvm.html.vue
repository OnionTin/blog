<template><div><!-- @format -->
<h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm"><span>nvm</span></a></h2>
<h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载"><span>1.下载</span></a></h3>
<p><a href="https://wwm.lanzout.com/i4xs41qfn7oh" target="_blank" rel="noopener noreferrer">下载 nvm 安装包<ExternalLinkIcon/></a>
<a href="https://nvm.p6p.net/install/windows.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a></p>
<h3 id="_2-卸载-node" tabindex="-1"><a class="header-anchor" href="#_2-卸载-node"><span>2.卸载 Node</span></a></h3>
<h3 id="_3-安装-nvm" tabindex="-1"><a class="header-anchor" href="#_3-安装-nvm"><span>3. 安装 Nvm</span></a></h3>
<h3 id="_4-配置镜像" tabindex="-1"><a class="header-anchor" href="#_4-配置镜像"><span>4. 配置镜像</span></a></h3>
<blockquote>
<p>找到 nvm 安装路径 -&gt; 找到 settings.txt 文件 -&gt; 添加下载源</p>
</blockquote>
<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre v-pre class="language-txt"><code>node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-node" tabindex="-1"><a class="header-anchor" href="#安装-node"><span>安装 Node</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">18</span>.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看已安装的-node-版本" tabindex="-1"><a class="header-anchor" href="#查看已安装的-node-版本"><span>查看已安装的 Node 版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>nvm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用-node" tabindex="-1"><a class="header-anchor" href="#使用-node"><span>使用 Node</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>nvm use <span class="token number">18</span>.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nvm-相关命令" tabindex="-1"><a class="header-anchor" href="#nvm-相关命令"><span>Nvm 相关命令</span></a></h3>
<table>
<thead>
<tr>
<th>命令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>nvm list</td>
<td>查看已经安装的版本</td>
</tr>
<tr>
<td>nvm list installed</td>
<td>查看已经安装的版本</td>
</tr>
<tr>
<td>nvm list available</td>
<td>查看网络可以安装的版本</td>
</tr>
<tr>
<td>nvm arch</td>
<td>查看当前的系统位数和当前 nodejs 的位数</td>
</tr>
<tr>
<td>nvm install [arch]</td>
<td>安装制定版本的 node 并且可以指定平台 version 版本号 arch 平台</td>
</tr>
<tr>
<td>nvm on</td>
<td>打开 nodejs 版本控制</td>
</tr>
<tr>
<td>nvm off</td>
<td>关闭 nodejs 版本控制</td>
</tr>
<tr>
<td>nvm proxy [url]</td>
<td>查看和设置代理</td>
</tr>
<tr>
<td>nvm node_mirror [url]</td>
<td>设置或者查看 setting.txt 中的 node_mirror，如果不设置的默认是 https://nodejs.org/dist/</td>
</tr>
<tr>
<td>nvm npm_mirror [url]</td>
<td>设置或者查看 setting.txt 中的 npm_mirror,如果不设置的话默认的是：https://github.com/npm/npm/archive/.</td>
</tr>
<tr>
<td>nvm uninstall [version]</td>
<td>卸载指定的版本</td>
</tr>
<tr>
<td>nvm use [version] [arch]</td>
<td>切换指定的 node 版本和位数</td>
</tr>
<tr>
<td>nvm root [path]</td>
<td>设置和查看 root 路径</td>
</tr>
<tr>
<td>nvm version</td>
<td>查看当前的版本</td>
</tr>
<tr>
<td>nvm install-latest-npm</td>
<td>安装最新的 npm</td>
</tr>
<tr>
<td>nvm install-latest-ctags</td>
<td>安装最新的 ctags</td>
</tr>
<tr>
<td>nvm reinstall-packages [version]</td>
<td>重新安装指定的 npm 包</td>
</tr>
<tr>
<td>nvm unload</td>
<td>卸载 nvm</td>
</tr>
</tbody>
</table>
<h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span><a href="https://blog.csdn.net/qq_52775800/article/details/135344549" target="_blank" rel="noopener noreferrer">环境配置<ExternalLinkIcon/></a></span></a></h3>
</div></template>


