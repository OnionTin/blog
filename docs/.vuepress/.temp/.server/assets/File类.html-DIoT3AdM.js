import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.Bl4XAEYy.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="file-类" tabindex="-1"><a class="header-anchor" href="#file-类"><span>File 类</span></a></h2><p>需要导包，在 java.io 下</p><p>什么是 File 类？</p><p>代表文件或者文件夹(目录)类，也就是说将文件或者文件夹，通过 File 类封装成对象。</p><h3 id="常见的构造方法" tabindex="-1"><a class="header-anchor" href="#常见的构造方法"><span>常见的构造方法</span></a></h3><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public File(String pathname)</td><td>将给定的路径转换为 File 实例</td></tr><tr><td>public File(String parent, String child)</td><td>通过父路径和子路径创建新的 File 实例</td></tr><tr><td>public File(File parent, String child)</td><td>通过父路径和子路径创建新的 File 实例</td></tr></tbody></table><h3 id="常见的成员方法" tabindex="-1"><a class="header-anchor" href="#常见的成员方法"><span>常见的成员方法</span></a></h3><ol><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`创建`);
      } else {
        return [
          createTextVNode("创建")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public boolean createNewFile()</td><td>创建文件</td></tr><tr><td>public boolean mkdir()</td><td>创建文件夹，只能创建一级</td></tr><tr><td>public boolean mkdirs()</td><td>创建文件夹，可以创建多级</td></tr></tbody></table><ol start="2"><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`删除`);
      } else {
        return [
          createTextVNode("删除")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><ul><li>如果要删除的文件夹里边有子文件或者子文件夹，需要先删除子文件或文件夹，再删除该文件夹</li><li>通过 delete()删除时，被删除文件或者文件夹，不会进入电脑的回收站</li></ul><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public boolean delete()</td><td>删除文件或者文件夹</td></tr></tbody></table><ol start="3"><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`判断`);
      } else {
        return [
          createTextVNode("判断")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public boolean exists()</td><td>判断是否存在</td></tr><tr><td>public boolean isDirectory()</td><td>判断是否是文件夹</td></tr><tr><td>public boolean isFile()</td><td>判断是否是文件</td></tr></tbody></table><ol start="4"><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`获取`);
      } else {
        return [
          createTextVNode("获取")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public long length()</td><td>获取<code>文件</code>中的字节数</td></tr><tr><td>public String getName()</td><td>获取名称</td></tr><tr><td>public String getPath()</td><td>获取路径</td></tr><tr><td>public String getAbsolutePath()</td><td>获取绝对路径</td></tr><tr><td>public File getParentFile()</td><td>获取上级目录的 File 对象</td></tr><tr><td>public File[] listFiles()</td><td>获取目录中所有的子文件和子文件夹</td></tr></tbody></table><ol start="5"><li>`);
  _push(ssrRenderComponent(_component_font, { color: "red" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`重命名`);
      } else {
        return [
          createTextVNode("重命名")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ol><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>public boolean renameTo(File dest)</td><td>把文件重命名为指定的文件路径，就是文件名称的修改</td></tr></tbody></table><h3 id="递归删除文件夹-aaa" tabindex="-1"><a class="header-anchor" href="#递归删除文件夹-aaa"><span>递归删除文件夹 aaa</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token constant">IO</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoFile</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递归删除</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">delete</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">File</span> f <span class="token operator">:</span> files<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 如果是文件夹，需要重新调用方法</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">delete</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// 如果是文件，就直接删除</span>
                f<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 最后，删除aaa这个根文件夹，没有文件了，可以直接删除</span>
            file<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归获取-aaa-目录下的所有-java-文件" tabindex="-1"><a class="header-anchor" href="#递归获取-aaa-目录下的所有-java-文件"><span>递归获取 aaa 目录下的所有.java 文件</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token constant">IO</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoFile</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 递归获取aaa目录下的所有.java文件</span>
        <span class="token class-name">File</span> getJavas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">print</span><span class="token punctuation">(</span>getJavas<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">File</span> file<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> files <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">File</span> f <span class="token operator">:</span> files<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 如果是文件夹，再遍历</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">print</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// 如果是文件，判断是否是java类型的文件</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;.java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他方法的使用" tabindex="-1"><a class="header-anchor" href="#其他方法的使用"><span>其他方法的使用</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wuziqi<span class="token punctuation">.</span>gobang<span class="token punctuation">.</span></span><span class="token constant">IO</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoFile</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 文件对象</span>
        <span class="token comment">// public File(String pathname)：将给定的路径转换为 File 实例</span>
        <span class="token class-name">File</span> file1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file1<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public File(String parent, String child)：通过父路径和子路径创建 File实例</span>
        <span class="token class-name">File</span> file2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\subMulu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file2<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public File(File parent, String child)：通过父路径和子路径创建 File实例</span>
        <span class="token class-name">File</span> parentDir <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\subMulu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> file3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>parentDir<span class="token punctuation">,</span> <span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file3<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 创建</span>
        <span class="token comment">// public boolean createNewFile()：创建文件</span>
        <span class="token class-name">File</span> newFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isCreated <span class="token operator">=</span> newFile<span class="token punctuation">.</span><span class="token function">createNewFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件是否创建成功：&quot;</span> <span class="token operator">+</span> isCreated<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public boolean mkdir()：创建文件夹，只能创建一级</span>
        <span class="token class-name">File</span> folder1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isFolderCreated1 <span class="token operator">=</span> folder1<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件夹是否创建成功：&quot;</span> <span class="token operator">+</span> isFolderCreated1<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public boolean mkdirs()：创建文件夹，可以创建多级</span>
        <span class="token class-name">File</span> multiLevelFolder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\subMulu1\\\\subMulu2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isMultiFolderCreated <span class="token operator">=</span> multiLevelFolder<span class="token punctuation">.</span><span class="token function">mkdirs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;多级文件夹是否创建成功：&quot;</span> <span class="token operator">+</span> isMultiFolderCreated<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 删除</span>
        <span class="token comment">// public boolean delete()：删除文件或者文件夹</span>
        <span class="token class-name">File</span> fileToDelete <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isDeleted <span class="token operator">=</span> fileToDelete<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件或文件夹是否删除成功：&quot;</span> <span class="token operator">+</span> isDeleted<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 判断</span>
        <span class="token comment">// public boolean exists()：判断是否存在</span>
        <span class="token class-name">File</span> checkFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> doesExist <span class="token operator">=</span> checkFile<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件或文件夹是否存在：&quot;</span> <span class="token operator">+</span> doesExist<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public boolean isDirectory() // 判断是否是文件夹</span>
        <span class="token class-name">File</span> directoryCheck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isADirectory <span class="token operator">=</span> directoryCheck<span class="token punctuation">.</span><span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否为文件夹：&quot;</span> <span class="token operator">+</span> isADirectory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public boolean isFile()：判断是否是文件</span>
        <span class="token class-name">File</span> fileCheck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isAFile <span class="token operator">=</span> fileCheck<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;是否为文件：&quot;</span> <span class="token operator">+</span> isAFile<span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// 获取</span>
        <span class="token comment">// public long length()：获取文件中的字节数</span>
        <span class="token class-name">File</span> existingFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> fileSizeInBytes <span class="token operator">=</span> existingFile<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件大小（字节）：&quot;</span> <span class="token operator">+</span> fileSizeInBytes<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public String getName()：获取名称</span>
        <span class="token class-name">File</span> fileNameExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> fileName <span class="token operator">=</span> fileNameExample<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件名：&quot;</span> <span class="token operator">+</span> fileName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// test.txt</span>

        <span class="token comment">// public String getPath()：获取路径(传什么获取什么)</span>
        <span class="token class-name">File</span> filePathExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> filePath <span class="token operator">=</span> filePathExample<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件路径：&quot;</span> <span class="token operator">+</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;C:\\mulu\\test.txt&quot;</span>

        <span class="token comment">// public String getAbsolutePath()：获取绝对路径(从盘符到文件名的整体)</span>
        <span class="token class-name">File</span> absPathExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> absPath <span class="token operator">=</span> absPathExample<span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件绝对路径：&quot;</span> <span class="token operator">+</span> absPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;C:\\mulu\\test.txt&quot;</span>

        <span class="token comment">// public File getParentFile()：获取上级目录的 File 对象</span>
        <span class="token class-name">File</span> parentDirExample <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\subMulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span> parentDirectory <span class="token operator">=</span> parentDirExample<span class="token punctuation">.</span><span class="token function">getParentFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;上级目录：&quot;</span> <span class="token operator">+</span> parentDirectory<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// public File[] listFiles()：获取目录中所有的子文件和子文件夹</span>
        <span class="token class-name">File</span> dirToList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">File</span><span class="token punctuation">[</span><span class="token punctuation">]</span> contents <span class="token operator">=</span> dirToList<span class="token punctuation">.</span><span class="token function">listFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>contents <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">File</span> content <span class="token operator">:</span> contents<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>


        <span class="token comment">// 修改</span>
        <span class="token comment">// public boolean renameTo(File dest)：</span>
        <span class="token comment">// 把文件重命名为指定的文件路径，就是文件名称的修改</span>
        <span class="token class-name">File</span> fileToRename <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\test.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> isRenamed <span class="token operator">=</span> fileToRename<span class="token punctuation">.</span><span class="token function">renameTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\mulu\\\\newTest.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;文件是否重命名成功：&quot;</span> <span class="token operator">+</span> isRenamed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/admin/Java/Java常用Api/File类.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const File__html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "File类.html.vue"]]);
const data = JSON.parse('{"path":"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/File%E7%B1%BB.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"File 类","slug":"file-类","link":"#file-类","children":[{"level":3,"title":"常见的构造方法","slug":"常见的构造方法","link":"#常见的构造方法","children":[]},{"level":3,"title":"常见的成员方法","slug":"常见的成员方法","link":"#常见的成员方法","children":[]},{"level":3,"title":"递归删除文件夹 aaa","slug":"递归删除文件夹-aaa","link":"#递归删除文件夹-aaa","children":[]},{"level":3,"title":"递归获取 aaa 目录下的所有.java 文件","slug":"递归获取-aaa-目录下的所有-java-文件","link":"#递归获取-aaa-目录下的所有-java-文件","children":[]},{"level":3,"title":"其他方法的使用","slug":"其他方法的使用","link":"#其他方法的使用","children":[]}]}],"git":{"updatedTime":1711099054000,"contributors":[{"name":"OnionTin","email":"2775376881@qq.com","commits":1}]},"filePathRelative":"admin/Java/Java常用Api/File类.md","excerpt":"<h2>File 类</h2>\\n<p>需要导包，在 java.io 下</p>\\n<p>什么是 File 类？</p>\\n<p>代表文件或者文件夹(目录)类，也就是说将文件或者文件夹，通过 File 类封装成对象。</p>\\n<h3>常见的构造方法</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>方法</th>\\n<th>作用</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>public File(String pathname)</td>\\n<td>将给定的路径转换为 File 实例</td>\\n</tr>\\n<tr>\\n<td>public File(String parent, String child)</td>\\n<td>通过父路径和子路径创建新的 File 实例</td>\\n</tr>\\n<tr>\\n<td>public File(File parent, String child)</td>\\n<td>通过父路径和子路径创建新的 File 实例</td>\\n</tr>\\n</tbody>\\n</table>"}');
export {
  File__html as comp,
  data
};
