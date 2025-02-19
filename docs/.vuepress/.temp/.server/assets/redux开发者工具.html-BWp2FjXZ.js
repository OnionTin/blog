import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="redux-开发者工具" tabindex="-1"><a class="header-anchor" href="#redux-开发者工具"><span>redux 开发者工具</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 引入createStore，专门用于创建redux中最为核心的store对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入为Count组件服务的reducer</span>
<span class="token keyword">import</span> countReducer <span class="token keyword">from</span> <span class="token string">&quot;./reducers/count&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入为Person组件服务的reducer</span>
<span class="token keyword">import</span> personReducer <span class="token keyword">from</span> <span class="token string">&quot;./reducers/person&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入redux-thunk，用于支持异步action</span>
<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&quot;redux-thunk&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入redux-devtools-extension</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> composeWithDevTools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;redux-devtools-extension&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 汇总所有的reducer变为一个总的reducer</span>
<span class="token keyword">const</span> allReducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">he</span><span class="token operator">:</span> countReducer<span class="token punctuation">,</span>
  <span class="token literal-property property">rens</span><span class="token operator">:</span> personReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 暴露store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  allReducer<span class="token punctuation">,</span>
  <span class="token function">composeWithDevTools</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/web/React/redux开发者工具.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const redux______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "redux开发者工具.html.vue"]]);
const data = JSON.parse('{"path":"/web/React/redux%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"redux 开发者工具","slug":"redux-开发者工具","link":"#redux-开发者工具","children":[]}],"git":{"updatedTime":1727684271000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":2}]},"filePathRelative":"web/React/redux开发者工具.md","excerpt":"<h2>redux 开发者工具</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 引入createStore，专门用于创建redux中最为核心的store对象</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> createStore<span class=\\"token punctuation\\">,</span> applyMiddleware<span class=\\"token punctuation\\">,</span> combineReducers <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"redux\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 引入为Count组件服务的reducer</span>\\n<span class=\\"token keyword\\">import</span> countReducer <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./reducers/count\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 引入为Person组件服务的reducer</span>\\n<span class=\\"token keyword\\">import</span> personReducer <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./reducers/person\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 引入redux-thunk，用于支持异步action</span>\\n<span class=\\"token keyword\\">import</span> thunk <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"redux-thunk\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 引入redux-devtools-extension</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> composeWithDevTools <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"redux-devtools-extension\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 汇总所有的reducer变为一个总的reducer</span>\\n<span class=\\"token keyword\\">const</span> allReducer <span class=\\"token operator\\">=</span> <span class=\\"token function\\">combineReducers</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">he</span><span class=\\"token operator\\">:</span> countReducer<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">rens</span><span class=\\"token operator\\">:</span> personReducer<span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 暴露store</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token function\\">createStore</span><span class=\\"token punctuation\\">(</span>\\n  allReducer<span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token function\\">composeWithDevTools</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">applyMiddleware</span><span class=\\"token punctuation\\">(</span>thunk<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}');
export {
  redux______html as comp,
  data
};
