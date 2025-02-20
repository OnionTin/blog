import{_ as n,o as s,c as a,e as t}from"./app-C_RrakEG.js";const p={},e=t(`<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><h3 id="unplugin-auto-import-d" tabindex="-1"><a class="header-anchor" href="#unplugin-auto-import-d"><span>unplugin-auto-import -D</span></a></h3><blockquote><p>解决问题: 在组件开发中无需每次都引入 import {ref, reactive ...} from，尤其是特别多的时候；但是 ts 的话还有一些配置需要去配，具体需要百度了。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&quot;unplugin-auto-import/vite&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pinia-plugin-persist-save" tabindex="-1"><a class="header-anchor" href="#pinia-plugin-persist-save"><span>pinia-plugin-persist --save</span></a></h3><p>解决问题: 持久化 pinia</p>`,6),o=[e];function i(c,u){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","插件.html.vue"]]),k=JSON.parse('{"path":"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%8F%92%E4%BB%B6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[{"level":3,"title":"unplugin-auto-import -D","slug":"unplugin-auto-import-d","link":"#unplugin-auto-import-d","children":[]},{"level":3,"title":"pinia-plugin-persist --save","slug":"pinia-plugin-persist-save","link":"#pinia-plugin-persist-save","children":[]}]}],"git":{"updatedTime":1727600594000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/Vue/Vue3/Vue基础/插件.md","excerpt":"<h2>插件</h2>\\n<h3>unplugin-auto-import -D</h3>\\n<blockquote>\\n<p>解决问题: 在组件开发中无需每次都引入 import {ref, reactive ...} from，尤其是特别多的时候；但是 ts 的话还有一些配置需要去配，具体需要百度了。</p>\\n</blockquote>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// vite.config.js</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineConfig <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"vite\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> vue <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"@vitejs/plugin-vue\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> AutoImport <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"unplugin-auto-import/vite\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token function\\">defineConfig</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">plugins</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n    <span class=\\"token function\\">vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">AutoImport</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">imports</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"vue\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"vue-router\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');export{r as comp,k as data};
