import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/config-server-1-vq_Q5Qsx.png";
const _imports_1 = "/blog/assets/config-server-2-Dl54nVax.png";
const _imports_2 = "/blog/assets/config-server-3-DF6hnwhR.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="springcloudconfig-服务端配置" tabindex="-1"><a class="header-anchor" href="#springcloudconfig-服务端配置"><span>SpringCloudConfig-服务端配置</span></a></h2><blockquote><p>什么是 SpringCloudConfig：SpringCloudConfig 是 SpringCloud 中的一个组件，它主要用于实现分布式配置中心，将各个服务的配置文件集中管理，实现配置的动态刷新。当然将他放到 gitee 上也是可以的，所以这里我们使用 SpringCloudConfig+gitee 实现配置的动态刷新。</p></blockquote><h2 id="springcloudconfig-gitee-实现服务端-project-config-server-3344" tabindex="-1"><a class="header-anchor" href="#springcloudconfig-gitee-实现服务端-project-config-server-3344"><span>SpringCloudConfig + gitee 实现服务端(project-config-server-3344)</span></a></h2><h3 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖"><span>1. 依赖</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--springboot--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--Config-Server--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-config-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置文件" tabindex="-1"><a class="header-anchor" href="#_2-配置文件"><span>2. 配置文件</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3344</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>config<span class="token punctuation">-</span><span class="token number">3344</span>
  <span class="token comment"># 连接远程仓库</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">server</span><span class="token punctuation">:</span>
        <span class="token comment"># git仓库地址(也可以连svn)</span>
        <span class="token key atrule">git</span><span class="token punctuation">:</span>
          <span class="token key atrule">uri</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//gitee.com/OnionTin/springcloud<span class="token punctuation">-</span>config.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-启动类" tabindex="-1"><a class="header-anchor" href="#_3-启动类"><span>3. 启动类</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>config<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableConfigServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 开启配置服务</span>
<span class="token annotation punctuation">@EnableConfigServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConfigServer_3344</span> <span class="token punctuation">{</span>
  <span class="token comment">// 启动后访问地址:</span>
  <span class="token comment">// 1.http://localhost:3344/application-dev.yaml</span>
  <span class="token comment">// 2.http://localhost:3344/application/dev/master</span>
  <span class="token comment">// 3.http://localhost:3344/master/application-dev.yaml</span>
  <span class="token comment">// 当然也可以是yml或properties配置文件</span>
  <span class="token comment">// client.yml文件:</span>
  <span class="token comment">// http://localhost:3344/master/client-dev.yml</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConfigServer_3344</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图例" tabindex="-1"><a class="header-anchor" href="#图例"><span>图例</span></a></h3><p><img${ssrRenderAttr("src", _imports_0)} alt="config-server-1"><img${ssrRenderAttr("src", _imports_1)} alt="config-server-2"><img${ssrRenderAttr("src", _imports_2)} alt="config-server-3"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/服务端连接git配置.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____git___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "服务端连接git配置.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%BF%9E%E6%8E%A5git%E9%85%8D%E7%BD%AE.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"SpringCloudConfig-服务端配置","slug":"springcloudconfig-服务端配置","link":"#springcloudconfig-服务端配置","children":[]},{"level":2,"title":"SpringCloudConfig + gitee 实现服务端(project-config-server-3344)","slug":"springcloudconfig-gitee-实现服务端-project-config-server-3344","link":"#springcloudconfig-gitee-实现服务端-project-config-server-3344","children":[{"level":3,"title":"1. 依赖","slug":"_1-依赖","link":"#_1-依赖","children":[]},{"level":3,"title":"2. 配置文件","slug":"_2-配置文件","link":"#_2-配置文件","children":[]},{"level":3,"title":"3. 启动类","slug":"_3-启动类","link":"#_3-启动类","children":[]},{"level":3,"title":"图例","slug":"图例","link":"#图例","children":[]}]}],"git":{"updatedTime":1727061891000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/服务端连接git配置.md","excerpt":"<!-- @format -->\\n<h2>SpringCloudConfig-服务端配置</h2>\\n<blockquote>\\n<p>什么是 SpringCloudConfig：SpringCloudConfig 是 SpringCloud 中的一个组件，它主要用于实现分布式配置中心，将各个服务的配置文件集中管理，实现配置的动态刷新。当然将他放到 gitee 上也是可以的，所以这里我们使用 SpringCloudConfig+gitee 实现配置的动态刷新。</p>\\n</blockquote>\\n<h2>SpringCloudConfig + gitee 实现服务端(project-config-server-3344)</h2>"}');
export {
  _____git___html as comp,
  data
};
