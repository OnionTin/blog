import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h1><p>This is a normal page, which contains VuePress basics.</p><h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages"><span>Pages</span></a></h2><p>You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.</p><p>See <a href="https://vuejs.press/guide/page.html#routing" target="_blank" rel="noopener noreferrer">routing`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for more details.</p><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><p>Every markdown file <a href="https://vuejs.press/guide/page.html#content" target="_blank" rel="noopener noreferrer">will be rendered to HTML, then converted to a Vue SFC`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>.</p><p>VuePress support basic markdown syntax and <a href="https://vuejs.press/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">some extensions`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, you can also <a href="https://vuejs.press/guide/markdown.html#using-vue-in-markdown" target="_blank" rel="noopener noreferrer">use Vue features`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> in it.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>VuePress use a <code>.vuepress/config.js</code>(or .ts) file as <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">site configuration`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, you can use it to config your site.</p><p>For <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client side configuration`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, you can create <code>.vuepress/client.js</code>(or .ts).</p><p>Meanwhile, you can also add configuration per page with <a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">frontmatter`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>.</p><h2 id="layouts-and-customization" tabindex="-1"><a class="header-anchor" href="#layouts-and-customization"><span>Layouts and customization</span></a></h2><p>Here are common configuration controlling layout of <code>@vuepress/theme-default</code>:</p><ul><li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">navbar`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">sidebar`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><p>Check <a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">default theme docs`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> for full reference.</p><p>You can <a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">add extra style`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> with <code>.vuepress/styles/index.scss</code> file.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/get-started.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const getStarted_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "get-started.html.vue"]]);
const data = JSON.parse('{"path":"/get-started.html","title":"Get Started","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Pages","slug":"pages","link":"#pages","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Layouts and customization","slug":"layouts-and-customization","link":"#layouts-and-customization","children":[]}],"git":{"updatedTime":1710404435000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"get-started.md","excerpt":"\\n<p>This is a normal page, which contains VuePress basics.</p>\\n<h2>Pages</h2>\\n<p>You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.</p>\\n<p>See <a href=\\"https://vuejs.press/guide/page.html#routing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">routing</a> for more details.</p>"}');
export {
  getStarted_html as comp,
  data
};
