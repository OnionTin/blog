<template><div><h3 id="大数据学习路线图" tabindex="-1"><a class="header-anchor" href="#大数据学习路线图"><span>大数据学习路线图</span></a></h3>
<ol>
<li>java 基础</li>
<li>mysql</li>
<li>linux</li>
<li>hadoop（hive、sqoop、azkaban/oozie、flume）</li>
<li>scala</li>
<li>spark（core、sql、streaming、kafka）</li>
<li>flink</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token comment">// vscode 配置</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 终端配置</span>
  <span class="token property">"terminal.integrated.shell.windows"</span><span class="token operator">:</span> <span class="token string">"C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"</span><span class="token punctuation">,</span>

  <span class="token comment">// 文件自动保存配置</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"afterDelay"</span><span class="token punctuation">,</span> <span class="token comment">// 自动保存设置</span>
  <span class="token property">"files.autoSaveDelay"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 自动保存延迟时间（毫秒）</span>

  <span class="token comment">// Git 配置</span>
  <span class="token property">"git.autofetch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动获取git更新</span>
  <span class="token property">"git.enableSmartCommit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用智能提交</span>
  <span class="token property">"git.confirmSync"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 同步时不确认</span>
  <span class="token property">"git.openRepositoryInParentFolders"</span><span class="token operator">:</span> <span class="token string">"never"</span><span class="token punctuation">,</span> <span class="token comment">// 从不在父文件夹中打开仓库</span>

  <span class="token comment">// Github Gist 配置</span>
  <span class="token property">"GithubGistExplorer.explorer.gistSortBy"</span><span class="token operator">:</span> <span class="token string">"Last Updated"</span><span class="token punctuation">,</span> <span class="token comment">// Gist排序方式</span>
  <span class="token property">"GithubGistExplorer.explorer.gistAscending"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Gist排序顺序</span>
  <span class="token property">"GithubGistExplorer.explorer.subscriptionSortBy"</span><span class="token operator">:</span> <span class="token string">"Last Updated"</span><span class="token punctuation">,</span> <span class="token comment">// 订阅Gist排序方式</span>
  <span class="token property">"GithubGistExplorer.explorer.subscriptionAscending"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 订阅Gist排序顺序</span>

  <span class="token comment">// GitHub 趋势配置</span>
  <span class="token property">"vsc-github-trending.languages"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"react"</span><span class="token punctuation">,</span>
    <span class="token string">"electron"</span><span class="token punctuation">,</span>
    <span class="token string">"css"</span><span class="token punctuation">,</span>
    <span class="token string">"html"</span><span class="token punctuation">,</span>
    <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token string">"typescript"</span><span class="token punctuation">,</span>
    <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token string">"java"</span><span class="token punctuation">,</span>
    <span class="token string">"php"</span><span class="token punctuation">,</span>
    <span class="token string">"python"</span><span class="token punctuation">,</span>
    <span class="token string">"ruby"</span><span class="token punctuation">,</span>
    <span class="token string">"rust"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"vsc-github-trending.selectedInterval"</span><span class="token operator">:</span> <span class="token string">"daily"</span><span class="token punctuation">,</span> <span class="token comment">// GitHub趋势选择的时间间隔</span>
  <span class="token property">"vsc-github-trending.selectedLanguage"</span><span class="token operator">:</span> <span class="token string">"javascript,css,html,typescript,vue,react,electron"</span><span class="token punctuation">,</span> <span class="token comment">// GitHub趋势选择的语言</span>

  <span class="token comment">// 代码编辑配置</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 制表符大小</span>
  <span class="token property">"editor.detectIndentation"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不自动检测缩进</span>
  <span class="token property">"editor.suggest.preview"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 预览编辑器建议</span>
  <span class="token property">"editor.suggest.snippetsPreventQuickSuggestions"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 代码片段不阻止快速建议</span>

  <span class="token comment">// 文件关联配置</span>
  <span class="token property">"files.associations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.html"</span><span class="token operator">:</span> <span class="token string">"html"</span> <span class="token comment">// 将所有html文件关联到html语言</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// JavaScript 和 TypeScript 配置</span>
  <span class="token property">"js/ts.implicitProjectConfig.experimentalDecorators"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用实验性装饰器</span>

  <span class="token comment">// ESLint 和 Stylelint 配置</span>
  <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"javascript"</span><span class="token punctuation">,</span>
    <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>
    <span class="token string">"vue"</span><span class="token punctuation">,</span>
    <span class="token string">"typescript"</span><span class="token punctuation">,</span>
    <span class="token string">"typescriptreact"</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"html"</span><span class="token punctuation">,</span> <span class="token property">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token property">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"stylelint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"css"</span><span class="token punctuation">,</span> <span class="token string">"less"</span><span class="token punctuation">,</span> <span class="token string">"postcss"</span><span class="token punctuation">,</span> <span class="token string">"scss"</span><span class="token punctuation">,</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"sass"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 代码格式化配置</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 保存时不自动格式化</span>
  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span> <span class="token comment">// 默认格式化工具</span>
  <span class="token property">"[vue]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span> <span class="token comment">// Vue文件默认格式化工具</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[typescript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"hb432.prettier-eslint-typescript"</span> <span class="token comment">// TypeScript文件默认格式化工具</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"[html]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"vscode.html-language-features"</span> <span class="token comment">// HTML文件默认格式化工具</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll"</span><span class="token operator">:</span> <span class="token string">"never"</span><span class="token punctuation">,</span> <span class="token comment">// 保存时不自动修复</span>
    <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token string">"never"</span><span class="token punctuation">,</span> <span class="token comment">// ESLint不自动修复</span>
    <span class="token property">"source.fixAll.stylelint"</span><span class="token operator">:</span> <span class="token string">"never"</span> <span class="token comment">// Stylelint不自动修复</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 差异编辑器配置</span>
  <span class="token property">"diffEditor.ignoreTrimWhitespace"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 比较时忽略空白</span>

  <span class="token comment">// 其他配置</span>
  <span class="token property">"explorer.confirmDelete"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 删除文件时不确认</span>
  <span class="token property">"explorer.confirmPasteNative"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 粘贴时不确认</span>
  <span class="token property">"explorer.confirmDragAndDrop"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 拖拽时不确认</span>
  <span class="token property">"editor.fontLigatures"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不使用字体连字</span>

  <span class="token comment">// 背景配置</span>
  <span class="token property">"background.fullscreen"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"images"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"file:///D:/A-Folders/2-个人/百天照/6x6皮册/1030-百天照.jpg"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 全屏背景图片</span>
    <span class="token property">"opacity"</span><span class="token operator">:</span> <span class="token number">0.91</span><span class="token punctuation">,</span> <span class="token comment">// 背景透明度</span>
    <span class="token property">"size"</span><span class="token operator">:</span> <span class="token string">"cover"</span><span class="token punctuation">,</span> <span class="token comment">// 背景大小</span>
    <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span> <span class="token comment">// 背景位置</span>
    <span class="token property">"interval"</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// 背景切换间隔</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"background.style"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"background-position"</span><span class="token operator">:</span> <span class="token string">"100% 100%"</span><span class="token punctuation">,</span> <span class="token comment">// 背景位置</span>
    <span class="token property">"background-size"</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span> <span class="token comment">// 背景大小</span>
    <span class="token property">"opacity"</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token comment">// 背景透明度</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 隐私和语言配置</span>
  <span class="token property">"redhat.telemetry.enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用红帽遥测</span>
  <span class="token property">"Codegeex.Privacy"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用Codegeex隐私</span>
  <span class="token property">"Codegeex.Comment.LanguagePreference"</span><span class="token operator">:</span> <span class="token string">"中文"</span><span class="token punctuation">,</span> <span class="token comment">// Codegeex评论语言偏好设置为中文</span>

  <span class="token comment">// 错误提示配置</span>
  <span class="token property">"errorLens.exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"Option 'suppressImplicitAnyIndexErrors' is deprecated and will stop functioning in TypeScript 5\\.5\\. Specify compilerOption '\"ignoreDeprecations\": \"5\\.0\"' to silence this error\\."</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 彩虹括号配置</span>
  <span class="token property">"RainbowBrackets.depreciation-notice"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 彩虹括号弃用通知</span>

  <span class="token comment">// Codegeex许可证</span>
  <span class="token property">"Codegeex.License"</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token comment">// Codegeex许可证</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/database/1.jpg" alt="1"></p>
<p>在 VS Code 中开发 Vue 或 React 项目时，拥抱 TypeScript 的一些优秀插件包括：</p>
<p>Vetur：这是 Vue 2 的官方 VS Code 插件，提供语法高亮、代码片段、自动补全等功能，并且支持 TypeScript
。</p>
<p>Vue Language Features (Volar)：这是 Vue 3 的官方推荐插件，支持 TypeScript 并且提供 Vue 单文件组件中的 TypeScript 支持
。</p>
<p>TypeScript Vue Plugin (Volar)：这个插件提供了 Vue 单文件组件中的 TypeScript 支持，并且有跳转定义、类型检查等功能
。</p>
<p>TypeScript Import Sorter：这个插件可以自动帮助你排序 TypeScript 导入的模块
。</p>
<p>TypeScript Hero：可以帮助你快速重构 TypeScript 代码，包括重命名、提取函数等
。</p>
<p>ESLint：代码风格检查工具，可以通过配置文件自定义规则，支持 TypeScript
。</p>
<p>Prettier：代码格式化工具，可以根据配置格式化代码，让你的代码更加整洁易读，支持 TypeScript
。</p>
<p>Reactjs code snippets：为 React 开发提供代码片段，提高开发效率
。</p>
<p>JavaScript (ES6) code snippets：提供 ES6 代码片段，支持 TypeScript
。</p>
<p>Typescript React code snippets：提供 TypeScript 和 React 相关的代码片段
。</p>
<p>Vue VSCode Snippets：提供 Vue 代码片段，支持 Vue2 和 Vue3，可以快速生成代码
。</p>
<p>Vue Peek：快速定位 Vue 组件和模板
。</p>
<p>Auto Rename Tag：自动重命名匹配的 HTML 标签，支持 Vue 和 React
。</p>
<p>Bracket Pair Colorizer：给代码块的括号加上颜色，方便区分
。</p>
<p>Path Intellisense：自动提示文件路径和文件名，避免手动输入错误
。</p>
<p>Debugger for Chrome：在 VSCode 中调试 Vue 或 React 应用时需要使用的工具
。</p>
<p>这些插件可以帮助你在开发 Vue 或 React 项目时更好地利用 TypeScript，提高开发效率和代码质量。</p>
</div></template>


