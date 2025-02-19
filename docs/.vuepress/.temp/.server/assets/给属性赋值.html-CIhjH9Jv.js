import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="给属性赋值" tabindex="-1"><a class="header-anchor" href="#给属性赋值"><span>给属性赋值</span></a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "center" })}">注解</th><th style="${ssrRenderStyle({ "text-align": "center" })}">作用</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`@ConfigurationProperties`);
      } else {
        return [
          createTextVNode("@ConfigurationProperties")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "center" })}">`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`自动读取 application.yam 中的多个属性；并给多个属性赋值`);
      } else {
        return [
          createTextVNode("自动读取 application.yam 中的多个属性；并给多个属性赋值")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">@Value</td><td style="${ssrRenderStyle({ "text-align": "center" })}">给单个属性赋值</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">@PropertySources + @Value</td><td style="${ssrRenderStyle({ "text-align": "center" })}">指定多个外部属性文件(.property)</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">@PropertySource + @Value</td><td style="${ssrRenderStyle({ "text-align": "center" })}">指定一个外部属性文件(.property)</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`@PropertySource + @ConfigurationProperties`);
      } else {
        return [
          createTextVNode("@PropertySource + @ConfigurationProperties")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td><td style="${ssrRenderStyle({ "text-align": "center" })}">`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`自动读取指定的文件中的多个属性；并给多个属性赋值`);
      } else {
        return [
          createTextVNode("自动读取指定的文件中的多个属性；并给多个属性赋值")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "center" })}">@Environment</td><td style="${ssrRenderStyle({ "text-align": "center" })}">给单个属性赋值</td></tr></tbody></table><h3 id="configurationproperties" tabindex="-1"><a class="header-anchor" href="#configurationproperties"><span>@ConfigurationProperties</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;属性名&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> 属性名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="propertysources-value" tabindex="-1"><a class="header-anchor" href="#propertysources-value"><span>@PropertySources + @Value</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@PropertySources</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:属性文件名1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:属性文件名2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${属性名}&quot;</span><span class="token punctuation">)</span> <span class="token comment">// el表达式取出配置文件中属性值</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> 属性名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="propertysource-value" tabindex="-1"><a class="header-anchor" href="#propertysource-value"><span>@PropertySource + @Value</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:属性文件名&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${属性名}&quot;</span><span class="token punctuation">)</span> <span class="token comment">// el表达式取出配置文件中属性值</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> 属性名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="propertysource-configurationproperties" tabindex="-1"><a class="header-anchor" href="#propertysource-configurationproperties"><span>@PropertySource + @ConfigurationProperties</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:属性文件名&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;属性名&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> 属性名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment"><span>@Environment</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Environment</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> 属性名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具体案例" tabindex="-1"><a class="header-anchor" href="#具体案例"><span>具体案例</span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--给注解@ConfigurationProperties配置处理器--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-configuration-processor<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 测试类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">SpringBoot220ApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span> <span class="token comment">// 自动装配</span>
  <span class="token keyword">private</span> <span class="token class-name">Person</span> person<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Person(</span>
    <span class="token comment">// name=张三,</span>
    <span class="token comment">// age=18,</span>
    <span class="token comment">// happy=true,</span>
    <span class="token comment">// birth=Mon Sep 09 00:00:00 CST 2019,</span>
    <span class="token comment">// books=[钢铁是怎么练成的, List和数组很像],</span>
    <span class="token comment">// list=[钢铁是怎么练成的, List和数组很像],</span>
    <span class="token comment">// map={name=张三, age=18},</span>
    <span class="token comment">// dog=Dog(name=小花, age=3)</span>
    <span class="token comment">// )</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Dog类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> firstName<span class="token punctuation">;</span> <span class="token comment">// 松散绑定字段</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Person类</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ths<span class="token punctuation">.</span>pojo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PropertySource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token comment">// @ConfigurationProperties(application.yaml) 方式</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Component</span> <span class="token comment">// 注册bean</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 读取配置文件 prefix：指定属性</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// @PropertySources + @Value 方式</span>
<span class="token class-name">AllArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Component</span> <span class="token comment">// 注册bean</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;classpath:yaml1.properties&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 加载指定的配置文件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${name}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${age}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${happy}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${birth}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${books}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${list}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${map}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> mapStr<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${dog}&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> dogStr<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map <span class="token operator">=</span> <span class="token function">parseMap</span><span class="token punctuation">(</span>mapStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    dog <span class="token operator">=</span> <span class="token function">parseDog</span><span class="token punctuation">(</span>dogStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">parseMap</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pairs <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> pair <span class="token operator">:</span> pairs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> keyValue <span class="token operator">=</span> pair<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>keyValue<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>keyValue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keyValue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> map<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">Dog</span> <span class="token function">parseDog</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Dog</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> pairs <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;, &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> pair <span class="token operator">:</span> pairs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> keyValue <span class="token operator">=</span> pair<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>keyValue<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>keyValue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token string">&quot;name&quot;</span><span class="token operator">:</span>
            dog<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>keyValue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token string">&quot;age&quot;</span><span class="token operator">:</span>
            dog<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>keyValue<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dog<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// @PropertySource + @ConfigurationProperties 方式</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;classpath:yaml2.properties&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 加载指定的配置文件</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;person&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 读取配置文件</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Boolean</span> happy<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Date</span> birth<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> books<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Dog</span> dog<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># application.yaml</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
<span class="token key atrule">person</span><span class="token punctuation">:</span>
  <span class="token comment"># # \${}: el表达式：占位符随机数</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 张三$<span class="token punctuation">{</span>random.int<span class="token punctuation">}</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span>
  <span class="token key atrule">happy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">birth</span><span class="token punctuation">:</span> 2019/09/09
  <span class="token key atrule">hello</span><span class="token punctuation">:</span> 你好
  <span class="token key atrule">books</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 钢铁是怎么练成的
    <span class="token punctuation">-</span> List和数组很像
  <span class="token key atrule">list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 钢铁是怎么练成的
    <span class="token punctuation">-</span> List和数组很像
  <span class="token key atrule">map</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 张三<span class="token punctuation">,</span> <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>
  <span class="token key atrule">dog</span><span class="token punctuation">:</span>
    <span class="token comment"># \${...}: 这是Spring中的占位符，表示后面的内容将被解析为一个表达式。</span>
    <span class="token comment"># \${person.hello:hello}意思是person.hello ? person.hello : “hello”</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>person.hello<span class="token punctuation">:</span>hello<span class="token punctuation">}</span>小花
    <span class="token comment"># 松散绑定：在yaml中字段用 &#39;-&#39; 连接的，在实体类中这个字段可以换成驼峰式命名 fistName</span>
    <span class="token key atrule">fist-name</span><span class="token punctuation">:</span> 松散绑定
    <span class="token key atrule">age</span><span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">#yaml1.properties</span>
<span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">小张</span>
<span class="token key attr-name">age</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token key attr-name">happy</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">birth</span> <span class="token punctuation">=</span> <span class="token value attr-value">2019/03/01</span>
<span class="token key attr-name">books</span> <span class="token punctuation">=</span> <span class="token value attr-value">钢铁是怎么练成的, List和数组很像</span>
<span class="token key attr-name">list</span> <span class="token punctuation">=</span> <span class="token value attr-value">钢铁是怎么练成的, List和数组很像</span>
<span class="token key attr-name">map</span> <span class="token punctuation">=</span> <span class="token value attr-value">name=张三, age=18</span>
<span class="token key attr-name">dog</span> <span class="token punctuation">=</span> <span class="token value attr-value">name=小花, age=3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">#yaml2.properties</span>
<span class="token key attr-name">person.name</span><span class="token punctuation">=</span><span class="token value attr-value">小张</span>
<span class="token key attr-name">person.age</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">person.happy</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">person.birth</span><span class="token punctuation">=</span><span class="token value attr-value">2019/03/01</span>
<span class="token key attr-name">person.books</span><span class="token punctuation">=</span><span class="token value attr-value">钢铁是怎么练成的, List和数组很像</span>
<span class="token key attr-name">person.list</span><span class="token punctuation">=</span><span class="token value attr-value">钢铁是怎么练成的, List和数组很像</span>
<span class="token key attr-name">person.map</span><span class="token punctuation">=</span><span class="token value attr-value">{&quot;name&quot;:&quot;张三&quot;,&quot;age&quot;:18}</span>
<span class="token key attr-name">person.dog</span><span class="token punctuation">=</span><span class="token value attr-value">{&quot;name&quot;:&quot;小花&quot;,&quot;age&quot;:3}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/SpringBoot/yaml/给属性赋值.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "给属性赋值.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/SpringBoot/yaml/%E7%BB%99%E5%B1%9E%E6%80%A7%E8%B5%8B%E5%80%BC.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"给属性赋值","slug":"给属性赋值","link":"#给属性赋值","children":[{"level":3,"title":"@ConfigurationProperties","slug":"configurationproperties","link":"#configurationproperties","children":[]},{"level":3,"title":"@PropertySources + @Value","slug":"propertysources-value","link":"#propertysources-value","children":[]},{"level":3,"title":"@PropertySource + @Value","slug":"propertysource-value","link":"#propertysource-value","children":[]},{"level":3,"title":"@PropertySource + @ConfigurationProperties","slug":"propertysource-configurationproperties","link":"#propertysource-configurationproperties","children":[]},{"level":3,"title":"@Environment","slug":"environment","link":"#environment","children":[]},{"level":3,"title":"具体案例","slug":"具体案例","link":"#具体案例","children":[]}]}],"git":{"updatedTime":1725354999000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/SpringBoot/yaml/给属性赋值.md","excerpt":"<h2>给属性赋值</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:center\\">注解</th>\\n<th style=\\"text-align:center\\">作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:center\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">@Value</td>\\n<td style=\\"text-align:center\\">给单个属性赋值</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">@PropertySources + @Value</td>\\n<td style=\\"text-align:center\\">指定多个外部属性文件(.property)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">@PropertySource + @Value</td>\\n<td style=\\"text-align:center\\">指定一个外部属性文件(.property)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\"></td>\\n<td style=\\"text-align:center\\"></td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:center\\">@Environment</td>\\n<td style=\\"text-align:center\\">给单个属性赋值</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  ______html as comp,
  data
};
