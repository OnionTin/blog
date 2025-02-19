import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="react-react-profiler" tabindex="-1"><a class="header-anchor" href="#react-react-profiler"><span>React <code>React.Profiler</code></span></a></h2><p><code>React.Profiler</code> 是 React 提供的一个用于性能分析的工具，它可以帮助开发者测量 React 组件渲染的性能。</p><h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用"><span>1. 基本使用</span></a></h3><p><code>Profiler</code>组件可以被添加到 React 树中的任何位置，用于测量该部分树的渲染性能。</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Profiler</span></span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>App<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">onRender</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onRender<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Profiler</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code>：一个字符串，用于标识<code>Profiler</code>。</li><li><code>onRender</code>：一个回调函数，每次组件树渲染完成时都会被调用。</li></ul><h3 id="_2-onrender-回调" tabindex="-1"><a class="header-anchor" href="#_2-onrender-回调"><span>2. onRender 回调</span></a></h3><p><code>onRender</code>回调函数提供了关于渲染性能的详细信息：</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">onRenderCallback</span><span class="token punctuation">(</span>
  <span class="token parameter">id<span class="token punctuation">,</span>
  phase<span class="token punctuation">,</span>
  actualDuration<span class="token punctuation">,</span>
  baseDuration<span class="token punctuation">,</span>
  startTime<span class="token punctuation">,</span>
  commitTime<span class="token punctuation">,</span>
  interactions</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>id</code>：<code>Profiler</code>的标识符。</li><li><code>phase</code>：渲染阶段，可以是<code>mount</code>或<code>update</code>。</li><li><code>actualDuration</code>：当前更新的渲染时间。</li><li><code>baseDuration</code>：没有优化时的预计渲染时间。</li><li><code>startTime</code>：渲染开始的时间戳。</li><li><code>commitTime</code>：React 提交更新的时间戳。</li><li><code>interactions</code>：与渲染相关的用户交互或 React 特性集合。</li></ul><h3 id="_3-性能分析" tabindex="-1"><a class="header-anchor" href="#_3-性能分析"><span>3. 性能分析</span></a></h3><p><code>Profiler</code>用于分析应用程序的渲染性能，可以帮助识别性能瓶颈。</p><h3 id="_4-避免过度使用" tabindex="-1"><a class="header-anchor" href="#_4-避免过度使用"><span>4. 避免过度使用</span></a></h3><p>虽然<code>Profiler</code>是一个轻量级组件，但它应该只在必要时使用，因为每次使用都会增加 CPU 和内存开销。</p><h3 id="_5-与-developer-tools-结合" tabindex="-1"><a class="header-anchor" href="#_5-与-developer-tools-结合"><span>5. 与 Developer Tools 结合</span></a></h3><p><code>Profiler</code>可以与 React Developer Tools 结合使用，提供更直观的性能分析。</p><h3 id="_6-使用场景" tabindex="-1"><a class="header-anchor" href="#_6-使用场景"><span>6. 使用场景</span></a></h3><p><code>Profiler</code>适用于需要细粒度性能分析的场景，如识别长时间渲染的组件或分析优化效果。</p><h3 id="_7-性能优化" tabindex="-1"><a class="header-anchor" href="#_7-性能优化"><span>7. 性能优化</span></a></h3><p>通过分析<code>Profiler</code>提供的数据，可以对应用进行性能优化，比如使用<code>React.memo</code>、<code>useMemo</code>、<code>useCallback</code>等进行记忆化。</p><h3 id="_8-组件图" tabindex="-1"><a class="header-anchor" href="#_8-组件图"><span>8. 组件图</span></a></h3><p><code>Profiler</code>可以生成组件图，展示组件在多次提交中的渲染时间，帮助开发者了解组件的渲染频率和持续时间。</p><h3 id="_9-交互跟踪" tabindex="-1"><a class="header-anchor" href="#_9-交互跟踪"><span>9. 交互跟踪</span></a></h3><p><code>Profiler</code>可以跟踪用户交互或 React 特性，如<code>setState</code>，从而了解哪些交互触发了组件的重新渲染。</p><h3 id="_10-生产环境分析" tabindex="-1"><a class="header-anchor" href="#_10-生产环境分析"><span>10. 生产环境分析</span></a></h3><p>虽然<code>Profiler</code>在开发模式下可用，但可以通过特定的构建版本在生产环境中进行性能分析。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/React提升/React.Profiler.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const React_Profiler_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "React.Profiler.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/React%E6%8F%90%E5%8D%87/React.Profiler.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"React React.Profiler","slug":"react-react-profiler","link":"#react-react-profiler","children":[{"level":3,"title":"1. 基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]},{"level":3,"title":"2. onRender 回调","slug":"_2-onrender-回调","link":"#_2-onrender-回调","children":[]},{"level":3,"title":"3. 性能分析","slug":"_3-性能分析","link":"#_3-性能分析","children":[]},{"level":3,"title":"4. 避免过度使用","slug":"_4-避免过度使用","link":"#_4-避免过度使用","children":[]},{"level":3,"title":"5. 与 Developer Tools 结合","slug":"_5-与-developer-tools-结合","link":"#_5-与-developer-tools-结合","children":[]},{"level":3,"title":"6. 使用场景","slug":"_6-使用场景","link":"#_6-使用场景","children":[]},{"level":3,"title":"7. 性能优化","slug":"_7-性能优化","link":"#_7-性能优化","children":[]},{"level":3,"title":"8. 组件图","slug":"_8-组件图","link":"#_8-组件图","children":[]},{"level":3,"title":"9. 交互跟踪","slug":"_9-交互跟踪","link":"#_9-交互跟踪","children":[]},{"level":3,"title":"10. 生产环境分析","slug":"_10-生产环境分析","link":"#_10-生产环境分析","children":[]}]}],"git":{"updatedTime":1728487189000,"contributors":[{"name":"OnionTin]","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"web/React/React提升/React.Profiler.md","excerpt":"<!-- @format -->\\n<h2>React <code>React.Profiler</code></h2>\\n<p><code>React.Profiler</code> 是 React 提供的一个用于性能分析的工具，它可以帮助开发者测量 React 组件渲染的性能。</p>\\n<h3>1. 基本使用</h3>\\n<p><code>Profiler</code>组件可以被添加到 React 树中的任何位置，用于测量该部分树的渲染性能。</p>\\n<div class=\\"language-jsx\\" data-ext=\\"jsx\\" data-title=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Profiler</span></span>\\n  <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>App<span class=\\"token punctuation\\">\\"</span></span>\\n  <span class=\\"token attr-name\\">onRender</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>onRender<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n  </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">App</span></span> <span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token plain-text\\">\\n</span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span><span class=\\"token class-name\\">Profiler</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre></div>"}');
export {
  React_Profiler_html as comp,
  data
};
