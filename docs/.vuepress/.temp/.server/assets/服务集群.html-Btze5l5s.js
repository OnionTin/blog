import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _imports_0 = "/blog/assets/服务集群-BrBvb3tv.jpg";
const _imports_1 = "/blog/assets/集群1-6u96wD0D.jpg";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="服务集群" tabindex="-1"><a class="header-anchor" href="#服务集群"><span>服务集群</span></a></h2><blockquote><p>什么是服务集群？比如有三个微服务，他们之间互相绑定，形成了一个集群，他们之间`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`可以互相调用`);
      } else {
        return [
          createTextVNode("可以互相调用")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，也可以`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`互相访问`);
      } else {
        return [
          createTextVNode("互相访问")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。好处是当其中一个服务挂掉了，其他的服务还可以继续运行。用户可以通过其他服务获取信息，不影响用户体验。</p></blockquote><h3 id="修改本地域名映射" tabindex="-1"><a class="header-anchor" href="#修改本地域名映射"><span>修改本地域名映射</span></a></h3><blockquote><p>C 盘/windows/system32/drivers/etc/hosts 文件，添加如下映射；此时在本地访问 eureka7001.com，eureka7002.com，eureka7003.com 都会映射到 127.0.0.1，即本机。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>127.0.0.1 eureka7001.com
127.0.0.1 eureka7002.com
127.0.0.1 eureka7003.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集群服务搭建" tabindex="-1"><a class="header-anchor" href="#集群服务搭建"><span>集群服务搭建</span></a></h3><h3 id="_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖" tabindex="-1"><a class="header-anchor" href="#_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖"><span>1. 在父项目(ths-spring-cloud)中再创建两个模块，并导入依赖</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
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
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件"><span>2. 将 project-eureka-7001 模块中的配置文件复制到 7002 和 7003 模块中，并修改配置文件</span></a></h3><h4 id="修改-7001" tabindex="-1"><a class="header-anchor" href="#修改-7001"><span>修改 7001</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7001</span>
<span class="token comment"># Eureka 配置</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token comment"># 在Eureka注册中心的名字</span>
    <span class="token comment"># hostname: localhost 修改了本地域名映射</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7001.com
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token comment"># 是否向Eureka注册中心注册自己</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># 是否从Eureka注册中心获取服务列表(false: 因为当前就是注册中心,即服务端)</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token comment"># Eureka 监控中心地址</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 目前取到的地址就是 https://localhost:7001/eureka/</span>
      <span class="token comment"># 这是单机，即单个服务端，所以默认Zone就是当前服务</span>
      <span class="token comment"># defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/</span>
      <span class="token comment"># 集群(除了本机，还要关联其他服务)</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-7002" tabindex="-1"><a class="header-anchor" href="#修改-7002"><span>修改 7002</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7002</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7002.com
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 集群互相关联</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-7003" tabindex="-1"><a class="header-anchor" href="#修改-7003"><span>修改 7003</span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7003</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7003.com
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 集群互相关联</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-将服务注册到集群" tabindex="-1"><a class="header-anchor" href="#_3-将服务注册到集群"><span>3. 将服务注册到集群</span></a></h3><blockquote><p>原本服务只需要注册到单机，现在集群环境，当然是需要发布到集群中，即多个注册中心。</p></blockquote><h4 id="修改-project-provider-dept-8001-模块的配置文件" tabindex="-1"><a class="header-anchor" href="#修改-project-provider-dept-8001-模块的配置文件"><span>修改 project-provider-dept-8001 模块的配置文件</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8001</span>
<span class="token comment"># mybatis配置</span>
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token comment"># 配置别名：实体类包名路径(api模块)</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.ths.api.pojo
  <span class="token comment"># 配置mapper接口的位置(当前模块)</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mapper/<span class="token important">*.xml</span>
  <span class="token comment"># 配置全局配置文件(当前模块)</span>
  <span class="token key atrule">config-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis/mybatis<span class="token punctuation">-</span>config.xml
<span class="token comment"># spring配置</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8001</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/db01<span class="token punctuation">?</span>useUnicode=true
      <span class="token important">&amp;characterEncoding=utf-8&amp;serverTimezone=UTC</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
<span class="token comment"># Eureka配置</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span>
      <span class="token comment"># 将本服务注册到哪个注册中心(单机)</span>
      <span class="token comment"># defaultZone: http://localhost:7001/eureka/</span>
      <span class="token comment"># 集群</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/<span class="token punctuation">,</span>
      http<span class="token punctuation">:</span>//eureka7002.com<span class="token punctuation">:</span>7002/eureka/<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003.com<span class="token punctuation">:</span>7003/eureka/
  <span class="token comment"># 修改服务在注册中心的名字</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span>8001<span class="token punctuation">-</span>id
<span class="token comment"># 配置监控信息(访问地址: http://localhost:8001/actuator/info)</span>
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">app.name</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8001</span>
  <span class="token key atrule">app.description</span><span class="token punctuation">:</span> project<span class="token punctuation">-</span>provider<span class="token punctuation">-</span><span class="token number">8001</span>
  <span class="token key atrule">company.name</span><span class="token punctuation">:</span> ths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img${ssrRenderAttr("src", _imports_0)} alt="服务集群"><img${ssrRenderAttr("src", _imports_1)} alt="集群"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/服务集群.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "服务集群.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"服务集群","slug":"服务集群","link":"#服务集群","children":[{"level":3,"title":"修改本地域名映射","slug":"修改本地域名映射","link":"#修改本地域名映射","children":[]},{"level":3,"title":"集群服务搭建","slug":"集群服务搭建","link":"#集群服务搭建","children":[]},{"level":3,"title":"1. 在父项目(ths-spring-cloud)中再创建两个模块，并导入依赖","slug":"_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖","link":"#_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖","children":[]},{"level":3,"title":"2. 将 project-eureka-7001 模块中的配置文件复制到 7002 和 7003 模块中，并修改配置文件","slug":"_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件","link":"#_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件","children":[]},{"level":3,"title":"修改 7003","slug":"修改-7003","link":"#修改-7003","children":[]},{"level":3,"title":"3. 将服务注册到集群","slug":"_3-将服务注册到集群","link":"#_3-将服务注册到集群","children":[]}]}],"git":{"updatedTime":1726648298000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringCloud/服务集群.md","excerpt":"<h2>服务集群</h2>\\n<blockquote>\\n<p>什么是服务集群？比如有三个微服务，他们之间互相绑定，形成了一个集群，他们之间，也可以。好处是当其中一个服务挂掉了，其他的服务还可以继续运行。用户可以通过其他服务获取信息，不影响用户体验。</p>\\n</blockquote>\\n<h3>修改本地域名映射</h3>\\n<blockquote>\\n<p>C 盘/windows/system32/drivers/etc/hosts 文件，添加如下映射；此时在本地访问 eureka7001.com，eureka7002.com，eureka7003.com 都会映射到 127.0.0.1，即本机。</p>\\n</blockquote>"}');
export {
  _____html as comp,
  data
};
