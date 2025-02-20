import{_ as n,o as s,c as a,e as t}from"./app-C_RrakEG.js";const p={},e=t(`<h2 id="编码和解码" tabindex="-1"><a class="header-anchor" href="#编码和解码"><span>编码和解码</span></a></h2><h3 id="编码表" tabindex="-1"><a class="header-anchor" href="#编码表"><span>编码表</span></a></h3><ol><li>ASCII：最基本表，主要针对数字、英文、少数标点符号</li><li>GBK：国标，21003 个汉字，其中包括 ASCII，一个中文占 2 个字节</li><li>Unicode：国际标准，包含全世界所有文字，每个文字都对应一个唯一的编号，其中 UTF-8 最常用</li><li>UTF-8: 使用 1-4 个字节来表示一个字符，其中一个中文占 3 个字节</li></ol><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码"><span>编码</span></a></h3><blockquote><p>编码是将字符串转换为字节的过程。</p></blockquote><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public byte[] getBytes()</td><td>根据平台的默认编码，将字符串转成字节数组</td></tr><tr><td>public byte[] getBytes(String charsetName)</td><td>根据指定的字符集编码，将字符串转成字节数组</td></tr></tbody></table><h3 id="解码" tabindex="-1"><a class="header-anchor" href="#解码"><span>解码</span></a></h3><blockquote><p>解码是将字节转换为字符串的过程。</p></blockquote><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public String(byte[] bytes)</td><td>根据平台的默认编码，将字节数组转成字符串</td></tr><tr><td>public String(byte[] bytes, String charsetName)</td><td>根据指定的字符集编码，将字节数组转成字符串</td></tr></tbody></table><h3 id="方法的使用" tabindex="-1"><a class="header-anchor" href="#方法的使用"><span>方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EncodeAndDecode</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// 编码</span>
        <span class="token comment">// public byte[] getBytes()</span>
        <span class="token comment">/*
        *byte[] bys1 = &quot;约吗？&quot;.getBytes();
        *System.out.println(Arrays.toString(bys1));
        */</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;约吗？&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bys1 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bys1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public byte[] getBytes(String charsetName)</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;约吗？&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bys2 <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>bys2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 解码</span>
        <span class="token comment">// public String(byte[] bytes)</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bys3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">-</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">112</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">97</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bys3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public String(byte[] bytes, String charsetName)</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bys4 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">-</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">70</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">112</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">105</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">68</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">97</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bys4<span class="token punctuation">,</span> <span class="token string">&quot;gbk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","编码和解码.html.vue"]]),k=JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E7%BC%96%E7%A0%81%E5%92%8C%E8%A7%A3%E7%A0%81.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"编码和解码","slug":"编码和解码","link":"#编码和解码","children":[{"level":3,"title":"编码表","slug":"编码表","link":"#编码表","children":[]},{"level":3,"title":"编码","slug":"编码","link":"#编码","children":[]},{"level":3,"title":"解码","slug":"解码","link":"#解码","children":[]},{"level":3,"title":"方法的使用","slug":"方法的使用","link":"#方法的使用","children":[]}]}],"git":{"updatedTime":1715073877000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/编码和解码.md","excerpt":"<h2>编码和解码</h2>\\n<h3>编码表</h3>\\n<ol>\\n<li>ASCII：最基本表，主要针对数字、英文、少数标点符号</li>\\n<li>GBK：国标，21003 个汉字，其中包括 ASCII，一个中文占 2 个字节</li>\\n<li>Unicode：国际标准，包含全世界所有文字，每个文字都对应一个唯一的编号，其中 UTF-8 最常用</li>\\n<li>UTF-8: 使用 1-4 个字节来表示一个字符，其中一个中文占 3 个字节</li>\\n</ol>\\n<h3>编码</h3>\\n<blockquote>\\n<p>编码是将字符串转换为字节的过程。</p>\\n</blockquote>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public byte[] getBytes()</td>\\n<td>根据平台的默认编码，将字符串转成字节数组</td>\\n</tr>\\n<tr>\\n<td>public byte[] getBytes(String charsetName)</td>\\n<td>根据指定的字符集编码，将字符串转成字节数组</td>\\n</tr>\\n</tbody>\\n</table>"}');export{r as comp,k as data};
