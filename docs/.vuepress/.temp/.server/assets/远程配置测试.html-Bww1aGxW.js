import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="远程配置测试" tabindex="-1"><a class="header-anchor" href="#远程配置测试"><span>远程配置测试</span></a></h2><blockquote><p>其实 SpringCloudConfig 就是通过服务端去连接远程仓库，并提供可以访问的服务，客户端从服务端获取想要的配置信息并使用。这样就把项目相关的配置，全都放到了远程仓库中，实现了配置的集中管理(分布式项目集群环境下，配置文件的管理尤为重要，所以集中管理配置文件是很有必要的)。当我们修改了远程仓库中的配置后，客户端重新启动就会更换到新的配置。</p></blockquote><h3 id="将-7001-服务和-8001-客户端修改成远程仓库配置" tabindex="-1"><a class="header-anchor" href="#将-7001-服务和-8001-客户端修改成远程仓库配置"><span>将 7001 服务和 8001 客户端修改成远程仓库配置</span></a></h3><h4 id="_1-在父项目中创建两个子模块-project-config-eureka-7001-和-project-config-provider-8001" tabindex="-1"><a class="header-anchor" href="#_1-在父项目中创建两个子模块-project-config-eureka-7001-和-project-config-provider-8001"><span>1.在父项目中创建两个子模块(project-config-eureka-7001 和 project-config-provider-8001)</span></a></h4><h4 id="_2-将-7001-服务和-8001-客户端分别复制到这两个子模块中" tabindex="-1"><a class="header-anchor" href="#_2-将-7001-服务和-8001-客户端分别复制到这两个子模块中"><span>2.将 7001 服务和 8001 客户端分别复制到这两个子模块中</span></a></h4><h4 id="_3-修改-7001-服务和-8001-客户端的依赖-在原有基础上都加上下边这段依赖就行了" tabindex="-1"><a class="header-anchor" href="#_3-修改-7001-服务和-8001-客户端的依赖-在原有基础上都加上下边这段依赖就行了"><span>3.修改 7001 服务和 8001 客户端的依赖，在原有基础上都加上下边这段依赖就行了</span></a></h4><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--springcloud-config：客户端--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-config<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-分别在-7001-服务和-8001-客户端中创建-bootstrap-yml-文件-并添加如下配置" tabindex="-1"><a class="header-anchor" href="#_4-分别在-7001-服务和-8001-客户端中创建-bootstrap-yml-文件-并添加如下配置"><span>4.分别在 7001 服务和 8001 客户端中创建 bootstrap.yml 文件，并添加如下配置</span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 系统级别的配置(比application.yml级别高)</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token comment"># 从gitee上读取的文件名(不要后缀)</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span><span class="token number">7001</span>
      <span class="token comment"># 使用读取的文件中的哪个环境</span>
      <span class="token key atrule">profile</span><span class="token punctuation">:</span> dev
      <span class="token key atrule">uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">3344</span>
      <span class="token comment"># 从哪个分支上获取</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> master

<span class="token comment"># 系统级别的配置(比application.yml级别高)</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token comment"># 从gitee上读取的文件名(不要后缀)</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span><span class="token number">8001</span>
      <span class="token comment"># 使用读取的文件中的哪个环境</span>
      <span class="token key atrule">profile</span><span class="token punctuation">:</span> dev
      <span class="token key atrule">uri</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">3344</span>
      <span class="token comment"># 从哪个分支上获取</span>
      <span class="token key atrule">label</span><span class="token punctuation">:</span> master
<span class="token comment"># 本地自测地址: http://localhost:3344/master/config-8001-dev.yml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-先启动-3344-再分别启动这两个项目" tabindex="-1"><a class="header-anchor" href="#_5-先启动-3344-再分别启动这两个项目"><span>5.先启动 3344，再分别启动这两个项目</span></a></h4><ol><li>启动 3344 后，启动 7001，访问本地自测地址: http://localhost:3344/master/config-7001-dev.yml <a href="http://localhost:3344/master/config-7001-dev.yml" target="_blank" rel="noopener noreferrer">查看信息`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>查看到信息后，访问 localhost:7001 查看是否注册成功</li><li>注册成功后，启动 8001，访问本地自测地址: http://localhost:3344/master/config-8001-dev.yml<a href="http://localhost:3344/master/config-8001-dev.yml" target="_blank" rel="noopener noreferrer">查看信息`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>查看到信息后，访问 http://localhost:8001/dept/list<a href="http://localhost:8001/dept/list" target="_blank" rel="noopener noreferrer">查看数据`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>修改远程仓库中的配置文件，重启相关服务，查看数据是否变化。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringCloud/远程配置测试.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "远程配置测试.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringCloud/%E8%BF%9C%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%B5%8B%E8%AF%95.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"远程配置测试","slug":"远程配置测试","link":"#远程配置测试","children":[{"level":3,"title":"将 7001 服务和 8001 客户端修改成远程仓库配置","slug":"将-7001-服务和-8001-客户端修改成远程仓库配置","link":"#将-7001-服务和-8001-客户端修改成远程仓库配置","children":[]}]}],"git":{"updatedTime":1727061891000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"admin/Java/SpringCloud/远程配置测试.md","excerpt":"<h2>远程配置测试</h2>\\n<blockquote>\\n<p>其实 SpringCloudConfig 就是通过服务端去连接远程仓库，并提供可以访问的服务，客户端从服务端获取想要的配置信息并使用。这样就把项目相关的配置，全都放到了远程仓库中，实现了配置的集中管理(分布式项目集群环境下，配置文件的管理尤为重要，所以集中管理配置文件是很有必要的)。当我们修改了远程仓库中的配置后，客户端重新启动就会更换到新的配置。</p>\\n</blockquote>\\n<h3>将 7001 服务和 8001 客户端修改成远程仓库配置</h3>\\n<h4>1.在父项目中创建两个子模块(project-config-eureka-7001 和 project-config-provider-8001)</h4>"}');
export {
  _______html as comp,
  data
};
