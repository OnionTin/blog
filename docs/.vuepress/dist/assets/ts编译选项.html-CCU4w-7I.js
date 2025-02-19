import{_ as s,o as n,c as a,e}from"./app-CvP7wor-.js";const t={},o=e(`<h2 id="ts-编译选项" tabindex="-1"><a class="header-anchor" href="#ts-编译选项"><span>ts 编译选项</span></a></h2><h3 id="include-指定需要编译的文件" tabindex="-1"><a class="header-anchor" href="#include-指定需要编译的文件"><span>include 指定需要编译的文件</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/**/*&quot;</span><span class="token punctuation">]</span> <span class="token comment">// (src: src 目录下 \\*_: 任意目录 _: 任意文件)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="exclude-排除不需要编译的文件" tabindex="-1"><a class="header-anchor" href="#exclude-排除不需要编译的文件"><span>exclude 排除不需要编译的文件</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// (默认值: [&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;])</span>
exclude<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/assets.....自己写&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="files-文件名" tabindex="-1"><a class="header-anchor" href="#files-文件名"><span>files: [ ... 文件名 ]</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">//只有文件少的时候, 用一个数组来统计编译的文件就行了</span>
files<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/index.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./src/other.ts&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="compileroptions-配置选项" tabindex="-1"><a class="header-anchor" href="#compileroptions-配置选项"><span>compilerOptions 配置选项</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定编译后的版本</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定要使用的模块化的规范 commonjs es6</span>
  <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom.iterable&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 指定项目中用到的库 es6 promise...</span>
  <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出目录</span>
  <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist/app.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 将代码合并为一个文件</span>
  <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否对js文件进行编译, 默认为false</span>
  <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否检查js语法符合规范, 默认为false</span>
  <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否移除注释, 默认为false</span>
  <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不生成编译后所产生的js文件, 默认为false</span>
  <span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 报错时不生成编译文件, 默认为false</span>
  <span class="token property">&quot;awaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 设置编译后的文件是否使用严格模式, 默认为false</span>
  <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不允许隐式的any类型设置, 默认为false</span>
  <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不允许不明确类型的this, 默认为false</span>
  <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 严格的检查空值, 默认为false</span>
  <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// 所有的检查的总开关, 如果设置为true, 所有的都打开了就不用写了</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[o];function l(c,i){return n(),a("div",null,p)}const u=s(t,[["render",l],["__file","ts编译选项.html.vue"]]),d=JSON.parse('{"path":"/web/Ts/%E6%A8%A1%E5%9D%97/ts%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ts 编译选项","slug":"ts-编译选项","link":"#ts-编译选项","children":[{"level":3,"title":"include 指定需要编译的文件","slug":"include-指定需要编译的文件","link":"#include-指定需要编译的文件","children":[]},{"level":3,"title":"exclude 排除不需要编译的文件","slug":"exclude-排除不需要编译的文件","link":"#exclude-排除不需要编译的文件","children":[]},{"level":3,"title":"files: [ ... 文件名 ]","slug":"files-文件名","link":"#files-文件名","children":[]},{"level":3,"title":"compilerOptions 配置选项","slug":"compileroptions-配置选项","link":"#compileroptions-配置选项","children":[]}]}],"git":{"updatedTime":1727255714000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/Ts/模块/ts编译选项.md","excerpt":"<h2>ts 编译选项</h2>\\n<h3>include 指定需要编译的文件</h3>\\n<div class=\\"language-json\\" data-ext=\\"json\\" data-title=\\"json\\"><pre class=\\"language-json\\"><code>include<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"./src/**/*\\"</span><span class=\\"token punctuation\\">]</span> <span class=\\"token comment\\">// (src: src 目录下 \\\\*_: 任意目录 _: 任意文件)</span>\\n</code></pre></div>"}');export{u as comp,d as data};
