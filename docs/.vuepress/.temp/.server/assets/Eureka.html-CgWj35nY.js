import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/注册中心列表-BNFHwix1.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="eureka-注册中心" tabindex="-1"><a class="header-anchor" href="#eureka-注册中心"><span>Eureka 注册中心</span></a></h2>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 现在开始所有的模块都遵循四个步骤 1. 导入依赖 2. 编写配置文件 3. 开启这个功能(@EnableXXX) 4. 配置类(需要的话) `);
      } else {
        return [
          createTextVNode(" 现在开始所有的模块都遵循四个步骤 1. 导入依赖 2. 编写配置文件 3. 开启这个功能(@EnableXXX) 4. 配置类(需要的话) ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<blockquote><p>Eureka 遵循的是 AP 原则，即高可用和高一致性，而 Zookeeper 遵循的是 CP 原则，即高一致性和高可用性</p></blockquote><h3 id="eureka-注册中心-1" tabindex="-1"><a class="header-anchor" href="#eureka-注册中心-1"><span>Eureka 注册中心</span></a></h3><h4 id="_1-导入依赖" tabindex="-1"><a class="header-anchor" href="#_1-导入依赖"><span>1. 导入依赖</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>
<span class="token comment">&lt;!--Eureka Server 注册中心--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4.6.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--热部署--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-编写配置文件" tabindex="-1"><a class="header-anchor" href="#_2-编写配置文件"><span>2. 编写配置文件</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7001</span>
<span class="token comment"># Eureka 配置</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token comment"># 在Eureka注册中心的名字</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token comment"># 是否向Eureka注册中心注册自己</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 是否从Eureka注册中心获取服务列表(false: 因为当前就是注册中心,即服务端)</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># Eureka 监控中心地址</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 目前取到的地址就是 https://localhost:7001/eureka/</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>eureka.instance.hostname<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>server.port<span class="token punctuation">}</span>/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-开启这个功能-enablexxx" tabindex="-1"><a class="header-anchor" href="#_3-开启这个功能-enablexxx"><span>3. 开启这个功能(@EnableXXX)</span></a></h4><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>eureka</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token comment">// 启用EurekaServer服务端启动类，接受其它微服务注册进来</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EurekaServer_7001</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">EurekaServer_7001</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 启动后测试地址</span>
    <span class="token comment">// http://localhost:7001/</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="注册中心"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/Eureka.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Eureka_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "Eureka.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/Eureka.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Eureka 注册中心","slug":"eureka-注册中心","link":"#eureka-注册中心","children":[{"level":3,"title":"Eureka 注册中心","slug":"eureka-注册中心-1","link":"#eureka-注册中心-1","children":[]}]}],"git":{"updatedTime":1726648298000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1},{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/Eureka.md","excerpt":"<!-- @format -->\\n<h2>Eureka 注册中心</h2>\\n\\n<blockquote>\\n<p>Eureka 遵循的是 AP 原则，即高可用和高一致性，而 Zookeeper 遵循的是 CP 原则，即高一致性和高可用性</p>\\n</blockquote>\\n<h3>Eureka 注册中心</h3>\\n<h4>1. 导入依赖</h4>\\n<div class=\\"language-xml\\" data-ext=\\"xml\\" data-title=\\"xml\\"><pre class=\\"language-xml\\"><code>\\n<span class=\\"token comment\\">&lt;!--Eureka Server 注册中心--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.cloud<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-cloud-starter-eureka-server<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.4.6.RELEASE<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token comment\\">&lt;!--热部署--&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.springframework.boot<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>spring-boot-devtools<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');
export {
  Eureka_html as comp,
  data
};
