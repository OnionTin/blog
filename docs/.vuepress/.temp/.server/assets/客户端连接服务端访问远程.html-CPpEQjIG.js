import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="客户端连接服务端访问远程" tabindex="-1"><a class="header-anchor" href="#客户端连接服务端访问远程"><span>客户端连接服务端访问远程</span></a></h2><h3 id="_1-配置设置-设置读取文件的相关信息" tabindex="-1"><a class="header-anchor" href="#_1-配置设置-设置读取文件的相关信息"><span>1. 配置设置(设置读取文件的相关信息)</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># bootstrap.yml文件</span>

<span class="token comment"># 系统级别的配置(比application.yml级别高)</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token comment"># 从gitee上读取的文件名(不要后缀)</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> client
      <span class="token comment"># 使用读取的文件中的哪个环境</span>
      <span class="token key atrule">profile</span><span class="token punctuation">:</span> dev
      <span class="token comment"># 读取服务端的地址</span>
      <span class="token key atrule">uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">3344</span>
      <span class="token comment"># 从哪个分支上获取</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-启动类" tabindex="-1"><a class="header-anchor" href="#_2-启动类"><span>2. 启动类</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>client</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 启动后访问的真实端口不是3355，而是远程文件中的8201</span>
<span class="token comment">// http://localhost:8201/getConfig</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigClient_3355</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigClient_3355</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-测试接口" tabindex="-1"><a class="header-anchor" href="#_3-测试接口"><span>3. 测试接口</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>client<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetConfigServer</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.application.name}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> applicationName<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${eureka.client.serviceUrl.defaultZone}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> eurekaServer<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${server.port}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> port<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/getConfig&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;applicationName: &quot;</span> <span class="token operator">+</span> applicationName <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;eurekaServer: &quot;</span> <span class="token operator">+</span> eurekaServer <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span>
        <span class="token string">&quot;port: &quot;</span> <span class="token operator">+</span> port<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/客户端连接服务端访问远程.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "客户端连接服务端访问远程.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AE%BF%E9%97%AE%E8%BF%9C%E7%A8%8B.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"客户端连接服务端访问远程","slug":"客户端连接服务端访问远程","link":"#客户端连接服务端访问远程","children":[{"level":3,"title":"1. 配置设置(设置读取文件的相关信息)","slug":"_1-配置设置-设置读取文件的相关信息","link":"#_1-配置设置-设置读取文件的相关信息","children":[]},{"level":3,"title":"2. 启动类","slug":"_2-启动类","link":"#_2-启动类","children":[]},{"level":3,"title":"3. 测试接口","slug":"_3-测试接口","link":"#_3-测试接口","children":[]}]}],"git":{"updatedTime":1727061891000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/SpringCloud/客户端连接服务端访问远程.md","excerpt":"<h2>客户端连接服务端访问远程</h2>\\n<h3>1. 配置设置(设置读取文件的相关信息)</h3>\\n<div class=\\"language-yaml\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token comment\\"># bootstrap.yml文件</span>\\n\\n<span class=\\"token comment\\"># 系统级别的配置(比application.yml级别高)</span>\\n<span class=\\"token key atrule\\">spring</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">cloud</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">config</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token comment\\"># 从gitee上读取的文件名(不要后缀)</span>\\n      <span class=\\"token key atrule\\">name</span><span class=\\"token punctuation\\">:</span> client\\n      <span class=\\"token comment\\"># 使用读取的文件中的哪个环境</span>\\n      <span class=\\"token key atrule\\">profile</span><span class=\\"token punctuation\\">:</span> dev\\n      <span class=\\"token comment\\"># 读取服务端的地址</span>\\n      <span class=\\"token key atrule\\">uri</span><span class=\\"token punctuation\\">:</span> http<span class=\\"token punctuation\\">:</span>//localhost<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">3344</span>\\n      <span class=\\"token comment\\"># 从哪个分支上获取</span>\\n      <span class=\\"token key atrule\\">label</span><span class=\\"token punctuation\\">:</span> master\\n</code></pre></div>"}');
export {
  _____________html as comp,
  data
};
