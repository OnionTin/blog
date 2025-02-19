import{f as v,g as B,h as j,i as M,t as I,u as P,j as L,_ as F,o as m,c as d,k as U,v as O,a as b,n as S,l as f,F as C,m as k,p as y,q as D,s as q}from"./app-CilA4iky.js";const H=[{path:"/get-started.html",title:"Get Started",pathLocale:"/",contents:[{header:"Get Started",slug:"get-started",content:"This is a normal page, which contains VuePress basics."},{header:"Pages",slug:"pages",content:`You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.
See routing for more details.`},{header:"Content",slug:"content",content:`Every markdown file will be rendered to HTML, then converted to a Vue SFC.
VuePress support basic markdown syntax and some extensions, you can also use Vue features in it.`},{header:"Configuration",slug:"configuration",content:`VuePress use a .vuepress/config.js(or .ts) file as site configuration, you can use it to config your site.
For client side configuration, you can create .vuepress/client.js(or .ts).
Meanwhile, you can also add configuration per page with frontmatter.`},{header:"Layouts and customization",slug:"layouts-and-customization",content:`Here are common configuration controlling layout of @vuepress/theme-default: navbar
sidebar Check default theme docs for full reference.
You can add extra style with .vuepress/styles/index.scss file.`}]},{path:"/",title:"首页",pathLocale:"/",contents:[]},{path:"/database/database.html",title:"",pathLocale:"/",contents:[{header:"大数据学习路线图",slug:"大数据学习路线图",content:`java 基础
mysql
linux
hadoop（hive、sqoop、azkaban/oozie、flume）
scala
spark（core、sql、streaming、kafka）
flink // vscode 配置
{ // 终端配置 "terminal.integrated.shell.windows": "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe", // 文件自动保存配置 "files.autoSave": "afterDelay", // 自动保存设置 "files.autoSaveDelay": 1000, // 自动保存延迟时间（毫秒） // Git 配置 "git.autofetch": true, // 自动获取git更新 "git.enableSmartCommit": true, // 启用智能提交 "git.confirmSync": false, // 同步时不确认 "git.openRepositoryInParentFolders": "never", // 从不在父文件夹中打开仓库 // Github Gist 配置 "GithubGistExplorer.explorer.gistSortBy": "Last Updated", // Gist排序方式 "GithubGistExplorer.explorer.gistAscending": false, // Gist排序顺序 "GithubGistExplorer.explorer.subscriptionSortBy": "Last Updated", // 订阅Gist排序方式 "GithubGistExplorer.explorer.subscriptionAscending": false, // 订阅Gist排序顺序 // GitHub 趋势配置 "vsc-github-trending.languages": [ "react", "electron", "css", "html", "javascript", "typescript", "vue", "java", "php", "python", "ruby", "rust" ], "vsc-github-trending.selectedInterval": "daily", // GitHub趋势选择的时间间隔 "vsc-github-trending.selectedLanguage": "javascript,css,html,typescript,vue,react,electron", // GitHub趋势选择的语言 // 代码编辑配置 "editor.tabSize": 2, // 制表符大小 "editor.detectIndentation": false, // 不自动检测缩进 "editor.suggest.preview": true, // 预览编辑器建议 "editor.suggest.snippetsPreventQuickSuggestions": false, // 代码片段不阻止快速建议 // 文件关联配置 "files.associations": { "*.html": "html" // 将所有html文件关联到html语言 }, // JavaScript 和 TypeScript 配置 "js/ts.implicitProjectConfig.experimentalDecorators": true, // 启用实验性装饰器 // ESLint 和 Stylelint 配置 "eslint.validate": [ "javascript", "javascriptreact", "vue", "typescript", "typescriptreact", { "language": "html", "autoFix": true }, { "language": "vue", "autoFix": true } ], "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"], // 代码格式化配置 "editor.formatOnSave": false, // 保存时不自动格式化 "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化工具 "[vue]": { "editor.defaultFormatter": "esbenp.prettier-vscode" // Vue文件默认格式化工具 }, "[typescript]": { "editor.defaultFormatter": "hb432.prettier-eslint-typescript" // TypeScript文件默认格式化工具 }, "[html]": { "editor.defaultFormatter": "vscode.html-language-features" // HTML文件默认格式化工具 }, "editor.codeActionsOnSave": { "source.fixAll": "never", // 保存时不自动修复 "source.fixAll.eslint": "never", // ESLint不自动修复 "source.fixAll.stylelint": "never" // Stylelint不自动修复 }, // 差异编辑器配置 "diffEditor.ignoreTrimWhitespace": false, // 比较时忽略空白 // 其他配置 "explorer.confirmDelete": false, // 删除文件时不确认 "explorer.confirmPasteNative": false, // 粘贴时不确认 "explorer.confirmDragAndDrop": false, // 拖拽时不确认 "editor.fontLigatures": false, // 不使用字体连字 // 背景配置 "background.fullscreen": { "images": ["file:///D:/A-Folders/2-个人/百天照/6x6皮册/1030-百天照.jpg"], // 全屏背景图片 "opacity": 0.91, // 背景透明度 "size": "cover", // 背景大小 "position": "center", // 背景位置 "interval": 0 // 背景切换间隔 }, "background.style": { "background-position": "100% 100%", // 背景位置 "background-size": "auto", // 背景大小 "opacity": 1 // 背景透明度 }, // 隐私和语言配置 "redhat.telemetry.enabled": true, // 启用红帽遥测 "Codegeex.Privacy": true, // 启用Codegeex隐私 "Codegeex.Comment.LanguagePreference": "中文", // Codegeex评论语言偏好设置为中文 // 错误提示配置 "errorLens.exclude": [ "Option 'suppressImplicitAnyIndexErrors' is deprecated and will stop functioning in TypeScript 5\\\\.5\\\\. Specify compilerOption '\\"ignoreDeprecations\\": \\"5\\\\.0\\"' to silence this error\\\\." ], // 彩虹括号配置 "RainbowBrackets.depreciation-notice": false, // 彩虹括号弃用通知 // Codegeex许可证 "Codegeex.License": "" // Codegeex许可证
} 在 VS Code 中开发 Vue 或 React 项目时，拥抱 TypeScript 的一些优秀插件包括：
Vetur：这是 Vue 2 的官方 VS Code 插件，提供语法高亮、代码片段、自动补全等功能，并且支持 TypeScript
。
Vue Language Features (Volar)：这是 Vue 3 的官方推荐插件，支持 TypeScript 并且提供 Vue 单文件组件中的 TypeScript 支持
。
TypeScript Vue Plugin (Volar)：这个插件提供了 Vue 单文件组件中的 TypeScript 支持，并且有跳转定义、类型检查等功能
。
TypeScript Import Sorter：这个插件可以自动帮助你排序 TypeScript 导入的模块
。
TypeScript Hero：可以帮助你快速重构 TypeScript 代码，包括重命名、提取函数等
。
ESLint：代码风格检查工具，可以通过配置文件自定义规则，支持 TypeScript
。
Prettier：代码格式化工具，可以根据配置格式化代码，让你的代码更加整洁易读，支持 TypeScript
。
Reactjs code snippets：为 React 开发提供代码片段，提高开发效率
。
JavaScript (ES6) code snippets：提供 ES6 代码片段，支持 TypeScript
。
Typescript React code snippets：提供 TypeScript 和 React 相关的代码片段
。
Vue VSCode Snippets：提供 Vue 代码片段，支持 Vue2 和 Vue3，可以快速生成代码
。
Vue Peek：快速定位 Vue 组件和模板
。
Auto Rename Tag：自动重命名匹配的 HTML 标签，支持 Vue 和 React
。
Bracket Pair Colorizer：给代码块的括号加上颜色，方便区分
。
Path Intellisense：自动提示文件路径和文件名，避免手动输入错误
。
Debugger for Chrome：在 VSCode 中调试 Vue 或 React 应用时需要使用的工具
。
这些插件可以帮助你在开发 Vue 或 React 项目时更好地利用 TypeScript，提高开发效率和代码质量。`}]},{path:"/nvm/nvm.html",title:"",pathLocale:"/",contents:[{header:"nvm",slug:"nvm",content:""},{header:"1.下载",slug:"_1-下载",content:`下载 nvm 安装包
官网`},{header:"2.卸载 Node",slug:"_2-卸载-node",content:""},{header:"3. 安装 Nvm",slug:"_3-安装-nvm",content:""},{header:"4. 配置镜像",slug:"_4-配置镜像",content:`找到 nvm 安装路径 -> 找到 settings.txt 文件 -> 添加下载源 node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/`},{header:"安装 Node",slug:"安装-node",content:"nvm install 18.xxx"},{header:"查看已安装的 Node 版本",slug:"查看已安装的-node-版本",content:`nvm ls
node -v`},{header:"使用 Node",slug:"使用-node",content:"nvm use 18.xxx"},{header:"Nvm 相关命令",slug:"nvm-相关命令",content:`命令
作用 nvm list
查看已经安装的版本 nvm list installed
查看已经安装的版本 nvm list available
查看网络可以安装的版本 nvm arch
查看当前的系统位数和当前 nodejs 的位数 nvm install [arch]
安装制定版本的 node 并且可以指定平台 version 版本号 arch 平台 nvm on
打开 nodejs 版本控制 nvm off
关闭 nodejs 版本控制 nvm proxy [url]
查看和设置代理 nvm node_mirror [url]
设置或者查看 setting.txt 中的 node_mirror，如果不设置的默认是 https://nodejs.org/dist/ nvm npm_mirror [url]
设置或者查看 setting.txt 中的 npm_mirror,如果不设置的话默认的是：https://github.com/npm/npm/archive/. nvm uninstall [version]
卸载指定的版本 nvm use [version] [arch]
切换指定的 node 版本和位数 nvm root [path]
设置和查看 root 路径 nvm version
查看当前的版本 nvm install-latest-npm
安装最新的 npm nvm install-latest-ctags
安装最新的 ctags nvm reinstall-packages [version]
重新安装指定的 npm 包 nvm unload
卸载 nvm`},{header:"环境配置",slug:"环境配置",content:""}]},{path:"/posts/archive1.html",title:"Archive Article1",pathLocale:"/",contents:[{header:"Archive Article1",slug:"archive-article1",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/archive2.html",title:"Archive Article2",pathLocale:"/",contents:[{header:"Archive Article2",slug:"archive-article2",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article1.html",title:"Article 1",pathLocale:"/",contents:[{header:"Article 1",slug:"article-1",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article10.html",title:"Article 10",pathLocale:"/",contents:[{header:"Article 10",slug:"article-10",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article11.html",title:"Article 11",pathLocale:"/",contents:[{header:"Article 11",slug:"article-11",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article12.html",title:"Article 12",pathLocale:"/",contents:[{header:"Article 12",slug:"article-12",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article2.html",title:"Article 2",pathLocale:"/",contents:[{header:"Article 2",slug:"article-2",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article3.html",title:"Article 3",pathLocale:"/",contents:[{header:"Article 3",slug:"article-3",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article4.html",title:"Article 4",pathLocale:"/",contents:[{header:"Article 4",slug:"article-4",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article5.html",title:"Article 5",pathLocale:"/",contents:[{header:"Article 5",slug:"article-5",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article6.html",title:"Article 6",pathLocale:"/",contents:[{header:"Article 6",slug:"article-6",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article7.html",title:"Article 7",pathLocale:"/",contents:[{header:"Article 7",slug:"article-7",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article8.html",title:"Article 8",pathLocale:"/",contents:[{header:"Article 8",slug:"article-8",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/article9.html",title:"Article 9",pathLocale:"/",contents:[{header:"Article 9",slug:"article-9",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/sticky.html",title:"Sticky Article",pathLocale:"/",contents:[{header:"Sticky Article",slug:"sticky-article",content:""},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/posts/sticky2.html",title:"Sticky Article with Higher Priority",pathLocale:"/",contents:[{header:"Sticky Article with Higher Priority",slug:"sticky-article-with-higher-priority",content:"Excerpt information which is added manually."},{header:"Heading 2",slug:"heading-2",content:"Here is the content."},{header:"Heading 3",slug:"heading-3",content:"Here is the content."}]},{path:"/ui/ui.html",title:"",pathLocale:"/",contents:[{header:"Ui 设计网站积累",slug:"ui-设计网站积累",content:""},{header:"设计相关",slug:"设计相关",content:`即时设计
ui 设计素材导航
ui 设计网站导航
蓝湖`},{header:"Css",slug:"css",content:`Animista 动画库
Icônes
uiverse
NavNav`},{header:"素材网站",slug:"素材网站",content:`站酷
千库网
菜鸟图库
花瓣网
专属设计师导航-甲方叭叭
uistore 免费素材下载
GSAP`}]},{path:"/admin/Java/",title:"",pathLocale:"/",contents:[{header:"java",slug:"java",content:"java 部分包括 java 基础"}]},{path:"/admin/Node/",title:"",pathLocale:"/",contents:[]},{path:"/admin/Python/",title:"",pathLocale:"/",contents:[]},{path:"/web/React/BrowserRouter.html",title:"",pathLocale:"/",contents:[{header:"BrowserRouter(利用 h5 Api 实现路由切换)",slug:"browserrouter-利用-h5-api-实现路由切换",content:"BrowserRouter 是 React Router 库中的一个组件，用于在 React 应用程序中创建单页面应用程序（SPA）的路由。它使用 HTML5 的 history API 来实现页面的导航，不会触发页面的重新加载。"},{header:"特点",slug:"特点",content:`无需刷新：利用 history API 的 pushState 和 replaceState 方法，实现无刷新的路由切换。
动态路由匹配：可以动态地匹配 URL 路径，并渲染对应的组件。
嵌套路由：支持嵌套路由，方便创建复杂的页面结构。
链接（Link）组件：提供了 <Link> 组件，用于创建可导航的链接，与普通 <a> 标签不同，它不会重新加载页面。`},{header:"安装",slug:"安装",content:`使用 npm 或 yarn 安装 React Router： npm install react-router-dom
# 或者
yarn add react-router-dom`},{header:"使用",slug:"使用",content:`在应用程序中，BrowserRouter 通常包裹在根组件之外，作为应用的顶层路由 import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"; function App() { return ( <BrowserRouter> <div> <nav> <Link to="/">Home</Link> |<Link to="/about">About</Link> | <Link to="/contact">Contact</Link> </nav> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/contact" element={<Contact />} /> </Routes> </div> </BrowserRouter> );
} ReactDOM.render(<App />, document.getElementById("root"));`},{header:"组件",slug:"组件",content:`BrowserRouter：用于创建一个单页面应用程序的路由。
Routes：一个容器组件，用于包裹多个 Route 组件。
Route：定义路由规则，当路径匹配时，渲染对应的组件。
Link：用于创建导航链接，点击时不会重新加载页面。`}]},{path:"/web/React/context.html",title:"",pathLocale:"/",contents:[{header:"context",slug:"context",content:""}]},{path:"/web/React/HashRouter.html",title:"",pathLocale:"/",contents:[{header:"HashRouter(利用 hash 实现路由切换)",slug:"hashrouter-利用-hash-实现路由切换",content:"HashRouter 是 React Router v6 中用于在 Web 浏览器中创建路由的组件之一，特别适合在不支持或不需要使用 HTML5 History API 的情况下使用。它通过 URL 的 hash（即 URL 中 # 后面的部分）来管理路由状态，这意味着路由路径不会发送到服务器。"},{header:"特点",slug:"特点",content:`无服务器依赖：HashRouter 不依赖服务器配置，适用于那些你无法控制服务器配置的情况。
简单易用：只需将应用包裹在 HashRouter 组件内，即可实现路由功能。
兼容性好：几乎所有浏览器都支持 URL hash，因此 HashRouter 在浏览器兼容性方面表现良好。`},{header:"安装",slug:"安装",content:`使用 npm 或 yarn 安装 React Router v6： npm install react-router-dom@6
# 或者
yarn add react-router-dom@6`},{header:"使用",slug:"使用",content:`在应用的顶层组件中使用 HashRouter： import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App"; ReactDOM.render( <HashRouter> <App /> </HashRouter>, document.getElementById("root")
);`},{header:"配置",slug:"配置",content:`basename：可以配置应用在 URL 中的基础路径。
window：默认使用当前页面的 window 对象，但也可以用于跟踪另一个窗口的 URL，例如 <iframe>。 function App() { return ( <HashRouter basename="/app"> <Routes> <Route path="/" element={<Home />} /> <Route path="about" element={<About />} /> </Routes> </HashRouter> );
}`},{header:"HashRouter 与 BrowserRouter 的比较",slug:"hashrouter-与-browserrouter-的比较",content:`BrowserRouter 使用 HTML5 的 History API 来管理路由状态，适用于需要与服务器配合的场景。
HashRouter 使用 URL 的 hash 部分来管理路由状态，适用于无法控制服务器配置的场景。
官方推荐，除非绝对必要，否则不要使用 HashRouter。
HashRouter 在刷新页面时可能会导致路由状态（如 state 参数）丢失。`}]},{path:"/web/React/jsx%E8%AF%AD%E6%B3%95%E8%A7%84%E5%88%99.html",title:"",pathLocale:"/",contents:[{header:"jsx 语法规则",slug:"jsx-语法规则",content:`定义虚拟 DOM 时，不要写引号。 标签中混入 JS 表达式时要用{}。 样式的类名指定不要用 class，要用 className。 内联样式，要用 style={{key:value}}的形式去写。 只有一个根标签 标签必须闭合 标签首字母 若小写字母开头，则将该标签转为 html 中同名元素，若 html 中无该标签对应的同名元素，
若大写字母开头,react 就去渲染对应的组件,若组件没有定义`}]},{path:"/web/React/lazyLoad.html",title:"",pathLocale:"/",contents:[{header:"lazyLoad",slug:"lazyload",content:""},{header:"路由组件的 lazyLoad",slug:"路由组件的-lazyload",content:`// 1.通过 React 的 lazy 函数配合 import()函数动态加载路由组件===>路由组件代码会被分开打包
const Login = lazy(() => import('@/pages/Login'));
// 2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义 loading 界面
<Suspense fallback={<h1>loading.....</h1>}> <Switch> <Route path="/xxx" component={Xxxx} /> <Redirect to="/login" /> </Switch>
</Suspense>`}]},{path:"/web/React/props%E5%92%8Cstate.html",title:"",pathLocale:"/",contents:[{header:"props 和 state",slug:"props-和-state",content:"在 React 中，数据可以通过属性（props）和状态（state）在组件之间传递和管理。"},{header:"props(只能父向子，子组件不可改)",slug:"props-只能父向子-子组件不可改",content:`Props 是组件间数据传递的主要方式。父组件可以向子组件传递数据，这些数据在子组件中通过 props 访问。Props 是只读的，子组件不能修改它们。 // 父组件
function ParentComponent() { const name = "John Doe"; return <ChildComponent name={name} />;
} // 子组件
function ChildComponent({ name }) { return <div>Hello, {name}!</div>;
}`},{header:"state(可变，组件内部管理)",slug:"state-可变-组件内部管理",content:`State 是组件内部管理数据的方式。State 可以在组件内部进行修改，并且修改后的状态会触发组件的重新渲染。 import React, { useState } from "react"; function CounterComponent() { const [count, setCount] = useState(0); const increment = () => { setCount(count + 1); }; return ( <div> <p>Count: {count}</p> <button onClick={increment}>Increment</button> {/* 等同 */} <button onClick={() => setCount(count + 1)}>Click me</button> </div> );
}`}]},{path:"/web/React/pureComponent.html",title:"",pathLocale:"/",contents:[{header:"pureComponent",slug:"purecomponent",content:""},{header:"Component 的 2 个问题",slug:"component-的-2-个问题",content:`只要执行setState()，即使不改变状态数据，组件也会重新 render（效率低）
只当前组件重新 render，就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据（效率低）`},{header:"效率高的做法",slug:"效率高的做法",content:"只有当组件的 state 或 props 数据发生改变时才重新 render()"},{header:"原因",slug:"原因",content:"Component 中的shouldComponentUpdate()总是返回 true"},{header:"解决",slug:"解决",content:""},{header:"1. 重写shouldComponentUpdate()方法",slug:"_1-重写shouldcomponentupdate-方法",content:"比较新旧 state 或 props 数据，如果有变化才返回 true，如果没有返回 false"},{header:"2. 使用PureComponent",slug:"_2-使用purecomponent",content:`PureComponent重写了shouldComponentUpdate()，只有 state 或 props 数据有变化才返回 true 注意: 只是进行 state 和 props 数据的浅比较，如果只是数据对象内部数据变了，返回 false
不要直接修改 state 数据，而是要产生新数据
项目中一般使用PureComponent来优化`}]},{path:"/web/React/react-css.html",title:"",pathLocale:"/",contents:[{header:"react-css",slug:"react-css",content:`styled-components: css in js 方式的一种;
antd 按需引入: 参照 antd 官网,3.xxx 版本的详细文档去一步步走即可;`},{header:"antd 样式自定义主题",slug:"antd-样式自定义主题",content:`// 在根目录下创建config-overrides.js // 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override( fixBabelImports("import", { libraryName: "antd", libraryDirectory: "es", style: "true", }), addLessLoader({ lessOptions: { javascriptEnabled: true, modifyVars: { "@primary-color": "green", }, }, })
);`}]},{path:"/web/React/react-dom.html",title:"",pathLocale:"/",contents:[{header:"react-dom",slug:"react-dom",content:`React 和 ReactDOM 是 React 技术栈中的核心库。React 提供了创建组件的 API 和维护状态的机制，而 ReactDOM 提供了将这些组件渲染到 DOM 的能力。它们共同为开发现代 web 应用提供了强大的基础。 ReactDOM 是一个用于将 React 组件渲染到 DOM 的库。它提供了一些方法，如 render、hydrate 和 unmountComponentAtNode 等，来与 DOM 进行交互。当组件的状态或者 props 发生变化时，ReactDOM 可以高效地更新 DOM。提供了与 DOM 交互的方法，如获取节点信息、添加事件监听器等。 import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; ReactDOM.render(<App />, document.getElementById("root"));`}]},{path:"/web/React/react-hooks.html",title:"",pathLocale:"/",contents:[{header:"react-hooks",slug:"react-hooks",content:"React 一直提倡使用函数组件，但是有一些功能只有类组件具备，比如函数组件没有实例，没有生命周期函数，而 React 16.8 提出的 Hooks 概念可以在不编写 Class 的情况下，使用 React 特性。凡是 use 开头的 React API 都是 Hooks。"},{header:"Hooks 使用的注意事项:",slug:"hooks-使用的注意事项",content:`只能在函数内部的最外层调用 Hook，且只能在 react 的函数组件中调用，不要在其他 javascript 函数中调用。
不要在循环，条件判断或者子函数中调用。
只有 Hook 的调用顺序保持一致，React 才能正确地将内部 state 和对应的 Hook 进行关联。
React Hooks 内部是链表结构的，如果不按照顺序书写或者某个 useState 没有执行，就会导致指针移动出错，数据存取出错。`},{header:"内置 Hooks 分类",slug:"内置-hooks-分类",content:`路由 Hooks 被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作。 Hooks
说明 useHistory
跳转路由 useLocation
得到 url 对象 useParams
得到 url 上的参数 状态 Hooks Hooks
说明 useState
useState 通过在函数组件里调用它来给组件添加一些内部 state(函数组件是没有 state 的,class 组件有)。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。 useReducer
状态管理 useSelector
子组件用来访问父组件 state 中的数据 useDispatch
子组件用来触发父组件 action 的函数 上下文 Hooks Hooks
说明 useContext
获取上下文 useReducerContext
获取上下文 useStoreContext
获取上下文 事件 Hooks Hooks
说明 useMemo
缓存计算结果 useCallback
缓存回调函数。与 useMemo 类似;useMemo 与 useCallback 相同，接收一个函数作为参数，也同样接收第二个参数作为依赖列表；useCallback 是对传过来的回调函数优化，返回的是一个函数。 useRef
用来获取 ref 绑定的 dom 对象,获取的对象只有个 current 属性，只在函数式组件用，与 createRef 的写法一致； useImperativeHandle
自定义暴露给父组件的实例值 useLayoutEffect
布局钩子，useLayoutEffect 有 DOM 操作的副作用,在 DOM 更新之后执行和 useEffet 类似，但是执行时机不同，useLayoutEffect 在 DOM 更新之后执行，useEffect 在 render 渲染结束后执行，也就是说 useLayoutEffect 比 useEffect 先执行，这是因为 DOM 更新之后，渲染才结束或者渲染还会结束。useLayoutEffect 执行比较 useEffect 快，useEffect 每次都是完整流程，而 useLayoutEffect 在 vdom 后先不渲染，先更新，最后只渲染一次。 副作用 Hooks Hooks
说明 useEffect
可以看作是 componentDidMount,componentDidUpdate,componentWillUnmount 三个的组合,这个函数就是用来处理"副作用"的, 举个通俗一点的例子, 假如感冒了本来吃点药就没事了, 但是吃了药发现身体过敏了,而这个"过敏"就是副作用。放到 React 中，本来只是想渲染 DOM 展示到页面上，但除了 DOM 之外还有数据，而这些数据必须从外部的数据源中获取，这个"获取外部数据源"的过程就是副作用。 useDeferredValue
延迟值钩子 useTransition
过渡钩子 其他 Hooks Hooks
说明 useDebugValue
调试钩子 useId
唯一 ID 钩子 useSyncExternalStore
同步外部存储钩子 useInsertionEffect
插入钩子`},{header:"useEffect",slug:"useeffect",content:'可以看作是 componentDidMount,componentDidUpdate,componentWillUnmount 三个的组合,这个函数就是用来处理"副作用"的, 举个通俗一点的例子, 假如感冒了本来吃点药就没事了, 但是吃了药发现身体过敏了,而这个"过敏"就是副作用。放到 React 中，本来只是想渲染 DOM 展示到页面上，但除了 DOM 之外还有数据，而这些数据必须从外部的数据源中获取，这个"获取外部数据源"的过程就是副作用。'},{header:"1. 不传递",slug:"_1-不传递",content:`useEffect 不传递第二个参数会导致每次渲染都会运行 useEffect。然后，当它运行时， 它获取数据并更新状态。然后，一旦状态更新，组件将重新呈现， 这将再次触发 useEffect，这就是问题所在。 useEffect(() => { console.log(props.number); setNumber(props.number);
}); //所有更新都执行`},{header:"2. 传递空数组",slug:"_2-传递空数组",content:`如果传递一个空数组作为第二个参数，useEffect 只会在组件挂载和卸载时运行一次。但是，当 props.number 改变时，它不会重新运行，因为 useEffect 的第二个参数没有包含 props.number。 useEffect(() => { console.log(props.number); setNumber(props.number);
}, []); //只在挂载和卸载时执行`},{header:"3. 传递一个值",slug:"_3-传递一个值",content:`useEffect(() => { undefined; console.log(count);
}, [count]); //count更新时执行`},{header:"4. 传递多个",slug:"_4-传递多个",content:`const Asynchronous: React.FC = ({ number }) => { const [number2, setNumber2] = useState(number); useEffect(() => { console.log(number); setNumber2(number); }, [number, setNumber2]); //监听 props 对象 number 的更改 //setNumber2 是 useState 返回的 setter,所以不会在每次渲染时重新创建它, //因此 effect 只会运行一次
};`},{header:"传递 props 的对象 传递的 useState 返回的 setter",slug:"传递-props-的对象-传递的-usestate-返回的-setter",content:""},{header:"return 方法",slug:"return-方法",content:`const timer = setInterval(() => { undefined; setCount(count + 1);
}, 1000);
// useEffect方法的第一个参数是一个函数，函数可以return一个方法，
//这个方法就是在组件销毁的时候会被调用
useEffect(() => { return () => { clearInterval(timer); };
}, []);`},{header:"useMemo",slug:"usememo",content:`useMemo 是用来缓存计算结果的，用来做缓存用。useMemo 使用场景，比如有两个变量（依赖项），只需要在其中一个变量变化时发生变化，否则拿缓存的值；或者其中另一个变量的变化不需要引起重新计算时使用。该属性类似于 vue 中的计算属性，有返回值。 const memoizedValue = useMemo(callback, array);
// callback是一个函数用于处理逻辑
// array 控制useMemo重新执行的数组，array改变时才会重新执行useMemo
// 不传数组，每次更新都会重新计算
// 空数组，只会计算一次
// 依赖对应的值当对应的值发生变化时才会重新计算(可以依赖另外一个useMemo 返回的值)
// useMemo的返回值是一个记忆值，是callback的返回值`},{header:"useState",slug:"usestate",content:`useState 通过在函数组件里调用它来给组件添加一些内部 state(函数组件是没有 state 的,class 组件有)。React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。 const [state, setState] = useState(initialState);
//state: 定义的状态
//setState: 更新状态的方法
//initialState: 初始状态`},{header:"useRef 和 useImperativeHandle 以及 React.forwardRef:",slug:"useref-和-useimperativehandle-以及-react-forwardref",content:`// 基于forwardRef实现ref转发，目的：获取子组件内部的某个元素… // 函数子组件内部，可以有自己的状态和方法了；
// 如何实现：基于forwardRef实现ref转发的同时，获取函数子组件内部的状态或者方法呢？useImperativeHandle const Child = React.forwardRef(function Child(props, ref) { let [text, setText] = useState("你好世界"); const submit = () => {}; useImperativeHandle(ref, () => { // 在这里返回的内容，都可以被父组件的REF对象获取到 return { text, submit }; }); return ( <div className="child-box"> <span>哈哈哈</span> </div> );
}); // 父组件
const Demo = function Demo() { let x = useRef(null); useEffect(() => { console.log(x.current); // 这里可以访问到Child组件内部的text和submit }, []); return ( <div className="demo"> <Child ref={x} /> </div> );
};`}]},{path:"/web/React/react-router.html",title:"",pathLocale:"/",contents:[{header:"react-router",slug:"react-router",content:"React Router 是一个标准的库，用于在 React 应用程序中实现路由功能。它允许你将 URL 路径与 React 组件关联起来，从而实现单页应用（SPA）的导航。"},{header:"安装 React Router",slug:"安装-react-router",content:`使用 npm 或 yarn 安装 React Router： npm install react-router-dom
# 或者
yarn add react-router-dom 组件名
作用 BrowserRouter
使用 HTML5 的 history API 来管理路由。 HashRouter
使用 URL 的 hash 部分（#）来管理路由。 Routes
包含多个 Route 组件，用于定义路由规则。 Route
定义单个路由规则。 Link
页面跳转,没有高亮的效果。 NavLink
页面跳转,可以实现高亮的效果 Outlet
嵌套路由, 在父级内用来占位, 显示子路由; useRoutes
动态路由,根据路由配置生成路由规则; Navigate
路由重定向; useNavigate
跳转并传值; useLocation
接收跳转传过来的值; useParams
获取路由参数; Switch 组件
路由中做单页面匹配 Redirect 组件
页面找不到，重定向`},{header:"BrowserRouter",slug:"browserrouter",content:`BrowserRouter 是 React Router 中最常用的组件，它使用 HTML5 的 history API 来管理路由。 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About"; function App() { return ( <Router> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> </Routes> </Router> );
}`},{header:"Routes 和 Route",slug:"routes-和-route",content:`在 React Router v6 中，Routes 和 Route 用于定义应用的路由结构。 import { Routes, Route } from "react-router-dom"; function App() { return ( <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> </Routes> );
}`},{header:"导航链接(Link、NavLink)",slug:"导航链接-link、navlink",content:`Link 组件用于在应用中创建导航链接。 import { Link } from "react-router-dom"; function Navigation() { return ( <nav> <Link to="/">Home</Link> <Link to="/about">About</Link> </nav> );
}`},{header:"嵌套路由(Outlet)",slug:"嵌套路由-outlet",content:`import { Outlet } from "react-router-dom"; function Dashboard() { return ( <div> <h2>Dashboard</h2> <Outlet /> {/* 这里将渲染嵌套的子路由 */} </div> );
}`},{header:"Navigate",slug:"navigate",content:`Navigate 组件用于重定向到另一个路由。 import { Navigate } from "react-router-dom"; function App() { return ( <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/dashboard" element={<Navigate to="/about" />} /> </Routes> );
}`},{header:"useRoutes",slug:"useroutes",content:`useRoutes 是 React Router v6 中新增的一个 Hook，用于定义路由结构。 import { useRoutes } from "react-router-dom"; function App() { const routes = useRoutes([ { path: "/", element: <Home /> }, { path: "/about", element: <About /> }, { path: "/dashboard", element: <Dashboard /> }, ]); return routes;
}`},{header:"useNavigate",slug:"usenavigate",content:`useNavigate 用来跳转页面并传递参数。 import { useNavigate } from "react-router-dom"; function App() { const navigate = useNavigate(); function handleClick() { navigate("/about", { state: { from: "App" } }); } return <button onClick={handleClick}>Go to About</button>;
}`},{header:"useLocation 获取信息",slug:"uselocation-获取信息",content:`使用 useLocation 来获取当前的路径信息和跳转传过来的值。 import { useLocation } from "react-router-dom"; function App() { const location = useLocation(); console.log(location.pathname); // 获取当前路径 console.log(location.state); // 获取跳转传过来的值 return <div>App</div>;
}`},{header:"动态路由",slug:"动态路由",content:`动态路由允许你匹配 URL 中的参数。 import { useParams } from "react-router-dom"; const User = () => { const { userId } = useParams(); return <div>User ID: {userId}</div>;
};`},{header:"Switch 组件",slug:"switch-组件",content:`Switch 用来路由中做单独匹配(模糊匹配时，从上到下只匹配一个路由)，提高效率。 import { Switch, Route } from "react-router-dom"; function App() { return ( <Switch> <Route path="/about" element={<About />} /> <Route path="/dashboard" element={<Dashboard />} /> <Route path="/" element={<Home />} /> </Switch> );
}`},{header:"exact 属性",slug:"exact-属性",content:`Switch 组件中的 Route 可以添加 exact 属性，表示精确匹配。 import { Switch, Route } from "react-router-dom"; function App() { return ( <Switch> <Route exact path="/" element={<Home />} /> <Route exact path="/about" element={<About />} /> </Switch> );
}`},{header:"Redirect 组件",slug:"redirect-组件",content:`Redirect 组件用于重定向到另一个路由。 import { Redirect } from "react-router-dom"; function App() { return ( <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/dashboard" element={<Redirect to="/about" />} /> {/* 放到页面最下方，当所有路由都无法匹配时，跳转到Redirect指定的页面 */} <Redirect to="/404" /> </Routes> );
}`},{header:"路由守卫",slug:"路由守卫",content:`在 React Router v6 中，可以使用 useNavigate 和 useLocation 来实现路由守卫。 import { useNavigate, useLocation } from "react-router-dom"; function PrivateRoute() { const navigate = useNavigate(); const location = useLocation(); useEffect(() => { const isAuthenticated = checkAuthentication(); // 自定义认证函数 if (!isAuthenticated) { navigate("/login", { state: { from: location } }); } }, [navigate, location]); return <Outlet />;
}`},{header:"路由懒加载",slug:"路由懒加载",content:`使用 React.lazy 和 Suspense 组件实现路由懒加载。 import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About")); function App() { return ( <Router> <Suspense fallback={<div>Loading...</div>}> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> </Routes> </Suspense> </Router> );
}`},{header:"一般组件与路由组件",slug:"一般组件与路由组件",content:`路由组件就会有 history 等属性, 一般组件属性为 undefined 属性名
路由组件
一般组件 history
有
无 location
有
无 match
有
无`},{header:"props",slug:"props",content:"父组件标签体内的内容,可以在子组件中的 props.childern 中找到(还有 to、title 等属性)"},{header:"路由传参",slug:"路由传参",content:""},{header:"params(props.match.params)",slug:"params-props-match-params",content:'// 传递params参数\n<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}> {msgObj.title}\n</Link>\n// 声明接收 params 参数\n<Route path="/home/message/detail/:id/:title" component={Detail} />'},{header:"search(props.location.search)",slug:"search-props-location-search",content:'// 传递search参数\n<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}> {msgObj.title}\n</Link>\n// 无需声明\n<Route path="/home/message/detail" component={Detail} />'},{header:"state(props.location.state)",slug:"state-props-location-state",content:`// 传递state参数
<Link to={{ path: "/home/message/detail", state: { id: msgObj.id, title: msgObj.title }
}}> {msgObj.title}
</Link>
// 无需声明
<Route path="/home/message/detail" component={Detail} />`},{header:"编程式路由跳转",slug:"编程式路由跳转",content:`就是 push 和 replace 用法，push 会记录路由记录, replace 是直接替换掉上一个记录。 在 React Router 中，可以通过 this.props.history 对象上的 API 来实现编程式路由导航。 API
作用 this.props.history.push()
跳转到指定路径，并添加一条新的历史记录 this.props.history.replace()
跳转到指定路径，并替换当前的历史记录 this.props.history.goBack()
返回到上一个路由 this.props.history.goForward()
前进到下一个路由 this.props.history.go(-2)
后退两步`},{header:"编程式路由跳转传参",slug:"编程式路由跳转传参",content:'replaceShow = (id, title) => { // replace跳转+携带params参数 this.props.history.replace(`/home/message/detail/${id}/${title}`); // replace跳转+携带search参数 this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`); // replace跳转+携带state参数 this.props.history.replace("/home/message/detail", { id, title });\n}; pushShow = (id, title) => { // push跳转+携带params参数 this.props.history.push(`/home/message/detail/${id}/${title}`); // push跳转+携带search参数 this.props.history.push(`/home/message/detail?id=${id}&title=${title}`); // push跳转+携带state参数 this.props.history.push("/abc", { id, title });\n};'},{header:"withRouter(仅适用于类组件)",slug:"withrouter-仅适用于类组件",content:'withRouter 是一个高阶组件，能够接收一般组件,并给一般组件加工上路由组件的属性，让一般组件也具备路由跳转的功能属性。 import React, { Component } from "react";\nimport { withRouter } from "react-router-dom"; class Header extends Component { // ... // 你可以在这里使用 this.props.history 等路由相关 API\n} export default withRouter(Header); // `withRouter` 可以加工一般组件，让一般组件具备路由组件所特有的 API\n// `withRouter` 的返回值是一个新组件'},{header:"多层路由样式丢失解决办法",slug:"多层路由样式丢失解决办法",content:`引入样式不写"./"， 写"/"(常用)
引入样式不写"./"， 写"%PUBLIC_URL%"(常用)
使用 HashRouter`}]},{path:"/web/React/react%E4%B8%AD%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"react 中事件处理",slug:"react-中事件处理",content:""},{header:"当事件绑定的元素正是你要操作的元素时",slug:"当事件绑定的元素正是你要操作的元素时",content:`可以省略 ref 绑定,通过 event.target 获取到当前元素(其实事件的触发是通过事件委托，委托元素的上级元素进行处理的，即冒泡) // 创建ref容器
myRef = React.createRef();
myRef2 = React.createRef(); // 展示左侧输入框的数据
showData = () => { alert(this.myRef.current.value);
}; // 展示右侧输入框的数据
showData2 = (event) => { alert(event.target.value);
}; render() { return ( <div> <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/> <button onClick={this.showData}>点我提示左侧的数据</button> <input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/> </div> );
}`},{header:"非受控组件",slug:"非受控组件",content:'点击 button 的时候会执行 handleSubmit 事件,但是事件是绑定在 form 上的,承接上面所说事件委托 // 创建组件\nclass Login extends React.Component { handleSubmit = (event) => { event.preventDefault(); // 阻止表单提交 const { username, password } = this; alert( `你输入的用户名是: ${username.value}, 你输入的密码是: ${password.value}` ); }; render() { return ( <form onSubmit={this.handleSubmit}> 用户名: <input ref={(c) => (this.username = c)} type="text" name="username" /> 密码: <input ref={(c) => (this.password = c)} type="password" name="password" /> <button>登录</button> </form> ); }\n}'},{header:"受控组件(推荐)",slug:"受控组件-推荐",content:`没有 ref, 尽量减少了 ref 绑定,提高效率; 事件的双向绑定 // 初始化状态
state = { username: '', // 用户名 password: '' // 密码
}; // 保存用户名到状态中
saveUsername = (event) => { this.setState({ username: event.target.value });
}; // 保存密码到状态中
savePassword = (event) => { this.setState({ password: event.target.value });
}; // 表单提交的回调
handleSubmit = (event) => { event.preventDefault(); // 阻止表单提交 const { username, password } = this.state; alert(\`你输入的用户名是: \${username}, 你输入的密码是: \${password}\`);
}; render() { return ( <form onSubmit={this.handleSubmit}> 用户名:<input onChange={this.saveUsername} type="text" name="username"/> 密码:<input onChange={this.savePassword} type="password" name="password"/> <button>登录</button> </form> );
}`},{header:"高阶组件-柯里化函数",slug:"高阶组件-柯里化函数",content:`([dataType]:因为字符串形式的不会转成相应的 key, 所以用[]包裹一下) // 初始化状态
state = { username: '', // 用户名 password: '' // 密码
}; // 保存表单数据到状态中
saveFormData = (dataType) => { return (event) => { this.setState({ [dataType]: event.target.value }); };
}; // 表单提交的回调
handleSubmit = (event) => { event.preventDefault(); // 阻止表单提交 const { username, password } = this.state; alert(\`你输入的用户名是: \${username}, 你输入的密码是: \${password}\`);
}; render() { return ( <form onSubmit={this.handleSubmit}> 用户名:<input onChange={this.saveFormData('username')} type="text" name="username"/> 密码:<input onChange={this.saveFormData('password')} type="password" name="password"/> <button>登录</button> </form> );
}`},{header:"高阶组件-不用柯里化函数()",slug:"高阶组件-不用柯里化函数",content:`直接在函数中调用,返回一个函数,再调用返回的函数,传入参数 // 保存表单数据到状态中
saveFormData = (dataType, event) => { this.setState({ [dataType]: event.target.value });
}; // 表单提交的回调
handleSubmit = (event) => { event.preventDefault(); // 阻止表单提交 const { username, password } = this.state; alert(\`你输入的用户名是: \${username}, 你输入的密码是: \${password}\`);
}; render() { return ( <form onSubmit={this.handleSubmit}> 用户名:<input onChange={event => this.saveFormData('username', event)} type="text" name="username"/> 密码:<input onChange={event => this.saveFormData('password', event)} type="password" name="password"/> <button>登录</button> </form> );
} // 渲染组件
ReactDOM.render(<Login />, document.getElementById('test'));`}]},{path:"/web/React/react%E4%B8%AD%E9%97%B4%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"react 中间件",slug:"react-中间件",content:`applyMiddleware: 将所有中间件组成一个数组，依次执行;
redux-thunk: redux-thunk 主要对异步运用中间件做一些处理，因为 reducer 应该是一个纯函数，不能有副作用，只能根据 action 对 state 进行更新，因此不能在此发出网络请求。那么借助 redux-thunk 来在发出 action 至 reducer 处理之间借助 middleware 来进行处理。
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; const store = createStore(rootReducer, applyMiddleware(thunk));
redux-promise: redux-promise 中间件可以将返回一个 Promise 的 action 的结果直接交给下一个中间件或者 reducer 处理，而不是 dispatch 一个 action 对象。
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise"; const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
redux-logger: redux-logger 中间件可以在控制台打印 action 和 state 的信息，方便调试。
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; const store = createStore(rootReducer, applyMiddleware(logger));
redux-devtools-extension: redux-devtools-extension 是一个调试工具，可以方便的查看 redux 的状态和 action 的变化。
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// composeWithDevTools是一个高阶函数，
// 用于将redux-devtools-extension和applyMiddleware组合在一起 const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);
redux-saga: redux-saga 是一个用于处理异步操作的中间件，它可以处理复杂的异步逻辑，并且可以方便的测试和维护。
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas"; const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
redux-actions: redux-actions 是一个用于简化 redux action 和 reducer 的库，它可以自动生成 action 和 reducer，减少代码量。
import { createStore, applyMiddleware } from "redux";
import { createActions, createReducer } from "redux-actions"; const { increment, decrement } = createActions({ INCREMENT: (amount = 1) => ({ amount }), DECREMENT: (amount = 1) => ({ amount }),
}); const reducer = createReducer(0, { [increment]: (state, action) => state + action.amount, [decrement]: (state, action) => state - action.amount,
});
const store = createStore(reducer, applyMiddleware(thunk));
redux-form: redux-form 是一个用于处理表单的库，它可以和 redux 结合使用，方便的维护表单的状态。
import { createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form"; const store = createStore( combineReducers({ form: formReducer, // other reducers }), applyMiddleware(thunk)
);
redux-observable: redux-observable 是一个用于处理异步操作的库，它可以和 redux 结合使用，方便的维护异步逻辑。
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epics"; const epicMiddleware = createEpicMiddleware();
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
redux-persist: redux-persist 是一个用于持久化 redux 状态的库，它可以和 redux 结合使用，方便的保存和恢复状态。
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// defaults to localStorage for web
import rootReducer from "./reducers"; const persistConfig = { key: "root", storage,
}; const persistedReducer = persistReducer(persistConfig, rootReducer); const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store); export { store, persistor };`}]},{path:"/web/React/react%E5%88%86%E5%B1%82.html",title:"",pathLocale:"/",contents:[{header:"react 分层",slug:"react-分层",content:`State: 数据状态
Reducer：纯函数，只承担计算 State 的功能，不合适承担其他功能，也承担不了，因为理论上，纯函数不能进行读写操作。
View：与 State 一一对应，可以看作 State 的视觉层，也不合适承担其他功能。
Action：存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作。`}]},{path:"/web/React/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",title:"",pathLocale:"/",contents:[{header:"React 组件生命周期详解",slug:"react-组件生命周期详解",content:""},{header:"类组件的生命周期",slug:"类组件的生命周期",content:""},{header:"创建阶段",slug:"创建阶段",content:`生命周期方法
描述 constructor()
构造函数，在组件实例创建时只调用一次，用于初始化组件。 render()
渲染方法，返回组件要渲染的内容。 componentDidMount()
组件挂载后调用，用于执行一些副作用操作，如数据请求、订阅事件等。`},{header:"更新阶段",slug:"更新阶段",content:`生命周期方法
描述 shouldComponentUpdate(nextProps, nextState)
在组件接收到新的 props 或 state 时调用，返回布尔值决定组件是否应该更新。 render()
在更新前调用，返回组件要渲染的内容。 componentDidUpdate(prevProps, prevState)
在更新后调用，可以执行副作用操作，如网络请求。`},{header:"渲染输出阶段",slug:"渲染输出阶段",content:`生命周期方法
描述 render()
渲染方法，返回组件要渲染的内容。 在创建和更新阶段都会被调用`},{header:"卸载阶段",slug:"卸载阶段",content:`生命周期方法
描述 componentWillUnmount()
在组件卸载（销毁）前调用，用于清理操作，如移除事件监听器。`},{header:"函数组件的生命周期",slug:"函数组件的生命周期",content:"在函数组件中，可以使用 Hooks 来模拟生命周期。"},{header:"创建阶段",slug:"创建阶段-1",content:`生命周期方法
描述 useState()
用于在函数组件中添加状态。 useEffect()
用于处理副作用，相当于类组件的 componentDidMount、componentDidUpdate 和 componentWillUnmount。`},{header:"更新阶段",slug:"更新阶段-1",content:`生命周期方法
描述 useState()
用于在函数组件中添加状态。 useEffect()
用于处理副作用，相当于类组件的 componentDidMount、componentDidUpdate 和 componentWillUnmount。`},{header:"卸载阶段",slug:"卸载阶段-1",content:`生命周期方法
描述 useEffect()
在组件卸载时调用，用于清理副作用，如取消订阅、清除定时器等。`},{header:"类组件详解",slug:"类组件详解",content:""},{header:"constructor生命周期：",slug:"constructor生命周期",content:`当 react 组件实例化时，是第一个运行的生命周期；
在这个生命周期中，不能使用 this.setState()；
在这个生命周期中，不能使用副作用(调接口、dom 操作、定时器、长连接等)；
不能把 props 和 state 交叉赋值；`},{header:"componentDidMount生命周期：",slug:"componentdidmount生命周期",content:`相当于是 vue 中的 mounted
它表示 DOM 结构在浏览器中渲染已完成；
在这里可以使用任何的副作用；`},{header:"shouldComponentUpdate(nextProps,nextState)生命周期：",slug:"shouldcomponentupdate-nextprops-nextstate-生命周期",content:`相当于一个开关，如果返回 true 则更新机制正常执行，如果为 false 则更新机制停止；
在 vue 中是没有的；
存在的意义：可以用于性能优化，但是不常用，最新的解决方案是使用 PureComponent；
理论上，这个生命周期的作用，用于精细地控制声明式变量的更新问题，如果变化的声明式变量参与了视图渲染则返回 true，如果被变化的声明式变量没有直接或间接参与视图渲染，则返回 false；`},{header:"componentDidUpdate生命周期：",slug:"componentdidupdate生命周期",content:`相当于 vue 中的 updated()；
它表示 DOM 结构渲染更新已完成，只发生在更新阶段；
在这里，可以执行大多数的副作用，但是不建议；
在这里，可以使用 this.setState()，但是要有终止条件判断；`},{header:"componentWillUnmount生命周期：",slug:"componentwillunmount生命周期",content:"一般在这里清除定时器、长连接等其他占用内存的构造器；"},{header:"render生命周期：",slug:"render生命周期",content:`render 是类组件中唯一必须有的生命周期，同时必须有 return（return 返回的 jsx 默认只能是单一根节点，但是在 fragment 的语法支持下，可以返回多个兄弟节点）；
Fragment 碎片写法: <React.Fragment></React.Fragment> 简写成<></>；
return 之前，可以做任意的业务逻辑，但是不能使用 this.setState()，会造成死循环；
render()在装载阶段和更新阶段都会运行；
当 render 方法返回 null 的时候，不会影响生命周期函数的正常执行。`},{header:"forceUpdate:",slug:"forceupdate",content:"页面强制更新,不经过 shouldComponentUpdate();"},{header:"componentWillReceiveProps:",slug:"componentwillreceiveprops",content:"在子组件内，将要接收 props 调用(第一次不会调用,更新后才开始调用，可以接收参数 props，参数是更新后的值);"},{header:"unmountComponentAtNode:",slug:"unmountcomponentatnode",content:"组件的卸载(ReactDom.unmountComponentAtNode(gocument.getElementById('...')));"},{header:"react 新的生命周期 - react-17.0.1 开始采用",slug:"react-新的生命周期-react-17-0-1-开始采用",content:`生命周期方法
描述 getDerivedStateFromProps()
在组件实例化后和接收到新的 props 或 state 时调用，用于更新 state。 getSnapshotBeforeUpdate()
在组件更新前调用，用于获取更新前的快照信息。`},{header:"常见的使用场景",slug:"常见的使用场景",content:`数据获取：通常在 componentDidMount 或 useEffect 中进行数据获取。
订阅：在 componentDidMount 或 useEffect 中订阅，然后在 componentWillUnmount 或 useEffect 的返回函数中取消订阅。
表单处理：使用 useState 来管理表单状态，使用 useEffect 来处理表单提交后的副作用。`},{header:"注意事项",slug:"注意事项",content:`尽量避免在 render 方法中执行重的计算或复杂的逻辑，因为这会在每次渲染时都执行。
尽量使用函数组件和 Hooks，因为它们更简洁，易于理解。`}]},{path:"/web/React/react%E7%B1%BB%E5%9E%8B%E6%A3%80%E6%9F%A5.html",title:"",pathLocale:"/",contents:[{header:"react 类型检查",slug:"react-类型检查",content:`基础数据类型: 类型
描述 PropTypes.array
检查数组 PropTypes.bool
检查布尔值 PropTypes.func
检查函数 PropTypes.number
检查数字 PropTypes.object
检查对象 PropTypes.string
检查字符串 PropTypes.symbol
检查符号 React 元素: 类型
描述 PropTypes.element
检查 React 元素 PropTypes.elementType
检查 React 元素类型 PropTypes.instanceOf(class)
检查是否是某个类的实例 其他类型: 类型
描述 PropTypes.node
检查任何可以被渲染的 React 元素 PropTypes.objectOf(type)
检查对象中的所有值是否是某个类型 PropTypes.shape(obj)
检查对象是否具有某些属性 PropTypes.any
检查任何类型 PropTypes.oneOf(values)
检查值是否在某个数组中 PropTypes.oneOfType(types)
检查值是否是某个类型的子类型`},{header:"arrOf 和 objectOf 多重嵌套类型检测",slug:"arrof-和-objectof-多重嵌套类型检测",content:`// An array of a certain type
optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
// An object with property values of a certain type
optionalObjectOf: PropTypes.objectOf(PropTypes.number),
//示例
static propTypes = { todoList:PropTypes.arrayOf(PropTypes.shape({ id:PropTypes.string.isRequired, text:PropTypes.string }))
}`},{header:"shape 检测不同对象的不同属性的不同数据类型:",slug:"shape-检测不同对象的不同属性的不同数据类型",content:`// An object taking on a particular shape
optionalObjectWithShape: PropTypes.shape({ optionalProperty: PropTypes.string, requiredProperty: PropTypes.number.isRequired
}),
//示例
static propTypes = { object:PropTypes.shape({ name:PropTypes.string, age:PropTypes.number })
}`}]},{path:"/web/React/react%E7%BB%84%E4%BB%B6%E4%BF%A1%E6%81%AF%E4%BC%A0%E9%80%92.html",title:"",pathLocale:"/",contents:[{header:"react 组件信息传递",slug:"react-组件信息传递",content:`（父组件）向（子组件）传递信息 : porps 传值
（父组件）向更深层的（子组件） 进行传递信息 : context
（子组件）向（父组件）传递信息：callback 事件
没有任何嵌套关系的组件之间传值（比如：兄弟组件之间传值）: 利用共同父组件 context 通信、自定义事件
利用 react-redux 进行组件之间的状态信息共享 : 组件间状态信息共享：redux、flux、mobx 等
发布订阅: 利用第三方库, PubSubJs`}]},{path:"/web/React/react%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",title:"",pathLocale:"/",contents:[{header:"React 组件通信",slug:"react-组件通信",content:""},{header:"组件间的关系:",slug:"组件间的关系",content:`父子组件
兄弟组件(非嵌套组件)
祖孙组件(跨级组件)`},{header:"几种通信方式:",slug:"几种通信方式",content:`props: children props
render props 消息订阅-发布: pubs-sub
event 等等 集中式管理: redux
dva 等等 conText: 生产者-消费者模式`},{header:"比较好的搭配方式:",slug:"比较好的搭配方式",content:`父子组件: props
兄弟组件: 消息订阅-发布、集中式管理
祖孙组件(跨级组件): 消息订阅-发布、集中式管理、conText(开发用的少,封装插件用的多)`}]},{path:"/web/React/react%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"react 高阶组件",slug:"react-高阶组件",content:"React.memo: 适用于函数组件，但不适用于 class 组件 React.memo()使用场景就是纯函数组件频繁渲染props; React.memo 仅检查 props 变更,且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染;其实就是在实现 shouldComponentUpdate 生命周期。 React.PureComponent: 在 class 组件中使用。 React.PureComponent 与 React.Component 唯一的区别在于 Rect.Component 没有实现 shouldComponentUpdate(), 而 React.PureComponent 中以浅层对比 props 和state 的方式来实现了该函数。 withRouter： withRouter的作用就是, 如果我们某个东西不是一个Router, 但是我们要依靠它去跳转一个页面。 比如点击页面的logo, 返回首页。, 这时候就可以使用withRouter来做.withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中。被 route 包裹的组件，可以直接使用 props 进行路由相关操作，但是没有被 route 包裹的组件只能用 withRouter 高阶组件修饰或者使用 hooks 进行操作"}]},{path:"/web/React/",title:"",pathLocale:"/",contents:[{header:"react",slug:"react",content:`react 和 vue 对比,细致全面
;`}]},{path:"/web/React/redux.html",title:"",pathLocale:"/",contents:[{header:"redux",slug:"redux",content:`名称
作用 createStore
用来将 state 存入 store; store.getState
获取状态; store.dispath(type, data):
触发的条件和值; store.subscribe
检测 store 中数据的变化后 render 页面; reducer(preSatate, action)：
处理状态的纯函数；传入之前的状态和一个对象, 返回一个新的状态； mapStateToProps
将 state 映射到 props; mapDispatchToProps
将 dispatch 映射到 props; Provider
向子组件暴漏数据(生产者); Consumer
接收父组件传值(消费者); connect
连接 react 和 redux; createContext
解决无需层级关系传递,Provider 传递,Consumer 接收; useContext
使用 useContext 接受上下文，因为传入的是对象，则接受的也应该是对象; combineReducers
合并 reducer; applyMiddleware
中间件; compose
组合函数; bindActionCreators
将 dispatch 和 actionCreator 绑定; redux-thunk
异步 action; redux-saga
异步 action; redux-promise
异步 action; 明确两个概念： UI 组件：不能使用任何 Redux 的 API，只负责页面的呈现和交互。
容器组件：负责与 Redux 通信，将结果传递给 UI 组件。 如何创建一个容器组件：
通过使用 react-redux 的 connect 函数。
connect 函数接受两个参数：mapStateToProps 和 mapDispatchToProps。
mapStateToProps：映射状态，用于将 Redux 的状态映射到 UI 组件的 props。
mapDispatchToProps：映射操作状态的方法，返回值是一个对象。
注意：
容器组件中的 store 是通过 props 传递进去的，而不是在容器组件中直接引入。 connect(参数, 方法)(UI 组件): 容器组件，用来链接 ui 组件和 redux 的，ui 组件只能用来展示，所以必须在外层包裹一个容器组件做数据的处理工作；(注意: 因为 react-redux 帮做处理了,所以 store 和其中的 state 和 dispatch 就可以直接拿到了) reducer 必须是纯函数，纯函数: redux 中数组的处理不能用 push 和 unshift 的原因，不是纯函数，改变了原来的数组的引用类型数组的指向，改变了原数组，不能用，所以只能用[...oldArr, data]；用[...oldArr],原本的 oldArr 没有改变。`},{header:"整体案例一",slug:"整体案例一",content:`import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"; // userStore
const userReducer = (state = { name: "张三" }, action) => { switch (action.type) { case "CHANGE_NAME": return { ...state, name: action.name }; default: return state; }
}; // bookStore
const bookReducer = (state = { name: "JavaScript 高级程序设计" }, action) => { switch (action.type) { case "CHANGE_BOOK": return { ...state, name: action.name }; default: return state; }
}; // 合并 reducer
const reducer = combineReducers({ user: userReducer, book: bookReducer,
}); // 中间件
const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger)); // UI 组件
class User extends React.Component { render() { const { name } = this.props; return <div>{name}</div>; }
} // 容器组件
const UserContainer = connect( (state) => ({ name: state.user.name }), // mapStateToProps (dispatch) => ({ changeName: (name) => dispatch({ type: "CHANGE_NAME", name }), }) // mapDispatchToProps
)(User); // UI 组件
class Book extends React.Component { render() { const { name } = this.props; return <div>{name}</div>; }
} // 容器组件
const BookContainer = connect( (state) => ({ name: state.book.name }), (dispatch) => ({ changeBook: (name) => dispatch({ type: "CHANGE_BOOK", name }), })
)(Book); // UI 组件
class App extends React.Component { render() { return ( <div> <UserContainer /> <BookContainer /> </div> ); }
} ReactDOM.render( <Provider store={store}> <App /> </Provider>, document.getElementById("root")
);`},{header:"整体案例二",slug:"整体案例二",content:`// UI组件
state = { carName: '奔驰c63' };
// 加法
increment = () => { const { value } = this.selectNumber; this.props.jia(value * 1);
};
// 减法
decrement = () => { const { value } = this.selectNumber; this.props.jian(value * 1);
};
// 奇数再加
incrementIfOdd = () => { const { value } = this.selectNumber;
};
// 异步加
incrementAsync = () => { const { value } = this.selectNumber;
};
render() { console.log('UI组件接收到的props是', this.props); return ( <div> <h1>当前求和为: {this.props.count}</h1> <select ref={c => this.selectNumber = c}> <option value="1">1</option> </select> </div> );
}
// 将UI组件与Redux连接
// 引入Count的UI组件
import CountUI from "../../components/Count";
// 引入redux的createStore函数，用于创建redux中最为核心的store对象
import { createIncrementAction } from "../../redux/count_action";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux"; // 函数返回的对象中的key就作为传递给UI组件props的key
// value就作为传递给UI组件props的value状态
function mapStateToProps(state) { return { count: state };
}
// 函数返回的对象中的key就作为传递给UI组件props的key
// value就作为传递给UI组件props的value操作
function mapDispatchToProps(dispatch) { return { jia: (number) => dispatch(createIncrementAction(number)), };
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
// 如何使用connect函数的简写形式来连接UI组件和Redux
export default connect( (state) => ({ count: state }), // mapDispatchToProps的一般写法 dispatch => ({ jia: number => dispatch(createIncrementAction(number)), jian: number => dispatch(createDecrementAction(number)), jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)), }) // mapDispatchToProps的简写 { jia: createIncrementAction, jian: createDecrementAction, jiaAsync: createIncrementAsyncAction, }
)(CountUI);`},{header:"纯函数",slug:"纯函数",content:`纯函数是一类特别的函数，它们必须遵守以下约束： 相同的输入总是得到相同的输出：只要是同样的输入（实参），必定得到同样的输出（返回）。
必须遵守的约束： 不得改写参数数据。
不会产生任何副作用，例如网络请求，输入和输出设备。
不能调用 Date.now() 或 Math.random() 等不纯的方法。 Redux 的 \`reducer\` 函数必须是一个纯函数。`},{header:"高阶函数",slug:"高阶函数",content:`高阶函数是一类特别的函数，它们可以： 参数是函数：接收一个或多个函数作为参数。
返回是函数：返回一个函数。
定时器设置函数：如 setTimeout 或 setInterval，它们的回调参数是一个函数。
数组的方法： forEach()
map()
filter()
reduce()
find()
bind()`}]},{path:"/web/React/redux%E5%92%8Chooks%E6%90%AD%E9%85%8D%E4%BD%BF%E7%94%A8%E6%B5%81%E7%A8%8B.html",title:"",pathLocale:"/",contents:[{header:"redux 和 hooks 搭配使用流程",slug:"redux-和-hooks-搭配使用流程",content:`【useState】-> 【useReducer】-> 【useSelector、useDispatch】 通过 useSelector、useDispatch 等方法,我们可以用 Hooks 方法完成 Redux 的功能,Hooks 和 Redux 之间没有替代关系,应该更好地共存和融合。
React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。`}]},{path:"/web/React/redux%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7.html",title:"",pathLocale:"/",contents:[{header:"redux 开发者工具",slug:"redux-开发者工具",content:`// 引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from "redux"; // 引入为Count组件服务的reducer
import countReducer from "./reducers/count"; // 引入为Person组件服务的reducer
import personReducer from "./reducers/person"; // 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk"; // 引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension"; // 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({ he: countReducer, rens: personReducer,
}); // 暴露store
export default createStore( allReducer, composeWithDevTools(applyMiddleware(thunk))
);`}]},{path:"/web/React/refEffect.html",title:"",pathLocale:"/",contents:[{header:"refEffect",slug:"refeffect",content:"RefHook 可以在函数组件中存储/查找组件内的标签或任意其它数据"},{header:"语法",slug:"语法",content:"const refContainer = useRef();"},{header:"作用",slug:"作用",content:"保存标签对象，功能与 React.createRef()一样"},{header:"使用",slug:"使用",content:`import React, { useRef, useEffect } from 'react'; function App() { const inputRef = useRef(); useEffect(() => { inputRef.current.focus(); }, []); return ( <div> <input ref={inputRef} type="text" /> </div> );
} export default App;`}]},{path:"/web/React/render%E5%92%8Cprops.html",title:"",pathLocale:"/",contents:[{header:"render 和 props",slug:"render-和-props",content:""},{header:"如何向组件内部动态传入带内容的结构(标签)?",slug:"如何向组件内部动态传入带内容的结构-标签",content:`Vue 中: 使用 slot 技术，也就是通过组件标签体传入结构 <A><B/></A> React 中: 使用 children props: 通过组件标签体传入结构
使用 render props: 通过组件标签属性传入结构，一般用 render 函数属性`},{header:"children props",slug:"children-props",content:`<A> <B>xxxx</B>
</A>;
{ this.props.children;
}
// 问题：如果B组件需要A组件内的数据，==>做不到`},{header:"render props",slug:"render-props",content:`<A render={(data) => <C data={data}></C>}></A>
// A组件: {this.props.render(内部state数据)}
// C组件: 读取A组件传入的数据显示 {this.props.data}`},{header:"案例",slug:"案例",content:`export default class Parent extends React.Component { render() { return ( <div className="parent"> <h3>Parent</h3> <A render={(name) => <C name={name}></C>}></A> </div> ); }
} class A extends React.Component { state = { name: 'tom' }; render() { console.log(this.props); const { name } = this.state; return ( <div className="a"> <h3>A</h3> {this.props.render(name)} </div> ); }
}`}]},{path:"/web/React/setState.html",title:"",pathLocale:"/",contents:[{header:"setState",slug:"setstate",content:"setState 触发更新是异步的，函数式的话在函数体内能够获取到最新的值"},{header:"setState 更新状态的 2 种写法",slug:"setstate-更新状态的-2-种写法",content:""},{header:"1. setState(stateChange,[callback]) ------对象式的 setState",slug:"_1-setstate-statechange-callback-对象式的-setstate",content:`stateChange 为状态改变对象(该对象可以体现出状态的更改)
callback 是可选的回调函数，它在状态更新完毕、界面也更新后(render 调用后)才被调用`},{header:"2. setState(updater,[callback])------函数式的 setState",slug:"_2-setstate-updater-callback-函数式的-setstate",content:`updater 为返回 stateChange 对象的函数。
updater 可以接收到 state 和 props。
callback 是可选的回调函数,它在状态更新、界面也更新后(render 调用后)才被调用。`},{header:"总结:",slug:"总结",content:`对象式的 setState 是函数式的 setState 的简写方式(语法糖) 使用原则:
(1). 如果新状态不依赖于原状态 ==> 使用对象方式
(2). 如果新状态依赖于原状态 ==> 使用函数方式
(3). 如果需要在 setState()执行后获取最新的状态数据，要在第二个 callback 函数中读取 state = { count: 0 }; add = () => { // 对象式的setState // 1. 获取原来的count值 const { count } = this.state; // 2. 更新状态 this.setState({ count: count + 1 }, () => { console.log(this.state.count); }); console.log('12行的输出', this.state.count); // 0 // 函数式的setState this.setState((state, props) => { return { count: state.count + 1 }; });
};`}]},{path:"/web/React/Suspense.html",title:"",pathLocale:"/",contents:[{header:"Suspense",slug:"suspense",content:"Suspense 是 React 的一个特性，它允许你在组件加载过程中显示一个备用内容（fallback）。这通常用于异步组件的加载，比如通过 React.lazy 动态导入的组件。"},{header:"特点",slug:"特点",content:`显示加载状态：在组件加载过程中展示备用内容，提高用户体验。
嵌套使用：可以在多个层级中使用，以控制更细粒度的加载状态。`},{header:"使用方法",slug:"使用方法",content:`包裹懒加载组件： import React, { Suspense, lazy } from "react"; const LazyComponent = lazy(() => import("./LazyComponent")); function MyComponent() { return ( <Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense> );
} 错误处理： Suspense 也可以用来处理异步加载过程中的错误。 <Suspense fallback={<div>Failed to load</div>}> <AsyncComponent />
</Suspense> 与 useTransition 结合： 在 React Router 中，Suspense 可以与 useTransition 结合使用，以实现更平滑的路由切换体验。 import { Suspense, lazy, useTransition } from "react"; const [isPending, startTransition] = useTransition(); startTransition(() => { lazy(() => import("./SomeComponent"));
}); function MyComponent() { return ( <Suspense fallback={<div>Loading...</div>}> <SomeComponent /> </Suspense> );
}`},{header:"注意事项",slug:"注意事项",content:`多个根节点问题：确保 Suspense 的 fallback 属性只有一个根节点。
数据加载：Suspense 无法检测在 Effect 或事件处理程序中获取数据的情况。
代码分割：确保正确使用 React.lazy 和动态导入，以实现代码分割。`},{header:"Vue 3 的 Suspense",slug:"vue-3-的-suspense",content:`Vue 3 也引入了 Suspense 作为实验性功能，用于处理异步组件的加载状态。 包裹异步组件： <template> <Suspense> <template #default> <AsyncComponent /> </template> <template #fallback> <div>Loading...</div> </template> </Suspense>
</template> <script setup>
import { defineAsyncComponent } from "vue";
const AsyncComponent = defineAsyncComponent(() => import("./AsyncComponent.vue")
);
<\/script> 错误处理： <template> <Suspense> <template #default> <AsyncComponent /> </template> <template #fallback> <div>Failed to load component.</div> </template> </Suspense>
</template>`}]},{path:"/web/React/todoList%E5%B0%8F%E6%A1%88%E4%BE%8B%E6%80%BB%E7%BB%93.html",title:"",pathLocale:"/",contents:[{header:"todoList 小案例总结",slug:"todolist-小案例总结",content:""}]},{path:"/web/React/useEffect.html",title:"",pathLocale:"/",contents:[{header:"useEffect",slug:"useeffect",content:"Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）"},{header:"React 中的副作用操作:",slug:"react-中的副作用操作",content:`发 ajax 请求数据获取
设置订阅/启动定时器
手动更改真实 DOM`},{header:"语法",slug:"语法",content:`useEffect(() => { // 在此可以执行任何带副作用操作 return () => { // 在组件卸载前执行 // 在此做一些收尾工作，比如清除定时器/取消订阅等 };
}, [stateValue]); // 如果指定的是[],回调函数只会在第一次render()后执行`},{header:"可以把 useEffect Hook 看做如下三个函数的组合",slug:"可以把-useeffect-hook-看做如下三个函数的组合",content:`componentDidMount()
componentDidUpdate()
componentWillUnmount()`}]},{path:"/web/React/useState.html",title:"",pathLocale:"/",contents:[{header:"useState",slug:"usestate",content:`常用的几个钩子：useState、useEffect、useContext、useRef
State Hook 让你在不编写 class 的情况下使用 state，即函数组件也有 state 状态，并进行读写操作`},{header:"语法",slug:"语法",content:"const [xxxstate, setXxxState] = React.useState(initialState);"},{header:"useState()",slug:"usestate-1",content:`参数：第一次定义时的初始值
返回值：数组，包含两个元素([当前状态的值,更新状态的函数])`},{header:"setXxxState()两种写法",slug:"setxxxstate-两种写法",content:`setXxxState(newValue)：参数是新的状态值，react 会更新状态值，并重新渲染组件
setXxxState(value => newValue)：参数是一个函数，该函数返回新的状态值，react 会更新状态值，并重新渲染组件 const [count, setCount] = React.useState(0);
const [name, setName] = React.useState('tom'); // 加的回调
function add() { // setCount(count + 1); // 第一种写法 setCount((count) => count + 1);
} function changeName() { setName('jack');
} return ( <div> <h2>当前求和为:{count}</h2> <h2>我的名字是:{name}</h2> <button onClick={add}>点我+1</button> <button onClick={changeName}>点我改名</button> </div>
);`}]},{path:"/web/React/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%B1%BB%E5%BC%8F%E7%BB%84%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"函数式组件与类式组件",slug:"函数式组件与类式组件",content:""},{header:"函数式组件的定义",slug:"函数式组件的定义",content:`// 1.创建类式组件
class MyComponent extends React.Component { render() { // render是放在哪里的?-MyComponent的原型对象上，供实例使用。 // render中的this是谁?-MyComponent的实例对象<=>MyComponent组件实例对象。 console.log("render中的this:", this); return <h2>我是用类定义的组件(适用于[复杂组件]的定义)</h2>; }
} // 2.渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById("test")); /*
执行了ReactDOM.render(<MyComponent/>......之后，发生了什么?
1.React解析组件标签，找到了MyComponent组件。
2.发现组件是使用类定义的,随后new出来该类的实例,并通过该实例调用到原型上的render方法。
3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/`},{header:"类式组件",slug:"类式组件",content:`// 1.创建函数式组件
function MyComponent() { console.log(this); // 此处的this是undefined，因为babel编译后开启了严格模式 return <h2>我是用函数定义的组件(适用于[简单组件]的定义)</h2>;
} // 2.渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById("test")); /*
执行了ReactDOM.render(<MyComponent/>......之后，发生了什么?
1.React解析组件标签，找到了MyComponent组件。
2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
*/`},{header:"复杂组件",slug:"复杂组件",content:"类组件中，有 state 就是复杂的，否则就是简单组件;或者说有状态的就是复杂组件。"}]},{path:"/web/React/%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81%E5%92%8C%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"单向数据流和双向绑定原理",slug:"单向数据流和双向绑定原理",content:"react 的单向数据流是指只允许父组件向子组件传递数据，子组件绝对不能修改父组件传的数据，如果想要修改数据，则要在子组件中执行父组件传递过来的回调函数，提醒父组件对数据进行修改。数据单向流让所有的状态改变可以追溯，有利于应用的可维护性；angular 中实现了双向数据绑定，代码编写方便，但是不利于维护"}]},{path:"/web/React/%E7%B1%BB%E7%9B%B8%E5%85%B3%E5%9F%BA%E6%9C%AC%E7%9F%A5%E8%AF%86.html",title:"",pathLocale:"/",contents:[{header:"类相关基本知识",slug:"类相关基本知识",content:`// 创建一个Person类
class Person { // 构造器方法 constructor(name, age) { // 构造器中的this是谁?-类的实例对象 this.name = name; this.age = age; } // 一般方法 speak() { // speak方法放在了哪里?一类的原型对象上，供实例使用 // 通过Person实例调用speak时，speak中的this就是Person实例 console.log(\`我叫\${this.name}，我年龄是\${this.age}\`); }
} // 创建一个Person的实例对象
const p1 = new Person("tom", 18);
const p2 = new Person("jerry", 19); console.log(p1);
console.log(p2); p1.speak();
p2.speak();
/*
总结:
1. 类中的构造器不是必须写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
2. 如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。
3. 类中所定义的方法，都是放在了类的原型对象上，供实例去使用
*/ // 创建一个Student类，继承于Person类
class Student extends Person { constructor(name, age, grade) { super(name, age); this.grade = grade; this.school = "尚硅谷"; } // 重写从父类继承过来的方法 speak() { console.log( \`我叫\${this.name}，我年龄是\${this.age},我读的是\${this.grade}年级\` ); } study() { // study方法放在了哪里?一类的原型对象上，供实例使用 // 通过Student实例调用study时，study中的this就是Student实例 console.log("我很努力的学习"); }
}`}]},{path:"/web/React/%E7%B1%BB%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7.html",title:"",pathLocale:"/",contents:[{header:"类组件中的属性",slug:"类组件中的属性",content:"state, props, refs: 在组件实例组件对象的构造属性; context 再说。类组件中的属性，函数式组件需要用到 hooks 支持"},{header:"初始化 state",slug:"初始化-state",content:`// 1.创建组件
class Weather extends React.Component { state = { isHot: false, wind: "微风" }; render() { const { isHot, wind } = this.state; return ( <h1 onClick={this.changeWeather}> 今天天气很{isHot ? "炎热" : "凉爽"}, {wind} </h1> ); } changeWeather = () => { const isHot = this.state.isHot; this.setState({ isHot: !isHot }); };
} // 2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById("test"));
}`},{header:"修改 state 事件",slug:"修改-state-事件",content:`class Weather extends React.Component { constructor(props) { super(props); // 初始化状态 this.state = { isHot: false }; // 解决changeWeather中this指向问题 this.changeWeather = this.changeWeather.bind(this); } render() { // 读取状态 const { isHot } = this.state; return ( <h1 onClick={this.changeWeather}>今天天气很{isHot ? "炎热" : "凉爽"}</h1> ); } changeWeather() { // changeWeather放在哪里?-Weather的原型对象上，供实例使用 // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用 // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined console.log(this); }
} // 2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById("test"));`},{header:"setState 用法",slug:"setstate-用法",content:`render() { console.log('render'); // 读取状态 const { isHot, wind } = this.state; return ( <h1 onClick={this.changeWeather}> 今天天气很{isHot ? '炎热' : '凉爽'}, {wind} </h1> );
} changeWeather() { // changeWeather放在哪里?Weather的原型对象上，供实例使用 // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用 // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined console.log('changeWeather'); // 获取原来的isHot值 const isHot = this.state.isHot; // 严重注意:状态必须通过setState进行更新，且更新是一种合并，不是替换。 this.setState({ isHot: !isHot }); // 严重注意:状态(state)不可直接更改，下面这行就是直接更改!!! // this.state.isHot = !isHot; // 这是错误的写法
}`},{header:"修改 state 事件的简化版(es6 箭头函数,this 向外层查找)",slug:"修改-state-事件的简化版-es6-箭头函数-this-向外层查找",content:`// 1.创建组件
class Weather extends React.Component { state = { isHot: false, wind: "微风" }; render() { const { isHot, wind } = this.state; return ( <h1 onClick={this.changeWeather}> 今天天气很{isHot ? "炎热" : "凉爽"},{wind} </h1> ); } // 原型对象上定义方法: 箭头函数this 指向外部 changeWeather = () => { const isHot = this.state.isHot; this.setState({ isHot: !isHot }); };
} // 2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById("test"));`},{header:"对 props 中的属性进行限制的简写方法(static 的用法)",slug:"对-props-中的属性进行限制的简写方法-static-的用法",content:`// 创建组件
class Person extends React.Component { // 对标签属性进行类型、必要性的限制 static propTypes = { name: PropTypes.string.isRequired, // 限制name必传,且为字符串 sex: PropTypes.string, // 限制sex为字符串 age: PropTypes.number, // 限制age为数值 speak: PropTypes.func, // 限制speak为函数 }; // 指定默认标签属性值 static defaultProps = { sex: "男", // sex默认值为男 age: 18, // age默认值为18 }; render() { // 渲染组件到页面 ReactDOM.render( <Person name="jerry" speak={speak} />, document.getElementById("test1") ); ReactDOM.render( <Person name="tom" age={18} sex="女" />, document.getElementById("test2") ); const p = { name: "老刘", age: 18, sex: "女" }; // console.log('@',.. }
}`},{header:"函数式组件拿不到 state 和 refs，但是可以拿到 props；除非利用 hooks",slug:"函数式组件拿不到-state-和-refs-但是可以拿到-props-除非利用-hooks",content:""},{header:"refs 的基础用法(react16.8 开始已经废弃, string 类型的 refs 影响效率)",slug:"refs-的基础用法-react16-8-开始已经废弃-string-类型的-refs-影响效率",content:`// 创建组件
class Demo extends React.Component { // 展示左侧输入框的数据 showData = () => { const { input1 } = this.refs; alert(input1.value); }; // 展示右侧输入框的数据 showData2 = () => { const { input2 } = this.refs; alert(input2.value); }; render() { return ( <div> <input ref={(c) => (this.input1 = c)} type="text" placeholder="点击按钮提示数据" /> <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp; <input onBlur={this.showData2} ref={(c) => (this.input2 = c)} type="text" placeholder="失去焦点提示数据" /> </div> ); }
}
// 渲染组件到页面
ReactDOM.render(<Demo a="1" b="2" />, document.getElementById("test"));`},{header:"回调函数形式的 refs",slug:"回调函数形式的-refs",content:`(利用 es6 的箭头函数，()和{}都可以省略, 所以只有了一个{}; 页面更新时调两次，第一次为 null，第二次才是真正的节点) // 创建组件
class Demo extends React.Component { // 展示左侧输入框的数据 showData = () => { const { input1 } = this.refs; alert(input1.value); }; // 展示右侧输入框的数据 showData2 = () => { const { input2 } = this.refs; alert(input2.value); }; render() { return ( <div> <input ref={(c) => (this.input1 = c)} type="text" placeholder="点击按钮提示数据" /> <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp; <input onBlur={this.showData2} ref={(c) => (this.input2 = c)} type="text" placeholder="失去焦点提示数据" /> </div> ); }
} // 渲染组件到页面
ReactDOM.render(<Demo a="1" b="2" />, document.getElementById("test"));`},{header:"内联函数的 refs(不会随着更新时频繁调用)",slug:"内联函数的-refs-不会随着更新时频繁调用",content:`saveInput = (c) => { this.input1 = c; console.log('@', c);
}; render() { const { isHot } = this.state; return ( <div> <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2> <input ref={(c) => { this.input1 = c; console.log('@', c); }} type="text" /> <input ref={this.saveInput} type="text" /><br /><br /> <button onClick={this.showInfo}>点我提示输入的数据</button> <button onClick={this.changeWeather}>点我切换天气</button> </div> );
}`},{header:"React.createRef 方式创建结点(目前最推荐的一种方式了)",slug:"react-createref-方式创建结点-目前最推荐的一种方式了",content:`//创建组件
class Demo extends React.Component {
// React.createRef调用后可以返回一个容器，
// 该容器可以存储被ref所标识的节点，该容器是“专人专用”的
myRef = React.createRef();
myRef2 = React.createRef(); //展示左侧输入框的数据
showData = () => { alert(this.myRef.current.value);
}; //展示右侧输入框的数据
showData2 = () => { alert(this.myRef2.current.value);
}; render() { return ( <div> <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" /> <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp; <input onBlur={this.showData2} ref={this.myRef2} type="text" placeholder="失去焦点提示数据" /> </div> );
}`}]},{path:"/web/React/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",title:"",pathLocale:"/",contents:[{header:"组件通信",slug:"组件通信",content:""},{header:"组件间的关系:",slug:"组件间的关系",content:`父子组件
兄弟组件(非嵌套组件)
祖孙组件(跨级组件)`},{header:"几种通信方式:",slug:"几种通信方式",content:`props: children props
render props 消息订阅-发布: pubs-sub
event 等等 集中式管理: redux
dva 等等 conText: 生产者-消费者模式`},{header:"比较好的搭配方式:",slug:"比较好的搭配方式",content:`父子组件: props
兄弟组件: 消息订阅-发布、集中式管理
祖孙组件(跨级组件): 消息订阅-发布、集中式管理、conText(开发用的少,封装插件用的多)`}]},{path:"/web/React/%E8%99%9A%E6%8B%9Fdom%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"虚拟 dom 实现原理",slug:"虚拟-dom-实现原理",content:"虚拟 dom 是用 js 模拟一颗 dom 树,放在浏览器内存中，相当于在 js 和真实 dom 中加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。"},{header:"虚拟 dom 优点：",slug:"虚拟-dom-优点",content:`虚拟 DOM 具有批处理和高效的 Diff 算法,最终表现在 DOM 上的修改只是变更的部分，可以保证非常高效的渲染,优化性能；
虚拟 DOM 不会立马进行排版与重绘操作，对虚拟 DOM 进行频繁修改，最后一次性比较并修改真实 DOM 中需要改的部分；
虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部；`},{header:"虚拟 dom 缺点：",slug:"虚拟-dom-缺点",content:"首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢；"},{header:"React 组件的渲染过程：",slug:"react-组件的渲染过程",content:`使用 JSX 编写 React 组件后所有的 JSX 代码会通过 Babel 转化为 React.createElement 执行;
createElement 函数对 key 和 ref 等特殊的 props 进行处理，并获取 defaultProps 对默认 props 进行赋值，并且对传入的子节点进行处理，最终构造成一个 ReactElement 对象（所谓的虚拟 DOM）。
ReactDOM.render 将生成好的虚拟 DOM 渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实 DOM。`},{header:"虚拟 DOM 的组成——ReactElementelement 对象结构：",slug:"虚拟-dom-的组成——reactelementelement-对象结构",content:`type：元素的类型，可以是原生 html 类型（字符串），或者自定义组件（函数或 class）
key：组件的唯一标识，用于 Diff 算法，下面会详细介绍
ref：用于访问原生 dom 节点
props：传入组件的 props，chidren 是 props 中的一个属性，它存储了当前组件的孩子节点，可以是数组（多个孩子节点）或对象（只有一个孩子节点）
owner：当前正在构建的 Component 所属的 Component
self：（非生产环境）指定当前位于哪个组件实例
_source：（非生产环境）指定调试代码来自的文件(fileName)和代码行数(lineNumber);`}]},{path:"/web/Ts/",title:"",pathLocale:"/",contents:[{header:"Ts",slug:"ts",content:""}]},{path:"/web/Ts/TypeScript.html",title:"",pathLocale:"/",contents:[{header:"TypeScript",slug:"typescript",content:"ts 是 js 的超级，在满足所有的 js 语法基础上，又增加了类型判断等特性，通过 tsc 编译成我们想要的 js 版本"}]},{path:"/web/Vue/",title:"",pathLocale:"/",contents:[{header:"Vue",slug:"vue",content:`react 和 vue 对比,细致全面
;`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/ASCII%E7%BC%96%E7%A0%81.html",title:"",pathLocale:"/",contents:[{header:"ASCII 编码",slug:"ascii-编码",content:`谨记以下 前 3 个编码,相对应的英文字母的编码就相对应的往上加
'a' -> 97 'A' -> 65 '0' -> 48
0 -> 0
1 -> 1
2 -> 2
...
9 -> 9
'A' -> 65
'B' -> 66
...
'Z' -> 90
'a' -> 97
'b' -> 98
...
'z' -> 122`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/final.html",title:"",pathLocale:"/",contents:[{header:"final",slug:"final",content:"常量、初始值、不被继承、不被重写"},{header:"final 关键字的特点",slug:"final-关键字的特点",content:`final 关键字修饰的变量就是常量
常量的分类 字面量常量 整数常量
小数常量
字符常量
字符串常量
布尔常量
空常量 自定义常量 被 final 修饰的变量 被 final 修饰的类不能被继承 被 final 修饰的成员方法不能被重写`},{header:"final 的注意事项",slug:"final-的注意事项",content:`如果一个成员变量，在被定义的时候，并没有赋初始值，会编译报错，我们必须给其赋值。
赋值的方式有两种： 定义的同时赋值 有参构造赋值 public class Demo { final int a; // 编译报错 final int age = 18; // 没有问题 // final char value = 'final'; // 没有问题 方式一 final int value; // 没有问题 public Demo(int value) { this.value = value; // 方式二 }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/",title:"",pathLocale:"/",contents:[]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/static.html",title:"",pathLocale:"/",contents:[{header:"static",slug:"static",content:"共享成员、只能访问静态变量和方法、与实例对象无关、优先对象加载等问题 static 是一个修饰符，代表静态的意思，用来修饰成员变量和成员方法的，不能修饰构造方法。"},{header:"特点",slug:"特点",content:`被 static 修饰的成员变量和成员方法在内存中只有一个副本，被所有对象共享。 被 static 修饰的成员变量和成员方法独立于该类的任何对象。也就是说，这些成员变量和成员方法与类的任何对象实例无关，它们属于类本身，因此通过类名就可以访问它们。
类名.成员变量
类名.成员方法() 被 static 修饰的成员变量和成员方法随着字节码文件对象的加载而加载，所以是优先于对象存在于内存中。`},{header:"案例",slug:"案例",content:"静态方法只能访问类的静态成员变量和静态方法，不能访问非静态成员变量和非静态方法 class Person{ String name; static int age; public static void eat(){ drink(); // 没有问题 System.out.println(name); // 没有问题 sleep(); // 编译报错 System.out.println(age); // 编译报错 } public static void drink(){ } public void sleep(){ } }"}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/super.html",title:"",pathLocale:"/",contents:[{header:"super",slug:"super",content:`super指向父类、this指向本类
构造方法中第一行要么this(参数)要么super(参数)，但不共存
至少有一个构造方法中调用super() super 是父类内存空间的标记，在用法上，我们可以当作父类对象的引用来使用，但是我们不能说
super 就是父类对象的引用`},{header:"super 关键字和 this 关键字的区别",slug:"super-关键字和-this-关键字的区别",content:"调用构造方法 super() 调用父类的构造方法 this() 调用本类的构造方法 调用成员方法 super.方法名() 调用父类中的成员方法 this.方法名() 调用本类中的成员方法 调用成员变量 super.变量名 调用父类中的成员变量 this.变量名 调用本类中的成员变量"},{header:"具体说明 super 和 this",slug:"具体说明-super-和-this",content:`子类中的所有的构造方法的第一行，默认都有一个super()。 // 因为有继承，说明子类可以使用父类的成员变量，那也就意味着父类的成员变量一定要有一直 // 才可以被使用，所以在创建类对象的时候，会调用子类的构造方法，而子类的构造方法中会先 // 去调用父类的构造方法，目的就是给父类的额成员变量默认初始化
class Fu{ String name; public Fu(){ // 父类默认有一个无参构造 System.out.println("Fu的无参构造"); }
}
class Zi extends Fu{ public Zi(){ super(); // 默认调用父类的无参构造 } public Zi(String name){ super(); // 默认调用父类的无参构造 } public Zi(int age){ super(); // 默认调用父类的无参构造 } public Zi(String name,int age){ super(); // 默认调用父类的无参构造 }
}
class Demo { public static void main(String[] args) { Zi zi = new Zi(); System.out.println(zi.name); // null }
} 子类中的所有构造方法中， 第一行要么是 super(参数)，要么是 this(参数)，他们不能同时存在。 class Fu{ String name; public Fu(){ }
}
class Zi extends Fu{ public Zi(String name){ super(); // this(); // 错误，super和this不能同时存在 } public Zi(){ this("张三"); // 正确的，因为调用了上面的有参构造 }
} 子类中的所有的构造方法中至少有一个构造方法里面调用的是 super(参数)，如果没有显式的调用 super(参数)，则默认调用 super()。 class Fu{ String name; int age;
}
class Zi extends Fu{ public Zi(){ this("aaa"); } public Zi(String name){ this(18); } public Zi(int age){ this("aaa", 18) } public Zi(String name,int age){ // super(); }
}
class Demo { public static void main(String[] args) { Zi zi = new Zi(); }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E4%BB%A3%E7%A0%81%E5%9D%97.html",title:"",pathLocale:"/",contents:[{header:"代码块",slug:"代码块",content:`局部代码块: 方法执行后消失，释放内存；
构造代码块: 抽离共有部分，每次创建对象都执行；
静态代码块: 只加载一次，抽离共有部分`},{header:"局部代码块",slug:"局部代码块",content:`定义在方法中的代码块就是局部代码块
作用: 能够让局部变量，更早的在内存中消失，节省内存空间 // 基础用法
class Demo{ public void test() { { // 这就是局部代码块 } }
} // 节省内存空间
class Demo{ public void test() { { int num = 20; System.out.println(num); // num变量有必要活得很久嘛? } // 局部代码块执行完毕后，num变量就自动消失 System.out.println(num); // 报错 for (int i = 0; i < 10; i++) { .... } /** * 假设这个位置上有100000行代码，但是均无用到num变量 */ }
}`},{header:"构造代码块",slug:"构造代码块",content:`定义在类中，方法外的代码块，就是构造代码块。
作用: 构造代码块是在创建对象的时候执行，并且是优先于构造方法先执行 构造代码块是给所有对象共有的属性进行初始化 每次创建对象都会执行一次构造代码块 class Demo{ public static void main(String[] args) { // 下面的任何一个对象的创建都会执行构造代码块中的方法哭 Person p1 = new Person(); Person p2 = new Person(18); Person p3 = new Person(18, "张三"); }
}
class Cry{ { // 构造代码块提取出来的共有相同部分，不用在重写方法中再写了 System.out.println("哭"); } public Cry() { // System.out.println("哭"); } public Cry(int age) { // System.out.println("哭"); } public Cry(int age, String Name) { // System.out.println("哭"); }
}`},{header:"静态代码块",slug:"静态代码块",content:"被静态修饰的 构造代码块，就成为静态代码块 静态代码块什么时候执行? 可以说类加载的时候执行，并且只执行一次；也可以说是.class 文件从磁盘中加载到方法区形成字节码文件对象的时候，静态代码块会随之执行。 为什么只执行一次? 因为字节码文件只加载一次，并且是优先于所有对象的创建而执行的。 静态代码块的执行要早于构造代码块的执行，并且只执行一次 作用呢? 给静态属性进行初始化，当数据只需要被初始化一次的时候，之后就可以重复使用的时候，就可以使用静态代码块。"},{header:"类的初始化顺序",slug:"类的初始化顺序",content:`public static void main(String[] args){ Zi zi = new Zi(); // new Zi()相当于调构造方法 System.out.println("--------------------");
}
class Fu{ static { System.out.println("父类静态代码块"); } { System.out.println("父类构造代码块"); } public Fu() { System.out.println("父类构造方法"); }
}
class Zi extends Fu{ static { System.out.println("子类静态代码块"); } { System.out.println("子类构造代码块"); } public Zi() { // 1. super() 执行父类 // 2. 执行本类中的构造代码块和构造方法 System.out.println("子类构造方法"); }
}
/** * 运行结果： * 父类静态代码块 * 子类静态代码块 * 父类构造代码块 * 父类构造方法 * 子类构造代码块 * 子类构造方法 * ---------------------
*/`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E4%BF%AE%E9%A5%B0%E7%AC%A6.html",title:"",pathLocale:"/",contents:[{header:"修饰符",slug:"修饰符",content:`开发中一般用public 修饰类，用private 修饰属性
public > protected > 默认的(什么都不写) > private
public：都行
protected：既不同包又不继承那不行
默认的：不同包就不行
private：只有同类才能访问 以后开发中，一个类的各个组成部分都用什么修饰符来修饰
类: public
属性: private
构造方法: public，偶尔用 private
成员方法: public`},{header:"导包",slug:"导包",content:`import 包名.类名 快捷键: Ctrl + Shift + O 包名：一般是小写的域名的倒置，去掉 www 如果两个类不在同一个包下，类 A 想要使用 类 B，必须导入类 B 所在的包 com.aaa
|-- A
com.bbb
|-- B`},{header:"访问权限修饰符",slug:"访问权限修饰符",content:`public > protected > 默认的(什么都不写) > private
public：都行
protected：既不同包又不继承那不行
默认的：不同包就不行
private：只有同类才能访问 修饰符
同类中
同包不同类有继承关系
同包不同类无继承关系
不同包有继承关系
不同包没有继承关系 public
true
true
true
true
true protected
true
true
true
true
false 默认的
true
true
true
false
false private
true
false
false
false
false 不同包有继承关系 同包不同类无继承关系 同包不同类有继承关系`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%86%85%E9%83%A8%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"内部类",slug:"内部类",content:`什么是内部类 ?
一个类写在另一个类的里边，里边的类就是内部类
内部类有什么特点 ?
内部类可以直接访问外部类的成员，包括私有成员
外部类不能直接访问内部类，要访问内部类的成员，必须通过间接的方式，通过创建内部类的对象来访问`},{header:"1. 成员内部类",slug:"_1-成员内部类",content:"定义在类中，方法外的内部类叫成员内部类"},{header:"成员内部类的使用",slug:"成员内部类的使用",content:""},{header:"1. 修饰符为 public、protected、默认的",slug:"_1-修饰符为-public、protected、默认的",content:`class Outer { protected class Inner { int i = 1; public void show() { System.out.println("内部类方法"); } }
}
class Demo{ public static void main(String[] args) { Outer.Inner in = new Outer().new Inner(); System.out.println(in.i); // 1 in.show(); // 内部类方法 }
}`},{header:"2. 修饰符为 static",slug:"_2-修饰符为-static",content:`class Outer { static class Inner { int i = 1; public void show() { System.out.println("内部类方法"); } }
}
class Demo{ public static void main(String[] args) { /** * 方式一 */ Outer.Inner in = new Outer.Inner(); System.out.println(in.i); // 1 in.show(); // 内部类方法 /** * 方式二 */ // 需要先导包 import com.inner.Outer.Inner; Inner in2 = new Inner(); System.out.println(in2.i); // 1 in2.show(); // 内部类方法 }
}`},{header:"3. 修饰符为 private",slug:"_3-修饰符为-private",content:`class Outer { private class Inner { int i = 1; public void show() { System.out.println("内部类方法"); } } public void print() { Inner in = new Inner(); System.out.println(in.i); // 1 in.show(); // 内部类方法 }
}
class Demo{ public static void main(String[] args) { Outer ou = new Outer(); ou.print(); }
}`},{header:"2. 局部内部类",slug:"_2-局部内部类",content:`定义在类中，方法内的内部类叫局部内部类 class Outer { public void print() { class Inner { int i = 1; public void show() { System.out.println("局部内部类方法"); } } Inner in = new Inner(); System.out.println(in.i); // 1 in.show(); // 局部内部类方法 }
}
class Demo { public static void main(String[] args) { Outer ou = new Outer(); ou.print(); }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%8C%BF%E5%90%8D%E5%86%85%E9%83%A8%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"匿名内部类(匿名子类对象)",slug:"匿名内部类-匿名子类对象",content:`匿名内部类就是没有名字的局部内部类，也叫匿名子类对象
实际就是子类对象
格式：
new 类名/接口名(){
重写的方法
自定义的方法
} new Person(){ // 这就是匿名内部类的格式 }
当一个方法的形参是接口或者是抽象类的时候，我们可以使用匿名子对象进行传递
/** * 理解
*/
interface Inter { public abstract void print();
}
class Demo{ public static void main(String[] args){ /** * 想要在本处执行show方法，但是需要传递一个参数，但是接口不能new实例化 */ // show(); show(new Inter(){ public abstract void print(){ System.out.printIn("这就是匿名子对象或者叫匿名内部类的好处！") } }) } public static void show(Inter inter){ /** * Inter inter: 参数是接口或者是抽象类可以用匿名子对象进行传递 * Inter inter = new Inter(){} * Inter inter => Fu fu * new Inter(){} => new Zi() * 格式: Fu fu = new Zi() * {} => 匿名对象 * 多态形式的 */ inter.print(); }
}
/** * 案例一
*/
public class Demo{ public static void main(String[] args){ // 父类的子对象，但是是匿名的 new Fu(){ // 重写的方法 public void show(Inter inter){ inter.print(); } }.show(new Inter(){ public void print(){ System.out.println("这块就是为了展示调用方法！"); } }); }
}
abstract class Fu{ public abstract void show(Inter inter);
}
interface Inter{ public abstract void print();
}
/** * 案例二
*/
public class Demo{ public static void main(String[] args){ Tool.getInstance().show(); }
}
interface Inter{ public static void show();
}
class Tool{ public static Inter getInstance(){ return new Inter(){ public static void show(){ System.out.println("约吗！"); } }; }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%A4%9A%E6%80%81.html",title:"",pathLocale:"/",contents:[{header:"多态",slug:"多态",content:`运行和编译看哪边指的是等号的左边和右边，即看实例对象的类型；
正常情况下，父类不能使用子类中特有的内容
向上转型(多态)、向下转型Zi zi = (Zi)Fu。 前提条件: 要有继承关系 要有方法的重写 要有父类引用指向子类对象`},{header:"多态的用法",slug:"多态的用法",content:`class Fu { public void print(){}
}
class Zi extends Fu { // 有继承关系 public void print(){} // 有方法重写
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); // 父类引用指向子类对象 }
}`},{header:"多态间子父类之间成员变量的关系(编译看左边，运行看左边)",slug:"多态间子父类之间成员变量的关系-编译看左边-运行看左边",content:`// 父类中的成员变量与子类中的成员变量不同
class Fu { int i = 10;
}
class Zi extends Fu { int j = 20;
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); System.out.println(fu.i); // 10 System.out.println(fu.j); // 编译报错 }
}
/** * 父类引用中不能使用子类中特有的成员变量 * 改成 Zi fu = new Zi(); 即可
*/
// 父类中的成员变量与子类中的成员变量相同
class Fu { int i = 10;
}
class Zi extends Fu { int i = 20;
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); System.out.println(fu.i); // 10 System.out.println(fu.i); // 10 }
}
/** * 父类引用只能使用自身中特有的成员变量，不能使用子类中的成员变量 * 子类对象可以调用父类中特有的成员变量 * 改成 Zi fu = new Zi(); 的话打印结果为 20 20
*/`},{header:"多态间子父类之间成员方法的关系(编译看左边，运行看右边)",slug:"多态间子父类之间成员方法的关系-编译看左边-运行看右边",content:`// 父类中的成员方法与子类中的成员方法不同
class Fu { public void printFu(){ System.out.println("Fu"); }
}
class Zi extends Fu { public void printZi(){ System.out.println("Zi"); }
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); fu.printFu(); // Fu fu.printZi(); // 编译报错 }
}
/** * 父类引用中不能使用子类中特有的成员方法 * 改成 Zi fu = new Zi(); 即可
*/
// 父类中的成员方法与子类中的成员方法相同
class Fu { public void print(){ System.out.println("Fu"); }
}
class Zi extends Fu { public void print(){ System.out.println("Zi"); }
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); fu.print(); // Zi fu.print(); // Zi }
}
/** * 父类引用中可以使用子类中重写父类的方法
*/`},{header:"多态间子父类之间静态成员的关系(多态，静态，成员变量和成员方法，编译看左边，运行看左边)",slug:"多态间子父类之间静态成员的关系-多态-静态-成员变量和成员方法-编译看左边-运行看左边",content:`// 父类中的静态成员与子类中的静态成员相同
class Fu { static int i = 10;
}
class Zi extends Fu { static int i = 20;
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); System.out.println(fu.i); // 10 System.out.println(fu.i); // 10 }
}
// 父类中的静态成员与子类中的静态成员不同
class Fu { static int i = 10;
}
class Zi extends Fu { static int j = 20;
}
class Demo{ public static void main(String[] args){ Fu fu = new Zi(); System.out.println(fu.i); // 10 System.out.println(fu.j); // 编译报错 }
}`},{header:"多态的实际应用",slug:"多态的实际应用",content:`class AnimalTool { // AnimalTool是类方法，也叫静态方法 public static void eat(Animal animal){ // 有父类对子类的指向 animal.eat(); }
}
class Animal{ public void eat(){ System.out.println("动物吃东西"); }
}
class Dog extends Animal{ // 有继承 public void eat(){ // 有重写 System.out.println("狗吃肉"); }
}
class Cat extends Animal{ public void eat(){ System.out.println("猫吃鱼"); }
}
class Pig extends Animal{ public void eat(){ System.out.println("猪吃白菜"); }
}
class Demo{ public static void main(String[] args){ // 狗吃肉: 有父类对子类的指向 AnimalTool.eat(new Dog()); // 猫吃鱼: 类方法(静态方法)可以类名.方法名( AnimalTool.eat(new Cat()); //猪吃白菜: Animal animal = new Pig() => Fu fu = new Zi() AnimalTool.eat(new Pig()); }
}`},{header:"向上转型(就是多态)",slug:"向上转型-就是多态",content:"Fu Fu = new Zi();"},{header:"向下转型(解决多态的弊端)",slug:"向下转型-解决多态的弊端",content:`Zi zi = (Zi)fu; // 有点像强制类型转换 多态的弊端:
父类不能使用子类中特有的变量，向下转型后即可。
举例说明，有一只小狗，长的很漂亮，我们可以说那只小狗长得很漂亮，
当然也可以说那个动物长得很漂亮，
漂亮本是狗的特有属性，这就是向下转型的意义。 class Animal{ public void eat(){ System.out.println("动物吃东西"); }
}
class Dog extends Animal{ // 有继承 public void eat(){ // 有重写 System.out.println("狗吃肉"); }
}
class Cat extends Animal{ // 有继承 public void eat(){ // 有重写 System.out.println("猫吃鱼"); }
}
class Demo{ public static void main(String[] args){ Animal animal = new Dog(); // 向上转型 Fu fu = new Zi() Dog dog = (Dog)animal; // 向下转型，Zi zi = (Zi) fu，转型后即可使用子类中特有的成员 dog.eat(); // 狗吃肉 Cat cat = (Cat)animal; // 错误的，因为animal是new Dog()的实例，不能再用猫来修饰 cat.eat(); // 报错，因为cat是猫，而animal是动物，所以不能使用 }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E5%B0%81%E8%A3%85.html",title:"",pathLocale:"/",contents:[{header:"封装",slug:"封装",content:`封装是指隐藏对象的属性和实现细节，仅对外提供公共的访问方式。
隐藏对象的属性，只需要在属性定义的前面加上一个关键字 super 即可。
对外提供公共的访问方式，就是在类中写上几个 setXXX(...)和 getXXX()即可。`},{header:"private 关键字",slug:"private-关键字",content:`什么是 private 关键字
private 是一个修饰符，代表私有的意思，可以修饰成员变量和成员方法以及构造函数
private 关键字的特点
被 private 关键字修饰的成员变量和成员方法不能在本类中使用，不能在其他类中使用
private 关键字怎么用`},{header:"举例",slug:"举例",content:`this代表对象的引用，哪个对象调用 this 所在的方法，this 就代表哪个对象
this可以解决局部变量隐藏成员变量的问题 class Person{ private String name; private int age; private String sex; public void setName(String n){ this.name = n; // this可以解决局部变量隐藏成员变量的问题 } public String getName(){ return this.name; } public void setAge(int n){ this.age = n; } public int getAge(){ return this.age; } public void setSex(String n){ this.sex = n; } public String getSex(){ return this.sex; }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F%E5%92%8C%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F.html",title:"",pathLocale:"/",contents:[{header:"成员变量和局部变量",slug:"成员变量和局部变量",content:"初始值、区别、匿名对象可以当实参、方法和对象回收等问题"},{header:"成员变量和局部变量的区别",slug:"成员变量和局部变量的区别",content:`定义的位置不同
成员变量：定义在类中方法外
局部变量：定义在方法中或方法的声明上
// 成员变量
public class Person { private String name; // 在类中、方法外定义的变量 public void info() { System.out.println(name); // null }
}
// 局部变量
public class Person { public void info() { String name = '小明'; // 在info方法中定义的变量 }
} // 局部变量
public class Person { public void info(int age) { // age是局部变量，定义在info方法的声明上 age = 10; System.out.println(age); }
} 内存位置不同
成员变量：存储在堆中的对象中
局部变量：存储在栈中的方法中 初始值不同
成员变量：有默认初始值，如果不赋值也可以使用 String 类型的成员变量：默认初始值是 null
int 类型的成员变量：默认初始值是 0
char 类型的成员变量：默认初始值是'\\u0000'
boolean 类型的成员变量：默认初始值是 false
引用类型的成员变量：默认初始值是 null 局部变量：没有默认初始值，如果没有赋值，不能使用，否则报错，使用前必须先赋值 声明周期不同
成员变量：随着对象的创建而存在，随着对象的消失而消失
局部变量：随着方法的调用而存在，随着方法的调用完毕而消失 作用域范围不同
成员变量：整个类中都可以使用
局部变量：只能在方法中使用，出了方法就用不了了`},{header:"案例",slug:"案例",content:"匿名对象可以做为实际参数传递 方法和对象的回收 共享static属性"}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%8A%BD%E8%B1%A1%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"抽象类(abstract)",slug:"抽象类-abstract",content:`可继承(要么是抽象类继承，要么普通类继承但是必须重写所有方法)
可以有构造方法，但是不能实例化，即不能创建对象
abstract不能与 private、static、final共存 什么是抽象类 ?
被 abstract 关键字所修饰的类就是抽象类
有抽象方法的类就是抽象类，但是抽象类不一定有抽象方法
抽象类不能被实例化`},{header:"抽象类特征",slug:"抽象类特征",content:`抽象类和抽象方法都要由 abstract 关键字修饰 abstract class Person{ public abstract void eat();
} class Student extends Person{ public void eat(){ System.out.println("eat 肉"); }
}
class Teacher extends Person{ public void eat(){ System.out.println("eat 饭"); }
}
public class Test{ public static void main(String[] args){ Student s = new Student(); Teacher t = new Teacher(); s.eat(); t.eat(); }
} 抽象类可以没有抽象方法，但是有抽象方法的类一定是抽象类 抽象类可以被继承，可以有构造方法，但是不能实例化，即不能创建对象 一个类要继承抽象类，要么该类也是抽象类，要么该类是一个普通类，但是必须重写所有的抽象方法`},{header:"abstract 关键字不能与哪些关键字共存",slug:"abstract-关键字不能与哪些关键字共存",content:'abstract 不能与 private 共存 因为被 abstract 修饰的方法是抽象方法，子类是必须要重写的，如果该类同时又被 private 修饰，那么子类就无法重写该方法，所以矛盾 abstract class Fu{ private abstract void show(); // 编译报错 } class Zi extends Fu{ public void show(){ System.out.println("show 方法"); } } abstract 不能与 protected 共存 因为被 protected 修饰的方法是受保护的，子类可以访问，但是子类不能重写该方法 abstract class Fu{ protected abstract void show(); // 编译报错 } abstract 不能与 static 共存 因为被 static 修饰的方法可以通过类名直接访问，而抽象方法是没有方法体的，出现矛盾 abstract class Person{ abstract static void eat(); // 编译报错 } Person.eat(); // 编译报错 abstract 不能与 final 共存 因为被 final 修饰的方法是最终方法，不能被重写，出现矛盾 abstract class Fu{ final abstract void eat(); // 编译报错 } class Zi extends Fu{ public void eat(){ System.out.println("eat 方法"); } }'},{header:"抽象类的作用",slug:"抽象类的作用",content:`抽象类提高代码的可读性和可维护性和可扩展性
抽象类和接口可以实现多态 // 抽象类
abstract class Animal { String name; public Animal(String name) { this.name = name; } public abstract void eat();
}
class Dog extends Animal { public Dog(String name) { super(name); } public void eat() { System.out.println(name + " is eating dog food."); }
}
class Cat extends Animal { public Cat(String name) { super(name); } public void eat() { System.out.println(name + " is eating cat food."); }
}
public class Test { public static void main(String[] args) { Animal dog = new Dog("旺财"); dog.eat(); Animal cat = new Cat("喵喵"); cat.eat(); }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"接口(interface)",slug:"接口-interface",content:`变量：public static final int i = 1
方法：public abstract
构造方法: 无
接口的实现：抽象类
可继承、必须重写所有的抽象方法 什么是接口 ?
比抽象类表现更加抽象的表现形式，就是接口
接口的格式 ?
interface 接口名 {
}
接口不是类 !!! interface Inter { }
class Zi implements Inter{ }`},{header:"接口的特点",slug:"接口的特点",content:"接口不是类，不能创建对象，接口需要类来实现 接口中的所有方法都是抽象方法(我们能用到的是，但是 java 开发人员不是) 一个类，如果想要实现一个接口，要么该类是抽象类，要么该类是普通类但是必须重写接口的抽象所有方法"},{header:"接口的成员特点",slug:"接口的成员特点",content:`成员变量 接口的所有变量全部都是自定义常量
默认修饰符: public static final public static final int i = 10; static final int j = 20; int x = 30; 成员方法 接口中的所有方法都是抽象方法(java 开发人员除外)
默认修饰符: public abstract public abstract void aaa(); public void bbb(); public void ccc(); void ddd(); 构造方法 接口中没有构造方法`},{header:"接口基础用法",slug:"接口基础用法",content:`public class Demo{ public static void main(String[] args){ Zi zi = new Zi(); }
}
interface Inter{ public static final int i = 10; public abstract void aaa(); public void bbb();
}
class Zi implements Inter{ @Override public void aaa(){ System.out.println("aaa"); } public void bbb(){ System.out.println("bbb"); }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"数据类型",slug:"数据类型",content:`数据类型
关键字
内存占用
取值范围 整数
byte
1 字节
-128~127 short
2 字节
-32768~32767 int
4 字节
-2 的 31 次方 到 2 的 31 次方-1 long
8 字节
-2 的 63 次方 到 2 的 63 次方-1 浮点数
float
4 字节
1.4E-45~3.402823E+38 double
8 字节
4.9E-324~1.7976931348623157E+308 字符
char
2 字节
0~65535 布尔
boolean
1 字节
true,false`},{header:"常见的考试题",slug:"常见的考试题",content:`针对 byte 类型和 short 类型的时候，只要右边有一个是变量，就会编译报错 byte b1 = 1;
byte b2 = 2;
byte b3 = b1 + b2;
System.out.printIn(b3) //编译报错
short s1 = 1;
short s2 = 2;
short s3 = s1 + s2;
System.out.printIn(s3) //编译报错
byte b1 = 1;
byte b2 = b1 + 2;
System.out.printIn(b2); //编译报错
short s1 = 1;
short s2 = s1 + 2;
System.out.printIn(s2); //编译报错 注意数据类型的范围 byte b = 126 + 1;
System.out.printIn (b) ; //正确，127
byte b = 127 + 1;
System.out.printIn (b); //编译报错，因为 byte 范围最大值是 127`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%95%B0%E7%BB%84.html",title:"",pathLocale:"/",contents:[{header:"数组",slug:"数组",content:""},{header:"特征",slug:"特征",content:`一旦初始化，数组的长度就固定了，不能修改
数组的长度必须是一个大于0的整数
数组的元素可以是任意数据类型（包括 null、基本数据类型、引用数据类型、对象、方法、数组、接口、枚举、注解等）
数组的元素必须是相同的数据类型`},{header:"数组格式的定义",slug:"数组格式的定义",content:"格式一：数据类型[] 数组名 = new 数据类型[长度] int[] arr = new int[5]; 格式二：数据类型[] 数组名 = new 数据类型[]{元素 1, 元素 2, 元素 3...} int[] arr = new int[]{1, 2, 3, 4, 5}; 格式三：数据类型[] 数组名 = {元素 1, 元素 2, 元素 3...} int[] arr = {1, 2, 3, 4, 5};"},{header:"常见的错误类型",slug:"常见的错误类型",content:`ArrayIndexOutOfBoundsException(数组越界) int[] arr = {1, 2, 3, 4, 5};
System.out.println(arr[5]); // 数组越界 数组中只有5个元素，索引范围是0-4 NullPointerException(空指针异常) int arr = {1, 2, 3};
System.out.println(arr[0]);
System.out.println(arr[1]);
System.out.println(arr[2]);
arr = null;
System.out.println(arr[0]); // 这一行会引发空指针异，因为数组arr的值是null了 null 是空常量，只能赋值给引用数据类型的变量 int [] arr = null;
或者
String str = null;`},{header:"数组的遍历",slug:"数组的遍历",content:`int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i < arr.length; i++) { System.out.println(arr[i]);
}`},{header:"数组的复制",slug:"数组的复制",content:`int[] arr1 = {1, 2, 3, 4, 5};
int[] arr2 = new int[arr1.length];
for (int i = 0; i < arr1.length; i++) { arr2[i] = arr1[i];
}`},{header:"数组的反转",slug:"数组的反转",content:`int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i < arr.length / 2; i++) { int temp = arr[i]; arr[i] = arr[arr.length - 1 - i]; arr[arr.length - 1 - i] = temp;
}`},{header:"数组的排序",slug:"数组的排序",content:`int[] arr = {1, 2, 3, 4, 5};
Arrays.sort(arr); // 默认升序`},{header:"数组的查找",slug:"数组的查找",content:`int[] arr = {1, 2, 3, 4, 5};
int index = Arrays.binarySearch(arr, 3); // 返回3的索引，如果没有返回-3`},{header:"数组的合并",slug:"数组的合并",content:`int[] arr1 = {1, 2, 3, 4, 5};
int[] arr2 = {6, 7, 8, 9, 10};
int[] arr3 = new int[arr1.length + arr2.length];
System.arraycopy(arr1, 0, arr3, 0, arr1.length);
System.arraycopy(arr2, 0, arr3, arr1.length, arr2.length);`},{header:"数组的填充",slug:"数组的填充",content:`int[] arr = new int[5];
Arrays.fill(arr, 10); // 将数组arr的所有元素填充为10`},{header:"数组的比较",slug:"数组的比较",content:`int[] arr1 = {1, 2, 3, 4, 5};
int[] arr2 = {1, 2, 3, 4, 5};
boolean isEqual = Arrays.equals(arr1, arr2); // 比较两个数组是否相等`},{header:"数组的转换",slug:"数组的转换",content:`int[] arr = {1, 2, 3, 4, 5};
String str = Arrays.toString(arr); // 将数组转换为字符串`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%96%B9%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"方法",slug:"方法",content:""},{header:"作用",slug:"作用",content:`提高了代码的复用性
提高了代码的可读性和可维护性`},{header:"格式",slug:"格式",content:`修饰符 返回值类型 方法名(数据类型 变量名, 数据类型 变量名, ...){
执行的代码
return 返回值;
}`},{header:"修饰符",slug:"修饰符",content:`public 公共的，任何类都可以访问
private 私有的，只能在本类中访问
protected 受保护的，在本类，子类中可以访问
static 静态的，可以被类名调用，也可以被对象调用
abstract 抽象的，不能被实例化，只能被继承
final 最终的，不能被继承`},{header:"返回值类型",slug:"返回值类型",content:`void 没有返回值
基本数据类型 返回基本数据类型
引用数据类型 返回引用数据类型
返回自定义的数据类型`},{header:"方法名",slug:"方法名",content:`见名知意
驼峰命名法(首字母小写，后面每个单词首字母大写)`},{header:"如何写一个方法",slug:"如何写一个方法",content:`明确参数
明确返回值 // 需求: 定义一个方法，能够计算两个数字的和 public static int getSum(int a, int b){ return a + b; }`},{header:"使用方法时需要注意的问题",slug:"使用方法时需要注意的问题",content:`方法与方法之间是平级关系，不能嵌套定义 // 错误案例:
public static int add (){ public void bbb(){ return 10; } return 10;
} 方法的返回值类型和返回值要匹配 public static int aaa (){ return 10;
}
protected static double aaa (){ return 10.0; // return 10; 也可以
}
public static String aaa (){ return "hello";
}
public static int aaa (){ return '1'; // 错误案例,编译报错
} 当没有返回值类型时，返回值类型为 void public static void aaa (){ return;
} void：没有什么特殊含义，只能写在返回值类型的位置上，表示没有返回值
返回值类型为 void，不要写 return 语句， 写了也不会报错但是可以省略且顺应 Java 语法规范`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E6%96%B9%E6%B3%95%E7%9A%84%E9%87%8D%E8%BD%BD.html",title:"",pathLocale:"/",contents:[{header:"重载(@Overload)",slug:"重载-overload",content:""},{header:"1. 重载的概念",slug:"_1-重载的概念",content:`重载：在同一个类中，出现多个方法的名字相同，但是它们的形参（参数个数、参数类型、参数顺序）不同的多个方法。
方法的重载与返回值类型无关。`},{header:"3. 重载和重写的区别",slug:"_3-重载和重写的区别",content:`重载：发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，通过同名不同参数的方法重载。 重写：子类根据需要对从父类继承来的方法进行改造，使得父类方法在子类中得到新的实现版本。
重写和重载都是实现多态的方式，区别在于重载发生于同一个类中，重载发生在编译期，重写发生于继承体系中，发生在运行期。 // 方法重载的案例
public class OverloadExample { public void test() { System.out.println("无参数方法被调用！"); } public void test(int a) { System.out.println("int类型参数方法被调用！"); } public void test(int a, double b) { System.out.println("int类型和double类型参数方法被调用！"); } public void test(double b, int a) { System.out.println("double类型和int类型参数方法被调用！"); } public void test(String str) { System.out.println("String类型参数方法被调用！"); } public static void main(String[] args) { OverloadExample ex = new OverloadExample(); ex.test(); ex.test(10); ex.test("hello"); }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E7%B1%BB%E4%B8%8E%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"类与类、类与接口、接口与接口",slug:"类与类、类与接口、接口与接口",content:""},{header:"类与类之间：继承关系，单继承，不可多继承；可以多层继承，不可循环继承",slug:"类与类之间-继承关系-单继承-不可多继承-可以多层继承-不可循环继承",content:`class Fu{ public void show(){ System.out.println("Fu show"); }
}
class Zi extends Fu{
}`},{header:"类与接口之间：实现关系，可以单一实现，也可以多实现",slug:"类与接口之间-实现关系-可以单一实现-也可以多实现",content:`interface Inter{ abstract void show();
}
interface Inter2{ abstract void eat();
}
class Demo implements Inter,Inter2{ public void show(){ System.out.println("Demo show"); } public void eat(){ System.out.println("Demo eat"); }
}`},{header:"接口与接口之间：继承关系，可以单继承，也可以多继承",slug:"接口与接口之间-继承关系-可以单继承-也可以多继承",content:`interface A{ public abstract void show();
}
interface B{ }
interface C extends A,B{ }
class Demo implements C{ public void show(){ System.out.println("Demo show"); }
}`},{header:"什么时候使用接口",slug:"什么时候使用接口",content:`abstract class Animal{ String name; public Animal(String name) { this.name = name; }; public abstract void eat(); //抽象方法 public void drink(){ System.out.println("动物都喝水"); }
}
interface Fly{ // 接口：谁用谁就继承 public abstract void fly();
}
interface Swim{ // 接口：谁用谁就继承 public abstract void swim();
}
class Dog extends Animal{ public Dog(String name) { super(name); } public void eat(){ System.out.println(name + "吃骨头"); } public void play(){ System.out.println( name + "玩球"); }
}
class Cat extends Animal implements Swim{ public void eat(){ System.out.println("吃鱼"); } public void catchMouse(){ System.out.println("抓老鼠"); } public void swim(){ System.out.println("猫本来不会游泳，继承了接口，那就会了"); }
}
class Pig extends Animal implements Fly, Swim{ public void eat(){ System.out.println("吃食"); } public void sleep(){ System.out.println("睡觉"); } public void fly(){ System.out.println("猪本来不会飞，继承了接口，那就会了"); } public void swim(){ System.out.println("猪本来不会游泳，继承了接口，那就会了"); }
} public class Test { public static void main(String[] args) { Dog dog = new Dog("旺财"); dog.eat(); // 旺财吃骨头 dog.play(); // 旺财玩球 Cat cat = new Cat(); cat.swim(); // 猫本来不会游泳，继承了接口，那就会了 Pig pig = new Pig(); pig.fly(); // 猪本来不会飞，继承了接口，那就会了 }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E7%BB%A7%E6%89%BF.html",title:"",pathLocale:"/",contents:[{header:"继承(extends)",slug:"继承-extends",content:`private、protected、构造方法不被继承、this、super等问题 类 B 继承 类 A
类 A：父类，超类，基类
类 B：子类，派生类`},{header:"继承的好处",slug:"继承的好处",content:`提高代码的复用性
让类与类之间产生继承关系，这是构成多态的前提条件`},{header:"继承的弊端",slug:"继承的弊端",content:`提高了代码的耦合性（耦合性：程序间的依赖关系） 开发原则: 高内聚，低耦合 高内聚：是指一个人的能力越强越好
低耦合：是指一个人的关系越少越好`},{header:"继承的特点",slug:"继承的特点",content:`在 java 中，类只支持单继承，不可以多继承，可以多层继承，不可以循环继承。 // 单继承
class Fu{}
class Zi extends Fu {} 子类不能继承父类中被 private 关键字所修饰的成员方法和变量。 class Fu{ private String name; int age;
}
class Zi extends Fu{ void show(){ System.out.println(age); // 可以继承 System.out.println(name); // 编译报错，因为父类中的name被私有了 }
} 子类可以继承父类中 protected 关键字修饰的成员方法，不能继承其成员变量。 class Fu{ protected String name; int age; protected void print(){ System.out.println(name); // 父类自己 }
}
class Zi extends Fu{ void show(){ System.out.println(age); // 可以继承 System.out.println(name); // 编译报错，因为父类中的name被protected保护 print(); // 可以继承 }
} 构造方法不能被继承。 class Fu{ int i = 10;
}
class Zi extends Fu{ int i = 20; public void show(){ i = 30; System.out.println(i); // 30 System.out.println(this.i); // 20 this指向调用的对象zi System.out.println(super.i); // 10 super指向继承的父类 }
}
class Demo { public static void main(String[] args) { Zi zi = new Zi(); zi.show(); }
}`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E9%87%8D%E5%86%99.html",title:"",pathLocale:"/",contents:[{header:"重写(@Override)",slug:"重写-override",content:"子类权限要大于父类、private修饰的不能重写、返回值类型可以不同的要求、静态的问题"},{header:"在子父类继承中成员方法的关系",slug:"在子父类继承中成员方法的关系",content:`// 父类成员方法与子类成员方法不同 class Fu { public void showFu(){ System.out.println("Fu show"); }
} class Zi extends Fu { public void showZi(){ System.out.println("Zi show"); }
} public class Test { public static void main(String[] args) { Zi z = new Zi(); z.showFu(); // 输出：Fu show z.showZi(); // 输出：Zi show }
}
// 父类成员方法与子类成员方法相同 class Fu { public void show(){ System.out.println("Fu show"); }
} class Zi extends Fu { public void show(){ System.out.println("Zi show"); }
} public class Test { public static void main(String[] args) { Zi z = new Zi(); z.show(); // 输出：Zi show 子类重写或者叫做覆盖 z.show(); // 输出：Zi show }
}`},{header:"重写注意事项",slug:"重写注意事项",content:`子类不能重写父类中的私有成员方法。 子类方法权限大于等于父类方法的权限。 public > protected > 默认 > private class Fu{ protected void print(){}
}
class Zi extends Fu{ public void print(){}
} 子类的方法的返回值类型可以和父类被重写方法的返回值类型不一致， 但是有一个条件，父类方法的返回值类型是子类方法返回值的父类。 class Fu{ public Person print(){}
}
class Zi extends Fu{ public Student print(){}
} 静态方法只能重写静态方法。`}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.html",title:"",pathLocale:"/",contents:[{header:"面向对象",slug:"面向对象",content:"new一个新对象会创建一个空间、对象的指向问题"},{header:"理解面向对象和面向过程",slug:"理解面向对象和面向过程",content:`旅游: 面向过程: 自己订票, 自己订酒店, 自己订车, 自己安排行程
面向对象: 找旅行社, 旅行社安排, 旅行社负责订票, 订酒店, 订车, 安排行程 开发: 面向过程: 自己写代码, 自己写文档
面向对象: 花钱找一个程序员, 这个程序员写代码, 程序员写文档`},{header:"类和对象",slug:"类和对象",content:`类: 类是事物的属性(外在特征)和行为(具备的功能)的集合，抽象的
比如说人类 这个就是类
对象: 具体存在的, 是一个类的具体的体现
比如说小明，是具体的某一个人，是人类的具体体现`},{header:"面向对象三大特性",slug:"面向对象三大特性",content:"封装 把客观事物封装成抽象的类, 并且类可以把自己的数据和方法只让可信的类或者对象操作, 对不可信的进行信息隐藏 继承 子类继承父类的特征和行为, 使得子类对象（实例）具有父类的实例域和方法, 即子类对象（实例）可以调用这些被继承的方法 多态 多种状态 父类定义一个方法不去实现, 让继承它的子类去实现, 每一个子类有不同的表现"},{header:"练习题",slug:"练习题",content:"类与对象的基础用法 一个对象指向一个地址，创建多个就分别指向不同的地址 创建(new 一个对象)就会开辟一个新的地址 当两个对象指向同一个地址时，一个对象的属性发生更改就都跟着改了"}]},{path:"/admin/Java/Java%E5%9F%BA%E7%A1%80/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E5%BE%81.html",title:"",pathLocale:"/",contents:[{header:"面向对象三大特征",slug:"面向对象三大特征",content:"封装 提高了代码的安全性，把属性私有化，提供公共的访问方式 继承 提高代码的复用性，一般是将公共的属性和方法放在父类中，子类中保留其特有的内容 多态 提高代码的扩展性，父类引用或者父接口指向子类对象，不同类型的子对象对父类中相同的方法，产生了不同的执行结果，多态属于编译时行为"}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Arrays.html",title:"",pathLocale:"/",contents:[{header:"Arrays",slug:"arrays",content:"需要导包，在 java.util 包下；数组工具类(构造方法是私有的，成员方法都是静态的)"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 void sort(int[] a)
按照升序对数组进行排序 String toString()
返回数组的字符串形式 int[] copyOf(Object[] original, int newLength)
复制数组，扩容 Arrays 扩容 与 System 扩容的区别在于一个是数组扩容，一个是 System 的内存扩容
// 扩容的案例
public static void main(String[] args) { int[] arr = {1, 2, 3}; System.out.println(Arrays.toString(arr)); // [1, 2, 3] int[] newArr = Arrays.copyOf(arr, 6); // 扩容的长度为6，System扩容写法不同 System.out.println(Arrays.toString(newArr)); // [1, 2, 3, 0, 0, 0]
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/BigDecimal.html",title:"",pathLocale:"/",contents:[{header:"BigDecimal",slug:"bigdecimal",content:"需要导包，在 java.math 包下"},{header:"常见构造方法",slug:"常见构造方法",content:`方法
作用 public BigDecimal(double val)
将 double 转换为 BigDecimal public BigDecimal(String val)
将 String 转换为 BigDecimal 注意: 如果期望结果更加准确的话，建议使用 BigDecimal(String val)的构造方法package com.wuziqi.gobang.controller;
import java.math.BigDecimal; public class DemoBigDecimal { public static void main(String[] args) { // public BigDecimal(String val) BigDecimal a = new BigDecimal("0.01"); System.out.println(a); // 0.01 BigDecimal b = new BigDecimal("1.10"); System.out.println(b); // 1.10 // public BigDecimal(double val) BigDecimal c = new BigDecimal(0.1); System.out.println(c); // 0.100000000000000005... BigDecimal d = new BigDecimal(1.0); System.out.println(d); // 1 }
}`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public BigDecimal add(另一个 BigDecimal 对象)
加法运算 public BigDecimal subtract(另一个 BigDecimal 对象)
减法运算 public BigDecimal multiply(另一个 BigDecimal 对象)
乘法运算 public BigDecimal divide(另一个 BigDecimal 对象)
除法运算 public BigDecimal divide(BigDecimal divisor,int scale,RoundingMode roundingMode)
除法运算除不尽 public BigDecimal divide(BigDecimal divisor,int scale,RoundingMode roundingMode)
divisor：另一个 BigDecimal 对象
scale：保留几位小数
roundingMode：舍入模式(ROUND_DOWN,ROUND_UP,ROUND_HALF_UP 等)
ROUND_DOWN：直接舍去(去尾)
ROUND_UP：直接进位(加头)
ROUND_HALF_UP：四舍五入 // 加法案例(加减乘除一样，这里以加法为例)
package com.wuziqi.gobang.controller;
import java.math.BigDecimal; public class DemoBigDecimal { public static void main(String[] args) { BigDecimal bd1 = new BigDecimal(0.1); BigDecimal bd2 = new BigDecimal(0.2); BigDecimal bd3 = bd1.add(bd2); System.out.println(bd3); // 0.30000... BigDecimal bd10 = new BigDecimal("0.1"); BigDecimal bd20 = new BigDecimal("0.2"); BigDecimal bd30 = bd10.add(bd20); System.out.println(bd30); // 0.3 我们想要的结果 // 使用 BigDecimal(String val)结果准确 }
}
// 除法(除不尽)
package com.wuziqi.gobang.controller;
import java.math.BigDecimal; public class DemoBigDecimal { public static void main(String[] args) { BigDecimal bd1 = new BigDecimal("10.0"); BigDecimal bd2 = new BigDecimal("3.0"); BigDecimal bd3 = bd1.divide(bd2, 2, BigDecimal.ROUND_DOWN); BigDecimal bd4 = bd1.divide(bd2, 3, BigDecimal.ROUND_UP); BigDecimal bd5 = bd1.divide(bd2, 4, BigDecimal.ROUND_HALF_DOWN); System.out.println(bd3); // 3.33 System.out.println(bd4); // 3.334 System.out.println(bd5); // 3.3333 }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Calendar.html",title:"",pathLocale:"/",contents:[{header:"Calendar",slug:"calendar",content:"需要导包，在 java.util 包下, 抽象类，使用时需要创建子对象"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 getInstance()
获取 Calender 的子对象 int get(int field)
获取年、月、日、小时、分钟、秒等 void set(int field, int value)
设置年、月、日、小时、分钟、秒等 final Date getTime()
获取 Date 对象(将 Calendar 转成 Date 类型) abstract void add(int field, int amount)
对年、月、日等进行增将或减量 public static void main(String[] args) { Calendar c = Calendar.getInstance(); // c: Calendar子对象 // 获取年、月、日、小时、分钟、秒等 int year = c.get(Calendar.YEAR); int month = c.get(Calendar.MONTH); int day = c.get(Calendar.DAY_OF_MONTH); int hour = c.get(Calendar.HOUR_OF_DAY); int minute = c.get(Calendar.MINUTE); int second = c.get(Calendar.SECOND); System.out.println(year + "年" + month + "月" + day + "日"); System.out.println(hour + "时" + minute + "分" + second + "秒"); // 设置年、月、日、小时、分钟、秒等 c.set(Calendar.YEAR, 2020); c.set(Calendar.MONTH, 10); // 月份是从0开始的 c.set(Calendar.DAY_OF_MONTH, 1); c.set(Calendar.HOUR_OF_DAY, 12); c.set(Calendar.MINUTE, 30); c.set(Calendar.SECOND, 30); System.out.println(c.getTime()); // Sun Nov 01 12:30:30 CST 2020 // 对年、月、日等进行增将或减量 c.add(Calendar.YEAR, 1); // 正数是加 c.add(Calendar.MONTH, 1); // 月份是从0开始的 c.add(Calendar.DAY_OF_MONTH, 1); c.add(Calendar.HOUR_OF_DAY, 12); c.add(Calendar.MINUTE, 30); c.add(Calendar.SECOND, 30); System.out.println(c.getTime()); // Thu Nov 01 12:30:30 CST 2021
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Collections%E5%B7%A5%E5%85%B7%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"Collections 工具类(对 List 进行排序)",slug:"collections-工具类-对-list-进行排序",content:"工具类(构造方法私有的，成员方法静态的)"},{header:"常用的成员方法",slug:"常用的成员方法",content:`方法
作用 public static <T extends Comparable<? super T>> void sort(List<T> list)
对 List 集合进行排序(自定义类) public static <T> void sort(List<T> list, Comparator<? super T> c)
对 List 集合进行排序(不含自定义类)`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.Collections; import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator; public class DemoCollections { public static void main(String[] args) { ArrayList<String> list = new ArrayList<String>(); list.add("aaa"); list.add("dd"); list.add("c"); list.add("bbbb"); // list有序的： System.out.println(list); // [aaa, dd, c, bbbb] // 不给定规则，默认按自然排序，即按字母顺序排序 Collections.sort(list); System.out.println(list); // [aaa, bbbb, c, dd] // 如果定规则，按照规则排序：比如按照字符长度排序 Collections.sort(list, new Comparator<String>() { @Override public int compare(String o1, String o2) { return o1.length() - o2.length(); } }); System.out.println(list); // [c, dd, aaa, bbbb] /** * List中存储的是自定义类的话， * 如果想要排序需要使用Comparable接口，重写compareTo方法 * 因为List是可以重复的，所以Comparable自然排序后，不会去重 * 这也是List和Set的区别，如果是Set集合则会去重 */ ArrayList<Person> persons = new ArrayList<Person>(); persons.add(new Person("tom", 10)); persons.add(new Person("jerry", 12)); persons.add(new Person("rose", 8)); persons.add(new Person("jack", 10)); persons.add(new Person("tom", 10)); Collections.sort(persons); System.out.println(persons); // 结果： // [Person{name='rose', age=8}, Person{name='jack', age=10}, // Person{name='tom', age=10}, Person{name='tom', age=10}, // Person{name='jerry', age=12}] }
}
class Person implements Comparable<Person> { private String name; private int age; public Person(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Person{" + "name='" + name + '\\'' + ", age=" + age + '}'; } @Override public int compareTo(Person o) { int i = this.age - o.age; return i == 0 ? this.name.compareTo(o.name) : i; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Date.html",title:"",pathLocale:"/",contents:[{header:"Date",slug:"date",content:"需要导包，在 java.util 包下"},{header:"常见构造方法",slug:"常见构造方法",content:`方法
作用 public Date()
分配 Date 对象并初始化，以便它代表它被创建时的日期和时间 public Date(long date)
分配 Date 对象并初始化，以便它代表 date 参数中给出的毫秒时间值`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public long getTime()
返回自 1970 年 1 月 1 日 00:00:00 毫秒值 public void setTime (long time)
设置自 1970 年 1 月 1 日 00:00:00 毫秒时间值`},{header:"格式化时间(SimpleDateFormat)",slug:"格式化时间-simpledateformat",content:`需要导包，在 java.text 包下
Date => String
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); String dateString = dateFormat.format(date);
String => Date
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); Date date = dateFormat.parse(dateString);`},{header:"实际应用",slug:"实际应用",content:`public static void main(String[] args) { Date date = new Date(); SimpleDateFormat dF1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); SimpleDateFormat dF2 = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss"); SimpleDateFormat dF3 = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss E"); String time1 = dF1.format(date); String time2 = dF2.format(date); String time3 = dF3.format(date); System.out.println(time1); // 2024-03-12 11:36:04 System.out.println(time2); // 2024年03月12日 11:36:04 System.out.println(time3); // 2024/03/12 11:36:04 星期二
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/File%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"File 类",slug:"file-类",content:`需要导包，在 java.io 下
什么是 File 类？
代表文件或者文件夹(目录)类，也就是说将文件或者文件夹，通过 File 类封装成对象。`},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public File(String pathname)
将给定的路径转换为 File 实例 public File(String parent, String child)
通过父路径和子路径创建新的 File 实例 public File(File parent, String child)
通过父路径和子路径创建新的 File 实例`},{header:"常见的成员方法",slug:"常见的成员方法",content:`创建 方法
作用 public boolean createNewFile()
创建文件 public boolean mkdir()
创建文件夹，只能创建一级 public boolean mkdirs()
创建文件夹，可以创建多级 删除 如果要删除的文件夹里边有子文件或者子文件夹，需要先删除子文件或文件夹，再删除该文件夹
通过 delete()删除时，被删除文件或者文件夹，不会进入电脑的回收站 方法
作用 public boolean delete()
删除文件或者文件夹 判断 方法
作用 public boolean exists()
判断是否存在 public boolean isDirectory()
判断是否是文件夹 public boolean isFile()
判断是否是文件 获取 方法
作用 public long length()
获取文件中的字节数 public String getName()
获取名称 public String getPath()
获取路径 public String getAbsolutePath()
获取绝对路径 public File getParentFile()
获取上级目录的 File 对象 public File[] listFiles()
获取目录中所有的子文件和子文件夹 重命名 方法
作用 public boolean renameTo(File dest)
把文件重命名为指定的文件路径，就是文件名称的修改`},{header:"递归删除文件夹 aaa",slug:"递归删除文件夹-aaa",content:`package com.wuziqi.gobang.IO; import java.io.File;
import java.io.IOException; public class DemoFile { public static void main(String[] args) throws IOException { // 递归删除 File file = new File("aaa"); delete(file); } public static void delete(File file){ File[] files = file.listFiles(); for(File f : files){ // 如果是文件夹，需要重新调用方法 if(f.isDirectory()){ delete(f); }else{ // 如果是文件，就直接删除 f.delete(); } // 最后，删除aaa这个根文件夹，没有文件了，可以直接删除 file.delete(); } };
}`},{header:"递归获取 aaa 目录下的所有.java 文件",slug:"递归获取-aaa-目录下的所有-java-文件",content:`package com.wuziqi.gobang.IO; import java.io.File; public class DemoFile { public static void main(String[] args) { // 递归获取aaa目录下的所有.java文件 File getJavas = new File("aaa"); print(getJavas); } public static void print(File file){ File[] files = file.listFiles(); for(File f : files){ // 如果是文件夹，再遍历 if(f.isDirectory()){ print(f); }else{ // 如果是文件，判断是否是java类型的文件 if(f.getName().endsWith(".java")){ System.out.println(f.getAbsolutePath()); } } } };
}`},{header:"其他方法的使用",slug:"其他方法的使用",content:`package com.wuziqi.gobang.IO; import java.io.File;
import java.io.IOException; public class DemoFile { public static void main(String[] args) throws IOException { // 文件对象 // public File(String pathname)：将给定的路径转换为 File 实例 File file1 = new File("C:\\\\mulu\\\\test.txt"); System.out.println(file1.getPath()); // public File(String parent, String child)：通过父路径和子路径创建 File实例 File file2 = new File("C:\\\\mulu\\\\subMulu", "test.txt"); System.out.println(file2.getPath()); // public File(File parent, String child)：通过父路径和子路径创建 File实例 File parentDir = new File("C:\\\\mulu\\\\subMulu"); File file3 = new File(parentDir, "test.txt"); System.out.println(file3.getPath()); // 创建 // public boolean createNewFile()：创建文件 File newFile = new File("C:\\\\mulu\\\\test.txt"); boolean isCreated = newFile.createNewFile(); System.out.println("文件是否创建成功：" + isCreated); // public boolean mkdir()：创建文件夹，只能创建一级 File folder1 = new File("C:\\\\mulu"); boolean isFolderCreated1 = folder1.mkdir(); System.out.println("文件夹是否创建成功：" + isFolderCreated1); // public boolean mkdirs()：创建文件夹，可以创建多级 File multiLevelFolder = new File("C:\\\\mulu\\\\subMulu1\\\\subMulu2"); boolean isMultiFolderCreated = multiLevelFolder.mkdirs(); System.out.println("多级文件夹是否创建成功：" + isMultiFolderCreated); // 删除 // public boolean delete()：删除文件或者文件夹 File fileToDelete = new File("C:\\\\mulu\\\\test.txt"); boolean isDeleted = fileToDelete.delete(); System.out.println("文件或文件夹是否删除成功：" + isDeleted); // 判断 // public boolean exists()：判断是否存在 File checkFile = new File("C:\\\\mulu\\\\test.txt"); boolean doesExist = checkFile.exists(); System.out.println("文件或文件夹是否存在：" + doesExist); // public boolean isDirectory() // 判断是否是文件夹 File directoryCheck = new File("C:\\\\mulu"); boolean isADirectory = directoryCheck.isDirectory(); System.out.println("是否为文件夹：" + isADirectory); // public boolean isFile()：判断是否是文件 File fileCheck = new File("C:\\\\mulu\\\\test.txt"); boolean isAFile = fileCheck.isFile(); System.out.println("是否为文件：" + isAFile); // 获取 // public long length()：获取文件中的字节数 File existingFile = new File("C:\\\\mulu\\\\test.txt"); long fileSizeInBytes = existingFile.length(); System.out.println("文件大小（字节）：" + fileSizeInBytes); // public String getName()：获取名称 File fileNameExample = new File("C:\\\\mulu\\\\test.txt"); String fileName = fileNameExample.getName(); System.out.println("文件名：" + fileName); // test.txt // public String getPath()：获取路径(传什么获取什么) File filePathExample = new File("C:\\\\mulu\\\\test.txt"); String filePath = filePathExample.getPath(); System.out.println("文件路径：" + filePath); // "C:\\mulu\\test.txt" // public String getAbsolutePath()：获取绝对路径(从盘符到文件名的整体) File absPathExample = new File("test.txt"); String absPath = absPathExample.getAbsolutePath(); System.out.println("文件绝对路径：" + absPath); // "C:\\mulu\\test.txt" // public File getParentFile()：获取上级目录的 File 对象 File parentDirExample = new File("C:\\\\mulu\\\\subMulu\\\\test.txt"); File parentDirectory = parentDirExample.getParentFile(); System.out.println("上级目录：" + parentDirectory.getPath()); // public File[] listFiles()：获取目录中所有的子文件和子文件夹 File dirToList = new File("C:\\\\mulu"); File[] contents = dirToList.listFiles(); if (contents != null) { for (File content : contents) { System.out.println(content.getName()); } } // 修改 // public boolean renameTo(File dest)： // 把文件重命名为指定的文件路径，就是文件名称的修改 File fileToRename = new File("C:\\\\mulu\\\\test.txt"); boolean isRenamed = fileToRename.renameTo(new File("C:\\\\mulu\\\\newTest.txt")); System.out.println("文件是否重命名成功：" + isRenamed); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Integer%E5%8C%85%E8%A3%85%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"Integer 包装类",slug:"integer-包装类",content:`包装类: 就是把基本数据类型包装成引用类型 基本数据类型
对应的包装类（位于 java.lang 包中） byte
Byte short
Short int
Integer long
Long float
Float double
Double char
Character boolean
Boolean`},{header:"Integer(int 类型包装类)",slug:"integer-int-类型包装类",content:""},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public Integer(int value)
创建 Integer 对象;int -> Integer public Integer(String s)
创建 Integer 对象;String 类型的数字 -> Integer // public Integer(int value):
Integer in1 = new Integer(12);
System.out.println(in1); // 12 // public Integer(String s)
Integer in2 = new Integer("12");
System.out.println(in2); // 12 // 只能是\`数字\`类型的String
Integer in3 = new Integer("abc");
System.out.println(in3); // 运行报错 // 超出Integer范围(就是int的范围)
Integer in4 = new Integer(11111111111111111); // 这是17位，int最大16位
System.out.println(in4); // 运行报错`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public int intValue()
将 Integer 类型的数字转换为 int 类型的数字 public boolean equals(Object obj)
比较两个 Integer 类型的数字是否相等 public static int parseInt(String s)
将字符串类型的数字转换为 int 类型的数字 public String toString()
将 Integer 类型的数字转换为字符串类型的数字 public static String toString(int i)
将 int 类型的数字转换为字符串类型的数字 public static Integer valueOf(int i)
将 int 类型的数字转换为 Integer 类型的数字 public static Integer valueOf(String s)
将字符串类型的数字转换为 Integer 类型的数字 // 最重要的使用方法案例：
System.out.println(Integer.parseInt("123")); // 123`},{header:"自动装箱和自动拆箱",slug:"自动装箱和自动拆箱",content:`自动装箱: int -> Integer
自动拆箱: Integer -> int Integer i = 10; // 自动装箱 => 手动装箱: Integer i = Integer.valueOf(10);
int n = i + 2; // 自动拆箱 => 手动拆箱: int n = i.intValue() + 2; Integer in = 12;
in = in + 20; // in = Integer.valueOf(in.intValue() + 20);`},{header:"基本数据类型和包装类之间的转换",slug:"基本数据类型和包装类之间的转换",content:`基本数据类型转换为包装类: 使用包装类的构造器 int num = 10;
Integer i = new Integer(num); 包装类转换为基本数据类型: 使用包装类中的方法 Integer i = new Integer(10);
int num = i.intValue(); 自动转换: 直接将包装类赋值给基本数据类型 Integer i = new Integer(10);
int num = i; 注意: 自动转换是编译器自动进行的, 不是我们手动进行的`},{header:"常见的问题",slug:"常见的问题",content:"Integer in1 = new Integer(127); Integer in2 = new Integer(127); System.out.println(in1 == in2); // false: 因为new出来的对象在内存中是不同的 Integer in3 = new Integer(128); Integer in4 = new Integer(128); System.out.println(in3 == in4); // false: 因为new出来的对象在内存中是不同的 Integer in5 = 127; Integer in6 = 127; System.out.println(in5 == in6); // true: 因为自动装箱, 会将127自动装箱成Integer对象 Integer in7 = 128; Integer in8 = 128; System.out.println(in7 == in8); // false: Integer范围: -128 - 127，范围内比较数值 System.out.println(in7.equals(in8)); // true: equals比较的是数值 Integer in9 = 126; Integer in10 = in9 + 1; Integer in11 = in9 + 1; // in11 是Integer类型；Integer对象的比较要用equals System.out.println(in10 == in11); // true System.out.println(in5 == in10); // true System.out.println(in5 == in2); // false System.out.println(in2 == in10); // false"}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Localdatetime.html",title:"",pathLocale:"/",contents:[{header:"LocalDateTime(jdk1.8 新出的日期类)",slug:"localdatetime-jdk1-8-新出的日期类",content:"写法简单，并且把 Date 和 Calendar 的用法都归纳总结了 LocalDate 表示日期，比如 2014-03-18。 LocalTime 表示时间，比如 22:30:40。 LocalDateTime 同时表示日期和时间，比如 2014-03-18T22:30:40。"},{header:"LocalDateTime 类",slug:"localdatetime-类",content:`需要导包，在 java.time 包下
没有构造方法(不能 new)`},{header:"LocalDateTime 获取当前类的方法",slug:"localdatetime-获取当前类的方法",content:`方法
作用 public static LocalDateTime now()
当前时间 public static LocalDateTime of(int year, int month, int dayOfMonth, int hour, int minute, int second)
获取传入时间 package com.wuziqi.gobang.controller;
import java.time.LocalDateTime; public class DemoNewDate { public static void main(String[] args) { LocalDateTime date1 = LocalDateTime.now(); System.out.println(date1); // 2024-03-13T11:29:58.939 LocalDateTime date2 = LocalDateTime.of(2022,2,22,22,22,22); System.out.println(date2); // 2022-02-22T22:22:22 }
}`},{header:"LocalDateTime 获取年月日时分秒方法",slug:"localdatetime-获取年月日时分秒方法",content:`方法
作用
方法
作用 getYear
获取年
getHour()
时 getMonthValue
获取月
getMinute()
分 getDayOfMonth
获取日
getSecond()
秒 package com.wuziqi.gobang.controller; import java.time.LocalDateTime; public class DemoNewDate { public static void main(String[] args) { LocalDateTime date = LocalDateTime.of(2022,2,22,22,22,22); System.out.println(date); // 2022-02-22T22:22:22 System.out.println(date.getYear()); // 2022 System.out.println(date.getMonthValue()); // 2 System.out.println(date.getHour()); // 22 }
}`},{header:"LocalDateTime 转换方法",slug:"localdatetime-转换方法",content:`方法
作用 LocalDate toLocalDate()
LocalDateTime 转成 LocalDate LocalTime toLocalTime()
LocalDateTime 转成 LocalTime package com.wuziqi.gobang.controller; import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime; public class DemoNewDate { public static void main(String[] args) { LocalDateTime date = LocalDateTime.of(2022,2,22,22,22,22); System.out.println(date); // 2022-02-22T22:22:22 LocalDate ld = date.toLocalDate(); System.out.println(ld); // 2022-02-22 LocalTime lt = date.toLocalTime(); System.out.println(lt); // 22:22:22 }
}`},{header:"LocalDateTime 解析和格式化方法",slug:"localdatetime-解析和格式化方法",content:`需要导包，DateTimeFormatter，在 java.time.format 包下 方法
作用 DateTimeFormatter.ofPattern("yyyy 年 MM 月 dd 日 HH:mm:ss E")
格式 String format(pattern)
格式化 LocalDateTime static LocalDateTime parse(String text, DateTimeFormatter formatter)
LocalDateTime 解析 package com.wuziqi.gobang.controller; import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter; public class DemoNewDate { public static void main(String[] args) { LocalDateTime date2 = LocalDateTime.of(2022,2,22,22,22,22); DateTimeFormatter pattern = DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm:ss E"); String ldf = date2.format(pattern); System.out.println(ldf); // 2022年02月22日 22:22:22 星期二 LocalDateTime ldt = LocalDateTime.parse(ldf, pattern); System.out.println(ldt);// 2022-02-22T22:22:22 }
}`},{header:"LocalDateTime 增量",slug:"localdatetime-增量",content:`方法
作用 LocalDateTime plusYears(long years)
增加 n 年 LocalDateTime plusXXX(long xxx)
增加 n xxx`},{header:"LocalDateTime 修改",slug:"localdatetime-修改",content:`方法
作用 LocalDateTime withYears(long years)
修改 n 年 LocalDateTime withXXX(long xxx)
修改 n xxx package com.wuziqi.gobang.controller; import java.time.LocalDateTime; public class DemoNewDate { public static void main(String[] args) { LocalDateTime date2 = LocalDateTime.of(2022,2,22,22,22,22); System.out.println(date2); // 2022-02-22T22:22:22 LocalDateTime ldj = date2.plusYears(2); System.out.println(ldj); // 2024-02-22T22:22:22 LocalDateTime ldx = date2.withYear(2022); System.out.println(ldx); // 2022-02-22T22:22:22 }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Math.html",title:"",pathLocale:"/",contents:[{header:"Math",slug:"math",content:"不需要导包，工具类(构造方法是私有的，成员方法是静态的)"},{header:"常用的成员方法",slug:"常用的成员方法",content:`方法
作用 static int abs(int a)
返回参数的绝对值 static int max(int a,int b)
返回两个参数中的较大值 static int min(int a,int b)
返回两个参数中的较小值 static double ceil(double a)
向上取整 static double floor(double a)
向下取整 static double pow(double a,double b)
返回 a 的 b 次幂 static long round(double a)
四舍五入 static double random()
0-1 之间的随机数 int num = Math.max(int a, int b); // 取较大值 double num = Math.random(); // 0-1之间的随机数`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Object%E7%B1%BB%E7%9A%84%E5%B8%B8%E7%94%A8Api.html",title:"",pathLocale:"/",contents:[{header:"Object 类的常用 Api",slug:"object-类的常用-api",content:""},{header:"1. equals",slug:"_1-equals",content:`用来比较两个对象是否相等
如果是基本数据类型，则是比较两个数大小是否相等
如果是引用数据类型，则是比较地址值
如果想要判断两个对象的属性是否相同，需要用到 Object 的 equals 的方法进行重写 // equals方法的重写示例 package com.wuziqi.gobang.controller; public class Demo { public static void main(String[] args) { /*name可以都为"null"字符串, 可以都为null,也可以都为"",这样会相等， *但是"null" != null != "" **/ System.out.println("" == null); // "" != null，"null"是空字符串 Pig p1 = new Pig("小猪", 18); Pig p2 = new Pig("小猪", 18); Pig p3 = new Pig("小狗", 18); Dog p4 = new Dog("小狗", 18); Pig p5 = new Pig("", 18); // p5 == p6 Pig p6 = new Pig("", 18); Pig p7 = new Pig("null", 18); // p7 == p8 Pig p8 = new Pig("null", 18); Pig p9 = new Pig(null, 18); // p8 != p9 boolean a = p1.equals(p2); boolean b = p2.equals(p3); // boolean c = p3.equals(p4); System.out.println(a); // true System.out.println(b); // false // System.out.println(c); 编译报错 System.out.println(p5.equals(p6)); // true System.out.println(p7.equals(p8)); // true System.out.println(p5.equals(p7)); // false System.out.println(p8.equals(p9)); // false System.out.println(p5.equals(p9)); // false }
} class Pig extends Object { private String name; private int age; public Pig(String name, int age) { this.name = name; this.age = age; } // 这块是鼠标右键生成的equals方法重写 @Override public boolean equals(Object o) { // 判断是否指向同一个对象 if (this == o) return true; // 判断有参数为空(null)以及判断两个对象是否同一种类 if (o == null || getClass() != o.getClass()) return false; Pig pig = (Pig) o; return age == pig.age && name.equals(pig.name); } // // 这是按照思路自己重写的equals写法，用来弄清重写的意图
// @Override
// public boolean equals(Object obj){
// Pig p = (Pig) obj;
// // 限定不能为空参传入
// if (obj == null) return false;
// // 限定传入对象需要与入参对象类型一致
// if (!(obj instanceof Pig)) return false;
// // String也有一个equals方法用来判断是否相等
// return this.name.equals(p.name) && this.age == p.age;
// }
} class Dog { private String name; private int age; Dog(String name, int age) { this.name = name; this.age = age; }
}`},{header:"2. toString",slug:"_2-tostring",content:`如果不重写方法的话，获取到的是类名加上@加上对象所在的地址值
通过鼠标右键重写的方法会打印出来转成字符串形式的内容 package com.wuziqi.gobang.controller; public class Demo { public static void main(String[] args) { // 不重写toString()方法 Dog dog1 = new Dog("小明", 18, "公"); // 下边两个方法的打印结果一样， // 都是com.wuziqi.gobang.controller.Dog@23fc625e System.out.println(dog1); System.out.println(dog1.toString()); // 重写toString()方法后 Dog dog2 = new Dog("小灰", 18, "母"); System.out.println(dog2.toString()); // Dog{name='小灰', age=18, sex='母'} }
}
class Dog extends Object{ private String name; private int age; private String sex; public Dog(String name, int age, String sex) { this.name = name; this.age = age; this.sex = sex; } @Override public String toString() { return "Dog{" + "name='" + name + '\\'' + ", age=" + age + ", sex='" + sex + '\\'' + '}'; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/Random.html",title:"",pathLocale:"/",contents:[{header:"Random",slug:"random",content:"需要导包， 在 java.util 包下"},{header:"构造方法",slug:"构造方法",content:`Random() 创建一个新的随机数生成器 方法
作用 Random()
创建一个新的随机数生成器`},{header:"常用方法",slug:"常用方法",content:`方法
作用 int nextInt(int n)
返回一个伪随机数，范围在 0（包括）到 n（不包括）之间 Random r = new Random();
for(int i = 0; i < 10; i++){ int nI = r.nextInt(10); System.out.println(nI); // 输出结果可以为： 0 1 4 3 7 8 2 6 9 5
}`},{header:"获取 1-100 之间的随机数",slug:"获取-1-100-之间的随机数",content:""},{header:"Math 方法",slug:"math-方法",content:"int num = (int)(Math.random() * 100) + 1;"},{header:"Random 方法",slug:"random-方法",content:`Random r = new Random();
int num = r.nextInt(100) + 1;`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/StringBuilder.html",title:"",pathLocale:"/",contents:[{header:"StringBuilder",slug:"stringbuilder",content:`其实就是用来拼接字符串的，比 StringBuffer 多了一个 toString 方法，可以返回一个 String 对象；
StringBuilder 和 StringBuffer 非常像，除了构造和 toString 方法不同之外，其他方法都一样。 什么是 StringBuilder？ 一个可变的字符序列，String 是不可变的
字符串的缓冲区
是一个容器`},{header:"StringBuilder 容器的特点",slug:"stringbuilder-容器的特点",content:"缓冲区可以装任何的东西，但是装进去就取不出来了，而且，装进去的数据都会变成字符串。"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public StringBuilder()
构造一个不带任何字符的字符串生成器，其初始容量为 16 个字符 public StringBuilder(String str)
构造一个指定内容的字符串生成器。(初始容量: 16 + 字符串参数的长度)`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public StringBuilder append(任意类型 b)
追加 public int capacity()
返回当前容量 public StringBuilder reverse()
反转 public String toString()
此字符序列的字符串表示形式(StringBuilder => String)`},{header:"StringBuilder 和 String 转换",slug:"stringbuilder-和-string-转换",content:`String => StringBuilder
StringBuilder sb = new StringBuilder("abc");
StringBuilder => String
String str = sb.toString();`},{header:"案例",slug:"案例",content:`package com.wuziqi.gobang.controller; public class DemoStringBuilder { public static void main(String[] args) { // public StringBuilder() StringBuilder sb1 = new StringBuilder(); System.out.println(sb1); // 16位 // public StringBuilder(String str) StringBuilder sb2 = new StringBuilder("abc"); System.out.println(sb2); // "abc" StringBuilder sb3 = new StringBuilder("我这是一个超过了16位的一个特别长的字符"); System.out.println(sb3); // 默认16位，超出部分自动扩容 // public StringBuilder append(任意类型 b) StringBuilder sb = new StringBuilder(); sb.append("abc"); sb.append(true); sb.append(123.456); sb.append('a'); Pig pig= new Pig(); sb.append(pig); sb.append(123); System.out.println(sb); // 输出结果: // abctrue123.456acom.wuziqi.gobang.controller.Pig@23fc625e123 // public int capacity() int length = sb.capacity(); System.out.println("当前容量:" + length); // 当前容量:114 // public StringBuilder reverse() StringBuilder sbR = sb.reverse(); System.out.println(sbR); // 输出反转后结果: // 321e526cf32@giP.rellortnoc.gnabog.iqizuw.moca654.321eurtcba }
}
class Pig{ Pig(){}
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/String%E5%AD%97%E7%AC%A6%E4%B8%B2.html",title:"",pathLocale:"/",contents:[{header:"String 字符串",slug:"string-字符串",content:`什么是 String？ String 类用于表示和操作字符串。
String 类是 final 类型的，因此不能被继承。
字符串是常量，一旦被赋值，就不能被更改(长度不可以改变的字符序列)。 String 是一个引用数据类型
是 jdk 给我们提供好的一个现成的 String 类
"abc"既是一个字符串常量，又是一个字符串的对象(实例)`},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 String()
初始化一个新创建的 String 对象，使其表示一个空字符序列。 public String(byte[] bytes)
将字节数组转成字符串 public String(byte[] bytes,int offset,int length)
将字节数的一部分组转成字符串 public String(char[] value)
分配一个新的 String，将字符数组转成字符串 public String(char[] value,int offset,int count)
将字符数组的一部分转成字符串 public String(String original)
初始化一个新的 String 对象，使其表示一个与参数相同的字符序列；换句话说，新创建的字符串是该参数字符串的副本。 String s = "abc" // 需要注意长度的问题
public static void main(String[] args) { // public String(byte[] bytes) byte[] bys1 = {97, 98, 99, 100, 101 }; String str1 = new String(bys1); System.out.println(str1); // 输出: abcde // public String(byte[] bytes,int offset,int length) byte[] bys2 = {97, 98, 99, 100, 101 }; String str2 = new String(bys2, 2,3); System.out.println(str2); // 输出: cde // 报错 java.lang.StringIndexOutOfBoundsException: String index out of range: 5 byte[] bysError = {97, 98, 99 }; String strError = new String(bysError, 2,3); System.out.println(strError); // 报错 // public String(char[] value) char[] chs1 = {'a', 'b', 'c', 'd', 'e'}; String str3 = new String(chs1); System.out.println(str3); // 输出: abcde // public String(char[] value,int offset,int count) char[] chs2 = {'a', 'b', 'c', 'd', 'e'}; String str4 = new String(chs2, 0, 4); System.out.println(str4); // 输出: abcd
}`},{header:"常见的问题",slug:"常见的问题",content:`通过 new 出来的 String 对象和直接赋值出来的 String 对象有什么区别？ new 出来的，在内存中有两个对象；new 出来的字符串对象是存放在堆中的。
直接赋值的对象在内存中只有一个对象；字符串是存在字符串常量池中的。 String s1 = "abc";
String s2 = "abc";
String s3 = new String("abc");
System.out.println(s1 == s2); // true
System.out.println(s1 == s3); // false
System.out.println(s2 == s3); // false String s1 = "abc";
String s2 = "ab";
String s3 = s2 + "c"; // 相当于s2 的副本再去加c，副本不是s2
System.out.println(s1 == s2); // false
System.out.println(s1 == s3); // false 常量池是"ab "+ "c"；不是s2 + "c"
System.out.println(s2 == s3); // false String s1 = "abc";
String s2 = "ab" + "c";
System.out.println(s1 == s2); // true`},{header:"成员方法",slug:"成员方法",content:`方法
作用 public char charAt(int index)
获取指定索引对应的字符 public int compareTo(String anotherString)
按字典顺序比较两个字符串 public String concat(String str)
字符串拼接 public String toLowerCase()
字符都转换为小写 public String toUpperCase
字符都转换为大写 public boolean equals(Object anObject)
比较两个字符串的内容是否一致 public boolean equalsIgnoreCase(String anotherString)
比较两个字符串的内容是否一致(不区分大小写) public int lastIndexOf(int ch)
返回指定字符在此字符串中最后一次出现处的索引，找不到-1 public boolean isEmpty()
是否为空串 public int length()
返回此字符串的长度 public boolean startsWith(String prefix)
测试此字符串是否以指定的前缀开始 public boolean endsWith(String suffix)
测试此字符串是否以指定的后缀结束 public String replace(char oldChar,char newChar)
替换字符串，返回一个新的字符串 public byte[] getBytes()
将字符串转换成字节数组 public char[] toCharArray()
将此字符串转换为一个新的字符数组 public String trim()
去除空格，返回字符串的副本 public String substring(int beginIndex)
截取，从指定的索引到结尾 public String substring(int beginIndex,int endIndex)
截取，从指定的索引开始到指定的索引结束(包头不包尾) public String[] split(String regex)
根据给定正则表达式的匹配拆分此字符串 public String replace(String target,String replacement)
替换子字符串`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/System.html",title:"",pathLocale:"/",contents:[{header:"System",slug:"system",content:"系统类，不用导包，当然也不能实例化"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 static void exit(int status)
退出 JVM 虚拟机 一般是 0 static long currentTimeMillis()
获取当前系统日期时间毫秒值 static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
复制数组(底层用来扩容数组) static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
src：原数组
srcPos：原数组的起始位置
dest：新数组
destPos：新数组的起始位置
length：复制的个数 // 扩容的案例
public class SystemDemo { public static void main(String[] args) { int[] src = {1, 2, 3}; int[] dest = new int[5]; // 5：新数组的长度，也是扩容后的长度 System.arraycopy(src, 0, dest, 0, src.length); for (int i = 0; i < dest.length; i++) { System.out.print(dest[i] + " "); // 输出结果：1 2 3 0 0, 后面的两个0是扩容的结果 } }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/UUID.html",title:"",pathLocale:"/",contents:[{header:"UUID",slug:"uuid",content:`需要导包，在 java.util 包下
一般不用他的构造`},{header:"常见成员方法",slug:"常见成员方法",content:`方法
作用 static UUID randomUUID()
随机数序列 String toString()
转成字符串类型 String uuid = UUID.randomUUID().toString();
System.out.println(uuid);
// 输出结果带-：dcf611f4-80c8-4610-ae94-1df5e9694af9
uuid = uuid.replaceAll("-", "");
System.out.println(uuid);
// 输出结果不带-：dcf611f480c84610ae941df5e9694af9`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%85%B3%E4%BA%8Ejar%E5%8C%85.html",title:"",pathLocale:"/",contents:[{header:"关于 jar 包",slug:"关于-jar-包",content:`如何打成 jar 包 export 导出 -> 选择 jar 文件类型 -> 启动项选择当前项目的启动项 -> 一路默认 如何运行 jar 包 下载转换器，转成 .exe 文件运行
在 jar 包所在路径下，输入 java -jar 文件名.jar 即可运行`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E4%BE%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",title:"",pathLocale:"/",contents:[{header:"单例设计模式",slug:"单例设计模式",content:"使用单例设计模式，能够实现，一个类只能有一个对象。"},{header:"如何实现单例设计模式",slug:"如何实现单例设计模式",content:`方式一：立即加载
优点：不会出现多线程并发访问问题
缺点：太早进入内存，又太晚消失了，生命周期长，占内存
package com.api.SingleMode; public class mode01 { public static void main(String[] args) { // 只有一个对象，所以输出true，都是地址值 Singleton singleton1 = Singleton.getInstance(); Singleton singleton2 = Singleton.getInstance(); System.out.println(singleton1 == singleton2); // true }
} class Singleton { private static final Singleton s = new Singleton(); private Singleton() { } public static Singleton getInstance() { return s; }
}
方式二：延迟加载
优点：不占用内存
缺点：加载慢；线程不安全，多线程并发访问时，可能会出现多个对象，即不是单例
package com.api.SingleMode; public class mode02 { public static void main(String[] args) { // 只有一个对象，所以输出true，都是地址值 Singleton2 singleton1 = Singleton2.getInstance(); Singleton2 singleton2 = Singleton2.getInstance(); System.out.println(singleton1 == singleton2); // true }
} class Singleton2 { private static Singleton2 s; private Singleton2() { } public static Singleton2 getInstance() { // 只有第一次执行，后期不进入了，所以还是一个对象 if (s == null){ s = new Singleton2(); } return s; }
}`},{header:"延迟加载的问题(多线程并发访问可能不再是单例模式)",slug:"延迟加载的问题-多线程并发访问可能不再是单例模式",content:`package com.api.SingleMode; public class mode03 { public static void main(String[] args) { new Thread("线程A") { @Override public void run() { Singleton3 singleton1 = Singleton3.getInstance(); System.out.println(getName() + ":" + singleton1); } }.start(); new Thread("线程B") { @Override public void run() { Singleton3 singleton2 = Singleton3.getInstance(); System.out.println(getName() + ":" + singleton2); } }.start(); // 可能的结果1：还是单例模式 // 线程A:com.api.SingleMode.Singleton3@5b21a71 // 线程B:com.api.SingleMode.Singleton3@5b21a71 // 可能的结果2：不是单例模式了 // 线程B:com.api.SingleMode.Singleton3@49fb8056 // 线程A:com.api.SingleMode.Singleton3@5247863c }
} class Singleton3 { private static Singleton3 s; private Singleton3() { } public static Singleton3 getInstance() { // 只有第一次执行，后期不进入了，所以还是一个对象 if (s == null) { s = new Singleton3(); } return s; }
}`},{header:"解决延迟加载出现的问题(多线程同步机制)",slug:"解决延迟加载出现的问题-多线程同步机制",content:`优点：不占用内存，解决多线程并发访问时，可能会出现多个对象，即不是单例
缺点：每次抢到进程后要判断是否上锁，效率低
package com.api.SingleMode; public class mode04 { public static void main(String[] args) { Singleton4 singleton1 = Singleton4.getInstance(); Singleton4 singleton2 = Singleton4.getInstance(); new Thread("线程A") { @Override public void run() { while (true) { System.out.println(getName() + ":" + singleton1); } } }.start(); new Thread("线程B") { @Override public void run() { while (true) { System.out.println(getName() + ":" + singleton2); } } }.start(); }
} class Singleton4 { private static Singleton4 s; private Singleton4() { } public static synchronized Singleton4 getInstance() { // 只有第一次执行，后期不进入了，所以还是一个对象 if (s == null) { s = new Singleton4(); } return s; }
}`},{header:"单例模式最终方案",slug:"单例模式最终方案",content:`把同步方法改为同步代码块，解决效率问题
优点：不占内存，解决线程安全问题，解决效率问题
package com.api.SingleMode; public class mode05 { public static void main(String[] args) { Singleton5 singleton1 = Singleton5.getInstance(); Singleton5 singleton2 = Singleton5.getInstance(); new Thread("线程A") { @Override public void run() { while (true) { System.out.println(getName() + ":" + singleton1); } } }.start(); new Thread("线程B") { @Override public void run() { while (true) { System.out.println(getName() + ":" + singleton2); } } }.start(); // 结果： }
} class Singleton5 { private static Singleton5 s; private Singleton5() { } public static Singleton5 getInstance() { // 只有第一次执行，后期不进入了，所以还是一个对象 if (s == null) { synchronized (Singleton5.class){ if (s == null){ // 这个判断解决并发问题 s = new Singleton5(); } } } return s; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%AF%E5%8F%98%E5%8F%82%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"可变参数",slug:"可变参数",content:`什么是可变参数？
比如求两个数的和，可以知道是两个参数；求三个数的和，可以知道是三个参数；求 N(未知)个数的和，参数就是可变参数。`},{header:"可变参数的格式",slug:"可变参数的格式",content:`修饰符返 回值类型 方法名(数据类型... 变量名){
执行语句
return 返回值;
}`},{header:"可变参数的本质",slug:"可变参数的本质",content:"可变参数的本质其实就是数组容器。"},{header:"注意事项",slug:"注意事项",content:`当一个方法中，有多个参数时，并且其中有一个参数是可变参数，那可变参数必须放在最后。
package com.wuziqi.gobang.IO; import java.util.Arrays; public class DemoKbcs { public static void main(String[] args) { int total = getNum(1,2,3); // 可变参数传参求值 // int total = getNum({1,2,3}); // 数组传参求值 System.out.println(total); // 6 getLing(4, 16, 12,13,14); } // 可变参数 public static int getNum(int...i){ // int[] i = {1,2,3} <=> int...3 System.out.println(i); // [1,2,3] System.out.println(i.length); // 3 int sum = 0; for (int j : i) { sum += j; } return sum; } // 参数都是一样的，不是重载，下边放开会爆红 // 数组和可变参数的形参格式不一样 // public static int getNum(int[] i){ // System.out.println(i); // [1,2,3] // System.out.println(i.length); // 3 // int sum = 0; // for (int j : i) { // sum += j; // } // return sum; // } public static void getLing(int i, int j, int...k){ // getLing(4, 16, 12, 13, 14); System.out.println(i); // 4 System.out.println(j); // 16 // 可变参数放最后，int...k其实是12, 13, 14 System.out.println(k); // [I@3f99bd52 System.out.println(k.length); // 3 System.out.println(Arrays.toString(k)); // [12, 13, 14] }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%BC%82%E5%B8%B8.html",title:"",pathLocale:"/",contents:[{header:"异常",slug:"异常",content:`需要导包，在 java.lang 下
异常的体系结构?`},{header:"处理异常",slug:"处理异常",content:`主要针对编译时期异常(非 RuntimeException，即 Exception)的处理，就是明明代码和格式都没问题，
但是编译时还是有异常警告 捕获：一般都不用写，可以快速生成
try { // 出现红线的代码
} catch(异常类名 对象名){ // 处理方案
} finally { // 释放资源 // 无论是否出现异常，都会执行
}
抛：throws 被动抛出：throws 格式：throws 异常类名
写在什么位置：方法声明上
抛的是编译时期(Exception)异常，哪里调用跑哪里，调用方继续处理
抛的是运行时期(RuntimeException)异常，哪里调用抛哪里，调用方不需处理
在子父类中，如果父类没有抛，子类重写方法也不能抛，而且，就算父类抛异常了，
子类抛的异常的类也只能是父类异常的子类或者本身 主动抛出：throw 格式：throw 异常对象
写在什么位置：方法体中
抛的是编译时期(Exception)异常，哪里调用跑哪里，调用方不需处理
抛的是运行时期(RuntimeException)异常，哪里调用跑哪里，调用方不需处理 自定义异常类：需要去继承你想继承的异常(Exception、RuntimeException)
// 捕获一(多个ctach)
package com.wuziqi.gobang.controller; import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date; public class DemoYiChang { public static void main(String[] args) { try { SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); String s1 = "2024-02-13"; // 符合格式走try String s2 = "2024/02/13"; // 不符合格式，出现异常，走catch Date date1 = sdf.parse(s1); // 不处理异常时，parse会有红线 System.out.println(date1); // Tue Feb 13 00:00:00 CST 2024 /** * 1/0会出现异常 * 出现异常就终止，不再往下执行 * 同时底层创建对象，new ArithmeticException() */ System.out.println(1/0); /** * 上一步已经异常，所以不会走到这一步了 * 如果走到这一步，出现异常，底层创建对象，new ParseException() */ System.out.println(sdf.parse(s2)); }catch (ParseException e) { /** * ParseException e：形参 * 捕获的异常类型，可以根据报错后的提示来添加 * 实参：ParseException e = new ParseException() */ System.out.println("捕获了s2的异常为" + e); }catch(ArithmeticException e){ System.out.println("异常可以连续捕获!"); } /** * 与异常无关，外部逻辑，必然会执行 */ System.out.println("这块必定会执行!"); }
}
// 常用
// 捕获二(利用多态，形参为父类，实参为子类)
try { String s = "2024/02/13"; SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); System.out.println(1/0); System.out.println(sdf.parse(s));
}catch(Exception e){// Exception e = new 异常对象(): 多态的妙用(Fu fu = new Zi()) System.out.println("异常类是父类，传入父类当然就不用管是哪种异常对象了");
}
System.out.println("这块必定会执行!");
// 抛(被动抛)
package com.wuziqi.gobang.controller; import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date; public class DemoYiChang { /** * 被动接收异常方可以捕获也可以继续抛出 main方法调用了aaa方法，aaa方法中抛出了异常，main方法捕获了异常 异常一旦抛出，就会执行catch代码块 */ public static void main(String[] args) { System.out.println("这块必定会执行!"); try { aaa(); // 调用 } catch (ParseException e) { e.printStackTrace(); } } public static void aaa() throws ParseException { // 被动抛出去 bbb(); // 调用 } public static void bbb() throws ParseException { // 被动抛出去 String s = "2024/02/13"; SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); Date date = sdf.parse(s); System.out.println(date); }
}
// 抛(主动抛，编译时期异常)
package com.wuziqi.gobang.controller; public class DemoYiChang { public static void main(String[] args) { try { eat("苹果"); } catch (Exception e) { e.printStackTrace(); } } public static void eat(String food) throws Exception { if (food.startsWith("肉")){ System.out.println("我喜欢吃肉"); }else{ // 主动抛出异常 Exception e = new Exception("我只喜欢吃肉，没有肉就异常了!"); throw e; // throw new Exception("我只喜欢吃肉，没有肉就异常了!"); } }
}
// 抛(主动抛，运行时期异常)
package com.wuziqi.gobang.controller; public class DemoYiChang { public static void main(String[] args) { Person p = new Person(); p.eat("大白菜"); }
}
class Person{ public void eat(String food){ if(food.endsWith("肉")){ System.out.println("我喜欢吃"+ food); }else{ throw new RuntimeException("我只喜欢吃肉，没有肉会异常啊！"); } }
}
// 自定义异常类(运行时期异常)
package com.wuziqi.gobang.controller; public class DemoYiChang { public static void main(String[] args) { Person p = new Person(); p.eat("大白菜"); }
}
class Person{ public void eat(String food){ if(food.endsWith("肉")){ System.out.println("我喜欢吃"+ food); }else{ throw new NotEatMeetException("我只喜欢吃肉，没有肉会异常啊！"); } }
}
class NotEatMeetException extends RuntimeException{ public NotEatMeetException(){} public NotEatMeetException(String message){ super(message); }
}`},{header:"案例(RuntimeException 处理异常链)",slug:"案例-runtimeexception-处理异常链",content:`/** * 1.将编译时期异常转化为运行时期异常 * 2.使用 RuntimeException 处理异常链，不用挨个抛或者捕获
*/
package com.wuziqi.gobang.controller; public class DemoYiChang { public static void main(String[] args) { aaa(); } public static void aaa() { bbb(); } public static void bbb() { ccc(); } public static void ccc() { try{ String s = "2024/02/13"; SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); Date date = sdf.parse(s); System.out.println(date); }catch(Exception e){ // 编译时期异常 throw new RuntimeException(); // 运行时期异常 } }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%9E%9A%E4%B8%BE.html",title:"",pathLocale:"/",contents:[{header:"枚举",slug:"枚举",content:"枚举就是特殊的单例，只不过单例只能有一个对象，但是枚举可以有几个对象，但是也不能创建无数多个对象。"},{header:"自定义枚举",slug:"自定义枚举",content:`package com.api.Enum; public class Demo01 { public static void main(String[] args) { Week mon = Week.Mon; Week tue = Week.Mon; Week mon1 = Week.Mon; System.out.println(mon); System.out.println(tue); System.out.println(mon1); System.out.println(mon == mon1); System.out.println(mon == tue); // 因为是单例模式，所以是true // com.api.Enum.Week@23fc625e // com.api.Enum.Week@23fc625e // com.api.Enum.Week@23fc625e // true // true System.out.println(mon.getName()); // 星期一 mon.show(); // 我是星期一 }
} /*
// 自定义枚举类(一)
class Week { public static final Week Mon = new Week(); public static final Week Tue = new Week(); public static final Week Thi = new Week(); private Week() { }
}
*/ /*
// 自定义枚举类(二)
class Week { public static final Week Mon = new Week("星期一"); public static final Week Tue = new Week("星期二"); public static final Week Thi = new Week("星期三"); private String name; private Week(String name) { this.name = name; } public String getName() { return name; }
}
*/ // 自定义枚举类(三)
abstract class Week { private String name; static final Week Mon = new Week("星期一") { public void show() { System.out.println("我是星期一"); } }; static final Week Tue = new Week("星期二") { public void show() { System.out.println("我是星期二"); } }; static final Week Thi = new Week("星期三") { public void show() { System.out.println("我是星期三"); } }; private Week(String name) { this.name = name; } public abstract void show(); public String getName() { return name; }
}`},{header:"真正的枚举类",slug:"真正的枚举类",content:`package com.api.Enum; public class Enum01 { public static void main(String[] args) { Enum mon = Enum.MONDAY; Enum tue = Enum.TUESDAY; Enum mon1 = Enum.MONDAY; System.out.println(mon); System.out.println(tue); System.out.println(mon1); System.out.println(mon == mon1); System.out.println(mon == tue); // MONDAY // TUESDAY // MONDAY // true // false System.out.println(mon.getName()); // 星期一 mon.show(); // 我是星期一 }
}
/*
// 格式一
enum Enum{ MONDAY,TUESDAY,WEDNESDAY; private Enum() { System.out.println("构造方法"); }
}
*/ /*
// 格式二
enum Enum{ MONDAY("星期一"),TUESDAY("星期二"),WEDNESDAY("星期三"); private String name; private Enum(String name) { this.name = name; } public String getName() { return name; }
}
*/ // 格式三
enum Enum { MONDAY("星期一") { public void show() { System.out.println("我是星期一"); } }, TUESDAY("星期二") { @Override public void show() { System.out.println("我是星期二"); } }, WEDNESDAY("星期三") { public void show() { System.out.println("我是星期三"); } }; private String name; private Enum(String name) { this.name = name; } public String getName() { return name; } public abstract void show();
}`},{header:"注意事项",slug:"注意事项",content:`枚举类必须用 enum 关键字类修饰
任何枚举类默认都继承了 Enum 类
任何枚举类中都有默认的私有空参构造
枚举项必须放在第一行
枚举项与枚举项之间要用","隔开，最后一个枚举项后用";"结束
枚举类中可以有抽象方法，但是一旦有抽象方法的话，枚举项就必须去实现它
枚举可以用在 switch 语句中`},{header:"枚举的常见方法",slug:"枚举的常见方法",content:`方法
作用 public String toString()
枚举常量名 public final String name()
枚举常量的名称 public final int ordinal()
枚举项的下标值，从 0 开始 public final int compareTo(E o)
两个枚举项的下标差 public static < T extends Enum > T valueOf(Class<T> enumType, String name)
获取字节码文件中，指定名称的枚举项 public static <T> T valueOf(String name)
获取指定名称的枚举项 public static T[] values()
所有枚举项组成的数组 package com.api.Enum; public class Enum02 { public static void main(String[] args) { Enum1 mon = Enum1.MONDAY; Enum1 tue = Enum1.TUESDAY; Enum1 wed = Enum1.WEDNESDAY; // public String toString()：返回枚举项名称 // public final String name()：返回枚举项名称 // public final int ordinal()：返回枚举项下标，从0开始 // public final int compareTo(E o)：前边的下表减去后边的下标值 // public static < T extends Enum > T valueOf(Class<T> enumType, // String name)：获取字节码文件中，指定名称的枚举项 // public static T valueOf(String)：获取指定名称的枚举项 // public static T[] values()：所有枚举项组成的数组 System.out.println(mon); System.out.println(mon.toString()); System.out.println(mon.name()); System.out.println(tue.ordinal()); System.out.println(mon.compareTo(wed)); System.out.println(tue.compareTo(mon)); System.out.println(tue.valueOf(Enum1.class, "TUESDAY")); System.out.println(tue.valueOf("TUESDAY")); System.out.println(Enum1.values()); Enum1 [] values = Enum1.values(); for (Enum1 e : values){ System.out.println(e); // MONDAY // TUESDAY // WEDNESDAY } // 结果： // MONDAY // MONDAY // MONDAY // 1 // -2 // 1 // TUESDAY // TUESDAY // [Lcom.api.Enum.Enum1;@3f99bd52 }
}
enum Enum1 { MONDAY("星期一") { public void show() { System.out.println("我是星期一"); } }, TUESDAY("星期二") { @Override public void show() { System.out.println("我是星期二"); } }, WEDNESDAY("星期三") { public void show() { System.out.println("我是星期三"); } }; private String name; private Enum1(String name) { this.name = name; } public String getName() { return name; } public abstract void show();
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%B3%9B%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"泛型",slug:"泛型",content:`什么是泛型？
有泛型的地方就要指定参数类型了，不指定默认就是 Object 类。
泛型的定义格式？ <E>
<E,M> 泛型的作用？ 避免了强制类型转换 限制了集合中元素的数据类型`},{header:"泛型的基本使用",slug:"泛型的基本使用",content:`package com.wuziqi.gobang.controller; import java.util.ArrayList;
import java.util.Iterator; public class DemoFx { public static void main(String[] args) { // 限定为String类型 ArrayList<String> al = new ArrayList<String>(); // ArrayList al = new ArrayList(); al.add("1"); al.add("2"); al.add("3"); // 如果是String类型，这里会编译报错；取消泛型则可以添加4了 // al.add(4); /* 如果不限制类型，foreach要用Object类型 for (Object al1 : al){ System.out.println(al1); } **/ for (String al1 : al){ System.out.println(al1); // 1 2 3 } /* 不限制类型写法 Iterator al1 = al.iterator(); while (al1.hasNext()) { System.out.println(al1.next()); }**/ Iterator<String> al1 = al.iterator(); while (al1.hasNext()) { System.out.println(al1.next()); // 1 2 3 } }
}`},{header:"泛型的注意事项",slug:"泛型的注意事项",content:`泛型里泛型写引用类型，写基本类型会报错 前面的<>和后面的<>要匹配 在 jdk 新特性中，后面的<>可以省略不写或不添 ArrayList<String> al = new ArrayList<String>()
ArrayList<String> al = new ArrayList<>()
ArrayList<String> al = new ArrayList()`},{header:"自定义泛型",slug:"自定义泛型",content:""},{header:"自定义泛型类",slug:"自定义泛型类",content:`package com.wuziqi.gobang.controller; import java.util.ArrayList;
import java.util.Iterator; public class DemoFx { public static void main(String[] args) { Ppt<String> p1 = new Ppt<String>(); p1.print("aaa"); // p1.print(1); // 加上泛型会编译报错 }
} // 自定义泛型类
class Ppt<E>{ public void print(E e){ System.out.println(e); }
} // 常规类写法
//class Ppt{
// public void print(Object o){
// System.out.println(o);
// }
//}`},{header:"自定义泛型方法",slug:"自定义泛型方法",content:`package com.wuziqi.gobang.controller; import java.util.ArrayList;
import java.util.Iterator; public class DemoFx { public static void main(String[] args) { Fxff f1 = new Fxff(); f1.print("aaa"); f1.print(111); }
}
// 自定义泛型方法
class Fxff{ public <T> void print(T t){ System.out.println(t); }
} // 常规方法写法
//class Fxff{
// public void print(Object o){
// System.out.println(o);
// }
//}`},{header:"自定义泛型接口",slug:"自定义泛型接口",content:`package com.wuziqi.gobang.controller; import java.util.ArrayList;
import java.util.Iterator; public class DemoFx { public static void main(String[] args) { Fu<String> fu = new Zi<String>(); fu.print("aaa"); // fu.print(111); // 加上泛型会编译报错 }
}
// 自定义泛型接口
interface Fu<T>{ public abstract void print(T t);
}
class Zi<E> implements Fu<E>{ public void print(E e){ System.out.println(e); }
}`},{header:"泛型的通配符",slug:"泛型的通配符",content:`// ?
List<?> al01 = new ArrayList<String>();
List<?> al02 = new ArrayList<Integer>();
List<?> al03 = new ArrayList<Number>(); // ? extends E ：泛型上限
List<? extends Number> al001 = new ArrayList<Number>();
List<? extends Number> al002 = new ArrayList<Integer>();
List<? extends Number> al003 = new ArrayList<Float>();
List<? extends Number> al004 = new ArrayList<String>(); // 编译报错
List<? extends Number> al005 = new ArrayList<Object>(); // 上限Number，编译报错 // ? super T ：泛型下限
List<? super Number> al006 = new ArrayList<Number>();
List<? super Number> al007 = new ArrayList<Object>();
List<? super Number> al008 = new ArrayList<Float>(); // 下限Number，编译报错
List<? super Number> al009 = new ArrayList<String>();// 编译报错`},{header:"泛型综合",slug:"泛型综合",content:`package com.wuziqi.gobang.controller; import com.sun.org.apache.xerces.internal.xs.datatypes.ObjectList; import java.util.ArrayList;
import java.util.Iterator;
import java.util.List; public class DemoFx { public static void main(String[] args) { ArrayList<String> al = new ArrayList<String>(); // ArrayList al = new ArrayList(); al.add("1"); al.add("2"); al.add("3"); // al.add(4); /* for (Object al1 : al){ System.out.println(al1); } **/ for (String al1 : al){ System.out.println(al1); // 1 2 3 } /* Iterator al1 = al.iterator(); while (al1.hasNext()) { System.out.println(al1.next()); }**/ Iterator<String> al1 = al.iterator(); while (al1.hasNext()) { System.out.println(al1.next()); // 1 2 3 } Ppt<String> p1 = new Ppt<String>(); p1.print("aaa"); // p1.print(1); // 加上泛型会编译报错 Fxff f1 = new Fxff(); f1.print("aaa"); f1.print(111); Fu<String> fu = new Zi<String>(); fu.print("aaa"); // fu.print(111); // 加上泛型会编译报错 // 通配符 // ? List<?> al01 = new ArrayList<String>(); List<?> al02 = new ArrayList<Integer>(); List<?> al03 = new ArrayList<Number>(); // 通配符 // ? extends E ：泛型上限 List<? extends Number> al001 = new ArrayList<Number>(); List<? extends Number> al002 = new ArrayList<Integer>(); List<? extends Number> al003 = new ArrayList<Float>(); // List<? extends Number> al004 = new ArrayList<String>(); // 编译报错 // List<? extends Number> al005 = new ArrayList<Object>(); // 上限Number // 通配符 // ? super T ：泛型下限 List<? super Number> al006 = new ArrayList<Number>(); List<? super Number> al007 = new ArrayList<Object>(); // List<? super Number> al008 = new ArrayList<Float>(); // 下限Number // List<? super Number> al009 = new ArrayList<String>();// 编译报错 ArrayList<Number> al0 = new ArrayList<Number>(); ListTool.print(al0); }
} // 自定义泛型类
class Ppt<E>{ public void print(E e){ System.out.println(e); }
} // 常规类写法
//class Ppt{
// public void print(Object o){
// System.out.println(o);
// }
//} // 自定义泛型方法
class Fxff{ public <T> void print(T t){ System.out.println(t); }
} // 常规方法写法
//class Fxff{
// public void print(Object o){
// System.out.println(o);
// }
//} // 自定义泛型接口
interface Fu<T>{ public abstract void print(T t);
}
class Zi<E> implements Fu<E>{ public void print(E e){ System.out.println(e); }
} class ListTool{ // List<? extends Number> = al0 = new ArrayList<Number>; public static void print(List<? extends Number> l){ System.out.println(l); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html",title:"",pathLocale:"/",contents:[{header:"类加载器",slug:"类加载器",content:`什么是类加载器？
用来加载.class 文件到内存中，并生成对应的 Class 对象。`},{header:"类加载器的作用",slug:"类加载器的作用",content:"用来把本地磁盘中的类(class)装载进内存中，形成一个字节码对象。"},{header:"类加载器分类",slug:"类加载器分类",content:`引导类加载器(Bootstrap ClassLoader)
加载的是 jdk 中，jre 下的 lib 目录下的 rt.jar 中的文件 扩展类加载器(Extension ClassLoader)
加载的是 jdk 中，jre 下的 lib 目录下的 ext 中的 jar 文件 中的文件 系统类加载器(System ClassLoader)
加载的是用户类路径(classpath)下的类库
classpath：用来存放.class 文件的路径；这个路径可以变化；由我们创建项目的时候指定的，如果不做修改，默认就是 项目名/bin`},{header:"类加载器的分层关系",slug:"类加载器的分层关系",content:"最上层：引导类加载器 中间层：扩展类加载器 最下层：系统类加载器"},{header:"类加载器的加载顺序",slug:"类加载器的加载顺序",content:`Java 中有一个机制，叫做委托机制 系统类加载器:
任何类都是由最下层的加载器来加载，既系统类加载器来加载的，由于 java 具有委托机制，所以系统类加载器它不会马上加载，而是先委托给它的上一层类加载器来加载，既扩展类加载器来加载，如果扩展类加载器没有加载到，它在自己去加载。如果它自己也没加载到，就会报类加载不到异常 扩展类加载器:
由于 Java 具有委托机制，扩展类加载器不会马上加载它所管辖的范围，它会先委托给上一层类加载器去加载，既引导类加载器来加载，如果引导类加载器没有加载成功，它在自己去加载，如果它也没有加载到，就去下一层继续加载 引导类加载器:
它会现在自己的片区去加载，如果没有加载到，去下一层继续加载`},{header:"如何获取类加载器对象",slug:"如何获取类加载器对象",content:`获取到字节码文件对象
Class clazz = Demo01.class; 获取到类加载器对象
ClassLoader classLoader = clazz.getClassLoader();`},{header:"类加载的相关方法",slug:"类加载的相关方法",content:`方法
说明 public ClassLoader getClassLoader()
获取类加载器 public final ClassLoader getParent()
获取上一层类加载器 public URL getResource(String name)
获取类加载器加载的资源 public InputStream getResourceAsStream(String name)
获取类加载器加载的资源，并转换成流 // 获取当前项目下src/main/resources/c.properties配置文件中的内容
package com.demo.ClassLoader; import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.Properties; public class Test { public static void main(String[] args) throws Exception { // 获取当前项目下src/main/resources/c.properties配置文件的内容 // 1. 按步骤走（1） // 获取字节码文件对象 Class clazz = Test.class; // 获取类加载器对象 ClassLoader cl = clazz.getClassLoader(); // 获取资源文件路径 URL url = cl.getResource("c.properties"); System.out.println(url); // file:/D:/Programs/gobang/target/classes/c.properties // 获取资源文件，并转换成流 InputStream is = cl.getResourceAsStream("c.properties"); // 创建流对象 Properties p = new Properties(); // 加载流 p.load(is); System.out.println(p); // {password=123456, userName="admin"} // 2. 按步骤走（2） // 获取字节码文件对象 Class clazz = Test.class; // 获取类加载器对象 ClassLoader cl = clazz.getClassLoader(); // 获取资源文件路径 String path = cl.getResource("c.properties").getPath(); System.out.println(path); // /D:/Programs/gobang/target/classes/c.properties // 根据路径创建字节流 FileInputStream fis = new FileInputStream(path); // 创建流对象 Properties p = new Properties(); // 加载流 p.load(fis); System.out.println(p); // {password=123456, userName="admin"} // 3. 简写版（1） Properties p = new Properties(); p.load(Test.class.getClassLoader().getResourceAsStream("c.properties")); System.out.println(p); // // {password=123456, userName="admin"} // 4. 简写版（2） Properties p = new Properties(); p.load( new FileInputStream( Test.class.getClassLoader().getResource("c.properties").getPath() ) ); System.out.println(p); // // {password=123456, userName="admin"} }
}
public class Test { public static void main(String[] args) { String s = new String(); Person p = new Person(); /** * String：系统类加载器 * Person：扩展类加载器 * Test：系统类加载器 */ // 获取类对象的字节码对象 Class clazzs = s.getClass(); Class clazzp = p.getClass(); Class clazzt = Test.class; // 获取类加载器 ClassLoader scl = clazzs.getClassLoader(); ClassLoader pcl = clazzp.getClassLoader(); ClassLoader tcl = clazzt.getClassLoader(); // 获取类加载器加载的资源路径 URL sUrl = scl.getResource("java.lang.String"); URL pUrl = pcl.getResource("java.lang.String"); URL tUrl = tcl.getResource("java.lang.String"); // 获取类加载器加载的资源路径 String spath = scl.getResource("java.lang.String").getPath(); String ppath = pcl.getResource("java.lang.String").getPath(); String tpath = tcl.getResource("java.lang.String").getPath(); // 获取类加载器加载的资源，并转换成流 InputStream sInputStream = scl.getResourceAsStream("java.lang.String"); InputStream pInputStream = pcl.getResourceAsStream("java.lang.String"); InputStream tInputStream = tcl.getResourceAsStream("java.lang.String"); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E7%BC%96%E7%A0%81%E5%92%8C%E8%A7%A3%E7%A0%81.html",title:"",pathLocale:"/",contents:[{header:"编码和解码",slug:"编码和解码",content:""},{header:"编码表",slug:"编码表",content:`ASCII：最基本表，主要针对数字、英文、少数标点符号
GBK：国标，21003 个汉字，其中包括 ASCII，一个中文占 2 个字节
Unicode：国际标准，包含全世界所有文字，每个文字都对应一个唯一的编号，其中 UTF-8 最常用
UTF-8: 使用 1-4 个字节来表示一个字符，其中一个中文占 3 个字节`},{header:"编码",slug:"编码",content:`编码是将字符串转换为字节的过程。 方法
作用 public byte[] getBytes()
根据平台的默认编码，将字符串转成字节数组 public byte[] getBytes(String charsetName)
根据指定的字符集编码，将字符串转成字节数组`},{header:"解码",slug:"解码",content:`解码是将字节转换为字符串的过程。 方法
作用 public String(byte[] bytes)
根据平台的默认编码，将字节数组转成字符串 public String(byte[] bytes, String charsetName)
根据指定的字符集编码，将字节数组转成字符串`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang; import java.util.Arrays; public class EncodeAndDecode { public static void main(String[] args) throws Exception { // 编码 // public byte[] getBytes() /* *byte[] bys1 = "约吗？".getBytes(); *System.out.println(Arrays.toString(bys1)); */ String s1 = "约吗？"; byte[] bys1 = s1.getBytes(); System.out.println(Arrays.toString(bys1)); // public byte[] getBytes(String charsetName) String s2 = "约吗？"; byte[] bys2 = s2.getBytes("UTF-8"); System.out.println(Arrays.toString(bys2)); // 解码 // public String(byte[] bytes) byte[] bys3 = { -25, -70, -90, -27, -112, -105, -17, -68, -97 }; String s3 = new String(bys3); System.out.println(s3); // public String(byte[] bytes, String charsetName) byte[] bys4 = { -25, -70, -90, -27, -112, -105, -17, -68, -97 }; String s4 = new String(bys4, "gbk"); System.out.println(s4); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E8%A3%85%E9%A5%B0%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html",title:"",pathLocale:"/",contents:[{header:"装饰设计模式",slug:"装饰设计模式",content:`对已有的方法或功能进行增强的方式 继承 class Demo{ public static void main(String[] args) { // A a = new A(); // B b = new B(); Tools.play(new A()); // 打篮球 Tools.play(new B()); // 打篮球、打排球、踢足球 }
}
class A{ public void play(){ System.out.println("打篮球"); }
}
class B extends A{ @Override public void play(){ super.play(); // 继承方法 System.out.println("打排球"); // 增强的功能 System.out.println("踢足球"); // 增强的功能 }
}
class Tools{ public static void play(A a){ a.play(); }
} 装饰设计模式 package com.wuziqi.gobang.Decorate; public class zhuangshishejimoshi { public static void main(String[] args) { FileInputStream fis = new FileInputStream("a.txt"); /* int by = fis.read(); System.out.println(by); byte[] bys = new byte[1024]; int len = fis.read(bys); System.out.println(len); System.out.println(new String(bys, 0, len)); */ /* * BufferedInputStream(InputStream is) * 正常来说需要传递InputStream类型参数，但它是抽象类 * 因此只能传递他的儿子，即FileInputStream */ BufferedInputStream bis = new BufferedInputStream(fis); System.out.println(bis); int by = bis.read(); // 调用的增强方法 System.out.println(by); byte[] bys = new byte[1024]; int len = bis.read(bys); // 调用的增强方法 System.out.println(len); System.out.println(new String(bys, 0, len)); }
}
abstract class InputStream{ public abstract int read(); public abstract int read(byte[] bys); public abstract void close();
}
class FileInputStream extends InputStream{ public FileInputStream(String path){ System.out.println("FileInputStream"); } @Override public int read() { // XXX：正常处理代码 return 0; } @Override public int read(byte[] bys) { // XXX：正常处理代码 return 0; } @Override public void close() { // XXX：正常处理代码 }
} class BufferedInputStream extends InputStream{ private InputStream is; // 变量对象 /* * InputStream is = new FileInputStream("a.txt"); * Fu fu = new Zi(); */ public BufferedInputStream(InputStream is){ this.is = is; // 初始化，给变量赋值，赋值为形参中的is } @Override public int read() { // XXX000：增强处理的代码 return 0; } @Override public int read(byte[] bys) { // XXX000：增强处理的代码 return 0; } @Override public void close() { // 没有被增强的方法调用被包装的对象的方法 is.close(); }
} 动态代理设计模式 适配器设计模式 外观设计模式 桥接设计模式 组合设计模式 享元设计模式 策略设计模式 模板方法设计模式 职责链设计模式 命令设计模式 状态设计模式`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E9%80%92%E5%BD%92.html",title:"",pathLocale:"/",contents:[{header:"递归",slug:"递归",content:`什么是递归？
一个方法的的内部又调用了这个方法本身，这就是递归。`},{header:"递归的注意事项",slug:"递归的注意事项",content:`递归的次数不能太多，否则会造成内存泄露，即内存溢出异常。 递归必须要有结束条件，否则死循环还会内存溢出。 package com.wuziqi.gobang.IO; public class DemoDiGui { public static void main(String[] args) { // 求5的阶乘 int num = getJieCheng(5); System.out.println(num);// 120 // i不能太大，太大超出返回值int的范围，因为是int，所以会返回0 int num2 = getJieCheng(100); System.out.println(num2);// 0 // 求一个未知数N的阶乘 int num3 = getJieCheng2(4); System.out.println(num3);// 24 // 1 1 2 3 5 8，根据规律，写出方法求第N个数是什么 int num4 = getSum(4); System.out.println(num4);// 3 } public static int getJieCheng(int i){ if(i == 1) return 1; return i*getJieCheng(i-1); } public static int getJieCheng2(int n){ if(n == 1) return 1; return n*getJieCheng2(n-1); } public static int getSum(int n){ if(n == 1 || n == 2) return 1; return getSum(n-2 ) + getSum(n-1); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E9%9B%86%E5%90%88.html",title:"",pathLocale:"/",contents:[{header:"集合",slug:"集合",content:`什么是集合？
集合是一个容器，由一组无序且唯一（即不能重复）的项组成的。`},{header:"特点",slug:"特点",content:"长度是可以变化的 集合容器只能存储引用数据类型(如果装载的是基本数据类型，则底层会默认调用其包装类的方法) 一个集合容器中，可以存储不同引用数据类型的数据"},{header:"集合与数组的区别",slug:"集合与数组的区别",content:"集合长度可变，数组一旦初始化长度就固定了 集合只能存储引用数据类型，数组可以存储任意数据类型 集合中存储的数据类型可以不同，数组中存储的数据类型必须相同 Collection 单列集合： Map 双列集合："}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E9%9B%86%E5%90%88%E6%80%BB%E7%BB%93.html",title:"",pathLocale:"/",contents:[{header:"集合总结",slug:"集合总结",content:""},{header:"集合的特点",slug:"集合的特点",content:`单列集合： 接口名
类名
特性
查询
增删
底层 List
-
有序，有索引，可重复
-
-
- List
ArrayList
同上
快
慢
数组 List
LinkedList
同上
慢
快
链表 List
Vector
同上
慢
慢
数组 Set
-
无序，无索引，不可重复
-
-
- Set
HashSet
同上，但是注意去重和 hashCode
快
慢
哈希表 Set
LinkedHashSet
有序
快
慢
链表和哈希表 Set
TreeSet
同上，但是可排序
慢
快
红黑树 双列集合： 接口名
类名
特性
查询
增删
底层
键值 Map
-
无序，无索引，键不可重复，值可重复
-
-
-
- Map
HashMap
同上
快
慢
哈希表
键和值都可为 null Map
TreeMap
同上，但是可排序
慢
快
红黑树
不可为 null Map
LinkedHashMap
同上，但是有序
快
慢
链表和哈希表
不可为 null Map
HashTable
同上
慢
慢
哈希表
不可为 null Map
Properties
同上
快
慢
数组和链表
可为 null，键值都是 String 类型`},{header:"集合 Tree 结构排序",slug:"集合-tree-结构排序",content:"自然排序：元素需要实现 Comparable 接口，重写 compareTo 方法 比较器：元素需要实现 Comparator 接口，重写 compare 方法"},{header:"集合 List 结构排序",slug:"集合-list-结构排序",content:"利用 Collections 工具类的 sort 方法进行排序"},{header:"集合的遍历",slug:"集合的遍历",content:"单列集合： 转数组循环遍历 迭代器遍历 增强 for 循环遍历(for each) 普通的 for 循环遍历(利用索引) 双列集合： keySet()键找值遍历 entrySet()键值对遍历"},{header:"集合的常用方法",slug:"集合的常用方法",content:`单列集合： add()：添加元素
remove()：删除元素
size()：获取元素个数
isEmpty()：判断是否为空
contains()：判断是否包含某个元素
clear()：清空集合
addAll()：添加多个元素
removeAll()：删除多个元素
retainAll()：保留多个元素
containsAll()：判断是否包含多个元素
equals()：判断是否相等
hashCode()：获取哈希码
toArray()：转换为数组
subList()：获取子集合
iterator()：获取迭代器
listIterator()：获取列表迭代器
spliterator()：获取集合的拆分器
stream()：获取流
parallelStream()：获取并行流
forEach()：遍历集合
forEachOrdered()：有序遍历集合
toString()：转换为字符串
removeIf()：删除满足条件的元素
replaceAll()：替换所有元素
replaceAll()：替换所有元素
sort()：排序
parallel()：并行处理
stream()：流式处理
parallelStream()：并行流式处理 双列集合： put()：添加元素
remove()：删除元素
size()：获取元素个数
isEmpty()：判断是否为空
containsKey()：判断是否包含某个键
containsValue()：判断是否包含某个值
clear()：清空集合
putAll()：添加多个元素
removeAll()：删除多个元素
retainAll()：保留多个元素
containsAll()：判断是否包含多个键或值
equals()：判断是否相等
hashCode()：获取哈希码
toArray()：转换为数组
keySet()：获取所有键的集合
values()：获取所有值的集合
entrySet()：获取所有键值对的集合
iterator()：获取迭代器
listIterator()：获取列表迭代器
spliterator()：获取集合的拆分器
stream()：获取流
parallelStream()：获取并行流
forEach()：遍历集合
forEachOrdered()：有序遍历集合
toString()：转换为字符串
removeIf()：删除满足条件的元素
replaceAll()：替换所有元素
replaceAll()：替换所有元素
sort()：排序
parallel()：并行处理
stream()：流式处理
parallelStream()：并行流式处理`},{header:"集合的使用",slug:"集合的使用",content:`package com.wuziqi.gobang.Map; import java.util.*; public class DemoClassStudent { /** * 定义一个学生类， * 属性：姓名（String name）、班级班号（String no）、成绩（double score） * 将n个学生对象存入List集合，并统计每个班级的总分和平均分 * 思想：采用面向对象的思想 * 不推荐使用Map<String,List<Student>>操作不方便 * 推荐使用Map<String,ClassRoom> */ public static void main(String[] args) { Map<String, ClassRoom> map = new TreeMap<String, ClassRoom>(); List<Stud> students1 = new ArrayList<Stud>(); students1.add(new Stud("小张",100)); students1.add(new Stud("小李",33)); students1.add(new Stud("小王",33)); students1.add(new Stud("小王",33)); List<Stud> students2 = new ArrayList<Stud>(); students2.add(new Stud("小亮",50)); students2.add(new Stud("小萌",38)); map.put("1班", new ClassRoom(0.0,0.0, students1)); map.put("2班", new ClassRoom(0.0,0.0, students2)); System.out.println(map); // 结果： // {1班=ClassRoom{total=199.0, pjNum=49.75, // students=[Stud{name='小张', score=100.0}, Stud{name='小李', score=33.0}, // Stud{name='小王', score=33.0}, Stud{name='小王', score=33.0}]}, // 2班=ClassRoom{total=88.0, pjNum=44.0, // students=[Stud{name='小亮', score=50.0},Stud{name='小萌', score=38.0}]}} }
}
class ClassRoom implements Comparable<ClassRoom>{ private Double total; private Double pjNum; private List students; private void setTotal(List students){ this.total = total; } private void setPjNum(List students){ this.pjNum = pjNum; } public ClassRoom(Double total, Double pjNum, List students) { this.students = students; this.total = total; this.pjNum = pjNum; for (Object o : students){ Stud s = (Stud)o; this.total += s.score; } this.pjNum = getTotal()/ students.size(); } public Double getTotal() { return total; } public void setTotal(Double total) { this.total = total; } public Double getPjNum() { return pjNum; } public void setPjNum(Double pjNum) { this.pjNum = pjNum; } public List getStudents() { return students; } public void setStudents(List students) { this.students = students; } @Override public String toString() { return "ClassRoom{" + "total=" + total + ", pjNum=" + pjNum + ", students=" + students + '}'; } @Override public int compareTo(ClassRoom o) { return this.getPjNum().compareTo(o.getPjNum()); }
}
class Stud{ private String name; double score; public Stud(String name, double score) { this.name = name; this.score = score; } public String getName() { return name; } public void setName(String name) { this.name = name; } public double getScore() { return score; } public void setScore(double score) { this.score = score; } @Override public String toString() { return "Stud{" + "name='" + name + '\\'' + ", score=" + score + '}'; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Cookie.html",title:"",pathLocale:"/",contents:[{header:"会话",slug:"会话",content:`会话：一次会话就是一次对话，一次交谈，在这次交流中会有很多次请求和响应。只要其中一方断开不谈了，那么会话也就结束了。 Cookie: 客户端会话技术，数据存储到客户端浏览器中
Session: 服务器端会话技术，数据存储到服务器中`},{header:"会话的作用",slug:"会话的作用",content:"在多次请求和多次响应中可以实现数据共享"},{header:"方法",slug:"方法",content:`方法
作用 response.addCookie(Cookie c)
设置 cookie response.setHeader("set-cookie", "name=value")
设置 cookie response.setHeader("set-cookie", "name=value; maxAge=60")
设置 cookie request.getCookies()
获取 cookie`},{header:"Cookie 能不能写多个 Cookie",slug:"cookie-能不能写多个-cookie",content:`可以携带多个 Set-Cookie 请求头；如果多个 Cookie 的名称相同，
那么会出现：在设置 Cookie 的方法的响应头中有两个同名的响应结果，各自的值为我们设置的值，但是在获取 Cookie 的方法的请求头中，只会有一个该名称的 Cookie，其值为最后一次设置的值。`},{header:"Cookie 的 name 值能不能使用中文",slug:"cookie-的-name-值能不能使用中文",content:"不能，会报错"},{header:"Cookie 的 value 值能不能存储中文",slug:"cookie-的-value-值能不能存储中文",content:`不会乱码方式： 使用 new Cookie 方式设置请求头
会出现乱码的方式：使用 setHeader 方式设置请求头
乱码解决：在设置的时候，进行 URL 编码，在获取的时候，进行 URL 解码`},{header:"Cookie 的生命周期",slug:"cookie-的生命周期",content:`Cookie 默认的生命周期：浏览器关闭，缓存释放，Cookie 消失
可以通过 setMaxAge 方法设置缓存的时常，此时数据被存储到本地磁盘，时间一到，Cookie 消失，设置的值为正数，单位为秒
可以通过 setMaxAge 设置的值为负数，就是 Cookie 默认的
可以通过 setMaxAge 设置的值为 0，那就没有意义了，会立即消失`},{header:"Cookie 的携带范围",slug:"cookie-的携带范围",content:`默认情况下：当前的项目，即访问当前项目下的任意一个资源都会携带 Cookie 请求头
可以通过 setPath 方法设置携带范围，设置的值为当前项目的根目录，即 / // SetCookie.java
package com.api.Cookie; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder; @WebServlet("/setCookie")
public class SetCookie extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { // 设置cookie，并添加到请求头中 // 方式一：设置请求头、 // 设置Cookie的缓存时常60秒 resp.setHeader("Set-Cookie", "username=zhangsan; Max-Age=60"); resp.setHeader("Set-Cookie", "luanma=这会出现乱码"); String notLuan = "乱码的解决方式"; String s1 = URLEncoder.encode(notLuan); // URL编码 resp.setHeader("Set-Cookie", "notLuan=" + s1); // 方式二：创建对象并添加到响应头，设置多个Cookie Cookie cookie0 = new Cookie("name", "张三"); // 这种方式不会出现乱码，底层处理 Cookie cookie1 = new Cookie("passowrd", "123456"); cookie1.setMaxAge(300); // 设置Cookie的缓存时常为300秒 Cookie cookie2 = new Cookie("age", "12"); // name和value都是String类型 Cookie cookie3 = new Cookie("age", "14"); // 覆盖age /* * 设置Cookie的携带范围，默认：/项目名，代表当前项目 * /：当前服务器下部署的所有项目的所有资源都能获取 * /项目名/资源名：当前项目的具体某个资源才能获取到这个Cookie */ cookie3.setPath("/"); resp.addCookie(cookie0); resp.addCookie(cookie1); resp.addCookie(cookie2); resp.addCookie(cookie3); } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
} // GetCookie.java
package com.api.Cookie; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException; @WebServlet("/getCookie")
public class GetCookie extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { Cookie[] cookies = req.getCookies(); System.out.println(cookies); for (Cookie c : cookies) { System.out.println(c.getName() + ":" + c.getValue()); // 结果： // username:zhangsan // passowrd:123456 } } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/json.html",title:"",pathLocale:"/",contents:[{header:"json",slug:"json",content:""},{header:"响应设置 MIME 类型",slug:"响应设置-mime-类型",content:'response.setContextType("application/json;charset=utf-8");'},{header:"json 格式和对象之间的相互转换",slug:"json-格式和对象之间的相互转换",content:"用 json 转换器(jackson、fastJson、gson 等第三方)进行转换，和之前的 BeanUtils 工具类很像。下面的案例是用 jackson 进行转换。"},{header:"json 转 对象",slug:"json-转-对象",content:`String json = "{\\"name\\":\\"张三\\",\\"age\\":20}"; // java中必须用双引号，所以把"进行转义
ObjectMapper objectMapper = new ObjectMapper();
Person person = objectMapper.readValue(json, Person.class);
System.out.println(person);
System.out.println(person.getAge());`},{header:"对象 转 json 并响应",slug:"对象-转-json-并响应",content:`response.setContentType("application/json;charset=utf-8");
Person person = new Person();
person.setName("张三");
person.setAge(20);
ObjectMapper objectMapper = new ObjectMapper();
// String json = objectMapper.writeValueAsString(person);
// response.getWriter().write(json);
objectMapper.writeValue(response.getWriter(), person); // 和上边两句一样的效果`},{header:"json 转 List",slug:"json-转-list",content:`String json = "[{\\"name\\"":\\"张三\\",\\"age\\:20},{\\"name\\":\\"李四\\",age:25}]";
ObjectMapper objectMapper = new ObjectMapper();
List<Person> personList = objectMapper.readValue( json, new TypeReference<List<Person>>() {}
);
System.out.println(personList);`},{header:"List 转 json 并响应",slug:"list-转-json-并响应",content:`List<Person> personList = new ArrayList<>();
personList.add(new Person("张三", 20));
personList.add(new Person("李四", 25));
ObjectMapper objectMapper = new ObjectMapper();
String json = objectMapper.writeValueAsString(personList);
System.out.println(json);
response.getWriter().write(json);
// response.setContentType("application/json;charset=utf-8");
// objectMapper.writeValue(response.getWriter(), personList);`},{header:"json 转 Map",slug:"json-转-map",content:`String json = "{\\"name\\":\\"张三\\",\\"age\\":20}";
ObjectMapper objectMapper = new ObjectMapper();
Map<String, Object> map = objectMapper.readValue( json, new TypeReference<Map<String, Object>>() {}
);
System.out.println(map);`},{header:"Map 转 json 并响应",slug:"map-转-json-并响应",content:`Map<String, Object> map = new HashMap<>();
map.put("name", "张三");
map.put("age", 20);
ObjectMapper objectMapper = new ObjectMapper();
String json = objectMapper.writeValueAsString(map);
System.out.println(json);
response.getWriter().write(json);
// response.setContentType("application/json;charset=utf-8");
// objectMapper.writeValue(response.getWriter(), map);`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Listener.html",title:"",pathLocale:"/",contents:[{header:"Listener",slug:"listener",content:"Listener：监听器，是 javaweb 三大组件(Servlet、Filter、Listener)之一。"},{header:"监听器步骤",slug:"监听器步骤",content:`创建一个类，实现监听器接口
重写抽象方法
在 web.xml 中配置监听器`},{header:"ServletContextListener",slug:"servletcontextlistener",content:"ServletContextListener：监听 ServletContext 对象创建和销毁，当项目启动时，ServletContext 对象被创建，当服务停止时，ServletContext 对象被销毁"},{header:"ServletRequestListener",slug:"servletrequestlistener",content:"ServletRequestListener：监听 ServletRequest 对象创建和销毁，当用户访问 Servlet 等资源的 时候，ServletRequest 对象被创建，当用户关闭浏览器时候，ServletRequest 对象被销毁"},{header:"Listener 的配置方式",slug:"listener-的配置方式",content:`web.xml 配置
注解配置(@WebListener)`},{header:"Listener 案例",slug:"listener-案例",content:`统计网站在线人数
网站访问量统计 // ServletContextListener.java
package com.api.Listener; import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener; @WebListener
public class MyServletContextListener implements ServletContextListener { @Override public void contextInitialized(ServletContextEvent sce) { // 初始化 // 获取ServletContext对象 ServletContext sc = sce.getServletContext(); // 获取全局参数 String value = sc.getInitParameter("username"); System.out.println("value:" + value); } @Override public void contextDestroyed(ServletContextEvent sce) { // 销毁 System.out.println("MyServletContextListener销毁"); }
}
// MyServletRequestListener.java
package com.api.Listener; import javax.servlet.ServletRequest;
import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener; @WebListener
public class MyServletRequestListener implements ServletRequestListener { @Override public void requestDestroyed(ServletRequestEvent sre) { ServletRequest sr = sre.getServletRequest(); } @Override public void requestInitialized(ServletRequestEvent sre) { System.out.println("MyServletRequestListener销毁"); }
}
<!--web.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" version="2.5"
>
<display-name>Demo01</display-name> <welcome-file-list> <welcome-file>index.html</welcome-file> <welcome-file>index.htm</welcome-file> <welcome-file>index.jsp</welcome-file> <welcome-file>default.html</welcome-file> <welcome-file>default.htm</welcome-file> <welcome-file>default.jsp</welcome-file> </welcome-file-list> <!--servlet配置--> <servlet> <!-- servlet-name：servlet名称，自定义，唯一 servlet-class：servlet实现类全路径名 servlet-name：同上，需要保持一致 url-pattern：servlet虚拟路径，随便起，但是千万别忘了/ 访问：localhost:8080/虚拟目录/虚拟路径 --> <servlet-name>servletDemo01</servlet-name> <servlet-class>com.api.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>servletDemo01</servlet-name> <url-pattern>/demo01</url-pattern> </servlet-mapping> <servlet> <servlet-name>aaa</servlet-name> <servlet-class>com.api.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>aaa</servlet-name> <url-pattern>/bbb</url-pattern> </servlet-mapping> <!--filter配置--> <!-- filter-name：filter名称，自定义，唯一 filter-class：filter实现类全路径名 filter-name：同上，需要保持一致 url-pattern：/servlet-name --> <filter> <filter-name>Filter01</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter01</filter-name> <!--拦截具体的资源--> <url-pattern>/servletDemo01</url-pattern> </filter-mapping> <filter> <filter-name>Filter02</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter02</filter-name> <!--拦截user模块下的所有资源--> <url-pattern>/user/*</url-pattern> </filter-mapping> <filter> <filter-name>Filter03</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter03</filter-name> <!--拦截jsp类型的文件--> <url-pattern>*.jsp</url-pattern> </filter-mapping> <filter> <filter-name>Filter04</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter04</filter-name> <!--拦截所有资源--> <url-pattern>/*</url-pattern> </filter-mapping> <!--配置Linster--> <listener> <listener-class>com.api.Listener.MyServletContextListener</listener-class> </listener> <listener> <listener-class>com.api.Listener.MyServletRequestListener</listener-class> </listener> <context-param> <param-name>username</param-name> <param-value>张三</param-value> </context-param>
</web-app>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MVC.html",title:"",pathLocale:"/",contents:[{header:"MVC",slug:"mvc",content:""},{header:"目前为止，登陆案例",slug:"目前为止-登陆案例",content:`// M(实体类)
package com.api.Login.domain; public class Sister { private int id; private String name; private String password; public Sister() { } public Sister(int id, String name, String password) { this.id = id; this.name = name; this.password = password; } public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public String getPassword() { return password; } public void setPassword(String password) { this.password = password; } @Override public String toString() { return "Sister{" + "id=" + id + ", name='" + name + '\\'' + ", password='" + password + '\\'' + '}'; }
}
// V(login.jsp)
<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="UTF-8"
%>
<html>
<head> <title>Login</title> <script> function submitFormAsGet() { document.getElementById("loginForm").method = "get"; document.getElementById("loginForm").submit(); } function submitFormAsPost() { document.getElementById("loginForm").method = "post"; document.getElementById("loginForm").submit(); } <\/script>
</head>
<body>
<form id="loginForm" action="http://localhost:8080/gobang_war_exploded/login" method="post"
> 用户名：<input type="text" name="name" placeholder="用户名"><br/> 密码：<input type="password" name="password" placeholder="密码"><br/> <input type="button" value="登录" onclick="submitFormAsGet()">&nbsp;&nbsp; <input type="button" value="注册" onclick="submitFormAsPost()">
</form>
</body>
</html>
// C(Servlet类)
package com.api.Login.Service; import com.api.Login.dao.SisterMapper;
import com.api.Login.domain.Sister;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.Map; @WebServlet("/login")
public class SisterService extends HttpServlet { Sister user; HttpSession hs; @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { user = handleRequest(req, resp); if (selectById(user) == null) { hs.setAttribute("user", null); System.out.println(1); resp.getWriter().write("登录失败!"); } else { hs.setAttribute("user", user); System.out.println(2); resp.getWriter().write("登录成功!"); } } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { user = handleRequest(req, resp); if (addReturnId(user) == 0) { hs.setAttribute("user", null); System.out.println(3); resp.getWriter().write("注册失败!"); } else { hs.setAttribute("user", user); System.out.println(4); resp.getWriter().write("注册成功!"); } } public Sister handleRequest(HttpServletRequest req, HttpServletResponse resp) throws UnsupportedEncodingException { req.setCharacterEncoding("utf-8"); resp.setContentType("text/html;charset=UTF-8"); HttpSession hs = req.getSession(); Sister user = new Sister(); Map<String, String[]> map = req.getParameterMap(); try { BeanUtils.populate(user, map); } catch (Exception e) { e.printStackTrace(); } System.out.println("参数：" + user); return user; } private SqlSession session; private SisterMapper userDao; { // 1. 获取流对象，读取核心配置文件 InputStream is = null; try { is = Resources.getResourceAsStream("SqlMapConfig.xml"); } catch (IOException e) { e.printStackTrace(); } // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 session = factory.openSession(); // 5. 获取 UserDao 代理类对象 userDao = session.getMapper(SisterMapper.class); } public int addReturnId(Sister s) { int id = userDao.addReturnId(s); // 7. 提交事务(增删改需要提交；查询时不要提交) session.commit(); // 8. 释放资源 session.close(); return id; } // 查询单条 public Sister selectById(Sister s) { Sister user = userDao.findPerson(s); System.out.println("查询结果:" + user); // 8. 释放资源 session.close(); return user; }
}
// 接口
package com.api.Login.dao;
import com.api.Login.domain.Sister; public interface SisterMapper { Sister findPerson(Sister s); int addReturnId(Sister s);
}
<!--xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.Login.dao.SisterMapper"> <select id="findPerson" resultType="sister" parameterType="sister"> select * from user_copy where name = #{name} and password = #{password} </select> <insert id="addReturnId" parameterType="sister"> <selectKey keyColumn="id" keyProperty="id" resultType="int" order="AFTER"> select last_insert_id() </selectKey> insert into user_copy values (null, #{name}, #{password}) </insert>
</mapper>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Session.html",title:"",pathLocale:"/",contents:[{header:"Session",slug:"session",content:""},{header:"1. 什么是 Session",slug:"_1-什么是-session",content:`Session 是域对象，范围在一次会话之间；Session 是服务器端的一种数据存储机制，用来跟踪用户的状态，这个机制是依赖于 Cookie 的。 域对象三大方法
作用 setAttribute(String name, Object value)
设置数据 getAttribute(String name)
获取数据 removeAttribute(String name)
移除数据`},{header:"浏览器关闭服务端没有关闭会发生什么情况",slug:"浏览器关闭服务端没有关闭会发生什么情况",content:"浏览器关闭，缓存消失，缓存中的 JSESSIONID 也就消失了，再次访问是一次新的会话，不会携带 cookie，重新 set-cookie，当然也获取不到 session"},{header:"重新打开浏览器依然能获取到 JSESSIONID",slug:"重新打开浏览器依然能获取到-jsessionid",content:"手动设置 cookie 并设置时常，将底层自己创建的 cookie 覆盖掉"},{header:"服务器关闭浏览器没有关闭会发生什么情况",slug:"服务器关闭浏览器没有关闭会发生什么情况",content:`服务非正常关闭：session 会在内存中消失，浏览器访问服务器时，会携带 cookie 的请求头，但是服务器没有了 session 对象，会创建新的对象
服务正常关闭：session 会在内存消失，但是会先钝化(序列化)，将 session 存储到本地磁盘，浏览器访问服务器时，会活化(反序列化)到内存中`},{header:"session 消毁的情况",slug:"session-消毁的情况",content:`服务器关闭
session 自杀
session 过期
手动删除
服务器重启`},{header:"session 过期时间",slug:"session-过期时间",content:`在服务器，web.xml 中有 session 时常设置，默认 30 分钟
修改配置文件 <session-config> <session-timeout>30</session-timeout>
</session-config>`},{header:"Session 原理",slug:"session-原理",content:`Session 的实现主要是基于 Cookie 的。
当客户端请求服务器时，服务器会为这次请求创建一个 Session 对象，同时服务器会在响应请求时，在响应头中添加一个 Set-Cookie 的响应头信息。
Set-Cookie 的值就是 Session 的 ID，该 ID 由服务器端生成。
当客户端再次发送请求时，会将这个 Set-Cookie 的值自动添加到请求头中的 Cookie 中。
服务器端在接收到请求时，会检查请求头中是否有 Cookie 信息，如果有的话，会从 Cookie 中获取 Session 的 ID，然后根据该 ID 获取 Session 对象。 // SetSession.java
package com.api.Session; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException; @WebServlet("/setSession")
public class SetSession extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { HttpSession hs = req.getSession(); // 设置session hs.setAttribute("name", "tom"); /* * 实现浏览器关闭又重新开启后仍就能获取到JSESSIONID * 手动设置cookie，将底层自己创建的cookie覆盖掉 */ Cookie cookie = new Cookie("JSESSIONID", hs.getId()); cookie.setMaxAge(60); resp.addCookie(cookie); // session 自杀 hs.invalidate(); } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}
// GetSession.java
package com.api.Session; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException; @WebServlet("/getSession")
public class GetSession extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { HttpSession hs = req.getSession(); hs.getAttribute("name"); } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Tomcat.html",title:"",pathLocale:"/",contents:[{header:"Tomcat",slug:"tomcat",content:"Tomcat：部署静态资源(打包后的文件都是静态资源，如 html、css、js、图片等)"},{header:"下载",slug:"下载",content:`尽量不要下载最新的版本，可能会出现版本更新过快而导致的问题，建议下载已经稳定的版本。
https://tomcat.apache.org`},{header:"启动",slug:"启动",content:"双击 bin\\startup.bat"},{header:"开启后出现闪退的几种问题",slug:"开启后出现闪退的几种问题",content:`环境变量中没有配置 JAVA_HOME
重复 Tomcat
端口被占用
自行设置的配置出现问题`},{header:"关闭",slug:"关闭",content:"双击 bin\\shutdown.bat"},{header:"Tomcat 目录结构",slug:"tomcat-目录结构",content:`bin：存放 Tomcat 的启动和关闭的脚本文件
conf：存放 Tomcat 的配置文件
lib：存放 Tomcat 的依赖 jar 包
logs：存放 Tomcat 的日志文件
temp：存放 Tomcat 的临时文件
webapps：存放部署的 Web 项目
work：存放 Tomcat 运行时编译的文件`},{header:"Web 项目目录结构",slug:"web-项目目录结构",content:`html
css
js
META-INF：存放项目的描述文件
WEB-INF：存放项目的配置文件 web.xml：项目的核心配置文件
classes：存放项目的字节码文件
lib：存放项目的依赖 jar 包 index.jsp：项目的首页`},{header:"Tomcat 内部机制",slug:"tomcat-内部机制",content:"了解内部机制，才能知道 tomcat 相关的配置和 server.xml 文件的作用"},{header:"部署 Web 项目",slug:"部署-web-项目",content:""},{header:"方式一",slug:"方式一",content:`将 web 项目复制到 Tomcat 的 webapps 目录下
启动 Tomcat
访问项目：http://localhost:8080/项目名/资源路径
localhost:8080/web-app/a.html 注意：如果项目名是 ROOT，访问时是不需要写 ROOT 的。`},{header:"方式二",slug:"方式二",content:`在 Tomcat 的 conf 中的 server.xml 文件中配置项目
启动 Tomcat
访问项目：http://localhost:8080/项目名/资源路径 <!-- path: 访问项目的虚拟目录 docBase: 项目存放的全路径 注意： 1. 路径不能使用相对路径 2. 路径不能使用中文 3. 路径不能使用特殊字符 4. 路径不能使用空格 -->
<Context path="/项目名" docBase="D:\\XXX\\XXX\\项目名"/>`},{header:"方式三",slug:"方式三",content:`在 Tomcat 的 conf\\catalina\\localhost 目录下创建一个 xml 文件
在 xml 文件中配置项目
启动 Tomcat
访问项目：http://localhost:8080/项目名/资源路径 <Context docBase="D:\\XXX\\XXX\\项目名"/> 注意： 与方式二类似，但是比方式二更方便灵活，不用反复启动 tomcat
不要 path 来指定虚拟目录，而把项目名就当作是虚拟目录`},{header:"方式四",slug:"方式四",content:`将 Web 项目打成 war 包
将 war 包复制到 Tomcat 的 webapps 目录下，会自动解压
启动 Tomcat
访问项目：http://localhost:8080/项目名/资源路径`},{header:"本地域名设置",slug:"本地域名设置",content:`在 C:\\Windows\\System32\\drivers\\etc\\hosts 文件中添加 127.0.0.1 www.aaa.com
127.0.0.1 www.bbb.com 修改 tomcat 配置文件中添加配置 <Host name="www.aaa.com" appBase="aaa_webapp" unpackWARs="true" autoDeploy="true">
<Host name="www.bbb.com" appBase="bbb_app" unpackWARs="true" autoDeploy="true"> 在 bin 目录统计结构处新建 aaa_webapp 和 bbb_app
将项目分别复制到 aaa_webapp 和 bbb_app 中
访问项目：http://www.aaa.com:8080/项目名/a.html
访问项目：http://www.bbb.com:8080/项目名/b.html 注意： 端口号 8080 可以在 server.xml 中自由配置
如果端口号被改成 80 了，则访问时就不需要加端口号了，因为 80 是 Tomcat 的默认端口号
如果项目名是 ROOT，则访问时就不需要写项目名了
如果访问的文件是 index.html，则访问时就不需要写文件名了
最终访问可能就像www.aaa.com(www.baidu.com)一样就可以访问项目了`},{header:"在 idea 中集成 Tomcat",slug:"在-idea-中集成-tomcat",content:""}]},{path:"/admin/Java/MyBatis/MyBatis%E5%85%A5%E9%97%A8.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 入门",slug:"mybatis-入门",content:`MyBatis？
MyBatis 是持久层框架，它支持定制化 SQL、存储过程以及高级映射。
MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。
可使用简单的 XML 或 注解 来配置和映射原生信息，将接口和 POJOs 映射成数据库中的记录。POJOs(Plain Old Java Objects)：普通的 Java 对象，或者说是描述类。
使用 MyBatis 时，我们将 sql 语句写到`},{header:"MyBatis 步骤",slug:"mybatis-步骤",content:`导入 jar 包
创建实体类(domain/User.java)
创建抽象接口(dao/UserDao.java)
创建 MyBatis 的核心配置文件(resources/SqlMapConfig.xml)
创建 MyBatis 的映射文件(resources/mappers/UserMapper.xml)
创建测试类进行测试(涉及到工厂设计模式和代理模式) 获取流对象，读取核心配置文件
创建 SqlSession 工厂的构建者对象
获取 SqlSession 工厂对象
获取 SqlSession 对象
获取 UserDao 代理类对象
执行方法
释放资源`},{header:"MyBatis 入门案例",slug:"mybatis-入门案例",content:""},{header:"2. 创建实体类(domain/User.java)",slug:"_2-创建实体类-domain-user-java",content:`package com.api.MyBatis.domain; public class User { private int id; private String name; private int age; public User() { } public User(int id, String name, int age) { this.id = id; this.name = name; this.age = age; } public void setId(int id) { this.id = id; } public void setName(String name) { this.name = name; } public void setAge(int age) { this.age = age; } public int getId() { return id; } public String getName() { return name; } public int getAge() { return age; } @Override public String toString() { return "User [id=" + id + ", name=" + name + ", age=" + age + "]"; }
}`},{header:"3. 创建抽象接口(dao/UserDao.java)",slug:"_3-创建抽象接口-dao-userdao-java",content:`package com.api.MyBatis.dao; import com.api.MyBatis.domain.User; import java.util.List; public interface UserDao { public List<User> findAll();
}`},{header:"4. 创建 MyBatis 的核心配置文件(resources/SqlMapConfig.xml)",slug:"_4-创建-mybatis-的核心配置文件-resources-sqlmapconfig-xml",content:`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd"
>
<configuration> <environments default="development"> <environment id="development"> <transactionManager type="JDBC"/> <dataSource type="POOLED"> <property name="driver" value="com.mysql.cj.jdbc.Driver"/> <property name="url" value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC" /> <property name="username" value="root"/> <property name="password" value="Sap@1q2w3e4r"/> </dataSource> </environment> </environments> <mappers> <mapper resource="mappers/UserMapper.xml"/> </mappers>
</configuration>`},{header:"5. 创建 MyBatis User 的映射文件(dao/UserMapper.xml)",slug:"_5-创建-mybatis-user-的映射文件-dao-usermapper-xml",content:`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd"
>
<mapper namespace="com.api.MyBatis.dao.UserDao"> <select id="findAll" resultType="com.api.MyBatis.domain.User"> select * from user </select>
</mapper>`},{header:"6. 创建测试类进行测试(涉及到工厂设计模式和代理模式)",slug:"_6-创建测试类进行测试-涉及到工厂设计模式和代理模式",content:`package com.api.MyBatis.test; import com.api.MyBatis.dao.UserDao;
import com.api.MyBatis.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder; import java.io.InputStream;
import java.util.List; public class UserTest { public static void main(String[] args) throws Exception { // 1. 获取流对象，读取核心配置文件 InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml"); // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 SqlSession session = factory.openSession(); // 5. 获取 UserDao 代理类对象 UserDao userMapper = session.getMapper(UserDao.class); // 6. 执行方法 List<User> users = userMapper.findAll(); for (User user : users) { System.out.println(user); // 结果： // User [id=1, name=tom, age=30] // User [id=2, name=jerry, age=20] // User [id=3, name=rose, age=20] // User [id=4, name=tony, age=22] } // 7. 释放资源 session.close(); }
}`}]},{path:"/admin/Java/MyBatis/MyBatis%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 延迟加载",slug:"mybatis-延迟加载",content:"在MyBatis 一堆多查询中，如果我们在实际应用中或者测试类中，还用不到这些数据，那么我们就可以使用延迟加载来优化查询。比如在查询所有用户和其名下的电脑的时候，我们只需要查询用户的信息，而不需要查询用户的电脑信息，只有当用户需要查看电脑信息的时候，我们才去查询电脑信息。"},{header:"开启延迟加载",slug:"开启延迟加载",content:`SqlMapConfig.xml
<settings> <!--全局开启延迟加载--> <setting name="lazyLoadingEnabled" value="true"/> <setting name="aggressiveLazyLoading" value="false"/>
</settings>`}]},{path:"/admin/Java/MyBatis/MyBatis%E7%9A%84CRUD.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 的 CRUD",slug:"mybatis-的-crud",content:"基于 User 实体类 和 SqlMapConfig.xml 核心配置文件，都不需要反复修改，所以直接展示 UserDao 接口、 UserTest 测试类以及 UserMap.xml 的修改部分。"},{header:"应用案例",slug:"应用案例",content:`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- 配置映射文件的详细信息 namespace：命名空间，指定具体的某一个抽象接口
-->
<mapper namespace="com.api.MyBatis.dao.UserDao"> <!-- select：配置查询操作； id：指定 UserDao 接口中具体的某一个方法 resultType：返回值类型，指的是映射文件的返回类型，即映射文件返回的实体类 User； resultType：可以省略，不设置底层自动设置成实体类 User。 parameterType：参数类型；不设置底层自动设置； parameterType：有参数就配置，不需要参数就不需要配置。 insert：添加 delete：删除 update：修改 select：查询(使用select时不需要手动设置事务提交，查询底层自动提交了) --> <insert id="add" parameterType="com.api.MyBatis.domain.User"> insert into user values (null, #{name}, #{age}) </insert> <insert id="addReturnId" parameterType="com.api.MyBatis.domain.User"> <!-- selectKey：获取自增主键的sql keyColumn：表中的字段名 keyProperty：类中的属性名 resultType：指定映射文件的返回类型 order：执行顺序，BEFORE，AFTER：表示执行完sql语句后再执行selectKey语句 --> <selectKey keyColumn="id" keyProperty="id" resultType="int" order="AFTER"> select last_insert_id() </selectKey> insert into user values (null, #{name}, #{age}) </insert> <delete id="delete" parameterType="int"> delete from user where id = #{id} </delete> <update id="update" parameterType="com.api.MyBatis.domain.User"> update user set name = #{name}, age = #{age} where id = #{id} </update> <select id="findAll" resultType="com.api.MyBatis.domain.User"> select * from user </select> <select id="findById1" resultType="com.api.MyBatis.domain.User" parameterType="Integer" > select * from user where id = #{id} </select> <!-- id = ??? id = Person.getUser().getId() id = Person.#{user}.#{id} id = #{user.id} --> <select id="findById2" parameterType="com.api.MyBatis.test.Person" resultType="com.api.MyBatis.domain.User" > select * from user where id = #{user.id} </select> <select id="count" resultType="int"> select count(*) from user </select> <select id="findByName1" parameterType="string" resultType="com.api.MyBatis.domain.User" > select * from user where name like #{name} </select> <select id="findByName2" parameterType="string" resultType="com.api.MyBatis.domain.User" > select * from user where name like '%\${value}%' </select> <select id="findByPage1" parameterType="map" resultType="com.api.MyBatis.domain.User" > select * from user limit #{start},#{size} </select> <select id="findByPage2" resultType="com.api.MyBatis.domain.User"> select * from user limit #{start},#{size} </select> <!--sql动态判断：where和id的使用--> <select id="findByCondition" parameterType="user" resultType="user"> select * from user <where> <if test="name != null"> and name like #{name} </if> <if test="age != null &amp;&amp; age != 0"> and age = #{age} </if> </where> </select> <!--sql动态判断：forEach的使用--> <select id="findByIds" parameterType="int[]" resultType="user"> select * from user where id in <foreach collection="array" open="(" close=")" separator="," item="id"> #{id} </foreach> </select>
</mapper>
// UserDao.java
package com.api.MyBatis.dao; import com.api.MyBatis.domain.User;
import com.api.MyBatis.test.Person;
import org.apache.ibatis.annotations.Param; import java.util.List;
import java.util.Map; public interface UserDao { public void add(User user); // 新增后获取id值进行后续操作 public void addReturnId(User user); public void delete(int id); public void update(User user); public List<User> findAll(); public User findById1(int id); // 根据Id查询一条记录 public User findById2(Person p); public int count(); // 模糊查询 public List<User> findByName1(String name); public List<User> findByName2(String name); // 分页查询1 public List<User> findByPage1(Map<String, Integer> map); // 分页查询2：注解可以放在形参上 public List<User> findByPage2(@Param("start") int aaa, @Param("size") int bbb); // 根据条件查询(多个条件，且每个条件都是可有可无) List<User> findByCondition(User user); // 根据多个id值进行查询 List <User> findByIds(int [] ids);
}
// UserTest.java
package com.api.MyBatis.test; import com.api.MyBatis.dao.UserDao;
import com.api.MyBatis.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test; import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map; public class UserTest { private SqlSession session; private UserDao userDao; @BeforeEach public void before() throws Exception { // 1. 获取流对象，读取核心配置文件 InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml"); // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 session = factory.openSession(); // 5. 获取 UserDao 代理类对象 userDao = session.getMapper(UserDao.class); } @AfterEach public void after() { // 7. 提交事务(增删改需要提交；查询时不要提交) session.commit(); // 8. 释放资源 session.close(); } @Test public void add() { userDao.add(new User("李四", 21)); userDao.add(new User("王五", 22)); userDao.add(new User("张三", 33)); } // 新增后获取id值进行后续操作 @Test public void addReturnId() { User user = new User(); user.setName("赵六"); user.setAge(18); userDao.addReturnId(user); System.out.println(user.getId()); // 结果： // 40 } @Test public void delete() { userDao.delete(1); } @Test public void update() { userDao.update(new User(2, "王五", 20)); } // 查询全部 @Test public void selectAll() { List<User> usersAll = userDao.findAll(); for (User user : usersAll) { System.out.println(user); // 结果： // User [id=1, name=李四, age=20] // User [id=2, name=王五, age=20] // User [id=3, name=张三, age=30] } } // 查询单条 @Test public void selectById1() { User user = userDao.findById1(32); System.out.println(user); // 结果; // User [id=3, name=张三, age=30] } // 根据Id查询一条记录 @Test public void selectById2() { Person p = new Person(); User user = new User(); user.setId(32); p.setUser(user); User u = userDao.findById2(p); System.out.println(u); // 结果： // User [id=32, name=李四, age=21] } // 查询总数 @Test public void selectCount() { int count = userDao.count(); System.out.println(count); // 结果： // 3 } // 根据姓名模糊查询（一） @Test public void selectByName() { List<User> users = userDao.findByName1("%张%"); for (User user : users) { System.out.println(user); // 结果： // User [id=3, name=张三, age=30] } } // 根据姓名模糊查询（二） @Test public void selectByName2() { List<User> users = userDao.findByName2("李"); for (User user : users) { System.out.println(user); // 结果： // User [id=3, name=张三, age=30] } } // 分页查询一：(select * from user limit (currentPage-1)*size, size) @Test public void selectByPage() { Map<String, Integer> map = new HashMap<>(); map.put("start", 0); map.put("size", 2); List<User> users = userDao.findByPage1(map); for (User user : users) { System.out.println(user); // 结果： // User [id=32, name=李四, age=21] // User [id=33, name=王五, age=22] } } // 分页查询二：注解形式 @Test public void selectByPage2() { List<User> users = userDao.findByPage2(0, 2); for (User user : users) { System.out.println(user); // 结果： // User [id=32, name=李四, age=21] // User [id=33, name=王五, age=22] } } // 根据条件查询(多个条件，且每个条件都是可有可无) @Test public void selectByCondition() { User user = new User(); user.setAge(20); List<User> users = userDao.findByCondition(user); for (User u : users) { System.out.println(u); } } // 根据多个id值进行查询 @Test public void selectByIds() { List<User> users = userDao.findByIds(new int[]{1, 20, 38}); for (User user : users) { System.out.println(user); // 结果： // User [id=1, name=李四, age=20] } }
}
// User实体类
package com.api.MyBatis.domain; public class User { private int id; private String name; private int age; public User() { } public User(String name, int age) { this.name = name; this.age = age; } public User(int id, String name, int age) { this(name, age); this.id = id; } public void setId(int id) { this.id = id; } public void setName(String name) { this.name = name; } public void setAge(int age) { this.age = age; } public int getId() { return id; } public String getName() { return name; } public int getAge() { return age; } @Override public String toString() { return "User [id=" + id + ", name=" + name + ", age=" + age + "]"; }
}
// Person 实体类
package com.api.MyBatis.test; import com.api.MyBatis.domain.User; public class Person { private User user; public User getUser() { return user; } public void setUser(User user) { this.user = user; }
}`}]},{path:"/admin/Java/MyBatis/MyBatis%E7%BC%93%E5%AD%98.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 缓存",slug:"mybatis-缓存",content:"MyBatis 缓存 和 MyBatis 懒加载，都是优化的，缓存可以减少读取数据库的次数，懒加载可以减少内存开销。"},{header:"一级缓存",slug:"一级缓存",content:"默认开启，一级缓存是 SqlSession 级别的缓存，作用域是同一个 SqlSession。 @Test public void findAll() { List<Student> Students1 = StudentDao.findAll(); List<Student> Students2 = StudentDao.findAll(); sqlSession.clearCache(); // 清除一级缓存 /* * Students1 == Students2，只执行了一次select，因为是同一个sqlSession * 查询 Students3，又执行了一次select，因为一级缓存是sqlSession级别 */ System.out.println(Students1 == Students2); // true System.out.println(Students2 == Students3); // false System.out.println(Students1 == Students3); // false }"},{header:"二级缓存",slug:"二级缓存",content:`默认不开启，二级缓存是 mapper 级别的缓存，作用域是同一个 namespace。 如何开启二级缓存的多地方配置？
<!--SqlMapConfig.xml-->
<settings> <!--开启延迟加载--> <setting name="lazyLoadingEnabled" value="true"/> <setting name="aggressiveLazyLoading" value="false"/> <!--开启缓存--> <setting name="cacheEnabled" value="true"/>
</settings>
<!--XXXMapper.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.TeacherMapper"> <!--开启二级缓存--> <cache/> <!--使用二级缓存--> <select id="findBySid" resultType="teacher" parameterType="int" useCache="true"> select * from teacher t, s_t st where t.id = st.tid and st.sid = #{sid} </select>
</mapper>
// XXX实体类要实现序列化
public class Teacher implements Serializable{ ...xxx
}`},{header:"一级缓存和二级缓存流程",slug:"一级缓存和二级缓存流程",content:`先去二级缓存中查找
二级缓存中没有，去一级缓存中查找
一级缓存中没有，再去数据库中查找
数据库中查找到数据，并将数据先存入一级缓存
调用 sqlSession.close() 方法，就会将数据存到二级缓存，并清空一级缓存`}]},{path:"/admin/Java/MyBatis/SqlMapConfig.html",title:"",pathLocale:"/",contents:[{header:"SqlMapConfig",slug:"sqlmapconfig",content:`属性
作用 typeAliases
配置别名，简化实体类文件的引用路径 properties
配置四大参数 environments
配置多个环境，想用哪个，default 的值就是哪个 environment 的 id 值 transactionManager
事务管理器 dataSource
数据源配置 mappers
配置映射文件 mapper
配置映射文件 package
配置映射文件包 cache
配置缓存 cache-ref
配置缓存 useCache
配置是否使用缓存 <?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
<!--动态配置四大参数--> <properties resource="jdbc.properties"> <!--如果需要属性加密，可以在这里配置解密工具--> </properties> <!-- 配置别名 目的：简化实体类文件的引用路径 type：指定别名指向的实体类 alias：别名，在映射文件中用别名就可以替代实体类 parameterType=“user” resultType=“person” typeAlias：配置文件的别名 package：配置整个包下的所有实体类的别名 比如User.java会用user来替代 --> <typeAliases> <!-- <typeAlias type="com.api.MyBatis.domain.User" alias="user"></typeAlias> <typeAlias type="com.api.MyBatis.test.Person" alias="person"></typeAlias> --> <typeAlias type="com.api.MyBatis.test.Person" alias="person"></typeAlias> <package name="com.api.MyBatis.domain"/> </typeAliases> <!-- environments：环境的详细配置； environments：可以配置多个环境，想用哪个，default的值就是哪个environment的id值。 --> <environments default="development"> <environment id="development"> <!-- transactionManager：事务管理器； type：参数，JDBC：表示使用JDBC的事务管理方式； Connection setAutoCommit(false)：开启事务； commit()：提交事务； rollback()：回滚事务。 --> <transactionManager type="JDBC"/> <!-- dataSource：数据源配置； type：有三个参数； POOLED：表示使用连接池，由MyBatis底层自己实现的； UNPOOLED：不使用连接池； JNDI：使用JNDI，一般不使用； property：配置四大参数 --> <!-- <dataSource type="POOLED"> <property name="driver" value="com.mysql.cj.jdbc.Driver"/> <property name="url" value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC" /> <property name="username" value="root"/> <property name="password" value="Sap@1q2w3e4r"/> </dataSource> --> <dataSource type="POOLED"> <!--使用\${}引用properties文件中的属性--> <property name="driver" value="\${driver}"/> <property name="url" value="\${url}"/> <property name="username" value="\${username}"/> <property name="password" value="\${password}"/> </dataSource> </environment> </environments> <!-- mappers：映射文件 mapper：单独加载映射器； resource：映射文件的路径，文件夹之间用"/"隔开； package：批量加载映射器 name：指定要扫描的包的名称 recursive：是否递归扫描，默认为false，只扫描指定包下的映射器，不包括子包下的映射器， 如果为true，则扫描指定包下的所有映射器，包括子包下的映射器； 注意：dao中的java文件名和映射文件名必须一致，否则找不到映射文件 --> <mappers> <!-- 如果使用package方式，且没有配置自动扫描，而是手动配置，则需要配置mapper接口的全类名 如果使用package方式，且配置了自动扫描，则不需要配置mapper接口的全类名 name：指定要扫描的包名 需要保证接口文件和xml文件同名，且在同一个包下， 所以需要在resources下创建com.api.MyBatis.dao文件下，将xml放在此文件夹下 而使用mapper方式，则需要指定mapper接口的全类名(位置+文件名叫全类名) --> <!--<mapper resource="mappers/UserMapper.xml"/>--> <package name="com.api.MyBatis.dao"/> </mappers>
</configuration>`}]},{path:"/admin/Java/MyBatis/%E6%97%A5%E5%BF%97.html",title:"",pathLocale:"/",contents:[{header:"日志",slug:"日志",content:`需要导包，logback
package com.api.MyBatis.test; import org.slf4j.Logger;
import org.slf4j.LoggerFactory; public class LoggerTest { private static final Logger logger= LoggerFactory.getLogger(UserTest.class); public static void main(String[] args) { // 不再使用 System.out.println logger.debug("debug test"); logger.info("info test"); logger.warn("warn test"); logger.error("error test"); // 结果： // 11:28:21.150 [main] DEBUG com.api.MyBatis.test.UserTest - debug test // 11:28:21.154 [main] INFO com.api.MyBatis.test.UserTest - info test // 11:28:21.154 [main] WARN com.api.MyBatis.test.UserTest - warn test // 11:28:21.154 [main] ERROR com.api.MyBatis.test.UserTest - error test }
} <?xml version="1.0" encoding="UTF-8"?>
<!--配置-->
<configuration> <!-- 输出器配置 name：输出器名称 class：输出器实现类 ConsoleAppender：控制台输出器 FileAppender：文件输出器 --> <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender"> <!--设置输出文件地址和追加模式 <file>file.log</file> <append>true</append>--> <!--输出格式配置--> <encoder> <!--格式--> <!-- %d{HH:mm:ss.SSS}：时间 %thread：线程名 %-5level：日志级别；如果不指定，默认使用上级输出器级别 %logger{36}：日志输出器名称 %msg：日志信息 %n：换行 --> <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern> </encoder> </appender> <!-- logger：局部设置；所以当然就可以有多个logger name：指定监测的文件所在包 level：日志输出级别(DEBUG, INFO, WARN, ERROR) additivity：是否允许输出器向上级输出器(全局)输出日志 ref：指定具体的输出器 --> <logger name="com.api" level="debug" additivity="false"> <appender-ref ref="STDOUT" /> </logger> <!-- 全局设置 太过详细了，每一步都会输出； 可以和局部的logger结合使用 --> <!--<root level="info"> <appender-ref ref="STDOUT" /> </root>-->
</configuration>`}]},{path:"/admin/Java/MyBatis/%E6%98%A0%E5%B0%84%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"映射文件配置",slug:"映射文件配置",content:`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!-- 配置映射文件的详细信息 namespace：命名空间，指定具体的某一个抽象接口
-->
<mapper namespace="com.api.MyBatis.dao.UserMapper"> <!-- resultMap：配置映射关系，即数据库查出来的字段和实体类属性之间的映射关系 resultMap：结果会把数据库中的字段映射成实体类属性，所以是实体中的字段 id：指定映射关系id，也是resultMap的唯一标识 type：实体类的全限定名(就是返回值类型的设置) type：因为配置了namespace所以可以省略，或者因为配置typeAlias可以简写 type：resultMap具有type属性，sql语句中的type属性可以省略 resultType：resultType="user"改成resultMap="映射关系id" <id>：主键 <result>：普通字段 <association>：一对一关系 <collection>：一对多关系 <discriminator>：多态映射 <case>：多态处理 <otherwise>：多态处理 column：数据库字段名 property：实体类属性名 --> <resultMap id="userMap" type="user"> <!--主键--> <id column="id" property="uid" /> <!--非主键--> <result column="name" property="uname" /> </resultMap> <!-- select：配置查询操作； id：指定 UserDao 接口中具体的某一个方法 resultType：返回值类型，指的是映射文件的返回类型，即映射文件返回的实体类 User； resultType：不设置底层自动设置 parameterType：参数类型；不设置底层自动设置 是否需要配置参数类型：有参数就配置，不需要参数就不需要配置 insert：添加 delete：删除 update：修改 select：查询(使用select时不需要手动设置事务提交，查询底层自动提交了) --> <insert id="add" parameterType="com.api.MyBatis.domain.User"> insert into user values (null, #{name}, #{age}) </insert> <insert id="addReturnId" parameterType="user"> <!-- selectKey：获取自增主键的sql keyColumn：表中的字段名 keyProperty：类中的属性名 resultType：指定映射文件的返回类型 order：执行顺序，BEFORE，AFTER：表示执行完sql语句后再执行selectKey语句 --> <selectKey keyColumn="id" keyProperty="id" resultType="int" order="AFTER"> select last_insert_id() </selectKey> insert into user values (null, #{name}, #{age}) </insert> <delete id="delete" parameterType="int"> delete from user where id = #{id} </delete> <update id="update" parameterType="user"> update user set name = #{name}, age = #{age} where id = #{id} </update> <select id="findAll" resultType="user"> select * from user </select> <select id="findById1" resultType="user" parameterType="Integer"> select * from user where id = #{id} </select> <!-- id = ??? id = Person.getUser().getId() id = Person.#{user}.#{id} id = #{user.id} --> <select id="findById2" parameterType="person" resultType="user"> select * from user where id = #{user.id} </select> <select id="count" resultType="int"> select count(*) from user </select> <select id="findByName1" parameterType="string" resultType="user"> select * from user where name like #{name} </select> <select id="findByName2" parameterType="string" resultType="user"> select * from user where name like '%\${value}%' </select> <select id="findByPage1" parameterType="map" resultType="user"> select * from user limit #{start},#{size} </select> <select id="findByPage2" resultType="user"> select * from user limit #{start},#{size} </select> <!--sql动态判断：where和id的使用--> <select id="findByCondition" parameterType="user" resultType="user"> select * from user <where> <if test="name != null"> and name like #{name} </if> <if test="age != null &amp;&amp; age != 0"> and age = #{age} </if> </where> </select> <!--sql动态判断：forEach的使用--> <select id="findByIds" parameterType="int[]" resultType="user"> select * from user where id in <foreach collection="array" open="(" close=")" separator="," item="id"> #{id} </foreach> </select>
</mapper>`}]},{path:"/admin/Java/MyBatisPlus/MyBatisPlus.html",title:"",pathLocale:"/",contents:[{header:"MyBatis-Plus",slug:"mybatis-plus",content:""}]},{path:"/admin/Java/MySql/JDBC.html",title:"",pathLocale:"/",contents:[{header:"JDBC",slug:"jdbc",content:`// JDBC 最基础的用法
public static void main(String[] args) throws Exception { // 1. 注册驱动 // 已经过时，请弃用 // 2. 获取数据库连接对象 Connection conn = DriverManager.getConnection( "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC", "root", "Sap@1q2w3e4r" ); // 3. 获取执行sql语句的对象 // 有问题，请更换 Statement sta = conn.createStatement(); // 4. 执行sql语句 int i = sta.executeUpdate("insert into user values(3,'rose', 20)"); System.out.println(i); // 1 // 5. 释放资源 rs.close(); sta.close(); conn.close();
}`},{header:"JDBC 基本步骤",slug:"jdbc-基本步骤",content:`注册驱动
获取数据库连接对象
获取执行 SQL 的对象
执行 SQL 语句
释放资源`},{header:"获取数据库连接对象",slug:"获取数据库连接对象",content:`方法
作用 public static Connection getConnection(String url, String user, String password)
根据地址、用户名、密码连接数据库 public static Connection getConnection(String url)
根据全路径连接数据库 public static Connection getConnection(String url, java.util.Properties info)
根据配置文件连接`},{header:"获取执行 sql 语句的对象",slug:"获取执行-sql-语句的对象",content:`Statement 会有 SQL 注入的风险，所以不推荐使用；解决方案：预处理语句。
SQL 注入？
// SQL 注入案例
String username = "tom' or '1' = '1";
String password = "123456";
String sql = "select * from user where username = '" + username
+ "' and password = '" + password + "'"; // 正确写法
String sql = "select * from user where username = ? and password = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, username);
ps.setString(2, password);`},{header:"执行 SQL 语句",slug:"执行-sql-语句",content:`方法
作用 int executeUpdate()
增删改，返回实际影响的行数 ResultSet executeQuery()
查，返回获取到的结果集 boolean execute()
增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false`},{header:"ResultSet 结果集方法",slug:"resultset-结果集方法",content:`方法
作用 boolean next()
判断结果集的下一条是否有数据，如果有数据返回 true，并把光标下移一位 int getInt(int i)
根据当前下标获取数据(1 tom 20：1 的下标 1，tom 下标 2，20 下标 3) int getInt(String name)
根据当前字段名获取数据 String getString(int i)
根据当前下标获取数据 String getString(String name)
根据当前字段名获取数据`},{header:"方法的使用",slug:"方法的使用",content:`package com.api.JDBC; import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties; public class demo01 { public static void main(String[] args) throws Exception { // 1. 注册驱动 // 已经过时，请弃用 // Class.forName("com.mysql.jdbc.Driver"); // 2. 获取数据库连接对象 // public static Connection getConnection(String url,String user,String password) // public static Connection getConnection(String url) // public static Connection getConnection(String url,java.util.Properties info) /* Connection conn = DriverManager.getConnection( "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC", "root", "Sap@1q2w3e4r" ) */; /* Connection conn = DriverManager.getConnection( "jdbc:mysql://localhost:3306/sister? serverTimezone=UTC&user=root&password=Sap@1q2w3e4r" ); */ Properties pt = new Properties(); pt.setProperty("user", "root"); pt.setProperty("password", "Sap@1q2w3e4r"); Connection conn = DriverManager.getConnection("jdbc:mysql:// localhost:3306/sister?serverTimezone=UTC", pt); // 3. 获取执行sql语句的对象 // 当前的写法有弊端，后续被弃用了，请放弃 Statement sta = conn.createStatement(); // 4. 执行sql语句 // int executeUpdate()：增删改，返回实际影响的行数 // ResultSet executeQuery()：查 // boolean execute()：增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false int i = sta.executeUpdate("insert into user values(4,'tony', 22)"); System.out.println(i); // 1 ArrayList<User> al = new ArrayList<User>(); ResultSet rs = sta.executeQuery("select * from user"); // ResultSet 结果集方法 // boolean next()：判断结果集的下一条是否有数据，如果有数据返回true，并把光标下移一位 // int getInt(int i)：根据当前下标获取数据， 1 tom 20： 1的下标1，tom下标2，20下标3 // int getInt(String name)：根据当前字段名获取数据 // String getString(int i)：根据当前下标获取数据 // String getString(String name)：根据当前字段名获取数据 while (rs.next()) { int id = rs.getInt(1); String name = rs.getString("name"); int age = rs.getInt(3); System.out.println(id + " " + name + " " + age); // 结果： // 1 tom 20 // 2 jerry 20 // 3 rose 20 // 4 tony 22 User user = new User(id, name, age); al.add(user); } // 5. 释放资源 rs.close(); sta.close(); conn.close(); for (User u: al){ System.out.println(u); // 结果： // User{id=1, name='tom', age=20} // User{id=2, name='jerry', age=20} // User{id=3, name='rose', age=20} // User{id=4, name='tony', age=22} } }
}
class User{ private int id; private String name; private int age; public User(int id, String name, int age) { this.id = id; this.name = name; this.age = age; } public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "User{" + "id=" + id + ", name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/MySql/JDBC%E4%B8%AD%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"JDBC 中事务处理",slug:"jdbc-中事务处理",content:`方法
作用 setAutoCommit(boolean autoCommit)
开启关闭事务自动提交，true 关闭， false 开启 commit()
提交事务 rollback()
回滚事务 // 转账的案例，其中用到了封装的JDBC工具类
package com.api.JDBC; import java.sql.Connection;
import java.sql.PreparedStatement; public class ShiWuChuLi { public static void main(String[] args) throws Exception { Connection conn = UtilClass.getConnection(); /* * 开启事务 * 在控制台上是把1变成0 * 在JDBC中是把ture变成false */ conn.setAutoCommit(false); String sql = "update user set money = money + ? where name = ?"; PreparedStatement ps = conn.prepareStatement(sql); // tom减去100 ps.setInt(1, -100); ps.setString(2, "tom"); ps.executeUpdate(); // 模拟异常 System.out.println(1/0); // jerry加上100 ps.setInt(1, 100); ps.setString(2, "jerry"); ps.executeUpdate(); // 提交事务(不提交自动回滚) conn.commit(); UtilClass.close(conn, ps); }
}`}]},{path:"/admin/Java/MySql/JDBC%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%B0%81%E8%A3%85.html",title:"",pathLocale:"/",contents:[{header:"JDBC 工具类封装",slug:"jdbc-工具类封装",content:`#jdbc.properties
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=root
package com.api.JDBC; import java.sql.*;
import java.util.Properties; public class UtilClass { private static String driver; private static String url; private static String username; private static String password; private static Connection conn; static { try { Properties p = new Properties(); p.load(UtilClass.class.getClassLoader().getResourceAsStream("jdbc.properties")); System.out.println(p.getProperty("driver")); driver = p.getProperty("driver"); url = p.getProperty("url"); username = p.getProperty("username"); password = p.getProperty("password"); try { Class.forName(driver); } catch (ClassNotFoundException e) { e.printStackTrace(); } } catch (Exception e) { System.out.println("加载配置文件出错"); e.printStackTrace(); } } public static Connection getConnection() throws Exception { Connection conn = DriverManager.getConnection(url, username, password); return conn; } public static void close(Connection conn, PreparedStatement ps, ResultSet rs) { if (rs != null) { try { rs.close(); } catch (SQLException e) { e.printStackTrace(); } } if (ps != null) { try { ps.close(); } catch (SQLException e) { e.printStackTrace(); } } if (conn != null) { try { conn.close(); } catch (SQLException e) { e.printStackTrace(); } } } public static void close(Connection conn, PreparedStatement ps) { close(conn, ps, null); }
}`}]},{path:"/admin/Java/MySql/",title:"",pathLocale:"/",contents:[{header:"MySql",slug:"mysql",content:""}]},{path:"/admin/Java/MySql/%E5%A2%9E%E5%88%A0%E6%94%B9.html",title:"",pathLocale:"/",contents:[{header:"增删改",slug:"增删改",content:""},{header:"增加",slug:"增加",content:""},{header:"添加一条记录",slug:"添加一条记录",content:`第一种格式 insert into 表名 (字段1, 字段2, ...) values (data1, data2, ...); insert into user (name, age) values ('Tom', 20); -- 比如表内有两个字段，可以说只给一个赋值，另外一个不赋值
insert into user (name) values ('Tom'); 第二种格式 insert into 表名 values (data1, data2, ...); -- 表内有几个字段就必须给几个值，且顺序都要对应
insert into user values ('Jerry', 25);`},{header:"添加多条记录",slug:"添加多条记录",content:`第一种格式 insert into 表名 (字段1, 字段2, ...) values
(data1, data2, ...), (data1, data2, ...), (data1, data2, ...); insert into user (name, age) values ('Tom', 20), ('Rose', 30), ('Jack', 18); 第二种格式 insert into 表名 values (data1, data2, ...), (data1, data2, ...), (data1, data2, ...); insert into user values ('Jenny', 15), ('Chen', 14); 添加一条记录并获取自增 id 添加一条记录并获取自增 id`},{header:"修改",slug:"修改",content:""},{header:"修改所有记录",slug:"修改所有记录",content:"update 表名 set 字段1 = newdata1, 字段2 = newdata2, ...; update user set name = 'Tom', age = 21;"},{header:"修改多条记录",slug:"修改多条记录",content:`update 表名 set 字段1 = newdata1, 字段2 = newdata2, ... where 条件; -- 条件的类型有很多，当前的条件格式是 字段名 = 值
update user set age = 21 where id = 1; update user set name = 'Tom', age = 21 where name = 'Jerry';`},{header:"删除",slug:"删除",content:""},{header:"删除所有记录",slug:"删除所有记录",content:`方式一:
delete from 表名; delete from user;
方式二:
truncate table 表名;
truncate table user;
区别： 方式一是逐行删除，删除后，表的结构还在，可以重新插入数据
方式二是先将整张表删除，然后再重新创建一张同名表；表的结构被删除，不可以重新插入数据`},{header:"删除多条记录",slug:"删除多条记录",content:`delete from 表名 where 条件;
-- 条件的类型有很多，当前的条件格式是 字段名 = 值
delete from user where id = 1; delete from user where name = 'Tom' and age = 21;`}]},{path:"/admin/Java/MySql/%E5%BA%93%E6%93%8D%E4%BD%9C.html",title:"",pathLocale:"/",contents:[{header:"库操作",slug:"库操作",content:`语法
作用 net start mysql
启动 mysql 服务 net stop mysql
停止 mysql 服务 mysql -u root -p
连接(登录) mysql exit
退出连接 show databases;
查看所有数据库 create database 数据库名;
创建数据库 show create database 数据库名;
查看创建数据库时的语句 drop database 数据库名;
删除数据库 use 数据库名;
选择数据库`}]},{path:"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B8%B8%E8%AF%86.html",title:"",pathLocale:"/",contents:[{header:"数据库常识",slug:"数据库常识",content:`关系型数据库： Oracle 大型 收费
Mysql：中小型
DB2：IBM 公司 银行用的多
SQL Server：微软 非关系型数据库： Redis
HBase
MongoDB 大数据库
Neo4J 启动 mysql：cmd 下 net start mysql
关闭 mysql：cmd 下 net stop mysql
登录：mysql -uuserName -ppassword
退出：exit
SQL 语句分类： DDL（Data Definition Language）数据定义语言：库和表的管理 DML（Data Manipulation Language）数据操作语言：插入、删除、更新、查询 DQL（Data Query Language）数据查询语言：查询 DCL（Data Control Language）数据控制语言：授权、角色、级别、权限等`}]},{path:"/admin/Java/MySql/%E7%B4%A2%E5%BC%95.html",title:"",pathLocale:"/",contents:[{header:"索引",slug:"索引",content:`索引？
Mysql 数据库，高效获取数据的一种数据结构
索引是数据库管理系统中一个排序的数据结构，以协助高效查询、更新数据库表中数据。
主键和外键自带索引，其他索引需要手动创建`},{header:"索引的分类",slug:"索引的分类",content:`功能分类 普通索引
主键索引
外键索引
联合索引
全文索引
唯一索引 结构分类 BTree 索引：底层 B + Tree 树结构
Hash 索引：底层哈希表结构`},{header:"索引的优点",slug:"索引的优点",content:`提高数据检索的效率，降低数据库的 IO 成本
通过索引列对数据进行排序，降低数据排序的成本，降低 CPU 的消耗`},{header:"索引的缺点",slug:"索引的缺点",content:`实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引列也是要占用空间的
虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行 INSERT、UPDATE 和 DELETE。因为更新表时，MySQL 不仅要保存数据，还要保存一下索引文件每次对表进行增删改，都会调整因为增删改而产生的碎片，碎片到达一定程度时，会降低效率，解决方法就是定期对表进行 optimize 操作`},{header:"索引的查询",slug:"索引的查询",content:`-- 格式
show index from 表名; show index from user;`},{header:"给某个字段添加索引",slug:"给某个字段添加索引",content:`-- 比如某个查询比较频繁，还想要高效一些
-- 格式
create index 索引名称 on 表名(列名); create index index_name onb user(name);`},{header:"删除索引",slug:"删除索引",content:`-- 格式
drop index 索引名称 on 表名; drop index index_name on user;`}]},{path:"/admin/Java/MySql/%E8%A1%A8%E6%93%8D%E4%BD%9C.html",title:"",pathLocale:"/",contents:[{header:"表操作",slug:"表操作",content:`语法
作用 show tables;
查看当前数据库中的所有表 create table 表名(字段 1 数据类型, 字段 2 数据类型, ...)
创建新表 show create table 表名;
查看创建表的时的语句 desc 表名;
查看表结构 alter table 表名 add 字段 数据类型;
向表内新增一个字段 alter table 表名 change 原字段名 新字段名 数据类型;
修改字段名 alter table 表名 modify 字段 数据类型;
修改字段数据类型 alter table 表名 drop 字段名;
删除表内字段 rename table 原表名 to 新表名;
修改表名 drop table 表名;
删除表 create table person( name varchar(20), age int
);`},{header:"常见的数据类型",slug:"常见的数据类型",content:`类型
说明
备注 int
整型
整数类型 decimal(5,2)
浮点型
整数位是 5 位，小数点后保留 2 位 date
日期型
年月日，新增时默认为 null datetime
日期时间型
年月日时分秒，新增时默认为 null timestamp
日期时间型
年月日时分秒，新增时默认为当前时间 varchar(20)
字符串
限制最多 20 个字符 char(4)
定长字符串
限制最多 4 个字符，字符串长度不足 4 时，用空格填充 blob
二进制数据
- text
字符串
- enmur
枚举类型
- set
集合类型
- tinyint
布尔型
-`}]},{path:"/admin/Java/MySql/%E8%A7%86%E5%9B%BE.html",title:"",pathLocale:"/",contents:[{header:"视图",slug:"视图",content:`视图是虚拟存在的表，如果一个查询重复使用，那么可以用视图简化。
视图就是一张表，所以他的增删改查操作和表一样，只是视图的数据来源是真实表。
视图的增删改查操作，都是对真实表的增删改查操作。`},{header:"创建视图",slug:"创建视图",content:`-- 格式
create view view_name (列名, ...) as 复杂的查询语句 -- user 和 computer 两张表，查询 tom 有几台电脑，将用户名和所拥有的电脑名给展示出来
create view user_computer (user_name, computer_name) as select
u.name, c.name from user u, computer c where u.id = c.uid and u.name = 'tom';`},{header:"修改视图内容",slug:"修改视图内容",content:`-- 格式
update view_name set 列名 = 值 where 条件 update user_computer set computer_name = 'mac' where user_name = 'tom';`},{header:"修改视图结构",slug:"修改视图结构",content:`-- 格式
alter view view_name (列名, ...) as 复杂的查询语句 -- 修改视图结构
alter view user_computer (user_name, cname) as select
u.name, c.name from user u, computer c where u.id = c.uid and u.name = 'tom';`},{header:"删除视图",slug:"删除视图",content:`-- 格式
drop view view_name -- 删除视图
drop view user_computer;`}]},{path:"/admin/Java/MySql/%E9%A2%84%E5%A4%84%E7%90%86%E8%AF%AD%E5%8F%A5.html",title:"",pathLocale:"/",contents:[{header:"预处理语句",slug:"预处理语句",content:`解决 SQL 注入问题
/* * 预处理语句的优点： * 1. 预编译，性能高 * 2. 防止 SQL 注入 * 3. PreparedStatement 是 Statement 的子类，所以方法基本都一样 * 4. ?：占位符，可以动态传入参数 * 5. 占位符的索引从 1 开始 * 6. ps.set 后设置的值是什么类型，就跟什么类型就行
*/
String sql = "select * from user where username = ? and password = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, username);
ps.setString(2, password);
// 输入姓名和密码，验证用户是否存在
package com.api.JDBC; import java.sql.*;
import java.util.Properties;
import java.util.Scanner; public class DemoLoginIn { public static void main(String[] args) throws Exception { // 输入姓名和密码，验证用户是否存在 Scanner sc = new Scanner(System.in); System.out.println("请输入用户名"); String name = sc.nextLine(); System.out.println("请输入年龄"); Integer age = sc.nextInt(); boolean b = extracted(name, age); if (b) { System.out.println("登录成功"); } else { System.out.println("登录失败"); } } private static boolean extracted(String name, Integer age) throws SQLException { Properties pt = new Properties(); pt.setProperty("user", "root"); pt.setProperty("password", "Sap@1q2w3e4r"); String url = "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"; Connection conn = DriverManager.getConnection(url, pt); /* Statement sta = conn.createStatement(); String sql = "select * from user where name = '" + name + "' and age = '" + age + "'"; ResultSet rs = sta.executeQuery(sql); */ String sql = "select * from user where name = ? and age = ?" PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); ResultSet rs = ps.executeQuery(); // 增sql语句 /* String sql = "insert into user(name, age) values(?, ?)"; PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); int i = ps.executeUpdate(); */ // 删sql语句 /* String sql = "delete from user where name = ? and age = ?"; PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); int i = ps.executeUpdate(); */ // 改sql语句 /* String sql = "update user set name = ? where age = ?"; PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); int i = ps.executeUpdate(); */ boolean hasNext = rs.next(); rs.close(); ps.close(); return hasNext; }
}`}]},{path:"/admin/Java/Redis/Redis.html",title:"",pathLocale:"/",contents:[{header:"Redis",slug:"redis",content:""}]},{path:"/admin/Java/Redis/RedisTemplate.html",title:"",pathLocale:"/",contents:[{header:"RedisTemplate",slug:"redistemplate",content:""}]},{path:"/admin/Java/Spring/import%E5%AF%BC%E5%85%A5bean.html",title:"",pathLocale:"/",contents:[{header:"import 导入 bean",slug:"import-导入-bean",content:`当多人协作的时候，可能会有多个 bean 文件，我们可以将多个 bean 文件通过 import 导入到主配置文件中，我们只需要使用主配置文件就可以 <!-- applicationContext.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"
> <import resource="bean1.xml"/> <import resource="bean2.xml"/> <import resource="bean3.xml"/>
</beans>`}]},{path:"/admin/Java/Spring/javaConfig%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"javaConfig 配置",slug:"javaconfig-配置",content:`早期，javaConfig 是 Spring 的一个子项目；在 Spring4 之后，是一个单独的功能了。
Spring4 之后，推荐使用 javaConfig 配置这种方式。因为使用 javaConfig 配置 更加灵活，没有 xml 配置文件这种方式的约束。 // User
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component; @AllArgsConstructor
@Data
@NoArgsConstructor
@Component // 交给Spring托管
public class User { @Value("张三风") // 给属性赋值 public String name;
} //MyConfig
package com.haha.config; import com.haha.pojo.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import; // 这个文件就是配置文件的替代，就是换一种方式
@Configuration // 这个注解就是把当前的配置文件交给Spring托管，本质就是@Component
@ComponentScan("com.haha.pojo")
@Import(Config2.class) // 导入其他配置文件
public class MyConfig { @Bean // 注册bean的注解(id: 方法名；class属性：方法的返回值) public User gotUser() { return new User(); // 返回注入到bean中的对象 }
} //Config2
package com.haha.config; import org.springframework.context.annotation.Configuration; @Configuration
public class Config2 {
} // Test
import com.haha.config.MyConfig;
import com.haha.pojo.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext; public class TestConfig { public static void main(String[] args) { // 获取配置文件的上下文对象用ClassPathXmlApplicationContext // 获取注解上下文对象用AnnotationConfigApplicationContext ApplicationContext ac = new AnnotationConfigApplicationContext(MyConfig.class); User user = ac.getBean("gotUser", User.class); System.out.println(user); }
}`}]},{path:"/admin/Java/Spring/MyBatis%E5%9B%9E%E9%A1%BE.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 回顾",slug:"mybatis-回顾",content:""},{header:"MyBatis 的使用步骤",slug:"mybatis-的使用步骤",content:`导入相关 jar 包(mysql、spring-jdbc、mybatis)
创建实体类
编写核心配置文件
编写接口
编写映射文件
编写测试类`},{header:"1. 导入相关 jar 包",slug:"_1-导入相关-jar-包",content:`<!--pom.xml-->
<!-- 将xml文件添加到打包路径 -->
<build> <resources> <resource> <directory>src/main/java</directory> <includes> <include>**/*.xml</include> </includes> </resource> </resources>
</build>`},{header:"2. 创建实体类",slug:"_2-创建实体类",content:`package com.haha.pojo; import lombok.Data; @Data
public class User { private int id; private String name; private String age;
}`},{header:"3. 编写核心配置文件",slug:"_3-编写核心配置文件",content:`driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=123456
<!--mybatis-config.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration> <properties resource="db.properties"/> <typeAliases> <package name="com.haha.pojo"/> </typeAliases> <environments default="development"> <environment id="development"> <transactionManager type="JDBC"/> <dataSource type="POOLED"> <property name="driver" value="\${driver}" /> <property name="url" value="\${url}" /> <property name="username" value="\${username}" /> <property name="password" value="\${password}" /> </dataSource> </environment> </environments> <mappers> <package name="com.haha.mapper"/> </mappers>
</configuration>`},{header:"4. 编写接口",slug:"_4-编写接口",content:`package com.haha.mapper; import com.haha.pojo.User; import java.util.List; public interface UserMapper { public List<User> selectUser();
}`},{header:"5. 编写映射文件",slug:"_5-编写映射文件",content:`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.haha.mapper.UserMapper"> <select id="selectUser" resultType="user"> select * from user </select>
</mapper>`},{header:"6. 编写测试类",slug:"_6-编写测试类",content:`import com.haha.mapper.UserMapper;
import com.haha.pojo.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test; import java.io.IOException;
import java.io.InputStream;
import java.util.List; public class MyTest { @Test public void test() throws IOException { // 1. 获取流对象，读取核心配置文件 InputStream is = Resources.getResourceAsStream("mybatis-config.xml"); // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 SqlSession session = factory.openSession(); // 5. 获取 UserMapper 代理类对象 UserMapper mapper = session.getMapper(UserMapper.class); List<User> userList = mapper.selectUser(); for (User user : userList) { System.out.println(user); } }
}`}]},{path:"/admin/Java/Spring/Spring%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"事务",slug:"事务",content:`把一组业务放在一起，要么全部成功，要么全部失败。
事务在项目开发中十分重要，涉及数据一致性，不能马虎。
确保完整性和一致性`},{header:"事物的 ACID 原则",slug:"事物的-acid-原则",content:`原子性（Atomicity）: 事务中的所有操作要么全部成功，要么全部失败。
一致性（Consistency）: 事务执行之前和执行之后都必须处于一致性状态。
隔离性（Isolation）: 多个业务可能同时操作一个资源，事务之间不能互相影响。
持久性（Durability）: 事务一旦提交，结果就会永久的保存在数据库中，不可逆。`},{header:"Spring 中的事务",slug:"spring-中的事务",content:`编程式事务管理：通过编程的方式实现事务管理。
声明式事务管理：Spring 中通过 AOP 的方式实现声明式事务管理。 // 实体类
package haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @AllArgsConstructor
@Data
@NoArgsConstructor
public class User { private int id; private String name; private String age;
} // 接口
package haha.mapper;
import haha.pojo.User; import java.util.List; public interface UserMapper { public List<User> selectUser(); public int addUser(User user); public int deleteUser(int id);
} // 实现类(SqlSessionDaoSupport整合)
package haha.mapper.Impl; import haha.mapper.UserMapper;
import haha.pojo.User;
import org.mybatis.spring.support.SqlSessionDaoSupport; import java.util.List; public class UserMapperImpl extends SqlSessionDaoSupport implements UserMapper { @Override public List<User> selectUser() { User user = new User(3,"事务","20"); UserMapper mapper = getSqlSession().getMapper(UserMapper.class); mapper.addUser(user); mapper.deleteUser(3); return mapper.selectUser(); } @Override public int addUser(User user) { return getSqlSession().getMapper(UserMapper.class).addUser(user); } @Override public int deleteUser(int id) { return getSqlSession().getMapper(UserMapper.class).deleteUser(id); }
}
<!-- 映射文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="haha.mapper.UserMapper"> <select id="selectUser" resultType="user"> select * from user </select> <insert id="addUser" parameterType="user"> insert into user(id,name,age) values(#{id},#{name},#{age}) </insert> <delete id="deleteUser" parameterType="int"> delete from user where id = #{id} </delete>
</mapper>
<!-- xml整合文件 -->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(SqlSessionDaoSupport)来整合MyBatis-->
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <import resource="spring-dao.xml"/> <!--注入依赖--> <bean id="userMapper" class="haha.mapper.Impl.UserMapperImpl"> <property name="sqlSessionFactory" ref="sqlSessionFactory"/> </bean>
</beans>
<!-- 主配置文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration> <!--别名--> <typeAliases> <package name="haha.pojo"/> </typeAliases> <!--其他配置：比如日志啥的-->
</configuration>
<!-- 配置文件 -->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(Ioc和Aop)来整合MyBatis，这写配置就不再修改了-->
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop" xmlns:tx="http://www.springframework.org/schema/tx" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd"> <!--数据源的配置：使用Spring提供的JDBC(org.springframework.jdbc.datasource依赖)--> <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource" > <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/> <property name="url" value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC" /> <property name="username" value="root"/> <property name="password" value="123456"/> </bean> <!--Spring中提供sqlSessionFactory--> <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean"> <property name="dataSource" ref="dataSource"/> <!--MyBatis核心配置文件--> <property name="configLocation" value="classpath:mybatis-config.xml"/> <!--映射文件(*: 所有xml文件)--> <property name="mapperLocations" value="classpath:haha/mapper/*.xml"/> </bean> <!--配置声明式事务--> <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager"> <!--可以用构造依赖注入，也可以使用set方法，下边是使用set方法--> <property name="dataSource" ref="dataSource"/> </bean> <!--结合Aop实现事务通知--> <tx:advice id="txAdvice" transaction-manager="transactionManager"> <tx:attributes> <!-- 给哪些方法配置事务 name：*代表所有方法(add或者delete等方法) propagation: 传播策略(一般使用REQUIRED) --> <tx:method name="*" propagation="REQUIRED"/> </tx:attributes> </tx:advice> <!--配置事务的切入--> <aop:config> <!-- 切入点 --> <aop:pointcut id="txPointCut" expression="execution(* haha.mapper.*.*(..))"/> <!-- --> <aop:advisor advice-ref="txAdvice" pointcut-ref="txPointCut"/> </aop:config>
</beans>`}]},{path:"/admin/Java/Spring/Spring%E4%BB%8B%E7%BB%8D.html",title:"",pathLocale:"/",contents:[{header:"Spring 介绍",slug:"spring-介绍",content:`Spring 用于简易开发，主要包括 IOC 和 AOP，其中 IOC 是 Spring 的核心，AOP 是 Spring 的扩展。
IOC 是控制反转，AOP 是面向切面编程。`},{header:"IOC",slug:"ioc",content:"IOC 是控制反转，控制，将对象的创建和销毁交给 Spring 管理；反转，原本对象的创建是由程序员创建并写死，但是现在要将对象的创建和销毁的控制权交给 Spring 管理。"},{header:"AOP",slug:"aop",content:"AOP 是面向切面编程，将业务逻辑和业务逻辑的公共部分进行分离，例如日志、事务等。AOP 是 Spring 的扩展，主要用于解决业务逻辑和业务逻辑的公共部分进行分离的问题。"},{header:"SSH 和 SSM",slug:"ssh-和-ssm",content:"SSH 是 Spring、Struts2 和 Hibernate 的简称，SSM 是 Spring、SpringMVC 和 MyBatis 的简称。SSH 和 SSM 都是 Java Web 开发中常用的框架，其中 SSH 是较早的框架，SSM 是较新的框架。 Hibernate 是全自动的持久化框架， MyBatis 半自动的持久化框架，可定制性更高，更加灵活。"}]},{path:"/admin/Java/Spring/Spring%E6%95%B4%E5%90%88MyBatis.html",title:"",pathLocale:"/",contents:[{header:"Spring 整合 MyBatis",slug:"spring-整合-mybatis",content:`Spring 整合 MyBatis 主要是将 MyBatis 的 SqlSessionFactory 交给 Spring 管理，同时将 Mapper 接口的代理对象交给 Spring 管理。不再像以前一样在 xml 文件中配置及获取
Spring 整合 MyBatis 又分成利用 SqlSessionTemplate 整合和利用 SqlSessionDaoSupport 整合(官网有案例)，注意各自需要的依赖 <!-- 主配置文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration> <!--别名--> <typeAliases> <package name="haha.pojo"/> </typeAliases> <!--其他配置：比如日志啥的-->
</configuration>
<!--Spring整合MyBatis文件，都是配置，所以不用再修改了-->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(Ioc和Aop)来整合MyBatis-->
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <!--数据源的配置：使用Spring提供的JDBC(org.springframework.jdbc.datasource依赖)--> <bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource"> <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/> <property name="url" value="jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"/> <property name="username" value="root"/> <property name="password" value="123456"/> </bean> <!--Spring中提供sqlSessionFactory--> <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean"> <property name="dataSource" ref="dataSource"/> <!--MyBatis核心配置文件--> <property name="configLocation" value="classpath:mybatis-config.xml"/> <!--映射文件(*: 所有xml文件)--> <property name="mapperLocations" value="classpath:haha/mapper/*.xml"/> </bean> <!--SqlSessionTemplate: 如同sqlSession--> <bean id="sqlSession" class="org.mybatis.spring.SqlSessionTemplate"> <!--只能使用构造依赖注入，没有set方法--> <constructor-arg index="0" ref="sqlSessionFactory"/> </bean>
</beans>
<!--多配置整合文件-->
<?xml version="1.0" encoding="UTF-8"?>
<!--使用Spring(Ioc和Aop)来整合MyBatis-->
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <import resource="spring-dao.xml"/> <!-- SqlSessionTemplate： 注入使用的依赖 --> <bean id="userMapper2" class="haha.mapper.Impl.UserMapperImpl"> <property name="sqlSession" ref="sqlSession"/> </bean> <!-- SqlSessionDaoSupport： 直接把sqlSessionFactory注入进来即可 --> <bean id="userMapper" class="haha.mapper.Impl.UserMapperImpl2"> <property name="sqlSessionFactory" ref="sqlSessionFactory"/> </bean>
</beans>
// 实体类
package haha.pojo; import lombok.Data; @Data
public class User { private int id; private String name; private String age;
}
// 接口
package haha.mapper;
import haha.pojo.User; import java.util.List; public interface UserMapper { public List<User> selectUser();
}
// SqlSessionTemplate实现类
package haha.mapper.Impl; import haha.mapper.UserMapper;
import haha.pojo.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate; import java.util.List;
@AllArgsConstructor
@Data
@NoArgsConstructor
public class UserMapperImpl implements UserMapper { // 之前所有的操作都是在SqlSession中操作，现在使用SqlSessionTemplate private SqlSessionTemplate sqlSession; @Override public List<User> selectUser() { UserMapper mapper = sqlSession.getMapper(UserMapper.class); return mapper.selectUser(); }
} // SqlSessionDaoSupport实现类
package haha.mapper.Impl; import haha.mapper.UserMapper;
import haha.pojo.User;
import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport; import java.util.List; public class UserMapperImpl2 extends SqlSessionDaoSupport implements UserMapper { @Override public List<User> selectUser() { /* SqlSession sqlSession = getSqlSession(); UserMapper mapper = sqlSession.getMapper(UserMapper.class); return mapper.selectUser(); */ // 上边的简化版 return getSqlSession().getMapper(UserMapper.class).selectUser(); }
}
<!--映射文件-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="haha.mapper.UserMapper"> <select id="selectUser" resultType="user"> select * from user </select>
</mapper>
// 测试类
import haha.mapper.UserMapper;
import haha.pojo.User;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; import java.util.List; public class MyTest {
@Test
public void test() {
ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml"); UserMapper userMapper = ac.getBean("userMapper", UserMapper.class); List<User> users = userMapper.selectUser(); for (User user : users){ System.out.println(user); }
}
}`}]},{path:"/admin/Java/Spring/Spring%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html",title:"",pathLocale:"/",contents:[{header:"Spring 环境搭建",slug:"spring-环境搭建",content:"首先创建一个 maven 项目 在 pom.xml 中添加 Spring 的依赖 <dependency> <groupId>org.springframework</groupId> <artifactId>spring-webmvc</artifactId> <version>5.3.9</version> </dependency> <dependency> <groupId>org.projectlombok</groupId> <artifactId>lombok</artifactId> <version>1.18.20</version> <scope>provided</scope> </dependency> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.12</version> <scope>test</scope> </dependency>"}]},{path:"/admin/Java/Spring/%E4%BD%9C%E7%94%A8%E5%9F%9F%E8%8C%83%E5%9B%B4scope.html",title:"",pathLocale:"/",contents:[{header:"Bean 的作用于范围",slug:"bean-的作用于范围",content:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <!--bean的作用域范围-scope: 1. singleton: 默认值，单例模式，每次从容器中获取到的 Bean 都是同一个对象 2. prototype: 多例模式，Bean 都是一个\`新的对象，需要控制销毁 3. request: 每一个web请求都会产生一个新的bean，在web项目中使用 4. session: 同一个session共享一个bean，在web项目中使用 5. global-session: 同一个全局session共享一个bean，在web项目中使用 --> <bean id="user1" class="com.haha.pojo.User" scope="singleton"></bean> <bean id="user2" class="com.haha.pojo.User" scope="prototype"></bean>
</beans>
import com.haha.pojo.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestScope { public static void main(String[] args) { ApplicationContext context = new ClassPathXmlApplicationContext("userScope.xml"); User user1 = (User) context.getBean("user1"); User user2 = context.getBean("user1", User.class); System.out.println(user1 == user2); // true User user3 = (User) context.getBean("user2"); User user4 = context.getBean("user2", User.class); System.out.println(user3 == user4); // false }
}`}]},{path:"/admin/Java/Spring/%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"动态代理",slug:"动态代理",content:"在实际开发中，尽量不要去修改原本的对象，而是使用对象代理的方式去扩展对象的功能。由于静态代理会导致代码的膨胀，因此需要动态代理(底层都是反射)。"},{header:"动态代理的分类",slug:"动态代理的分类",content:`基于接口的动态代理：JDK 动态代理
基于类的 动态代理：CGLIB 动态代理
java 字节码：javasist`},{header:"通过案例理解动态代理",slug:"通过案例理解动态代理",content:`通过下面的案例，我们只需要定制一套动态代理处理器封装类，之后不管是实现什么功能，只需要传入不同的被代理对象即可；这就是动态代理的好处。 // 动态代理处理器封装类
package com.haha; import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy; // 代理类的处理器：用这个类生成代理类，以及对被代理的类进行处理，所以就是对代理类的封装
public class ProxyInvocationHandler implements InvocationHandler { // 被代理的接口 private Object target; public void setTarget(Object target) { this.target = target; } // 生成并返回代理类 public Object getProxy() { // getClass()：反射方法，获取类的类加载器 // getClassLoader()：获取类 // getInterfaces()：获取接口 return Proxy.newProxyInstance( this.getClass().getClassLoader(), target.getClass().getInterfaces(), this ); } // 处理代理类，并返回结果(InvocationHandler抽象类中的方法重写) // invoke(proxy, method) // proxy: 被代理的类 // method: 被代理的方法 // args: 被代理的方法的参数 @Override public Object invoke(Object proxy, Method method, Object[] args) throws Throwable { // 注入公共事件，在返回代理对象结果之前调用方法都会被执行 log(method.getName()); Object result = method.invoke(target, args); return result; } public void log(String msg){ System.out.println("日志:" + msg + "方法"); }
}
// 接口1
package com.haha; public interface Rent { void rent();
} // 实现类1
package com.haha; public class Host implements Rent { @Override public void rent() { System.out.println("房东出租房子"); }
}
// 接口2
package com.haha; public interface UserService { void rent(); public void add(); public void delete(); public void update(); public void query();
} // 实现类2
package com.haha; public class UserServiceImpl implements UserService { public void rent() { System.out.println("房东要出租房子"); } public void add() { rent(); System.out.println("调用了add方法"); } public void delete() { rent(); System.out.println("调用了delete方法"); } public void query() { rent(); System.out.println("调用了query方法"); } public void update() { rent(); System.out.println("调用了update方法"); }
}
// 客户端1
package com.haha; public class Client { public static void main(String[] args) { // 真实角色 Host host = new Host(); // 获取代理类处理类 ProxyInvocationHandler pih = new ProxyInvocationHandler(); // 设置代理类 pih.setTarget(host); // 获取代理类 Rent proxy = (Rent) pih.getProxy(); // 执行代理对象的方法 proxy.rent(); // 结果： // 日志：rent方法 // 房东出租房子 }
} // 客户端2
package com.haha; public class UserClient { public static void main(String[] args) { // 真实角色 UserServiceImpl userService = new UserServiceImpl(); // 获取代理类处理类 ProxyInvocationHandler pih = new ProxyInvocationHandler(); // 设置代理类 pih.setTarget(userService); // 获取代理类 UserService proxy = (UserService) pih.getProxy(); // 执行代理对象的方法(add等多个方法，想用哪个执行调用哪个，比较灵活) proxy.add(); // 结果： // 日志：add方法 // 房东要出租房子 // 调用了add方法 }
}`}]},{path:"/admin/Java/Spring/%E6%B3%A8%E8%A7%A3%E8%87%AA%E5%8A%A8%E6%89%AB%E6%8F%8F%E8%A3%85%E9%85%8D.html",title:"",pathLocale:"/",contents:[{header:"注解自动扫描装配",slug:"注解自动扫描装配",content:"在注解自动装配的基础上,可以使用自动扫描,这样就不需要在配置文件中一个一个的配置 bean 了"},{header:"使用四步骤",slug:"使用四步骤",content:`导入注解依赖
在配置文件中开启注解支持
配置扫描包
在需要注入的类或属性上添加注解`},{header:"常用注解",slug:"常用注解",content:`下边这四个注解是等价的,都是在被 spring 扫描的类中使用的,从而不需要在配置文件中添加 bean 文件配置 注解
作用 @Component
自动扫描 @Service
在服务层(service)中使用 @Controller
在控制层(contoller)中使用 @Repository
在持久层(dao)中使用 @Scope
设置作用域,默认单例,同 bean,只是注解方式, scopeName 和 value 两个属性`},{header:"配置文件",slug:"配置文件",content:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd"> <!--注解的支持--> <context:annotation-config /> <!--方式2: 自动扫描--> <!-- context自动扫描机制：扫描具体的某一个包，只有扫描的包才能生效 base-package：指定扫描的包 resource-pattern：指定扫描的包的规则 use-default-filters：是否使用默认的扫描规则，true表示使用，false表示不使用 注意1：在包下的类中需要使用@Component注解才能生效 注意2：如果使用@Component注解的话，下边的bean就都不需要了 --> <context:component-scan base-package="com.haha.pojo"/>
</beans>
// TestAutoSaoMiao
import com.haha.contoller.UserContoller;
import com.haha.dao.UserDao;
import com.haha.service.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestAutoSaoMiao { public static void main(String[] args) { ApplicationContext context= new ClassPathXmlApplicationContext("applicationContext.xml"); UserDao u1 = context.getBean("userDao", UserDao.class); System.out.println(u1.name); // UserDao UserContoller u2 = context.getBean("userContoller", UserContoller.class); System.out.println(u2.name); // UserContoller UserService u3 = context.getBean("userService", UserService.class); System.out.println(u3.name); // UserService }
}
// UserDao
package com.haha.dao; import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository; @Repository // 可以直接替换成@Component
public class UserDao { @Value(value="UserDao") public String name; @Value("女") // @Value表示给属性赋值，也可以在set方法上使用 public String age;
} // UserContoller
package com.haha.contoller; import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller; @Controller
public class UserContoller { @Value(value="UserContoller") public String name; @Value("女") // @Value表示给属性赋值，也可以在set方法上使用 public String age;
} // UserService
package com.haha.service; import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service; @Service
public class UserService { @Value(value="UserService") public String name; @Value("女") // @Value表示给属性赋值，也可以在set方法上使用 public String age;
}`},{header:"xml 和注解",slug:"xml-和注解",content:`xml 适用于任何场景,维护的时候简单
注解,只能在当前类中使用,其他的类获取不到,所以在 spring 项目中很多还是使用 xml
xml 和注解可以混合使用,xml 来管理 bean,用注解来解决属性注入的问题
在后续的 springboot 项目中,都是使用注解,因为注解更加方便`}]},{path:"/admin/Java/Spring/%E6%B3%A8%E8%A7%A3%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D.html",title:"",pathLocale:"/",contents:[{header:"注解自动装配",slug:"注解自动装配",content:"jdk1.5 开始支持注解，spring2.5 开始支持注解"},{header:"使用注解三步骤",slug:"使用注解三步骤",content:`导入注解依赖
在配置文件中开启注解支持
在需要注入的类或属性上添加注解`},{header:"常用注解",slug:"常用注解",content:`注解
作用 @Autowired
自动装配，直接在属性上或者是 set 方法上使用，功能同 byName(根据 id 查找，id 不能重复) @Qualifier
指定装配的 bean，功能同 ref @Resource
自动装配，直接在属性上或者是 set 方法上使用；先根据 byName，找不到根据 byType(根据 class 查找，使用时指定 name 属性) @Value
注入普通属性 <?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd"> <!--注解的支持--> <context:annotation-config /> <!--配置 bean 文件--> <bean id="cat1" class="com.haha.pojo.Cat" /> <bean id="cat2" class="com.haha.pojo.Cat" /> <bean id="dog" class="com.haha.pojo.Dog" /> <bean id="person" class="com.haha.pojo.Person" /> <bean id="student" class="com.haha.pojo.Student" />
</beans>
// Cat
package com.haha.pojo; public class Cat { public void shout() { System.out.println("miao~"); }
}
// Dog
package com.haha.pojo; public class Dog { public void shout() { System.out.println("wang~"); }
}
// Person
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.Nullable; @Data
@NoArgsConstructor
@AllArgsConstructor
public class Person { @Autowired(required = true) // 默认就是true，为false表示这个对象可以为null @Qualifier(value = "cat1") // 当Autowired类型冲突时，通过Qualifier指定，value可以省略 private Cat cat; @Autowired private Dog dog; @Value(value = "李四") // value可以省略 private String name; public Person(@Nullable String name) { // @Nullable: 这个注解标示着name可以为null且不会报空指针异常 this.name = name; }
}
// Student
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value; import javax.annotation.Resource; @Data
@AllArgsConstructor
@NoArgsConstructor
public class Student { @Value("张三") private String name; @Resource(name = "cat1") private Cat cat; @Autowired private Dog dog;
}`}]},{path:"/admin/Java/Spring/%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D.html",title:"",pathLocale:"/",contents:[{header:"自动装配",slug:"自动装配",content:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <bean id="cat" class="com.haha.pojo.Cat"></bean> <bean id="dog" class="com.haha.pojo.Dog"></bean> <!--放开：如果按照byType自动装配，会因为类型冲突而报错--> <!--<bean id="dog1" class="com.haha.pojo.Dog"></bean>--> <!--显示装配--> <bean id="person" class="com.haha.pojo.Person"> <property name="cat" ref="cat"></property> <property name="dog" ref="dog"></property> <property name="name" value="小明"></property> </bean> <!-- 隐式自动装配1: byName autowire: byName byName: 会自动在容器上下文查找(类中set方法后面对应的值，与bean的id一致) --> <bean id="person" class="com.haha.pojo.Person" autowire="byName"> <property name="name" value="小明"></property> </bean> <!-- 隐式自动装配2: byType autowire: byType byType: 会自动在容器上下文查找(类中的属性，与bean的id一致) byType: 如果有多个类型一致的bean，会因为类型冲突报错 byType: 使用byType，cat和dog类型可以省略id了，因为byType全局唯一 --> <bean id="person" class="com.haha.pojo.Person" autowire="byType"> <property name="name" value="小明"></property> </bean>
</beans>
// Test
import com.haha.pojo.Person;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestAuto { public static void main(String[] args) { ApplicationContext context= new ClassPathXmlApplicationContext("beanAuto.xml"); Person person= (Person) context.getBean("person"); person.getCat().shout(); person.getDog().shout(); }
}`}]},{path:"/admin/Java/Spring/%E9%80%9A%E8%BF%87%E6%A1%88%E4%BE%8B%E7%90%86%E8%A7%A3%E9%9D%99%E6%80%81%E4%BB%A3%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"通过案例理解静态代理",slug:"通过案例理解静态代理",content:`拿租房子举例，有四种角色：租客(客户)、中介(代理)、房东(真实角色)、租房子(接口或抽象类)；代理的目的就是让真实角色(房东)尽量只做纯粹的事(租房子)，其他的(增加日志、统计、鉴权等)交给代理(中介)去做。 // 1. 定义接口
public interface Rent { void rent();
} // 2. 定义真实角色
public class Host implements Rent { @Override public void rent() { System.out.println("房东出租房子"); }
} // 3. 定义代理角色
public class Proxy implements Rent { private Host host; public Proxy(Host host) { this.host = host; } @Override public void rent() { seeHouse(); // 中介带你看房子 host.rent(); // 房东租房子 fare(); // 中介收中介费 } public void seeHouse() { System.out.println("中介带你看房子"); } public void fare() { System.out.println("中介收中介费"); }
} // 4. 客户操作
public class Client { public static void main(String[] args) { // 房东要租房子 Host host = new Host(); // 代理，中介帮房东租房子 Proxy proxy = new Proxy(host); // 客户找中介租房子，其中附属操作也都由代理完成 proxy.rent(); // 结果： // 中介带你看房子 // 房东出租房子 // 中介收中介费 }
}`},{header:"代理的好处",slug:"代理的好处",content:`可以使真实角色(房东)的操作更加纯粹，不用关注一些公共的业务
公共业务交给代理角色(中介)完成，实现了业务的分工
公共业务发生扩展的时候，方便集中管理`},{header:"静态代理的缺点",slug:"静态代理的缺点",content:"一个真实角色就会产生一个代理角色，代码量会翻倍，开发效率会降低"},{header:"缺点的解决方案",slug:"缺点的解决方案",content:`使用动态代理
使用 AOP(面向切面编程)`}]},{path:"/admin/Java/SpringBoot/Jsoup.html",title:"",pathLocale:"/",contents:[{header:"Jsoup",slug:"jsoup",content:"Jsoup 是一款用于处理真实世界 HTML 的 Java 库。它提供了一个非常方便的 API 来提取和操作数据，使用 DOM、CSS 和类似 jQuery 的方法。"},{header:"引入依赖",slug:"引入依赖",content:`<dependency> <groupId>org.jsoup</groupId> <artifactId>jsoup</artifactId> <version>1.12.1</version>
</dependency>`},{header:"爬京东商品工具类",slug:"爬京东商品工具类",content:`package com.ths.utils; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component; import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List; @Component
// 这是一个基础的爬页面的工具类
public class HtmlParseUtil { public static List<JDContent> parseJD(String keyword) throws IOException { // url String url = "https://search.jd.com/Search?keyword=" + keyword; // 解析网页 Document document = Jsoup.parse(new URL(url), 30000); // 解析回来的就是浏览器document对象，js能用的就都能用了 Element element = document.getElementById("J_goodsList"); // 获取所有的li标签 Elements elements = element.getElementsByTag("li"); // 定义一个ArrayList ArrayList<JDContent> list = new ArrayList<>(); for (Element el : elements) { // 获取图片地址(正常是获取src，懒加载获取source-data-lazy-img的) String img = el.getElementsByTag("img").eq(0).attr("source-data-lazy-img"); // 获取标题 String title = el.getElementsByClass("p-name").eq(0).text(); // 获取价格 String price = el.getElementsByClass("p-price").eq(0).text(); // 添加到集合中 JDContent content = new JDContent(title, price, img); list.add(content); } return list; } @Data @AllArgsConstructor @NoArgsConstructor public static class JDContent { private String title; private String price; private String img; }
}
// 测试
@Test
void contextLoads5() throws IOException { HtmlParseUtil.parseJD("Java").forEach(System.out::println);
}`}]},{path:"/admin/Java/SpringBoot/swagger.html",title:"",pathLocale:"/",contents:[{header:"swagger",slug:"swagger",content:"访问地址：http://localhost:8080/swagger-ui/index.html"},{header:"1.引入依赖",slug:"_1-引入依赖",content:`<!--swagger-->
<dependency> <groupId>io.springfox</groupId> <artifactId>springfox-swagger2</artifactId> <version>2.9.2</version>
</dependency>
<dependency> <groupId>io.springfox</groupId> <artifactId>springfox-swagger-ui</artifactId> <version>2.9.2</version>
</dependency>`},{header:"2.配置类",slug:"_2-配置类",content:`package com.ths.config; import com.ths.controller.UserController;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2; import java.util.ArrayList; @Configuration
@EnableSwagger2 //开启swagger2(访问：http://localhost:8080/swagger-ui.html)
public class SwaggerConfig { /* // RequestHandlerSelectors: 配置扫描的控制器 basePackage: 扫描指定包下的所有请求 any(): 扫描全部 none(): 全都不扫描 withClassAnnotation: 扫描类上的注解 withClassAnnotation(RestController.class): 扫描所有有RestController注解的类 withMethodAnnotation: 扫描方法上的注解 withMethodAnnotation(GetMapping.class): 扫描所有有GetMapping注解的方法 // PathSelectors: 配置过滤规则 ant(): 扫描指定路径下的所有请求(ant("/dev/**")) any(): 扫描全部 none(): 不扫描 regex(): 正则表达式 */ // 配置Swagger的Docket的bean实例 // User组 @Bean public Docket userDocket(Environment env){ // 设置要显示swagger的环境 Profiles profiles = Profiles.of("dev", "test"); // 获取当前环境 boolean flag = env.acceptsProfiles(profiles); return new Docket(DocumentationType.SWAGGER_2) .apiInfo(apiInfo()) // 分组 .groupName("用户模块") // 配置是否启动Swagger(默认是true，false就关掉了) .enable(flag) .select() .apis(RequestHandlerSelectors.basePackage("com.ths.controller")) .paths(PathSelectors.regex("/user.*")) // 所有/user开头的请求 .build(); } // Hello组 @Bean public Docket helloDocket(Environment env){ Profiles profiles = Profiles.of("dev", "test"); boolean flag = env.acceptsProfiles(profiles); return new Docket(DocumentationType.SWAGGER_2) .apiInfo(apiInfo()) // 分组 .groupName("Hello模块") .enable(flag) .select() .apis(RequestHandlerSelectors.basePackage("com.ths.controller")) .paths(PathSelectors.ant("/hello/**")) .build(); } // 配置ApiInfo信息(就是接口信息) private ApiInfo apiInfo() { Contact DEFAULT_CONTACT = new Contact("ths", "http://www.ths.com", "ths@ths.com"); return new ApiInfo( "Api文档", // 标题 "文档描述", // 描述 "1.0", // 版本 "urn:tos", // 服务条款URL DEFAULT_CONTACT, // 联系人 "Apache 2.0", // 许可 "http://www.apache.org/licenses/LICENSE-2.0", // 许可URL new ArrayList() // 扩展 ); }
}
// UserController
package com.ths.controller; import com.ths.pojo.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController; @RestController
@Api(value = "用户接口", tags = "用户接口")
public class UserController { @GetMapping("/user") @ApiOperation("get方式获取用户信息") // 给接口加文档注释 public User getUser(@ApiParam("用户名") String username, @ApiParam("密码") String password) { return new User(username, password); } @PostMapping("/user") @ApiOperation("post方式获取用户信息") // 给接口加文档注释 public User postUser(@ApiParam("用户名") String username, @ApiParam("密码") String password) { return new User(username, password); } @PostMapping("/user2") @ApiOperation("post方式获取用户信息") // 给接口加文档注释 public User postUser2(User user) { return user; }
} // HelloController
package com.ths.controller; import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; @RestController("/hello")
public class HelloController { @RequestMapping("/hello") public String hello() { return "hello"; }
} // User
package com.ths.pojo; import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @Data
@AllArgsConstructor
@NoArgsConstructor
@Api("用户字段信息") // 和ApiModel作用一样
//@ApiModel("用户字段信息") // 给实体类加文档注释
public class User { @ApiModelProperty("用户名") private String username; @ApiModelProperty("密码") private String password;
}
# application.properties
spring.application.name = spring-boot-2-swagger
# 激活开发环境
spring.profiles.active = dev # application-dev.properties
server.port = 8080 # application-test.properties
server.port = 8081 # application-prod.properties
server.port = 19200`}]},{path:"/admin/Java/SpringBoot/%E5%88%9D%E8%AF%86SpringBoot.html",title:"",pathLocale:"/",contents:[{header:"初识 SpringBoot",slug:"初识-springboot",content:""},{header:"最简单的项目",slug:"最简单的项目",content:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd "
> <modelVersion>4.0.0</modelVersion> <!--parent：父项目--> <parent> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-parent</artifactId> <version>2.2.0.RELEASE</version> <relativePath/> </parent> <groupId>com.ths</groupId> <artifactId>spring-boot-2-2-0</artifactId> <version>0.0.1-SNAPSHOT</version> <name>spring-boot-2-2-0</name> <description>spring-boot-2-2-0</description> <url/> <licenses> <license/> </licenses> <developers> <developer/> </developers> <scm> <connection/> <developerConnection/> <tag/> <url/> </scm> <properties> <!--java版本--> <java.version>1.8</java.version> </properties> <dependencies> <!--web依赖，包含SpringMvc，负责：tomcat、dispatchServlet、jsp...配置--> <!--starter: 启动器--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-web</artifactId> </dependency> <!--跟Junit类似，用于单元测试--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-test</artifactId> <scope>test</scope> </dependency> </dependencies> <!--打包--> <build> <plugins> <plugin> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-maven-plugin</artifactId> </plugin> </plugins> </build> </project>`},{header:"端口号和自定义 banner",slug:"端口号和自定义-banner",content:`# 应用名称
spring.application.name=spring-boot-2
# 端口号
service.port=8080
# 自定义Banner
# resources 目录下放入一个banner.txt文件即可自动识别`},{header:"banner 网站",slug:"banner-网站",content:"https://www.bootschool.net/ascii-art/people"},{header:"打包运行",slug:"打包运行",content:`首先用 maven package 打包
打包完成后，在 target 目录下找到 jar 包
使用 java -jar 命令运行 jar 包(mcd 下输入 java -jar xxx.jar)`},{header:"SpringBoot-2.2.0.RELEASE",slug:"springboot-2-2-0-release",content:"官方文档"}]},{path:"/admin/Java/SpringBoot/%E5%BF%AB%E9%80%9F%E5%88%9B%E5%BB%BA.html",title:"",pathLocale:"/",contents:[{header:"Spring-boot 介绍.md",slug:"spring-boot-介绍-md",content:""},{header:"Spring Boot 简介",slug:"spring-boot-简介",content:"Spring Boot 是由 Pivotal 团队提供的框架，旨在简化 Spring 应用的创建和开发过程。它通过提供一系列的“starter”依赖和自动配置功能，使得开发者可以快速构建和运行 Spring 应用，而无需进行繁琐的配置。Spring Boot 的核心理念是“约定优于配置”，它遵循“开箱即用”的原则，使得开发者可以更加专注于业务逻辑的实现，而不是配置文件的编写。"},{header:"Spring Boot 快速创建",slug:"spring-boot-快速创建",content:"官网创建 IDEA 创建"}]},{path:"/admin/Java/SpringCloud/CAP%E5%8E%9F%E5%88%99.html",title:"",pathLocale:"/",contents:[{header:"CAP 原则",slug:"cap-原则",content:""},{header:"ACID",slug:"acid",content:"ACID 是指数据库事务正确执行的四个基本要素的缩写。包含：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。像 MySql、Oracle、SqlSever 等关系型数据库遵循。"},{header:"CAP",slug:"cap",content:"Consistency（一致性）、Availability（可用性）、Partition tolerance（分区容错性），NoSql(redis、mongodb) 等非关系型数据库遵循。CAP 是指在一个分布式系统中，，三者不可同时获得，要么 AC、要么 AP、要么 CP。"}]},{path:"/admin/Java/SpringCloud/Dashboard%E6%B5%81%E7%9B%91%E6%8E%A7.html",title:"",pathLocale:"/",contents:[{header:"Dashboard 流监控",slug:"dashboard-流监控",content:"首先，服务端需要有 Hystrix 对熔断的支持，有 actuator 监控信息配置，同时还需要添加一个 Servlet 容器，用于监控；其次，客户端需要有 Hystrix-Dashboard 支持"},{header:"服务端(project-hystrix-provider-8004)",slug:"服务端-project-hystrix-provider-8004",content:`已经有了熔断机制和监控信息配置，只需要添加一个 Servlet 容器，用于监控 package com.ths.hystrix; import com.netflix.hystrix.contrib.metrics.eventstream.HystrixMetricsStreamServlet;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean; @SpringBootApplication
// 启用Eureka客户端,自动将本服务注册到Eureka中
@EnableEurekaClient
// 服务注册与发现(让其他的微服务发现自己,并得到自己的服务信息)
@EnableDiscoveryClient
// 添加Hystrix对熔断的支持
@EnableCircuitBreaker
public class Hystrix_8001 { public static void main(String[] args) { SpringApplication.run(Hystrix_8001.class, args); } // 增加一个Servlet容器，用于监控 @Bean public ServletRegistrationBean hystrixMetricsStreamServlet() { ServletRegistrationBean rB = new ServletRegistrationBean( new HystrixMetricsStreamServlet() ); // 访问地址 localhost://8004/actuator/hystrix.stream rB.addUrlMappings("/actuator/hystrix.stream"); // 设置名称 rB.setName("HystrixMetricsStreamServlet"); // 设置优先级(启动后就开启) rB.setLoadOnStartup(1); return rB; }
}`},{header:"客户端",slug:"客户端",content:`在父项目下新建项目(project-hystrix-dashboard-consumer-8088) <!-- 依赖项 -->
<!--Hystrix-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-hystrix</artifactId> <version>1.4.6.RELEASE</version>
</dependency>
<!--Hystrix-Dashboard-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-hystrix-dashboard</artifactId> <version>1.4.6.RELEASE</version>
</dependency>
// 启动类
package com.ths.consumer; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard; @SpringBootApplication
//@EnableEurekaClient
// 开启Dashboard监控页面
// 注意，服务端需要配置监控信息(actuator)，否则的话，查不到
// 启动后访问页面: http://localhost:8088/hystrix
@EnableHystrixDashboard
public class HystrixDashboard_8088 { public static void main(String[] args) { SpringApplication.run(HystrixDashboard_8088.class, args); }
}`},{header:"图例",slug:"图例",content:"Dashboard 首页： Dashboard 监控页面： 查看监控数据流： 监控页面中的圆圈详解： 监控页面中的线(心跳)详解： 监控页面详解："}]},{path:"/admin/Java/SpringCloud/Eureka.html",title:"",pathLocale:"/",contents:[{header:"Eureka 注册中心",slug:"eureka-注册中心",content:`现在开始所有的模块都遵循四个步骤
1. 导入依赖
2. 编写配置文件
3. 开启这个功能(@EnableXXX)
4. 配置类(需要的话) Eureka 遵循的是 AP 原则，即高可用和高一致性，而 Zookeeper 遵循的是 CP 原则，即高一致性和高可用性`},{header:"Eureka 注册中心",slug:"eureka-注册中心-1",content:""},{header:"1. 导入依赖",slug:"_1-导入依赖",content:`<!--Eureka Server 注册中心-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-eureka-server</artifactId> <version>1.4.6.RELEASE</version>
</dependency>
<!--热部署-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-devtools</artifactId>
</dependency>`},{header:"2. 编写配置文件",slug:"_2-编写配置文件",content:"server: port: 7001\n# Eureka 配置\neureka: instance: # 在Eureka注册中心的名字 hostname: localhost client: # 是否向Eureka注册中心注册自己 register-with-eureka: false # 是否从Eureka注册中心获取服务列表(false: 因为当前就是注册中心,即服务端) fetch-registry: false # Eureka 监控中心地址 serviceUrl: # 目前取到的地址就是 https://localhost:7001/eureka/ defaultZone: https://${eureka.instance.hostname}:${server.port}/eureka/"},{header:"3. 开启这个功能(@EnableXXX)",slug:"_3-开启这个功能-enablexxx",content:`package com.ths.eureka; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer; @SpringBootApplication
// 启用EurekaServer服务端启动类，接受其它微服务注册进来
@EnableEurekaServer
public class EurekaServer_7001 { public static void main(String[] args) { SpringApplication.run(EurekaServer_7001.class, args); // 启动后测试地址 // http://localhost:7001/ }
}`}]},{path:"/admin/Java/SpringCloud/Eureka%E8%87%AA%E6%88%91%E4%BF%9D%E6%8A%A4%E6%9C%BA%E5%88%B6.html",title:"",pathLocale:"/",contents:[{header:"Eureka 自我保护机制",slug:"eureka-自我保护机制",content:"总结就是好死不如赖活着 比如某一个服务，因为断电等原因，导致服务下线，Eureka 接收不到心跳，但是服务并没有真正的下线，此时不该注销该服务，Eureka 会保存注册中心的服务信息，宁可错误保留，也不盲目注销或删除，这就是好死不如赖活着。 当 Eureka 再次收到心跳时，服务会被重新注册，这就是自我保护机制。"}]},{path:"/admin/Java/SpringCloud/Feign.html",title:"",pathLocale:"/",contents:[{header:"Feign",slug:"feign",content:"Feign 和 Ribbon 都可以远程接口调用，Feign 中集成了 Ribbon，区别在于 Feign 需要编写接口，而 Ribbon 需要编写配置类。"},{header:"Ribbon 调用过程",slug:"ribbon-调用过程",content:`配置实现负载均衡的 RestTemplate
restTemplate.getForObject(REST_URL_PREFIX + "/dept/list", List.class)`},{header:"Feign 调用过程",slug:"feign-调用过程",content:`在 Api 模块中定义接口
在 Api 模块接口中指定@FeignClient(value = "PROJECT-PROVIDER")
在调用模块启动类加上@EnableFeignClients(basePackages = {"com.ths.api.service"})扫描机制
在调用地方注入接口，调用接口方法即可`},{header:"Feign 的优缺点",slug:"feign-的优缺点",content:`优点：Feign 集成了 Ribbon，Feign 是声明式的，只需要创建一个接口并注解。简化了 Ribbon 的调用方式，只需要创建一个接口并添加注解即可。
缺点：Feign 不支持文件上传，需要使用 Feign 的扩展组件 Feign-form。`},{header:"Feign 具体步骤",slug:"feign-具体步骤",content:""},{header:"1. 导入依赖",slug:"_1-导入依赖",content:""},{header:"1.1. api 模块",slug:"_1-1-api-模块",content:`<!--导入Feign-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-feign</artifactId> <version>1.4.6.RELEASE</version>
</dependency>`},{header:"1.2. 调用模块",slug:"_1-2-调用模块",content:`该模块是把 project-consumer-80 中的全都拿了过来，然后去掉 Ribbon，加上 Feign <!--Feign客户端实现负载均衡-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-feign</artifactId> <version>1.4.6.RELEASE</version>
</dependency>`},{header:"2. 配置文件",slug:"_2-配置文件",content:""},{header:"2.1 调用模块",slug:"_2-1-调用模块",content:`server: port: 8808
spring: application: name: project-consumer-8808
# Eureka
eureka: client: # 不注册自己 register-with-eureka: false # 从注册中心获取服务 service-url: defaultZone: http://eureka7002.com:7002/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/`},{header:"3. 编写 Api 模块接口",slug:"_3-编写-api-模块接口",content:`Api 模块中的接口地址必须与微服务(project-provider-8001 等)中提供的地址接口地址保持一致，因为 Feign 会根据接口地址去调用微服务中的接口 // 比如这是调用模块中的接口
@RestController
public class DeptController { @Autowired private DeptService service; // 查询所有部门 @GetMapping("/dept/list") public List<Dept> queryAll() { return service.queryAll(); }
}
// Api模块接口
package com.ths.api.service; import com.ths.api.pojo.Dept;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam; import java.util.List; @Component
@FeignClient(value = "PROJECT-PROVIDER")
public interface FeignSupport { @GetMapping("/dept/list") // 这块必须保持一致 public List<Dept> queryAll(); @GetMapping("/dept/get/{id}") public Dept queryById(@PathVariable("id") Long id); @PostMapping("/dept/add") public boolean addDept(@RequestParam("dept") Dept dept); @PostMapping("/dept/delete") public boolean deleteDept(@RequestParam("id") Long id); @PostMapping("/dept/update") public boolean updateDept(@RequestParam("dept") Dept dept);
}`},{header:"3. 调用模块注入接口",slug:"_3-调用模块注入接口",content:`package com.ths.consumer.controller; import com.ths.api.pojo.Dept;
import com.ths.api.service.FeignSupport;
import org.springframework.web.bind.annotation.*; import java.util.List; @RestController
public class GetDeptController { // 在启动类上加上扫描包，否则会飘红 private FeignSupport feignSupport = null; public GetDeptController(FeignSupport feignSupport) { this.feignSupport = feignSupport; } @PostMapping("/add") public boolean addDept(@RequestParam("dept") Dept dept) { return this.feignSupport.addDept(dept); } @PostMapping("/delete") public boolean deleteDept(@RequestParam("id") Long id) { return this.feignSupport.deleteDept(id); } @GetMapping("/queryAll") public List<Dept> queryAll() { return this.feignSupport.queryAll(); } @GetMapping("/queryById/{id}") public Dept queryById(@PathVariable("id") Long id) { return this.feignSupport.queryById(id); } @PostMapping("/update") public boolean updateDept(@RequestParam("dept") Dept dept) { return this.feignSupport.updateDept(dept); }
}`},{header:"4. 调用模块启动类",slug:"_4-调用模块启动类",content:`package com.ths.consumer; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan; // 确保扫描到所有相关包
@SpringBootApplication
// 服务注册与发现
@EnableEurekaClient
// 扫描包，让api模块中的所有接口都生效
@EnableFeignClients(basePackages = {"com.ths.api.service"})
// 扫描包，让api模块中的所有注解都生效
//@ComponentScan("com.ths.api.service")
public class FeignConsumer_8808 { public static void main(String[] args) { SpringApplication.run(FeignConsumer_8808.class, args); }
}`}]},{path:"/admin/Java/SpringCloud/HyStrix%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD.html",title:"",pathLocale:"/",contents:[{header:"HyStrix 服务熔断",slug:"hystrix-服务熔断",content:"在父项目中新建模块 project-hystrix-provider-8004，将 project-provider-8001 赋值一份进行修改"},{header:"1. 引入依赖",slug:"_1-引入依赖",content:`<!--hystrix-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-hystrix</artifactId> <version>1.4.6.RELEASE</version>
</dependency>`},{header:"2. 配置文件",slug:"_2-配置文件",content:`server: port: 8004
# mybatis配置
mybatis: # 配置别名：实体类包名路径(api模块) type-aliases-package: com.ths.api.pojo # 配置mapper接口的位置(当前模块) mapper-locations: classpath:mybatis/mapper/*.xml # 配置全局配置文件(当前模块) config-location: classpath:mybatis/mybatis-config.xml
# spring配置
spring: application: # 因为配置负载均衡，所以多个服务的名字要一致 # name: project-provider-8001 name: project-provider datasource: type: com.alibaba.druid.pool.DruidDataSource driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/db01? useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC username: root password: 123456 # 配置连接池 # dbcp2:
# Eureka配置
eureka: client: serviceUrl: # 将本服务注册到哪个注册中心(单机) # defaultZone: http://localhost:7001/eureka/ # 集群 defaultZone: http://eureka7001.com:7001/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/ # 修改服务在注册中心的名字 instance: instance-id: project-hystrix-8004-id # 显示服务的ip地址 prefer-ip-address: true
# 配置监控信息(访问地址: http://localhost:8001/actuator/info)
info: app.name: project-hystrix-8004 app.description: project-hystrix-8004 company.name: ths`},{header:"3. 启动类(启动熔断)",slug:"_3-启动类-启动熔断",content:`package hystrix; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient; @SpringBootApplication
// 启用Eureka客户端,自动将本服务注册到Eureka中
@EnableEurekaClient
// 服务注册与发现(让其他的微服务发现自己,并得到自己的服务信息)
@EnableDiscoveryClient
// 添加Hystrix对熔断的支持
@EnableCircuitBreaker
public class Hystrix_8001 { public static void main(String[] args) { SpringApplication.run(Hystrix_8001.class, args); }
}`},{header:"4. Controller",slug:"_4-controller",content:`package hystrix.controller; import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import com.ths.api.pojo.Dept;
import hystrix.service.DeptService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController; // 提供Restful服务
@RestController // 只能用@RestController，不能用@Controller
public class DeptController { private final DeptService service; public DeptController(DeptService service) { this.service = service; } // 根据id查询部门，可能存在的问题是id不传，返回null类型，需要一个备选方案 // 现在熔断机制放到了当前类中，如果想要提取的话可以采用自定义注解加拦截器的方式 @HystrixCommand( fallbackMethod = "queryByHystrix", commandProperties = { @HystrixProperty( name = "execution.isolation.thread.timeoutInMilliseconds", value = "500" ), // 超时时间 @HystrixProperty( name = "circuitBreaker.requestVolumeThreshold", value = "10" ), // 请求阈值 @HystrixProperty( name = "circuitBreaker.errorThresholdPercentage", value = "50" ), // 错误百分比 @HystrixProperty( name = "circuitBreaker.sleepWindowInMilliseconds", value = "500" ) // 断路器关闭等待时间 } ) @GetMapping("/dept/get/{id}") public Dept queryById(@PathVariable("id") Long id) { try { Dept dept = service.queryById(id); System.out.println("查询部门：" + dept); if (dept == null) { System.out.println(dept); throw new RuntimeException("用户不存在，找不到id:" + id + "的用户!"); } return dept; } catch (Exception e) { System.err.println("查询部门时发生异常: " + e.getMessage()); e.printStackTrace(); throw e; // 让 Hystrix 捕获异常 } } // 备选方案 public Dept queryByHystrix(@PathVariable("id") Long id) { // 现在备选方案是返回一个Dept对象 // 也可以采用Ribbon实现负载均衡，调用集群中的其他服务 return new Dept() .setDeptno(id) .setDname("该ID：" + id + "没有对应的信息,null--@HystrixCommand") .setDb_source("没有这个数据库"); }
}`},{header:"5. 注意其他需要修改的地方，比如映射文件的路径",slug:"_5-注意其他需要修改的地方-比如映射文件的路径",content:""},{header:"6. 展示",slug:"_6-展示",content:"服务熔断：当一个请求失败时，为了保证链路畅通，请求直接走备选方案，继续往下执行。 服务 Down 机什么样？ 显示服务的 ip 地址"}]},{path:"/admin/Java/SpringCloud/HyStrix%E6%9C%8D%E5%8A%A1%E9%99%8D%E7%BA%A7.html",title:"",pathLocale:"/",contents:[{header:"HyStrix 服务降级",slug:"hystrix-服务降级",content:"比如在某一个时刻，A 服务(8001)很大的流量，导致服务出现问题，这个时候，我们就可以让 A 服务(8001)直接返回一个友好的提示，而不是让客户端等待或者抛出异常，这就是服务降级；或者我们可以将 A 服务(8001)的请求转发到 B 服务(8002)上，这就是服务熔断；再或者，我们可以让 A 服务(8001)直接返回一个默认值，这就是服务限流。"},{header:"服务降级实现(采用的是 Feign 实现，所以只能是 Feign 这一套)",slug:"服务降级实现-采用的是-feign-实现-所以只能是-feign-这一套",content:""},{header:"1. 修改 Api 模块的接口",slug:"_1-修改-api-模块的接口",content:`package com.ths.api.service; import com.ths.api.pojo.Dept;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam; import java.util.List; @Component
// PROJECT-PROVIDER：服务提供者的名字
// 配置fallbackFactory：服务降级的实现
@FeignClient(value="PROJECT-PROVIDER", fallbackFactory=ServiceFallbackFactory.class)
public interface FeignSupport { @GetMapping("/dept/list") public List<Dept> queryAll(); @GetMapping("/dept/get/{id}") public Dept queryById(@PathVariable("id") Long id); @PostMapping("/dept/add") public boolean addDept(@RequestParam("dept") Dept dept); @PostMapping("/dept/delete") public boolean deleteDept(@RequestParam("id") Long id); @PostMapping("/dept/update") public boolean updateDept(@RequestParam("dept") Dept dept);
}`},{header:"2. 创建 ServiceFallbackFactory 类",slug:"_2-创建-servicefallbackfactory-类",content:`package com.ths.api.service; import com.ths.api.pojo.Dept;
import feign.hystrix.FallbackFactory;
import org.springframework.stereotype.Component; import java.util.List; @Component
public class ServiceFallbackFactory implements FallbackFactory{ @Override public FeignSupport create(Throwable throwable) { return new FeignSupport() { @Override public Dept queryById(Long id) { // return new Dept(); 这和服务熔断一样的思路 return new Dept() .setDeptno(id) .setDname("该id不存在，客户端服务降级，现在关闭当前服务！") .setDb_source("no this database in MySQL"); } @Override public List<Dept> queryAll() { return null; } @Override public boolean addDept(Dept dept) { return false; } @Override public boolean deleteDept(Long id) { return false; } @Override public boolean updateDept(Dept dept) { return false; } }; }
}`},{header:"3. 修改 8088 客户端的配置文件",slug:"_3-修改-8088-客户端的配置文件",content:`server: port: 8808
spring: application: name: project-consumer-8808
# Eureka
eureka: client: # 不注册自己 register-with-eureka: false # 从注册中心获取服务 service-url: defaultZone: http://eureka7002.com:7002/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/
# 开启Feign客户端服务降级
feign: hystrix: enabled: true`},{header:"4. 修改 8808 客户端的启动类(正常不需要，因为扫描包已经放开)",slug:"_4-修改-8808-客户端的启动类-正常不需要-因为扫描包已经放开",content:`注意：这块又要把扫描包放开，否则扫描不到 ServiceFallbackFactory 这个类 package com.ths.consumer; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan; // 确保扫描到所有相关包
@SpringBootApplication
// 服务注册与发现
@EnableEurekaClient
// 扫描包，让api模块中的所有接口都生效
@EnableFeignClients(basePackages = {"com.ths.api.service"})
//@ComponentScan("com.ths.api.service")
@ComponentScan("com.ths")
public class FeignConsumer_8808 { public static void main(String[] args) { SpringApplication.run(FeignConsumer_8808.class, args); }
}`}]},{path:"/admin/Java/SpringCloud/HyStrix%E6%9C%8D%E5%8A%A1%E9%99%90%E6%B5%81.html",title:"",pathLocale:"/",contents:[{header:"HyStrix 服务限流",slug:"hystrix-服务限流",content:""}]},{path:"/admin/Java/SpringCloud/Ribbon%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html",title:"",pathLocale:"/",contents:[{header:"Ribbon 负载均衡",slug:"ribbon-负载均衡",content:"是基于 Netflix Ribbon 实现的客户端负载均衡工具"},{header:"负载均衡",slug:"负载均衡",content:"将用户的请求分摊到多个服务上，从而达到系统的 HA(高可用性)，负载均衡有很多方式，包括轮询、随机、加权(权重)、IP 哈希等，也可以自定义。常见的负载均衡方式有：Nginx、LVS 等。"},{header:"负载均衡的好处",slug:"负载均衡的好处",content:"举例：A 早上用网，100M 的网速，100 元/月；B 和 C 也类似，B 中午，C 晚上；负载均衡可以将 A、B、C 的网速叠加，达到 300M，节省了成本。然后在用户使用的时候，让用户每个月还是 100 元，但是可以享受 300M 的网速。"}]},{path:"/admin/Java/SpringCloud/Spring-cloud%E4%BB%8B%E7%BB%8D.html",title:"",pathLocale:"/",contents:[{header:"Spring-cloud 介绍",slug:"spring-cloud-介绍",content:""},{header:"什么是 Spring Cloud",slug:"什么是-spring-cloud",content:"Spring Cloud 是一系列框架的有序集合。它利用 Spring Boot 的开发便利性巧妙地简化了分布式系统基础设施的开发，如服务发现注册、配置中心、消息总线、负载均衡、断路器、数据监控等，都可以用 Spring Boot 的开发风格做到一键启动和部署。Spring Cloud 并没有重复制造轮子，它只是将目前各家公司开发的比较成熟、经得起实际考验的服务框架组合起来，通过 Spring Boot 风格进行再封装屏蔽掉了复杂的配置和实现原理，最终给开发者留出了一套简单易懂、易部署和易维护的分布式系统开发工具包。"},{header:"Spring Cloud 的主要功能",slug:"spring-cloud-的主要功能",content:`服务发现与注册
配置管理
消息管理
断路器
负载均衡
数据监控
分布式会话
分布式锁
分布式事务
分布式消息队列
分布式搜索引擎
分布式缓存
分布式文件系统
分布式任务调度
分布式服务网关
分布式服务跟踪
分布式服务监控
分布式服务治理
分布式服务安全
分布式服务日志`}]},{path:"/admin/Java/SpringCloud/Zuul%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84%E8%AF%A6%E8%A7%A3.html",title:"",pathLocale:"/",contents:[{header:"Zuul 访问路径详解",slug:"zuul-访问路径详解",content:"都是根据一步步的配置进行图例展示 Zuul 注册到 Eureka 服务端访问路径 走路由网关访问路径 走路由网关访问路径(代理路径，避免爆露微服务名) 走路由网关访问路径(多服务统一前缀)"}]},{path:"/admin/Java/SpringCloud/Zuul%E8%B7%AF%E7%94%B1%E7%BD%91%E5%85%B3.html",title:"",pathLocale:"/",contents:[{header:"Zuul",slug:"zuul",content:`Zuul 包含了对请求的路由和过滤两个最主要的功能：
其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul 和 Eureka 进行整合，将 Zuul 自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得其他微服务的消息，也即以后的访问微服务都是通过 Zuul 跳转后获得。 注意：Zuul 服务最终还是会注册进 Eureka
提供：代理+路由+过滤三大功能！`},{header:"修改本地域名映射",slug:"修改本地域名映射",content:`# 修改 C:\\Windows\\System32\\drivers\\etc\\hosts
127.0.0.1 www.thsstudy.com`},{header:"项目搭建",slug:"项目搭建",content:""},{header:"1. 依赖",slug:"_1-依赖",content:`<!--Eureka-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-eureka</artifactId> <version>1.4.6.RELEASE</version>
</dependency>
<!--Zuul-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-zuul</artifactId> <version>1.4.6.RELEASE</version>
</dependency>`},{header:"2. 配置",slug:"_2-配置",content:`server: port: 9527
spring: application: name: project-zuul
eureka: client: service-url: defaultZone: http://eureka7001.com:7001/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/ instance: instance-id: zuul-9527 prefer-ip-address: true
info: app.name: project-zuul app.description: project-zuul company.name: ths
# 配置Zuul路由代理
zuul: routes: # 配置路由(原来访问的路径的name) myprovider.serviceId: project-provider # 配置路由(新路径，用provider来替代) myprovider.path: /provider/** # 控制走代理路径，原路径不能访问了，只能走路由网关 # ignored-services: project-provider # *：通配符，所有的微服务都必须走代理 ignored-services: "*" # 统一前缀(/ths/provider，一般这要不要都行) prefix: /ths # 如果把port改成80，访问时端口就可以不要了`},{header:"3. 启动类",slug:"_3-启动类",content:`package com.ths.zuul; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy; @SpringBootApplication
@EnableZuulProxy // 开启Zuul服务代理
public class ZuulApplication_9527 { public static void main(String[] args) { SpringApplication.run(ZuulApplication_9527.class, args); }
}`}]},{path:"/admin/Java/SpringCloud/%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BF%9E%E6%8E%A5%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AE%BF%E9%97%AE%E8%BF%9C%E7%A8%8B.html",title:"",pathLocale:"/",contents:[{header:"客户端连接服务端访问远程",slug:"客户端连接服务端访问远程",content:""},{header:"1. 配置设置(设置读取文件的相关信息)",slug:"_1-配置设置-设置读取文件的相关信息",content:`# bootstrap.yml文件 # 系统级别的配置(比application.yml级别高)
spring: cloud: config: # 从gitee上读取的文件名(不要后缀) name: client # 使用读取的文件中的哪个环境 profile: dev # 读取服务端的地址 uri: http://localhost:3344 # 从哪个分支上获取 label: master`},{header:"2. 启动类",slug:"_2-启动类",content:`package com.ths.client; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication; @SpringBootApplication
// 启动后访问的真实端口不是3355，而是远程文件中的8201
// http://localhost:8201/getConfig
public class ConfigClient_3355 { public static void main(String[] args) { SpringApplication.run(ConfigClient_3355.class, args); }
}`},{header:"3. 测试接口",slug:"_3-测试接口",content:`package com.ths.client.controller; import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; @RestController
public class GetConfigServer { @Value("\${spring.application.name}") private String applicationName; @Value("\${eureka.client.serviceUrl.defaultZone}") private String eurekaServer; @Value("\${server.port}") private String port; @RequestMapping("/getConfig") public String getConfig() { return "applicationName: " + applicationName + "\\n" + "eurekaServer: " + eurekaServer + "\\n" + "port: " + port; }
}`}]},{path:"/admin/Java/SpringCloud/%E5%B0%86%E6%9C%8D%E5%8A%A1%E6%B3%A8%E5%86%8C%E5%88%B0%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83.html",title:"",pathLocale:"/",contents:[{header:"将服务注册到注册中心",slug:"将服务注册到注册中心",content:""},{header:"1. 导入依赖",slug:"_1-导入依赖",content:`<!--导入Eureka-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-eureka</artifactId> <version>1.4.6.RELEASE</version>
</dependency>
<!--添加监控信息-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>`},{header:"2. 编写配置文件",slug:"_2-编写配置文件",content:`server: port: 8001
# mybatis配置
mybatis: # 配置别名：实体类包名路径(api模块) type-aliases-package: com.ths.api.pojo # 配置mapper接口的位置(当前模块) mapper-locations: classpath:mybatis/mapper/*.xml # 配置全局配置文件(当前模块) config-location: classpath:mybatis/mybatis-config.xml
# spring配置
spring: application: name: project-provider-8001 datasource: type: com.alibaba.druid.pool.DruidDataSource driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/db01?useUnicode=true &characterEncoding=utf-8&serverTimezone=UTC username: root password: 123456
# Eureka配置
eureka: client: serviceUrl: # 将本服务注册到哪个注册中心 defaultZone: http://localhost:7001/eureka/ # 修改服务在注册中心的名字 instance: instance-id: project-provider-8001
# 配置监控信息(访问地址: http://localhost:8001/actuator/info)
info: app.name: project-provider-8001 app.description: project-provider-8001 company.name: ths`},{header:"3. 开启这个功能(@EnableXXX)",slug:"_3-开启这个功能-enablexxx",content:`package com.ths.provider; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient; @SpringBootApplication
// 启用Eureka客户端,自动将本服务注册到Eureka中
@EnableEurekaClient
public class Provider_8001 { public static void main(String[] args) { SpringApplication.run(Provider_8001.class, args); }
}`}]},{path:"/admin/Java/SpringCloud/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E4%BB%8B%E7%BB%8D.html",title:"",pathLocale:"/",contents:[{header:"微服务架构介绍",slug:"微服务架构介绍",content:""},{header:"微服务架构",slug:"微服务架构",content:""},{header:"微服务架构四大核心问题",slug:"微服务架构四大核心问题",content:`服务如何拆分？(Api Gateway)
服务之间如何通信？(Http || RPC)
服务如何治理？(注册中心)
数据一致性如何保证？(熔断机制)`},{header:"三大解决方案",slug:"三大解决方案",content:`方案
路由网关
通信
服务中心
熔断机制
优缺点 SpringCloud + NetFlix
Zuul
HTTP
Eureka
Hystrix
一站式解决，2018 年 12 月停更了 Dubbo + Zookeeper
本身没有，找第三方或自己实现
RPC
Zookeeper
常用第三方 Hystrix
PRC 很厉害，专门做这个的 SpringCloudAlibaba
Gateway
HTTP
Nacos
Sentinel
比方案 1 更简便`},{header:"微服务架构技术栈",slug:"微服务架构技术栈",content:`微服务条目
落地技术 服务开发
SpringBoot,Spring,SpringMVC 服务配置与管理
Netflix 公司的 Archaius、阿里的 Diamond 等 服务注册与发现
Eureka、Consul、Zookeeper 等 服务调用
Rest、RPC、gRPC 服务熔断器
Hystrix、Envoy 等 负载均衡
Ribbon、Nginx 等 服务接口调用(客户端调用服务的简化工具)
Feign 等 消息队列
Kafka、RabbitMQ、ActiveMQ 等 服务配置中心管理
SpringCloudConfig、Chef 等 服务路由(API 网关)
Zuul 等 服务监控
Zabbix、Nagios、Metrics、Specatator 等 全链路追踪
Zipkin、Brave、Dapper 等 服务部署
Docker、OpenStack、Kubernetes 等 数据流操作开发包
SpringCloud Stream(封装与 Redis,Rabbit,Kafka 等发送接收消息) 事件消息总线
SpringCloud Bus`},{header:"Spring Boot 和 Spring Cloud 版本关系",slug:"spring-boot-和-spring-cloud-版本关系",content:`Spring Boot
Spring Cloud
关系 1.2.x
Angel
兼容 Spring Boot 1.2.x 1.3.x
Brixton
兼容 Spring Boot 1.3.x, 也兼容 Spring Boot 1.4.x 1.4.x
Camden
兼容 Spring Boot 1.4.x, 也兼容 Spring Boot 1.5.x 1.5.x
Dalston
兼容 Spring Boot 1.5.x, 不兼容 Spring Boot 2.0.x 1.5.x
Edgware
兼容 Spring Boot 1.5.x, 不兼容 Spring Boot 2.0.x 2.0.x
Finchley
兼容 Spring Boot 2.0.x, 不兼容 Spring Boot 1.5.x 2.1.x
Greenwich`},{header:"实际开发版本选择",slug:"实际开发版本选择",content:`spring-boot-starter-parent
spring-boot-starter-parent
spring-cloud-dependencies
spring-cloud-dependencies 版本号
发布日期
版本号
发布日期 1.5.2.RELEASE
2017 年 3 月
Dalston.RC1
2017 年未知月 1.5.9.RELEASE
2017 年 11 月
Edgware.RELEASE
2017 年 11 月 1.5.16.RELEASE
2018 年 9 月
Edgware.SR5
2018 年 10 月 1.5.20.RELEASE
2019 年 4 月
Edgware.SR5
2018 年 10 月 2.0.2.RELEASE
2018 年 5 月
Finchley.BUILD-SNAPSHOT
2018 年未知月 2.0.6.RELEASE
2018 年 10 月
Finchley.SR2
2018 年 10 月 2.1.4.RELEASE
2019 年 4 月
Greenwich.SR1
2019 年 3 月 2.1.5.RELEASE
2019 年 5 月
Greenwich.SR2
2019 年 5 月 2.2.0.RELEASE
2019 年 10 月
Hoxton.SR1
2019 年 10 月 2.2.1.RELEASE
2019 年 11 月
Hoxton.SR2
2019 年 11 月 2.2.2.RELEASE
2019 年 12 月
Hoxton.SR3
2019 年 12 月`}]},{path:"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E7%86%94%E6%96%AD%E5%92%8C%E6%9C%8D%E5%8A%A1%E9%99%8D%E7%BA%A7.html",title:"",pathLocale:"/",contents:[{header:"服务熔断和服务降级",slug:"服务熔断和服务降级",content:""},{header:"区别",slug:"区别",content:`服务熔断
服务降级 服务端
客户端 针对具体服务
针对整体`},{header:"服务熔断",slug:"服务熔断",content:"熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，恢复调用链路。在 SpringCloud 中熔断机制通过 Hystrix 实现，Hystrix 会监控微服务间调用的状况，当失败的调用到一定阈值，缺省是 5 秒内 20 次调用失败就会启动熔断机制。熔断机制的注解是@HystrixCommand。"},{header:"服务降级",slug:"服务降级",content:"服务降级是从整个系统的负荷情况出发和考虑的，对某些负荷会比较高的情况，为了预防系统整体负荷过高，而提出的一种降低服务质量的策略，即通过提供一些降级服务从而保障核心服务正常运行。"}]},{path:"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%BF%9E%E6%8E%A5git%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"SpringCloudConfig-服务端配置",slug:"springcloudconfig-服务端配置",content:"什么是 SpringCloudConfig：SpringCloudConfig 是 SpringCloud 中的一个组件，它主要用于实现分布式配置中心，将各个服务的配置文件集中管理，实现配置的动态刷新。当然将他放到 gitee 上也是可以的，所以这里我们使用 SpringCloudConfig+gitee 实现配置的动态刷新。"},{header:"SpringCloudConfig + gitee 实现服务端(project-config-server-3344)",slug:"springcloudconfig-gitee-实现服务端-project-config-server-3344",content:""},{header:"1. 依赖",slug:"_1-依赖",content:`<!--springboot-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<!--Config-Server-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-config-server</artifactId> <version>2.2.0.RELEASE</version>
</dependency>`},{header:"2. 配置文件",slug:"_2-配置文件",content:`server: port: 3344
spring: application: name: project-config-3344 # 连接远程仓库 cloud: config: server: # git仓库地址(也可以连svn) git: uri: https://gitee.com/OnionTin/springcloud-config.git`},{header:"3. 启动类",slug:"_3-启动类",content:`package com.ths.config; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer; @SpringBootApplication
// 开启配置服务
@EnableConfigServer
public class ConfigServer_3344 { // 启动后访问地址: // 1.http://localhost:3344/application-dev.yaml // 2.http://localhost:3344/application/dev/master // 3.http://localhost:3344/master/application-dev.yaml // 当然也可以是yml或properties配置文件 // client.yml文件: // http://localhost:3344/master/client-dev.yml public static void main(String[] args) { SpringApplication.run(ConfigServer_3344.class,args); }
}`},{header:"图例",slug:"图例",content:""}]},{path:"/admin/Java/SpringCloud/%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4.html",title:"",pathLocale:"/",contents:[{header:"服务集群",slug:"服务集群",content:"什么是服务集群？比如有三个微服务，他们之间互相绑定，形成了一个集群，他们之间可以互相调用，也可以互相访问。好处是当其中一个服务挂掉了，其他的服务还可以继续运行。用户可以通过其他服务获取信息，不影响用户体验。"},{header:"修改本地域名映射",slug:"修改本地域名映射",content:`C 盘/windows/system32/drivers/etc/hosts 文件，添加如下映射；此时在本地访问 eureka7001.com，eureka7002.com，eureka7003.com 都会映射到 127.0.0.1，即本机。 127.0.0.1 eureka7001.com
127.0.0.1 eureka7002.com
127.0.0.1 eureka7003.com`},{header:"集群服务搭建",slug:"集群服务搭建",content:""},{header:"1. 在父项目(ths-spring-cloud)中再创建两个模块，并导入依赖",slug:"_1-在父项目-ths-spring-cloud-中再创建两个模块-并导入依赖",content:`<dependencies> <!--Eureka Server 注册中心--> <dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-eureka-server</artifactId> <version>1.4.6.RELEASE</version> </dependency> <!--热部署--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-devtools</artifactId> </dependency>
</dependencies>`},{header:"2. 将 project-eureka-7001 模块中的配置文件复制到 7002 和 7003 模块中，并修改配置文件",slug:"_2-将-project-eureka-7001-模块中的配置文件复制到-7002-和-7003-模块中-并修改配置文件",content:""},{header:"修改 7001",slug:"修改-7001",content:"server: port: 7001\n# Eureka 配置\neureka: instance: # 在Eureka注册中心的名字 # hostname: localhost 修改了本地域名映射 hostname: eureka7001.com client: # 是否向Eureka注册中心注册自己 register-with-eureka: false # 是否从Eureka注册中心获取服务列表(false: 因为当前就是注册中心,即服务端) fetch-registry: false # Eureka 监控中心地址 serviceUrl: # 目前取到的地址就是 https://localhost:7001/eureka/ # 这是单机，即单个服务端，所以默认Zone就是当前服务 # defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/ # 集群(除了本机，还要关联其他服务) defaultZone: http://eureka7002.com:7002/eureka/, http://eureka7003.com:7003/eureka/"},{header:"修改 7002",slug:"修改-7002",content:`server: port: 7002
eureka: instance: hostname: eureka7002.com client: register-with-eureka: false fetch-registry: false serviceUrl: # 集群互相关联 defaultZone: http://eureka7001.com:7001/eureka/, http://eureka7003.com:7003/eureka/`},{header:"修改 7003",slug:"修改-7003",content:`server: port: 7003
eureka: instance: hostname: eureka7003.com client: register-with-eureka: false fetch-registry: false serviceUrl: # 集群互相关联 defaultZone: http://eureka7002.com:7002/eureka/, http://eureka7001.com:7001/eureka/`},{header:"3. 将服务注册到集群",slug:"_3-将服务注册到集群",content:"原本服务只需要注册到单机，现在集群环境，当然是需要发布到集群中，即多个注册中心。"},{header:"修改 project-provider-dept-8001 模块的配置文件",slug:"修改-project-provider-dept-8001-模块的配置文件",content:`server: port: 8001
# mybatis配置
mybatis: # 配置别名：实体类包名路径(api模块) type-aliases-package: com.ths.api.pojo # 配置mapper接口的位置(当前模块) mapper-locations: classpath:mybatis/mapper/*.xml # 配置全局配置文件(当前模块) config-location: classpath:mybatis/mybatis-config.xml
# spring配置
spring: application: name: project-provider-8001 datasource: type: com.alibaba.druid.pool.DruidDataSource driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/db01?useUnicode=true &characterEncoding=utf-8&serverTimezone=UTC username: root password: 123456
# Eureka配置
eureka: client: serviceUrl: # 将本服务注册到哪个注册中心(单机) # defaultZone: http://localhost:7001/eureka/ # 集群 defaultZone: http://eureka7001.com:7001/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/ # 修改服务在注册中心的名字 instance: instance-id: project-provider-8001-id
# 配置监控信息(访问地址: http://localhost:8001/actuator/info)
info: app.name: project-provider-8001 app.description: project-provider-8001 company.name: ths`}]},{path:"/admin/Java/SpringCloud/%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%AE%97%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"自定义负载均衡算法",slug:"自定义负载均衡算法",content:""},{header:"IRule 中的负载均衡策略",slug:"irule-中的负载均衡策略",content:`类名
描述 RandomRule
随机 RoundRobinRule
轮询(默认) RetryRule
重试 AvailabilityFilteringRule
过滤崩溃或者叫跳闸的服务，剩下的轮询 WeightedResponseTimeRule
响应时间权重 BestAvailableRule
最小并发 ZoneAvoidanceRule
区域权重 RandomWeightedRule
随机权重 RetryRule
重试规则`},{header:"自定义策略",slug:"自定义策略",content:""},{header:"1. 在启动类中添加@RibbonClient 注解，并指定自定义策略",slug:"_1-在启动类中添加-ribbonclient-注解-并指定自定义策略",content:`package com.ths.consumer; import com.ths.myrule.MyRestTemplateClientRule;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.ribbon.RibbonClient; // 确保扫描到所有相关包
@SpringBootApplication
// 服务注册与发现
@EnableEurekaClient
// 配置自定义负载均衡策略，这样就会覆盖掉原来的策略
@RibbonClient(name="PROJECT-PROVIDER",configuration=MyRestTemplateClientRule.class)
public class Consumer_80 { public static void main(String[] args) { SpringApplication.run(Consumer_80.class, args); }
}`},{header:"2. 在配置类中添加自定义策略",slug:"_2-在配置类中添加自定义策略",content:`package com.ths.myrule; import com.netflix.loadbalancer.IRule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration; // 自定义服务器负载均衡策略
@Configuration
public class MyRestTemplateClientRule { @Bean public IRule myRandomRule() { // 返回的是自定义的，可以返回其他的方法就按照其他的策略 return new MyRandomRule(); }
}`},{header:"3. 实现 IRule 接口(基于源码修改)",slug:"_3-实现-irule-接口-基于源码修改",content:`package com.ths.myrule; import com.netflix.client.config.IClientConfig;
import com.netflix.loadbalancer.AbstractLoadBalancerRule;
import com.netflix.loadbalancer.ILoadBalancer;
import com.netflix.loadbalancer.Server; import java.util.List;
import java.util.concurrent.ThreadLocalRandom; public class MyRandomRule extends AbstractLoadBalancerRule { public Server choose(ILoadBalancer lb, Object key) { if (lb == null) { return null; } Server server = null; while (server == null) { if (Thread.interrupted()) { // 线程终端 return null; } List<Server> upList = lb.getReachableServers(); // 获得可用服务器列表 List<Server> allList = lb.getAllServers(); // 获得所有服务器列表 int serverCount = allList.size(); if (serverCount == 0) { return null; } int index = chooseRandomInt(serverCount); // 生成随机数 server = upList.get(index); // 从活着的服务中获取服务器 if (server == null) { Thread.yield(); continue; } if (server.isAlive()) { return (server); } // Shouldn't actually happen.. but must be transient or a bug. server = null; Thread.yield(); } return server; } protected int chooseRandomInt(int serverCount) { return ThreadLocalRandom.current().nextInt(serverCount); } @Override public Server choose(Object key) { return choose(getLoadBalancer(), key); } @Override public void initWithNiwsConfig(IClientConfig clientConfig) { // TODO Auto-generated method stub }
}`}]},{path:"/admin/Java/SpringCloud/%E8%8E%B7%E5%8F%96%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%E4%B8%AD%E6%9C%8D%E5%8A%A1%E4%BF%A1%E6%81%AF.html",title:"",pathLocale:"/",contents:[{header:"获取注册中心中服务信息",slug:"获取注册中心中服务信息",content:"联合办公，需要暴漏自己的服务信息，以及获取其他服务的信息；也叫服务注册与发现。"},{header:"1. 依赖",slug:"_1-依赖",content:`<!--导入Eureka--> <dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-eureka</artifactId> <version>1.4.6.RELEASE</version> </dependency>
</dependencies>`},{header:"2. 获取方法",slug:"_2-获取方法",content:`package com.ths.provider.controller; import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController; import java.util.List; // 获取注册中心的微服务清单信息
@RestController
public class GetInstance { private final DiscoveryClient client; public GetInstance(DiscoveryClient client) { this.client = client; } @GetMapping("/discovery") public Object discovery() { // 获取微服务清单列表 List<String> services = client.getServices(); // 根据微服务id,获得某一个具体的微服务信息 List<ServiceInstance> instances = client.getInstances("project-provider-8001-id"); for (ServiceInstance instance : instances){ System.out.println(instance.getHost()); System.out.println(instance.getPort()); System.out.println(instance.getUri()); System.out.println(instance.getServiceId()); } return this.client; }
}`},{header:"3. 启动类",slug:"_3-启动类",content:`package com.ths.provider; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient; @SpringBootApplication
// 启用Eureka客户端,自动将本服务注册到Eureka中
@EnableEurekaClient
// 服务发现(让其他的微服务发现自己,并得到自己的服务信息)
@EnableDiscoveryClient
public class Provider_8001 { public static void main(String[] args) { SpringApplication.run(Provider_8001.class, args); }
}`}]},{path:"/admin/Java/SpringCloud/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%AE%9E%E7%8E%B0.html",title:"",pathLocale:"/",contents:[{header:"负载均衡实现",slug:"负载均衡实现",content:""},{header:"1. 创建模块",slug:"_1-创建模块",content:`分别创建两个模块 project-provider_8002 和 8003，并修改这三个模块的配置文件(就是修改端口和注册中心地址以及名称还有数据库练级等配置信息) # 8001项目
server: port: 8001
# mybatis配置
mybatis: # 配置别名：实体类包名路径(api模块) type-aliases-package: com.ths.api.pojo # 配置mapper接口的位置(当前模块) mapper-locations: classpath:mybatis/mapper/*.xml # 配置全局配置文件(当前模块) config-location: classpath:mybatis/mybatis-config.xml
# spring配置
spring: application: # 因为配置负载均衡，所以多个服务的名字要一致 # name: project-provider-8001 name: project-provider datasource: type: com.alibaba.druid.pool.DruidDataSource driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/db01?useUnicode =true&characterEncoding=utf-8&serverTimezone=UTC username: root password: 123456
# Eureka配置
eureka: client: serviceUrl: # 将本服务注册到哪个注册中心(单机) # defaultZone: http://localhost:7001/eureka/ # 集群 defaultZone: http://eureka7001.com:7001/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/ # 修改服务在注册中心的名字 instance: instance-id: project-provider-8001-id
# 配置监控信息(访问地址: http://localhost:8001/actuator/info)
info: app.name: project-provider-8001 app.description: project-provider-8001 company.name: th
# 8002项目
server: port: 8002
# mybatis配置
mybatis: # 配置别名：实体类包名路径(api模块) type-aliases-package: com.ths.api.pojo # 配置mapper接口的位置(当前模块) mapper-locations: classpath:mybatis/mapper/*.xml # 配置全局配置文件(当前模块) config-location: classpath:mybatis/mybatis-config.xml
# spring配置
spring: application: # 因为配置负载均衡，所以多个服务的名字要一致 # name: project-provider-8002 name: project-provider datasource: type: com.alibaba.druid.pool.DruidDataSource driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/db02? useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC username: root password: 123456
# Eureka配置
eureka: client: serviceUrl: # 将本服务注册到哪个注册中心(单机) # defaultZone: http://localhost:7001/eureka/ # 集群 defaultZone: http://eureka7001.com:7001/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/ # 修改服务在注册中心的名字 instance: instance-id: project-provider-8002-id
# 配置监控信息(访问地址: http://localhost:8001/actuator/info)
info: app.name: project-provider-8002 app.description: project-provider-8002 company.name: ths`},{header:"2. 配置负载均衡",slug:"_2-配置负载均衡",content:""},{header:"1.project-consumer-80 项目导入依赖",slug:"_1-project-consumer-80-项目导入依赖",content:`<!--Ribbon：客户端实现负载均衡-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-ribbon</artifactId> <version>1.4.6.RELEASE</version>
</dependency>
<!--Eureka：需要发现-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-eureka</artifactId> <version>1.4.6.RELEASE</version>
</dependency>`},{header:"2. 修改配置文件",slug:"_2-修改配置文件",content:`server: port: 808
spring: application: name: project-consumer-80
# Eureka
eureka: client: # 不注册自己 register-with-eureka: false # 从注册中心获取服务 service-url: defaultZone: http://eureka7002.com:7002/eureka/, http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/`},{header:"3. 配置实现负载均衡的 RestTemplate",slug:"_3-配置实现负载均衡的-resttemplate",content:`package com.ths.consumer.config; import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate; @Configuration // 将方法返回的RestTemplate注册到Spring中
public class BeanConfig { @Bean // 将RestTemplate交给Spring托管 @LoadBalanced // 配置实现负载均衡的RestTemplate public RestTemplate getRestTemplate() { return new RestTemplate(); }
}`},{header:"4. 修改调用服务的方法",slug:"_4-修改调用服务的方法",content:`package com.ths.consumer.controller; import com.ths.api.pojo.Dept;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate; import java.util.List; @RestController // 只能用@RestController，不能用@Controller
@RequestMapping("/consumer/dept")
public class GetDeptController { // 消费者不应该有service层了，而是负责获取数据并在页面上渲染即可 // xxxTemplate 是SpringCloud提供的一个模板，用来调用服务 // RestTemplate：Spring中默认没有注册，需要自己注册(BeanConfig) // RestTemplate：Restful风格服务模板，从提供者模块中获取需要的内容 // RestTemplate：简单粗暴无脑，直接调用即可 // 服务端请求的url前缀(单机) // private static final String REST_URL_PREFIX = "http://localhost:8001"; // 负载均衡：集群(通过服务名访问) // 注意：多个服务的名称要统一为这个名称 private static final String REST_URL_PREFIX = "http://PROJECT-PROVIDER"; // 注册后就可以使用了 private final RestTemplate restTemplate; public GetDeptController(RestTemplate restTemplate) { this.restTemplate = restTemplate; } @GetMapping("/list") public List<Dept> queryAll() { return restTemplate.getForObject(REST_URL_PREFIX + "/dept/list", List.class); }
}`},{header:"5. 启动类",slug:"_5-启动类",content:`package com.ths.consumer; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient; @SpringBootApplication
// 服务注册与发现
@EnableEurekaClient
public class Consumer_80 { public static void main(String[] args) { SpringApplication.run(Consumer_80.class, args); }
}
运行后访问地址，这个接口返回的数据每次都不一样，实现了 Ribbon 的轮询机制。`}]},{path:"/admin/Java/SpringCloud/%E8%BF%9C%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%B5%8B%E8%AF%95.html",title:"",pathLocale:"/",contents:[{header:"远程配置测试",slug:"远程配置测试",content:"其实 SpringCloudConfig 就是通过服务端去连接远程仓库，并提供可以访问的服务，客户端从服务端获取想要的配置信息并使用。这样就把项目相关的配置，全都放到了远程仓库中，实现了配置的集中管理(分布式项目集群环境下，配置文件的管理尤为重要，所以集中管理配置文件是很有必要的)。当我们修改了远程仓库中的配置后，客户端重新启动就会更换到新的配置。"},{header:"将 7001 服务和 8001 客户端修改成远程仓库配置",slug:"将-7001-服务和-8001-客户端修改成远程仓库配置",content:""},{header:"1.在父项目中创建两个子模块(project-config-eureka-7001 和 project-config-provider-8001)",slug:"_1-在父项目中创建两个子模块-project-config-eureka-7001-和-project-config-provider-8001",content:""},{header:"2.将 7001 服务和 8001 客户端分别复制到这两个子模块中",slug:"_2-将-7001-服务和-8001-客户端分别复制到这两个子模块中",content:""},{header:"3.修改 7001 服务和 8001 客户端的依赖，在原有基础上都加上下边这段依赖就行了",slug:"_3-修改-7001-服务和-8001-客户端的依赖-在原有基础上都加上下边这段依赖就行了",content:`<!--springcloud-config：客户端-->
<dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-starter-config</artifactId>
</dependency>`},{header:"4.分别在 7001 服务和 8001 客户端中创建 bootstrap.yml 文件，并添加如下配置",slug:"_4-分别在-7001-服务和-8001-客户端中创建-bootstrap-yml-文件-并添加如下配置",content:`# 系统级别的配置(比application.yml级别高)
spring: cloud: config: # 从gitee上读取的文件名(不要后缀) name: config-7001 # 使用读取的文件中的哪个环境 profile: dev uri: http://localhost:3344 # 从哪个分支上获取 label: master # 系统级别的配置(比application.yml级别高)
spring: cloud: config: # 从gitee上读取的文件名(不要后缀) name: config-8001 # 使用读取的文件中的哪个环境 profile: dev uri: http://localhost:3344 # 从哪个分支上获取 label: master
# 本地自测地址: http://localhost:3344/master/config-8001-dev.yml`},{header:"5.先启动 3344，再分别启动这两个项目",slug:"_5-先启动-3344-再分别启动这两个项目",content:`启动 3344 后，启动 7001，访问本地自测地址: http://localhost:3344/master/config-7001-dev.yml 查看信息
查看到信息后，访问 localhost:7001 查看是否注册成功
注册成功后，启动 8001，访问本地自测地址: http://localhost:3344/master/config-8001-dev.yml查看信息
查看到信息后，访问 http://localhost:8001/dept/list查看数据
修改远程仓库中的配置文件，重启相关服务，查看数据是否变化。`}]},{path:"/admin/Java/SpringMvc/Controller%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"Controller 注解配置",slug:"controller-注解配置",content:`注解
说明 @Controller
控制器，被 Spring 托管，返回数据和视图(类和方法上都行) @RequestMapping
用于映射请求 URL 到控制器方法，可以指定请求方法、请求参数、请求头等 @GetMapping
映射 GET 请求 @PostMapping
映射 POST 请求 @PutMapping
映射 PUT 请求 @DeleteMapping
映射 DELETE 请求 @PathVariable
和@RequestMapping 一起使用，用于获取 URL 中的路径变量(即 url 传递的参数) @RequestParam
用于获取请求参数 @RequestHeader
用于获取请求头 @RequestBody
用于获取请求体 @ResponseBody
用于返回请求的数据，同时限制@Controller 只返回数据没有视图 @RestController
同@Controller，不用限制，他只返回数据(注意: 只能用在类上)`}]},{path:"/admin/Java/SpringMvc/GetMapping%E5%8F%82%E6%95%B0%E5%92%8C%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94.html",title:"",pathLocale:"/",contents:[{header:"GetMapping 参数和数据响应",slug:"getmapping-参数和数据响应",content:`// UserController
package com.haha.controller; import com.haha.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam; @Controller
@RequestMapping("/user")
public class UserController { // 前端参数是一个字符串 // localhost:8080/user/t1?name=xxx @GetMapping("/t1") public String test1(@RequestParam("username") String name, Model model){ // @RequestParam: // 1. 不加这个注解的话，只有参数名一致(地址栏和形参)，才能接收到e // 2. 改变请求参数的名字，@RequestParam("username") String name // 3. 前端传递的参数必须是username，是name都会报错 // 1. 接收前端参数 System.out.println("接收到前端的参数为：" + name); // 2. 将结果返回给前端，Model model.addAttribute("msg", name); // 3. 视图跳转 return "test"; } // 前端参数是一个对象 // localhost:8080/user/t2?id=xxx&name=xxx&age=xxx // 要求前端传递的参数和方法中的形参，字段都必须保持一致，否则不一致的字段会为null @GetMapping("/t2") public String test2(User user, Model model){ // 1. 接收前端参数 System.out.println("接收到前端的参数为：" + user); // User(id=12, name=null, age=18) // 2. 将结果返回给前端，Model model.addAttribute("msg", user); // 3. 视图跳转 return "test"; } /* 数据处理有3种方式: 1. ModelAndView(继承Controller常用)：存储数据的同时可以设置视图逻辑，控制展示层的跳转 2. Model(注解常用)：只适用于存储数据(最常用) 3. ModelMap：继承了LinkedMap，同时继承了LinkedMap的方法和特性 */ @GetMapping("/t3") public String test3(ModelMap map){ return "test"; }
}
// User
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @AllArgsConstructor
@Data
@NoArgsConstructor
public class User { private int id; private String name; private int age;
}`}]},{path:"/admin/Java/SpringMvc/mvc%E6%8B%A6%E6%88%AA%E5%99%A8.html",title:"",pathLocale:"/",contents:[{header:"mvc 拦截器",slug:"mvc-拦截器",content:`拦截器，和 Filter(过滤器)类似，好处是他比过滤器更强大，可以获取请求和响应的信息，并且可以修改请求和响应的信息
拦截器是 SpringMVC 的，过滤器是 Servlet 的
拦截器只能拦截 Controller 的请求，不能拦截 JSP 等其他 请求拦截器是 AOP 思想的具体应用 <!-- web.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd"> <context:component-scan base-package="com.haha.controller"/> <!-- Json乱码问题配置 --> <mvc:annotation-driven> <mvc:message-converters register-defaults="true"> <!--消息转化机制--> <bean class="org.springframework.http.converter.StringHttpMessageConverter"> <constructor-arg value="UTF-8"/> </bean> <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"> <property name="objectMapper"> <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean"> <property name="failOnEmptyBeans" value="false"/> </bean> </property> </bean> </mvc:message-converters> </mvc:annotation-driven> <mvc:default-servlet-handler/> <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver"> <property name="prefix" value="/WEB-INF/jsp/"/> <property name="suffix" value=".jsp"/> </bean> <!--拦截器配置--> <mvc:interceptors> <mvc:interceptor> <!--/**：所有请求都拦截--> <mvc:mapping path="/**"/> <!--执行文件--> <bean class="com.haha.config.MyInterceptor"/> </mvc:interceptor> </mvc:interceptors>
</beans>
// 拦截器
package com.haha.config; import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView; import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse; public class MyInterceptor implements HandlerInterceptor { @Override public boolean preHandle( HttpServletRequest request, HttpServletResponse response, Object handler ) throws Exception { // 处理前：一般都只写这就好了，比如登录验证 System.out.println("处理前"); return HandlerInterceptor.super.preHandle(request, response, handler); } @Override public void postHandle( HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView ) throws Exception { // 是否放行 返回true|false：一般用来处理拦截日志 System.out.println("是否放行"); HandlerInterceptor.super.postHandle(request, response, handler, modelAndView); } @Override public void afterCompletion( HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex ) throws Exception { // 处理后 System.out.println("处理后"); HandlerInterceptor.super.afterCompletion(request, response, handler, ex); }
} // TestController
package com.haha.controller; import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController; @RestController
public class TestController { @GetMapping("/test") public String test() { System.out.println("hello world"); // 处理前 //hello world //是否放行 //处理后 return "拦截器比filter好在他默认就是只对Controller有效"; }
}`}]},{path:"/admin/Java/SpringMvc/SpringMvc%E4%BB%8B%E7%BB%8D.html",title:"",pathLocale:"/",contents:[{header:"SpringMvc 介绍",slug:"springmvc-介绍",content:"SpringMvc 是 Spring 框架的一部分，是 Spring 的一个模块，SpringMvc 是一个基于 Java 的实现了 MVC 设计模式的请求驱动类型的轻量级 Web 框架，即使用了 Spring 的 IoC 容器，将控制器、模型对象、分派器以及处理程序对象的角色进行了分离，它为 Java EE 应用程序开发提供了一套简洁的模型。"},{header:"MVC",slug:"mvc",content:`M：模型层，提供要展示的数据，现在一般分离开来分为 Vlaue Object(dao 层)和 服务层(service 层)
V：视图层，负责数据的展示(Jsp、Html、Thymeleaf 等)
C：控制层，负责接收请求、获取表单数据、调用业务逻辑、转向指定视图层进行展示(servlet)`},{header:"SpringMvc 的优点",slug:"springmvc-的优点",content:`清晰的职责划分：SpringMvc 的设计使得每个组件都各司其职，职责明确，易于理解和维护。
灵活的配置：SpringMvc 提供了丰富的配置选项，可以根据实际需求进行灵活配置。`},{header:"Servlet 的缺点",slug:"servlet-的缺点",content:`配置繁琐：Servlet 的配置需要编写大量的 XML 配置文件，配置繁琐。
代码冗余：Servlet 的代码冗余，需要编写大量的代码来处理请求和响应。
代码耦合：Servlet 的代码耦合度高，难以进行单元测试和重构。`},{header:"SpringMvc 和 Servlet",slug:"springmvc-和-servlet",content:"SpringMvc 通过 Servlet 接收请求，通过 Servlet 的实现类 DispatcherServlet 来处理请求，DispatcherServlet 是 SpringMvc 的核心，它负责将请求分发到不同的处理器，处理器处理完请求后，DispatcherServlet 再将请求转发到不同的视图层进行展示。"},{header:"SpringMvc 的核心组件(映射-> 适配->处理->解析)",slug:"springmvc-的核心组件-映射-适配-处理-解析",content:`DispatcherServlet：前端控制器，负责接收请求、分发请求、处理响应。
HandlerMapping：处理器映射器，负责将请求映射到对应的处理器。
HandlerAdapter：处理器适配器，负责调用处理器处理请求。
Handler：处理器，负责处理请求，返回 ModelAndView 对象。
ViewResolver：视图解析器，负责将 ModelAndView 对象解析为具体的视图。
View：视图，负责展示数据。`}]},{path:"/admin/Java/SpringMvc/SpringMvc%E5%BA%94%E7%94%A8.html",title:"",pathLocale:"/",contents:[{header:"SpringMvc",slug:"springmvc",content:""},{header:"创建步骤",slug:"创建步骤",content:`servlet 配置文件(web.xml)
创建 SpringMvc 配置文件
创建 Controller 类
配置视图解析器
创建 jsp 及文件
启动查看是否 404
找到项目结构->工件->在WEB-INF下新建lib文件夹添加所有的依赖`},{header:"实践",slug:"实践",content:`<!-- web.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0"> <!--注册DispatcherServlet--> <servlet> <servlet-name>springmvc</servlet-name> <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class> <!--关联配置文件--> <init-param> <param-name>contextConfigLocation</param-name> <param-value>classpath:springmvc.xml</param-value> </init-param> <!--启动级别：1：表示在服务器启动的时候，就加载DispatcherServlet，并初始化--> <load-on-startup>1</load-on-startup> </servlet> <!-- 匹配servlet的访问路径： /：表示匹配所有请求，包括html，js，css，不包括jsp /*：表示匹配所有请求，包括jsp --> <servlet-mapping> <servlet-name>springmvc</servlet-name> <url-pattern>/</url-pattern> </servlet-mapping>
</web-app>
<!-- springmvc.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <!--配置处理器映射器和适配器：处理接收前端发送的请求--> <!--处理器映射：DisPatcherHandler根据请求地址找到对应的Handler(找Controller)--> <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/> <!--处理器适配器：按照特定的规则去调用处理器方法，也就是执行Handler(得到ViewModel)--> <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/> <!-- 配置视图解析器： 通过DisPatcherServlet将请求转发到指定的视图(返回ModelAndView并跳转到指定的页面) --> <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver" > <!--前缀--> <property name="prefix" value="/WEB-INF/jsp/"/> <!--后缀--> <property name="suffix" value=".jsp"/> </bean> <!--配置Handler：处理器映射器根据id去查找对应的Handler，交给处理器适配器去执行--> <bean id="/hello" class="com.haha.controller.HelloController"/>
</beans>
package com.haha.controller; import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller; import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse; // 需要实现Controller接口
public class HelloController implements Controller { @Override public ModelAndView handleRequest( HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse ) throws Exception { // ModelAndView：模型和视图 ModelAndView mv = new ModelAndView(); // 调用业务层 // ..... // addObject：添加一个对象，将其放在ModelAndView中 mv.addObject("msg", "HelloSpringMvc"); // setViewName：设置视图的名字，就是传递一个要跳转的视图 mv.setViewName("test");// 完整的路径其实是 /WEB-INF/jsp/test.jsp return mv; }
}
<!-- test.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head> <title>Title</title>
</head>
<body>
\${msg}
</body>
</html>`}]},{path:"/admin/Java/SpringMvc/SpringMvc%E6%B3%A8%E8%A7%A3%E5%BC%80%E5%8F%91.html",title:"",pathLocale:"/",contents:[{header:"SpringMvc 注解开发",slug:"springmvc-注解开发",content:"注解是 SpringMvc 的灵魂!"},{header:"SpringMvc 注解开发步骤",slug:"springmvc-注解开发步骤",content:`导入依赖并加上文件过滤
创建 web.xml：选择添加框架支持，选择web应用程序，默认选择最新版本 4.0
选择项目结构，再选工件，添加 lib 目录，并在 lib 目录下添加 jar 包
完善 web.xml 文件(后续不用再去修改)
添加 springmvc.xml 并完善(后续也不用再去修改)
在 WEB-INF 下创建 jsp 文件夹，并在 jsp 文件夹下创建 test.jsp 文件
创建 Controller 类，并添加注解
配置 Tomcat 工件启动项目 <!-- pom.xml中文件过滤的内容 -->
<!--资源过滤：在打包jar包时，资源文件不会被打包进去-->
<build> <resources> <resource> <directory>src/main/java</directory> <includes> <include>**/*.properties</include> <include>**/*.xml</include> </includes> <filtering>false</filtering> </resource> <resource> <directory>src/main/resources</directory> <includes> <include>**/*.properties</include> <include>**/*.xml</include> </includes> <filtering>false</filtering> </resource> </resources>
</build>`},{header:"注解开发实践",slug:"注解开发实践",content:`<!-- web.xml(不用再改) -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0"> <!--注册DispatcherServlet--> <servlet> <servlet-name>springmvc</servlet-name> <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class> <!--关联配置文件--> <init-param> <param-name>contextConfigLocation</param-name> <param-value>classpath:springmvc.xml</param-value> </init-param> <!--启动级别：1：表示在服务器启动的时候，就加载DispatcherServlet，并初始化--> <load-on-startup>1</load-on-startup> </servlet> <!-- 匹配servlet的访问路径： /：表示匹配所有请求，包括html，js，css，不包括jsp /*：表示匹配所有请求，包括jsp --> <servlet-mapping> <servlet-name>springmvc</servlet-name> <url-pattern>/</url-pattern> </servlet-mapping>
</web-app>
<!-- springmvc.xml(不用再改) -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd"> <!-- 自动扫描包，让指定包下的注解生效，有Ioc管理 --> <context:component-scan base-package="com.haha.controller"/> <!--让SpringMvc不处理静态资源(.css/.js/.html/.mp3...这些文件不能走视图解析器会出问题)--> <mvc:default-servlet-handler/> <!--mvc注解支持(自动配置HandlerMapping和HandlerAdapter)--> <mvc:annotation-driven/> <!--视图解析器--> <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver" > <property name="prefix" value="/WEB-INF/jsp/"/> <property name="suffix" value=".jsp"/> </bean>
</beans>
<!-- test.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head> <title>Title</title>
</head>
<body>
\${msg}
</body>
</html>
<!-- hello.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head> <title>Title</title>
</head>
<body>
\${msg}
</body>
</html>
// TestController
package com.haha.controller; import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping; @Controller // 这个会被视图解析器解析，相当于继承了Controller类
@RequestMapping("/mvc") // 一级访问路径
public class TestController { @RequestMapping("/test") // 二级路径，真实访问地址是：/mvc/test public String test(Model model){ model.addAttribute("msg","TestSpringMvcAnnotation!"); return "test"; // 这个返回结果会被视图解析器处理，即跳转到test.jsp } @RequestMapping("/hello") // 二级路径，真实访问地址是：/mvc/hello public String hello(Model model){ model.addAttribute("msg","HelloSpringMvcAnnotation!"); return "hello"; // 这个返回结果会被视图解析器处理，即跳转到hello.jsp }
}`}]},{path:"/admin/Java/SpringMvc/SpringMvc%E8%BD%AC%E5%8F%91%E5%92%8C%E9%87%8D%E5%AE%9A%E5%90%91.html",title:"",pathLocale:"/",contents:[{header:"SpringMvc 转发和重定向",slug:"springmvc-转发和重定向",content:"有没有视图解析器，都可以实现转发和重定向"},{header:"转发和重定向的区别",slug:"转发和重定向的区别",content:`转发：url 不会改变，服务器端行为
重定向：url 会改变，客户端行为`},{header:"转发",slug:"转发",content:`// 有视图解析器
return "success";
// 没有视图解析器
return "/success.jsp";`},{header:"重定向",slug:"重定向",content:`注意是 redirect:/，不是 redirect:
// 有视图解析器
return "redirect:/success";
// 没有视图解析器
return "redirect:/success.jsp";`}]},{path:"/admin/Java/SpringMvc/ssm%E6%95%B4%E5%90%88.html",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"代码"}]},{path:"/admin/Java/SpringMvc/%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E7%9A%84%E9%97%AE%E9%A2%98.html",title:"",pathLocale:"/",contents:[{header:"中文乱码的问题",slug:"中文乱码的问题",content:`在 web.xml 中配置过滤器就好 <!-- web.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0"> <servlet> <servlet-name>springmvc</servlet-name> <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class> <init-param> <param-name>contextConfigLocation</param-name> <param-value>classpath:springmvc.xml</param-value> </init-param> <load-on-startup>1</load-on-startup> </servlet> <servlet-mapping> <servlet-name>springmvc</servlet-name> <url-pattern>/</url-pattern> </servlet-mapping> <!--SpringMvc中文乱码过滤器(极端情况下，对get请求不友好)--> <filter> <filter-name>encodeFilter</filter-name> <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class> <init-param> <param-name>encoding</param-name> <param-value>UTF-8</param-value> </init-param> </filter> <filter-mapping> <filter-name>encodeFilter</filter-name> <url-pattern>/*</url-pattern> </filter-mapping> <!--自定义中文乱码过滤器(用来解决get请求的乱码问题)--> <!-- <filter> <filter-name>encodingFilter-get</filter-name> <filter-class>com.haha.filter.EncodeFilter</filter-class> </filter> <filter-mapping> <filter-name>encodingFilter-get</filter-name> <url-pattern>/*</url-pattern> </filter-mapping>、 --> <!-- 还有可能是Tomcat中文乱码配置问题： tomcat：安装目录\\conf\\server.xml <Connector>标签添加：URIEncoding="UTF-8" -->
</web-app>
// 自定义过滤器解决中文乱码(get)
package com.haha.filter; import javax.servlet.*;
import java.io.IOException; public class EncodeFilter implements Filter { @Override public void init(FilterConfig filterConfig) throws ServletException { } @Override public void doFilter( ServletRequest request, ServletResponse response, FilterChain chain ) throws IOException, ServletException { request.setCharacterEncoding("utf-8"); response.setCharacterEncoding("utf-8"); // chain链表，放行 chain.doFilter(request, response); } @Override public void destroy() { }
}`}]},{path:"/admin/Java/SpringMvc/%E5%9B%9E%E9%A1%BEServlet.html",title:"",pathLocale:"/",contents:[{header:"回顾 Servlet",slug:"回顾-servlet",content:""},{header:"Servlet 详细步骤",slug:"servlet-详细步骤",content:`创建一个 Maven 项目，什么模板都不用选
在 pom.xml 中添加 servlet 的依赖 <dependencies> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.12</version> </dependency> <dependency> <groupId>org.springframework</groupId> <artifactId>spring-webmvc</artifactId> <version>5.3.9</version> </dependency> <dependency> <groupId>javax.servlet</groupId> <artifactId>servlet-api</artifactId> <version>2.5</version> </dependency> <dependency> <groupId>javax.servlet.jsp</groupId> <artifactId>jsp-api</artifactId> <version>2.2</version> </dependency> <dependency> <groupId>javax.servlet</groupId> <artifactId>jstl</artifactId> <version>1.2</version> </dependency> <dependency> <groupId>org.projectlombok</groupId> <artifactId>lombok</artifactId> <version>1.18.20</version> </dependency>
</dependencies> 删除主项目的 src
在主项目中创建子模块，在子模块的 pom.xml 中添加 servlet 的依赖
在子模块的项目名上右键选择添加框架支持，选择 Web 应用程序，此时会发现多了一个 web 包
创建一个 servlet package com.haha.servlet; import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException; public class HelloSpringMvc extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { // 1.获取前端参数 String method = req.getParameter("method"); if ("add".equals(method)) { req.getSession().setAttribute("msg", "执行了add方法"); } else if ("delete".equals(method)) { req.getSession().setAttribute("msg", "执行了delete方法"); } // 2.调用业务层 // 3. 响应结果，页面跳转 // req.getRequestDispatcher("/WEB-INF/jsp/test.jsp").forward(req, resp); req.getRequestDispatcher("from.jsp").forward(req, resp); } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { doGet(req, resp); }
} 在 web 包下创建 from.jsp(其实要不要都行) <%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head> <title>Title</title>
</head>
<body> <form action="/hello" method="post"> <input type="text" name="method"> <input type="submit">
</form> </body>
</html> 在 web 包下的 WEB-INF 下再创建一个 jsp 的包
在 jsp 包下创建一个 test.jsp <%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head> <title>Title</title>
</head>
<body> \${msg} </body>
</html> 配置 servlet( WEB-INF 下 web.xml) <?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0" > <servlet> <servlet-name>hello</servlet-name> <servlet-class>com.haha.servlet.HelloSpringMvc</servlet-class> </servlet> <servlet-mapping> <servlet-name>hello</servlet-name> <url-pattern>/hello</url-pattern> </servlet-mapping> <session-config> <!--30分钟--> <session-timeout> 30 </session-timeout> </session-config> <welcome-file-list> <welcome-file>index.jsp</welcome-file> </welcome-file-list>
</web-app> 点击项目配置，弹框后点击"+"，选择 Tomcat
之后切换到"部署"，右下角有一个"fix"按钮，点击后即可
配置应用程序上下文，配置为"/"就行
启动 Tomcat`}]},{path:"/admin/Java/SpringMvc/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%B8%8B%E8%BD%BD.html",title:"",pathLocale:"/",contents:[{header:"文件上传下载",slug:"文件上传下载",content:`<!-- pom.xml -->
<dependencies> <dependency> <groupId>commons-fileupload</groupId> <artifactId>commons-fileupload</artifactId> <version>1.3.3</version> </dependency> <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>4.0.1</version> </dependency>
</dependencies>
<!-- springmvc.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd"> <context:component-scan base-package="com.haha.controller"/> <!-- Json乱码问题配置 --> <mvc:annotation-driven> <mvc:message-converters register-defaults="true"> <!--消息转化机制--> <bean class="org.springframework.http.converter.StringHttpMessageConverter"> <constructor-arg value="UTF-8"/> </bean> <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"> <property name="objectMapper"> <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean"> <property name="failOnEmptyBeans" value="false"/> </bean> </property> </bean> </mvc:message-converters> </mvc:annotation-driven> <mvc:default-servlet-handler/> <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver"> <property name="prefix" value="/WEB-INF/jsp/"/> <property name="suffix" value=".jsp"/> </bean> <!--拦截器配置--> <mvc:interceptors> <mvc:interceptor> <!--/**：所有请求都拦截--> <mvc:mapping path="/**"/> <!--执行文件--> <bean class="com.haha.config.MyInterceptor"/> </mvc:interceptor> </mvc:interceptors> <!--文件上传配置（id不能改）--> <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver"> <!--请求的编码格式，必须和jsp的pageEncoding属性一致，默认是ISO-8859-1--> <property name="defaultEncoding" value="UTF-8"/> <!--文件大小限制：单位是字节(10485760 = 10M)--> <property name="maxUploadSize" value="10485760"/> <property name="maxInMemorySize" value="40960"/> </bean>
</beans>
package com.haha.controller; import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.commons.CommonsMultipartFile; import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder; @RestController
public class FileController { // 上传方式一： // @RequestParam("file")：将name=file控件得到的文件封装成CommonsMultipartFile对象 // 批量上传文件，CommonsMultipartFile[] files，文件数组即可 @RequestMapping("/upload1") public String upload(@RequestParam("file") CommonsMultipartFile file, HttpServletRequest request) throws IOException { // 获取文件名 String filename = file.getOriginalFilename(); // 如果文件名为空，直接返回 if (filename == null || filename.trim().equals("")) { return "文件名为空"; } // 上传路径保存设置 String path = request.getServletContext().getRealPath("/upload"); // 路径不存在就创建一个 File realPath = new File(path); if (!realPath.exists()) { realPath.mkdir(); } System.out.println("上传文件保存路径:" + realPath); // 文件输入流 InputStream is = file.getInputStream(); // 文件输出流 OutputStream os = new FileOutputStream(new File(realPath, filename)); // 读写操作 int len = 0; byte[] buffer = new byte[1024]; while ((len = is.read(buffer)) != -1) { os.write(buffer, 0, len); os.flush(); } os.close(); is.close(); return "上传成功"; } // 上传方式二 @RequestMapping("/upload2") public String upload2(@RequestParam("file") CommonsMultipartFile file, HttpServletRequest request) throws IOException { // 上传路径保存设置 String path = request.getServletContext().getRealPath("/upload"); File realPath = new File(path); if (!realPath.exists()) { realPath.mkdir(); } System.out.println("上传文件保存路径:" + realPath); // 通过CommonsMultipartFile的方法直接写文件（注意这个时候） file.transferTo(new File(realPath + "/" + file.getOriginalFilename())); return "上传成功"; } // 文件下载 @RequestMapping("/download") public String download(HttpServletRequest request, HttpServletResponse response) throws Exception { // 要下载的文件地址和文件名（只需要修改这块即可，其他都固定的） String path = request.getServletContext().getRealPath("/upload"); String filename = "一码双流-功能说明书_发货通知单查询.doc"; // 设置响应头 response.reset(); response.setCharacterEncoding("UTF-8"); response.setContentType("multipart/form-data"); // 设置响应头 response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(filename, "UTF-8")); File file = new File(path, filename); // 输入流 InputStream input = new FileInputStream(file); // 输出流 OutputStream output = response.getOutputStream(); byte[] buffer = new byte[1024]; int len = 0; while ((len = input.read(buffer)) != -1) { output.write(buffer, 0, len); output.flush(); } output.close(); input.close(); return "下载成功"; }
}`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/ContextAPI.html",title:"",pathLocale:"/",contents:[{header:"Context API",slug:"context-api",content:"React 的 Context API 允许你在组件树中共享值，而不必在每个层级手动传递 props。处理跨组件通信的强大工具，它可以用来共享状态、功能或任何可变的值，而不必显式地通过组件链逐级传递。"},{header:"1. 创建 Context",slug:"_1-创建-context",content:`使用React.createContext创建一个新的 Context 对象。
const MyContext = React.createContext(defaultValue);`},{header:"2. 提供 Context 值",slug:"_2-提供-context-值",content:`使用Context.Provider组件包裹你想要提供值的组件树。
<MyContext.Provider value={/* 一些值 */}> <YourComponent />
</MyContext.Provider>`},{header:"3. 消费 Context",slug:"_3-消费-context",content:"组件可以使用Context.Consumer或useContext Hook 来消费 Context。"},{header:"使用Context.Consumer",slug:"使用context-consumer",content:`<MyContext.Consumer> {value => /* 根据context值渲染组件 */}
</MyContext.Consumer>`},{header:"使用useContext Hook",slug:"使用usecontext-hook",content:`import { useContext } from 'react'; function YourComponent() { const value = useContext(MyContext); // ...
}`},{header:"4. Context 默认值",slug:"_4-context-默认值",content:`为 Context 设置默认值，以便在没有Provider的情况下使用。
const defaultValue = { theme: 'light' };
const MyContext = React.createContext(defaultValue);`},{header:"5. 更新 Context 值",slug:"_5-更新-context-值",content:`更新Provider的value属性将导致所有消费该 Context 的组件重新渲染。
<MyContext.Provider value={{ theme: 'dark' }}> <App />
</MyContext.Provider>`},{header:"6. 使用 Context 进行状态管理",slug:"_6-使用-context-进行状态管理",content:"Context 可以用于全局状态管理，如用户身份验证、主题或偏好设置。"},{header:"7. 嵌套 Context",slug:"_7-嵌套-context",content:"可以嵌套多个 Context，以在组件树的不同部分提供不同的值。"},{header:"8. Context 与组件性能",slug:"_8-context-与组件性能",content:"过度使用 Context 或不正确的更新可能导致性能问题，因为每个消费 Context 的组件都会在 Context 值更新时重新渲染。"},{header:"9. Memoization",slug:"_9-memoization",content:"使用React.memo、useMemo或useCallback来避免不必要的渲染。"},{header:"10. Context 与 Redux",slug:"_10-context-与-redux",content:"Context 可以作为状态管理解决方案，但通常与 Redux 等库结合使用，以处理更复杂的状态逻辑。"},{header:"11. 注意事项",slug:"_11-注意事项",content:`Context 是为频繁跨组件树传递数据而设计的，而不是作为通用的状态管理解决方案。
如果 Context 值变化不频繁，但组件仍然重新渲染，考虑使用useMemo创建一个稳定的值。
在类组件中，可以使用static contextType来消费 Context。`},{header:"12. 自定义 Hook 与 Context",slug:"_12-自定义-hook-与-context",content:`创建自定义 Hook 来包装 Context 的使用方法，以便在多个组件中重用。
function useMyContext() { return useContext(MyContext);
}`},{header:"13. Context 的替代方案",slug:"_13-context-的替代方案",content:"对于简单的跨组件通信，可以考虑使用提升 state 或 props drilling 作为 Context 的替代方案。"},{header:"14. Context 的类型检查",slug:"_14-context-的类型检查",content:"使用PropTypes来验证 Context 的值。"},{header:"15. Context 与 Suspense",slug:"_15-context-与-suspense",content:"Context 可以与React.Suspense一起使用，为数据加载提供更好的错误边界和加载状态。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Context%E4%B8%8E%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%BA%93.html",title:"",pathLocale:"/",contents:[{header:"Context 与状态管理库",slug:"context-与状态管理库",content:"React Context 提供了一种在组件树中共享值的方式，而无需显式地通过每个层级传递 props。这使得它成为实现全局状态管理的理想选择，尤其是在与状态管理库结合使用时。"},{header:"React Context",slug:"react-context",content:`React Context 允许你创建一个全局的 state，通过Provider组件包裹你的应用，使得状态在整个应用中可访问。通过useContext Hook，你可以在任何组件中轻松地访问和更新这个全局状态。 创建 Context：
const MyContext = React.createContext(defaultValue); 提供 Context 值：
<MyContext.Provider value={/* 一些值 */}> <YourComponent />
</MyContext.Provider> 消费 Context：
function YourComponent() { const value = useContext(MyContext); // ...
}`},{header:"状态管理库",slug:"状态管理库",content:"虽然 React Context 可以处理一些全局状态管理的场景，但在面对更复杂的状态逻辑时，你可能需要一个更强大的状态管理库。"},{header:"Redux",slug:"redux",content:`Redux 是一个流行的状态管理库，它提供了一个中央存储，以可预测的方式管理应用的状态。它的核心概念包括单一数据源、状态是只读的以及使用纯函数来执行修改。 特点： 单一数据源：整个应用的状态存储在一个对象中。
纯函数：通过 reducers 处理状态更新。
中间件：支持如 Redux-Saga、Redux-Thunk 等中间件。`},{header:"MobX",slug:"mobx",content:`MobX 是一个轻量级的响应式状态管理库，它允许你以更直观的方式管理状态。它使用可观察的数据结构和自动追踪依赖关系。 特点： 响应式：当状态改变时，相关的组件会自动更新。
装饰器：使用装饰器来定义可观察的属性。`},{header:"Recoil",slug:"recoil",content:`Recoil 是由 Facebook 开发的一个实验性的状态管理库，它提供了原子化的状态管理方式。 特点： 原子状态：状态被分割成独立的片段。
选择器：允许你基于状态派生出新的值。`},{header:"Jotai",slug:"jotai",content:`Jotai 是一个基于 React Hooks 的轻量级状态管理库，它专注于原子状态管理和响应式编程。 特点： 原子状态：状态被分割成独立的原子。
派生状态：允许基于现有状态派生出新的值。`},{header:"结合使用",slug:"结合使用",content:`你可以将 React Context 与这些状态管理库结合使用，以实现更高效的全局状态管理。例如，你可以使用 Redux 来管理应用的状态，同时使用 Context API 来在组件树中传递这些状态。 Redux 与 Context：
<Provider store={store}> <App />
</Provider> MobX 与 Context：
<Provider {...mobxStore}> <App />
</Provider> 通过这种方式，你可以利用状态管理库的强大功能，同时享受 Context 提供的简洁性和易用性。`},{header:"最佳实践",slug:"最佳实践",content:`避免过度使用：只在需要全局访问时使用 Context。
分离逻辑：保持 Context 的简洁性，将逻辑代码抽离到单独的函数或组件中。
结合使用：根据项目需求，灵活地结合使用不同的状态管理库和 Context API。`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Fiber.html",title:"",pathLocale:"/",contents:[{header:"React Fiber",slug:"react-fiber",content:"React Fiber 是一个重写的 JavaScript 协调引擎，它是 React 核心库的一部分，用于改善 React 应用程序的性能和响应速度。"},{header:"1. 异步渲染能力",slug:"_1-异步渲染能力",content:"Fiber 使得 React 能够将渲染工作分割成小的片段，允许 React 在渲染过程中暂停、终止或重用工作，从而实现更高效的更新和更好的用户体验。"},{header:"2. 重写的目的",slug:"_2-重写的目的",content:"React Fiber 是为了解决大型应用的性能问题，特别是在移动设备上的性能问题。它允许 React 在渲染过程中优先处理高优先级的任务，从而提高应用的响应性。"},{header:"3. 工作单元",slug:"_3-工作单元",content:"在 Fiber 架构中，每个 React 组件都是一个工作单元，称为 Fiber 节点。这些节点包含了组件的类型、状态、上下文等信息。"},{header:"4. 任务的优先级",slug:"_4-任务的优先级",content:"Fiber 引入了任务优先级的概念，可以根据任务的紧急程度来决定任务的处理顺序。这使得 React 可以在用户交互过程中优先处理动画和输入响应等高优先级的任务。"},{header:"5. 时间分片",slug:"_5-时间分片",content:"Fiber 可以在不同的时间点进行工作分片，这意味着 React 可以在不影响用户操作的情况下，利用空闲时间进行渲染。"},{header:"6. 暂停和终止",slug:"_6-暂停和终止",content:"Fiber 允许 React 暂停一个组件的渲染过程，并在适当的时候恢复。这有助于提高性能，特别是在处理复杂的组件树时。"},{header:"7. 重用工作",slug:"_7-重用工作",content:"Fiber 可以重用已经完成的工作，而不是每次都从头开始。这减少了不必要的计算和渲染，提高了渲染效率。"},{header:"8. 与 Concurrent 特性的结合",slug:"_8-与-concurrent-特性的结合",content:"Fiber 是实现 React Concurrent 特性的基础，它允许 React 在渲染过程中进行任务的并发处理。"},{header:"9. 浏览器兼容性",slug:"_9-浏览器兼容性",content:"Fiber 在设计时考虑了跨浏览器的兼容性，确保了在不同浏览器上的一致性。"},{header:"10. 与 Hooks 的兼容性",slug:"_10-与-hooks-的兼容性",content:"Fiber 完全兼容 React Hooks，使得状态管理和副作用的处理更加简洁和高效。"},{header:"11. 性能调试",slug:"_11-性能调试",content:"Fiber 提供了更好的性能调试工具，如 React Developer Tools 中的 Profiler，可以帮助开发者分析和优化应用的性能。"},{header:"12. 代码分割和懒加载",slug:"_12-代码分割和懒加载",content:"Fiber 与 React 的代码分割和懒加载特性（如React.lazy和Suspense）紧密集成，使得可以按需加载代码，进一步优化应用的加载时间和性能。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Fragment.html",title:"",pathLocale:"/",contents:[{header:"React 中Fragment",slug:"react-中fragment",content:"Fragment是 React 中一种特殊的组件，它允许你将多个子元素组合在一起进行渲染，而不会在 DOM 中添加额外的节点。处理组件返回多个子元素的一种优雅方式。"},{header:"1. 基本使用",slug:"_1-基本使用",content:`Fragment可以让你在组件中返回多个元素而不需要一个包裹元素。
import { Fragment } from 'react'; function MyComponent() { return ( <Fragment> <h1>Hello</h1> <p>Welcome to my app</p> </Fragment> );
}`},{header:"2. 短语法",slug:"_2-短语法",content:`React 提供了一个短语法<>和</>来使用Fragment。
function MyComponent() { return ( <> <h1>Hello</h1> <p>Welcome to my app</p> </> );
}`},{header:"3. 键（Keys）的传递",slug:"_3-键-keys-的传递",content:`你可以在Fragment上传递一个key属性，但要注意，同一个父元素下的Fragment应该有不同的key。
function List({ items }) { return ( <Fragment> {items.map((item) => ( <Fragment key={item.id}> <li>{item.text}</li> </Fragment> ))} </Fragment> );
}`},{header:"4. 在Fragment中使用key",slug:"_4-在fragment中使用key",content:`在渲染列表时，应该将key属性放在最外层的元素上，而不是Fragment上。
function List({ items }) { return ( <ul> {items.map((item) => ( <li key={item.id}>{item.text}</li> // 正确 ))} </ul> );
}`},{header:"5. 命名Fragment",slug:"_5-命名fragment",content:`你可以给Fragment命名来增加可读性，这在调试时特别有用。
function Form({ children }) { return ( <form> <Fragment>{children}</Fragment> </form> );
}`},{header:"6. 状态和上下文",slug:"_6-状态和上下文",content:`你可以在Fragment中包含状态和上下文提供者。
function MyComponent() { const [count, setCount] = useState(0); return ( <Fragment> <CountProvider count={count} onIncrement={setCount}> <Counter /> </CountProvider> </Fragment> );
}`},{header:"7. 性能考虑",slug:"_7-性能考虑",content:"Fragment不会像普通 DOM 元素那样影响性能，但仍然应该避免过度使用，特别是在大型列表中。"},{header:"8. 与React.Children",slug:"_8-与react-children",content:"Fragment可以用来解决React.Children相关的操作，如React.Children.map。"},{header:"9. 避免过度使用",slug:"_9-避免过度使用",content:"虽然Fragment很有用，但应该避免在每个组件中过度使用，以免造成不必要的复杂性。"},{header:"10. Fragment与props",slug:"_10-fragment与props",content:`Fragment可以接收props并传递给子组件。
function Labeled({ label, children }) { return ( <Fragment> <label>{label}</label> {children} </Fragment> );
}`},{header:"11. Fragment与useMemo和useCallback",slug:"_11-fragment与usememo和usecallback",content:"Fragment可以与useMemo和useCallback一起使用，以优化性能。"},{header:"12. Fragment的可变属性",slug:"_12-fragment的可变属性",content:"Fragment可以接受任意的 props，包括key和ref，但这些 props 不会传递到 DOM。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/JSX.html",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"请你以一篇 md 稳当的格式 给我再详细的介绍一下 jsx 相关的技术点和概念 一定要全面到一个高级 react 前端开发师必会的水准 另外要详细一些 最后加上具体的案例 注意案例要加上详细的注释"},{header:"JSX",slug:"jsx",content:""},{header:"什么是 JSX",slug:"什么是-jsx",content:`JSX 是一种看起来像 XML 的 JavaScript 语法扩展。它允许你在 JavaScript 代码中写类似于 HTML 的标记。JSX 并不是新的语言，它只是在 React 中用来描述 UI 的一种语法糖。在 React 中，JSX 被用来创建 React 元素，它是 React.createElement 方法的语法糖
。`},{header:"JSX 的基本使用",slug:"jsx-的基本使用",content:`返回单个元素：在 React 组件中，一个 JSX 表达式总是返回一个 React 元素。 const element = <h1>Hello, world!</h1>; 使用表达式：你可以在 JSX 中直接使用 JavaScript 表达式，只需将它们放在大括号{}中。 const name = 'Kimi';
const element = <h1>Hello, {name}!</h1>; 条件渲染：在 JSX 中不能使用 if 语句，但可以使用三元运算符实现条件渲染。 const user = { name: 'Kimi', isLoggedIn: true };
const greeting = user.isLoggedIn ? ( <h1>Welcome back!</h1>
) : ( <h1>Please log in.</h1>
); 列表渲染：JSX 允许在模板中插入数组，数组会自动展开所有成员。 const items = ['item1', 'item2', 'item3'];
const list = ( <ul> {items.map((item) => ( <li>{item}</li> ))} </ul>
); 样式：React 推荐使用内联样式，可以使用驼峰命名法来设置样式。 const element = <div style={{ fontSize: 100, color: 'red' }}>Big Red</div>; 注释：在 JSX 中添加注释需要使用{/* */}。 const element = ( <div> {/* 这是一个注释 */} <h1>Hello, world!</h1> </div>
);`},{header:"JSX 的高级特性",slug:"jsx-的高级特性",content:`组件：在 JSX 中，大写开头的标签表示 React 组件。 function MyComponent(props) { return <div>{props.message}</div>;
}
const element = <MyComponent message="Hello JSX!" />; Props：JSX 中的属性称为 props，可以通过属性传递数据给组件。 const element = ( <MyComponent name="Kimi" age={30} />
); Children：props.children 是特殊的 prop，它包含了组件的子元素。 function MyComponent(props) { return <div>{props.children}</div>;
}
const element = ( <MyComponent> <h1>Heading</h1> </MyComponent>
); Fragment：使用<>和</>可以创建一个没有额外节点的分组。 const element = ( <> <h1>Hello</h1> <p>Welcome.</p> </>
); SpreadAttributes：可以使用...操作符传递 props 对象。 const props = { title: 'Kimi', age: 30 };
const element = <MyComponent {...props} />;`},{header:"JSX 的注意事项",slug:"jsx-的注意事项",content:`首字母大写：自定义组件的标签名必须首字母大写。 function MyComponent() { return <div />;
} 自闭合标签：像这样的标签在 JSX 中需要以自闭合形式出现。 const element = ( <img src="logo.png" alt="logo" />
); 事件命名：React 事件使用驼峰式命名，而不是全部小写。 const element = <input onChange={handleChange} />; 安全性：React 在渲染之前会对所有输入内容进行转义，以防止 XSS 攻击。 const element = <h1>{userInput}</h1>; // userInput 可能包含恶意代码 性能优化：避免在渲染方法中创建新的 JSX 元素，应该使用缓存的元素或使用 React.memo 进行优化。`},{header:"案例",slug:"案例",content:`import React from 'react';
import ReactDOM from 'react-dom'; function WelcomeDialog() { return ( <div> <h1>Hello, JSX!</h1> <p>This is a sample dialog saying welcome.</p> </div> );
} const rootElement = document.getElementById('root');
ReactDOM.render(<WelcomeDialog />, rootElement);`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Portals.html",title:"",pathLocale:"/",contents:[{header:"React 中Portals",slug:"react-中portals",content:"React 的Portals是一种将子元素渲染到父组件之外的 DOM 节点的机制。可以在需要将 UI 元素渲染在父组件之外时使用。"},{header:"1. 定义和用途",slug:"_1-定义和用途",content:"Portals允许你将子元素渲染到存在于父组件之外的 DOM 节点上。这在创建模态框、提示框、下拉菜单等需要“突破”其父级容器的样式时非常有用。"},{header:"2. 创建 Portal",slug:"_2-创建-portal",content:`使用ReactDOM.createPortal函数创建一个 Portal，它接受两个参数：要渲染的子元素和目标 DOM 节点。
import { createPortal } from 'react-dom';
// ...
return createPortal( <div>这里是要渲染的内容</div>, document.getElementById('my-node')
);`},{header:"3. 事件冒泡",slug:"_3-事件冒泡",content:"Portal 中的事件冒泡遵循 React 组件树，而不是 DOM 树。这意味着，即使 Portal 在 DOM 中的位置与 React 树不同，事件依然会向上冒泡到 React 树中的父组件。"},{header:"4. 性能考虑",slug:"_4-性能考虑",content:"Portal 可以提高性能，因为它允许你在不重新渲染父组件的情况下更新子组件。"},{header:"5. 无障碍性",slug:"_5-无障碍性",content:"使用 Portal 时，需要确保应用程序的无障碍性。例如，对于模态框，确保所有人都能够与之交互，遵循 WAI-ARIA 模态实践指南。"},{header:"6. 清理",slug:"_6-清理",content:"当使用 Portal 时，确保在组件卸载时清理 Portal，以避免内存泄漏。"},{header:"7. 集成非 React 内容",slug:"_7-集成非-react-内容",content:"Portals 也可以用来集成非 React 内容，例如在 React 应用中嵌入非 React 小部件。"},{header:"8. 与 Context 一起使用",slug:"_8-与-context-一起使用",content:"即使 Portal 渲染在不同的 DOM 节点，它仍然可以访问 React 树中的 Context。"},{header:"9. 限制",slug:"_9-限制",content:"虽然 Portal 提供了灵活性，但过度使用可能会使应用程序结构变得复杂，并且难以维护。"},{header:"10. 实用案例",slug:"_10-实用案例",content:"Portals 的常见用例包括模态框、提示框、下拉菜单、加载屏幕和 Cookie 警告等。"},{header:"11. 与 React Hooks 结合使用",slug:"_11-与-react-hooks-结合使用",content:"你可以将 Portal 与 React Hooks 结合使用，例如使用useEffect来处理 Portal 的挂载和清理。"},{header:"12. 测试 Portals",slug:"_12-测试-portals",content:"测试使用 Portal 的组件可能需要特殊处理，以确保 Portal 内容正确渲染并且事件处理正确。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/props.html",title:"",pathLocale:"/",contents:[{header:"props",slug:"props",content:"在 React 中，组件间的数据传递是通过属性（通常称为 props）来实现的。"},{header:"1. 单向数据流",slug:"_1-单向数据流",content:"Props 是 React 中实现单向数据流的方式，确保数据在组件树中自上而下流动。"},{header:"2. 组件通信",slug:"_2-组件通信",content:`Props 用于父组件向子组件传递数据。
function ParentComponent() { const message = 'Hello from parent'; return <ChildComponent message={message} />;
}`},{header:"3. 读取 Props",slug:"_3-读取-props",content:`在类组件中，可以通过this.props访问 props。
class ChildComponent extends React.Component { render() { console.log(this.props.message); // 'Hello from parent' return <div>{this.props.message}</div>; }
}
在函数组件中，props 作为函数参数传递。
function ChildComponent(props) { console.log(props.message); // 'Hello from parent' return <div>{props.message}</div>;
}`},{header:"4. 传递复杂数据",slug:"_4-传递复杂数据",content:`可以传递 JavaScript 表达式作为 props，包括对象、函数、数组等。
function ParentComponent() { const user = { name: 'Kimi', age: 30 }; return <ChildComponent user={user} />;
}`},{header:"5. 默认 Props",slug:"_5-默认-props",content:`可以使用defaultProps为组件定义默认 props。
ChildComponent.defaultProps = { message: 'Default message'
};`},{header:"6. Props 类型检查",slug:"_6-props-类型检查",content:`可以使用PropTypes库为组件的 props 定义类型检查。
import PropTypes from 'prop-types'; ChildComponent.propTypes = { message: PropTypes.string.isRequired
}; ChildComponent.defaultProps = { message: 'Default message'
};`},{header:"7. 传递子组件",slug:"_7-传递子组件",content:`可以通过 props 将子组件传递给另一个组件。
function ParentComponent() { const Child = () => <div>Child</div>; return <WrapperComponent Child={Child} />;
} function WrapperComponent({ Child }) { return <div>{<Child />}</WrapperComponent>;
}`},{header:"8. 内联函数",slug:"_8-内联函数",content:`可以在传递 props 时使用内联函数，以便在事件处理或回调中使用子组件的 props。
function ParentComponent() { return <ChildComponent onClick={() => console.log('Clicked')} />;
}`},{header:"9. Props 解构",slug:"_9-props-解构",content:`在函数组件中，可以解构 props 以简化代码。
function ChildComponent({ message, onClick }) { return <div onClick={onClick}>{message}</div>;
}`},{header:"10. 组合组件",slug:"_10-组合组件",content:`在组合组件时，可以将接收到的 props 传递给子组件。
function ParentComponent() { return <ChildComponent {...props} />;
}`},{header:"11. Props.frozen",slug:"_11-props-frozen",content:"在 React 17 及以上版本，组件的 props 是不可变的，这意味着你不应该修改传入的 props。"},{header:"12. 访问 props 的 children",slug:"_12-访问-props-的-children",content:`props.children是在组件中访问其子元素的一种方式。
function ParentComponent() { return <ChildComponent>Children content</ChildComponent>;
} function ChildComponent(props) { return <div>{props.children}</div>;
}`},{header:"13. 使用 Context API 传递 props",slug:"_13-使用-context-api-传递-props",content:"当 props 需要在多层嵌套的组件中传递时，可以使用 Context API 来避免“props drilling”。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/React.lazy%E5%92%8CSuspense.html",title:"",pathLocale:"/",contents:[{header:"React React.lazy 和 Suspense",slug:"react-react-lazy-和-suspense",content:"React.lazy 和 Suspense 是 React 中用于代码分割和懒加载的两个重要功能，按需加载组件，从而优化应用的加载时间和性能。"},{header:"1. React.lazy",slug:"_1-react-lazy",content:`React.lazy 是一个用于动态加载组件的函数。它允许你将组件分割成独立的代码块，这些代码块只有在需要时才会被加载。
const OtherComponent = React.lazy(() => import('./OtherComponent')); 当你使用 React.lazy 时，你实际上是在告诉 React，只有在需要渲染该组件时才加载它的代码。
它返回一个对象，该对象包含一个 .then() 方法，允许你处理加载完成的 Promise 。`},{header:"2. Suspense",slug:"_2-suspense",content:`Suspense 是一个组件，它可以让你包裹懒加载的组件，并提供一个回退（fallback）UI，这个 UI 会在懒加载的组件加载完成之前显示。
<React.Suspense fallback={<div>Loading...</div>}> <OtherComponent />
</React.Suspense> fallback 属性可以是任何 React 节点，通常是一个加载指示器。
当懒加载的组件正在加载时，Suspense 会渲染 fallback 属性提供的 UI 。`},{header:"3. 使用场景",slug:"_3-使用场景",content:`懒加载组件：对于不立即需要的组件，如页面底部的“关于我们”部分。
代码分割：将大型应用分割成更小的代码块，以加快初始加载速度。
性能优化：通过按需加载资源，减少应用的加载时间。`},{header:"4. 优势",slug:"_4-优势",content:`提升首屏速度：通过代码分割，减少首屏加载时间。
动态加载：仅在组件需要渲染时才加载，减少无用资源的加载。
更好的用户体验：Suspense 的 fallback 属性提供了平滑的加载过渡 。`},{header:"5. 注意事项",slug:"_5-注意事项",content:`错误处理：使用错误边界（Error Boundaries）来捕获懒加载组件中的错误。
避免过度使用：虽然懒加载可以提升性能，但过度使用可能导致应用结构复杂化。
兼容性：确保你的构建工具（如 Webpack）支持代码分割。`},{header:"6. 实现原理",slug:"_6-实现原理",content:`React.lazy 会返回一个懒加载组件对象，该对象在渲染时会动态加载对应的模块代码。
Suspense 组件会捕获懒加载组件加载过程中的异常，并渲染 fallback UI。
当组件加载完成时，Suspense 会渲染实际的组件，并卸载 fallback UI 。`},{header:"7. 与 Concurrent Mode 结合",slug:"_7-与-concurrent-mode-结合",content:"React.lazy 和 Suspense 可以与 React 的 Concurrent Mode 结合使用，以实现更流畅的加载体验和更好的资源调度 。"},{header:"8. 实际案例",slug:"_8-实际案例",content:`import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent')); function MyComponent() { return ( <div> <Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense> </div> );
}
在这个例子中，LazyComponent 将被懒加载，直到它需要被渲染时才加载。在加载过程中，将显示一个加载指示器。`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/React.Profiler.html",title:"",pathLocale:"/",contents:[{header:"React React.Profiler",slug:"react-react-profiler",content:"React.Profiler 是 React 提供的一个用于性能分析的工具，它可以帮助开发者测量 React 组件渲染的性能。"},{header:"1. 基本使用",slug:"_1-基本使用",content:`Profiler组件可以被添加到 React 树中的任何位置，用于测量该部分树的渲染性能。
<Profiler id="App" onRender={onRender}> <App />
</Profiler> id：一个字符串，用于标识Profiler。
onRender：一个回调函数，每次组件树渲染完成时都会被调用。`},{header:"2. onRender 回调",slug:"_2-onrender-回调",content:`onRender回调函数提供了关于渲染性能的详细信息：
function onRenderCallback( id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
) { // ...
} id：Profiler的标识符。
phase：渲染阶段，可以是mount或update。
actualDuration：当前更新的渲染时间。
baseDuration：没有优化时的预计渲染时间。
startTime：渲染开始的时间戳。
commitTime：React 提交更新的时间戳。
interactions：与渲染相关的用户交互或 React 特性集合。`},{header:"3. 性能分析",slug:"_3-性能分析",content:"Profiler用于分析应用程序的渲染性能，可以帮助识别性能瓶颈。"},{header:"4. 避免过度使用",slug:"_4-避免过度使用",content:"虽然Profiler是一个轻量级组件，但它应该只在必要时使用，因为每次使用都会增加 CPU 和内存开销。"},{header:"5. 与 Developer Tools 结合",slug:"_5-与-developer-tools-结合",content:"Profiler可以与 React Developer Tools 结合使用，提供更直观的性能分析。"},{header:"6. 使用场景",slug:"_6-使用场景",content:"Profiler适用于需要细粒度性能分析的场景，如识别长时间渲染的组件或分析优化效果。"},{header:"7. 性能优化",slug:"_7-性能优化",content:"通过分析Profiler提供的数据，可以对应用进行性能优化，比如使用React.memo、useMemo、useCallback等进行记忆化。"},{header:"8. 组件图",slug:"_8-组件图",content:"Profiler可以生成组件图，展示组件在多次提交中的渲染时间，帮助开发者了解组件的渲染频率和持续时间。"},{header:"9. 交互跟踪",slug:"_9-交互跟踪",content:"Profiler可以跟踪用户交互或 React 特性，如setState，从而了解哪些交互触发了组件的重新渲染。"},{header:"10. 生产环境分析",slug:"_10-生产环境分析",content:"虽然Profiler在开发模式下可用，但可以通过特定的构建版本在生产环境中进行性能分析。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/React%E7%89%88%E6%9C%AC%E5%B7%AE%E5%BC%82.html",title:"",pathLocale:"/",contents:[{header:"React 版本差异",slug:"react-版本差异",content:"React 是一个不断发展的库，每个新版本都会带来新特性、改进和最佳实践的更新。以下是一些 React 主要版本的显著差异："},{header:"React 16",slug:"react-16",content:`性能改进：React 16 提供了更好的组件性能，减少了不必要的重新渲染。
错误边界：引入了错误边界（Error Boundaries），允许开发者捕获子组件中的错误，防止整个组件树崩溃 。`},{header:"React 17",slug:"react-17",content:`并发特性：引入了并发特性的实验性支持，允许 React 在后台进行渲染工作，提高了应用的响应性。
更好的稳定性：进一步提升了组件的稳定性和性能。`},{header:"React 18",slug:"react-18",content:`自动批量更新：React 18 引入了自动批量更新机制，可以自动将多个状态更新合并，减少组件的重新渲染。
<Suspense>：引入了<Suspense>组件，允许在数据加载时显示回退 UI，增强了数据加载的用户体验。
流式渲染：支持流式渲染，允许组件的更新逐步应用到 DOM 中，提升了渲染性能。
并发特性：将 React 17 中的并发特性正式引入，增强了应用的响应性和性能。`},{header:"如何选择 React 版本",slug:"如何选择-react-版本",content:`应用规模：对于大型和复杂的应用，建议使用 React 18 以获得最佳性能和用户体验。
性能要求：如果性能是关键要求，React 18 的自动批量更新和流式渲染提供了显著的性能提升。
技术栈：如果开发团队熟悉较新的 React 版本，并且愿意采用最新的 React 实践，React 18 是更好的选择。`},{header:"结论",slug:"结论",content:"React 的每个版本都在不断改进和引入新特性。React 18 是迄今为止最大的更新之一，它带来了性能和用户体验的显著提升。开发者应该根据自己的应用需求和技术栈来选择合适的 React 版本。对于追求最新特性和性能的开发者来说，升级到 React 18 是推荐的路径 。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Refs.html",title:"",pathLocale:"/",contents:[{header:"React 中 Refs",slug:"react-中-refs",content:"Refs（引用）在 React 中是一个重要的特性，它允许你直接访问 DOM 元素或组件实例。提供了一种方式来处理 DOM 元素和组件实例的直接引用。"},{header:"1. 创建 Ref",slug:"_1-创建-ref",content:`在函数组件中，使用useRef Hook 来创建一个 ref。
import { useRef } from 'react'; function MyComponent() { const myRef = useRef(null); // ...
}
在类组件中，使用React.createRef来创建一个 ref。
class MyComponent extends React.Component { constructor(props) { super(props); this.myRef = React.createRef(); } // ...
}`},{header:"2. 访问 DOM 元素",slug:"_2-访问-dom-元素",content:`Refs 通常用于直接访问和操作 DOM 元素，如输入框、按钮等。
function MyComponent() { const inputRef = useRef(null); function focusInput() { inputRef.current.focus(); } return ( <input ref={inputRef} type="text" /> );
}`},{header:"3. 传递 Ref 到子组件",slug:"_3-传递-ref-到子组件",content:`Refs 可以传递给子组件，以便在组件树中进一步向下访问 DOM 元素。
function ParentComponent() { const childRef = useRef(null); return <ChildComponent ref={childRef} />;
} function ChildComponent(props) { useImperativeHandle(props.ref, () => ({ focus: () => { // ... } })); // ...
}`},{header:"4. 转发 Ref",slug:"_4-转发-ref",content:`使用forwardRef可以将接收到的 ref 转发到子组件。
const FancyButton = forwardRef((props, ref) => ( <button ref={ref} className="FancyButton"> {props.children} </button>
));`},{header:"5. 组合 Refs",slug:"_5-组合-refs",content:"你可以组合多个 refs，只要每个 ref 都有一个唯一的引用。"},{header:"6. 清理 Ref",slug:"_6-清理-ref",content:`当组件卸载时，应该清理 ref 以避免内存泄漏。
function MyComponent() { const myRef = useRef(null); useEffect(() => { return () => { myRef.current = null; }; }, []); // ...
}`},{header:"7. 使用 Ref 回调",slug:"_7-使用-ref-回调",content:`另一种创建 ref 的方式是使用回调函数。
function MyComponent() { let inputRef = useCallback((node) => { if (node !== null) { node.focus(); } }, []); return ( <input ref={inputRef} type="text" /> );
}`},{header:"8. 非受控组件",slug:"_8-非受控组件",content:"Refs 常用于非受控组件，即那些不由 React 状态管理的组件。"},{header:"9. 性能优化",slug:"_9-性能优化",content:"Refs 可以用于性能优化，例如，通过直接操作 DOM 来避免不必要的渲染。"},{header:"10. 访问组件实例",slug:"_10-访问组件实例",content:"Refs 还可以用于访问 React 组件的实例，这对于调用组件的方法或访问其状态非常有用。"},{header:"11. 避免过度使用",slug:"_11-避免过度使用",content:"过度使用 refs 可能会导致代码难以维护，应该谨慎使用。"},{header:"12. 与 Context 一起使用",slug:"_12-与-context-一起使用",content:"Refs 可以与 Context API 结合使用，以在组件树中传递 DOM 元素引用。"},{header:"13. 自动对焦",slug:"_13-自动对焦",content:"Refs 经常用于实现自动对焦、文本选择或媒体播放等行为。"},{header:"14. 管理焦点、文本选择或媒体播放",slug:"_14-管理焦点、文本选择或媒体播放",content:"Refs 可以用于管理焦点、文本选择或媒体播放等。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/state.html",title:"",pathLocale:"/",contents:[{header:"state",slug:"state",content:"在 React 中，state是组件内部的状态，它可以帮助管理组件的动态行为和数据。"},{header:"1. 定义 State",slug:"_1-定义-state",content:`在类组件中，可以通过this.state定义状态，并在constructor中初始化。
class MyClassComponent extends React.Component { constructor(props) { super(props); this.state = { count: 0 }; }
}
在函数组件中，使用useState Hook 来定义状态。
import { useState } from 'react'; function MyFunctionComponent() { const [count, setCount] = useState(0);
}`},{header:"2. 更新 State",slug:"_2-更新-state",content:`在类组件中，使用this.setState()更新状态。
this.setState({ count: this.state.count + 1 });
在函数组件中，使用setState函数更新状态。
setCount(count + 1);`},{header:"3. State 的不可变性",slug:"_3-state-的不可变性",content:`当更新状态时，应该返回一个新对象，而不是修改现有的状态对象。
setCount((prevCount) => prevCount + 1);`},{header:"4. State 的异步性",slug:"_4-state-的异步性",content:"setState是异步的，React 会批量更新状态，以提高性能。"},{header:"5. 初始渲染",slug:"_5-初始渲染",content:"在类组件中，状态可以在构造函数中初始化。在函数组件中，状态在组件创建时初始化。"},{header:"6. 组合 State",slug:"_6-组合-state",content:`可以有多个状态，每个状态对应不同的数据。
const [age, setAge] = useState(40);
const [fruit, setFruit] = useState('apple');`},{header:"7. State 和 Props",slug:"_7-state-和-props",content:"State 是组件私有的，而 props 是组件从外部接收的。State 是组件内部的数据，props 是组件外部的数据。"},{header:"8. 状态提升",slug:"_8-状态提升",content:"当多个组件需要共享相同状态时，可以将状态提升到它们共同的父组件中。"},{header:"9. 状态与 Context",slug:"_9-状态与-context",content:"状态可以与 Context API 结合使用，以在组件树中共享状态。"},{header:"10. 使用 State 进行条件渲染",slug:"_10-使用-state-进行条件渲染",content:`可以根据状态的值进行条件渲染。
return count > 0 ? <p>You have clicked {count} times</p> : null;`},{header:"11. State 的模式",slug:"_11-state-的模式",content:`提升状态：当多个组件需要共享状态时，将状态提升到它们共同的父组件。
状态容器：创建一个专门用于存储状态的组件。`},{header:"12. 状态与生命周期",slug:"_12-状态与生命周期",content:"在类组件中，状态的更新可能会触发组件的重新渲染，这个过程与生命周期方法（如componentDidMount和componentDidUpdate）密切相关。"},{header:"13. 状态的默认值",slug:"_13-状态的默认值",content:"在函数组件中，可以通过useState的第二个参数提供状态的默认值。"},{header:"14. 状态的惰性初始化",slug:"_14-状态的惰性初始化",content:`在函数组件中，可以惰性地初始化状态，即在首次渲染时根据 props 计算初始状态。
const [state, setState] = useState(() => { const initialState = someExpensiveComputation(props); return initialState;
});`},{header:"15. 状态与 Hooks",slug:"_15-状态与-hooks",content:"useState是 React Hooks 的一部分，它允许在函数组件中使用状态。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"事件处理",slug:"事件处理",content:"React 中的事件处理与原生 JavaScript 事件处理有所不同，它使用合成事件系统。"},{header:"1. 事件命名",slug:"_1-事件命名",content:`React 事件通常使用小写字母命名，即使用驼峰命名法（camelCase），而不是全部小写。
<button onClick={handleClick}>Click me</button>`},{header:"2. 处理函数",slug:"_2-处理函数",content:`事件处理函数通常在组件内部定义，并在渲染方法中通过 props 传递给元素。
function MyComponent() { function handleClick() { console.log('Button clicked'); } return <button onClick={handleClick}>Click me</button>;
}`},{header:"3. 传递参数",slug:"_3-传递参数",content:"可以在事件处理函数中传递参数，这些参数将在事件发生时传递。\nfunction MyComponent() { function handleClick(value) { console.log(`Button clicked with value: ${value}`); } return <button onClick={() => handleClick('test')}>Click me</button>;\n}"},{header:"4. 事件对象",slug:"_4-事件对象",content:'事件处理函数接收一个事件对象作为参数，该对象包含有关事件的详细信息。\nfunction MyComponent() { function handleClick(event) { console.log(`Clicked button with id: ${event.target.id}`); } return ( <button id="myButton" onClick={handleClick}> Click me </button> );\n}'},{header:"5. 默认行为",slug:"_5-默认行为",content:`可以通过调用事件对象的preventDefault方法来阻止元素的默认行为。
function MyComponent() { function handleSubmit(event) { event.preventDefault(); console.log('Form submitted'); } return <form onSubmit={handleSubmit}>...</form>;
}`},{header:"6. 事件传播",slug:"_6-事件传播",content:`可以通过调用事件对象的stopPropagation方法来阻止事件冒泡。
function MyComponent() { function handleClick(event) { event.stopPropagation(); console.log('Clicked'); } return <div onClick={handleClick}>Click me</div>;
}`},{header:"7. 事件监听",slug:"_7-事件监听",content:"在类组件中，事件处理函数通常在componentDidMount中绑定，在componentWillUnmount中移除。"},{header:"8. 箭头函数",slug:"_8-箭头函数",content:"在函数组件中，通常使用箭头函数来定义事件处理函数，以避免绑定函数的this。"},{header:"9. 内联函数",slug:"_9-内联函数",content:"React 推荐使用内联函数来处理事件，因为它们可以访问组件的状态和 props。"},{header:"10. 事件池",slug:"_10-事件池",content:"React 使用事件池模式，这意味着事件对象在事件处理之后会被回收。不要在事件处理函数之外使用事件对象。"},{header:"11. 键盘事件",slug:"_11-键盘事件",content:`处理键盘事件时，可以使用事件对象的key属性来获取被按下的键。
function MyComponent() { function handleKeyPress(event) { if (event.key === 'Enter') { console.log('Enter key pressed'); } } return <input onKeyDown={handleKeyPress} />;
}`},{header:"12. 鼠标事件",slug:"_12-鼠标事件",content:"处理鼠标事件时，可以使用事件对象的button、buttons、clientX、clientY等属性。"},{header:"13. 触摸事件",slug:"_13-触摸事件",content:"处理触摸事件时，可以使用事件对象的touches、targetTouches、changedTouches等属性。"},{header:"14. 焦点事件",slug:"_14-焦点事件",content:"处理焦点事件时，如focus、blur，可以使用事件对象的target属性来获取焦点的元素。"},{header:"15. 综合事件处理",slug:"_15-综合事件处理",content:`可以使用useEffect与事件处理函数结合，来监听和清理事件。
import { useEffect } from 'react'; function MyComponent() { useEffect(() => { window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []); function handleResize() { console.log('Window resized'); }
}`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E5%88%97%E8%A1%A8%E5%92%8C%E9%94%AE.html",title:"",pathLocale:"/",contents:[{header:"列表和键",slug:"列表和键",content:"在 React 中，经常需要根据数组中的数据项渲染列表。正确地处理列表和键（Keys）对于性能优化和组件的正确行为至关重要。"},{header:"1. 渲染列表",slug:"_1-渲染列表",content:`使用 JavaScript 的map函数在 JSX 中渲染数组中的每一项。
function ItemList({ items }) { return ( <ul> {items.map((item) => ( <li key={item.id}>{item.text}</li> ))} </ul> );
}`},{header:"2. 使用键（Keys）",slug:"_2-使用键-keys",content:"为列表中的每个元素分配一个唯一的键（key），以帮助 React 识别哪些元素改变了、添加了或者被移除了。"},{header:"3. 键的类型",slug:"_3-键的类型",content:`键可以是数字、字符串或是元素在数组中的位置，但最佳实践是使用稳定的身份标识符。
{ items.map((item) => <li key={item.id}>{item.text}</li>);
}`},{header:"4. 避免使用数组索引作为键",slug:"_4-避免使用数组索引作为键",content:"如果列表项可以重新排序，尽量避免使用数组索引作为键，因为这会导致性能问题和组件状态的错误。"},{header:"5. 键的稳定性",slug:"_5-键的稳定性",content:"键应该是稳定的、可预测的，且在组件的整个生命周期内不会变化。"},{header:"6. 键的作用",slug:"_6-键的作用",content:"键帮助 React 识别哪些元素是不同的，从而优化 DOM 操作和更新。"},{header:"7. 没有键的后果",slug:"_7-没有键的后果",content:"如果不提供键，React 会使用数组索引作为默认键，这可能会导致性能下降和组件状态不一致。"},{header:"8. 在复杂数据结构中使用键",slug:"_8-在复杂数据结构中使用键",content:`当渲染对象数组时，确保每个对象有一个唯一的键。
{ users.map((user) => ( <User key={user.id} {...user} /> ));
}`},{header:"9. 列表的动态变化",slug:"_9-列表的动态变化",content:"当列表数据发生变化（添加、删除、排序）时，键能够帮助 React 正确地更新 DOM。"},{header:"10. 使用React.Fragment优化列表",slug:"_10-使用react-fragment优化列表",content:`当渲染多个元素而不想添加额外的 DOM 元素时，可以使用React.Fragment。
function ItemList({ items }) { return ( <React.Fragment> {items.map((item) => ( <li key={item.id}>{item.text}</li> ))} </React.Fragment> );
}`},{header:"11. 使用key属性",slug:"_11-使用key属性",content:`在渲染数组元素时，通过key属性传递键。
<li key={item.id}></li>`},{header:"12. 避免在元素间共享键",slug:"_12-避免在元素间共享键",content:"每个元素的键应该是唯一的，不要在整个应用程序中共享键。"},{header:"13. 键和性能",slug:"_13-键和性能",content:"正确使用键可以提高渲染性能，尤其是在大规模列表渲染时。"},{header:"14. 条件渲染列表",slug:"_14-条件渲染列表",content:`可以在map回调函数中进行条件渲染。
{ items .filter((item) => item.isVisible) .map((item) => <li key={item.id}>{item.text}</li>);
}`},{header:"15. 使用useMemo优化列表",slug:"_15-使用usememo优化列表",content:`如果列表渲染涉及到高开销的操作，可以使用useMemo进行优化。
const items = useMemo(() => computeExpensiveList(data), [data]);`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E6%87%92%E5%8A%A0%E8%BD%BD.html",title:"",pathLocale:"/",contents:[{header:"懒加载",slug:"懒加载",content:"React 的懒加载是一种性能优化技术，它允许你在应用中按需加载组件，而不是在应用初始化时一次性加载所有资源。这可以减少应用的初始加载时间并提高用户体验。"},{header:"如何实现懒加载",slug:"如何实现懒加载",content:`在 React 中实现懒加载主要依赖于React.lazy和<Suspense>这两个 API。 使用React.lazy：这是一个用于动态加载组件的高阶函数，它接受一个函数作为参数，该函数使用动态import()语法来加载组件。
const LazyComponent = React.lazy(() => import('./LazyComponent')); 使用<Suspense>：这是一个用于包裹懒加载组件的 React 组件，它允许你指定一个回退 UI，这个 UI 会在懒加载组件加载期间显示。
<Suspense fallback={<div>Loading...</div>}> <LazyComponent />
</Suspense>`},{header:"懒加载的最佳实践",slug:"懒加载的最佳实践",content:`合理划分组件：将应用程序划分为多个小组件，确保每个组件的功能单一，这样可以更容易地实现懒加载。
使用动态导入：使用动态import()来加载组件，而不是静态引入，这样可以最大限度地利用懒加载的优势。
结合路由懒加载：与路由结合使用懒加载，确保用户访问不同页面时才加载所需的组件。
处理加载状态和错误：始终使用<Suspense>和错误边界来处理加载状态和可能的错误，提供良好的用户体验。`},{header:"注意事项",slug:"注意事项",content:`避免过度使用：虽然懒加载可以提升性能，但过度使用可能导致应用结构复杂化。
兼容性：确保你的构建工具（如 Webpack）支持代码分割。`},{header:"实际案例",slug:"实际案例",content:`import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent')); function MyComponent() { return ( <div> <Suspense fallback={<div>Loading...</div>}> <LazyComponent /> </Suspense> </div> );
}
在这个例子中，LazyComponent只有在需要时才会被加载，并在Suspense组件内显示。fallback属性用于指定组件加载时显示的内容。`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93.html",title:"",pathLocale:"/",contents:[{header:"条件渲染",slug:"条件渲染",content:"条件渲染是 React 中根据条件来控制元素是否显示或显示什么内容的机制。"},{header:"1. 基本条件渲染",slug:"_1-基本条件渲染",content:`使用 JavaScript 的if语句或三元运算符? :来实现条件渲染。
function MyComponent({ isLoggedIn }) { return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;
}`},{header:"2. Inline If",slug:"_2-inline-if",content:`在 JSX 中，你可以在返回语句中直接使用花括号{}包裹的表达式来实现条件渲染。
function MyComponent({ isLoggedIn }) { return <div>{isLoggedIn && <Dashboard />}</div>;
}`},{header:"3. 三元运算符",slug:"_3-三元运算符",content:`三元运算符可以用来在两个元素之间进行选择性渲染。
function MyComponent({ isLoggedIn }) { return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;
}`},{header:"4. 逻辑与(&&)",slug:"_4-逻辑与",content:`逻辑与操作符可以用来在数组中进行条件渲染，如果条件为真，则元素将被渲染。
function MyComponent({ items }) { return ( <ul> {items.map( (item) => item.isVisible && <li key={item.id}>{item.text}</li> )} </ul> );
}`},{header:"5. 条件列表渲染",slug:"_5-条件列表渲染",content:`在渲染列表时，可以根据条件来决定是否渲染列表中的某些元素。
function ItemList({ items }) { return ( <ul> {items .filter((item) => item.isVisible) .map((item) => ( <li key={item.id}>{item.text}</li> ))} </ul> );
}`},{header:"6. 使用状态进行条件渲染",slug:"_6-使用状态进行条件渲染",content:`使用状态来控制组件的显示或隐藏。
function MyComponent() { const [isVisible, setIsVisible] = useState(false); function toggleVisibility() { setIsVisible(!isVisible); } return ( <div> {isVisible && <div>Now you see me!</div>} <button onClick={toggleVisibility}>{isVisible ? 'Hide' : 'Show'}</button> </div> );
}`},{header:"7. 使用 props 进行条件渲染",slug:"_7-使用-props-进行条件渲染",content:`根据传入的 props 来决定是否渲染某个元素。
function Greeting({ salutation }) { return ( <div> {salutation && <h1>{salutation}</h1>} <p>Hello, user!</p> </div> );
}`},{header:"8. 阻止组件渲染",slug:"_8-阻止组件渲染",content:`使用null来阻止组件渲染任何内容。
function MyComponent({ content }) { return content ? <div>{content}</div> : null;
}`},{header:"9. Fragment",slug:"_9-fragment",content:`使用React.Fragment来包装条件渲染的元素组，避免添加额外的 DOM 元素。
import { Fragment } from 'react'; function MyComponent({ user }) { return ( <Fragment> {user.isLoggedIn && <Dashboard />} <Login /> </Fragment> );
}`},{header:"10. 条件渲染的组合",slug:"_10-条件渲染的组合",content:"可以将多种条件渲染技术组合使用，以实现复杂的渲染逻辑。"},{header:"11. 使用useEffect进行条件渲染",slug:"_11-使用useeffect进行条件渲染",content:`在useEffect中使用条件语句来根据状态或 props 的变化执行副作用。
import { useEffect } from 'react'; function MyComponent({ user }) { useEffect(() => { if (user.isLoggedIn) { // Do something } }, [user.isLoggedIn]); return <div />;
}`},{header:"12. 性能考虑",slug:"_12-性能考虑",content:"条件渲染时要注意性能，避免在渲染过程中进行高开销的计算。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E6%B8%B2%E6%9F%93props.html",title:"",pathLocale:"/",contents:[{header:"React 中渲染属性（Render Props）",slug:"react-中渲染属性-render-props",content:"渲染属性（Render Props）是一种在 React 中共享代码的模式，它涉及到一个组件接收一个函数作为 props，然后调用这个函数来决定其渲染逻辑。可以在组件间共享渲染逻辑，而不需要直接修改这些组件。"},{header:"1. 定义渲染属性",slug:"_1-定义渲染属性",content:`渲染属性是一种模式，其中一个组件将渲染逻辑外包给通过 props 传递的函数。
<MyComponent render={(content) => <div>{content}</div>} />`},{header:"2. 使用渲染属性",slug:"_2-使用渲染属性",content:`子组件通过调用传递的函数来决定如何渲染内容。
function MyComponent({ render }) { const content = 'Hello World'; return render(content);
}`},{header:"3. 传递复杂的数据结构",slug:"_3-传递复杂的数据结构",content:`渲染属性不仅可以传递字符串，还可以传递对象、数组或其他复杂的数据结构。
function MyComponent({ render }) { const data = { text: 'Hello', emphasis: true }; return render(data);
}`},{header:"4. 与高阶组件结合",slug:"_4-与高阶组件结合",content:`渲染属性经常与高阶组件（HOC）结合使用，以提供额外的逻辑或数据。
function withData(WrappedComponent) { return function (props) { const data = { name: 'Kimi', age: 30 }; return ( <WrappedComponent {...props} data={data} /> ); };
} const EnhancedComponent = withData(MyComponent);`},{header:"5. 传递多个渲染函数",slug:"_5-传递多个渲染函数",content:`可以传递多个函数来处理不同的渲染逻辑。
function MyComponent({ renderHeader, renderContent }) { return ( <> {renderHeader('Header')} {renderContent('Content')} </> );
}`},{header:"6. 性能考虑",slug:"_6-性能考虑",content:"过度使用渲染属性可能会导致性能问题，因为每次组件渲染时都会调用函数。"},{header:"7. 避免过度使用",slug:"_7-避免过度使用",content:"渲染属性模式可以增加代码的复杂性，因此应该在确实需要时才使用。"},{header:"8. 与 Hooks 结合",slug:"_8-与-hooks-结合",content:`在函数组件中，可以使用useCallback Hook 来创建稳定的渲染函数。
function MyComponent() { const content = 'Hello World'; const render = useCallback((content) => <div>{content}</div>, []); return render(content);
}`},{header:"9. 渲染属性与上下文",slug:"_9-渲染属性与上下文",content:"渲染属性可以与 Context API 结合使用，以在组件树中传递渲染逻辑。"},{header:"10. 条件渲染",slug:"_10-条件渲染",content:`可以使用渲染属性来实现条件渲染。
function MyComponent({ condition, render }) { return condition ? render('Content') : null;
}`},{header:"11. 与children属性结合",slug:"_11-与children属性结合",content:`渲染属性可以与children属性结合使用，以提供更灵活的渲染方式。
function MyComponent({ children }) { return <div>{children({ text: 'Hello', emphasis: true })}</div>;
} <MyComponent children={(data) => <div>{data.text}</div>} />;`},{header:"12. 自定义 Hook",slug:"_12-自定义-hook",content:"可以使用自定义 Hook 来实现渲染属性的逻辑，以便在多个组件间重用。"},{header:"13. 调试",slug:"_13-调试",content:`渲染属性可以用于调试目的，例如通过传递一个函数来记录组件的渲染输出。
渲染属性是一种强大的模式，正确使用渲染属性可以提高代码的可维护性和复用性。`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E7%8A%B6%E6%80%81%E6%8F%90%E5%8D%87.html",title:"",pathLocale:"/",contents:[{header:"状态提升（Lifting State Up）",slug:"状态提升-lifting-state-up",content:"状态提升是 React 中用于管理多个组件间共享状态的模式。当多个组件需要访问同一个状态时，你可以将这个状态提升到它们共同的父组件中。状态提升是一种简单有效的状态管理方式，适用于多个组件需要访问共享状态的场景。然而，随着应用规模的增长，可能需要考虑使用更强大的状态管理解决方案。"},{header:"1. 定义状态",slug:"_1-定义状态",content:`在父组件中定义一个状态，并通过 props 将其传递给子组件。
class ParentComponent extends React.Component { constructor(props) { super(props); this.state = { sharedState: '' }; } render() { return ( <div> <ChildComponentA sharedState={this.state.sharedState} /> <ChildComponentB sharedState={this.state.sharedState} /> </div> ); }
}`},{header:"2. 子组件访问状态",slug:"_2-子组件访问状态",content:`子组件通过 props 访问状态，并回调到父组件以更新状态。
function ChildComponentA({ sharedState }) { return ( <input value={sharedState} onChange={(e) => this.props.onChange(e.target.value)} /> );
} function ChildComponentB({ sharedState, onChange }) { return ( <input value={sharedState} onChange={onChange} /> );
}`},{header:"3. 更新状态",slug:"_3-更新状态",content:`子组件通过回调函数更新父组件的状态。
class ParentComponent extends React.Component { // ... handleInputChange = (newState) => { this.setState({ sharedState: newState }); }; render() { return ( <div> <ChildComponentA sharedState={this.state.sharedState} onChange={this.handleInputChange} /> <ChildComponentB sharedState={this.state.sharedState} onChange={this.handleInputChange} /> </div> ); }
}`},{header:"4. 子组件的独立状态",slug:"_4-子组件的独立状态",content:`如果子组件需要独立控制状态，可以使用useState在子组件中定义独立状态。
function ChildComponentB({ sharedState }) { const [localState, setLocalState] = useState(''); const handleChange = (e) => { setLocalState(e.target.value); }; return ( <input value={localState} onChange={handleChange} /> );
}`},{header:"5. 状态提升的适用场景",slug:"_5-状态提升的适用场景",content:`当多个组件需要访问同一个状态时。
当多个组件需要基于同一个状态渲染输出时。
当需要在多个组件之间同步状态时。`},{header:"6. 避免过度提升状态",slug:"_6-避免过度提升状态",content:"过度提升状态会导致组件过于紧密耦合，难以维护。如果只有少数几个组件需要访问状态，可以考虑其他方式，如 Context API 或状态管理库。"},{header:"7. 状态提升与 Context API",slug:"_7-状态提升与-context-api",content:`状态提升可以与 Context API 结合使用，以避免深层组件树的 props 钻取。
const SharedContext = createContext(); function ParentComponent() { const [sharedState, setSharedState] = useState(''); return ( <SharedContext.Provider value={[sharedState, setSharedState]}> <ChildComponentA /> <ChildComponentB /> </SharedContext.Provider> );
} function ChildComponentA() { const [sharedState, setSharedState] = useContext(SharedContext); return ( <input value={sharedState} onChange={(e) => setSharedState(e.target.value)} /> );
}`},{header:"8. 状态提升与性能",slug:"_8-状态提升与性能",content:"状态提升可能会影响性能，因为父组件的重新渲染会导致所有子组件的重新渲染。可以通过性能优化技巧，如React.memo或shouldComponentUpdate来减少不必要的渲染。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E7%BB%84%E5%90%88vs%E7%BB%A7%E6%89%BF.html",title:"",pathLocale:"/",contents:[{header:"组合 vs 继承",slug:"组合-vs-继承",content:"在 React 中，组合和继承是两种不同的组件复用方式。React 团队推荐使用组合而不是继承来构建应用程序，因为组合提供了更好的灵活性和可维护性。总的来说，组合提供了一种更灵活、更可维护的方式来构建 React 应用程序，而继承则在某些特定场景下可能有其优势。"},{header:"继承",slug:"继承",content:`在传统的 OOP（面向对象编程）中，继承是一种常见的代码复用方式。通过创建一个新类并继承父类的属性和方法，可以扩展功能。在 React 中，继承通常意味着一个组件通过extends关键字继承另一个组件。
class ChildComponent extends React.Component { render() { return <div>{this.props.message}</div>; }
}
继承的缺点： 紧密耦合：子组件和父组件紧密耦合，父组件的更改可能影响子组件。
复用受限：只能继承一个父组件，限制了复用性。
生命周期方法：在类组件中，生命周期方法和属性是固定的，这限制了组件的灵活性。
理解复杂度：继承关系可能导致组件之间的依赖关系变得复杂，难以理解。`},{header:"组合",slug:"组合",content:`组合是将多个小组件组合成一个大组件的方式。在 React 中，组件可以像函数一样相互调用并返回 JSX。
function ParentComponent() { return ( <div> <ChildComponentA /> <ChildComponentB /> </div> );
} function ChildComponentA() { return <div>Child A</div>;
} function ChildComponentB() { return <div>Child B</div>;
}
组合的优点： 灵活性：可以灵活地组合不同的组件，创建复杂的 UI。
可维护性：每个组件都是独立的，易于维护和测试。
复用性：组件可以在不同的父组件中复用，提高了代码的复用性。
简洁性：组合可以减少模板代码，使组件更加简洁。`},{header:"React 推荐组合的原因",slug:"react-推荐组合的原因",content:`更少的假设：组合不假设组件之间的关系，提供了更大的灵活性。
更好的复用性：组件可以在不同的上下文中复用，而不受限制。
更清晰的结构：组合可以创建更清晰的组件结构，易于理解和维护。
避免生命周期问题：组合避免了复杂的生命周期方法和属性继承问题。`},{header:"结合使用",slug:"结合使用",content:"虽然 React 推荐组合，但这并不意味着继承完全不能用。在某些情况下，继承仍然有其用途，例如当你需要复用多个组件的属性和方法时。你可以将组合和继承结合使用，以满足不同的需求。"},{header:"最佳实践",slug:"最佳实践",content:`优先使用组合：在大多数情况下，组合是构建 React 应用程序的首选方式。
合理使用继承：在确实需要复用多个组件的属性和方法时，可以考虑使用继承。
保持组件独立：无论使用组合还是继承，都应该保持组件的独立性和可复用性。
避免深层次的继承链：深层次的继承链会使代码难以理解和维护。`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E8%87%AA%E5%AE%9A%E4%B9%89Hooks.html",title:"",pathLocale:"/",contents:[{header:"自定义 Hooks",slug:"自定义-hooks",content:"自定义 Hooks 是一种在 React 中复用状态逻辑的高级技巧。它们让你可以在多个组件之间重用状态逻辑而不必直接复用类组件的代码。通过封装状态逻辑和副作用，自定义 Hooks 让你的组件更加简洁和清晰。"},{header:"1. 使用 Hooks 的规则",slug:"_1-使用-hooks-的规则",content:`只能在函数组件的顶层使用 Hooks。
不要在循环、条件语句或嵌套函数中调用 Hooks。`},{header:"2. 创建自定义 Hook",slug:"_2-创建自定义-hook",content:`自定义 Hook 是通过在函数前面加上use前缀来创建的，它是一个 JavaScript 函数。
function useMyCustomHook(input) { // ...状态逻辑 return someValue;
}`},{header:"3. 使用 useState 和 useEffect",slug:"_3-使用-usestate-和-useeffect",content:"自定义 Hooks 内部可以使用其他 Hooks，如useState和useEffect。\nfunction useUser(name) { const [user, setUser] = useState(null); useEffect(() => { const fetchUser = async () => { const response = await fetch(`/api/users/${name}`); const userData = await response.json(); setUser(userData); }; fetchUser(); }, [name]); return user;\n}"},{header:"4. 暴露公共 API",slug:"_4-暴露公共-api",content:`自定义 Hook 应该暴露一个公共 API，这样其他组件就可以使用它。
function useUser(name) { // ...状态逻辑 return { user, isLoading, error };
}`},{header:"5. 参数化",slug:"_5-参数化",content:`自定义 Hook 可以接受参数，使其更加灵活和通用。
function useFetchData(url) { const [data, setData] = useState(null); const [isLoading, setIsLoading] = useState(false); const [error, setError] = useState(null); useEffect(() => { const fetchData = async () => { setIsLoading(true); try { const response = await fetch(url); const jsonData = await response.json(); setData(jsonData); } catch (err) { setError(err); } setIsLoading(false); }; fetchData(); }, [url]); return { data, isLoading, error };
}`},{header:"6. 使用自定义 Hook",slug:"_6-使用自定义-hook",content:`在组件中使用自定义 Hook，就像使用内置 Hook 一样。
function UserProfile({ userName }) { const user = useUser(userName); if (!user) { return <div>Loading...</div>; } return <div>{user.name}</div>;
}`},{header:"7. 命名约定",slug:"_7-命名约定",content:"自定义 Hook 的命名应该以use为前缀，并且能够清晰地表达其功能。"},{header:"8. 避免副作用",slug:"_8-避免副作用",content:"自定义 Hook 的主要目的是封装状态逻辑，而不是副作用。副作用应该在组件内部使用useEffect处理。"},{header:"9. 使用自定义 Hook 进行性能优化",slug:"_9-使用自定义-hook-进行性能优化",content:`自定义 Hook 可以用于封装性能优化逻辑，如 memoization、throttling 或 debouncing。
function useDebounce(value, delay) { const [debouncedValue, setDebouncedValue] = useState(value); useEffect(() => { const handler = setTimeout(() => { setDebouncedValue(value); }, delay); return () => { clearTimeout(handler); }; }, [value, delay]); return debouncedValue;
}`},{header:"10. 自定义 Hook 的组合",slug:"_10-自定义-hook-的组合",content:"你可以创建多个自定义 Hook，并将它们组合起来使用。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E8%A1%A8%E5%8D%95%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"React 中表单处理",slug:"react-中表单处理",content:"在 React 中处理表单是一个常见的任务，涉及到数据的收集、验证和状态管理。以下是 React 表单处理的关键技术点和概念："},{header:"1. 控制组件",slug:"_1-控制组件",content:`React 中的表单元素可以是受控组件，这意味着它们的值由 React 组件的状态管理。
function MyForm() { const [inputValue, setInputValue] = useState(''); const handleChange = (event) => { setInputValue(event.target.value); }; const handleSubmit = (event) => { event.preventDefault(); // 处理表单提交 console.log(inputValue); }; return ( <form onSubmit={handleSubmit}> <input type="text" value={inputValue} onChange={handleChange} /> <button type="submit">Submit</button> </form> );
}`},{header:"2. 非受控组件",slug:"_2-非受控组件",content:`非受控组件是指那些不由 React 状态直接管理的表单元素。可以使用ref来处理非受控组件。
function MyForm() { const handleSubmit = (event) => { event.preventDefault(); const inputElement = formRef.current.elements.textInput; console.log(inputElement.value); }; return ( <form ref={formRef} onSubmit={handleSubmit}> <input name="textInput" /> <button type="submit">Submit</button> </form> );
}`},{header:"3. 使用useState管理表单状态",slug:"_3-使用usestate管理表单状态",content:`每个表单字段可以使用一个useState钩子来管理其值。
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');`},{header:"4. 处理多个字段",slug:"_4-处理多个字段",content:`可以创建一个表单状态对象，使用一个useState钩子管理多个字段。
const [formState, setFormState] = useState({ username: '', password: ''
}); const handleChange = (event) => { const { name, value } = event.target; setFormState({ ...formState, [name]: value });
};`},{header:"5. 表单验证",slug:"_5-表单验证",content:`可以在表单提交时或字段更改时进行验证。
const [errors, setErrors] = useState({}); const validateForm = () => { let newErrors = {}; if (!formState.username) newErrors.username = 'Required'; if (!formState.password) newErrors.password = 'Required'; setErrors(newErrors); return Object.keys(newErrors).length === 0;
};`},{header:"6. 表单提交",slug:"_6-表单提交",content:`处理表单提交通常涉及到阻止默认事件、验证和处理数据。
const handleSubmit = (event) => { event.preventDefault(); if (validateForm()) { // 提交表单数据 }
};`},{header:"7. 使用useRef管理 DOM 引用",slug:"_7-使用useref管理-dom-引用",content:"useRef钩子可以用来获取对表单元素的引用，这在非受控组件或需要直接操作 DOM 时很有用。"},{header:"8. 使用useEffect处理表单重置",slug:"_8-使用useeffect处理表单重置",content:`useEffect可以用来在表单提交后重置表单状态。
useEffect(() => { if (isSubmitted) { setFormState({ username: '', password: '' }); setErrors({}); }
}, [isSubmitted]);`},{header:"9. 自定义钩子",slug:"_9-自定义钩子",content:`可以创建自定义钩子来处理表单逻辑，以便在多个组件间重用。
function useForm(initialState) { const [values, setValues] = useState(initialState); const [errors, setErrors] = useState({}); const handleChange = (event) => { const { name, value } = event.target; setValues({ ...values, [name]: value }); }; const handleSubmit = (event) => { event.preventDefault(); // 表单提交逻辑 }; return { values, errors, handleChange, handleSubmit };
}`},{header:"10. 第三方库",slug:"_10-第三方库",content:"可以使用第三方库（如 Formik 或 React Hook Form）来简化表单状态管理和验证。"},{header:"11. 文件上传",slug:"_11-文件上传",content:'对于文件上传，可以使用<input type="file" />并管理文件状态。'},{header:"12. 多选和复选框",slug:"_12-多选和复选框",content:"管理多选框和复选框的状态可能需要将状态存储为数组或对象。"},{header:"13. 表单反馈",slug:"_13-表单反馈",content:"向用户提供实时反馈，如密码强度指示器或验证消息。"},{header:"14. 无障碍性（Accessibility）",slug:"_14-无障碍性-accessibility",content:"确保表单元素具有适当的无障碍性属性，如<label>、aria-*等。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E9%94%99%E8%AF%AF%E8%BE%B9%E7%95%8C.html",title:"",pathLocale:"/",contents:[{header:"React 中错误边界（Error Boundaries）",slug:"react-中错误边界-error-boundaries",content:"错误边界（Error Boundaries）是 React 中用于捕获子组件树中 JavaScript 错误并提供回退 UI 的组件，它们在渲染期间、生命周期方法和构造函数中捕获错误。"},{header:"1. 定义错误边界",slug:"_1-定义错误边界",content:`错误边界是一个 React 组件，它通过定义特定的生命周期方法来捕获子组件中的错误。
class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { // 更新 state 使下一次渲染能够显示降级后的 UI return { hasError: true }; } componentDidCatch(error, errorInfo) { // 你同样可以将错误日志上报给服务器 logErrorToMyService(error, errorInfo); } render() { if (this.state.hasError) { // 你可以自定义降级后的 UI 并渲染 return <h1>Something went wrong.</h1>; } return this.props.children; }
}`},{header:"2. 使用错误边界",slug:"_2-使用错误边界",content:`错误边界可以像普通组件一样使用，包裹可能抛出错误的组件。
<ErrorBoundary> <MyComponent />
</ErrorBoundary>`},{header:"3. 捕获错误的范围",slug:"_3-捕获错误的范围",content:"错误边界只能捕获其子组件树中的错误，而不能捕获其自身的错误。"},{header:"4. 错误边界的限制",slug:"_4-错误边界的限制",content:`错误边界不能捕获以下错误： 事件处理器中的错误
异步代码中的错误（例如 setTimeout 或 requestAnimationFrame 回调）
服务端渲染中的错误
其自身（而非子组件）中的错误`},{header:"5. 错误处理",slug:"_5-错误处理",content:`错误边界通过 static getDerivedStateFromError() 和 componentDidCatch() 方法来处理错误。 static getDerivedStateFromError()：在渲染阶段被调用，用于更新状态以显示回退 UI。
componentDidCatch()：在提交阶段被调用，可以执行副作用操作，如日志记录。`},{header:"6. 性能考虑",slug:"_6-性能考虑",content:"错误边界可能会影响性能，因为它们增加了组件的渲染次数。"},{header:"7. 与 Concurrent Mode 结合",slug:"_7-与-concurrent-mode-结合",content:"错误边界可以与 React 的 Concurrent Mode 结合使用，以实现更流畅的加载体验和更好的资源调度。"},{header:"8. 实际案例",slug:"_8-实际案例",content:"错误边界通常用于捕获并处理应用程序中的意外错误，避免整个应用崩溃，提供更优雅的错误处理方式。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6(HOC).html",title:"",pathLocale:"/",contents:[{header:"React 中高阶组件（HOC）",slug:"react-中高阶组件-hoc",content:"高阶组件（Higher-Order Component）是 React 中用于重用组件逻辑的高级技术。HOC 是一个函数，它接受一个组件并返回一个新的组件。多个组件间共享逻辑，而不需要直接修改这些组件。"},{header:"1. 定义 HOC",slug:"_1-定义-hoc",content:`HOC 是一个函数，它接受一个 React 组件作为参数，并返回一个新的组件。
const withExtraInfo = (WrappedComponent) => { return class extends React.Component { render() { const extraInfo = 'Extra info'; return ( <WrappedComponent {...this.props} extraInfo={extraInfo} /> ); } };
};`},{header:"2. 使用 HOC",slug:"_2-使用-hoc",content:`使用 HOC 时，将其作为包裹函数应用于现有的组件。
const EnhancedComponent = withExtraInfo(MyComponent);`},{header:"3. 传递 props",slug:"_3-传递-props",content:`HOC 应该将所有 props 传递给被包裹的组件。
const withExtraInfo = (WrappedComponent) => { return class extends React.Component { render() { const { extraInfo, ...otherProps } = this.props; return ( <WrappedComponent {...otherProps} extraInfo={extraInfo} /> ); } };
};`},{header:"4. 访问被包裹组件的 ref",slug:"_4-访问被包裹组件的-ref",content:`在 HOC 中，可以使用 React.forwardRef 来转发 ref。
const withExtraInfo = (WrappedComponent) => { return React.forwardRef((props, ref) => { const extraInfo = 'Extra info'; return ( <WrappedComponent {...props} extraInfo={extraInfo} ref={ref} /> ); });
};`},{header:"5. HOC 与函数式组件",slug:"_5-hoc-与函数式组件",content:`HOC 可以用于函数式组件，通过使用 React.memo 或 React.forwardRef。
const withExtraInfo = (WrappedComponent) => { return React.memo((props) => { const extraInfo = 'Extra info'; return ( <WrappedComponent {...props} extraInfo={extraInfo} /> ); });
};`},{header:"6. 使用 HOC 进行性能优化",slug:"_6-使用-hoc-进行性能优化",content:`HOC 可以用来实现性能优化，如通过 React.memo 或 shouldComponentUpdate。
const withPerformanceOptimization = (WrappedComponent) => { return React.memo(WrappedComponent, (prevProps, nextProps) => { return prevProps.id === nextProps.id; });
};`},{header:"7. HOC 与上下文（Context）",slug:"_7-hoc-与上下文-context",content:`HOC 可以用来提供或消费上下文（Context）。
const withTheme = (WrappedComponent) => { return function ThemedComponent(props) { const theme = useContext(MyContext); return ( <WrappedComponent {...props} theme={theme} /> ); };
};`},{header:"8. HOC 与状态管理",slug:"_8-hoc-与状态管理",content:"HOC 可以用来注入状态管理逻辑，如 Redux 的connect函数。"},{header:"9. HOC 与副作用",slug:"_9-hoc-与副作用",content:`HOC 可以用来处理组件的副作用，如数据获取。
const withData = (WrappedComponent) => { return class extends React.Component { componentDidMount() { fetchData(); } render() { return <WrappedComponent {...this.props} />; } };
};`},{header:"10. HOC 的注意事项",slug:"_10-hoc-的注意事项",content:`HOC 应该保持纯净，不包含任何状态或副作用。
HOC 应该易于复用，避免过度特定化的逻辑。
HOC 可能会使组件层次变得复杂，应谨慎使用。`},{header:"11. HOC 与类型检查",slug:"_11-hoc-与类型检查",content:"在使用 HOC 时，可以使用 PropTypes 来定义被包裹组件的 props 类型。"},{header:"12. HOC 与 CSS 样式",slug:"_12-hoc-与-css-样式",content:`HOC 可以用来注入样式或类名。
const withStyles = (styles) => (WrappedComponent) => { return function WithStylesComponent(props) { return ( <WrappedComponent {...props} className={styles.className} /> ); };
};`},{header:"13. HOC 与错误边界",slug:"_13-hoc-与错误边界",content:"HOC 可以用来创建错误边界，捕获子组件的错误。"},{header:"14. HOC 与 React Hooks",slug:"_14-hoc-与-react-hooks",content:"虽然 Hooks 是推荐的代码复用方式，但 HOC 仍然可以与 Hooks 结合使用。"}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/Function.html",title:"",pathLocale:"/",contents:[{header:"Function",slug:"function",content:`全局类型 Function 是所有 JavaScript 函数值的类型。它包括了所有函数对象共有的属性，如 call、bind 和 apply。此外，Function 类型的值可以被调用，并且这些调用返回 any 类型 。 当你在函数中声明 this 参数时，你为该函数调用时的上下文对象提供了一个类型注解。这在对象的方法或回调函数中尤其有用，以确保函数调用时 this 的类型是正确的。Printer 接口定义了一个 print 方法，该方法声明了 this 参数为 Printer 类型。这确保了 print 方法中的 this 指的是 Printer 类型的对象。 interface Printer { print(this: Printer, message: string): void;
} function setupPrinter(p: Printer) { const printer: Printer = { print: function (this: Printer, message: string) { console.log(message); }, }; window.onload = function (this: Printer) { this.print("The page has finished loading."); }.bind(printer);
} const myPrinter: Printer = { print: function (this: Printer, message: string) { console.log(\`Printing: \${message}\`); },
}; setupPrinter(myPrinter); 在回调函数中声明 this 参数时，你可以确保回调函数中的 this 与期望的类型一致。doSomething 函数接受一个回调函数 f，该回调函数声明了 this 参数为 Printer 类型。这确保了当 doSomething 调用 f 时，this 指向 Printer 类型的对象。 function doSomething(f: (this: Printer, message: string) => void) { return f.call(printer, "Hello, World!");
} doSomething(myPrinter.print);`},{header:"注意",slug:"注意",content:"需要注意的是，箭头函数不绑定自己的 this，它们继承父执行上下文的 this。因此，当你在类的方法中使用箭头函数时，this 可能不会指向你期望的对象。为了避免这种情况，可以使用普通函数或使用 bind 来确保 this 的正确性。"}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/never.html",title:"",pathLocale:"/",contents:[{header:"never",slug:"never",content:`永远不会有返回值, 空是有值的, 值为空, 所以不能用 never function a(): never { throw new error("这种是没有返回值...");
}`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/unknown.html",title:"",pathLocale:"/",contents:[{header:"unknown(未知类型, 类型安全的 any)",slug:"unknown-未知类型-类型安全的-any",content:`// any类型可以赋值给任意变量
let a: any;
let b = "string";
b = a;
b = true;
// 所以不建议使用any, 而是用unknown;
// unknown类型不可以赋值给任意变量
// 解决办法:
let c: unknown;
let d: string;
c = "hello";
d = c as string; // 类型断言
// 或者
d = <string>c; // 类型断言`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/void.html",title:"",pathLocale:"/",contents:[{header:"void",slug:"void",content:`函数没有返回值的时候用 function a(): void { return; // 或者 return undefined; // 或者 return null;
}`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B%E8%A1%A8%E8%BE%BE%E5%BC%8F.html",title:"",pathLocale:"/",contents:[{header:"函数类型表达式",slug:"函数类型表达式",content:"函数类型表达式用于定义函数的类型。这包括函数的参数类型、返回值类型以及可选的 this 上下文类型。函数类型表达式可以是匿名的，也可以是具名的（类型别名）。"},{header:"基本函数类型表达式",slug:"基本函数类型表达式",content:`// 匿名函数类型表达式
let myFunction: (param: string) => number; // 具名函数类型表达式
type MyFunctionType = (param: string) => number;`},{header:"函数类型的组成部分",slug:"函数类型的组成部分",content:`参数类型：函数的每个参数都需要一个类型注解。
返回类型：使用 => 后面跟着返回值类型来指定函数的返回类型。
可选参数：使用 ? 指定可选参数。
剩余参数：使用 ... 定义剩余参数。
this 类型：使用 this 参数来定义函数调用时上下文的类型。 // 带参数和返回类型的函数
let greet: (name: string) => string;
greet = function (name: string): string { return \`Hello, \${name}!\`;
}; // 带可选参数的函数
let log: (message: string, important?: boolean) => void;
log = function (message: string, important: boolean = false): void { if (important) { console.error(message); } else { console.log(message); }
}; // 带剩余参数的函数
let sum: (...numbers: number[]) => number;
sum = function (...numbers: number[]): number { return numbers.reduce((acc, curr) => acc + curr, 0);
}; // 带 \`this\` 类型的函数
type StringArray = Array<string>;
let join: (this: StringArray, separator: string) => string;
join = function (this: StringArray, separator: string): string { return this.join(separator);
};`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%87%BD%E6%95%B0%E9%87%8D%E8%BD%BD.html",title:"",pathLocale:"/",contents:[{header:"函数重载",slug:"函数重载",content:"函数重载（Function Overloading）是一种允许一个函数根据参数的类型和数量有不同的行为的机制。函数重载通过在相同的函数名下提供多个不同的函数签名来实现。"},{header:"函数重载的基本语法",slug:"函数重载的基本语法",content:`greet 函数被重载了两次，一次接受一个 string 类型的参数，另一次接受一个 number 类型的参数。实现签名包含了两个重载签名的逻辑。 function greet(person: string): void;
function greet(person: number): void; function greet(person: string | number): void { if (typeof person === "string") { console.log("Hello, " + person); } else { console.log("Hello, person number " + person); }
}`},{header:"重载签名和实现签名",slug:"重载签名和实现签名",content:""},{header:"重载签名",slug:"重载签名",content:"定义了函数可以被调用的不同方式。它们指定了函数的参数列表和返回类型，但不包含函数的实现。"},{header:"重载签名的例子",slug:"重载签名的例子",content:`// 重载签名
function processInput(input: string): void;
function processInput(input: number): void;
function processInput(input: boolean): void; // 实现签名
function processInput(input: string | number | boolean): void { if (typeof input === "string") { console.log("Processing string input: " + input); } else if (typeof input === "number") { console.log("Processing number input: " + input); } else { console.log("Processing boolean input: " + input); }
}`},{header:"实现签名",slug:"实现签名",content:"是函数的实际实现，它包含了函数的逻辑。实现签名必须与重载签名匹配，但可以包含更多的逻辑。"},{header:"注意事项",slug:"注意事项",content:`重载签名必须在实现签名之前声明。
重载签名的参数类型必须不同，否则 TypeScript 编译器无法区分它们。
实现签名的参数类型应该是重载签名参数类型的联合。
函数的实现应该能够处理所有重载签名定义的情况。`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%89%A9%E4%BD%99%E5%BD%A2%E5%8F%82.html",title:"",pathLocale:"/",contents:[{header:"剩余形参",slug:"剩余形参",content:"剩余参数（Rest Parameters）是一种函数参数的高级用法，它允许你将一个不确定数量的参数表示为一个数组。这在处理函数调用时非常有用，特别是当你需要传递任意数量的参数时。"},{header:"剩余形参",slug:"剩余形参-1",content:`剩余形参使用三个点 ... 开头，它出现在函数参数列表的最后，用于收集所有剩余的参数。sum 函数使用剩余形参 ...numbers 来收集所有传递给它的数字，并使用 reduce 方法计算总和。 function sum(...numbers: number[]): number { return numbers.reduce((acc, curr) => acc + curr, 0);
} console.log(sum(1, 2, 3, 4, 5)); // 输出: 15`},{header:"剩余实参",slug:"剩余实参",content:`剩余实参（Rest Arguments）是 JavaScript 的一个特性，它允许你将函数调用时的实参表示为一个数组。这在 TypeScript 中也可以使用，但它不是类型系统的一部分，而是 JavaScript 的一部分。我们使用剩余实参 ...numbers 来将数组 numbers 作为单独的参数传递给 sum 函数。 function sum(...args: number[]) { return args.reduce((acc, curr) => acc + curr, 0);
} const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 输出: 15`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%84.html",title:"",pathLocale:"/",contents:[{header:"参数解构",slug:"参数解构",content:"参数解构（Parameter Destructuring）是一种方便的功能，允许你在函数调用时直接解构传递给函数的参数。这意味着你可以在函数体内直接访问对象或数组的特定属性或元素，而不需要显式地从参数中提取它们。"},{header:"对象参数解构",slug:"对象参数解构",content:'当你的函数接受一个对象作为参数时，你可以在函数定义时直接解构这个对象。greetUser 函数在参数定义时解构了 User 对象，并且为 email 提供了一个默认值。 interface User { name: string; age: number; email?: string; // 可选属性\n} function greet(user: User) { console.log(`Hello, ${user.name}!`);\n} // 使用解构\nfunction greetUser({ name, age, email = "no email provided" }: User) { console.log(`Hello, ${name}! You are ${age} years old.`); if (email) { console.log(`Your email is ${email}.`); } else { console.log("No email provided."); }\n} const user = { name: "Alice", age: 30, email: "alice@example.com" };\ngreetUser(user);'},{header:"数组参数解构",slug:"数组参数解构",content:`类似地，如果函数接受一个数组作为参数，你也可以解构这个数组 function sum(a: number, b: number, c: number): number { return a + b + c;
} // 使用解构
function sumValues([a, b, c]: [number, number, number]): number { return a + b + c;
} const numbers = [1, 2, 3];
console.log(sumValues(numbers)); // 输出: 6`},{header:"默认参数值",slug:"默认参数值",content:'function initConfig({ width = 800, height = 600, color = "white",\n}: { width?: number; height?: number; color?: string;\n}) { console.log(`Config: width=${width}, height=${height}, color=${color}`);\n} initConfig({ width: 1024 }); // 使用部分参数和默认值'}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"可选参数",slug:"可选参数",content:"可选参数是指在函数调用时不是必须的参数。你可以通过在参数类型后面添加一个问号 ? 来标记一个参数为可选的。这意味着在调用函数时，可以省略这个参数，如果省略了，它将默认为 undefined。"},{header:"可选参数的基本用法",slug:"可选参数的基本用法",content:`function greet(name: string, greeting?: string) { console.log(greeting ? greeting : "Hello", name);
} greet("World"); // 输出: Hello World
greet("World", "Hi"); // 输出: Hi World`},{header:"在回调函数中的可选参数",slug:"在回调函数中的可选参数",content:`当你在处理回调函数时，你可能也想参数是可选的。但是，需要特别注意的是，你不能在函数类型中直接在回调的参数中标记为可选，除非你打算在调用回调时不传递该参数。 // 错误示例
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) { for (let i = 0; i < arr.length; i++) { callback(arr[i], i); }
} 正确的做法是，确保在调用回调时，提供的所有参数都是必需的，或者在函数体内做好处理可选参数的逻辑。 // 正确示例
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) { for (let i = 0; i < arr.length; i++) { // 可能不想提供索引，只调用 callback 与一个参数 if (callback.length === 1) { callback(arr[i]); } else { callback(arr[i], i); } }
}`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E5%9C%A8%E5%87%BD%E6%95%B0%E4%B8%AD%E5%A3%B0%E6%98%8Ethis.html",title:"",pathLocale:"/",contents:[{header:"在函数中声明 this",slug:"在函数中声明-this",content:"可以在函数中声明 this 参数，以指定调用该函数时上下文对象的类型。这通常在对象的方法或回调函数中使用，以确保函数调用时 this 的类型正确。通过在函数中声明 this 参数，你可以提高代码的类型安全性，并减少因 this 引起的错误。"},{header:"在对象方法中声明 this",slug:"在对象方法中声明-this",content:'在对象的方法中使用 this 时，你可以声明 this 参数来指定对象本身的类型。greet 方法声明了 this: User，这告诉 TypeScript this 指的是 User 类型的对象。 interface User { name: string; age: number; greet(this: User): void;\n} const user: User = { name: "Alice", age: 30, greet: function (this: User): void { console.log( `Hello, my name is ${this.name} and I am ${this.age} years old.` ); },\n}; user.greet(); // 输出: Hello, my name is Alice and I am 30 years old.'},{header:"在回调函数中声明 this",slug:"在回调函数中声明-this",content:'可以声明 this 参数，以确保回调函数中的 this 与期望的类型一致。setupPrinter 函数中的回调函数声明了 this: Printer，确保在回调函数中 this 指向 Printer 类型的对象。 interface Printer { print(this: Printer, message: string): void;\n} function setupPrinter(p: Printer) { const printer: Printer = { print: function (this: Printer, message: string) { console.log(message); }, }; window.onload = function (this: Printer) { this.print("The page has finished loading."); }.bind(printer);\n} const myPrinter: Printer = { print: function (this: Printer, message: string) { console.log(`Printing: ${message}`); },\n}; setupPrinter(myPrinter);'},{header:"使用箭头函数和 this 参数",slug:"使用箭头函数和-this-参数",content:'箭头函数不绑定自己的 this，它继承了父执行上下文的 this。因此，当你在类的方法中使用箭头函数时，this 可能不会指向你期望的对象。greet 方法是一个箭头函数，它不绑定自己的 this，因此 this.name 在执行时是 undefined。 class User { name: string; greet: () => void; constructor(name: string) { this.name = name; this.greet = () => { console.log(`Hello, my name is ${this.name}`); }; }\n} const user = new User("Alice");\nuser.greet(); // 输出: Hello, my name is undefined'},{header:"注意事项",slug:"注意事项",content:`声明 this 参数不会改变函数的行为，它只是为编译器提供了类型信息。
在箭头函数中，this 是在函数创建时绑定的，而不是在调用时绑定的，因此箭头函数中通常不需要声明 this 参数。
在使用 bind 或其他函数调用方法（如 call 或 apply）时，需要确保 this 参数的类型正确。`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%9E%84%E9%80%A0%E7%AD%BE%E5%90%8D.html",title:"",pathLocale:"/",contents:[{header:"构造签名",slug:"构造签名",content:"构造签名（Construct Signatures）是接口的一部分，用于描述一个构造函数的参数列表和返回类型。这允许接口能够描述一个类或者一个函数构造器的形态。"},{header:"基本语法",slug:"基本语法",content:`构造签名通常与 new 关键字一起使用，表示创建一个新对象的构造函数。这个接口 Constructable 描述了一个构造函数，它接受一个 string 参数，并返回一个 Object 类型的新实例。 interface Constructable { new (arg: string): Object;
}`},{header:"实现构造签名",slug:"实现构造签名",content:`class MyClass implements Constructable { constructor(arg: string) { // ... }
} const myInstance = new MyClass("Hello, World!");`},{header:"带有多个参数的构造签名",slug:"带有多个参数的构造签名",content:`interface Constructable { new (arg1: string, arg2: number): Object;
}`},{header:"带有可选参数的构造签名",slug:"带有可选参数的构造签名",content:`interface Constructable { new (arg1: string, arg2?: number): Object;
}`},{header:"带有剩余参数的构造签名",slug:"带有剩余参数的构造签名",content:`interface Constructable { new (arg1: string, ...args: number[]): Object;
}`},{header:"泛型构造签名",slug:"泛型构造签名",content:`interface Constructable { new <T>(arg: T): Object;
}`},{header:"多个构造签名",slug:"多个构造签名",content:`interface Constructable { new (config: { a: number }): Object; new (config: { b: string }): Object;
}`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E8%B0%83%E7%94%A8%E7%AD%BE%E5%90%8D.html",title:"",pathLocale:"/",contents:[{header:"调用签名",slug:"调用签名",content:"调用签名（Call Signatures）是接口中用于描述函数类型的一种方式。它们定义了函数的参数列表和返回类型。调用签名使得接口可以作为一种通用的函数类型，用于任何符合调用签名描述的函数。"},{header:"基本语法",slug:"基本语法",content:"接口可以包含一个或多个调用签名。GreetFunction 接口定义了一个调用签名，它指定了函数必须接受一个 string 类型的参数并且没有返回值（void）。 interface GreetFunction { (name: string): void;\n} // 实现这个接口的任何函数都必须接受一个 string 参数并返回 void\nconst greet: GreetFunction = function (name: string): void { console.log(`Hello, ${name}!`);\n};"},{header:"带有可选参数的调用签名",slug:"带有可选参数的调用签名",content:'interface GreetFunction { (name: string, optionalGreeting?: string): void;\n} const greet: GreetFunction = function ( name: string, optionalGreeting?: string\n): void { const greeting = optionalGreeting || "Hello"; console.log(`${greeting}, ${name}!`);\n};'},{header:"带有剩余参数的调用签名",slug:"带有剩余参数的调用签名",content:"interface GreetFunction { (name: string, ...greetings: string[]): void;\n} const greet: GreetFunction = function ( name: string, ...greetings: string[]\n): void { console.log(`Hello, ${name}!`); greetings.forEach((greeting) => console.log(greeting));\n};"},{header:"带有 this 类型的调用签名",slug:"带有-this-类型的调用签名",content:'interface GreetThis { (this: { name: string }): string;\n} const greet: GreetThis = function (): string { return `Hello, ${this.name}!`;\n}; const user = { name: "Alice", greet: greet,\n}; console.log(user.greet.call(user)); // "Hello, Alice!"'},{header:"泛型调用签名",slug:"泛型调用签名",content:`interface GenericGreet { <T>(value: T): T;
} const genericGreet: GenericGreet = function <T>(value: T): T { return value;
};`},{header:"多个调用签名",slug:"多个调用签名",content:"接口可以有多个调用签名，但它们必须有不同的参数列表。 interface GreetFunction { (name: string): void; (name: string, greeting: string): string;\n} const greet: GreetFunction = function ( name: string, greeting?: string\n): string | void { if (greeting) { return `${greeting}, ${name}!`; } else { console.log(`Hello, ${name}!`); }\n};"},{header:"注意事项",slug:"注意事项",content:`调用签名不能有同名参数。
调用签名的参数类型和返回类型必须完全匹配。
调用签名可以与其他属性或方法共存于同一个接口中。`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"交叉类型(&)",slug:"交叉类型",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
// C = { name: string; age: number; }`},{header:"使用场景",slug:"使用场景",content:"扩展接口：当你想要为接口添加额外的属性或方法时，交叉类型可以帮助你模块化和重用代码。 组合函数签名：你可以使用交叉类型来组合多个函数签名，这样函数可以接受不同的参数或者返回多个类型。 实现混入（Mixins）：在 TypeScript 中，混入是一种设计模式，它允许将多个类的功能组合到一个类中。交叉类型是实现混入的一种方式。 增强对象类型：当你需要确保一个变量满足多个类型的所有属性时，交叉类型非常有用。"},{header:"交叉类型与联合类型",slug:"交叉类型与联合类型",content:`type A = { name: string };
type B = { age: number };
type C = A | B;
// C = { name: string; } | { age: number; }
const c1: C = { name: "张三" };
const c2: C = { age: 18 };`},{header:"交叉类型与接口",slug:"交叉类型与接口",content:`interface A { name: string;
}
interface B { age: number;
}
interface C extends A, B { // C = { name: string; age: number; }
}`},{header:"交叉类型与函数",slug:"交叉类型与函数",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const fn = (a: A, b: B): C => { return { ...a, ...b };
};
const result = fn({ name: "张三" }, { age: 18 });
console.log(result);`},{header:"交叉类型与类",slug:"交叉类型与类",content:`class A { name: string; constructor(name: string) { this.name = name; }
}
class B { age: number; constructor(age: number) { this.age = age; }
}
class C extends A, B { constructor(name: string, age: number) { super(name); super(age); }
}
const c = new C('张三', 18);
console.log(c);`},{header:"交叉类型与枚举",slug:"交叉类型与枚举",content:`enum A { a = 1, b = 2,
}
enum B { c = 3, d = 4,
}
enum C { e = 5, f = 6,
}
type D = A & B & C;
// D = { a: 1; b: 2; c: 3; d: 4; e: 5; f: 6; }`},{header:"交叉类型与类型别名",slug:"交叉类型与类型别名",content:`type A = { name: string }; // A = { name: string; }
type B = { age: number }; // B = { age: number; }
type C = A & B; // C = { name: string; age: number; }`},{header:"交叉类型与泛型",slug:"交叉类型与泛型",content:`type A<T> = T & { name: string }; // A = <T>(T & { name: string; })
const a: A<number> = { name: "张三", age: 18 };`},{header:"交叉类型与类型断言",slug:"交叉类型与类型断言",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const d = c as A;
console.log(d);`},{header:"交叉类型与类型守卫",slug:"交叉类型与类型守卫",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
if (c.name) { console.log(c.name);
}
if (c.age) { console.log(c.age);
}`},{header:"交叉类型与类型推断",slug:"交叉类型与类型推断",content:`type A = { name: string };
type B = { age: number };
type C = A & B; // C = { name: string; age: number; }
const c: C = { name: "张三", age: 18 };
const d = c.name;
console.log(d);`},{header:"交叉类型与类型检查",slug:"交叉类型与类型检查",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
if (typeof c.name === "string") { console.log(c.name);
}
if (typeof c.age === "number") { console.log(c.age);
}`},{header:"交叉类型与类型转换",slug:"交叉类型与类型转换",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const d = c as A;
console.log(d);`},{header:"交叉类型与类型合并",slug:"交叉类型与类型合并",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const d = c as A;
console.log(d);`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E5%B1%9E%E6%80%A7%E4%BF%AE%E9%A5%B0%E7%AC%A6.html",title:"",pathLocale:"/",contents:[{header:"属性修饰符",slug:"属性修饰符",content:"对象类型的属性可以被赋予不同的修饰符，以定义它们的特性，如是否可选、是否只读等。"},{header:"可选属性",slug:"可选属性",content:`interface Person { name: string; age?: number; // 可选属性，不需要在所有对象中都提供
} const person1: Person = { name: "Alice", // age 属性被省略，将被赋值为 undefined
}; const person2: Person = { name: "Bob", age: 30, // 提供了 age 属性
};`},{header:"必需属性",slug:"必需属性",content:`interface Person { name: string; // 必需属性 age: number; // 必需属性
} const person: Person = { name: "Alice", age: 30,
};`},{header:"只读属性",slug:"只读属性",content:`interface Point { readonly x: number; readonly y: number;
} const point: Point = { x: 10, y: 20,
};
// Error: Cannot assign to 'x' because it is a read-only property.
// point.x = 5;`},{header:"属性修饰符的组合",slug:"属性修饰符的组合",content:`interface Person { name: string; age?: number; // 可选属性 readonly id: number; // 只读属性
} const person: Person = { name: "Alice", id: 1, // age 属性是可选的，可以省略
};
// Error: Cannot assign to 'id' because it is a read-only property.
// person.id = 2;`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%89%A9%E5%B1%95%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"扩展类型",slug:"扩展类型",content:"对象类型的扩展可以通过接口（interface）和类型别名（type）来实现。这两种方式都允许你基于现有的类型定义新的类型，从而增加新的属性或方法。"},{header:"使用 interface 扩展类型",slug:"使用-interface-扩展类型",content:`接口可以通过 extends 关键字来扩展一个或多个接口，从而继承它们的属性。 interface Animal { name: string;
} interface Bear extends Animal { honey: boolean;
} const bear: Bear = { name: " Winnie", honey: true,
};`},{header:"使用 type 扩展类型",slug:"使用-type-扩展类型",content:`类型别名 type 可以使用交叉类型（&）来组合多个类型。 type Animal = { name: string;
}; type Bear = Animal & { honey: boolean;
}; const bear: Bear = { name: " Winnie", honey: true,
};`},{header:"扩展现有类型",slug:"扩展现有类型",content:`如果你想为现有的类型（如数组）添加新的属性，可以使用声明合并。例如，为数组添加一个 last 属性。 interface Array<T> { last: T;
} let nums: number[] = [1, 2, 3];
console.log(nums.last); // 3`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%BA%A2%E5%87%BA%E5%B1%9E%E6%80%A7%E6%A3%80%E6%9F%A5.html",title:"",pathLocale:"/",contents:[{header:"溢出属性检查",slug:"溢出属性检查",content:`对象类型的溢出属性检查（Excess Property Checks）是一种类型安全特性，它会在对象字面量被赋值给变量或者作为参数传递给函数时，检查对象字面量是否包含目标类型未定义的属性。如果对象字面量有目标类型中不存在的属性，编译器将会报错。 例如，如果有一个接口 SquareConfig，它定义了 color 和 width 属性，然后你尝试创建一个对象字面量并将其赋值给一个 SquareConfig 类型的变量，但对象字面量中包含了一个 SquareConfig 未定义的属性，如下所示： interface SquareConfig { color?: string; width?: number;
} function createSquare(config: SquareConfig): { color: string; area: number } { return { color: config.color || "red", area: config.width ? config.width * config.width : 20, };
}
// 错误：属性 'colour' 不存在于类型 'SquareConfig'。
let mySquare = createSquare({ colour: "red", width: 100 }); 在这个例子中，对象字面量 { colour: "red", width: 100 } 包含了一个 SquareConfig 接口中未定义的属性 colour，所以 TypeScript 编译器会报错，指出 'colour' does not exist in type 'SquareConfig'
。`},{header:"要解决这个问题，你可以做以下几件事情之一：",slug:"要解决这个问题-你可以做以下几件事情之一",content:`修正属性名，确保对象字面量中的属性名称与目标类型中的属性名称相匹配。
如果确实需要传递额外的属性，可以修改目标类型的定义，以包含这些额外的属性。
使用类型断言，将对象字面量断言为任意类型，来绕过溢出属性检查（但这种做法会失去类型安全）。`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/any.html",title:"",pathLocale:"/",contents:[{header:"any(建议尽量避免)",slug:"any-建议尽量避免",content:`// 隐式的any类型
let a;
a = 10;
a = "str";
a = true;
// 隐式的定义变量并声明类型
let b = 10;`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/array.html",title:"",pathLocale:"/",contents:[{header:"array",slug:"array",content:`let arr1: string[];
let arr2: Array<number>;
let arr3: Array<any>;`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/BigInt.html",title:"",pathLocale:"/",contents:[{header:"BigInt",slug:"bigint",content:"BigInt 是一种特殊的数据类型，用于表示大于 2^53 - 1 的整数，这个值是 JavaScript 中可以用 Number 表示的最大整数。BigInt 可以表示任意大的整数，非常适合用于处理大整数运算，如加密算法、大数据处理等场景。"},{header:"创建 BigInt",slug:"创建-bigint",content:`可以通过在整数后面添加 n 后缀，或者使用 BigInt() 函数创建 BigInt。 // 使用 n 后缀
const bigNumber1 = 123456789012345678901234567890n;
// 使用 BigInt 函数
const bigNumber2 = BigInt("123456789012345678901234567890");`},{header:"BigInt 运算",slug:"bigint-运算",content:`BigInt 支持标准的算术运算符，如 +, -, *, / 等 const sum = bigNumber1 + bigNumber2;
const difference = bigNumber1 - bigNumber2;
const product = bigNumber1 * bigNumber2;
const quotient = bigNumber1 / bigNumber2;`},{header:"类型检查",slug:"类型检查",content:`使用 typeof 检查 BigInt 类型时，返回值为 "bigint"。 typeof 10n === "bigint"; // true
typeof BigInt(10) === "bigint"; // true`},{header:"注意事项",slug:"注意事项",content:`BigInt 不能与 Number 类型混合运算，必须显式转换。 BigInt 不支持 Math 库中的函数。 转换 BigInt 为 Number 可能会导致精度丢失。 const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);
const hugeString = BigInt("9007199254740991");
console.log(theBiggestInt === alsoHuge); // true
console.log(theBiggestInt === hugeString); // true const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
const maxPlusOne = previousMaxSafe + 1n;
const multi = previousMaxSafe * 2n;
const subtr = multi - 10n;
const mod = multi % 10n;
const bigN = 2n ** 54n;`},{header:"限制与建议",slug:"限制与建议",content:"精度问题：在处理非常大的数值时，使用 BigInt 可以避免 Number 类型的精度问题。 性能考虑：BigInt 操作通常比 Number 操作慢，因为它们需要自定义实现且缺乏本地硬件支持。 环境支持：确保你的运行环境支持 BigInt，例如，较老的浏览器或 Node.js 版本可能不支持。"}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/enum.html",title:"",pathLocale:"/",contents:[{header:"enmu(枚举: 把所有的可能的情况都列出来)",slug:"enmu-枚举-把所有的可能的情况都列出来",content:"枚举（Enums）是一种特殊的类型，它为一组数值赋予了更加友好的名字。枚举可以被用来定义命名的常数集合，这使得代码更加易读和易于维护。"},{header:"普通枚举",slug:"普通枚举",content:`enmu Sex{ Male, // 不写值的话, 自动转成0 Female = 1 // 赋值为1
}
let i: { name: string, sex: Sex };
i = { name: 'ths', sex: Sex.Male // 自动转成0了
}`},{header:"带字符串值的枚举",slug:"带字符串值的枚举",content:`enum Color { Red = "FF0000", Green = "00FF00", Blue = "0000FF",
} console.log(Color.Red); // "FF0000"
console.log(Color[Color.Red]); // 0`},{header:"带数字值的枚举",slug:"带数字值的枚举",content:`enum Color { Red = 1, Green = 2, Blue = 3,
} console.log(Color.Red); // 1
console.log(Color.Green); // 2
console.log(Color.Blue); // 3`},{header:"常数成员和计算成员",slug:"常数成员和计算成员",content:`enum Color { Red, Green, Blue = Color.Red * 2, DarkRed = Color.Red + 10,
} console.log(Color.Blue); // 2
console.log(Color.DarkRed); // 12`},{header:"反向映射",slug:"反向映射",content:`enum Color { Red = "FF0000", Green = "00FF00", Blue = "0000FF",
}
console.log(Color["FF0000"]); // Color.Red`},{header:"枚举作为类型",slug:"枚举作为类型",content:"let c: Color = Color.Green;"},{header:"字符串枚举",slug:"字符串枚举",content:`enum Status { Pending = "PENDING", Approved = "APPROVED", Rejected = "REJECTED",
} function printStatus(status: Status) { console.log(status);
} printStatus(Status.Approved); // "APPROVED"`},{header:"数字枚举",slug:"数字枚举",content:`enum NumberEnum { One, Two, Three,
} console.log(NumberEnum.One); // 0
console.log(NumberEnum.Two); // 1
console.log(NumberEnum.Three); // 2`},{header:"外部枚举",slug:"外部枚举",content:`// app.ts
import { Color } from "./colors";
// colors.ts
export enum Color { Red = "FF0000", Green = "00FF00", Blue = "0000FF",
}
console.log(Color.Red); // "FF0000"`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/interface%E5%92%8Ctype%E5%8C%BA%E5%88%AB.html",title:"",pathLocale:"/",contents:[{header:"interface 和 type 区别",slug:"interface-和-type-区别",content:"类型别名和接口非常相似，在很多情况下你可以在它们之间自由选择。interface 的几乎所有功能都在 type 中可用，主要区别在于无法重新打开类型以添加 ​​ 新属性，而接口始终可扩展。"}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/interface%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"interface 接口",slug:"interface-接口",content:"接口（Interfaces）是一种强大的方式，用于定义对象的结构，它是一种对类型而不是对值的描述。接口可以被理解为对象的蓝图，它规定了对象必须具有的结构和类型，但不实现它们。接口主要用于类型检查和确保对象符合预期的形状"},{header:"基本语法",slug:"基本语法",content:`Person 接口，它要求任何实现这个接口的对象都必须有 name（字符串类型）和 age（数字类型）两个属性 interface Person { name: string; // 接口中所有的属性不能赋值 age: number; say(): void; // 不能有方法体, 接口只定义对象的结构而没有实际的值, 类似抽象方法
}
interface Person{ // 接口可以重名 sex: string;
} let p1: Person = { name: 'ths', age: 18, say(): void //或者 say(){ console.log('11111') }; // 再或者 say:()=>{ console.log('11111') }
}`},{header:"实现接口",slug:"实现接口",content:`User 类实现了 Person 接口，这意味着 User 类的实例必须包含 name 和 age 属性 /* 定义类时, 可以用类去实现一个接口, 用到关键字 implements
接口其实对类进行了限制，与抽象类很像，区别在于抽象类中可以有抽象方法也可以有其他的，
接口内只能有抽象方法
另外的区别在于使用抽象类时使用extends, 接口使用implements*/
class User implements Person { name: string; age: number; constructor(name: string, age: number) { this.name = name; this.age = age; }
}`},{header:"只读属性(readonly)",slug:"只读属性-readonly",content:`接口也可以定义只读属性，这些属性必须在初始化时赋值，以后不能修改 interface Point { readonly x: number; readonly y: number;
}`},{header:"函数类型",slug:"函数类型",content:`接口不仅可以用于对象类型，还可以用来定义函数类型 interface SearchFunction { (source: string, subString: string): boolean;
}`},{header:"扩展接口",slug:"扩展接口",content:`interface Person { name: string; age: number;
} interface Logger { log(message: string): void;
} interface PersonLogger extends Person, Logger { logName(): void;
} class ConcretePersonLogger implements PersonLogger { name: string; age: number; constructor(name: string, age: number) { this.name = name; this.age = age; } log(message: string): void { console.log(message); } logName(): void { console.log(this.name); }
}`},{header:"索引签名",slug:"索引签名",content:`interface StringArray { [index: number]: string;
} let myArray: StringArray;
myArray = ["Bob", "Fred"]; let myStr: string = myArray[0];`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/tuple.html",title:"",pathLocale:"/",contents:[{header:"tuple",slug:"tuple",content:`元组, 元组就是长度固定的数组, 最好不要太长, 太长不如用数组了 let tarr: [string, number];
tarr = ["str", 123];`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/type(%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D).html",title:"",pathLocale:"/",contents:[{header:"type(类型别名)",slug:"type-类型别名",content:`类型别名允许你为复杂的类型定义创建简洁的名称，从而简化代码 type UserID = number; // 类型别名
function getUserByID(id: UserID): User { // 实现根据 ID 获取用户 console.log("Fetching user with ID:", id); return {} as User; // 模拟返回用户
}
type User = { id: number; name: string; roles: string[]; isActive: boolean; metadata?: { createdAt: Date; updatedAt?: Date; };
}; let user: User = { id: 1, name: "Alice", roles: ["admin"], isActive: true, metadata: { createdAt: new Date(), },
};`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"交叉类型(&)",slug:"交叉类型",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
// C = { name: string; age: number; }`},{header:"使用场景",slug:"使用场景",content:"扩展接口：当你想要为接口添加额外的属性或方法时，交叉类型可以帮助你模块化和重用代码。 组合函数签名：你可以使用交叉类型来组合多个函数签名，这样函数可以接受不同的参数或者返回多个类型。 实现混入（Mixins）：在 TypeScript 中，混入是一种设计模式，它允许将多个类的功能组合到一个类中。交叉类型是实现混入的一种方式。 增强对象类型：当你需要确保一个变量满足多个类型的所有属性时，交叉类型非常有用。"},{header:"交叉类型与联合类型",slug:"交叉类型与联合类型",content:`type A = { name: string };
type B = { age: number };
type C = A | B;
// C = { name: string; } | { age: number; }
const c1: C = { name: "张三" };
const c2: C = { age: 18 };`},{header:"交叉类型与接口",slug:"交叉类型与接口",content:`interface A { name: string;
}
interface B { age: number;
}
interface C extends A, B { // C = { name: string; age: number; }
}`},{header:"交叉类型与函数",slug:"交叉类型与函数",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const fn = (a: A, b: B): C => { return { ...a, ...b };
};
const result = fn({ name: "张三" }, { age: 18 });
console.log(result);`},{header:"交叉类型与类",slug:"交叉类型与类",content:`class A { name: string; constructor(name: string) { this.name = name; }
}
class B { age: number; constructor(age: number) { this.age = age; }
}
class C extends A, B { constructor(name: string, age: number) { super(name); super(age); }
}
const c = new C('张三', 18);
console.log(c);`},{header:"交叉类型与枚举",slug:"交叉类型与枚举",content:`enum A { a = 1, b = 2,
}
enum B { c = 3, d = 4,
}
enum C { e = 5, f = 6,
}
type D = A & B & C;
// D = { a: 1; b: 2; c: 3; d: 4; e: 5; f: 6; }`},{header:"交叉类型与类型别名",slug:"交叉类型与类型别名",content:`type A = { name: string }; // A = { name: string; }
type B = { age: number }; // B = { age: number; }
type C = A & B; // C = { name: string; age: number; }`},{header:"交叉类型与泛型",slug:"交叉类型与泛型",content:`type A<T> = T & { name: string }; // A = <T>(T & { name: string; })
const a: A<number> = { name: "张三", age: 18 };`},{header:"交叉类型与类型断言",slug:"交叉类型与类型断言",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const d = c as A;
console.log(d);`},{header:"交叉类型与类型守卫",slug:"交叉类型与类型守卫",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
if (c.name) { console.log(c.name);
}
if (c.age) { console.log(c.age);
}`},{header:"交叉类型与类型推断",slug:"交叉类型与类型推断",content:`type A = { name: string };
type B = { age: number };
type C = A & B; // C = { name: string; age: number; }
const c: C = { name: "张三", age: 18 };
const d = c.name;
console.log(d);`},{header:"交叉类型与类型检查",slug:"交叉类型与类型检查",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
if (typeof c.name === "string") { console.log(c.name);
}
if (typeof c.age === "number") { console.log(c.age);
}`},{header:"交叉类型与类型转换",slug:"交叉类型与类型转换",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const d = c as A;
console.log(d);`},{header:"交叉类型与类型合并",slug:"交叉类型与类型合并",content:`type A = { name: string };
type B = { age: number };
type C = A & B;
const c: C = { name: "张三", age: 18 };
const d = c as A;
console.log(d);`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"函数",slug:"函数",content:`// 参数类型注解
function greet(name: string) { console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("12"); // 返回值类型注解
async function getFavoriteNumber(): Promise<number> { return 26;
} // 匿名函数(ts根据上下文推断)
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) { console.log(s.toUpperCase());
});
names.forEach((s) => { console.log(s.toUpperCase());
});`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E5%A3%B0%E6%98%8E%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"声明类型",slug:"声明类型",content:`类型
例子
描述 number
1, 2, 3, 4
任意数字 string
'hello'
任意字符串 boolean
true, false
布尔值 true 或 false 字面量
其本身
限制变量的取值只能是字面量 any
any
任意类型 unkown
unknown
未知类型，类型安全的 any void
void
没有值，或者 undefined array
[1, 2, 3]
任意数字数组 tuple
[1, 'a']
固定长度数组 enum
enum{A,B}
枚举类型 object
{name:'孙悟空'}
任意对象 null
null
只能是 null never
never
永不发生`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E5%AD%97%E9%9D%A2%E9%87%8F.html",title:"",pathLocale:"/",contents:[{header:"字面量",slug:"字面量",content:"字面量类型是指直接给出具体值的类型。它们通常用于那些只能有有限个具体值的变量。字面量类型可以是字符串字面量类型、数字字面量类型或者其他原始数据类型的字面量。"},{header:"使用场景",slug:"使用场景",content:`字面量类型在以下场景中非常有用： 限制变量的值：确保变量只能是某些特定的值。
类型守卫：与类型谓词结合使用，进行类型检查。
函数重载：用于区分函数的重载版本。
枚举类型的替代：在某些情况下，字面量类型可以作为枚举类型的替代。`},{header:"字符串字面量类型",slug:"字符串字面量类型",content:`Easing 是一个字符串字面量类型，它只能取 "ease-in"、"ease-out" 或 "ease-in-out" 这三个值。 type Easing = "ease-in" | "ease-out" | "ease-in-out"; function animate(element: Element, easing: Easing) { if (easing === "ease-in") { // ... } else if (easing === "ease-out") { // ... } else if (easing === "ease-in-out") { // ... } else { // Error: Type 'never' is not assignable to type 'Easing' const error: never = easing; }
}`},{header:"数字数面量类型",slug:"数字数面量类型",content:`StatusCode 是一个数字字面量类型，它只能取 200、301、404 或 500 这几个值。 type StatusCode = 200 | 301 | 404 | 500; function handleResponse(status: StatusCode) { if (status === 200) { console.log("OK"); } else if (status === 301) { console.log("Moved Permanently"); } else if (status === 404) { console.log("Not Found"); } else if (status === 500) { console.log("Internal Server Error"); } else { // Error: Type 'never' is not assignable to type 'StatusCode' const error: never = status; }
}`},{header:"布尔字面量类型(通常用于类型守卫)",slug:"布尔字面量类型-通常用于类型守卫",content:`isStringOrNumber 是一个类型谓词函数，它返回一个布尔值来告诉 TypeScript value 是一个字符串或数字。 function isStringOrNumber(value: string | number): value is string | number { return typeof value === "string" || typeof value === "number";
} if (isStringOrNumber("Hello")) { console.log("It's a string!");
}`},{header:"模板字面量类型",slug:"模板字面量类型",content:'模板字面量类型用于指定字符串必须是特定的格式\nName 是一个模板字面量类型，它只能是 "Hello, ${string}!" 或 "Goodbye, ${string}!" 格式的字符串。 type Name = `Hello, ${string}!` | `Goodbye, ${string}!`; function greet(name: Name) { console.log(name);\n} greet(`Hello, Alice!`); // OK\ngreet(`Goodbye, Bob!`); // OK\ngreet(`Hi, Charlie!`); // Error'}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E5%AF%B9%E8%B1%A1.html",title:"",pathLocale:"/",contents:[{header:"对象",slug:"对象",content:`// ;分割
function printCoord(pt: { x: number; y: number }) { console.log("The coordinate's x value is " + pt.x); console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 }); // 可选属性(?)
function printName(obj: { first: string; last?: string }) { // ...
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" }); 在 JavaScript 中，如果你访问一个不存在的属性，你将获得值 undefined 而不是运行时错误。因此，当你从可选属性中读取数据时，你必须在使用它之前检查 undefined。 function printName(obj: { first: string; last?: string }) { // 报错：'obj.last' is possibly 'undefined'. console.log(obj.last.toUpperCase());
} // 解决方案一
function printName(obj: { first: string; last?: string }) { if (obj.last !== undefined) { console.log(obj.last.toUpperCase()); }
}
// 解决方案二
function printName(obj: { first: string; last?: string }) { console.log(obj.last?.toUpperCase());
} [propName: string]可以定义多个不确定的属性
let c: { name: string; [propName: string]: any };
c = { name: "ths", age: 18, sex: 20, isTrue: false }; 函数类型 let d: (a: number, b: number) => number;
d = function (num1, num2): number { return num1 + num2;
};`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E7%B1%BB%E5%9E%8B%E5%AE%88%E5%8D%AB.html",title:"",pathLocale:"/",contents:[{header:"类型守卫",slug:"类型守卫",content:"类型守卫（Type Guards）是一种方式，用于在运行时检查和缩小变量的类型。当你在处理联合类型或交叉类型时，类型守卫特别有用，因为它们允许你在执行操作之前确定变量的确切类型。"},{header:"基本类型守卫",slug:"基本类型守卫",content:`基本类型守卫是通过使用类型谓词来实现的。类型谓词是一个表达式，它在编译时不会做任何改变，但在运行时会帮助 TypeScript 缩小变量的类型。isNumber 和 isString 函数都是类型谓词。它们返回一个布尔值，告诉 TypeScript 引擎 x 参数的类型 function isNumber(x: number | string): x is number { return typeof x === "number";
} function isString(x: number | string): x is string { return typeof x === "string";
}`},{header:"使用类型守卫",slug:"使用类型守卫",content:`let data: number | string = Math.random() > 0.5 ? "Hello" : 10; if (isNumber(data)) { console.log(data.toFixed(2)); // 这里的 data 被缩小为 number 类型
} else if (isString(data)) { console.log(data.toUpperCase()); // 这里的 data 被缩小为 string 类型
}`},{header:"用户自定义类型守卫",slug:"用户自定义类型守卫",content:`用户自定义类型守卫通常与接口或类型别名结合使用,在这个例子中，isBird 是一个类型谓词函数，它检查 animal 是否具有 fly 方法，从而判断它是否为 Bird 类型。 interface Bird { fly(): void; layEggs(): void;
} interface Fish { swim(): void; layEggs(): void;
} function getAnimal(): Bird | Fish { return Math.random() > 0.5 ? { fly, layEggs } : { swim, layEggs };
} function isBird(animal: Bird | Fish): animal is Bird { return (animal as Bird).fly !== undefined;
}`},{header:"类类型守卫",slug:"类类型守卫",content:`类类型守卫是通过检查对象是否为某个类的实例来实现的,isBird 使用 instanceof 操作符来检查 animal 是否为 Bird 的实例。 class Bird { fly() { console.log("Flying"); }
} class Fish { swim() { console.log("Swimming"); }
} function getAnimal() { return Math.random() > 0.5 ? new Bird() : new Fish();
} function isBird(animal: Bird | Fish): animal is Bird { return animal instanceof Bird;
}`},{header:"在类中使用类型守卫",slug:"在类中使用类型守卫",content:`类本身也可以实现类型守卫 class Bird { fly() { console.log("Flying"); } isBird() { return true; }
} class Fish { swim() { console.log("Swimming"); } isBird() { return false; }
} function isBird(animal: Bird | Fish): animal is Bird { return animal.isBird();
}`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E7%B1%BB%E5%9E%8B%E6%96%AD%E8%A8%80.html",title:"",pathLocale:"/",contents:[{header:"类型断言(慎用,避免破坏类型安全)",slug:"类型断言-慎用-避免破坏类型安全",content:"类型断言（Type Assertions）是一种告诉编译器你比它更了解某个变量的类型的机制。类型断言可以用来手动指定编译器可能不确定的变量的类型"},{header:"类型断言的基本语法",slug:"类型断言的基本语法",content:'const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;'},{header:"<>语法",slug:"语法",content:'const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");'},{header:"使用场景",slug:"使用场景",content:"类型断言通常用在以下场景： 当你知道编译器是错误的时候：有时候，你可能比编译器更了解某个函数的返回值。 当你想要绕过编译器的类型检查时：有时候，你可能想要执行一些不安全的类型操作。 与第三方库交互时：当使用 TypeScript 与 JavaScript 库时，你可能需要告诉编译器某个值的确切类型。"},{header:"示例",slug:"示例",content:`let someValue: any = "this is a string"; // 告诉 TypeScript 我们知道 someValue 是一个字符串
let strLength: number = (someValue as string).length;`},{header:"与接口一起使用",slug:"与接口一起使用",content:`我们通过类型断言来确定 pet 的具体类型，然后调用相应的方法 interface Bird { fly(): void; layEggs(): void;
} interface Fish { swim(): void; layEggs(): void;
} function getSmallPet(): Bird | Fish { // ...
} const pet = getSmallPet();
if (pet.swim) { (pet as Fish).swim();
} else { (pet as Bird).fly();
}`},{header:"断言一个变量为 any 类型",slug:"断言一个变量为-any-类型",content:`当你从 JavaScript 代码迁移到 TypeScript 时，或者当你处理一个大型代码库中的遗留代码时，你可能会遇到 any 类型。类型断言可以用来将 any 类型变量断言为更具体的类型,在这个例子中，我们将 any 类型的 value 断言为 string 类型，然后安全地访问其 length 属性。 let value: any = "Hello";
let length: number = (value as string).length;`},{header:"断言函数返回值类型",slug:"断言函数返回值类型",content:`我们断言 getContent 函数的返回值为 string 类型 function getContent(): any { // ...
} let content: string = getContent() as string;`},{header:"非空断言运算符(后缀！)",slug:"非空断言运算符-后缀",content:`function liveDangerously(x?: number | null) { // No error console.log(x!.toFixed());
}`}]},{path:"/web/Ts/%E5%B8%B8%E7%94%A8%E7%B1%BB%E5%9E%8B/%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"联合类型(|)",slug:"联合类型",content:""},{header:"定义联合类型",slug:"定义联合类型",content:"type StringOrNumber = string | number;"},{header:"使用联合类型",slug:"使用联合类型",content:`当你在函数中使用联合类型时，你可以传递任意一种指定的类型 function printId(id: StringOrNumber): void { console.log(\`Your ID is: \${id}\`);
} printId(123); // 传递一个数字
printId("abc"); // 传递一个字符串 如果你有联合 string | number，则不能使用仅在 string 上可用的方法 function printId(id: number | string) { console.log(id.toUpperCase()); // Property 'toUpperCase' does not exist on type 'string | number'. // Property 'toUpperCase' does not exist on type 'number'.
} // 解决方案一
function printId(id: number | string) { if (typeof id === "string") { console.log(id.toUpperCase()); } else { console.log(id); }
} // 解决方案二
function welcomePeople(x: string[] | string) { if (Array.isArray(x)) { console.log("Hello, " + x.join(" and ")); } else { console.log("Welcome lone traveler " + x); }
} 有时你会有一个联合，所有成员都有共同点。例如，数组和字符串都有一个 slice 方法。如果联合中的每个成员都有一个共同的属性，则可以使用该属性而不用缩小类型 function getFirstThree(x: number[] | string) { return x.slice(0, 3);
}`},{header:"类型保护",slug:"类型保护",content:'在使用联合类型时，你可能需要确定变量的具体类型，以便执行特定类型的操作。TypeScript 提供了类型保护的概念，允许你在运行时检查并缩小类型 function printId(id: StringOrNumber): void { if (typeof id === "string") { // 在这个分支中，id 被缩小为 string 类型 console.log(`Your string ID is: ${id.toUpperCase()}`); } else { // 在这个分支中，id 被缩小为 number 类型 console.log(`Your numeric ID is: ${id}`); }\n}'},{header:"例子",slug:"例子",content:`type UserResponse = string | { id: number }; function getUser(): UserResponse { // 这里只是示例，实际逻辑可能更复杂 return Math.random() > 0.5 ? "Alice" : { id: 123 };
} const user = getUser();
if (typeof user === "string") { console.log("User name:", user);
} else { console.log("User ID:", user.id);
}`},{header:"联合类型和类型别名",slug:"联合类型和类型别名",content:'联合类型经常与类型别名一起使用，以简化复杂类型的声明。例如，你可以为一个对象的多个可能形状创建一个联合类型 type User = { id: number; name: string; email?: string;\n}; type Admin = { id: number; name: string; role: string;\n}; type Person = User | Admin; function printPersonDetails(person: Person): void { if ("role" in person) { console.log(`Admin ${person.name}, Role: ${person.role}`); } else { console.log(`User ${person.name}`); }\n}'}]},{path:"/web/Ts/%E6%A8%A1%E5%9D%97/ts%E7%BC%96%E8%AF%91%E9%80%89%E9%A1%B9.html",title:"",pathLocale:"/",contents:[{header:"ts 编译选项",slug:"ts-编译选项",content:""},{header:"include 指定需要编译的文件",slug:"include-指定需要编译的文件",content:'include: ["./src/**/*"] // (src: src 目录下 \\*_: 任意目录 _: 任意文件)'},{header:"exclude 排除不需要编译的文件",slug:"exclude-排除不需要编译的文件",content:`// (默认值: ["node_modules", "bower_components", "jspm_packages"])
exclude: ["./src/assets.....自己写"]`},{header:"files: [ ... 文件名 ]",slug:"files-文件名",content:`//只有文件少的时候, 用一个数组来统计编译的文件就行了
files: ["./src/index.ts", "./src/other.ts"]`},{header:"compilerOptions 配置选项",slug:"compileroptions-配置选项",content:`"compilerOptions":{ "target": "es5", // 指定编译后的版本 "module": "es6", // 指定要使用的模块化的规范 commonjs es6 "lib": ["dom", "dom.iterable", "esnext"], // 指定项目中用到的库 es6 promise... "outDir": "./dist", // 指定输出目录 "outFile": "./dist/app.js", // 将代码合并为一个文件 "allowJs": false, // 是否对js文件进行编译, 默认为false "checkJs": false, // 是否检查js语法符合规范, 默认为false "removeComments": true, // 是否移除注释, 默认为false "noEmit": false, // 不生成编译后所产生的js文件, 默认为false "noEmitOnError": false, // 报错时不生成编译文件, 默认为false "awaysStrict": false, // 设置编译后的文件是否使用严格模式, 默认为false "noImplicitAny": false, // 不允许隐式的any类型设置, 默认为false "noImplicitThis": false, // 不允许不明确类型的this, 默认为false "strictNullChecks": false, // 严格的检查空值, 默认为false "strict": false // 所有的检查的总开关, 如果设置为true, 所有的都打开了就不用写了
}`}]},{path:"/web/Ts/%E7%B1%BB/abstract%E6%8A%BD%E8%B1%A1%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"abstract 抽象类",slug:"abstract-抽象类",content:`abstract class Animal { // 抽象类: 专门用来给别人继承的, 没有其他作作用, 不能创建对象 name: string; constructor(name: string, age: number) { this.name = name; } abstract say(): void; // 抽象方法, 必须被字类重写
}
class Dog extends Animal { // 抽象方法重写 say() { super.say(); }
}
const dog = new Dog("小黑");
dog.say();`}]},{path:"/web/Ts/%E7%B1%BB/calss%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"calss 类",slug:"calss-类",content:`class Person { name: string; // 只能创建对象在对象身上进行访问 static age: number; // 静态属性: 不用new对象就可以被类访问的属性 Person.age readonly sex: string; // readonly: 只读属性 say() { console.log("..."); }
}`}]},{path:"/web/Ts/%E7%B1%BB/extends%E7%BB%A7%E6%89%BF.html",title:"",pathLocale:"/",contents:[{header:"extends 继承",slug:"extends-继承",content:`class Animal { name: string; age: number; constructor(name: string, age: number) { this.name = name; this.age = age; } say() { console.log("动物在叫!"); }
}
class Dog extends Animal { // 继承后字类将会有父类的所有属性和方法 run() { console.log("小狗边跑边叫!"); }
}
class Cat extends Animal { // 继承后字类将会有父类的所有属性和方法 say() { // 方法的重写: 子类会覆盖符类中的say方法 console.log("小猫喵喵喵!"); }
}
new dog() = new Dog("小黑", 18);
dog.run();`}]},{path:"/web/Ts/%E7%B1%BB/super%E5%85%B3%E9%94%AE%E5%AD%97.html",title:"",pathLocale:"/",contents:[{header:"super 关键字",slug:"super-关键字",content:`class Animal { name: string; constructor(name: string, age: number) { this.name = name; } say() { console.log("动物在叫!"); }
}
class Dog extends Animal { // 继承后字类将会有父类的所有属性和方法 age: number; constructor(name: string, age: number) { // name是来自父类的 // age是来自子类的 // super: 调用父类的构造函数 super(name); this.age = age; } say() { // super: 其实就是父类 super.say()就是调用父类的say方法 super.say(); }
}
const dog = new Dog("小黑", 18);`}]},{path:"/web/Ts/%E7%B1%BB/%E5%B1%9E%E6%80%A7%E7%9A%84%E5%B0%81%E8%A3%85.html",title:"",pathLocale:"/",contents:[{header:"属性的封装",slug:"属性的封装",content:`class Animal { public name: string; // 公共的, 都能访问 private age: number; // 私有的, 只能在当前类内部访问 producted: 只能在当前或其字类访问,不能在实例访问 constructor(name: string, age: number) { this.name = name; this.age = age; } getAge() { return this.age; } setAge(value: number) { this.age = value; }
}
const animal = new Animal("小狗", 18);
animal.getAge();
animal.setAge(20); 属性存取器的用法: 用来对赋值方法进行限制, 方法内可以做条件判断 class Animal { public name: string; private age: number; constructor(name: string, age: number) { this.name = name; this.age = age; } get age() { // 属性存取器 return this.age; } set age(value: number) { if (value > 0) { // 增加条件, 年龄必须大于0 this.age = value; } }
}
const animal = new Animal("小狗", 18);
console.log(animal.age); // 实际是调用了get age()方法, 用起来和属性一样;
animal.age = 30; // 实际是调用了set age()方法, 用起来和属性一样; 构造函数特殊写法 class C { constractor(public name: string, public age: number) { // 此时构造函数内就可以省略: this.name = name; this.age = age; }
}`}]},{path:"/web/Ts/%E7%B1%BB/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8Cthis.html",title:"",pathLocale:"/",contents:[{header:"构造函数和 this",slug:"构造函数和-this",content:`class Dog { name: string; age: number; constructor(name: string, age: number) { this.name = name; this.age = age; } bark() { console.log("汪汪汪!"); }
}
const dog = new Dog("小黑", 18);`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/keyof%E7%B1%BB%E5%9E%8B%E8%BF%90%E7%AE%97%E7%AC%A6.html",title:"",pathLocale:"/",contents:[{header:"keyof 类型运算符",slug:"keyof-类型运算符",content:"keyof 类型运算符用于获取一个类型的所有键的联合，这些键可以是类型中的属性名、索引签名的键，或者是类型的字符串字面量类型。使用 keyof 类型运算符可以提高代码的复用性和灵活性。"},{header:"基本用法",slug:"基本用法",content:`PointKeys 是一个类型，它包含了 Point 类型的所有键，即 "x" | "y" | "z"。 type Point = { x: number; y: number; z: number;
}; type PointKeys = keyof Point;
// "x" | "y" | "z"`},{header:"结合索引签名",slug:"结合索引签名",content:`DictionaryKeys<T> 尝试获取 Dictionary<T> 类型的键，但由于 Dictionary 具有一个索引签名，所以 keyof 运算符返回的是索引签名的键的类型，通常是 string | number | symbol。 interface Dictionary<T> { [key: string]: T;
} type DictionaryKeys<T> = keyof Dictionary<T>;
// "keyof" does not work with index signatures,
// so the type will be "string" | "number" | "symbol" (depending on the key type)`},{header:"字符串字面量类型",slug:"字符串字面量类型",content:`type Direction = "up" | "down" | "left" | "right"; type DirectionKeys = keyof typeof Direction;
// "up" | "down" | "left" | "right"`},{header:"在泛型中的应用",slug:"在泛型中的应用",content:`getProperty 是一个泛型函数，它接受一个对象 obj 和一个键 key，然后返回对象在该键上的值。K extends keyof T 确保 key 是 obj 的一个有效键。 function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key];
} const point: Point = { x: 1, y: 2, z: 3 }; const x = getProperty(point, "x"); // x: number
const y = getProperty(point, "y"); // y: number`},{header:"注意事项",slug:"注意事项",content:`keyof 类型运算符不能直接用于接口或类型别名中的索引签名，因为索引签名的键的类型是动态的。
当使用 keyof 运算符时，如果类型的键是数字索引签名，那么返回的键类型将是 number 或 string，具体取决于索引签名的配置。
keyof 运算符可以与类型查询操作符 T[K] 结合使用，以获取特定键的类型。`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/typeof%E7%B1%BB%E5%9E%8B%E8%BF%90%E7%AE%97%E7%AC%A6.html",title:"",pathLocale:"/",contents:[{header:"typeof 类型运算符",slug:"typeof-类型运算符",content:"typeof 类型运算符用于获取一个变量或对象属性的类型。这种类型运算符对于创建与现有数据结构相同类型的新类型非常有用。"},{header:"基本用法",slug:"基本用法",content:`TypeOfX 是一个类型，它与变量 x 的类型相同，即 number。TypeOfPerson 是一个类型，它与 person 对象的类型相同。 let x = 10;
type TypeOfX = typeof x;
// TypeOfX 类型为 number const person = { name: "Alice", age: 30,
}; type TypeOfPerson = typeof person;
// TypeOfPerson 类型为 { name: string; age: number; }`},{header:"在函数中使用",slug:"在函数中使用",content:`function createPoint(x: number, y: number) { return { x, y };
} type TypeOfCreatePoint = typeof createPoint;
// TypeOfCreatePoint 类型为 (x: number, y: number) => { x: number; y: number; }`},{header:"获取对象属性的类型",slug:"获取对象属性的类型",content:`const config = { host: "localhost", port: 8080,
}; type TypeOfPort = typeof config.port;
// TypeOfPort 类型为 number`},{header:"获取类实例的类型",slug:"获取类实例的类型",content:`class Animal { name: string; constructor(name: string) { this.name = name; }
} const dog = new Animal("Buddy"); type TypeOfDog = typeof dog;
// TypeOfDog 类型为 Animal`},{header:"获取类静态属性的类型",slug:"获取类静态属性的类型",content:`class Calculator { static version: string = "1.0"; add(x: number, y: number): number { return x + y; }
} type TypeOfVersion = typeof Calculator.version;
// TypeOfVersion 类型为 string`},{header:"注意事项",slug:"注意事项",content:`typeof 类型运算符只能用于变量、对象属性、函数返回值、类实例和类静态属性。
typeof 不能用于接口或类型别名本身，因为它们是抽象的，没有具体的运行时表示。
当使用 typeof 运算符时，如果操作数是一个联合类型，那么结果也将是一个联合类型。`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%98%A0%E5%B0%84%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"映射类型",slug:"映射类型",content:"映射类型（Mapped Types）是一种强大的类型构造功能，它允许你根据一个现有类型创建一个新的类型，并且可以为它的属性执行一个映射函数。这在处理具有相同类型属性的对象或数组时特别有用。"},{header:"基本语法",slug:"基本语法",content:`T 是一个类型，P 是 T 的属性键的联合。对于 T 的每个属性 P，映射类型会创建一个同名的属性，其类型为 T[P]。 type MappedType<T> = { [P in keyof T]?: T[P];
};`},{header:"可选属性映射",slug:"可选属性映射",content:`Partial<T> 是一个映射类型，它将 T 的每个属性 P 转换为可选属性。 type Partial<T> = { [P in keyof T]?: T[P];
}; type PartialPoint = Partial<{ x: number; y: number }>;
// { x?: number; y?: number }`},{header:"只读属性映射",slug:"只读属性映射",content:`type Readonly<T> = { readonly [P in keyof T]: T[P];
}; type ReadonlyPoint = Readonly<{ x: number; y: number }>;
// { readonly x: number; readonly y: number }`},{header:"转换属性类型",slug:"转换属性类型",content:`将所有属性转换为数组类型。 type Arrayify<T> = { [P in keyof T]: T[P][];
}; type ArrayifiedPoint = Arrayify<{ x: number; y: number }>;
// { x: number[]; y: number[] }`},{header:"条件属性映射",slug:"条件属性映射",content:`RenameProps 是一个映射类型，它不仅映射了属性，还根据第二个泛型参数 S 重命名了属性。 type RenameProps<T, S> = { [P in keyof T as S[P]]: T[P];
}; type RenamedPoint = RenameProps<{ x: number; y: number }, { x: "X"; y: "Y" }>;
// { X: number; Y: number }`},{header:"使用 as 进行类型断言",slug:"使用-as-进行类型断言",content:`映射类型中的 as 关键字可以用来进行类型断言，这在处理类型转换时非常有用。 type BoxedValue<T> = { [P in keyof T]: { value: T[P] };
}; type BoxedPoint = BoxedValue<{ x: number; y: number }>;
// { x: { value: number }; y: { value: number } }`},{header:"注意事项",slug:"注意事项",content:`映射类型中的 in 语法用于遍历一个类型的属性键。
映射类型可以有条件地使用 ? 来标记属性为可选。
readonly 可以用于使属性只读。
映射类型可以与泛型结合使用，以创建更通用的类型构造函数。`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%9D%A1%E4%BB%B6%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"条件类型",slug:"条件类型",content:`条件类型（Conditional Types）是一种高级类型功能，它允许你基于表达式的值来选择不同的类型。条件类型在编译时评估，并根据条件表达式的结果选择一个类型。 // 条件类型的一般形式如下：
type MyType = T extends U ? X : Y;
// 这里，T extends U ? X : Y 是一个条件类型表达式，它表示：
// 如果类型 T 扩展（或符合）类型 U，则结果是类型 X。
// 否则，结果是类型 Y`},{header:"基本用法",slug:"基本用法",content:`IsNumber<T> 是一个条件类型，它检查 T 是否为 number 类型。如果是，结果是 "Yes"；如果不是，结果是 "No"。 type IsNumber<T> = T extends number ? "Yes" : "No"; type IsNumberResult1 = IsNumber<42>; // "Yes"
type IsNumberResult2 = IsNumber<string>; // "No"`},{header:"嵌套条件类型",slug:"嵌套条件类型",content:`type IsArray<T> = T extends any[] ? "Array" : "Not Array"; type IsNumberArray = IsArray<number[]>; // "Array"
type IsStringArray = IsArray<string[]>; // "Array"
type IsBooleanArray = IsArray<boolean[]>; // "Array"
type IsObjectArray = IsArray<{ a: number }[]>; // "Array"
type IsNumber = IsArray<number>; // "Not Array"`},{header:"使用条件类型进行类型守卫",slug:"使用条件类型进行类型守卫",content:`type IsStringOrNumber<T> = T extends string ? "String" : T extends number ? "Number" : "Other"; type Result1 = IsStringOrNumber<string>; // "String"
type Result2 = IsStringOrNumber<number>; // "Number"
type Result3 = IsStringOrNumber<boolean>; // "Other"`},{header:"条件类型的分配行为",slug:"条件类型的分配行为",content:`type Primitive = number | string | boolean; type IsPrimitiveType<T> = T extends Primitive ? T : never; type IsStringOrNumberOrBoolean = IsPrimitiveType<string | number | boolean>;
// string | number | boolean`},{header:"使用条件类型简化类型定义",slug:"使用条件类型简化类型定义",content:`type OptionalKeys<T> = { [K in keyof T]?: T[K];
}; type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [P in K]?: T[P] }; type Todo = { title: string; description?: string; completed: boolean;
}; type TodoPreview = MakeOptional<Todo, "description">;
// { title: string; completed: boolean; description?: string; }`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%A8%A1%E6%9D%BF%E5%AD%97%E9%9D%A2%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"模板字面类型",slug:"模板字面类型",content:`模板字面类型（Template Literal Types）是从字符串字面类型构建的，并且可以通过联合类型扩展成多个字符串。它们与 JavaScript 中的模板字面字符串具有相同的语法，但用于类型位置。当与具体的字面类型一起使用时，模板字面通过连接内容生成新的字符串字面类型
。 定义一个类型，它通过连接一个已知的字符串和一个泛型参数来创建一个新的字符串字面类型: type World = "world";
type Greeting = \`hello \${World}\`;
// Greeting 类型为 "hello world" 当在插值位置使用联合类型时，类型可以由每个联合成员表示的每个可能的字符串字面类型的集合: type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = \`\${EmailLocaleIDs | FooterLocaleIDs}_id\`;
// AllLocaleIDs 类型为 "welcome_email_id" | "email_heading_id"
// z| "footer_title_id" | "footer_sendoff_id"
模板字面类型可以用于创建复杂的类型关系，通过内联字符串插值在类型中。它们与映射类型结合使用时尤其强大，可以基于现有类型定义新类型或接口的变换。 可以使用模板字面类型来定义 API 端点的路径: interface Routes { home: void; about: void; contact: number;
} type RouteNames = keyof Routes;
type Path = \`/\${RouteNames}\`; const homePath: Path = "/home";
// 正确
const loginPath: Path = "/login";
// 错误：类型 '"/login"' 不能分配给类型 'Path'
模板字面类型也可以用来确保函数参数之间的关系。 创建一个函数，它根据事件名称推断出事件处理函数的参数类型： type Event = { type: "click" | "mouseover";
} & { timestamp: number;
}; function handleEvent( eventType: \`\${"click" | "mouseover"}-event\`, handler: (event: Event & { type: "click" | "mouseover" }) => void
) { // 实现
} handleEvent("click-event", (event) => {});
// 正确
handleEvent("keypress-event", (event) => {});
// 错误：参数 '"keypress-event"' 不能分配给参数 '"click-event" | "mouseover-event"'`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E6%B3%9B%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"泛型",slug:"泛型",content:"泛型是一种强大的工具，它允许你编写可重用的函数、接口和类，这些函数、接口和类可以操作多种类型的数据，而不会失去类型安全性。泛型在编译时提供类型检查，从而帮助你捕捉错误。"},{header:"泛型函数",slug:"泛型函数",content:`泛型函数可以接收任意类型的参数，并返回相同类型的结果。 function identity<T>(arg: T): T { return arg;
} const result = identity<string>("hello"); // type is string
const resultNumber = identity<number>(123); // type is number`},{header:"泛型接口",slug:"泛型接口",content:`泛型接口允许你定义操作多种类型的数据的结构，而不需要指定具体的类型。 interface GenericIdentity<T> { (arg: T): T;
} const identityObject: GenericIdentity<number> = identity;`},{header:"泛型类",slug:"泛型类",content:`泛型类允许你定义可以操作多种类型的数据的类。 class GenericNumber<T> { zeroValue: T; add: (x: T, y: T) => T;
} let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y;
};`},{header:"泛型约束",slug:"泛型约束",content:`你可以对泛型参数施加约束，以确保它们支持特定的操作或属性。 interface Lengthwise { length: number;
} function loggingIdentity<T extends Lengthwise>(arg: T): T { // Now we know it has a .length property, so no more error console.log(arg.length); return arg;
} loggingIdentity({ length: 10, value: 3 });`},{header:"泛型类型别名",slug:"泛型类型别名",content:"泛型类型别名为复杂的类型提供了一种简便的命名方式。 type GenericArray<T> = Array<T>; let myArray: GenericArray<number> = [1, 2, 3];"},{header:"泛型元组",slug:"泛型元组",content:`元组类型允许你定义已知元素数量和类型的数组，各元素的类型不必相同。 function tuple<T1, T2, T3>(item1: T1, item2: T2, item3: T3): [T1, T2, T3] { return [item1, item2, item3];
} const x: [string, number, boolean] = tuple("Hello", 10, true);`},{header:"泛型工具类型",slug:"泛型工具类型",content:`内置的泛型工具类型，如 Partial<T>、Readonly<T>、Pick<T, K> 等，这些类型可以方便地构造新的类型。 type Point = { x: number; y: number;
}; type PartialPoint = Partial<Point>;
const p: PartialPoint = { x: 3 }; // OK`},{header:"Partial<T>",slug:"partial-t",content:`Partial<T> 类型构造函数用于生成一个类型，其所有属性都是原始类型的属性，但所有属性都是可选的。 type Point = { x: number; y: number;
}; type PartialPoint = Partial<Point>;
// { x?: number; y?: number; } const p: PartialPoint = { x: 3 }; // OK
const p2: PartialPoint = { y: 7 }; // OK
const p3: PartialPoint = {}; // OK`},{header:"Readonly<T>",slug:"readonly-t",content:`Readonly<T> 类型构造函数用于生成一个类型，其所有属性都是原始类型的属性，但所有属性都是只读的。 type Point = { x: number; y: number;
}; type ReadonlyPoint = Readonly<Point>;
// { readonly x: number; readonly y: number; } const p: ReadonlyPoint = { x: 3, y: 7 };
// Error: Cannot assign to 'x' because it is a read-only property.
// p.x = 4;`},{header:"Pick<T, K>",slug:"pick-t-k",content:`Pick<T, K> 类型构造函数用于生成一个类型，其属性是原始类型中 K 所指定的属性的子集。
PickedPoint 类型表示一个对象，它只包含原始 Point 类型中的 x 和 y 属性 type Point = { x: number; y: number; z: number;
}; type PickedPoint = Pick<Point, "x" | "y">;
// { x: number; y: number; } const p: PickedPoint = { x: 3, y: 7 };`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E6%93%8D%E4%BD%9C/%E7%B4%A2%E5%BC%95%E8%AE%BF%E9%97%AE%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"索引访问类型",slug:"索引访问类型",content:"索引访问类型（Index Access Types）允许你通过索引来查询一个类型的属性类型。这通常与 keyof 类型查询运算符结合使用，以便在编译时获取特定属性的类型。"},{header:"基本用法",slug:"基本用法",content:`type Point = { x: number; y: number; z: number;
}; type XType = Point["x"]; // XType 类型为 number
type YType = Point["y"]; // YType 类型为 number
type ZType = Point["z"]; // ZType 类型为 number`},{header:"结合 keyof 使用",slug:"结合-keyof-使用",content:`type Point = { x: number; y: number; z: number;
}; type Key = keyof Point;
// XYType 类型为 number | number | number
type XYType = Point[Key];`},{header:"在函数中使用",slug:"在函数中使用",content:`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key];
} const point: Point = { x: 1, y: 2, z: 3 }; const x = getProperty(point, "x"); // x 类型为 number
const y = getProperty(point, "y"); // y 类型为 number`},{header:"映射类型",slug:"映射类型",content:`索引访问类型也常用于创建映射类型（Mapped Types），这允许你基于现有类型创建新类型，并对每个属性应用相同的转换。在这个例子中，OptionsFlags 是一个映射类型，它将 FeatureFlags 类型中的每个属性转换为 boolean 类型。 type OptionsFlags<T> = { [K in keyof T]: boolean;
}; type FeatureFlags = { darkMode: boolean; notifications: boolean; betaProgram: boolean;
}; type FeatureOptions = OptionsFlags<FeatureFlags>;
// FeatureOptions 类型为 {
// darkMode: boolean;
// notifications: boolean;
// betaProgram: boolean;
// }`}]},{path:"/web/Ts/%E7%B1%BB%E5%9E%8B%E7%BC%A9%E5%B0%8F/%E7%B1%BB%E5%9E%8B%E7%BC%A9%E5%B0%8F.html",title:"",pathLocale:"/",contents:[{header:"类型缩小(缩小类型范围)",slug:"类型缩小-缩小类型范围",content:"类型缩小（Type Narrowing）是指在运行时基于某些条件来减少一个变量可能的类型范围的过程。这通常在处理联合类型或交叉类型时非常有用，允许你根据不同的情况对变量进行更具体的操作。类型缩小是 TypeScript 编程中的一个重要概念，它允许你编写更精确和更安全的代码。通过使用类型缩小可以在不同的代码路径中对变量进行更具体的操作。"},{header:"使用类型谓词",slug:"使用类型谓词",content:`类型谓词是一种函数，它对参数的类型进行断言，并返回一个布尔值，表明该参数是否为特定的类型。这可以用来缩小类型。 function process(x: number | string) { if (isNumber(x)) { // 在这个块中，TypeScript 知道 x 是一个 number x.toFixed(2); // 正确 } else { // 在这个块中，TypeScript 知道 x 是一个 string x.toUpperCase(); // 正确 }
}
function isNumber(x: number | string): x is number { return typeof x === "number";
}`},{header:"使用字面量类型",slug:"使用字面量类型",content:`当你知道变量的值可能是几个特定字面量之一时，可以使用字面量类型进行缩小。 type Event = "click" | "scroll" | "mousemove"; function handleEvent(event: Event) { if (event === "click") { // event 被缩小为 'click' } else if (event === "scroll") { // event 被缩小为 'scroll' } else if (event === "mousemove") { // event 被缩小为 'mousemove' }
}`},{header:"使用类型守卫",slug:"使用类型守卫",content:`类型守卫是 TypeScript 的一个特性，允许你在运行时检查变量的类型。 function hasOwnProperty<T, U extends string>(obj: T, key: U): key is keyof T { return key in obj;
} const obj = { name: "Kimi", age: 30 };
if (hasOwnProperty(obj, "name")) { // obj 在这里被缩小，包含了 name 属性 console.log(obj.name); // 正确
} else { // 'name' 不是 obj 的属性
}`},{header:"使用逻辑运算符",slug:"使用逻辑运算符",content:`逻辑运算符，如 &&，可以用来基于条件缩小类型。 function isObjectWithKey<T, U extends PropertyKey>( obj: T, key: U
): obj is T & Record<U, unknown> { return key in obj;
} const result = isObjectWithKey(obj, "name");
if (result) { // obj 在这里被缩小，包含了 name 属性 console.log(obj.name); // 正确
}`},{header:"使用自定义类型守卫",slug:"使用自定义类型守卫",content:`function printInput(x: string | number) { if (isStringOrNumber(x)) { console.log(x.toUpperCase()); // x 被缩小为 string } else { console.log(x.toFixed(2)); // x 被缩小为 number }
}
function isStringOrNumber(x: string | number): x is string { return typeof x === "string";
}`},{header:"in 运算符",slug:"in-运算符",content:`isBird 函数是一个类型谓词，它使用 in 运算符来检查 animal 是否有 fly 属性。如果 isBird 返回 true，那么在 if 块中，creature 被缩小为 Bird 类型。 type Bird = { fly: () => void; layEggs: () => void;
}; type Fish = { swim: () => void; layEggs: () => void;
}; type Animal = Bird | Fish; function isBird(animal: Animal): animal is Bird { return "fly" in animal;
} const creature: Animal = { layEggs: () => {}, swim: () => {} }; if (isBird(creature)) { // 在这个块中，TypeScript 会将 creature 缩小为 Bird 类型 creature.fly();
} else { // 在这个块中，creature 可能是 Bird 或 Fish
} 映射类型也使用 in 运算符来动态地构造类型。OptionsFlags 是一个映射类型，它使用 in 运算符来遍历 T 类型的键，并为每个键创建一个相应的布尔属性。 type OptionsFlags<T> = { [K in keyof T]: boolean;
}; type FeatureFlags = { darkMode: boolean; notifications: boolean; betaProgram: boolean;
}; type FeatureOptions = OptionsFlags<FeatureFlags>;
// FeatureOptions 类型为 {
// darkMode: boolean;
// notifications: boolean;
// betaProgram: boolean;
// }`},{header:"instanceof 运算符",slug:"instanceof-运算符",content:`feed 函数接受一个 Animal 类型的参数。使用 instanceof 运算符检查 pet 是否为 Dog 类的实例。如果是，我们可以安全地调用 bark 方法，因为 TypeScript 的类型检查器现在知道 pet 具体是 Dog 类型。 class Animal { eat() { console.log("Eating"); }
} class Dog extends Animal { bark() { console.log("Barking"); }
} function feed(pet: Animal) { if (pet instanceof Dog) { (pet as Dog).bark(); // 类型缩小，现在知道 pet 是 Dog 类型 } else { pet.eat(); // 所有 Animal 都会 eat }
}`},{header:"其他方式",slug:"其他方式",content:`typeof 运算符
Array.isArray()`}]},{path:"/web/Vue/Vue2/Vue2%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",title:"",pathLocale:"/",contents:[{header:"Vue2 组件通信",slug:"vue2-组件通信",content:`在 Vue 2 中，组件之间的通信方式主要有以下几种： 使用自定义事件：通过在父组件中定义一个事件，子组件可以触发该事件并传递数据到父组件。父组件通过监听该事件，接收子组件传递的数据。 例如：
<!-- ParentComponent.vue -->
<template> <div> <ChildComponent @message="handleMessage" /> </div>
</template> <script> import ChildComponent from "./ChildComponent.vue"; export default { components: { ChildComponent, }, methods: { handleMessage(data) { console.log("Message received:", data); }, }, };
<\/script>
<!-- ChildComponent.vue -->
<template> <button @click="sendMessage">Send Message</button>
</template> <script> export default { methods: { sendMessage() { this.$emit("message", "Hello from child component!"); }, }, };
<\/script> 使用 props：父组件通过在子组件上绑定属性，将数据传递给子组件。子组件通过 props 选项接收这些数据。 例如：
<!-- ParentComponent.vue -->
<template> <div> <ChildComponent :message="parentMessage" /> </div>
</template> <script> import ChildComponent from "./ChildComponent.vue"; export default { components: { ChildComponent, }, data() { return { parentMessage: "Hello from parent component!", }; }, };
<\/script>
<!-- ChildComponent.vue -->
<template> <div>{{ message }}</div>
</template> <script> export default { props: { message: { type: String, required: true, }, }, };
<\/script> 使用 v-bind 指令：在子组件上使用 v-bind 指令，将数据绑定到父组件的某个属性上。 例如：
<!-- ParentComponent.vue -->
<template> <div> <ChildComponent :data="parentData" /> </div>
</template> <script> import ChildComponent from "./ChildComponent.vue"; export default { components: { ChildComponent, }, data() { return { parentData: "Hello from parent component!", }; }, };
<\/script>
<!-- ChildComponent.vue -->
<template> <div>{{ data }}</div>
</template> <script> export default { props: { data: { type: String, required: true, }, }, };
<\/script> $parent、$children、$root、$refs 使用 vuex 进行组件间数据的通信 引入第三方插件 pubsub 进行发布订阅 以上就是 Vue 2 中组件通信的几种方式。在实际项目中，可以根据需求选择合适的方式来实现组件之间的通信。`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/IO%E6%B5%81%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"IO 流异常处理",slug:"io-流异常处理",content:`package com.wuziqi.gobang.IO; import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException; public class DemoErrorTryCatch { public static void main(String[] args) { FileInputStream fis = null; FileOutputStream fos = null; try{ // 创建字节输入流对象 fis = new FileInputStream("aaa/b.txt"); // 创建字节输出流对象 fos = new FileOutputStream("aaa/a.txt"); // 一次读取一个字节数组，一次写入一个字节数组的一部分 byte[] bys = new byte[1024]; int len = 0; while( (len = fis.read(bys)) != -1 ){ fos.write(bys, 0, len); } }catch( IOException e ){ e.printStackTrace(); }finally{ // 释放资源 if (fos != null){ try { fos.close(); } catch (IOException e) { e.printStackTrace(); } } if (fos != null){ try { fos.close(); } catch (IOException e) { e.printStackTrace(); } } } }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/IO%E6%B5%81%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"IO 流概述",slug:"io-流概述",content:`所有相关的抽象类和实现类，都需要导包，且都在 java.io 包下。
什么是 IO 流？
I：Input，读、输入，将数据从本地磁盘中读出来，输入到内存中(大脑里)
O：Output，写、输出，将内存中的数据写下来，输出到本地磁盘中(写纸上)`},{header:"IO 流的体系结构",slug:"io-流的体系结构",content:""},{header:"IO 流的分类",slug:"io-流的分类",content:`按照流向分 输入流
输出流 按照类型分 字节流
字符流 按习惯分类 字节输入流
字节输出流
字符输入流
字符输出流`},{header:"流的选择",slug:"流的选择",content:`字符流操作文本
字节流是万能流`},{header:"流的转换",slug:"流的转换",content:"转换流，可以将字节流转换成字符流。"},{header:"流的打印",slug:"流的打印",content:"打印流，只能是输出流；既有字节打印流，又有字符打印流。"}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/IO%E6%B5%81%E7%9A%84%E9%80%89%E6%8B%A9.html",title:"",pathLocale:"/",contents:[{header:"IO 流的选择",slug:"io-流的选择",content:`一般的 txt、java 等文件，内容能看得懂的可以使用字符流；如果看不懂，必须使用字节流；
字节流可以操作大多数文件，如 mp4、mp3、img 等；
docx 和 excel 文件不能用字符流，即便是用的是字节流，也可能出现内容丢失的情况。`},{header:"1. 字符流",slug:"_1-字符流",content:"字符流只能操作文本文件"},{header:"2. 字节流",slug:"_2-字节流",content:"万能流，可以操作所有文件"},{header:"总结",slug:"总结",content:""}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Collection%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"Collection 接口",slug:"collection-接口",content:"单列集合；需要导包，在 java.util 下；Collection 接口，不是类，是单列集合的顶层"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 boolean add(Object e)
添加元素 boolean addAll(Collection c)
添加集合 boolean remove(Object o)
删除元素 boolean removeIf(Predicate filter)
按照条件删除元素 void clear()
清空集合 int size()
获取集合长度 boolean contains(Object o)
是否包含 boolean isEmpty
是否为空 Object[] toArray()
集合转数组 Iterator<E> iterator()
获取迭代器对象`},{header:"集合的遍历",slug:"集合的遍历",content:`转数组循环遍历 Collection c = new ArrayList();
Object[] obj = c.toArray();
for(int i = 0; i < obj.length; i++){ System.out.println(obj[i]);
} 迭代器遍历 Collection c = new ArrayList();
Iterator it = c.iterator();
while (it.hasNext()) { Object obj = it.next(); System.out.println(obj);
} 增强 for 循环(for each 遍历) 增强 for 循环底层也是迭代器遍历，只是简化写法
增强 for 循环也可以用来遍历数组
格式：for(数据类型 变量名 : 数组名/集合名){...} Collection c = new ArrayList();
for (Object obj : c) { System.out.println(obj);
}`},{header:"方法的应用",slug:"方法的应用",content:`package com.wuziqi.gobang.controller; import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.function.Predicate; public class DemoCollection { public static void main(String[] args) { // 多态格式的，Collection是类，所以只能创建子对象 Collection c = new ArrayList(); System.out.println(c); // 结果为[]: 说明底层重写了toString方法 // boolean add(Object e)：集合中添加一个元素 c.add("aaa"); c.add("bbb"); // Collection只能添加引用类型，这块不报错说明底层自动转成Integer类型了 c.add(111); System.out.println(c); // [aaa, bbb, 111] // boolean addAll(Collection c)：集合中添加一个集合 Collection c1 = new ArrayList(); c1.addAll(c); System.out.println(c1); // [aaa, bbb, 111] // boolean remove(Object o)：删除某一元素 c1.remove("aaa"); System.out.println(c1); // [bbb, 111] // boolean removeIf(Predicate filter)：根据条件删除 // Object是泛型，当然可以换成String等 c.removeIf(new Predicate<Object>() { @Override public boolean test(Object t) { // Object和上边对应 // return true; // 满足条件，要把该元素删除掉 // reutrn false; // 不满足，不能删掉元素 return t instanceof Integer; } }); // c.removeIf((o) -> o.equals(111)); // 与上边的重写方法一样效果 System.out.println(c); // [aaa, bbb] // boolean isEmpty()：是否为空 System.out.println(c.isEmpty()); // false // int Size()：获取长度 System.out.println(c.size()); // 2 // boolean contains(Object o)：是否包含 System.out.println(c); // [aaa, bbb] c.add(111); System.out.println(c.contains("ddd")); // false System.out.println(c.contains(111)); // true // void clear()：清空集合 c.clear(); System.out.println(c); // [] System.out.println(c.isEmpty()); // true // Object[] toArray()：转成数组进行遍历 System.out.println(c1); // [bbb, 111] Object[] objs = c1.toArray(); for (int i = 0; i < objs.length; i++){ System.out.println(objs[i]); // bbb 111 } // Iterator<E> iterator()：通过迭代器对象遍历 c1.add(new Pigs("小明", 18)); // 结果：[bbb, 111, com.wuziqi.gobang.controller.Pigs@23fc625e] // 给Pigs加上toString()方法后 // 打印结果：[bbb, 111, Pigs{name='小明', age=18}] System.out.println(c1); /** * Iterator是接口 * 有两个子方法 * hasNext()：判断是否还有元素 * next()：获取下一个元素 * */ Iterator it = c1.iterator(); // 需要导包，也是多态格式 while (it.hasNext()){ System.out.println(it.next()); // 打印结果：bbb 111 Pigs{name='小明', age=18} } // 增强for循环(for each遍历) for (Object obj : c1){ System.out.println(obj); // 打印结果：bbb 111 Pigs{name='小明', age=18} } // 增强for循环遍历数组 int arr[] = {1,2,3,4,5,6,7,8,9}; for (Object obj : arr){ System.out.println(obj); // 1,2,3,4,5,6,7,8,9 } }
}
class Pigs{ private String name; private int age; Pigs(String name, int age){ this.name = name; this.age = age; } @Override public String toString() { return "Pigs{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Iterator%E8%BF%AD%E4%BB%A3%E5%99%A8.html",title:"",pathLocale:"/",contents:[{header:"Iterator 迭代器",slug:"iterator-迭代器",content:""}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/HashMap%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"HashMap 实现类",slug:"hashmap-实现类",content:`和Map一模一样；
双列集合；需要导包，在 java.util 下； HashMap 是实现类。`},{header:"HashMap 集合的特性",slug:"hashmap-集合的特性",content:"无序性 无索引 元素唯一(键唯一，值不唯一) 双列的"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 V put(K key, V value)
添加元素，返回添加之前的值；修改元素，返回被修改之前的值 V remove(Object key)
根据键来删除元素，返回被删除的元素的值 int size()
获取长度 void clear()
清空 V get(Object key)
根据键来获取值 boolean containsKey(Object key)
判断是否包含，键为给定的内容，的元素 boolean containsValue(Object value)
判断是否包含，值为给定的内容，的元素 Set<K> keySet()
获取所有的键，并用 Set 集合接收 Collection<V> values()
获取所有的值，并用 Collection(或其他结合) 集合接收 Set<Map.Entry<K,V>> entrySet()
获取所有的键值对，并用 Set 结合接收`},{header:"HashMap 集合的遍历",slug:"hashmap-集合的遍历",content:`键找值遍历 Set <String> keys = map.keySet(); for (String key : keys){ System.out.println(key + ":" + map.get(key)); // 结果： // 李四:20 // 张三:18 // 王五:22
} 键值对获取键合值 Set<Map.Entry<String, Integer>> entrySet = map.entrySet(); for (Map.Entry<String, Integer> entry : entrySet){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22
}
import java.util.Map.Entry; // 内部类的用法，需要导包
Set<Entry<String, Integer>> entrySet = map.entrySet(); for (Entry<String, Integer> entry : entrySet){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22
}`},{header:"方法的应用",slug:"方法的应用",content:`package com.wuziqi.gobang.Map; import java.util.HashMap;
import java.util.Set;
import java.util.Map.Entry; public class DemoHashMap { public static void main(String[] args) { HashMap<Integer, Person> map= new HashMap<Integer, Person>(); map.put(1, new Person("John", 18)); map.put(2, new Person("Jack", 20)); map.put(3, new Person("Jim", 22)); // 遍历一 Set<Integer> keys = map.keySet(); for (Integer key : keys) { System.out.println(key); System.out.println(map.get(key)); // 结果： // 1 // Person{name='John', age=18} // 2 // Person{name='Jack', age=20} // 3 // Person{name='Jim', age=22} } // 遍历二 Set<Entry<Integer, Person>> entries = map.entrySet(); for (Entry<Integer, Person> entry : entries) { int key = entry.getKey(); Person p = entry.getValue(); System.out.println(key+ ":" + p.getName()+ "," + p.getAge()); // 结果： // 1:John,18 // 2:Jack,20 // 3:Jim,22 } }
}
class Person{ private String name; private int age; public Person(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Person{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/HashTable%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"HashTable 实现类",slug:"hashtable-实现类",content:`只有HashMap的键值对都可以为 null， HashTable、TreeMap 的键和值都不可以为 null，否则会报空指针异常。
package com.wuziqi.gobang.Map; import sun.reflect.generics.tree.Tree; import java.util.HashMap;
import java.util.Hashtable;
import java.util.TreeMap; public class DemoHashTable { public static void main(String[] args) { Hashtable<String, Integer> ht = new Hashtable<String, Integer>(); ht.put("aaa", 1); // ht.put(null,null); // 报错 // ht.put("bbb", null); // 报错 // ht.put(null,2); // 报错 System.out.println(ht); // 结果：{aaa=1} // 键和值都不能为 null HashMap<String, Integer> hm = new HashMap<String, Integer>(); hm.put("aaa", 1); // hm.put(null,null); // hm.put("bbb", null); // hm.put(null,2); System.out.println(hm); // 结果：{aaa=1, null=2, bbb=null} // 键合值都可以为 null TreeMap<String, Integer> tm = new TreeMap<String, Integer>(); tm.put("aaa", 1); // tm.put(null,null); // 报错 // tm.put("bbb", null); // 报错 // tm.put(null,2); // 报错 System.out.println(tm); // 结果：{aaa=1} // 键和值都不能为 null }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/LinkedHashMap%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"LinkedHashMap 实现类",slug:"linkedhashmap-实现类",content:`根LinkedHashSet和HashSet一样；LinkedHashMap 实现类比HashMap多了一个有序的特性。
package com.wuziqi.gobang.Map; import java.util.LinkedHashMap; public class DemoLinkedHashMap { public static void main(String[] args) { LinkedHashMap<String, Integer> map = new LinkedHashMap<String, Integer>(); map.put("bbb", 18); map.put("aaa", 16); map.put("ccc", 22); for (String key : map.keySet()) { System.out.println(key + "=" + map.get(key)); // 结果：有序的，怎么存怎么返 // bbb=18 // aaa=16 // ccc=22 } }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/Map%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"Map 接口",slug:"map-接口",content:"双列集合；需要导包，在 java.util 下；Map 接口，不是类，是双列集合的顶层。"},{header:"Map 集合的特性",slug:"map-集合的特性",content:"无序性 无索引 元素唯一(键唯一，值不唯一) 双列的"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 V put(K key, V value)
添加元素，返回添加之前的值；修改元素，返回被修改之前的值 V remove(Object key)
根据键来删除元素，返回被删除的元素的值 int size()
获取长度 void clear()
清空 V get(Object key)
根据键来获取值 boolean containsKey(Object key)
判断是否包含，键为给定的内容，的元素 boolean containsValue(Object value)
判断是否包含，值为给定的内容，的元素 Set<K> keySet()
获取所有的键，并用 Set 集合接收 Collection<V> values()
获取所有的值，并用 Collection(或其他结合) 集合接收 Set<Map.Entry<K,V>> entrySet()
获取所有的键值对，并用 Set 结合接收`},{header:"Map 集合的遍历",slug:"map-集合的遍历",content:`键找值遍历 Set <String> keys = map.keySet(); for (String key : keys){ System.out.println(key + ":" + map.get(key)); // 结果： // 李四:20 // 张三:18 // 王五:22
} 键值对获取键合值 Set<Map.Entry<String, Integer>> entrySet = map.entrySet(); for (Map.Entry<String, Integer> entry : entrySet){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22
}
import java.util.Map.Entry; // 内部类的用法，需要导包
Set<Entry<String, Integer>> entrySet = map.entrySet(); for (Entry<String, Integer> entry : entrySet){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22
}`},{header:"方法的应用",slug:"方法的应用",content:`package com.wuziqi.gobang.Map; import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry; public class DemoMap { public static void main(String[] args) { // Map是接口，需要创建实现类对象 Map<String, Integer> map = new HashMap<String,Integer>(); System.out.println(map); // {} // V put(K key, V value) map.put("张三", 18); map.put("李四", 20); map.put("王五", 22); map.put("李四", 18); // 最后输出18，不是添加，是替换 System.out.println(map); // {李四=18, 张三=18, 王五=22} // V remove(Object key) map.remove("王五"); System.out.println(map); // {李四=18, 张三=18} // int size() int size = map.size(); System.out.println(size); // 2 // void clear() map.clear(); System.out.println(map); //{} // V get(Object key) map.put("张三", 18); map.put("李四", 20); map.put("王五", 22); int age = map.get("李四"); System.out.println(age); // 20 // boolean containsKey(Object key) // boolean containsValue(Object value) Boolean isWang = map.containsKey("王五"); Boolean isHou = map.containsKey("后端"); Boolean wangWu = map.containsValue("王五"); Boolean hou = map.containsValue("后端"); System.out.println(isWang); // true System.out.println(isHou); // false System.out.println(wangWu); // true System.out.println(hou); // false // Set<K> keySet() Set<String> set = map.keySet(); for (String s : set){ System.out.println(s); // 李四 张三 王五 } // Collection<V> values() Collection<Integer> values = map.values(); for (Integer i : values){ System.out.println(i); // 20 18 22 } // 遍历一（键找值遍历） Set <String> keys = map.keySet(); for (String key : keys){ System.out.println(key + ":" + map.get(key)); // 结果： // 李四:20 // 张三:18 // 王五:22 } /** * 遍历二 * 键值对 * Set<Map.Entry<K,V>> entrySet() * Map.Entry：是内部类的用法，和Outer.Inner用法一样 * 可以省略Map，但是Entry需要导包 * entry有两个方法：getKey()和getValue() * getKey()：获取键 * getValue()：获取值 * */ Set<Map.Entry<String,Integer>> set1= map.entrySet(); for (Map.Entry<String,Integer> entry : set1){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22 }; Set<Entry<String,Integer>> set2= map.entrySet(); for (Entry<String,Integer> entry : set2){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22 }; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/Properties%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"Properties 实现类",slug:"properties-实现类",content:`是 HashTable 实现类的子类；
表示一个持久的属性集；
可以保存在流中或从流中加载；属性列表中的每个键及其对应的值都是一个字符串。`},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public Properties()
创建一个无默认值的空属性列表 public Properties(Properties defaults)
创建一个空属性列表，使用默认属性列表初始化`},{header:"常用的方法",slug:"常用的方法",content:`方法
作用 put (Object key, Object value)
添加键值对 get (Object key)
获取键值对 keySet ()
获取所有键`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.Map; import java.util.Properties;
import java.util.Set; public class DemoProperties { public static void main(String[] args) { // public Properties() Properties p = new Properties(); p.put("张三", 18); p.put("李四", 19); p.put("王五", 20); System.out.println(p); // {王五=20, 张三=18, 李四=19} // 遍历 Set<Object> set = p.keySet(); for (Object key : set) { Object value = p.get(key); System.out.println(key + "=" + value); //王五=20 //张三=18 //李四=19 } }
}`},{header:"特有的方法",slug:"特有的方法",content:`主要的用途是用来加载配置文件(.properties)的
特定的文件，必须是键值对的形式；其中符号可以是等于号或者是冒号 方法
作用 public String getProperty(String key)
返回指定键的值，等于之前的 get public Object setProperty(String key, String value)
设置指定键的值，等同于之前的 put public Set<String> stringPropertyNames()
获取所有键的集合，等同于之前的 keySet public void store(OutputStream out, String comments)
将字节集合写入文件中(comments：文件注释) public void load(InputStream in)
将特定文件中的数据读取出来 public void store(Writer w, String comments)
将字符集合写入文件中(comments：文件注释) public void load(Reader r) 将特定文件中的数据读取出来`},{header:"方法的使用",slug:"方法的使用-1",content:`package com.wuziqi.gobang.Map; import java.util.Properties;
import java.util.Set; public class DemoProperties2 { public static void main(String[] args) { Properties p = new Properties(); // public Object setProperty(String key, String value) p.setProperty("name", "张三"); p.setProperty("name", "李四"); p.setProperty("name", "王五"); System.out.println(p); // {name=王五} // 遍历：public \`Set<String>\` stringPropertyNames() Set<String> set = p.stringPropertyNames(); for (String key : set) { // public String getProperty(String key) p.getProperty(key); } }
}
package com.wuziqi.gobang.Map; import org.omg.CORBA.portable.OutputStream; import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Properties; public class DemoProperties3 { public static void main(String[] args) throws Exception { Properties p = new Properties(); p.setProperty("tom", "18"); p.setProperty("jerry", "19"); p.setProperty("rose", "20"); p.setProperty("jerry", "18"); p.setProperty("rose", "18"); System.out.println(p); // public void store(OutputStream out, String comments) p.store(new FileOutputStream("aaa/p.txt"), "加一个注释"); System.out.println(p); // public void load(InputStream in) p.load(new FileInputStream("aaa/p.txt")); System.out.println(p); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8F%8C%E5%88%97%E9%9B%86%E5%90%88Map/TreeMap%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"TreeMap 实现类",slug:"treemap-实现类",content:`和Map很相似，除了可以排序，其他基本一样；
双列集合；需要导包，在 java.util 下； TreeMap 是实现类。`},{header:"TreeMap 集合的特性",slug:"treemap-集合的特性",content:"无序性 无索引 元素唯一(键唯一，值不唯一) 双列的 可以排序的(根据键来排序)"},{header:"数据结构",slug:"数据结构",content:"红黑树，TreeSet 的底层就是 TreeMap。"},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 V put(K key, V value)
添加元素，返回添加之前的值；修改元素，返回被修改之前的值 V remove(Object key)
根据键来删除元素，返回被删除的元素的值 int size()
获取长度 void clear()
清空 V get(Object key)
根据键来获取值 boolean containsKey(Object key)
判断是否包含，键为给定的内容，的元素 boolean containsValue(Object value)
判断是否包含，值为给定的内容，的元素 Set<K> keySet()
获取所有的键，并用 Set 集合接收 Collection<V> values()
获取所有的值，并用 Collection(或其他结合) 集合接收 Set<Map.Entry<K,V>> entrySet()
获取所有的键值对，并用 Set 结合接收`},{header:"TreeMap 集合的遍历",slug:"treemap-集合的遍历",content:`键找值遍历 Set <String> keys = map.keySet(); for (String key : keys){ System.out.println(key + ":" + map.get(key)); // 结果： // 李四:20 // 张三:18 // 王五:22
} 键值对获取键合值 Set<Map.Entry<String, Integer>> entrySet = map.entrySet(); for (Map.Entry<String, Integer> entry : entrySet){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22
}
import java.util.Map.Entry; // 内部类的用法，需要导包
Set<Entry<String, Integer>> entrySet = map.entrySet(); for (Entry<String, Integer> entry : entrySet){ System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // 李四:20 // 张三:18 // 王五:22
}`},{header:"排序(和TreeSet一样，自然排序、比较器)",slug:"排序-和treeset一样-自然排序、比较器",content:""},{header:"方法的应用",slug:"方法的应用",content:`package com.wuziqi.gobang.Map; import java.util.Comparator;
import java.util.Set;
import java.util.TreeMap;
import java.util.Map.Entry; public class DemoTreeMap { public static void main(String[] args) { TreeMap<String, Student> tm = new TreeMap<String, Student>(); tm.put("9527", new Student("Tom", 18)); tm.put("9530", new Student("Jerry", 18)); tm.put("9526", new Student("Rose", 18)); tm.put("9531", new Student("Nose", 18)); tm.put("9525", new Student("Fore", 18)); Set<String> keys = tm.keySet(); for (String key : keys) { System.out.println(key + ":" + tm.get(key)); // 结果：根据键值，进行了排序 // 9525:Student{name='Fore', age=18} // 9526:Student{name='Rose', age=18} // 9527:Student{name='Tom', age=18} // 9530:Student{name='Jerry', age=18} // 9531:Student{name='Nose', age=18} } TreeMap<Student, String> tm2 = new TreeMap<Student, String>( new Comparator<Student>() { @Override public int compare(Student o1, Student o2) { int i = o1.getAge() - o2.getAge(); int ii = i == 0 ? o1.getName().compareTo(o2.getName()) : i; return ii; } } ); tm2.put(new Student("Tom", 18),"9527"); tm2.put(new Student("Jerry", 17), "9530"); tm2.put(new Student("Rose", 16), "9526"); tm2.put(new Student("Nose", 20), "9531"); tm2.put(new Student("Tom", 18), "9525"); Set<Entry<Student, String>> sets = tm2.entrySet(); for (Entry<Student, String> entry : sets) { System.out.println(entry.getKey() + ":" + entry.getValue()); // 结果： // Student{name='Rose', age=16}:9526 // Student{name='Jerry', age=17}:9530 // Student{name='Tom', age=18}:9525 // Student{name='Nose', age=20}:9531 } }
}
class Student { private String name; private int age; public Student(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Student{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}
//class Student implements Comparable<Student>{
// private String name;
// private int age;
//
// public Student(String name, int age) {
// this.name = name;
// this.age = age;
// }
//
// public String getName() {
// return name;
// }
//
// public void setName(String name) {
// this.name = name;
// }
//
// public int getAge() {
// return age;
// }
//
// public void setAge(int age) {
// this.age = age;
// }
//
// @Override
// public String toString() {
// return "Student{" +
// "name='" + name + '\\'' +
// ", age=" + age +
// '}';
// }
// @Override
// public int compareTo(Student o) {
// int i = this.age - o.age;
// int ii = i == 0 ? this.name.compareTo(o.name) : i;
// return ii;
// }
//}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%90%8C%E6%AD%A5%E6%9C%BA%E5%88%B6.html",title:"",pathLocale:"/",contents:[{header:"同步机制",slug:"同步机制",content:"解决多线程并发访问时出现的问题，使用同步机制，保证同一时刻，只能有一个线程对数据进行操作。"},{header:"方法一(同步代码块)",slug:"方法一-同步代码块",content:`什么时候使用同步代码块？(什么时候会出现多线程并发访问问题？) 多线程；
有共享资源；
有多条语句都操作了共享资源。 锁对象？ 同步方法的锁对象 可以是我们传递的任意对象 格式:
synchronized(锁对象){ /* * 锁对象：可以是任意对象(当然，也包括字节码文件对象，所以可以不创建对象， * 把当前文件字节码文件对象当作锁对象传进去) * 要求：多个线程必须要共用同一把锁 * 特性：在某一个线程使用时，会被锁上，不受其他线程影响 * 放哪：仅包裹所有操作共享资源的最小代码块，否则可能会出现线程的阻塞 */ // 需要被同步的代码 || 所有操作共享资源的部分的最小代码块
}
案例代码：
package com.api.DuoXianCheng; public class Ticket02 { public static void main(String[] args) { // 三个窗口，即三个线程 Ticket2 ticket = new Ticket2(); Thread t1 = new Thread(ticket); Thread t2 = new Thread(ticket); Thread t3 = new Thread(ticket); t1.setName("窗口1"); t2.setName("窗口2"); t3.setName("窗口3"); t1.start(); t2.start(); t3.start(); }
}
class Ticket2 implements Runnable { private int ticketNum = 100; private Object obj = new Object(); // 锁对象：多线程共用 @Override public void run() { // 售票代码 while (true) { synchronized (obj) { /* * 如果把while整体都包裹了，就不是最小代码块了； * 可能会出现当前线程锁资源的问题； * 其他线程阻塞了 */ if (ticketNum > 0) { try { Thread.sleep(10); } catch (InterruptedException e) { e.printStackTrace(); } System.out.println( Thread.currentThread().getName() + ":出票，票号为：" + ticketNum ); ticketNum--; } else { break; } } } }
}`},{header:"方法二(同步方法)",slug:"方法二-同步方法",content:`什么时候使用同步方法？ 当一个方法中，需要使用同步代码块把方法体中的代码全部包裹起来的时候，这个时候就可以选择同步方法了。 锁对象？ 同步方法的锁对象是 this 格式:
修饰符 synchronized 返回值类型 方法名(形参){ // 执行语句 return 返回值;
}
案例代码：
package com.api.DuoXianCheng; public class Ticket03 { public static void main(String[] args) { Ticket3 ticket3 = new Ticket3(); // 使用匿名子类对象创建两个线程 new Thread(new Runnable() { @Override public void run() { while (true) { ticket3.print1(); } } }).start(); new Thread(new Runnable() { @Override public void run() { while (true) { ticket3.print2(); } } }).start(); }
}
class Ticket3{ // 使用同步代码块 /* private Object obj = new Object(); // 锁对象 public void print1(){ synchronized (obj) { System.out.print("我"); System.out.print("要"); System.out.print("上"); System.out.print("学"); System.out.println("校"); } } public void print2(){ synchronized (obj) { System.out.print("天"); System.out.print("天"); System.out.print("不"); System.out.print("迟"); System.out.println("到"); } } */ // 使用同步方法： 锁对象是this public synchronized void print1(){ System.out.print("我"); System.out.print("要"); System.out.print("上"); System.out.print("学"); System.out.println("校"); } public synchronized void print2(){ System.out.print("天"); System.out.print("天"); System.out.print("不"); System.out.print("迟"); System.out.println("到"); }
}`},{header:"方法三(静态同步方法)",slug:"方法三-静态同步方法",content:`什么时候使用静态同步方法？ 和使用同步方法的要求一样，至于使用静态或者非静态需要根据需求而定。 锁对象？ 静态同步方法的锁对象是 当前类本身，即字节码文件对象。 格式:
修饰符 static synchronized 返回值类型 方法名(形参){ // 执行语句 return 返回值;
}
案例代码：
package com.api.DuoXianCheng; public class Ticket04 { public static void main(String[] args) { // 使用匿名子类对象创建两个线程 new Thread(new Runnable() { @Override public void run() { while (true) { // 静态方法，类名直接调用 Ticket4.print1(); } } }).start(); new Thread(new Runnable() { @Override public void run() { while (true) { Ticket4.print2(); } } }).start(); }
}
class Ticket4{ // 使用静态同步方法：锁对象当前类本身 public static synchronized void print1(){ System.out.print("我"); System.out.print("要"); System.out.print("上"); System.out.print("学"); System.out.println("校"); } public static synchronized void print2(){ System.out.print("天"); System.out.print("天"); System.out.print("不"); System.out.print("迟"); System.out.println("到"); }
}`},{header:"方法四(使用 ReentrantLock 锁对象)",slug:"方法四-使用-reentrantlock-锁对象",content:`package com.api.DuoXianCheng; import java.util.concurrent.locks.ReentrantLock; public class Ticket05 { public static void main(String[] args) { Ticket5 ticket5 = new Ticket5(); // 使用匿名子类对象创建两个线程 new Thread(new Runnable() { @Override public void run() { while (true) { ticket5.print1(); } } }).start(); new Thread(new Runnable() { @Override public void run() { while (true) { ticket5.print2(); } } }).start(); }
}
class Ticket5{ // 使用 ReentrantLock 对象控制线程同步 private ReentrantLock lock = new ReentrantLock(); public synchronized void print1(){ lock.lock(); System.out.print("我"); System.out.print("要"); System.out.print("上"); System.out.print("学"); System.out.println("校"); lock.unlock(); } public synchronized void print2(){ lock.lock(); System.out.print("天"); System.out.print("天"); System.out.print("不"); System.out.print("迟"); System.out.println("到"); lock.unlock(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"多线程概述",slug:"多线程概述",content:""},{header:"多线程中的概念",slug:"多线程中的概念",content:`术语
解释 进程
正在执行的应用程序，看作为开启了一个进程。 线程
一个进程可以开启多个线程，一个线程可以执行多个任务。 多线程
一个进程中可以开启多个线程，多个线程可以同时执行多个任务。 并发
在同一时刻，多个任务在多个 CPU 上交替执行，宏观上，这些任务是同时执行的。 并行
在同一时刻，多个任务在同一 CPU 上同时执行，微观上，这些任务是同时执行的。`},{header:"杀进程",slug:"杀进程",content:`一、使用命令提示符 首先打开命令提示符，输入 netstat -nao，找到对应的端口号
输入 tasklist | findstr 端口号，找到对应的进程号
输入 taskkill /pid 进程号 /f，杀掉进程 二、使用任务管理器 首先打开命令提示符，输入 netstat -nao，找到对应的端口号
Ctrl + Alt + Del，打开任务管理器
选择“详细信息”选项卡，根据端口号找到对应的进程，右键选择“结束进程树”`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%AE%9E%E7%8E%B0.html",title:"",pathLocale:"/",contents:[{header:"多线程的实现",slug:"多线程的实现",content:""},{header:"实现方式",slug:"实现方式",content:`方式一： 自定义一个类
继承 Thread 类
重写 run() 方法
在 main()方法中创建自定义类的对象
调用对象的 start 方法 package com.api.DuoXianCheng; public class Thread01 { public static void main(String[] args) { MyThread mt1 = new MyThread(); mt1.start(); // 启动线程，底层会调用run方法 MyThread mt2 = new MyThread(); mt2.start(); // 启动线程，底层会调用run方法 for (int i = 0; i < 100; i++) { System.out.println(i); } }
}
class MyThread extends Thread{ @Override public void run() { for (int i = 0; i < 100; i++) { System.out.println(i); } }
}
方式二： 自定义一个类
实现 Runnable 接口
重写 run() 方法
在 main()方法中创建自定义类的对象
在 Thread 的有参构造中，传递自定义类的对象
调用 Thread 类的 start 方法 package com.api.DuoXianCheng; public class Thread02 { public static void main(String[] args) { MyThread1 mt = new MyThread1(); Thread t1 = new Thread(mt); t1.start(); // 启动线程，底层执行mt对象中的run方法 Thread t2 = new Thread(mt); t2.start(); // 启动线程，底层执行mt对象中的run方法 /* * 下边的for 循环属于主线程中； * 如果当前方法放在其他两个线程启动之前； * 一定会先执行完 该 方法 然后 才开始启动其他线程； * 主线程只能从上到下去执行 */ for (int i = 0; i < 100; i++){ System.out.println(i); } }
}
class MyThread1 implements Runnable { @Override public void run() { for (int i = 0; i < 100; i++) { System.out.println(i); } }
}
方式三：`},{header:"Thread 类",slug:"thread-类",content:`方法
作用 public final void setName(String name)
设置线程名称 public final String getName()
获取线程名称 public static Thread currentThread()
获取当前线程对象 public final int getPriority()
获取线程优先级 public final void setPriority(int priority)
设置线程优先级 public final void setDaemon(boolean on)
设置是否为守护线程 public static void sleep(long millis)
使当前线程休眠指定的毫秒数 public final boolean isAlive()
判断线程是否存活 public final boolean isDaemon()
判断是否为守护线程 package com.api.DuoXianCheng; public class Thread03 { public static void main(String[] args) { MyThread03 mt1 = new MyThread03(); // public final void setName(String name)设置线程名称 mt1.setName("线程1"); // public final int getPriority()获取线程优先级 int gp1 = mt1.getPriority(); System.out.println("线程1优先级：" + gp1); // 5 // public final void setPriority(int priority)设置线程优先级 /* * 线程优先级：1~10 * 1：最低优先级 * 5：默认优先级 * 10：最高优先级 * 线程优先级越高，抢占CPU的概率越大；只是概率大 */ mt1.setPriority(Thread.MIN_PRIORITY); // public final void setDaemon(boolean on)设置是否为守护线程 /* * on：true || false； * 默认为false，即用户线程；为true就是守护线程； * 守护线程会随着被守护的线程的消失而慢慢消失，不是立即消失； * 一般都是底层用的比较多。 */ mt1.setDaemon(true); // public static void sleep(long millis)使当前线程休眠指定的毫秒数 try { // 每次都是先休眠1秒再执行 mt1.sleep(1000); } catch (InterruptedException e) { e.printStackTrace(); } mt1.start(); MyThread03 mt2 = new MyThread03(); mt2.setName("线程2"); int gp2 = mt2.getPriority(); System.out.println("线程2优先级：" + gp2); // 5 mt2.setPriority(2); mt2.setDaemon(true); mt2.start(); // 主进程执行的程序 for (int i = 0; i < 10; i++){ // public static Thread currentThread()获取当前线程对象 Thread.currentThread().setName("主线程"); System.out.println(Thread.currentThread().getName()); int gp3 = Thread.currentThread().getPriority(); System.out.println("主线程优先级：" + gp3); // 5 Thread.currentThread().setPriority(Thread.MAX_PRIORITY); } }
} // public final void setName(String name)设置线程名称 // public static Thread currentThread()获取当前线程对象 // public final int getPriority()获取线程优先级 // public final void setPriority(int priority)设置线程优先级 // public final void setDaemon(boolean on)设置是否为守护线程 // public static void sleep(long millis)使当前线程休眠指定的毫秒数 // public final boolean isDaemon()判断是否为守护线程 // public final boolean isAlive()判断线程是否存活
class MyThread03 extends Thread { public void run() { for (int i = 0; i < 10; i++) { // public final String getName()获取线程名称 System.out.println("线程名：" + getName() + "，i = " + i); } }
}`},{header:"线程的生命周期",slug:"线程的生命周期",content:"新建、就绪、运行、阻塞、死亡 五个状态"}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%AE%9A%E6%97%B6%E5%99%A8.html",title:"",pathLocale:"/",contents:[{header:"定时器",slug:"定时器",content:"定时器的底层是多线程"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public Timer()
创建一个定时器`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void schedule(TimerTask task, Date time)
在特定时间执行一次指定任务 public void schedule(TimerTask task,long delay)
在延迟指定时间后执行一次指定任务 public void schedule(TimerTask task, Date firstTime, long period)
在特定时间开始，重复执行任务 public void schedule(TimerTask task,long delay,long period)
在延迟指定时间后，重复执行任务 public void cancel()
取消任务`},{header:"方法的使用",slug:"方法的使用",content:`package com.api.DuoXianCheng; import java.util.Date;
import java.util.Timer;
import java.util.TimerTask; public class Timer01 { public static void main(String[] args) { // public Timer() Timer timer = new Timer(); //public void schedule(TimerTask task,long delay) timer.schedule(new TimerTask() { @Override public void run() { System.out.println(1); // timer run } }, new Date()); // public void schedule(TimerTask task,long delay) timer.schedule(new TimerTask() { @Override public void run() { System.out.println(11111111); // timer run } }, 10000); // public void schedule(TimerTask task, Date firstTime, long period) timer.schedule(new TimerTask() { @Override public void run() { System.out.println(3); // timer run } }, new Date(), 10000); // public void schedule(TimerTask task,long delay,long period) timer.schedule(new TimerTask() { @Override public void run() { System.out.println(4); // timer run } }, 10000, 1000); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E5%B9%B6%E5%8F%91%E8%AE%BF%E9%97%AE%E9%97%AE%E9%A2%98.html",title:"",pathLocale:"/",contents:[{header:"并发访问问题",slug:"并发访问问题",content:""},{header:"多线程引发的安全问题(并发访问问题)",slug:"多线程引发的安全问题-并发访问问题",content:`案例：
有一家电影院正在上映一部电影，一共只有 100 张票，有 3 个窗口在售票，请编写程序模拟售票过程。
// 这段代码会出现安全问题
package com.api.DuoXianCheng; public class Ticket01 { public static void main(String[] args) { // 三个窗口，即三个线程 Ticket ticket = new Ticket(); Thread t1 = new Thread(ticket); Thread t2 = new Thread(ticket); Thread t3 = new Thread(ticket); t1.setName("窗口1"); t2.setName("窗口2"); t3.setName("窗口3"); t1.start(); t2.start(); t3.start(); }
}
class Ticket implements Runnable { private int ticketNum = 100; @Override public void run() { // 售票代码 while (true) { if (ticketNum > 0) { try { Thread.sleep(1000); } catch (InterruptedException e) { e.printStackTrace(); } System.out.println( Thread.currentThread().getName() + ":出票，票号为：" + ticketNum ); ticketNum--; } else { break; } } }
}`},{header:"问题分析：",slug:"问题分析",content:`1：多个线程出现重复的数据(比如多个线程都给出了票编号为 100)。
2：多个线程出现错误的数据(比如多个线程给出了票编号为 101 或-1)。`},{header:"问题产生的原因：",slug:"问题产生的原因",content:"多个线程在操作同一个数据时，没有同步机制，随着 CPU 的抢占，数据之间相互占用及修改，导致数据不一致。"},{header:"解决问题的方法：",slug:"解决问题的方法",content:"使用同步机制，保证同一时刻，只能有一个线程对数据进行操作。"}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E6%AD%BB%E9%94%81.html",title:"",pathLocale:"/",contents:[{header:"死锁",slug:"死锁",content:`同步代码块，互相嵌套，会造成死锁现象；实际开发要避免死锁。 举例：有一双筷子，谁拿到了，谁就可以吃饭了，但是 A 拿了一只，B 拿了另一只，那就死锁了。
package com.api.DuoXianCheng; public class SiSuo { public static void main(String[] args) { String s1 = "左筷子"; String s2 = "右筷子"; new Thread("小明"){ public void run() { while (true) { // 同步代码块互相嵌套：会造成死锁 synchronized (s1) { System.out.println(getName() + "拿到了" + s1 + "等待" + s2); synchronized (s2) { System.out.println(getName() + "拿到了" + s2 + "开始吃"); } } } } }.start(); new Thread("大正"){ public void run() { while (true) { // 同步代码块互相嵌套：会造成死锁 synchronized (s2) { System.out.println(getName() + "拿到了" + s2 + "等待" + s1); synchronized (s1) { System.out.println(getName() + "拿到了" + s1 + "开始吃"); } } } } }.start(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%A4%9A%E7%BA%BF%E7%A8%8B/%E7%AD%89%E5%BE%85%E5%94%A4%E9%86%92%E6%9C%BA%E5%88%B6.html",title:"",pathLocale:"/",contents:[{header:"等待唤醒机制",slug:"等待唤醒机制",content:`用来解决生产者和消费者的问题(一个买票，一个出票，正常应该出一张票买一张票) 方法
作用 public final void wait()
使当前线程等待 public final void notify()
唤醒正在等待的单个线程。 public final void notifyAll()
唤醒正在等待的所有线程。 package com.api.DuoXianCheng; public class ThreadWait { public static void main(String[] args) { Ticket6 ticket3 = new Ticket6(); // 使用匿名子类对象创建两个线程 new Thread(new Runnable() { @Override public void run() { while (true) { ticket3.print1(); } } }).start(); new Thread(new Runnable() { @Override public void run() { while (true) { ticket3.print2(); } } }).start(); new Thread(new Runnable() { @Override public void run() { while (true) { ticket3.print3(); } } }).start(); }
} class Ticket6 { // 使用同步代码块 只有两个线程 /* private Object obj = new Object(); // 锁对象 private Boolean flag = false; public void print1(){ synchronized (obj) { while (!flag){ try { obj.wait(); } catch (InterruptedException e) { e.printStackTrace(); } } System.out.print("我"); System.out.print("要"); System.out.print("上"); System.out.print("学"); System.out.println("校"); obj.notify(); this.flag = false; } } public void print2(){ synchronized (obj) { while (flag){ try { obj.wait(); } catch (InterruptedException e) { e.printStackTrace(); } } System.out.print("天"); System.out.print("天"); System.out.print("不"); System.out.print("迟"); System.out.println("到"); obj.notify(); this.flag = true; } } */ // 同步方法 假如有多个线程怎么使用等待唤醒机制 private int i = 1; public synchronized void print1() { while (i != 1){ try { this.wait(); } catch (InterruptedException e) { e.printStackTrace(); } } System.out.print("我"); System.out.print("要"); System.out.print("上"); System.out.print("学"); System.out.println("校"); this.notifyAll(); this.i = 2; } public synchronized void print2() { while (i != 2){ try { this.wait(); } catch (InterruptedException e) { e.printStackTrace(); } } System.out.print("天"); System.out.print("天"); System.out.print("不"); System.out.print("迟"); System.out.println("到"); this.notifyAll(); this.i = 3; } public synchronized void print3() { while (i != 3){ try { this.wait(); } catch (InterruptedException e) { e.printStackTrace(); } } System.out.print("好"); System.out.print("孩"); System.out.println("子"); this.notifyAll(); this.i = 1; }
}`},{header:"wait 和 sleep 的区别",slug:"wait-和-sleep-的区别",content:`wait 和 sleep 都可以暂停线程的执行。 wait 是 Object 类中的普通成员方法；
sleep 是 Thread 类中的静态成员方法。 wait 暂停后，会释放锁对象，需要被唤醒；
sleep 暂停后，不会释放锁对象，也不需要被唤醒。 wait 通常被用于线程间交互通信；
sleep 通常被用于暂停执行。`},{header:"关于 java 中线程安全的类",slug:"关于-java-中线程安全的类",content:`StringBuffer 和 StringBuilder
StringBuilder：线程不安全，效率高
StringBuffer：线程安全，效率低 ArrayList 和 Vector
ArrayList：线程不安全，效率高
Vector：线程安全，效率低 HashMap 和 HashTable
HashMap：线程不安全，效率高
HashTable：线程安全，效率低 Collections.synchronizedXXX
这些类都是线程安全的， 这些类的源代码中， 一般的方法都会被 synchronized 关键字修饰。`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E4%BA%8C%E5%8F%89%E6%A0%91.html",title:"",pathLocale:"/",contents:[{header:"普通二叉树",slug:"普通二叉树",content:"普通二叉树： 二叉查找树： 平衡二叉树： 红黑树："}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E5%93%88%E5%B8%8C%E8%A1%A8.html",title:"",pathLocale:"/",contents:[{header:"哈希表",slug:"哈希表",content:`哈希值：是 jdk 通过对象的地址值和一些算法计算出来的一个 int 类型的整数值，
可以通过 Object 类中的 hashCode()方法获取。
jdk1.8 之前：数组 + 链表(即，元素为链表的数组) jdk1.8 开始：数组 + 链表 + 红黑树`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html",title:"",pathLocale:"/",contents:[{header:"数据结构",slug:"数据结构",content:""},{header:"队列：先进先出",slug:"队列-先进先出",content:""},{header:"栈：先进后出",slug:"栈-先进后出",content:""},{header:"数组：查询快，增删慢",slug:"数组-查询快-增删慢",content:""},{header:"链表：查询慢，增删快",slug:"链表-查询慢-增删快",content:"单向链表： 单向链表修改： 双向链表："}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Filter/Filter.html",title:"",pathLocale:"/",contents:[{header:"Filter",slug:"filter",content:`// 注解方式
package com.api.Filter; import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException; @WebFilter("/*")
public class Filter02 implements Filter { @Override public void init(FilterConfig filterConfig) throws ServletException { Filter.super.init(filterConfig); } @Override public void doFilter(ServletRequest sReq, ServletResponse sResp, FilterChain chain) throws IOException, ServletException { chain.doFilter(sReq, sResp); } @Override public void destroy() { Filter.super.destroy(); }
}
// 配置文件方式
package com.api.Filter; import javax.servlet.*;
import java.io.IOException; public class Filter01 implements Filter { @Override public void init(FilterConfig filterConfig) throws ServletException { Filter.super.init(filterConfig); } @Override public void doFilter(ServletRequest sReq, ServletResponse sResp, FilterChain chain) throws ServletException, IOException { System.out.println("Filter01 doFilter ..."); // 过滤，或者叫放行，不放行没法走到下一步 chain.doFilter(sReq, sResp); } @Override public void destroy() { Filter.super.destroy(); }
}
<!-- tomcat的 web.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation=" http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" version="2.5"
>
<display-name>Demo01</display-name> <welcome-file-list> <welcome-file>index.html</welcome-file> <welcome-file>index.htm</welcome-file> <welcome-file>index.jsp</welcome-file> <welcome-file>default.html</welcome-file> <welcome-file>default.htm</welcome-file> <welcome-file>default.jsp</welcome-file> </welcome-file-list> <!--servlet配置--> <servlet> <!-- servlet-name：servlet名称，自定义，唯一 servlet-class：servlet实现类全路径名 servlet-name：同上，需要保持一致 url-pattern：servlet虚拟路径，随便起，但是千万别忘了/ 访问：localhost:8080/虚拟目录/虚拟路径 --> <servlet-name>servletDemo01</servlet-name> <servlet-class>com.api.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>servletDemo01</servlet-name> <url-pattern>/demo01</url-pattern> </servlet-mapping> <!--filter配置--> <!-- filter-name：filter名称，自定义，唯一 filter-class：filter实现类全路径名 filter-name：同上，需要保持一致 url-pattern：/servlet-name --> <filter> <filter-name>Filter01</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter01</filter-name> <!--拦截具体的资源--> <url-pattern>/servletDemo01</url-pattern> </filter-mapping> <filter> <filter-name>Filter02</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter02</filter-name> <!--拦截user模块下的所有资源--> <url-pattern>/user/*</url-pattern> </filter-mapping> <filter> <filter-name>Filter03</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter03</filter-name> <!--拦截jsp类型的文件--> <url-pattern>*.jsp</url-pattern> </filter-mapping> <filter> <filter-name>Filter04</filter-name> <filter-class>com.api.Filter.Filter01</filter-class> </filter> <filter-mapping> <filter-name>Filter04</filter-name> <!--拦截所有资源--> <url-pattern>/*</url-pattern> </filter-mapping>
</web-app>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Filter/Filter%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"Filter 概述",slug:"filter-概述",content:`Filter：拦截，过滤器，javaweb 三大组件(servlet、filter、listener)之一，属于服务器端；
过滤器的目的就是为了提高代码的复用性，简化代码；
Filter 与 Servlet 非常相似，区别在于 Servlet 用于处理客户端请求，生成响应，而 Filter 用于对 Servlet 产生的响应进行拦截和过滤，从而实现一些特殊的功能。
Filter 实现类是 javax.servlet.Filter`},{header:"过滤器的步骤",slug:"过滤器的步骤",content:`创建一个类，实现 Filter 接口
重写方法
配置拦截路径`},{header:"过滤器的使用场景",slug:"过滤器的使用场景",content:`登录验证
权限控制
统一编码处理(比如获取请求参数中文乱码的问题，将代码从 servlet 中抽取出来)
敏感词汇过滤`},{header:"Filter 生命周期",slug:"filter-生命周期",content:`初始化 init()
过滤 doFilter()
销毁 destroy()`},{header:"Filter + Servlet 执行顺序",slug:"filter-servlet-执行顺序",content:`服务器开启的时候执行 filter 的 init
然后执行 servlet 的 init
然后执行 filter 的 doFilter，拦截放行前的代码
然后执行 servlet 的 service, doGet/doPost
然后执行 filter 的 doFilter，拦截放行后的代码
服务器关闭的时候会执行 servlet 的 destroy
然后执行 filter 的 destroy`},{header:"url-pattern 配置",slug:"url-pattern-配置",content:`servlet 的 url-pattern 配置：目的是为了设置具体如何访问这个 servlet 资源
filter 的 ur-pattern 配置的目的：为了设置具体的拦截或者说过滤的资源 精确匹配：/index.jsp
目录匹配：/user/*
后缀名匹配：*.jsp
拦截所有资源：/*`},{header:"Filter 的配置方式",slug:"filter-的配置方式",content:`web.xml 配置
注解配置(@WebFilter("/*")`},{header:"过滤器链及执行顺序",slug:"过滤器链及执行顺序",content:`就是配置多个过滤器，合在一起就是过滤器链 配置文件方式：按照 filter 标签的配置顺序依次执行
注解方式：按照 filter 类文件的类名的字典顺序(从小到大)执行
destory 顺序和加载顺序正好倒过来 两个过滤器的执行顺序： filter 1 init
filter 2 init
servlet init
filter 1 前
filter 2 前
servlet service
filter 2 后
filter 1 后
filter 2 destroy
filter 1 destroy`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Http%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"Http 概述.md",slug:"http-概述-md",content:`超文本传输协议(HyperText Transfer Protocol)
超文本：超级文本，不是一般的文本
传输协议：定义客户端和服务器端通信时，数据传输的格式`},{header:"Http 协议的特点",slug:"http-协议的特点",content:`基于 TCP/IP 的高级协议
默认端口号 80(一般网站把服务器端口设置成 80，所以访问的时候一般都不带端口号)
基于请求/响应模型的，一次请求对应一次响应
无状态的协议，在两个请求和响应之间，互相不干涉不影响`},{header:"Http 请求消息格式",slug:"http-请求消息格式",content:`请求行(请求方式 + 请求 URI + 请求协议/版本) 请求方式(GET、POST、PUT、DELETE、HEAD、OPTIONS、TRACE 一共 7 种)
GET： 请求参数在地址栏上显示，实际参数在请求行中
请求的 URL 地址长度有限制
不太安全 POST： 请求参数在请求体中
请求的 URL 地址长度没有限制
相对安全 URI：统一资源标识符(格式：虚拟目录 + 资源名称/资源的虚拟路径)
URL：统一资源定位符(格式：协议 + Ip + 端口 + 虚拟目录 + 资源名称/资源的虚拟路径) 协议版本：
HTTP/1.0： 请求和响应的 header 和 body 都是明文
请求和响应的 header 和 body 都是不安全的
一次连接(tcp 连接)，只能有一次请求和一次响应，响应后会断开连接(tcp 连接：搭桥) HTTP/1.1： 请求和响应的 header 是明文，body 是加密的
请求和响应的 header 和 body 都是不安全的
一次连接，可以有多次请求和响应，直到浏览器或服务器有一个断开、或者超时才会断开连接 HTTP/2.0： 请求和响应的 header 是明文，body 是加密的
请求和响应的 header 和 body 都是安全的 请求头 请求头都是 key: value 格式，其中 value 的值如果有多个，不要空格用逗号连接 请求头
说明 Accept
浏览器可以接收的 MIME 数据类型 Connection
表示是否需要持续链接 Content-Length
请求体的长度(get 没有，因为 get 没有请求体) Referer
告诉服务器是从哪个页面跳转过来的，从浏览器中直接输入的是不会有的。一般做统计和防盗链。 User-Agent
告诉服务器访问的浏览器类型，当返回的数据和浏览器类型有关的时候这个属性非常有用。 Cookie
浏览器发送的 Cookie MIME: 大类型/子类型
比如：text/html,text/css,text/javascript,image/jpeg,image/png,image/gif...都是 MIME 类型 请求空行 请求体`},{header:"Http 响应消息格式",slug:"http-响应消息格式",content:`响应行(协议/版本 + 状态码) 状态码：1. 消息 2. 成功 3. 重定向(302：真正的重定向，304：资源未修改，缓存中获取) 4. 请求错误(404：没找到资源，405：请求方法错误，或者没写 doGet、doPost 方法) 5. 服务器错误(500：bug 等，503：服务器维护中) 响应头 响应头都是 key: value 格式，其中 value 的值如果有多个，不要空格用逗号连接 响应头
说明 Content-Type
告诉浏览器响应回来的 MIME 数据类型；以及让浏览器用什么编码方式进行解析 Location
服务器告诉浏览器，接下来去哪里，在重定向中需要使用 MIME: 大类型/子类型
比如：text/html,text/css,text/javascript,image/jpeg,image/png,image/gif...都是 MIME 类型；
一个标准的响应头格式：Content-Type: text/html;charset=utf-8(告诉浏览器 MIME 数据类型和解析的编码方式) 响应空行 响应体`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Http%E8%B7%AF%E5%BE%84.html",title:"",pathLocale:"/",contents:[{header:"Http 路径",slug:"http-路径",content:""},{header:"绝对路径(好用)",slug:"绝对路径-好用",content:`以前： 以盘符开始的路径就称为绝对路径(比如：C:\\aaa\\bbb\\ccc.txt) 现在： 以/开头的路径(/项目的虚拟路径+资源路径) 以 http: 开头的路径(http://协议+端口号+项目的虚拟路径+资源路径) <!--正常使用的案例-->
<a href="/index.html">绝对路径</a>
<img src="/img/1.jpg" alt="" />
<form action="/servlet01" method="post"></form>
<link rel="stylesheet" href="/css/1.css" />
<script src="/js/1.js"><\/script>
<a href="http://localhost:8080/index.html">绝对路径</a>
<img src="http://localhost:8080/img/1.jpg" alt="" />
<form action="http://localhost:8080/login.html" method="post"></form>
<link rel="stylesheet" href="http://localhost:8080/css/1.css" />
<script src="http://localhost:8080/js/1.js"><\/script>`},{header:"绝对路径的问题",slug:"绝对路径的问题",content:`转发的时候，不管哪种绝对路径，使用全路径都会 404。因为 Tomcat 在转发的时候，默认已经帮我们添加上了/项目的虚拟路径，所以转发的时候，只能用/资源路径
// 这两种都不行(app: 项目的虚拟路径， index.html：资源路径)
request.getRequestDispatcher("/app/index.html").forward(request, response);
request.getRequestDispatcher( "http://localhost:8080/app/index.html" ).forward(request, response); // 只有这种可以
request.getRequestDispatcher("/index.html").forward(request, response);`},{header:"相对路径",slug:"相对路径",content:`以前： ./ 代表当前路径，其中./可以省略不写的
../ 代表上一级目录 现在： 以./开头的路径，还是代表当前路径
以../开头的路径，还是代表上一级目录 现在和以前，查找的规则变了，现在首先要知道两个资源的绝对路径，之后，根据当前的资源所在路径，按照以前的相对路径的规则，找到要匹配的资源 举例：
<!-- 当前资源的绝对路径是:
http://localhost:8080/app/html/index.html 目标资源的绝对路径是:
http://localhost:8080/app/css/1.css 那么，相对路径就是: -->
<link rel="stylesheet" href="../css/1.css" />`},{header:"相对路径转发",slug:"相对路径转发",content:`相对路径转发也是按照上面的规则
@WebServlet("/servlet1")
public class Servlet01 extends HttpServlet { @Override protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { // 转发 request.getRequestDispatcher("./servlet2").forward(request, response); }
}
@WebServlet("/aaa/servlet1")
public class Servlet01 extends HttpServlet { @Override protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { // 转发 request.getRequestDispatcher("../servlet2").forward(request, response); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Response%E5%AF%B9%E8%B1%A1.html",title:"",pathLocale:"/",contents:[{header:"Response 对象",slug:"response-对象",content:`方法
作用 void setStatus(int sc)
设置响应状态码 void setHeader(String name, String value)
设置响应头 void sendRedirect(String location)
重定向 PrintWriter getWriter()
获取字符输出流响应体 ServletOutputStream getOutputStream()
获取字节输出流响应体`},{header:"设置响应状态码",slug:"设置响应状态码",content:`response.setStatus(200); // 不能瞎乱设置，否则不出错了嘛
response.setStatus(302);`},{header:"设置响应头",slug:"设置响应头",content:`// 设置响应头
response.setHeader("Content-Type", "text/html;charset=utf-8");
response.setHeader("Location", "/MyWebApp_war/ReqDemo01");`},{header:"重定向",slug:"重定向",content:`// 方式一(比较原始)
// 设置状态码302
response.setStatus(302);
// 设置Location路径
response.setHeader("Location", "/MyWebApp_war/ReqDemo01"); // 方式二
response.sendRedirect("/MyWebApp_war/ReqDemo01");
重定向流程图：`},{header:"redirect 和 forward (转发和重定向)",slug:"redirect-和-forward-转发和重定向",content:`转发： 浏览器地址栏不变
转发只能进行内部跳转
转发是一次请求，一次响应，也是地址栏不能改变的原因
转发可以实现数据的共享(设置和获取)
转发可以实现 WEB-INF 目录下的资源访问
Tomcat 会自动添加项目的虚拟路径 重定向： 重定向是两次请求，两次响应
重定向可以访问其他站点
重定向地址栏会改变
正常情况下，重定向不能实现数据的共享，因为第二次请求是外部进来的
重定向不能实现 WEB-INF 目录下的资源访问， 因为第二次请求是外部进来的
需要手动设置项目的虚拟路径了，因为可以访问外部了 Http 请求和响应流程：`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/%E8%AE%BE%E7%BD%AE%E5%93%8D%E5%BA%94%E4%BD%93.html",title:"",pathLocale:"/",contents:[{header:"设置 Response 对象响应体",slug:"设置-response-对象响应体",content:`package com.Response; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter; @WebServlet("/demo-2")
public class Demo02 extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { req.setCharacterEncoding("UTF-8"); resp.setContentType("text/html;charset=UTF-8"); // 设置响应体内容 /* PrintWriter pw = resp.getWriter(); pw.write("tom"); */ resp.getWriter().write("<font color='red' size='10'>hahha</font>"); // html会被浏览器解析，浏览器解析后，显示红色字体，字体大小为10 } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doPost(req, resp); }
}`},{header:"响应体中文出现乱码问题",slug:"响应体中文出现乱码问题",content:`// 方式一
response.setCharacterEncoding("UTF-8");
response.setContentType("text/html;charset=UTF-8"); // 方式二
response.setContentType("text/html;charset=UTF-8"); // 这一句等同于方式一 // 方式三(推荐)
response.setContentType("text/html;charset=UTF-8");`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jsp%E5%8E%9F%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"jsp 原理",slug:"jsp-原理",content:"jsp(Java Server Pages)：表面看就是一个能写 java 代码的 html 动态资源，即 java +html；但是本质上就是一个 Servlet。 jsp 原理："}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jsp%E8%AF%AD%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"jsp 语法",slug:"jsp-语法",content:""},{header:"jsp 脚本",slug:"jsp-脚本",content:`格式一：<% java 代码 %>
在这里写的 java 代码，翻译后存在于 servlet 类中的 server() 方法内部(类似于内部变量、方法) 格式二：<%! java 代码 %>
在这里写的 java 代码，翻译后存在于 servlet 类中的成员位置上(类似于成员变量、方法) 格式三：<%= java 代码 %>
在这里写的 java 代码翻译后会打印到浏览器页面上`},{header:"jsp 指令",slug:"jsp-指令",content:`page 指令：主要是用来对 jsp 页面进行各种配置 <!-- contentType：设置jsp翻译成servlet时，服务器告诉浏览器响应数据的MIME类型和编码方式 pageEncoding：设置jsp翻译成servlet时使用的编码格式 import：导包的 isErrorPage：设置为true，就可以在翻译成的servlet对象中使用exception对象；默认为false errorPage：设置错误页面，一般都设置成 errorPage="error.jsp" isELIgnored：设置el表达式是否可用，默认为false
-->
<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%> <%@ page import="java.util.Date" %> <%@ page errorPage="error.jsp" %> <%@ page isELIgnored="true" %> include 指令：主要用来包含其他页面 <!--静态包含：被包含的文件被拼到包含的servlet里边，只生成一个java文件，节省内存-->
<%@ include file="header.jsp" %>
<!--动态包含：一样的效果，但是被包含的文件单独生成了一个java文件-->
<jsp:include page="header.jsp"></jsp:include> taglib 指令：主要用来引入 jstl 标签库 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`},{header:"jsp 注释",slug:"jsp-注释",content:"方式一：<!-- 被注释的代码 --> 方式二(推荐使用，因为注释的内容不在 servlet 源码中，不占内存)：<%-- 备注释的代码 --%>"},{header:"jsp 九大内置对象",slug:"jsp-九大内置对象",content:`对象名
对象的真实类型
作用 pageContext
PageContext
四大域对象之一，范围是当前 jsp 页面，实现数据的共享 request
HttpServletRequest
四大域对象之一，范围是一次请求的范围，实现数据共享 session
HttpSession
四大域对象之一，范围是一次会话的范围，也是用来实现数据共享 application
ServletContext
四大域对象之一，范围是整个项目的范围，也是实现数据共享 response
HttpServletResponse
响应对象，可以设置响应头、响应状态码、响应体内容等 config
ServletConfig
用来配置 Servlet 参数，获取参数的 out
JspWriter
和 PrintWriter 功能几乎一样，向页面写内容的 page
Object
jsp 页面翻译成 Servlet 那个对象，.java .classes exception
Throwable
异常对象，可以设置异常信息`},{header:"EL 表达式",slug:"el-表达式",content:`EL 表达式：目的是为了简化 jsp 语法
格式：\${表达式} 运算符： 算术运算符：+ - \\* / %
关系运算符：> < >= <= == !=
逻辑运算符：&&(and)、||(or)、!(not)、!true(not true)
空运算符：empty
用来判断字符串、数组、集合中的数据是否为 null 或者是长度是否为 0 获取值： 获取值的前提是要先有只值，这个值是事先存储在域中的，可以通过域对象名称来获取，其中域名称可以省略；
当域名称被省略时，他会按照 pageContext -> request - > session - > application 的顺序(从小到大)依次查找域对象，直到找到为止。
获取域对象中的值：\${域对象名称.键名}
获取域对象中的值：\${键名}
获取域对象中的值：\${键名.属性名}
获取域对象中的值：\${键名[索引]}
获取域对象中的值：\${键名['属性名']}
获取域对象中的值：\${键名[索引].属性名} 域对象
对应的域对象名称 pageContext
pageScope request
requestScope session
sessionScope application
applicationScope <%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="com.domain.Student" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head></head>
<body>
<% // 存取值 request.setAttribute("name", "张三"); session.setAttribute("age", 18); ArrayList aaa = new ArrayList<String>(); aaa.add("aaa"); aaa.add("bbb"); aaa.add("ccc"); pageContext.setAttribute("list", aaa); HashMap<String, String> map = new HashMap<>(); map.put("username", "xiaoming"); map.put("password", "123456"); application.setAttribute("map", map); Student s = new Student("张三", 18); request.setAttribute("student", s); HashMap<String, Student> students = new HashMap<>(); students.put("1", new Student("张三", 18)); students.put("2", new Student("李四", 19)); request.setAttribute("students", students); // 判断是否为空 String s1 = ""; String s2 = null; ArrayList p1 = new ArrayList<>(); ArrayList p2 = new ArrayList<>(); p2.add(1); request.setAttribute("s1", s1); request.setAttribute("s2", s2); request.setAttribute("p1", p1); request.setAttribute("p2", p2);
%> \${ requestScope.name }<br/>
<%--页面上展示：张三--%>
\${ sessionScope.age }<br/>
<%--页面上展示：18--%> \${ pageScope.list }<br/>
<%--页面上展示：[aaa,bbb,ccc]--%>
\${ list[0] }<br/>
<%--页面上展示：aaa--%> \${ applicationScope.map }<br/>
<%--页面上展示：{password=123456, username=xiaoming}--%>
\${ map.password }<br/>
<%--页面上展示：123456--%>
\${ map['password'] }<br/>
<%--页面上展示：123456--%> \${ requestScope.student }<br/>
<%--页面上展示：Student{name='张三', age=18}--%>
\${ student.name }<br/>
\${ student.aaa }<br/>
<%--页面上展示：张三--%>
<%--页面上展示：约吗？ --%> \${ requestScope.students }<br/>
<%--页面上展示：{1=Student{name='张三', age=18}, 2=Student{name='李四', age=19}}--%>
\${ students.get("2") }<br/>
<%--页面上展示：Student{name='李四', age=19}--%>
\${ students.get("2").age }<br/>
<%--页面上展示：19--%> \${empty s1}
<%--true--%>
\${not empty s2}
<%--false--%>
\${empty p1}
<%--true--%>
\${empty p2}
<%--false--%>
</body>
</html>
// Student.java
package com.domain; public class Student { private String name; private int age; public Student() { } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } public Student(String name, int age) { this.name = name; this.age = age; } @Override public String toString() { return "Student{" + "name='" + name + '\\'' + ", age=" + age + '}'; } public String getAaa() { return "约吗？"; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/jsp/jstl.html",title:"",pathLocale:"/",contents:[{header:"jstl",slug:"jstl",content:"jstl 是 Jsp 标准标签函式库，用来替代 Java 代码的，提高了页面的维护性"},{header:"jslt 如何使用",slug:"jslt-如何使用",content:`导入相关的 jar 包(依赖)
再 jsp 页面上引入指令
在 jsp 页面中写 jstl 标签库`},{header:"常见的标签",slug:"常见的标签",content:`标签
作用 if 标签
条件判断 c:forEach
循环 c:forTokens
循环 c:choose
分支选择 c:when
分支选择 c:otherwise
分支选择 c:out
输出 c:set
赋值 c:remove
删除 c:catch
异常处理 c:import
引入 <%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.HashMap" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head> <title>Title</title>
</head>
<body>
<!--条件判断一：使用c:set设置变量 -->
<c:set var="num" value="\${3}"/>
<c:choose> <c:when test="\${num == 3}"> 约 </c:when> <c:otherwise> 不约 </c:otherwise>
</c:choose>
<%--条件判断二：使用request.setAttribute设置变量--%>
<% int num = 3; request.setAttribute("num", num);
%>
<c:if test="\${num == 3}">约</c:if>
<c:if test="\${num != 3}">不约</c:if><br> <%--
forEach 遍历
var: 定义的变量
begin: 从几开始
end: 到几结束
step: 步长
varStatus: 遍历状态 index: 索引 count: 遍历次数
items: 被遍历的容器(数组、单双例集合)
--%>
<c:forEach var="num" begin="1" end="10" step="1" varStatus="status"> \${num}----\${status.index}----\${status.count}<br> <c:out value="\${num}"/>
</c:forEach> <% int[] arr = {1, 2, 3, 4, 5}; request.setAttribute("arr", arr); ArrayList<String> list = new ArrayList<>(); list.add("aaa"); list.add("bbb"); request.setAttribute("list", list); HashMap<String, String> map = new HashMap<>(); map.put("username", "xiaoming"); map.put("password", "123456"); request.setAttribute("map", map);
%>
<c:forEach var="num" step="1" varStatus="status" items="\${arr}"> \${num}----\${status.index}----\${status.count}<br>
</c:forEach>
<c:forEach var="a" items="\${list}"> <c:out value="\${a}"/><br>
</c:forEach>
<c:forEach var="b" items="\${map}"> \${b.key}----\${b.value}<br> <c:out value="\${b}"/><br>
</c:forEach>
</body>
</html>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Maven/Maven.html",title:"",pathLocale:"/",contents:[{header:"Maven",slug:"maven",content:""},{header:"配置环境变量",slug:"配置环境变量",content:"MAVEN_HOME=D:\\Program Files\\apache-maven-3.6.3 Path=%MAVEN_HOME%\\bin mvn -version"},{header:"配置本地仓库",slug:"配置本地仓库",content:`找到 maven 下的 conf 文件夹
找到 settings.xml 进行修改
修改 localRepository 属性值 <!--settings.xml -->
<localRepository>D:/JavaPackage/repository</localRepository>`},{header:"配置阿里云镜像",slug:"配置阿里云镜像",content:`<mirror> <id>alimaven</id> <mirrorOf>central</mirrorOf> <name>aliyun maven</name> <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
</mirror>`},{header:"下载基本的 jar 包",slug:"下载基本的-jar-包",content:"mvn help:system"},{header:"常用命令",slug:"常用命令",content:`进入到项目的根目录下执行，即 pom.xml 所在的目录下，cmd 执行 命令
作用 mvn clean
清理 mvn compile
编译 mvn test
测试 mvn package
打包 mvn install
安装 mvn deploy
部署`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Maven/Maven%E7%9A%84%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E4%B8%8E%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92.html",title:"",pathLocale:"/",contents:[{header:"Maven 的依赖范围与依赖传递",slug:"maven-的依赖范围与依赖传递",content:`比如正式环境肯定不需要测试环境的依赖了
依赖范围就是用来控制依赖的传递`},{header:"依赖的基本配置",slug:"依赖的基本配置",content:`属性
说明 groupid
公司名称 artifactid
项目名称 version
版本号 scope
依赖范围 type
依赖类型，默认就是 jar，基本不用变 exclusions
排除依赖`},{header:"Scope 依赖范围",slug:"scope-依赖范围",content:`依赖范围
说明 compile
默认范围，编译、测试、运行三种 classpath 都有效，在本地仓库中找 provided
编译、测试有效，运行无效，比如 servlet-api.jar 只需要编译和测试的时候使用，运行的时候容器已经提供 runtime
测试、运行有效，编译无效，比如 jdbc 驱动，编译时只需要 java 的 jdbc 接口，只有运行时才需要 jdbc 驱动 test
只在测试时有效 system
编译、测试有效，运行无效，在硬盘上找 <dependencies> <dependency> <groupId>org.springframework</groupId> <artifactId>spring-context</artifactId> <version>5.3.9</version> <scope>compile</scope> </dependency> <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>3.1.0</version> <scope>provided</scope> </dependency> <dependency> <groupId>mysql</groupId> <artifactId>mysql-connector-java</artifactId> <version>8.0.26</version> <scope>runtime</scope> </dependency> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.11</version> <scope>test</scope> </dependency>
</dependencies>`},{header:"依赖排除",slug:"依赖排除",content:`如果引入的依赖中，有我们不需要的依赖，那么就可以使用排除依赖，比如 a.jar 引入了 b.jar(1.0 版本)，c.jar 引入了 b.jar(2.0 版本)，那么 a.jar 和 c.jar 引入的 b.jar 版本不同，就会产生冲突，这个时候就需要排除依赖 <dependencies> <dependency> <groupId>com.aaa</groupId> <artifactId>a</artifactId> <version>1.0</version> <exclusions> <exclusion> <groupId>com.bbb</groupId> <artifactId>b</artifactId> </exclusion> </exclusions> </dependency> <dependency> <groupId>com.ccc</groupId> <artifactId>c</artifactId> <version>1.0</version> </dependency> <dependency> <groupId>com.bbb</groupId> <artifactId>b</artifactId> <version>2.0</version> </dependency>
</dependencies>`},{header:"依赖传递",slug:"依赖传递",content:`A 依赖 B，B 依赖 C，那么 A 也会依赖 C，被依赖的依赖要写在最下面，比如 A 依赖 B，B 依赖 C，那么 A 的依赖范围要写在 B 的依赖范围下面，B 的依赖范围要写在 C 的依赖范围下面 <dependencies> <dependency> <groupId>com.aaa</groupId> <artifactId>a</artifactId> <version>1.0</version> <scope>compile</scope> </dependency> <dependency> <groupId>com.bbb</groupId> <artifactId>b</artifactId> <version>1.0</version> <scope>compile</scope> </dependency> <dependency> <groupId>com.ccc</groupId> <artifactId>c</artifactId> <version>1.0</version> <scope>compile</scope> </dependency>
</dependencies>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Maven/%E4%BE%9D%E8%B5%96%E7%BB%A7%E6%89%BF%E4%B8%8E%E8%81%9A%E5%90%88.html",title:"",pathLocale:"/",contents:[{header:"依赖继承与聚合",slug:"依赖继承与聚合",content:""},{header:"聚合",slug:"聚合",content:`聚合就是将多个模块(或者是多个项目)组织成一个整体，通常用于构建多模块项目。例如，一个项目包含多个模块，如：用户模块、订单模块、支付模块等，这些模块共同完成一个项目。此时，就可以使用聚合来组织这些模块。聚合模块是一个继承自org.apache.maven.plugins:maven-project-plugin的 pom 类型模块，它不包含任何业务逻辑，仅负责管理其子模块。聚合模块的pom.xml文件如下： <!-- 当前是多个项目的情况下，把A项目的pom文件当成是聚合文件 -->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd "
> <modelVersion>4.0.0</modelVersion> <groupId>com.example</groupId> <artifactId>A</artifactId> <version>1.0-SNAPSHOT</version> <!-- 下边开始是聚合 --> <packaging>pom</packaging> <modules> <module>../B</module> <module>../C</module> </modules>
</project> <!-- 当前是一个项目下的多个子模块 -->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd "
> <modelVersion>4.0.0</modelVersion> <groupId>com.example</groupId> <artifactId>Maven452</artifactId> <version>1.0-SNAPSHOT</version> <!-- 下边开始是聚合 --> <packaging>pom</packaging> <modules> <module>A</module> <module>B</module> <module>C</module> </modules>
</project>`},{header:"继承",slug:"继承",content:`继承就是让多个模块共享依赖和插件配置。例如，一个项目包含多个模块，这些模块都使用相同的依赖和插件配置，那么就可以将这些配置提取到一个父模块中，让其他模块继承这个父模块。父模块的pom.xml文件如下： <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd "
> <modelVersion>4.0.0</modelVersion> <groupId>com.example</groupId> <artifactId>parent</artifactId> <version>1.0-SNAPSHOT</version> <packaging>pom</packaging> <!-- 在父级声明jar版本 --> <properties> <junit.version>4.12</junit.version> </properties> <!-- 在父级添加共享 --> <dependencyManagement> <dependencies> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>\${junit.version}</version> </dependency> </dependencies> </dependencyManagement> <build> <plugins> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-compiler-plugin</artifactId> <version>3.8.1</version> <configuration> <source>1.8</source> <target>1.8</target> </configuration> </plugin> </plugins> </build>
</project> 在子模块的pom.xml文件中，使用parent元素指定父模块的坐标，并使用dependencyManagement元素指定依赖管理，这样子模块就可以继承父模块的依赖和插件配置。注意在子模块的pom.xml文件中，不需要指定依赖的版本号，因为父模块已经管理了这些依赖的版本号。子模块只需要指定依赖的坐标即可。子模块的pom.xml文件如下： <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd "
> <modelVersion>4.0.0</modelVersion> <parent> <groupId>com.example</groupId> <artifactId>parent</artifactId> <version>1.0-SNAPSHOT</version> </parent> <artifactId>child</artifactId> <dependencies> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> </dependency> </dependencies>
</project>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Maven/%E9%9B%86%E6%88%90Maven.html",title:"",pathLocale:"/",contents:[{header:"集成 Maven",slug:"集成-maven",content:"在 Eclipse 中集成和使用 Maven 创建项目已经被弃用"},{header:"Idea 中配置 Maven 和 Tomcat",slug:"idea-中配置-maven-和-tomcat",content:`;
;
;
;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/JDBC.html",title:"",pathLocale:"/",contents:[{header:"JDBC",slug:"jdbc",content:`// JDBC 最基础的用法
public static void main(String[] args) throws Exception { // 1. 注册驱动 // 已经过时，请弃用 // 2. 获取数据库连接对象 Connection conn = DriverManager.getConnection( "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC", "root", "Sap@1q2w3e4r" ); // 3. 获取执行sql语句的对象 // 有问题，请更换 Statement sta = conn.createStatement(); // 4. 执行sql语句 int i = sta.executeUpdate("insert into user values(3,'rose', 20)"); System.out.println(i); // 1 // 5. 释放资源 rs.close(); sta.close(); conn.close();
}`},{header:"JDBC 基本步骤",slug:"jdbc-基本步骤",content:`注册驱动
获取数据库连接对象
获取执行 SQL 的对象
执行 SQL 语句
释放资源`},{header:"获取数据库连接对象",slug:"获取数据库连接对象",content:`方法
作用 public static Connection getConnection(String url, String user, String password)
根据地址、用户名、密码连接数据库 public static Connection getConnection(String url)
根据全路径连接数据库 public static Connection getConnection(String url, java.util.Properties info)
根据配置文件连接`},{header:"获取执行 sql 语句的对象",slug:"获取执行-sql-语句的对象",content:`Statement 会有 SQL 注入的风险，所以不推荐使用；解决方案：预处理语句。
SQL 注入？
// SQL 注入案例
String username = "tom' or '1' = '1";
String password = "123456";
String sql = "select * from user where username = '" + username
+ "' and password = '" + password + "'"; // 正确写法
String sql = "select * from user where username = ? and password = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, username);
ps.setString(2, password);`},{header:"执行 SQL 语句",slug:"执行-sql-语句",content:`方法
作用 int executeUpdate()
增删改，返回实际影响的行数 ResultSet executeQuery()
查，返回获取到的结果集 boolean execute()
增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false`},{header:"ResultSet 结果集方法",slug:"resultset-结果集方法",content:`方法
作用 boolean next()
判断结果集的下一条是否有数据，如果有数据返回 true，并把光标下移一位 int getInt(int i)
根据当前下标获取数据(1 tom 20：1 的下标 1，tom 下标 2，20 下标 3) int getInt(String name)
根据当前字段名获取数据 String getString(int i)
根据当前下标获取数据 String getString(String name)
根据当前字段名获取数据`},{header:"方法的使用",slug:"方法的使用",content:`package com.api.JDBC; import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Properties; public class demo01 { public static void main(String[] args) throws Exception { // 1. 注册驱动 // 已经过时，请弃用 // Class.forName("com.mysql.jdbc.Driver"); // 2. 获取数据库连接对象 // public static Connection getConnection(String url,String user,String password) // public static Connection getConnection(String url) // public static Connection getConnection(String url,java.util.Properties info) /* Connection conn = DriverManager.getConnection( "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC", "root", "Sap@1q2w3e4r" ) */; /* Connection conn = DriverManager.getConnection( "jdbc:mysql://localhost:3306/sister? serverTimezone=UTC&user=root&password=Sap@1q2w3e4r" ); */ Properties pt = new Properties(); pt.setProperty("user", "root"); pt.setProperty("password", "Sap@1q2w3e4r"); Connection conn = DriverManager.getConnection("jdbc:mysql:// localhost:3306/sister?serverTimezone=UTC", pt); // 3. 获取执行sql语句的对象 // 当前的写法有弊端，后续被弃用了，请放弃 Statement sta = conn.createStatement(); // 4. 执行sql语句 // int executeUpdate()：增删改，返回实际影响的行数 // ResultSet executeQuery()：查 // boolean execute()：增删改查；底层使用，我们很少用；查询返回 true, 增删改返回 false int i = sta.executeUpdate("insert into user values(4,'tony', 22)"); System.out.println(i); // 1 ArrayList<User> al = new ArrayList<User>(); ResultSet rs = sta.executeQuery("select * from user"); // ResultSet 结果集方法 // boolean next()：判断结果集的下一条是否有数据，如果有数据返回true，并把光标下移一位 // int getInt(int i)：根据当前下标获取数据， 1 tom 20： 1的下标1，tom下标2，20下标3 // int getInt(String name)：根据当前字段名获取数据 // String getString(int i)：根据当前下标获取数据 // String getString(String name)：根据当前字段名获取数据 while (rs.next()) { int id = rs.getInt(1); String name = rs.getString("name"); int age = rs.getInt(3); System.out.println(id + " " + name + " " + age); // 结果： // 1 tom 20 // 2 jerry 20 // 3 rose 20 // 4 tony 22 User user = new User(id, name, age); al.add(user); } // 5. 释放资源 rs.close(); sta.close(); conn.close(); for (User u: al){ System.out.println(u); // 结果： // User{id=1, name='tom', age=20} // User{id=2, name='jerry', age=20} // User{id=3, name='rose', age=20} // User{id=4, name='tony', age=22} } }
}
class User{ private int id; private String name; private int age; public User(int id, String name, int age) { this.id = id; this.name = name; this.age = age; } public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "User{" + "id=" + id + ", name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/JDBC%E4%B8%AD%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"JDBC 中事务处理",slug:"jdbc-中事务处理",content:`方法
作用 setAutoCommit(boolean autoCommit)
开启关闭事务自动提交，true 关闭， false 开启 commit()
提交事务 rollback()
回滚事务 // 转账的案例，其中用到了封装的JDBC工具类
package com.api.JDBC; import java.sql.Connection;
import java.sql.PreparedStatement; public class ShiWuChuLi { public static void main(String[] args) throws Exception { Connection conn = UtilClass.getConnection(); /* * 开启事务 * 在控制台上是把1变成0 * 在JDBC中是把ture变成false */ conn.setAutoCommit(false); String sql = "update user set money = money + ? where name = ?"; PreparedStatement ps = conn.prepareStatement(sql); // tom减去100 ps.setInt(1, -100); ps.setString(2, "tom"); ps.executeUpdate(); // 模拟异常 System.out.println(1/0); // jerry加上100 ps.setInt(1, 100); ps.setString(2, "jerry"); ps.executeUpdate(); // 提交事务(不提交自动回滚) conn.commit(); UtilClass.close(conn, ps); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/JDBC%E5%B7%A5%E5%85%B7%E7%B1%BB%E5%B0%81%E8%A3%85.html",title:"",pathLocale:"/",contents:[{header:"JDBC 工具类封装",slug:"jdbc-工具类封装",content:`#jdbc.properties
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=root
package com.api.JDBC; import java.sql.*;
import java.util.Properties; public class UtilClass { private static String driver; private static String url; private static String username; private static String password; private static Connection conn; static { try { Properties p = new Properties(); p.load(UtilClass.class.getClassLoader().getResourceAsStream("jdbc.properties")); System.out.println(p.getProperty("driver")); driver = p.getProperty("driver"); url = p.getProperty("url"); username = p.getProperty("username"); password = p.getProperty("password"); try { Class.forName(driver); } catch (ClassNotFoundException e) { e.printStackTrace(); } } catch (Exception e) { System.out.println("加载配置文件出错"); e.printStackTrace(); } } public static Connection getConnection() throws Exception { Connection conn = DriverManager.getConnection(url, username, password); return conn; } public static void close(Connection conn, PreparedStatement ps, ResultSet rs) { if (rs != null) { try { rs.close(); } catch (SQLException e) { e.printStackTrace(); } } if (ps != null) { try { ps.close(); } catch (SQLException e) { e.printStackTrace(); } } if (conn != null) { try { conn.close(); } catch (SQLException e) { e.printStackTrace(); } } } public static void close(Connection conn, PreparedStatement ps) { close(conn, ps, null); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/",title:"",pathLocale:"/",contents:[{header:"MySql",slug:"mysql",content:""}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A2%9E%E5%88%A0%E6%94%B9.html",title:"",pathLocale:"/",contents:[{header:"增删改",slug:"增删改",content:""},{header:"增加",slug:"增加",content:""},{header:"添加一条记录",slug:"添加一条记录",content:`第一种格式 insert into 表名 (字段1, 字段2, ...) values (data1, data2, ...); insert into user (name, age) values ('Tom', 20); -- 比如表内有两个字段，可以说只给一个赋值，另外一个不赋值
insert into user (name) values ('Tom'); 第二种格式 insert into 表名 values (data1, data2, ...); -- 表内有几个字段就必须给几个值，且顺序都要对应
insert into user values ('Jerry', 25);`},{header:"添加多条记录",slug:"添加多条记录",content:`第一种格式 insert into 表名 (字段1, 字段2, ...) values
(data1, data2, ...), (data1, data2, ...), (data1, data2, ...); insert into user (name, age) values ('Tom', 20), ('Rose', 30), ('Jack', 18); 第二种格式 insert into 表名 values (data1, data2, ...), (data1, data2, ...), (data1, data2, ...); insert into user values ('Jenny', 15), ('Chen', 14); 添加一条记录并获取自增 id 添加一条记录并获取自增 id`},{header:"修改",slug:"修改",content:""},{header:"修改所有记录",slug:"修改所有记录",content:"update 表名 set 字段1 = newdata1, 字段2 = newdata2, ...; update user set name = 'Tom', age = 21;"},{header:"修改多条记录",slug:"修改多条记录",content:`update 表名 set 字段1 = newdata1, 字段2 = newdata2, ... where 条件; -- 条件的类型有很多，当前的条件格式是 字段名 = 值
update user set age = 21 where id = 1; update user set name = 'Tom', age = 21 where name = 'Jerry';`},{header:"删除",slug:"删除",content:""},{header:"删除所有记录",slug:"删除所有记录",content:`方式一:
delete from 表名; delete from user;
方式二:
truncate table 表名;
truncate table user;
区别： 方式一是逐行删除，删除后，表的结构还在，可以重新插入数据
方式二是先将整张表删除，然后再重新创建一张同名表；表的结构被删除，不可以重新插入数据`},{header:"删除多条记录",slug:"删除多条记录",content:`delete from 表名 where 条件;
-- 条件的类型有很多，当前的条件格式是 字段名 = 值
delete from user where id = 1; delete from user where name = 'Tom' and age = 21;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%BA%93%E6%93%8D%E4%BD%9C.html",title:"",pathLocale:"/",contents:[{header:"库操作",slug:"库操作",content:`语法
作用 net start mysql
启动 mysql 服务 net stop mysql
停止 mysql 服务 mysql -u root -p
连接(登录) mysql exit
退出连接 show databases;
查看所有数据库 create database 数据库名;
创建数据库 show create database 数据库名;
查看创建数据库时的语句 drop database 数据库名;
删除数据库 use 数据库名;
选择数据库`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B8%B8%E8%AF%86.html",title:"",pathLocale:"/",contents:[{header:"数据库常识",slug:"数据库常识",content:`关系型数据库： Oracle 大型 收费
Mysql：中小型
DB2：IBM 公司 银行用的多
SQL Server：微软 非关系型数据库： Redis
HBase
MongoDB 大数据库
Neo4J 启动 mysql：cmd 下 net start mysql
关闭 mysql：cmd 下 net stop mysql
登录：mysql -uuserName -ppassword
退出：exit
SQL 语句分类： DDL（Data Definition Language）数据定义语言：库和表的管理 DML（Data Manipulation Language）数据操作语言：插入、删除、更新、查询 DQL（Data Query Language）数据查询语言：查询 DCL（Data Control Language）数据控制语言：授权、角色、级别、权限等`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E7%B4%A2%E5%BC%95.html",title:"",pathLocale:"/",contents:[{header:"索引",slug:"索引",content:`索引？
Mysql 数据库，高效获取数据的一种数据结构
索引是数据库管理系统中一个排序的数据结构，以协助高效查询、更新数据库表中数据。
主键和外键自带索引，其他索引需要手动创建`},{header:"索引的分类",slug:"索引的分类",content:`功能分类 普通索引
主键索引
外键索引
联合索引
全文索引
唯一索引 结构分类 BTree 索引：底层 B + Tree 树结构
Hash 索引：底层哈希表结构`},{header:"索引的优点",slug:"索引的优点",content:`提高数据检索的效率，降低数据库的 IO 成本
通过索引列对数据进行排序，降低数据排序的成本，降低 CPU 的消耗`},{header:"索引的缺点",slug:"索引的缺点",content:`实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引列也是要占用空间的
虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行 INSERT、UPDATE 和 DELETE。因为更新表时，MySQL 不仅要保存数据，还要保存一下索引文件每次对表进行增删改，都会调整因为增删改而产生的碎片，碎片到达一定程度时，会降低效率，解决方法就是定期对表进行 optimize 操作`},{header:"索引的查询",slug:"索引的查询",content:`-- 格式
show index from 表名; show index from user;`},{header:"给某个字段添加索引",slug:"给某个字段添加索引",content:`-- 比如某个查询比较频繁，还想要高效一些
-- 格式
create index 索引名称 on 表名(列名); create index index_name onb user(name);`},{header:"删除索引",slug:"删除索引",content:`-- 格式
drop index 索引名称 on 表名; drop index index_name on user;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E8%A1%A8%E6%93%8D%E4%BD%9C.html",title:"",pathLocale:"/",contents:[{header:"表操作",slug:"表操作",content:`语法
作用 show tables;
查看当前数据库中的所有表 create table 表名(字段 1 数据类型, 字段 2 数据类型, ...)
创建新表 show create table 表名;
查看创建表的时的语句 desc 表名;
查看表结构 alter table 表名 add 字段 数据类型;
向表内新增一个字段 alter table 表名 change 原字段名 新字段名 数据类型;
修改字段名 alter table 表名 modify 字段 数据类型;
修改字段数据类型 alter table 表名 drop 字段名;
删除表内字段 rename table 原表名 to 新表名;
修改表名 drop table 表名;
删除表 create table person( name varchar(20), age int
);`},{header:"常见的数据类型",slug:"常见的数据类型",content:`类型
说明
备注 int
整型
整数类型 decimal(5,2)
浮点型
整数位是 5 位，小数点后保留 2 位 date
日期型
年月日，新增时默认为 null datetime
日期时间型
年月日时分秒，新增时默认为 null timestamp
日期时间型
年月日时分秒，新增时默认为当前时间 varchar(20)
字符串
限制最多 20 个字符 char(4)
定长字符串
限制最多 4 个字符，字符串长度不足 4 时，用空格填充 blob
二进制数据
- text
字符串
- enmur
枚举类型
- set
集合类型
- tinyint
布尔型
-`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E8%A7%86%E5%9B%BE.html",title:"",pathLocale:"/",contents:[{header:"视图",slug:"视图",content:`视图是虚拟存在的表，如果一个查询重复使用，那么可以用视图简化。
视图就是一张表，所以他的增删改查操作和表一样，只是视图的数据来源是真实表。
视图的增删改查操作，都是对真实表的增删改查操作。`},{header:"创建视图",slug:"创建视图",content:`-- 格式
create view view_name (列名, ...) as 复杂的查询语句 -- user 和 computer 两张表，查询 tom 有几台电脑，将用户名和所拥有的电脑名给展示出来
create view user_computer (user_name, computer_name) as select
u.name, c.name from user u, computer c where u.id = c.uid and u.name = 'tom';`},{header:"修改视图内容",slug:"修改视图内容",content:`-- 格式
update view_name set 列名 = 值 where 条件 update user_computer set computer_name = 'mac' where user_name = 'tom';`},{header:"修改视图结构",slug:"修改视图结构",content:`-- 格式
alter view view_name (列名, ...) as 复杂的查询语句 -- 修改视图结构
alter view user_computer (user_name, cname) as select
u.name, c.name from user u, computer c where u.id = c.uid and u.name = 'tom';`},{header:"删除视图",slug:"删除视图",content:`-- 格式
drop view view_name -- 删除视图
drop view user_computer;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E9%A2%84%E5%A4%84%E7%90%86%E8%AF%AD%E5%8F%A5.html",title:"",pathLocale:"/",contents:[{header:"预处理语句",slug:"预处理语句",content:`解决 SQL 注入问题
/* * 预处理语句的优点： * 1. 预编译，性能高 * 2. 防止 SQL 注入 * 3. PreparedStatement 是 Statement 的子类，所以方法基本都一样 * 4. ?：占位符，可以动态传入参数 * 5. 占位符的索引从 1 开始 * 6. ps.set 后设置的值是什么类型，就跟什么类型就行
*/
String sql = "select * from user where username = ? and password = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, username);
ps.setString(2, password);
// 输入姓名和密码，验证用户是否存在
package com.api.JDBC; import java.sql.*;
import java.util.Properties;
import java.util.Scanner; public class DemoLoginIn { public static void main(String[] args) throws Exception { // 输入姓名和密码，验证用户是否存在 Scanner sc = new Scanner(System.in); System.out.println("请输入用户名"); String name = sc.nextLine(); System.out.println("请输入年龄"); Integer age = sc.nextInt(); boolean b = extracted(name, age); if (b) { System.out.println("登录成功"); } else { System.out.println("登录失败"); } } private static boolean extracted(String name, Integer age) throws SQLException { Properties pt = new Properties(); pt.setProperty("user", "root"); pt.setProperty("password", "Sap@1q2w3e4r"); String url = "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"; Connection conn = DriverManager.getConnection(url, pt); /* Statement sta = conn.createStatement(); String sql = "select * from user where name = '" + name + "' and age = '" + age + "'"; ResultSet rs = sta.executeQuery(sql); */ String sql = "select * from user where name = ? and age = ?" PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); ResultSet rs = ps.executeQuery(); // 增sql语句 /* String sql = "insert into user(name, age) values(?, ?)"; PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); int i = ps.executeUpdate(); */ // 删sql语句 /* String sql = "delete from user where name = ? and age = ?"; PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); int i = ps.executeUpdate(); */ // 改sql语句 /* String sql = "update user set name = ? where age = ?"; PreparedStatement ps = conn.prepareStatement(sql); ps.setString(1, name); ps.setInt(2, age); int i = ps.executeUpdate(); */ boolean hasNext = rs.next(); rs.close(); ps.close(); return hasNext; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/ServletContext.html",title:"",pathLocale:"/",contents:[{header:"ServletContext",slug:"servletcontext",content:"代表当前的项目，每一个项目，有且只有一个 ServletContext 对象；且只有被服务器部署的项目才有 ServletContext 对象。"},{header:"ServletContext 对象生命周期",slug:"servletcontext-对象生命周期",content:`创建：当服务器开启的时候，ServletContext 对象就会被创建出来
销毁：当服务器关闭的时候或者当前的项目被卸载的时候，ServletContext 对象就会被销毁`},{header:"获取 ServletContext 对象",slug:"获取-servletcontext-对象",content:""},{header:"ServletContext 对象的作用",slug:"servletcontext-对象的作用",content:""},{header:"1. 获取响应数据文件的 MIMI 类型",slug:"_1-获取响应数据文件的-mimi-类型",content:""},{header:"2. 实现数据的共享(转发也可以实现数据共享)",slug:"_2-实现数据的共享-转发也可以实现数据共享",content:"能够实现数据共享，说明他也是一个域对象(Request 域对象)，他管理的域范围是整个项目(当项目启动了，他的空间产生；当项目关闭时，他的空间消失)"},{header:"ServletContext 域对象与 Request 域对象的区别",slug:"servletcontext-域对象与-request-域对象的区别",content:`都可以实现资源共享；但是 Request 需要转发才能实现；但是 ServletContext 生命周期长，不需要转发；
ServletContext 生命周期长，也不安全(比如 n 个人都访问淘宝购买东西存放在购物车，购物车的数据如果存放在 ServletContext 里面，那么每个人的数据都成公开的秘密了)，不是所有的时候都要用；
Request 只有转发才能数据共享，重定向不行；ServletContext 不受转发和重定向的影响，都能实现数据共享。 域对象三大方法
作用 setAttribute(String name, Object value)
设置数据 getAttribute(String name)
获取数据 removeAttribute(String name)
移除数据`},{header:"3. 获取资源的真实路径",slug:"_3-获取资源的真实路径",content:""},{header:"加载配置文件",slug:"加载配置文件",content:`使用类加载器(相对于当前的 classpath 路径下)
通过真实路径获取配置文件(相对于当前项目下)`},{header:"两种加载配置文件的方式的区别",slug:"两种加载配置文件的方式的区别",content:`如果加载的资源在 classpath 路径下，那么推荐使用类加载器方式(实际开发中都在)
如果加载的资源在项目下，在 classpath 路径外，推荐使用真实路径方式`},{header:"4. 获取 web.xml(核心配置文件)中的全局参数",slug:"_4-获取-web-xml-核心配置文件-中的全局参数",content:`package com.ServletContext; import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties; @WebServlet("/demo1")
public class Demo01 extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { ServletContext sc = req.getServletContext(); // 获取 ServletContext 对象 // 方式一 ServletContext sc1 = req.getServletContext(); // 方式二 // this：当前的 Servlet 对象(继承HttpServlet的这个对象) ServletContext sc2= this.getServletContext(); System.out.println(sc1 == sc2); // true；因为有且只有一个 // 获取MIME类型((随便传入一个文件名，就能知道这个文件是什么类型)) // String mimeType = sc.getMimeType(String fileName); // 文件名 String m1 = sc.getMimeType("index.html"); System.out.println(m1); // text/html String m2 = sc.getMimeType("index.jpg"); System.out.println(m2); // image/jpeg String m3 = sc.getMimeType("index.txt"); System.out.println(m3); // text/plain String m4 = sc.getMimeType("index.mp4"); System.out.println(m4); // video/mp4 // 数据共享 // 设置数据 sc.setAttribute("name", "张三"); // 获取数据(再新建的java文件里也同样，这块就写到当前这个类中了) String name = (String) sc.getAttribute("name"); System.out.println(name); // 张三 // 移除数据 sc.removeAttribute("name"); // 获取资源的真实路径 // 什么也不传，找的是当前项目的根目录(这个点很重要) String realPath = sc.getRealPath(""); System.out.println(realPath); // D:\\Tomcat\\apache-tomcat-8.5.100\\webapps\\MyWebApp_war\\ // 传递了一个路径，则找到当前项目的根目录下的getOrPost.html String realPath1 = sc.getRealPath("/getOrPost.html"); System.out.println(realPath1); // D:\\Tomcat\\apache-tomcat-8.5.100\\webapps\\MyWebApp_war\\getOrPost.html // 胡乱写一个路径，则找到当前项目的根目录下的xxxx String realPath2 = sc.getRealPath("xxxx"); System.out.println(realPath2); // D:\\Tomcat\\apache-tomcat-8.5.100\\webapps\\MyWebApp_war\\xxxx // 通过真实路径获取配置文件 // xxx.properties: 不传是当前项目的根目录，所以xxx.properties要相对根路径添加 String realPath3 = sc.getRealPath("xxx.properties"); System.out.println(realPath3); Properties p = new Properties(); p.load(new FileInputStream(realPath3)); String username = p.getProperty("username"); System.out.println(username);//root // 获取全局参数 String param_name = sc.getInitParameter("name"); System.out.println(param_name); // 张三 } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}
<!--web.xml-->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0"
> <welcome-file-list> <welcome-file>index.html</welcome-file> <welcome-file>index.htm</welcome-file> <welcome-file>index.jsp</welcome-file> <welcome-file>default.html</welcome-file> <welcome-file>default.htm</welcome-file> <welcome-file>default.jsp</welcome-file> </welcome-file-list> <servlet> <servlet-name>aaa</servlet-name> <servlet-class>com.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>aaa</servlet-name> <url-pattern>/bbb</url-pattern> </servlet-mapping> <context-param> <param-name>username</param-name> <param-value>张三</param-value> </context-param>
</web-app>
ServlerContent 获取配置文件路径： classpath 获取配置文件路径：`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html",title:"",pathLocale:"/",contents:[{header:"Servlet 体系结构",slug:"servlet-体系结构",content:`Servlet 接口：
javax.servlet.Servlet 接口，通用的顶级接口 GenericServlet 类：
javax.servlet.GenericServlet 类，实现了 Servlet 接口，是一个通用的抽象类 HttpServlet 类：
javax.servlet.http.HttpServlet 类，继承了 GenericServlet 类，实现了 HttpServletRequest 接口，是一个抽象类`},{header:"Servlet 的多种实现方式",slug:"servlet-的多种实现方式",content:""},{header:"1. 实现 Servlet 接口，并重写方法",slug:"_1-实现-servlet-接口-并重写方法",content:`package com.Servlet; import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException; @WebServlet("/ServletDemo03")
public class ServletDemo03 implements Servlet { @Override public void init(ServletConfig servletConfig) throws ServletException { } @Override public ServletConfig getServletConfig() { return null; } @Override public void service(ServletRequest sReq, ServletResponse sRes) throws ServletException, IOException { } @Override public String getServletInfo() { return null; } @Override public void destroy() { }
}`},{header:"2. 继承 GenericServlet 类，并重写 service 方法",slug:"_2-继承-genericservlet-类-并重写-service-方法",content:`package com.Servlet; import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebServlet;
import java.io.IOException; @WebServlet("/ServletDemo04")
public class ServletDemo04 extends GenericServlet { @Override public void service(ServletRequest sReq, ServletResponse sRes) throws ServletException, IOException { }
}`},{header:"3. 继承 HttpServlet 类, 并重写 doGet 或 doPost 方法(推荐)",slug:"_3-继承-httpservlet-类-并重写-doget-或-dopost-方法-推荐",content:`package com.Servlet; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException; @WebServlet("/ServletDemo05")
public class ServletDemo05 extends HttpServlet { @Override public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { System.out.println("get请求"); } @Override public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { System.out.println("post请求"); }
}
<!DOCTYPE html>
<html lang="en"> <head> <meta charset="UTF-8" /> <title>Title</title> </head> <body> <form method="post" action="http://localhost:8080/MyWebApp_war/ServletDemo05" > 用户名： <input type="text" name="username" /> 密&nbsp;&nbsp;码：<input type="password" name="password" /> <input type="submit" value="提交" /> </form> </body>
</html>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"Servlet 参数配置",slug:"servlet-参数配置",content:`@Override
public void init(ServletConfig config) throws ServletException { // 获取到xml中配置的参数数据 String value = config.getInitParameter("name"); System.out.println("name:" + value);
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B.html",title:"",pathLocale:"/",contents:[{header:"Servlet 执行流程",slug:"servlet-执行流程",content:"浏览器发出请求后，Tomcat 接收到请求，去项目中的 web.xml 文件中找 Servlet 对象，没有再去 Tomcat 的 web.xml 中找 Servlet 对象，找到并开始 Servlet 的创建流程。/，代表匹配所有的资源。 当在 Tomcat 的 web.xml 中，都找不到我们想要的资源，默认会设置，所以会去寻找 index.jsp 等设置的 文件，找到并开始 Servlet 的创建流程。"}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"Servlet 概述",slug:"servlet-概述",content:`能够被浏览器访问到的类就是 Servlet 类，其他的普通类是不能够通过浏览器访问到的；一个普通类想要
被浏览器访问到，必须将这个普通类转换为 Servlet 类，即实现 Servlet 接口。`},{header:"入门小案例",slug:"入门小案例",content:`创建一个普通类，实现 Servlet 接口，并重写 5 个方法 package com.api.Servlet; import javax.servlet.*; public class ServletDemo01 implements Servlet { @Override public ServletConfig getServletConfig() { System.out.println("getServletConfig..."); return null; } @Override public String getServletInfo() { System.out.println("getServletInfo..."); return null; } @Override public void init(ServletConfig arg0) throws ServletException { System.out.println("init..."); } @Override public void service(ServletRequest arg0, ServletResponse arg1) { System.out.println("service..."); System.out.println("ServletDemo01"); } @Override public void destroy(){ System.out.println("destroy..."); }
} 在 service 添加测试内容给，比如输入一句话
在 web.xml 文件中配置 Servlet 类 <?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" version="2.5"
>
<display-name>Demo01</display-name> <welcome-file-list> <welcome-file>index.html</welcome-file> <welcome-file>index.htm</welcome-file> <welcome-file>index.jsp</welcome-file> <welcome-file>default.html</welcome-file> <welcome-file>default.htm</welcome-file> <welcome-file>default.jsp</welcome-file> </welcome-file-list>
<!--servlet配置--> <servlet> <!-- servlet-name：servlet名称，自定义，唯一 servlet-class：servlet实现类全路径名 servlet-name：同上，需要保持一致 url-pattern：servlet虚拟路径，随便起，但是千万别忘了/ 访问：localhost:8080/虚拟目录/虚拟路径 --> <servlet-name>servletDemo01</servlet-name> <servlet-class>com.api.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>servletDemo01</servlet-name> <url-pattern>/demo01</url-pattern> </servlet-mapping>
</web-app> 在浏览器中输入地址 http://localhost:8080/gobang(虚拟目录)/demo01(虚拟路径) 访问这个类
回到 idea 控制台中查看是否有打印输出 // 结果：
// init...
// service...
// ServletDemo01`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E6%B3%A8%E8%A7%A3%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"Servlet 注解配置",slug:"servlet-注解配置",content:"我们可以在 web.xml 文件中，设置多个 servlet、servlet-mapping 这种 Servlet 对象配置，但是一旦如果多了，就很显得很乱，所以除了通过在 web.xml 文件中配置 Servlet 之外，还可以通过注解来配置 Servlet。"},{header:"xml 中配置 Servlet",slug:"xml-中配置-servlet",content:`<!--web.xml文件中设置Servlet-->
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation=" http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0"
> <welcome-file-list> <welcome-file>index.html</welcome-file> <welcome-file>index.htm</welcome-file> <welcome-file>index.jsp</welcome-file> <welcome-file>default.html</welcome-file> <welcome-file>default.htm</welcome-file> <welcome-file>default.jsp</welcome-file> </welcome-file-list> <!-- 第一个Servlet --> <servlet> <servlet-name>aaa</servlet-name> <servlet-class>com.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>aaa</servlet-name> <url-pattern>/bbb</url-pattern> </servlet-mapping> <!-- 第二个Servlet --> <servlet> <servlet-name>demo01</servlet-name> <servlet-class>com.Servlet.ServletDemo01</servlet-class> </servlet> <servlet-mapping> <servlet-name>demo01</servlet-name> <url-pattern>/demo01</url-pattern> </servlet-mapping> <!-- ... 第n个Servlet对象 -->
</web-app>`},{header:"注解中配置 Servlet",slug:"注解中配置-servlet",content:`在 @WebServlet 参数中，value 其实就是 url-pattern，url-pattern 就是访问路径；所以等同于 urlPatterns，即有多种写法。 package com.Servlet; import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import java.io.IOException; //@WebServlet(name = "ServletDemo02", urlPatterns = "/ServletDemo02")
//@WebServlet(urlPatterns = {"/ServletDemo02"})
//@WebServlet(urlPatterns = "/ServletDemo02")
//@WebServlet(value = "/ServletDemo02")
@WebServlet(value = "/ServletDemo02")
public class ServletDemo02 implements Servlet { ServletDemo02(){ System.out.println("ServletDemo02 构造器先于初始化方法执行"); } @Override public void init(ServletConfig sc) throws ServletException { System.out.println("ServletDemo02 初始化方法执行了"); } @Override public ServletConfig getServletConfig() { return null; } @Override public void service(ServletRequest sReq, ServletResponse sRes) throws ServletException, IOException { System.out.println("ServletDemo02 执行了"); } @Override public String getServletInfo() { return null; } @Override public void destroy() { }
}`},{header:"url-pattern 配置",slug:"url-pattern-配置",content:`精确匹配：/ServletDemo02
目录匹配：/xxxxxx/*
后缀名匹配：*.xxxxxxx
任意匹配：/*
任意匹配：/
优先级：精确匹配 > 目录匹配 > 后缀名匹配 > 任意匹配 // 精确匹配：
@WebServlet("/ServletDemo02")
@WebServlet("/aaa/ServletDemo02")
@WebServlet("/aaa/bbb")
// 目录匹配：
@WebServlet("/aaa/*")
@WebServlet("/aaa/bbb/*")
@WebServlet("/aaa/bbb/ccc")
// 后缀名匹配：
@WebServlet("*.do")
@WebServlet("*.do/*")
@WebServlet("*.do/bbb")
// 任意匹配：
@WebServlet("/")
@WebServlet("/*")
注意： 有了任意通配符了，所以可以简写了
/和 *.do 不能写在一起使用
当/*/ServletDemo02 时，*就不代表通配符了，而是符号*`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/Servlet%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",title:"",pathLocale:"/",contents:[{header:"Servlet 生命周期",slug:"servlet-生命周期",content:`方法
作用 init
初始化 service
执行方法 destory
销毁方法`},{header:"init",slug:"init",content:`初始化方法，在 servlet 被创建时执行，只会执行一次
用于加载资源，初始化 servlet 对象`},{header:"service",slug:"service",content:`服务方法，每次请求都会执行
用于处理请求，响应数据`},{header:"destory",slug:"destory",content:"销毁方法，在 服务被正常关闭时，只会执行一次"},{header:"如何将 Servlet 对象的创建提前",slug:"如何将-servlet-对象的创建提前",content:`load-on-startup：用来表示创建 Servlet 对象的时机，默认值为-1，设置的值越小(正整数)，优先级越高；相同优先级，按照 servlet-name 的字典顺序执行 <servlet> <servlet-name>ServletDemo</servlet-name> <servlet-class>com.atguigu.servlet.ServletDemo</servlet-class> <!-- 创建 Servlet 对象的时机 --> <load-on-startup>1</load-on-startup>
</servlet>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Servlet/%E5%9C%A8idea%E4%B8%AD%E9%9B%86%E6%88%90Tomcat.html",title:"",pathLocale:"/",contents:[{header:"在 idea 中集成 Tomcat",slug:"在-idea-中集成-tomcat",content:`创建新的 Web 项目 打开 IntelliJ IDEA，选择 File > New > Project。
在新窗口中，选择 Java Enterprise 类别下的 Web Application，点击 Next > Next。
填写项目名称（例如 MyWebApp），选择项目存储位置，点击 Finish。 配置 Tomcat 服务器 打开 File > Settings（或 Preferences on macOS）。
转到 Build, Execution, Deployment > Application Servers，点击+，选择本地安装的 Tomcat 路径，点击 OK。 添加 Servlet 依赖 -如果你的项目是 Maven 项目，确保 pom.xml 文件中包含以下 Servlet API 依赖： <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>4.0.1</version> <scope>provided</scope>
</dependency>
如果是 Gradle 项目，在 build.gradle 中添加：
dependencies { providedCompile 'javax.servlet:javax.servlet-api:4.0.1'
} 创建 Servlet 类 在 src\\main\\java 目录下，右键你的包名，选择 New > Servlet（如果看不到 Servlet 选项，确保你选择了正确的目录层级，或者直接创建一个普通的 Java 类）。命名你的 Servlet（例如 HelloWorldServlet），并实现逻辑。 配置 web.xml -在 WEB-INF 目录下的 web.xml 中，配置 Servlet 映射： <servlet> <servlet-name>HelloWorldServlet</servlet-name> <servlet-class>your.package.name.HelloWorldServlet</servlet-class>
</servlet>
<servlet-mapping> <servlet-name>HelloWorldServlet</servlet-name> <url-pattern>/hello</url-pattern>
</servlet-mapping> 部署并运行项目 右键项目，选择 Run > Edit Configurations。
点击左上角的+，选择 Tomcat Server > Local。
在新出现的配置窗口中，选择你刚才创建的项目作为 Deployment。
点击 Apply，然后 OK。
使用菜单栏的 Run > Run 'MyWebApp'来启动 Tomcat 服务器。 访问 Servlet 打开浏览器，输入 http://localhost:8080/your-context-path/hello（your-context-path 通常是项目名，除非你在部署时指定了不同的上下文路径），
你应该能看到 Servlet 的响应。
这样，你就成功地在 IntelliJ IDEA 中创建了一个 Web 项目，并通过 Tomcat 服务器访问了 Servlet。 注意： 选择到 Tomcat 的安装根目录，而不是 bin 目录。Tomcat 的根目录通常包含了 bin、conf、lib 等多个子目录。 快捷键 ctrl + alt + s 快速打开配置窗口`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/DOM4J%E8%A7%A3%E6%9E%90.html",title:"",pathLocale:"/",contents:[{header:"DOM4J 解析",slug:"dom4j-解析",content:"需要先导入相关的 jar 包"},{header:"DOM4J 解析的步骤：",slug:"dom4j-解析的步骤",content:`创建一个 SAXReader 对象
调用 read 方法读取 XML 文件，并返回 Document 对象
获取根元素
获取子元素
获取属性
获取文本内容
遍历 <?xml version="1.0" encoding="UTF-8"?>
<!--学生信息配置文件-->
<students> <student id="9527"> <name>张三</name> <age>20</age> <sex>男</sex> </student> <student id="9528"> <name>李四</name> <age>20</age> <sex>女</sex> </student>
</students>`},{header:"相关的常用 api",slug:"相关的常用-api",content:`SAXReader： 方法
作用 Document read(InputStream is)
将配置文件加载进内存，转成 dom 树，获取 document 对象 Document： 方法
作用 Element getRootElement()
获取根元素对象 xpath：(xpath：//标签) 方法
作用 List<Node>selectNodes(String xpath)
根据 xpath 表达式获取多个节点对象 Node selectSingleNode(String xpath)
根据 xpath 表达式获取单个节点对象 Element： 方法
作用 List<Element> elements(String name)
获取指定名称的子节点对象集合 Element element(String name)
获取指定名称的第一个子节点对象 String getText()
获取当前节点的文本内容 String getName()
获取当前节点的名称 String attributeValue(String name)
获取指定名称的属性值 String elementText(String name)
获取指定名称的子节点文本内容 node： 方法
作用 String getName()
获取节点对象名字 String getText()
获取节点对象标签文本`},{header:"DOM4J 解析-标签选择器方式",slug:"dom4j-解析-标签选择器方式",content:`package com.api.XML; import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader; import java.io.InputStream;
import java.util.List; //xml解析
public class XmlDemo01 { public static void main(String[] args) throws Exception { // 创建解析器对象 SAXReader reader = new SAXReader(); // 加载配置文件：配置文件在 classpath 类路径下 InputStream inputStream = XmlDemo01.class.getResourceAsStream("/student.xml"); if (inputStream != null) { // 加载配置文件，获取Document对象 Document document = reader.read(inputStream); // 关闭输入流 inputStream.close(); // 获取到根节点对象 Element rootElement = document.getRootElement(); // 获取跟标签下的所有的子标签对象 List<Element> elements = rootElement.elements(); for (Element element : elements) { List<Element> eles = element.elements(); // 获取id属性的值 String id = element.attributeValue("id"); System.out.println("id:"+id); // 获取标签文本值 for (Element ele:eles) { System.out.println(ele.getName()+":"+ele.getText()); // 结果： // id:9527 // name:张三 // age:20 // sex:男 // id:9528 // name:李四 // age:20 // sex:女 } } } else { System.out.println("无法找到student.xml文件"); } }
}`},{header:"DOM4J 解析-xpath 方式(更便捷)",slug:"dom4j-解析-xpath-方式-更便捷",content:`package com.api.XML; import org.dom4j.Document;
import org.dom4j.Node;
import org.dom4j.io.SAXReader; import java.io.InputStream;
import java.util.List; public class XmlDemo02 { public static void main(String[] args) throws Exception { // 创建解析器对象 SAXReader reader = new SAXReader(); // 加载配置文件：配置文件在 classpath 类路径下 InputStream inputStream = XmlDemo01.class.getResourceAsStream("/student.xml"); if (inputStream != null) { // 加载配置文件，获取Document对象 Document document = reader.read(inputStream); // 关闭输入流 inputStream.close(); // 使用xpath解析（//BBB：得到所有的BBB节点） List<Node> nodes_student = document.selectNodes("//student"); // 遍历所有的student节点 for (Node node : nodes_student) { String name = node.getName(); System.out.println(name); // 结果： // student // student } List<Node> nodes_name = document.selectNodes("//name"); // 遍历所有的name节点 for (Node node : nodes_name) { String name = node.getName(); String value = node.getText(); System.out.println(name + ":" + value); // 结果： // name:张三 // name:李四 } // 获取单个节点 Node age_node_2 = document.selectSingleNode("(//age)[2]"); System.out.println(age_node_2.getName() + ":" + age_node_2.getText()); // 结果： // age：20 } else { System.out.println("无法找到student.xml文件"); } }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/Jsoup%E8%A7%A3%E6%9E%90.html",title:"",pathLocale:"/",contents:[{header:"Jsoup 解析",slug:"jsoup-解析",content:""},{header:"常用 api",slug:"常用-api",content:`Jsoup： 方法
作用 static Document parse(File in, String charsetName)
解析文件 Document： 方法
作用 Element getElementById(String id)
根据 id 获取元素 Elements getElementsByTag(String tag)
根据标签获取元素 Elements getElementsByClass(String className)
根据 class 获取元素 Elements getElementsByAttribute(String key)
根据属性获取元素 Elements getElementsByAttributeValue(String key, String value)
根据属性值获取元素 Element： 方法
作用 String id()
获取 id String attr(String key)
获取属性值 String text()
获取文本 String html()
获取 html JXPath： 方法
作用 List<JXNode> selectN(String xpath)
获取多个元素 JXNode selectOne(String xpath)
获取单个元素 JXNode： 方法
作用 Element getElement()
将节点转成元素对象 String name()
获取标签名 String text()
获取文本`},{header:"Jsoup 解析-标签选择器方式",slug:"jsoup-解析-标签选择器方式",content:`package com.api.XML; import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements; import java.io.File;
import java.net.URL; // jsoup，使用标签选择器解析xml
public class XmlDemo03 { public static void main(String[] args) throws Exception { // 获取document对象 /* URL url = XmlDemo03.class.getClassLoader().getResource("student.xml"); String path = url.getPath(); Document document = Jsoup.parse(new File(path), "utf-8"); */ Document document = Jsoup.parse( new File( XmlDemo03.class.getClassLoader().getResource("student.xml").getPath() ), "utf-8" ); // System.out.println(document); // 使用选择器方式获取标签对象和文本 Elements elements1 = document.select("student"); for (Element e : elements1) { System.out.println(e.getElementsByTag("name").text()); // 结果： // 张三 // 李四 } Elements elements = document.getElementsByTag("student"); Element element = document.getElementById("9527"); System.out.println(element); // 结果： // <student id="9527"> // <name> // 张三 // </name> // <age> // 20 // </age> // <sex> // 男 // </sex> // </student> for (Element e : elements) { System.out.println(e.getElementsByTag("name").text()); // 结果： // 张三 // 李四 } }
}`},{header:"Jsoup 解析-xpath 方式",slug:"jsoup-解析-xpath-方式",content:`package com.api.XML; import cn.wanghaomiao.xpath.model.JXDocument;
import cn.wanghaomiao.xpath.model.JXNode;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements; import java.io.File;
import java.util.List; public class XmlDemo04 { public static void main(String[] args) throws Exception { // 获取document 对象 Document document = Jsoup.parse( new File( XmlDemo03.class.getClassLoader().getResource("student.xml").getPath() ), "utf-8" ); // System.out.println(document); // 使用xpath方式获取标签对象和文本 JXDocument jxDocument = new JXDocument(document); // 获取想要的标签对象 JXNode jxNode_1 = jxDocument.selNOne("//name"); System.out.println(jxNode_1.getElement().text()); // 结果： // 张三 List<JXNode> jxNodes = jxDocument.selN("//student/name"); for (JXNode jxNode : jxNodes) { System.out.println(jxNode.getElement().text()); // 结果： // 张三 // 李四 } }
}
<?xml version="1.0" encoding="UTF-8"?>
<!--学生信息配置文件-->
<students> <student id="9527"> <name>张三</name> <age>20</age> <sex>男</sex> </student> <student id="9528"> <name>李四</name> <age>20</age> <sex>女</sex> </student>
</students>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"XML 概述",slug:"xml-概述",content:`什么是 XML，和 HTML 有什么区别？
XML 指可扩展标记语言。
XML 和 HTML 的区别： XML 不是 HTML 的替代。
XML 传输和存储数据，常用作配置文件；HTML 用来展示页面及显示数据。
XML 标签可以扩展，可以自定义；HTML 标签是预定义的。
XML 文件后缀是 .xml；HTML 文件后缀是 .html；都可以用浏览器打开检查。`},{header:"XML 语法",slug:"xml-语法",content:`XML 有且只有一个根元素；标签之间必须正确嵌套；标签必须正确闭合，语法严谨，错一点都不行
多个属性值可以写在一起，用空格分隔；属性值必须用引号(单引号或者双引号都行)括起来。
XML 标签对大小写敏感。
XML 注释使用 。
转义字符 < 用<，> 用>，& 用&，空格用 。
多行转移需要使用 CDATA 标签，CDATA 标签可以防止 XML 解析器将某些字符进行解析。
XML 第一行必须是文档声明，其中 version 属性必须有值，encoding 编码格式可以确少。 <!-- 语法小案例 -->
<?xml version="1.0" encoding="UTF-8"?>
<students> <student id="001"> <name>张三</name> <age>18</age> </student> <student id="002"> <name>李四</name> <age>19</age> </student> <_a.a>可以下划线开头</_a.a> <aaa>大小写一直，用大全大，用小全小</aaa> <aaa> &lt;a&gt;单行转义符&lt;/a&gt; <![CDATA[ <a>多行转义符</a> <a>多行转义符</a> ]]> </aaa>
</students>`},{header:"XML 命名规则",slug:"xml-命名规则",content:`标签名、属性名、实体名称等名称，都遵循命名规则： 名称可以包含字母、数字以及其他的字符
名称不能以数字或者标点符号开始
名称不能以字母 xml（或者 XML、Xml 等等）开始
名称不能包含空格`},{header:"XML 和 properties",slug:"xml-和-properties",content:`XML 配置文件可以和 properties 配置文件一起使用。
XML 配置文件比 properties 配置文件更加直观，易于阅读。
XML 可以配置多项，而 properties 只能配置一项。
XML 配置文件可以包含注释、多行值、数据处理、条件判断、动态更新等，而 properties 配置文件不包含。
XML 配置文件可以支持数据库连接池的配置，而 properties 配置文件不支持数据库连接池的配置。 <!-- 数据库配置文件案例 jdbc.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<config> <jdbc id="mysql"> <driver>com.mysql.jdbc.Driver</driver> <url>jdbc:mysql://localhost:3306/test</url> <username>root</username> <password>root</password> </jdbc> <jdbc id="oracle"> <driver>com.oracle.jdbc.Driver</driver> <url>jdbc:oracle://localhost:3306/test</url> <username>root</username> <password>root</password> </jdbc>
</config>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E7%BA%A6%E6%9D%9F.html",title:"",pathLocale:"/",contents:[{header:"XML 约束",slug:"xml-约束",content:`schema 约束：xsd 格式的约束文档 (推荐使用)
dtd 约束：dtd 格式的约束文档`},{header:"根据 dtd 文档编写 xml",slug:"根据-dtd-文档编写-xml",content:`ELEMENT：元素；#PCDATA：标签属性
ATTLIST：属性；CDATA：元素属性；#FIXED：固定值；#REQUIRED：必须有值；#IMPLIED：可选值 案例 1： <!-- book.dtd --> <!ELEMENT 书架 (书+)> <!ELEMENT 书 (书名, 作者, 价格)> <!ELEMENT 书名 (#PCDATA)> <!ELEMENT 作者 (#PCDATA)> <!ELEMENT 价格 (#PCDATA)> <!ATTLIST 书 出版社 CDATA "新华书店" 属性1 CDATA #FIXED "不能修改" 编号 ID #REQUIRED > <!ATTLIST 作者 性别(男|女) #IMPLIED 年龄(18|19|20) #IMPLIED >
<!-- book.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE 书架 SYSTEM "book.dtd">
<书架> <书 编号="001" 出版社="新华出版社" 属性1="不能修改"> <书名>Java 编程思想</书名> <作者 性别="男">Bruce Eckel</作者> <价格>100</价格> </书> <书 编号="002" 出版社="新华出版社" 属性1="不能修改"> <书名>Java 核心技术</书名> <作者 年龄=20"">Cay S. Horstmann</作者> <价格>100</价格> </书>
</书架>
案例 2：
<!-- student.dtd -->
<!ELEMENT students (student*)>
<!ELEMENT student (name, ages,sex)>
<!ELEMENT student name(#PCDATA)>
<!ELEMENT student age(#PCDATA)>
<!ELEMENT student sex(#PCDATA)>
<!ATTLIST student number ID #REQUIRED >
<!-- student.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE students SYSTEM "student.dtd">
<students> <student number="001"> <name>张三</name> <ages>20</ages> <sex>男</sex> </student> <student number="002"> <name>李四</name> <ages>20</ages> <sex>女</sex> </student>
</students>`},{header:"根据 xsd 文档编写 xml",slug:"根据-xsd-文档编写-xml",content:`schema 约束文档，自身也是一个 xml，其中，根标签的属性是引入的 xsd 的地址
xml 中 xmlns 的值：xsd 文档中 targetNamespace 的值，默认名称空间；
xml 中 xmlns:xsi 的值(xsi: 不固定，别名)：xsd 文档中 xsi:schemaLocation 的值 + "-instance"；
xml 中 xsi(xsi: 同上):schemaLocation 的值：xsd 文档中 targetNamespace 的值 + xsd 文件; 案例 1：
<!-- book.xsd -->
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="xxx" elementFormDefault="qualified" > <xs:element name="书架"> <!-- xs:complexType：复杂的类型 --> <xs:complexType> <!-- xs:sequence：要求其子元素必须按照顺序 --> <xs:sequence> <!-- maxOccurs="unbounded" 子元素可以出现无限次 --> <xs:element name="书" maxOccurs="unbounded"> <xs:complexType> <xs:sequence> <!-- xs:element name="xxx" type="yyy" xxx：元素名称 yyy：元素类型 --> <xs:element name="书名" type="xs:string"/> <xs:element name="作者" type="xs:string"/> <xs:element name="价格" type="xs:int"/> </xs:sequence> <xs:attribute name="编号" type="xs:int" use="required"/> <xs:attribute name="出版社" type="xs:string" use="required"/> <xs:attribute name="属性1" type="xs:string" use="required"/> </xs:complexType> </xs:element> </xs:sequence> </xs:complexType> </xs:element>
</xs:schema>
<!-- book.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<书架 xmlns="xxx" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="xxx book.xsd"> <书> <书名>Java 编程思想</书名> <作者>Bruce Eckel</作者> <价格>100</价格> <编号>1</编号> <出版社>机械工业出版社</出版社> <属性1>Java 编程思想</属性1> </书> <书> <书名>Effective Java</书名> <作者>Joshua Bloch</作者> <价格>100</价格> <编号>2</编号> </书>
</书架>
案例 2：
<!-- shiporder.xsd --> <?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" targetNamespace="http:www.baidu.com" elementFormDefault="qualified" > <xs:element name="shiporder"> <xs:complexType> <xs:element name="orderpersonal" type="xs:string"/> <xs:element name="shipto"> <xs:complexType> <xs:sequence> <xs:element name="name" type="xs:string"/> <xs:element name="address" type="xs:string"/> <xs:element name="city" type="xs:string"/> <xs:element name="country" type="xs:string"/> </xs:sequence> </xs:complexType> </xs:element> <xs:element name="item" maxOccurs="unbounded"> <xs:complexType> <xs:sequence> <xs:element name="title" type="xs:string"/> <xs:element name="note" type="xs:string" minOccurs="0"/> <xs:element name="quantity" type="xs:positiveInteger"/> <xs:element name="price" type="xs:decimal"/> </xs:sequence> <xs:attribute name="id" type="xs:string" use="required"/> </xs:complexType> </xs:element> </xs:complexType> </xs:element>
</xs:schema>
<!-- shiporder.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<shiporder xmlns="http:www.baidu.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http:www.baidu.com shiporder.xsd" > <orderpersonal>John Smith</orderpersonal> <shipto> <name>Ola Nordmann</name> <address>Langgt 23</address> <city>4000 Stavanger</city> <country>Norway</country> </shipto> <item> <title>Basketball</title> <note>Basketball is a physical sport</note> <quantity>1</quantity> <price>100</price> <id>BK001</id> </item> <item> <title>Gaming Console</title> <quantity>1</quantity> <price>100</price> <id>GC001</id> </item>
</shiporder>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/XML/XML%E8%A7%A3%E6%9E%90.html",title:"",pathLocale:"/",contents:[{header:"XML 解析",slug:"xml-解析",content:`xml 当作配置文件使用时，所谓解析就是获取这些重要的数据；分 Dom 解析和 SAX 解析。
Dom 解析：一次性把整个 xml 文件加载到内存形成 DOM 树，通过 document 对象实现增删改查；但是树太大的话会比较占内存。
SAX 解析：逐行读取 xml 文件，边读边解析，占用内存少，适合于 xml 文件较大的情况；但是因为边解析同时边释放，所以只能查，不能增删改。`},{header:"常见的解析器",slug:"常见的解析器",content:`DOM4J：开源组织提供的，基于 DOM 和 SAX 综合方式的解析。
JAXP：支持 DOM 和 SAX 解析，但是不支持 DOM4J 和 Jsoup。
Jsoup：主要用来解析 HTML，用域进行爬虫。`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E5%8F%8D%E5%B0%84%E6%A1%88%E4%BE%8B1.html",title:"",pathLocale:"/",contents:[{header:"反射案例 1",slug:"反射案例-1",content:`已知有一个 ArrayList，泛型为 String，里面存储了一些数据，如何使用反射技术，来实现向该集合中存储 Integer 类型的数据？
已知泛型是 String 类型，但是要加入 Integer 类型的数据，正常是明显不行的，可以利用反射技术实现。 package com.api.Reflex; import java.lang.reflect.Method;
import java.util.ArrayList; /* * 已知有一个 ArrayList，泛型为 String，里面存储了一些数据， * 如何使用反射技术，来实现向该集合中存储 Integer 类型的数据？
*/
public class Demo07 { public static void main(String[] args) throws Exception { ArrayList<String> al = new ArrayList<>(); al.add("hello"); al.add("world"); // 这一步明显编译不过 // al.add(111); // 获取字节码文件 Class clazz = al.getClass(); // 获取add方法对象 Method add_method = clazz.getMethod("add", Object.class); // 调用对象的add方法 add_method.invoke(al, 111); add_method.invoke(al, true); add_method.invoke(al, "啥类型的数据都可以，因为是Object类型"); for (Object o : al) { System.out.println(o); // 结果： // hello // world // 111 // true // 啥类型的数据都可以，因为是Object类型 } }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E5%8F%8D%E5%B0%84%E6%A1%88%E4%BE%8B2.html",title:"",pathLocale:"/",contents:[{header:"反射案例 2",slug:"反射案例-2",content:`模拟框架，来实现可以执行我们指定的任意一个类中的任意一个方法(简单点，目前只要空参即可) // 思路
// 1. 获取字节码文件对象
Class clazz = Class.forName("???"); // ???：className
// 2. 创建实例（两种方式）
// 创建实例1
Object obj1 = clazz.newInstance();
// 获取构造器对象
Constructor cons = clazz.getConstructor();
// 创建实例2
Object obj2 = cons.newInstance();
// 3. 获取方法对象
Method m = clazz.getMethod("???"); // ???：methodName
// 4. 调用方法对象
m.invoke(obj1); 如何解决 className 和 methodName？而且这两个都是活的，不能是写死的？
方法一：利用配置文件
方法二：使用注解 // 方法一
package com.api.Reflex; import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.Properties; public class Demo08 { public static void main(String[] args) throws Exception { // 加载配置文件 Properties properties = new Properties(); properties.load( Demo08.class.getClassLoader().getResourceAsStream("reflex.properties") ); String className = properties.getProperty("className"); String methodName = properties.getProperty("methodName"); // 获取字节码文件对象 Class clazz = Class.forName(className); // 创建实例（两种方式） // 创建实例1 Object obj1 = clazz.newInstance(); // 获取构造器对象 Constructor cons = clazz.getConstructor(); // 创建实例2 Object obj2 = cons.newInstance(); // 获取方法对象 Method m = clazz.getMethod(methodName); // 调用方法对象 m.invoke(obj1); // 结果：执行了两次无参构造 // 无参构造执行 // 无参构造执行 // Bird is flying }
} class Bird { public Bird() { System.out.println("无参构造执行"); } public void fly() { System.out.println("Bird is flying"); }
}
# reflex.properties
className=com.api.Reflex.Bird
methodName=fly`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E5%8F%8D%E5%B0%84%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"反射概述",slug:"反射概述",content:`正射？ 先创建对象
调用对象的属性或方法 反射？ 先创建属性或者方法对象
将属性或者方法对象赋值给某个对象`},{header:"Class 对象加载过程（字节码文件加载过程）",slug:"class-对象加载过程-字节码文件加载过程",content:""}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96Class%E5%AF%B9%E8%B1%A1.html",title:"",pathLocale:"/",contents:[{header:"获取 Class 对象(获取字节码文件对象)",slug:"获取-class-对象-获取字节码文件对象",content:`前两种方式已知是 Person 类，后最后一种方式不需要知道是哪个类
package com.api.Reflex; public class Demo01 { public static void main(String[] args) throws ClassNotFoundException { // 获取Person类对象class对象 Class c1 = Person.class; Person p = new Person(); Class c2 = p.getClass(); Class c3 = Class.forName("com.api.Reflex.Person"); System.out.println(c1 == c2); // true System.out.println(c1 == c3); // true }
}
class Person{ private String name; private int age; public Person() { } public Person(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; }
}`},{header:"Class 类常用方法",slug:"class-类常用方法",content:`方法
作用 public Object newInstance()
创建一个类的实例 package com.api.Reflex; public class Demo02 { public static void main(String[] args) throws Exception { // 获取字节码文件对象 Class clazz = Class.forName("com.api.Reflex.Pig"); // 创建对象 Object obj = clazz.newInstance(); System.out.println(obj); // com.api.Reflex.Pig@4f023edb // 向下转型 Pig pig = (Pig) clazz.newInstance(); System.out.println(pig); // com.api.Reflex.Pig@3a71f4dd }
} class Pig { }`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F%E5%AF%B9%E8%B1%A1.html",title:"",pathLocale:"/",contents:[{header:"获取成员变量对象",slug:"获取成员变量对象",content:"成员变量对象的访问权限相关的要求，与构造方法对象的访问权限相关的要求相同，都涉及到暴力反射相关内容。"},{header:"如何成员变量的对象",slug:"如何成员变量的对象",content:`获取public 修饰的成员变量对象 方法
作用 public Field getField(String name)
获取单个成员变量对象 public Field[] getFields()
获取所有公共的成员变量对象 获取忽略修饰符的成员变量对象 方法
作用 public Field getDeclaredField(String name)
获取单个成员变量对象 public Field[] getDeclaredFields()
获取所有的成员变量对象`},{header:"Field 类中的方法",slug:"field-类中的方法",content:`方法
作用 public void set(Object obj, Object value)
给某个具体的的实例对象，设置其具体的某个成员变量的值 public Object get(Object obj)
获取具体的实例对象的成员变量的值 public void setAccessible(boolean flag)
设置成员变量是否可以访问(true：不校验，false：校验) package com.api.Reflex; import java.lang.reflect.Field; public class Demo05 { public static void main(String[] args) throws Exception { // 获取字节码文件对象 Class clazz = Class.forName("com.api.Reflex.Dog"); // 获取 name 的成员变量对象 Field f_name = clazz.getField("name"); // 获取 age 的成员变量对象 Field f_age = clazz.getField("age"); // 获取 color 的成员变量对象 color不是public修饰的 Field f_color = clazz.getDeclaredField("color"); System.out.println(f_name); System.out.println(f_age); System.out.println(f_color); // 结果： // public java.lang.String com.api.Reflex.Dog.name // public int com.api.Reflex.Dog.age // private java.lang.String com.api.Reflex.Dog.color Object obj1 = clazz.newInstance(); Object obj2 = clazz.newInstance(); // 设置暴力反射 f_color.setAccessible(true); // 给 name 的成员变量对象赋值 f_name.set(obj1,"淘宝"); // 给 age 的成员变量对象赋值 f_age.set(obj1, 3); // 给 color 的成员变量对象赋值 f_color.set(obj1,"黑色"); f_name.set(obj2,"京东"); f_age.set(obj2, 2); f_color.set(obj2,"红色"); System.out.println(obj1); System.out.println(obj2); // 结果： // Dog{name='淘宝', age=3, color='黑色'} // Dog{name='京东', age=2, color='红色'} Object dog1_name = f_name.get(obj1); Object dog1_age = f_age.get(obj1); Object dog1_color = f_color.get(obj1); System.out.println(dog1_name); System.out.println(dog1_age); System.out.println(dog1_color); // 结果： // 淘宝 // 3 // 黑色 }
} class Dog { public String name; public int age; private String color; public Dog() { System.out.println("空参构造"); } @Override public String toString() { return "Dog{" + "name='" + name + '\\'' + ", age=" + age + ", color='" + color + '\\'' + '}'; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%88%90%E5%91%98%E6%96%B9%E6%B3%95%E5%AF%B9%E8%B1%A1.html",title:"",pathLocale:"/",contents:[{header:"获取成员方法对象",slug:"获取成员方法对象",content:"成员方法对象的访问权限相关的要求，与构造方法对象的访问权限相关的要求相同，都涉及到暴力反射相关内容。"},{header:"如何获取普通的成员方法的对象",slug:"如何获取普通的成员方法的对象",content:`获取public 修饰的成员变量对象 方法
作用 public Method getMethod(String name, Class<?>... parameterTypes)
获取单个成员方法对象 public Method[] getMethods()
获取所有的(哪怕是继承的)公共的成员方法对象 获取忽略修饰符的成员变量对象 方法
作用 public Method getDeclaredMethod(String name, Class<?%gt;... parameterTypes)
获取单个成员方法对象 public Method[] getDeclaredMethods()
获取本类中的所有成员方法对象`},{header:"Method 类中的方法",slug:"method-类中的方法",content:`方法
作用 public Object invoke(Object obj, Object... args)
执行方法 package com.api.Reflex; import java.lang.reflect.Constructor;
import java.lang.reflect.Method; public class Demo06 { public static void main(String[] args) throws Exception { // 字节码文件 Class clazz = Class.forName("com.api.Reflex.Cat"); // 构造方法对象 Constructor c = clazz.getConstructor(); // 创建实例对象 Object o1 = c.newInstance(); Object o2 = c.newInstance(); // 获取公共的无参无返回值的方法对象 Method m_aaa = clazz.getMethod("aaa"); // 调用哪个实例对象的方法，以及传入的参数 Object aaa_value = m_aaa.invoke(o1); System.out.println(aaa_value); // 结果： // 无参无返回值 // null // 获取公共的有参无返回值的方法对象（需要传入参数的class类型） Method m_bbb = clazz.getMethod("bbb", String.class); // 调用哪个实例对象的方法，以及传入的参数 Object bbb_value = m_bbb.invoke(o1, "bbb方法"); System.out.println(bbb_value); // 结果： // bbb方法 // null // 获取私有的的无参有返回值的方法对象 Method m_ccc = clazz.getDeclaredMethod("ccc"); // 设置暴力反射 m_ccc.setAccessible(true); // 调用哪个实例对象的方法，以及传入的参数 Object ccc_value = m_ccc.invoke(o2); System.out.println(ccc_value); // 结果： // 无参有返回值：10 // 获取没有修饰符的有参有返回值的方法对象（需要传入参数的class类型） Method m_ddd = clazz.getDeclaredMethod("ddd", String.class, int.class); // 设置暴力反射 m_ddd.setAccessible(true); // 调用哪个实例对象的方法，以及传入的参数 Object ddd_value = m_ddd.invoke(o2, "我传了个：", 1000); System.out.println(ddd_value); // 结果： // 有参有返回值，我传了个：1000 // 向下转型 Method m_eee = clazz.getDeclaredMethod("eee", String.class); // 设置暴力反射 m_eee.setAccessible(true); // 调用哪个实例对象的方法，以及传入的参数 Integer eee_value = (Integer) m_eee.invoke(o2, "123"); System.out.println(eee_value); // 结果： // 123 // 获取所有的(哪怕是继承的也包含)公共的的成员方法 Method[] methods1 = clazz.getMethods(); for (Method method : methods1) { System.out.println(method); // 结果： // public java.lang.String com.api.Reflex.Cat.toString() // public static void com.api.Reflex.Cat.aaa() // public static void com.api.Reflex.Cat.bbb(java.lang.String) // public final void java.lang.Object.wait() ... // public final void java.lang.Object.wait(long,int) ... // public final native void java.lang.Object.wait(long) ... // public boolean java.lang.Object.equals(java.lang.Object) // public native int java.lang.Object.hashCode() // public final native java.lang.Class java.lang.Object.getClass() // public final native void java.lang.Object.notify() // public final native void java.lang.Object.notifyAll() } // 获取本类的所有的成员方法 Method[] methods2 = clazz.getDeclaredMethods(); for (Method method : methods2) { System.out.println(method); // 结果： // public java.lang.String com.api.Reflex.Cat.toString() // private int com.api.Reflex.Cat.ccc() // public static void com.api.Reflex.Cat.bbb(java.lang.String) // java.lang.String com.api.Reflex.Cat.ddd(int) // public static void com.api.Reflex.Cat.aaa() } }
} class Cat { private String name; private int age; public String sex; public Cat() { } public Cat(String name, int age) { this.name = name; this.age = age; } @Override public String toString() { return "Cat{" + "name='" + name + '\\'' + ", age=" + age + ", sex='" + sex + '\\'' + '}'; } // 无参无返回值 public static void aaa() { System.out.println("无参无返回值"); } // 有参无返回值 public static void bbb(String message) { System.out.println(message); } // 无参有返回值 private String ccc() { return "无参有返回值：" + 10; } // 有参有返回值 String ddd(String s, int i) { return "有参有返回值，" + s + i; } // 向下转型 protected int eee(String s) { return Integer.parseInt(s); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E5%8F%8D%E5%B0%84/%E8%8E%B7%E5%8F%96%E6%9E%84%E9%80%A0%E6%96%B9%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"获取构造方法",slug:"获取构造方法",content:""},{header:"如何获取构造方法的对象",slug:"如何获取构造方法的对象",content:`获取public 修饰的构造方法对象 方法
作用 public Constructor<T> getConstructor(Class<?>... parameterTypes)
获取单个 public 修饰的构造方法对象 public Constructor<T>[] getConstructors()
获取所有 public 修饰的构造方法对象 获取忽略修饰符的构造方法对象 方法
作用 public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes)
获取单个构造方法对象 public Constructor<T>[] getDeclaredConstructors()
获取所有构造方法对象`},{header:"构造方法类对象中的方法",slug:"构造方法类对象中的方法",content:`方法
作用 public T newInstance(Object... initargs)
创建一个类的实例 public void setAccessible(boolean flag)
取消 java 语言的访问检查；暴力反射；(true：不校验，false：校验) // public 修饰符的案例
package com.api.Reflex; import java.lang.reflect.Constructor; public class Demo03 { public static void main(String[] args) throws Exception { // 获取字节码文件对象 Class clazz = Class.forName("com.api.Reflex.Student"); // 1. public Constructor<T> getConstructor(Class<?>... parameterTypes) // 获取空参构造方法对象 Constructor c1 = clazz.getConstructor(); // 创建实例对象 Object obj1 = c1.newInstance(); // 创建实例对象并向下转型 Student s1 = (Student) c1.newInstance(); // 获取有一个String类型的参数的构造方法对象 Constructor c2 = clazz.getConstructor(String.class); Object obj2 = c2.newInstance("Tom"); Student s2 = (Student) c2.newInstance("Tom"); // 获取有一个int类型的参数的构造方法对象 Constructor c3 = clazz.getConstructor(int.class); Object obj3 = c3.newInstance(20); Student s3 = (Student) c3.newInstance(20); // 获取有2个参数的构造方法对象 Constructor c4= clazz.getConstructor(String.class, int.class); Object obj4 = c4.newInstance("Tom", 20); Student s4 = (Student) c4.newInstance("Tom", 20); // 2. public Constructor<T>[] getDeclaredConstructors() // 获取所有的公共的构造方法对象(只有公共的，public) Constructor[] constructors = clazz.getConstructors(); for (Constructor c: constructors) { System.out.println(c); // 结果： // public com.api.Reflex.Student(java.lang.String,int) // public com.api.Reflex.Student(int) // public com.api.Reflex.Student(java.lang.String) // public com.api.Reflex.Student() } }
}
class Student{ private String name; private int age; public Student() { } public Student(String name) { this.name = name; } public Student(int age) { this.age = age; } public Student(String name, int age) { this.name = name; this.age = age; } @Override public String toString() { return "Student{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}
// 忽略修饰符的案例(暴力反射)
package com.api.Reflex; import java.lang.reflect.Constructor; public class Demo04 { public static void main(String[] args) throws Exception { // 获取字节码文件对象 Class clazz = Class.forName("com.api.Reflex.Teacher"); // 1. public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes) // 获取空参构造方法对象 Constructor c1 = clazz.getDeclaredConstructor(); /* * setAccessible: true * 私有构造不能创建实例，加上setAccessible就可以了 * 解除了java语言的访问权限检查 * 暴力反射 */ c1.setAccessible(true); // 创建实例对象 Object obj1 = c1.newInstance(); // 创建实例对象并向下转型 Teacher s1 = (Teacher) c1.newInstance(); // 获取有一个String类型的参数的构造方法对象 Constructor c2 = clazz.getDeclaredConstructor(String.class); Object obj2 = c2.newInstance("Tom"); Teacher s2 = (Teacher) c2.newInstance("Tom"); // 获取有一个int类型的参数的构造方法对象 Constructor c3 = clazz.getDeclaredConstructor(int.class); Object obj3 = c3.newInstance(20); Teacher s3 = (Teacher) c3.newInstance(20); // 获取有2个参数的构造方法对象 Constructor c4= clazz.getDeclaredConstructor(String.class, int.class); Object obj4 = c4.newInstance("Tom", 20); Teacher s4 = (Teacher) c4.newInstance("Tom", 20); // 2. public Constructor<T>[] getDeclaredConstructors() // 获取所有的构造方法对象(所有的，包括私有的等) Constructor[] constructors = clazz.getDeclaredConstructors(); for (Constructor c: constructors) { System.out.println(c); // 结果： // public com.api.Reflex.Teacher(java.lang.String,int) // protected com.api.Reflex.Teacher(int) // com.api.Reflex.Teacher(java.lang.String) // private com.api.Reflex.Teacher() } }
}
class Teacher{ private String name; private int age; private Teacher() { } Teacher(String name) { this.name = name; } protected Teacher(int age) { this.age = age; } public Teacher(String name, int age) { this.name = name; this.age = age; } @Override public String toString() { return "Teacher{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E5%85%83%E6%B3%A8%E8%A7%A3.html",title:"",pathLocale:"/",contents:[{header:"元注解",slug:"元注解",content:`用来标注注解的注解就称为元注解 元注解
作用 @Target
限制被元注解标注的注解，可以用在什么地方 @Retention
限制被元注解标注的注解，生命时常 @Documented
被该元注解所标注的注解能够存在于帮助文档中；没有参数 @Inherited
被该元注解所标注的注解能够被子类继承(即子类也有该注解)；没有参数`},{header:"@Target 元注解的参数",slug:"target-元注解的参数",content:`参数
作用 ElementType.TYPE
限制当前注解，只能用来描述类、接口(包括注解类型) 或 enum 声明 ElementType.FIELD
同上，只能用于属性上方 ElementType.METHOD
同上，只能用于方法上 @Target 的参数，其实是 value，但是因为有且只有这一个参数，所以 value 就可以省略了，正常是 value={xxx}；当参数值是数组时，即{ElementType.FIELD,ElementType.METHOD}，那么此时 value 就不能省略了 // 只能作用在类上
@Target(value = ElementType.TYPE)
public @interface MyAnno { } @MyAnno
public class MyClass { } \`\`\`java
// 只能作用在属性上
@Target(ElementType.FIELD)
public @interface MyAnno { }
public class MyClass { @MyAnno public int age;
}
// 只能作用在方法上
@Target(ElementType.METHOD)
public @interface MyAnno { }
public class MyClass { private int age; @MyAnno public void show(){ }
}
// 可以作用在属性和方法上
@Target(ElementType.FIELD, ElementType.METHOD)
public @interface MyAnno { }
public class MyClass { @MyAnno public int age; @MyAnno public void show(){ }
}`},{header:"@Retention 元注解的参数",slug:"retention-元注解的参数",content:`参数
作用 RetentionPolicy.SOURCE
存活在源文件中，编译之后就消失了 RetentionPolicy.CLASS
存活在源文件和字节码文件期间，运行之后就消失了 RetentionPolicy.RUNTIME
存活在源文件和字节码文件中，运行后不消失`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E6%B3%A8%E8%A7%A3%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"注解概述",slug:"注解概述",content:`用来解释说明的，注解也叫元数据。
注释是给人看的，注解是给程序看的。`},{header:"注解的作用",slug:"注解的作用",content:`生成文档：可以使用 javadoc 工具编译 java 文件，使其根据注解生成 java 参考帮助文档。
编译检查：通过代码里标识的元数据让编译器能够实现基本的编译检查【Override】
代码分析：通过代码里标识的元数据对代码进行分析【使用反射】
实现配置文件功能：相当于配置文件`},{header:"注解分类",slug:"注解分类",content:`预定义注解：给的注解 注解
作用 @Override
继承自类或接口中的方法重写 @Deprecated
表示该方法已经过时 @SuppressWarnings("all")
压制警告(黄线)；一般都会设置参数为 "all" class Fu{ print(){ System.out.println("Fu"); }
} class Zi extends Fu{ @Override print(){ System.out.println("Zi"); } @Deprecated print1(){ System.out.println("这个方法仍然可以使用，只是过时了，不建议使用"); }
} @SuppressWarnings("all");
public class Test{ public static void main(String[] args){ // @SuppressWarnings("all"); // 可以在此处压制警告，但是在类上更好一些 // 为何警告？：因为定义了没有被使用 int i = 1; int j = 2; ArrayList al = new ArrayList(); Zi z = new Zi(); z.print(); z.print1(); }
} 自定义注解：自己定义的注解`},{header:"注解使用时的位置",slug:"注解使用时的位置",content:`// 类：
@注解名字
public class Tools { // ...
} // 成员方法：
@注解名字
public void show(){ // ...
} // 成员变量：
@注解名字
public String name; // 参数：
public void show(@注解名字 int i, @注解名字 String s) { // ...
} // 构造方法：
@注解名字
public Tools() { // ...
}
等等等....`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E6%B3%A8%E8%A7%A3%E7%9A%84%E8%A7%A3%E6%9E%90.html",title:"",pathLocale:"/",contents:[{header:"注解的解析",slug:"注解的解析",content:`需要通过反射技术来获取注解中的属性的值 方法
作用 Annotation getAnnotation(注解的字节码文件对象)
获取注解对象 获取类上面的注解的属性值
获取方法上面的注解的属性值
获取字段上面的注解的属性值 package com.api.ZhuJie; import java.lang.annotation.*;
import java.lang.reflect.Field;
import java.lang.reflect.Method; public class GetAnnoValue1 { public static void main(String[] args) throws Exception { // 获取字节码文件对象 Class clazz = Class.forName("com.api.ZhuJie.Aa"); // 1. 使用反射技术获取类上面的注解的属性值： 张三、18 // 获取类上面的注解对象 // Annotation anno = clazz.getAnnotation(Anno.class); // Annotation 是 Anno 注解的父类，所以可以向下转型 Anno anno1 = (Anno) clazz.getAnnotation(Anno.class); // 获取属性值 if (anno1 == null) { System.out.println("没有注解"); } else { String name = anno1.name(); int age = anno1.age(); System.out.println(name + "..." + age); // 结果： // 张三...18 } // 2. 使用反射技术获取方法上面的注解的属性值： 李四、19 // 获取方法对象 Method method = clazz.getMethod("show"); // 获取方法上的注解对象 Anno anno2 = (Anno) method.getAnnotation(Anno.class); // 获取属性值 if (anno2 == null) { System.out.println("没有注解"); } else { String name = anno2.name(); int age = anno2.age(); System.out.println(name + "..." + age); // 结果： // 李四...18 } // 3. 使用反射技术获取属性上面的注解的属性值： 王五、20 // 获取属性对象 Field field = clazz.getField("haha"); // 获取方法上的注解对象 Anno anno3 = (Anno) field.getAnnotation(Anno.class); // 获取属性值 if (anno3 == null) { System.out.println("没有注解"); } else { String name = anno3.name(); int age = anno3.age(); System.out.println(name + "..." + age); // 结果： // 王五...20 } }
} @Anno(name = "张三", age = 18)
class Aa { @Anno(name = "王五", age = 20) public boolean haha; @Anno(name = "李四", age = 19) public void show() { }
} @Target({ElementType.TYPE, ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@interface Anno { String name(); int age();
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/%E6%B3%A8%E8%A7%A3/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3.html",title:"",pathLocale:"/",contents:[{header:"自定义注解",slug:"自定义注解",content:""},{header:"自定义注解格式",slug:"自定义注解格式",content:`元注解
修饰符 @interface 注解名字{ }`},{header:"最基本的定义使用",slug:"最基本的定义使用",content:`package com.api.ZhuJie; public class Demo01 { public static void main(String[] args) { A a = new A(); }
} @interface MyAnno1 { } @MyAnno1
class A { }`},{header:"反编译探索本质",slug:"反编译探索本质",content:`将两个 java 文件(Demo.java A.java)放在同一个文件夹下
在当前文件夹下打开命令行，输入 javac Demo.java A.java
得到三个文件，分别为 Demo.class A.class MyAnno.class
使用 javap MyAnno.class 得到反编译后的文件
观察发现也得到了反编译后的文件内容，这个就是我们要探索的内容
得到内容为：public interface MyAnno1 extends java.lang.annotation.Annotation{}`},{header:"注解的本质",slug:"注解的本质",content:`public interface MyAnno1 extends java.lang.annotation.Annotation{}
注解底层就是一个接口，该接口默认继承了 Annotation 接口；所以接口怎么写注解就怎么写`},{header:"注解的属性(就是抽象方法)",slug:"注解的属性-就是抽象方法",content:"在接口中有很多抽象方法，在接口中定义的方法叫抽象方法；在注解中定义的抽象方法，叫做注解的属性。"},{header:"注解属性格式",slug:"注解属性格式",content:`public @interface MyAnno1 { // 抽象方法 // 返回值数据类型 属性名(参数列表); // 返回值数据类型 方法名();
返回值数据类型： 基本数据类型
String(字符串类型)
Class
enum
Annotation
以及以上所有数据类型的数组类型`},{header:"注解属性的定义与使用",slug:"注解属性的定义与使用",content:`package com.api.ZhuJie; public class Demo02 { public static void main(String[] args) { }
} // 给注解的所有属性都要赋初始值
@MyAnno2(name = "", age = 0, aaa = Enum.MONDAY, bbb = @MyAnno, ccc = {}, getName = "")
class Demo2 { }
// MyAnno2.java
package com.api.ZhuJie; public @interface MyAnno2 { // 看着像是字段，其实都是抽象方法，只不过去掉了abstract abstract String name() default "Tom"; int age() default 20; boolean value(); Enum aaa(); MyAnno bbb(); String[] ccc(); public abstract String getName();
} enum Enum { MONDAY("星期一"), TUESDAY("星期二"), WEDNESDAY("星期三"); private String name; private Enum(String name) { this.name = name; } public String getName() { return name; } } @interface MyAnno {
}`},{header:"使用注解的属性注意事项",slug:"使用注解的属性注意事项",content:`注解的多个属性之间使用逗号隔开，属性之间的顺序无所谓
注解的属性可以赋默认值(用 default 设置)，如果有了默认值，则使用注解时，属性不需要赋值了
如果注解有，且只有一个属性时，并且属性的名称是 value，则 value 可以省略，直接定义值即可
数组赋值时，值使用 {} 包裹。如果数组中只有一个值，则 {} 可以省略`}]},{path:"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E4%BF%AE%E6%94%B9.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 单表修改",slug:"mybatis-单表修改",content:`MyBatis 的 CRUD 详细案例// Doc
public void update(User user);
<select id="update" resultType="com.api.MyBatis.domain.User" parameterType="com.api.MyBatis.domain.User"
> update user set name = #{name}, age = #{age} where id = #{id}
</select>`}]},{path:"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E5%88%A0%E9%99%A4.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 单表删除",slug:"mybatis-单表删除",content:`MyBatis 的 CRUD 详细案例// Doc
public void delete(int id);
<select id="delete" resultType="com.api.MyBatis.domain.User" parameterType="int"> delete from user where id = #{id}
</select>`}]},{path:"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E5%A2%9E%E5%8A%A0.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 单表添加",slug:"mybatis-单表添加",content:`MyBatis 的 CRUD 详细案例// Doc
// 添加一条
public void add(User user);
// 添加一条后获取id值进行后续操作
public void addReturnId(User user);
<select id="add" resultType="com.api.MyBatis.domain.User" parameterType="com.api.MyBatis.domain.User"
> insert into user set id = #{id}, name = #{name}, age = #{age}
</select>
<insert id="addReturnId" parameterType="com.api.MyBatis.domain.User"> <selectKey keyColumn="id" keyProperty="id" resultType="int" order="AFTER"> select last_insert_id() </selectKey> insert into user values (null, #{name}, #{age})
</insert>`}]},{path:"/admin/Java/MyBatis/%E5%8D%95%E8%A1%A8%E6%93%8D%E4%BD%9C/%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 单表查询",slug:"mybatis-单表查询",content:`MyBatis 的 CRUD 详细案例// Doc
// 查询全部
public List<User> findAll();
// 查询单条
public User findById1(int id);
// 根据id查询记录
public User findById2(Person p);
// 查询总数
public int count();
// 模糊查询1
public List<User> findByName1(String name);
// 模糊查询2
public List<User> findByName2(String name);
// 分页查询1
public List<User> findByPage1(Map<String, Integer> map);
// 分页查询2：注解可以放在形参上
public List<User> findByPage2(@Param("start") int aaa, @Param("size") int bbb);
// 根据条件查询(多个条件，且每个条件都是可有可无)
List<User> findByCondition(User user);
// 根据多个id值进行查询
List <User> findByIds(int [] ids);
<select id="findAll" resultType="com.api.MyBatis.domain.User"> select * from user
</select> <select id="findById1" resultType="com.api.MyBatis.domain.User" parameterType="Integer"
> select * from user where id = #{id}
</select>
<select id="findById2" parameterType="com.api.MyBatis.test.Person" resultType="com.api.MyBatis.domain.User"
> select * from user where id = #{user.id}
</select>
<select id="count" resultType="int"> select count(*) from user
</select>
<select id="findByName1" parameterType="string" resultType="com.api.MyBatis.domain.User"
> select * from user where name like #{name}
</select>
<select id="findByName2" parameterType="string" resultType="com.api.MyBatis.domain.User"
> select * from user where name like '%\${value}%'
</select>
<select id="findByPage1" parameterType="map" resultType="com.api.MyBatis.domain.User"
> select * from user limit #{start},#{size}
</select>
<select id="findByPage2" resultType="com.api.MyBatis.domain.User"> select * from user limit #{start},#{size}
</select>
<!--sql动态判断：where和id的使用-->
<select id="findByCondition" parameterType="user" resultType="user"> select * from user <where> <if test="name != null"> and name like #{name} </if> <if test="age != null &amp;&amp; age != 0"> and age = #{age} </if> </where>
</select>
<!--sql动态判断：forEach的使用-->
<select id="findByIds" parameterType="int[]" resultType="user"> select * from user where id in <foreach collection="array" open="(" close=")" separator="," item="id"> #{id} </foreach>
</select>`}]},{path:"/admin/Java/MyBatis/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/MyBatis%E4%B8%AD%E4%B8%80%E5%AF%B9%E4%B8%80%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 中一对一查询(association)",slug:"mybatis-中一对一查询-association",content:"一对一查询：即中国古代实行一夫多妻制，如果查询 wife 的时候，顺带查出 husband，从结果上看是查询一个顺带一个，这种在 MyBatis 中叫一对一。"},{header:"根据 id 查询 wife 及其 husband",slug:"根据-id-查询-wife-及其-husband",content:`<!-- WifeMapper.xml -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.WifeMapper"> <!--方式一--> <resultMap id="wifeHusbandMap" type="wife"> <id column="id" property="id"/> <result column="name" property="name"/> <result column="hid" property="hid"/> <!-- association：一个对象中关联另一个对象 property：Wife.java实体类中具有Husband husband属性 column：关联关系 javaType：返回值类型，husband类型的数据 --> <association property="husband" column="hid" javaType="husband"> <id column="h_id" property="id"/> <result column="h_name" property="name"/> </association> </resultMap> <select id="findById" parameterType="Integer" resultMap="wifeHusbandMap"> select w.id, w.name, w.hid, h.id h_id, h.name h_name from wife w, husband h where w.hid = h.id and w.id = #{id} </select> <!--方式二--> <resultMap id="wifeHusbandMap" type="wife"> <id column="id" property="id"/> <result column="name" property="name"/> <result column="hid" property="hid"/> <association property="husband" column="hid" javaType="husband" select="com.api.MyBatis.dao.HusbandMapper.findById" /> </resultMap> <select id="findById" parameterType="Integer" resultMap="wifeHusbandMap"> select * from wife where id = #{id} </select>
</mapper>
<!-- HusbandMapper.xml -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.HusbandMapper"> <select id="findById" parameterType="Integer" resultType="husband"> select * from husband where id = #{id} </select>
</mapper>
// Wife实体类
package com.api.MyBatis.domain; public class Wife { private int id; private String name; private int hid; private Husband husband; public Husband getHusband() { return husband; } public void setHusband(Husband husband) { this.husband = husband; } public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getHid() { return hid; } public void setHid(int hid) { this.hid = hid; } @Override public String toString() { return "Wife{" + "id=" + id + ", name='" + name + '\\'' + ", hid=" + hid + ", husband=" + husband + '}'; }
}
// Husband实体类
package com.api.MyBatis.domain; public class Husband { private int id; private String name; public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } @Override public String toString() { return "Husband{" + "id=" + id + ", name='" + name + '\\'' + '}'; }
}
// 接口(WifeMapper)
package com.api.MyBatis.dao; import com.api.MyBatis.domain.Wife; public interface WifeMapper { // 根据id值查询wife及其husband(一对多的关系，一个husband有多个wife) Wife findById(int id);
}
// 接口(HusbandMapper)
package com.api.MyBatis.dao; import com.api.MyBatis.domain.Husband; public interface HusbandMapper { // 根据id值查询 Husband findById(int id);
}
// 测试类
package com.api.MyBatis.test; import com.api.MyBatis.dao.WifeMapper;
import com.api.MyBatis.domain.Wife;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test; import java.io.InputStream; public class WifeTest { private SqlSession session; private WifeMapper wifeDao; @BeforeEach public void before() throws Exception { // 1. 获取流对象，读取核心配置文件 InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml"); // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 session = factory.openSession(); // 5. 获取 UserDao 代理类对象 wifeDao = session.getMapper(WifeMapper.class); } @AfterEach public void after() { // 7. 提交事务(增删改需要提交；查询时不要提交) session.commit(); // 8. 释放资源 session.close(); } @Test public void findById() { Wife wife = wifeDao.findById(1); System.out.println(wife); // 结果： // Wife{id=1, name='rose', hid=1, husband=Husband{id=1, name='tom'}} }
}`}]},{path:"/admin/Java/MyBatis/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/MyBatis%E4%B8%AD%E4%B8%80%E5%AF%B9%E5%A4%9A%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 中一对一查询(collection)",slug:"mybatis-中一对一查询-collection",content:"一对多查询：即一个用户有很多个电脑，如果查询 user 的时候，也要查出其 computer，从结果上看是查询一个及其多个，这种在 MyBatis 中叫一对多或者多对一。"},{header:"查询所有的用户及其名下的所有电脑",slug:"查询所有的用户及其名下的所有电脑",content:`<!--User.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd"> <!--方式一--> <resultMap id="userAndComputerMap" type="user"> <id column="id" property="id"/> <result column="name" property="name"/> <result column="age" property="age"/> <!-- collection：一对多关系，association：一对一 property：要查询数值的字段是computers column：要根据id去查 ofType：集合中存放的类型，与association中的javaType有一点区别 ofType：ofType是集合中存放的类型，javaType是集合的类型 --> <collection property="computers" column="id" ofType="computer"> <id column="c_id" property="id"/> <result column="c_name" property="name"/> <result column="uid" property="uid"/> </collection> </resultMap> <select id="findUserAndComputer" resultMap="userAndComputerMap"> select u.*, c.id c_id, c.name c_name, c.uid from user u, computer c where u.id = c.uid </select> <!--方式二--> <resultMap id="userAndComputerMap" type="user"> <id column="id" property="id"/> <result column="name" property="name"/> <result column="age" property="age"/> <collection property="computers" column="id" ofType="computer" select="com.api.MyBatis.dao.ComputerMapper.findByUid" > <id column="c_id" property="id"/> <result column="c_name" property="name"/> <result column="uid" property="uid"/> </collection> </resultMap> <select id="findUserAndComputer" resultMap="userAndComputerMap"> select * from user </select>
</mapper>
<!--computer.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.ComputerMapper"> <select id="findByUid" parameterType="int" resultType="computer"> select * from computer where uid = #{uid} </select>
</mapper>
// User.java实体类
package com.api.MyBatis.domain; import java.util.List; public class User { private int id; private String name; private int age; private List<Computer> computers; public User() { } public User(String name, int age) { this.name = name; this.age = age; } public User(int id, String name, int age) { this(name, age); this.id = id; } public void setId(int id) { this.id = id; } public void setName(String name) { this.name = name; } public void setAge(int age) { this.age = age; } public int getId() { return id; } public String getName() { return name; } public int getAge() { return age; } public List<Computer> getComputers() { return computers; } public void setComputers(List<Computer> computers) { this.computers = computers; } @Override public String toString() { return "User{" + "id=" + id + ", name='" + name + '\\'' + ", age=" + age + ", computers=" + computers + '}'; }
}
// Computer.java实体类
package com.api.MyBatis.domain; public class Computer { private int id; private String name; private int uid; public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getUid() { return uid; } public void setUid(int uid) { this.uid = uid; } @Override public String toString() { return "Computer{" + "id=" + id + ", name='" + name + '\\'' + ", uid=" + uid + '}'; }
}
// User接口
package com.api.MyBatis.dao; import com.api.MyBatis.domain.User; import java.util.List; public interface UserMapper { // 查询所有的用户及其名下的所有电脑 List<User> findUserAndComputer();
}
// Computer接口
package com.api.MyBatis.dao; import com.api.MyBatis.domain.Computer; import java.util.List; public interface ComputerMapper { List<Computer> findByUid(int uid);
}
// 测试类
package com.api.MyBatis.test; import com.api.MyBatis.dao.UserMapper;
import com.api.MyBatis.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test; import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map; public class UserTest { private SqlSession session; private UserMapper userDao; @BeforeEach public void before() throws Exception { // 1. 获取流对象，读取核心配置文件 InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml"); // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 session = factory.openSession(); // 5. 获取 UserDao 代理类对象 userDao = session.getMapper(UserMapper.class); } @AfterEach public void after() { // 7. 提交事务(增删改需要提交；查询时不要提交) session.commit(); // 8. 释放资源 session.close(); } // 查询所有的用户及其名下的电脑 @Test public void findUserAndComputer() { List<User> usersAll = userDao.findUserAndComputer(); for (User user : usersAll) { System.out.println(user); // 结果： // User{ // id=1, // name='tom', // age=18, // computers=[ // Computer{id=1, name='联想', uid=1,}, // Computer{id=2, name='华为', uid=1}, // Computer{id=4, name='戴尔', uid=1} // ] // } // User{ // id=2, // name='tony', // age=19, // computers=[ // Computer{id=3, name='华硕', uid=2} // ] // } // User{id=3, name='rose', age=18, computers=[]} } }
}`}]},{path:"/admin/Java/MyBatis/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/MyBatis%E4%B8%AD%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"MyBatis 中多表查询",slug:"mybatis-中多表查询",content:""},{header:"查询所有的学生以及教过该学生的老师(一个学生被多个老师教，一个老师又会教不同的学生)",slug:"查询所有的学生以及教过该学生的老师-一个学生被多个老师教-一个老师又会教不同的学生",content:`<!--Student.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.StudentMapper">
<!--方式一--> <resultMap id="studentMap" type="student"> <id column="id" property="id"/> <result column="name" property="name"/> <collection property="teachers" column="id" ofType="teacher"> <id column="t_id" property="id"/> <result column="t_name" property="name"/> </collection> </resultMap> <select id="findAll" resultMap="studentMap"> select s.*, t.id t_id, t.name t_name from student s, teacher t, s_t st where st.sid = s.id and st.tid = t.id </select>
<!--方式二--> <resultMap id="studentMap" type="student"> <id column="id" property="id"/> <result column="name" property="name"/> <collection property="teachers" column="id" ofType="teacher" select="com.api.MyBatis.dao.TeacherMapper.findBySid" > <id column="t_id" property="id"/> <result column="t_name" property="name"/> </collection> </resultMap> <select id="findAll" resultMap="studentMap"> select * from student </select>
</mapper>
<!--Teacher.xml-->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.api.MyBatis.dao.TeacherMapper"> <select id="findBySid" resultType="teacher" parameterType="int"> select * from teacher t, s_t st where t.id = st.tid and st.sid = #{sid} </select>
</mapper>
// StudentMapper接口
package com.api.MyBatis.dao; import com.api.MyBatis.domain.Student; import java.util.List; public interface StudentMapper { List<Student> findAll();
}
// TeacherMapper接口
package com.api.MyBatis.dao; import com.api.MyBatis.domain.Teacher; import java.util.List; public interface TeacherMapper { List<Teacher> findBySid(int id);
} // Student实体类
package com.api.MyBatis.domain; import java.util.List; public class Student { private int id; private String name; private List<Teacher> teachers; public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public List<Teacher> getTeachers() { return teachers; } public void setTeachers(List<Teacher> teachers) { this.teachers = teachers; } @Override public String toString() { return "Student{" + "id=" + id + ", name='" + name + '\\'' + ", teachers=" + teachers + '}'; }
}
// Teacher实体类
package com.api.MyBatis.domain; public class Teacher { private int id; private String name; public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } @Override public String toString() { return "Teacher{" + "id=" + id + ", name='" + name + '\\'' + '}'; }
}
// 测试类
package com.api.MyBatis.test; import com.api.MyBatis.dao.StudentMapper;
import com.api.MyBatis.domain.Student;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test; import java.io.InputStream;
import java.util.List; public class StudentTest { private SqlSession session; private StudentMapper StudentDao; @BeforeEach public void before() throws Exception { // 1. 获取流对象，读取核心配置文件 InputStream is = Resources.getResourceAsStream("SqlMapConfig.xml"); // 2. 创建 SqlSession 工厂的构建者对象 SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder(); // 3. 获取 SqlSession 工厂对象 SqlSessionFactory factory = builder.build(is); // 4. 获取 SqlSession 对象 session = factory.openSession(); // 5. 获取 UserDao 代理类对象 StudentDao = session.getMapper(StudentMapper.class); } @AfterEach public void after() { // 7. 提交事务(增删改需要提交；查询时不要提交) session.commit(); // 8. 释放资源 session.close(); } @Test public void findAll() { List<Student> Students = StudentDao.findAll(); for (Student s : Students) { System.out.println(s); // 结果： // Student{ // id=1, // name='tom', // teachers=[ // Teacher{id=1, name='rose'}, // Teacher{id=2, name='marry'} // ] // } // Student{ // id=2, // name='jerry', // teachers=[ // Teacher{id=1, name='rose'} // ] // } } }
}
create table student ( id int PRIMARY KEY auto_increment, name VARCHAR(20)
); create table teacher ( id int PRIMARY KEY auto_increment, name VARCHAR(20)
); create table s_t( sid int, tid int, PRIMARY KEY(sid, tid), -- 联合主键 foreign key (sid) REFERENCES student(id), -- 外键关联 foreign key (tid) REFERENCES teacher(id) -- 外键关联
); insert into student values (null, 'tom');
insert into student values (null, 'jerry');
insert into teacher values (null, 'rose');
insert into teacher values (null, 'marry'); insert into s_t values (1, 1);
insert into s_t values (1, 2);
insert into s_t values (2, 1);`}]},{path:"/admin/Java/MySql/JdbcTemplate/JdbcTemplate%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html",title:"",pathLocale:"/",contents:[{header:"JdbcTemplate 基本使用",slug:"jdbctemplate-基本使用",content:""},{header:"常用 api",slug:"常用-api",content:`方法
作用 List <T> query(String sql, new BeanPropertyRowMapper <T> T.class, Object... args)
执行查询，将每行数据转换为 T 对象，并返回一个包含这些对象的列表。 T queryForObject(String sql, new BeanPropertyRowMapper <T> T.class, Object... args)
执行查询，将结果集中第一行数据转换为 T 对象，并返回。 queryForObject(String sql, Object.class, Object... args);
根据指定的返回值类型的 class 和特定的参数，查询返回具体的值 int update(String sql, Object... args)
执行更新语句（包括：update、insert、delete）。 queryForList (String sql, Object.class, Object... args)
执行查询语句，将每行数据转换为一个 Map 对象，并返回一个包含这些 Map 对象的列表。 queryForMap(String sql, Object.class, Object... args)
执行查询语句，将结果集第一行数据转换为一个 Map 对象，并返回该对象。 package com.api.JdbcTemplate; import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate; import javax.sql.DataSource;
import java.util.List;
import java.util.Properties; public class Demo01 { public static void main(String[] args) throws Exception { // 创建连接池对象 // DataSource dataSource = new ComboPooledDataSource(); Properties p = new Properties(); p.load( Demo01.class.getClassLoader().getResourceAsStream("druid.properties") ); DataSource dataSource= new DruidDataSourceFactory().createDataSource(p); // 创建 JdbcTemplate 对象，并通过有参构造方式绑定连接池 JdbcTemplate jt = new JdbcTemplate(dataSource); /* // 创建 JdbcTemplate 对象，并绑定连接池 JdbcTemplate jt = new JdbcTemplate(); jt.setDataSource(dataSource); */ /* * 执行sql语句 */ // 增加 int num1 = jt.update( "insert into user values(null,?,?)", "tom", 1000 ); System.out.println(num1); // 删除 int num2 = jt.update( "delete from user where age = ?", 1000 ); System.out.println(num2); // 修改 int num3 = jt.update( "update user set age = ?, name=? where id = ?", 30, "tom", 1 ); System.out.println(num3); // 查询 // 1. 查询多条记录（底层都是反射，所以能获取到User.class数据） // 查询全部数据 List<User> users = jt.query( "select * from user", new BeanPropertyRowMapper<User>(User.class) ); for (User u : users) { System.out.println(u); } // 查询id为1和2的数据 List<User> list = jt.query( "select * from user where id in (?, ?)", new BeanPropertyRowMapper<User>(User.class), 1, 2 ); for (User u : list) { System.out.println(u); } // 2. 查询一条记录（查询id为1的数据） User user = jt.queryForObject( "select * from user where id = ?", new BeanPropertyRowMapper<User>(User.class), 1 ); System.out.println(user); // 3. 查询一个数据 // 查询id为1的数据的name值 String name = jt.queryForObject( "select name from user where id = ?", String.class, 1 ); System.out.println(name); // 查询表中记录的总条数 int count = jt.queryForObject( "select count(*) from user", Integer.class ); System.out.println(count); }
}
// Use.java
package com.api.JdbcTemplate; public class User { private int id; private String name; private int age; public User() { } public User(int id, String name, int age) { this.id = id; this.name = name; this.age = age; } public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "User [id=" + id + ", name=" + name + ", age=" + age + "]"; }
}`}]},{path:"/admin/Java/MySql/JdbcTemplate/JdbcTemplate%E5%AE%9E%E9%99%85%E4%BD%BF%E7%94%A8.html",title:"",pathLocale:"/",contents:[{header:"JdbcTemplate 实际使用.md",slug:"jdbctemplate-实际使用-md",content:`DAO(Data Access Object): 数据访问对象；
实际开发中我们修改的都是 Dao，而 JdbcTemplate 只需要引入并创建一个实例就行了;
其实 JdbcTemplate 就是一个工具类，它封装了 Jdbc 操作的很多细节，提供了很多操作数据库的通用方法，我们用的时候只需要传入 SQL 语句和对应的参数，它就能帮我们完成大部分操作，我们只需要关注 SQL 语句本身，而不用去关注数据库连接、事务处理等这些细节;
DAO 是我们操作 CURD 的层。 目录结构图： /* domian/User.java * domain 有人喜欢改成叫 pojo * 实体类，也叫描述类 * 实现序列化接口，以便在网络传输时能够将对象转换为字节流
*/ package com.api.JdbcTemplate.domain; import java.io.Serializable; // 实现序列化接口 public class User implements Serializable { private int id; private String name; private int age; public User() { } public User(int id, String name, int age) { this.id = id; this.name = name; this.age = age; } public int getId() { return id; } public void setId(int id) { this.id = id; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "User [id=" + id + ", name=" + name + ", age=" + age + "]"; }
}
/* dao/UserDao.java * 定义操作数据库的抽象方法
*/
package com.api.JdbcTemplate.dao; import com.api.JdbcTemplate.domain.User; import java.util.List; // Dao: Data Access Object 定义操作数据库的抽象方法
public interface UserDao { // 添加 public void add(User user); // 修改 public void update(User user); // 删除 public void delete(int id); // 查询所有 public List<User> findAll(); // 查询一个 public User findById(int id);
}
/* dao/impl/UserDaoImpl.java * 实现类，实现 UserDao 接口
*/
package com.api.JdbcTemplate.dao.impl; import com.api.JdbcTemplate.dao.UserDao;
import com.api.JdbcTemplate.domain.User;
import com.api.JdbcTemplate.util.DruidUtil;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate; import java.util.List; public class UserDaoImpl implements UserDao { private JdbcTemplate jt = new JdbcTemplate(DruidUtil.getDataSource()); @Override public void add(User user) { jt.update( "insert into user values(?,?,?)", user.getId(), user.getName(), user.getAge() ); } @Override public void update(User user) { jt.update( "update user set name=?, age=? where id=?", user.getName(), user.getAge(), user.getId() ); } @Override public void delete(int id) { jt.update("delete from user where id=?", id); } @Override public List<User> findAll() { List<User> users = jt.query( "select * from user", new BeanPropertyRowMapper<User>(User.class) ); return users; } @Override public User findById(int id) { User user = jt.queryForObject( "select * from user where id = ?", new BeanPropertyRowMapper<User>(User.class), id ); return user; }
}
/* util/DruidUtil.java * 封装Druid工具类，提供数据库连接对象等
*/
package com.api.JdbcTemplate.util; import com.alibaba.druid.pool.DruidDataSourceFactory; import javax.sql.DataSource;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties; // 封装Druid工具类
public class DruidUtil { private static DataSource dataSource; static { Properties p = new Properties(); try { p.load( DruidUtil.class.getClassLoader().getResourceAsStream("druid.properties") ); } catch (IOException e) { System.out.println("读取配置文件失败"); e.printStackTrace(); } try { dataSource = DruidDataSourceFactory.createDataSource(p); } catch (Exception e) { System.out.println("创建数据源失败"); e.printStackTrace(); } } public static DataSource getDataSource() { return dataSource; } public static Connection getConnection() throws SQLException { return dataSource.getConnection(); } public static void close(Connection conn, PreparedStatement ps, ResultSet rs) { if (rs != null) { try { rs.close(); } catch (Exception e) { } } if (ps != null) { try { ps.close(); } catch (Exception e) { } } if (conn != null) { try { conn.close(); } catch (Exception e) { } } }
}
/* test/UserTest.java * Juint进行单元测试
*/
package com.api.JdbcTemplate.test; import com.api.JdbcTemplate.dao.UserDao;
import com.api.JdbcTemplate.dao.impl.UserDaoImpl;
import com.api.JdbcTemplate.domain.User;
import org.junit.jupiter.api.Test; public class UserTest { // 创建dao对象，多态格式(UserDao不能new，要用他的实现类UserDaoImpl) private UserDao userDao = new UserDaoImpl(); @Test public void add() { User user = new User(); user.setName("张三"); user.setAge(20); user.setId(20); userDao.add(user); } @Test public void remove() { userDao.delete(20); } @Test public void update() { User user = new User(); user.setName("李四"); user.setAge(20); user.setId(1); userDao.update(user); } @Test public void findById() { User user = userDao.findById(1); System.out.println(user); // 结果： // User [id=1, name=李四, age=20] } @Test public void findAll() { for (User user : userDao.findAll()) { System.out.println(user); // 结果： // User [id=1, name=李四, age=20] // User [id=2, name=jerry, age=20] // User [id=7, name=tom, age=1000] } }
}`}]},{path:"/admin/Java/MySql/JdbcTemplate/JUnit.html",title:"",pathLocale:"/",contents:[{header:"JUnit",slug:"junit",content:`需要导入 Juint 相关的 jar 包 注解
作用 @Test
表示该方法是一个测试方法 @BeforeEach
在测试方法执行之前执行 @AfterEach
在测试方法执行之后执行 package com.api.JdbcTemplate; import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test; public class TestDemo { @AfterEach public void ccc() { System.out.println("after"); } @BeforeEach public void aaa() { System.out.println("before"); } @Test public void bbb() { System.out.println("test"); } // 运行结果： // before // test // after
}`}]},{path:"/admin/Java/MySql/JdbcTemplate/ORM.html",title:"",pathLocale:"/",contents:[{header:"ORM",slug:"orm",content:`JdbcTemplate 是 Spring 框架中针对 JDBC 的封装，是 JDBC 的工具类，简化代码的书写。
基于 ORM 思想的一个小框架。 ORM (Object Relational Mapping)思想：对象关系映射，将对象和数据库表进行映射，操作对象就可以操作数据库表。 在实际开发中，往往是数据库中的一张表，会对应 Java 中的一个类；其中，类名和表名一般是一致的，表中的字段和类中的属性名也一般是一致的。 因为涉及到关系了，所以底层用的都是反射`},{header:"JdbcTemplate 的基本使用步骤",slug:"jdbctemplate-的基本使用步骤",content:`导入 jar 包(很多，可能由 5/6 个 jar 包组成，都放在 lib 下)
创建 JdbcTemplate 对象，依赖于数据源
将数据库连接池对象，封装到 JdbcTemplate 对象中
执行数据库 CRUD 操作`}]},{path:"/admin/Java/MySql/%E4%BA%8B%E5%8A%A1/%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"事务",slug:"事务",content:`事务？
大事：比如转账操作，至少需要 2 条及以上语句才能完成；小事：比如新增操作，只需要 1 条语句即可完成。`},{header:"事务处理",slug:"事务处理",content:`处理什么问题？
从 A 的卡里扣 100，转到 B 的卡里；由于网络故障，从 A 的卡里扣了 100，但是 B 的卡里钱不能到账。
方案一：
start transaction; -- 手动开启事务
commit; -- 提交事务(提交后数据才会修改)
rollback; -- 回滚事务(如果不提交的话会自动回滚) -- 常见的组合： -- start transaction;
-- commit; -- start transaction;
-- rollback; -- 开始事务后，要么 commit 提交，要么 rollback 回滚
-- 具体案例： -- 开启事务
start transaction; -- 转账操作
update account set money = money - 100 where name = 'A';
update account set money = money + 100 where name = 'B'; -- 提交事务
commit; -- 回滚事务
-- rollback;
方案二： 事务相关命令
作用 select @@autocommit
查看自动提交还是手动提交 set @@autocommit = 0
禁止自动提交 set @@autocommit = 1
开启自动提交 -- 开启自动提交
set @@autocommit = 0; -- 转账操作
update account set money = money - 100 where name = 'A';
update account set money = money + 100 where name = 'B'; -- 提交事务
commit; -- 回滚事务
-- rollback;
;`}]},{path:"/admin/Java/MySql/%E4%BA%8B%E5%8A%A1/%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html",title:"",pathLocale:"/",contents:[{header:"隔离级别",slug:"隔离级别",content:""},{header:"事务的四大特性",slug:"事务的四大特性",content:`原子性(最小的单位，不能再往下分)、持久性、一致性(操作前后是一致的)、隔离性(事务间没有关系，互不影响)
当多个事务，并发操作同一张表时，会打破隔离性，以此产生新的问题(脏读、不可重复读、幻读，幻读也是虚读) 脏读：事务 A 读到了事务 B 未提交的数据 不可重复读：事务 A 读到了事务 B 提交后 修改(update)的 数据 幻读：事务 A 读到了事务 B 提交后 新增(insert)的或减少的 数据 丢失更新：事务 A 更新了事务 B 未提交的数据`},{header:"事务的隔离级别",slug:"事务的隔离级别",content:`串行化：事务 A 执行时，事务 B 必须等待事务 A 执行完毕后才能执行；这就比较卡。 隔离级别
是否会脏读
不可重复读
幻读
丢失更新
默认级别 读未提交(read uncommitted)
是
是
是
是
--- 读已提交(read committed)
否
是
是
是
Oracle 可重复读(repeatable read)
否
否
是
是
MySQL 串行化(serializable)
否
否
否
否
---`},{header:"设置隔离级别",slug:"设置隔离级别",content:`隔离级别相关命令
作用 select @@tx_isolation
查看当前隔离级别 set global transaction isolation level 隔离级别
设置全局的隔离级别 set session transaction isolation level 隔离级别
设置当前会话的隔离级别`}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%88%86%E7%BB%84.html",title:"",pathLocale:"/",contents:[{header:"分组",slug:"分组",content:`select * from 表名 group by 字段;
注意： 分组之后查询的字段，必须是分组字段，或者是使用聚合函数处理的字段 where 和 having 都是条件语句；但 where 在分组前，而 having 在分组后 -- 按照性别分组，每组多少人
select count(*) from students group by sex; -- 按照年龄分组，查询出每组的人数
-- 要求：只显示人数大于2的记录
-- 先分组，再筛选
select age, count(*) from students group by age having count(*) > 2; -- 20岁以上的人，按照年龄分组，查询每组的人数
-- 要求：只显示人数大于2的记录
-- 先筛选，后分组，再筛选
select age, count(*) from students where age > 20 group by age having count(*) > 2; -- 按照性别分组，查询出每组的人数
-- 要求：只显示人数大于2的记录，并且按照人数降序排序
-- 先分组，后筛选
select sex, count(*) from students group by sex
having count(*) > 2 order by count(*) desc; -- 筛选出年龄大于18的记录，然后按照性别分组，查询出每组的人数，只展示人数大于2的记录
-- 要求：先筛选，后分组，再筛选
select sex, count(*) from students where age > 18 group by sex
having count(*) > 2; -- 查询学生信息，按照年龄段分组查询，小于 18 的为一组，18-20 为一组，大于 20 的为一组
select age, count(*), case when age < 18 then '小于 18'
when age >= 18 and age <= 20 then '18-20'
else '大于 20' end as 年龄段 from students;`}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%88%86%E9%A1%B5.html",title:"",pathLocale:"/",contents:[{header:"分页查询",slug:"分页查询",content:`select * from 表名 limit 个数, 每页条数;
其中，个数从 0 开始，即默认为 0；每页条数默认为 10 条；个数等于 第 n 页 * 每页条数 -- 查询第一页的记录
select * from students limit 0, 10; -- 查询第二页的记录
select * from students limit 10, 10; -- 查询第三页的记录
select * from students limit 20, 10; -- 查询第四页的记录
select * from students limit 30, 10; -- 查询第n页
select * from students limit (n-1) * 每页条数, 每页条数;`}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%8D%E6%9D%82%E7%9A%84%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"复杂的条件查询",slug:"复杂的条件查询",content:""}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%8E%92%E5%BA%8F.html",title:"",pathLocale:"/",contents:[{header:"排序",slug:"排序",content:`select * from 表名 order by 字段名 排序方式;
排序方式：asc（升序）、desc（降序），默认升序。 -- 查询学生表，按照年龄排序
select * from student order by age; -- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序
select * from student order by age, id; -- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，并且只显示前三条记录
select * from student order by age, id limit 3; -- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，
-- 并且只显示前三条记录，并且只显示年龄大于18的记录
select * from student where age > 18 order by age, id limit 3; -- 查询学生信息，按照年龄降序，其中年龄为18、19、20，如果年龄相同，则按照学号排序
select * from student where age in(18, 19, 20) order by age, id desc; -- 查询学生信息，按照姓名由字典顺序进行排序
select * from student order by name; -- 查询100个学生信息，按照年龄由大到小进行排序，年龄相同的话，
-- 按照姓名由字典顺序进行排序，
-- 如果姓名也相同的话，按照学号降序排序
select * from student order by age desc, name, id desc limit 100;`}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2%E5%9F%BA%E7%A1%80.html",title:"",pathLocale:"/",contents:[{header:"条件查询",slug:"条件查询",content:"select * from 表名 where 条件; select 字段1, 字段2, 字段3,... from 表名 where 条件; select name, age from student where age > 18; select * from student where age > 18 and sex = '男';"},{header:"常用的条件",slug:"常用的条件",content:`操作符
描述 =
等于 >
大于 <
小于 >=
大于等于 <=
小于等于 != 或者 <>
不等于 between ... and ...
在范围内(包头包尾) 字段名 in(value1, value2, ...)
查询字段值为 xxx 的数据 is null
是空 is not null
不是空 and 或者 &&
逻辑与 or 或者 | |
逻辑或 distinct
去重 like
模糊查询 as
给列名或者表名起别名 create table student( id int primary key auto_increment, name varchar(20) not null, age int, sex varchar(5)
); insert into student(name, age, sex) values('Tom', 18, '男');
insert into student(name, age, sex) values('Jerry', 20, '男');
insert into student(name, age, sex) values('Rose', 19, '女');
insert into student(name, age, sex) values('Wei', 21, '女');
insert into student(name, age, sex) values('Wei', 21, '女'); select * from student where age >= 18 and age <= 20; select * from student where age between 18 and 20; select * from student where name in('Tom', 'Rose'); -- 查询是否空值，千万别写成 sex = null;
select * from student where sex is null; select * from student where sex is not null; select * from student where name = 'Tom' and age = 18; select * from student where name = 'Tom' && age = 18; -- 针对某个字段去重
select distinct age from student; -- 针对多个字段去重
select distinct name, age from student; -- 针对整体去重
select distinct * from student; -- 模糊查询：查询表中名字的第二个字母是e的数据
-- %代表0个或多个字符，_代表任意的一个字符
select * from student where name like '_e%'; -- 查询名字中包含e的
select * from student where name like '%e%'; -- 可以用汉字，且不需要引号；引号加上也没问题
select id as Id, name as 姓名, age as 年龄, sex as 性别 from student; -- as 也可以省略，同样也是给字段起别名
select id Id, name 姓名, age 年龄, sex 性别 from student; -- 给表起别名
select * from student as s; select s.id, s.name, s.age, s.sex from student as s;`}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E7%BA%A6%E6%9D%9F.html",title:"",pathLocale:"/",contents:[{header:"约束",slug:"约束",content:`非空约束：不能为空，即 不能为 Null -- 格式
create table 表名( 字段名 数据类型 not null
); -- 非空约束
create table student{ name varchar(20) not null, age int not null, sex varchar(5) not null
} -- 删除非空约束
alter table 表名 modify 字段名 数据类型; alter table student modify name varchar(20); -- 添加非空约束
alter table 表名 modify 字段名 数据类型 not null; alter table student modify name varchar(20) not null; 唯一约束：不能重复(Null 是没有值，没有重不重复这么一说) -- 格式
create table 表名( 字段名 数据类型 unique
); -- 唯一约束
create table student{ name varchar(20) unique, age int, sex varchar(5)
}; -- 删除唯一约束
alter table 表名 drop index 字段名; alter table student drop index name; -- 添加唯一约束
alter table 表名 modify 字段名 数据类型 unique; alter table student modify name varchar(20) unique; 主键约束：非空且唯一，每张表只能有一个主键 -- 格式
create table 表名( 字段名 数据类型 primary key
); -- 主键约束
create table student{ id int primary key, name varchar(20), age int, sex varchar(5)
}; -- 删除主键约束
alter table 表名 drop primary key; alter table student drop primary key;
-- 删除之后需要再改一下(这个方法就这样)
alter table modify id int; -- 添加主键约束
alter table 表名 modify 字段名 数据类型 primary key; alter table student modify id int primary key; 主键自增约束：在主键的基础上自动增长，所以也是只能有一个，在上一条的基础上加 1 -- 格式
create table 表名( 字段名 数据类型 auto_increment
); -- 自增约束
create table student{ id int primary key auto_increment, name varchar(20), age int, sex varchar(5)
}; -- 删除自增约束
alter table 表名 modify 字段名 数据类型; alter table student modify id int; -- 添加自增约束
alter table 表名 modify 字段名 数据类型 auto_increment; alter table student modify id int auto_increment; 外键约束 -- 标准格式
create table 表2名( constraint 键名 数据类型 foreign key (外键字段) references 表1名(表1的字段)
);
-- 简化格式(没有给键名，系统默认生成，键名可通过 show create table 表名 查看)
create table 表2名( foreign key (外键字段) references 表1名(表1的字段)
); -- 外键约束
create table user( id int primary key, name varchar(20)
);
create table student{ id int primary key, name varchar(20), uid int, constraint stu_user_fk foreign key (uid) references user(id)
}; -- 删除外键约束
alter table 表2名 drop foreign key 外键的名字; alter table student drop foreign key stu_user_fk; -- 添加外键约束
alter table 表2名
add constraint 外键的名字 foreign key (外键字段) references 表1名(表1的字段); alter table student
add constraint stu_user_fk foreign key (uid) references user(id); -- 注意：添加上外键约束后，想要删除主表是不行的，两种方式删除主表
-- 1. 先删除外键约束，再删除子表
-- 2. 先删除子表，此时因为子表没了那约束自然没了`}]},{path:"/admin/Java/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"聚合函数",slug:"聚合函数",content:`注意：
avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。
还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。 函数
作用 count()
统计数量 sum()
求和 max()
最大值 min()
最小值 avg()
平均值 truncate(x,y)
保留 y 位小数 round(x,y)
保留 y 位小数 ifnull(x,y)
如果 x 值为 Null，返回 y -- 查询学生数量
select count(*) from student; select count(id) from student; select count(name) as 总的人数 from student; select count(id) from student where age > 18 and sex = 1; -- 查询学生年龄总和
select sum(age) from student; select sum(age) as 总年龄 from student; select sum(age) as 总年龄 from student where sex = 1; -- 查询学生年龄最大值
select max(age) from student; select max(age) as 最大年龄 from student; select max(age) as 最大年龄 from student where sex = 1; -- 查询学生年龄最小值
select min(age) from student; select min(age) as 最大年龄 from student where sex = 1; -- 查询学生年龄平均值
select avg(age) as 学生平均年龄 from student; -- 查询学生平均年龄保持两位小数
select truncate(avg(age), 2) as 学生平均年龄 from student;
select truncate(sum(age)/count(*), 2) as 学生平均年龄 from student; -- 查询学生平均年龄保留一位小数
select round(avg(age), 1) as 学生平均年龄 from student;
select round(sum(age)/count(*), 1) as 学生平均年龄 from student; -- 查询学生平均年龄保留一位小数
select round(ifnull(sum(age), 0)/count(*), 1) as 学生平均年龄 from student;`}]},{path:"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%86%85%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"内连接查询",slug:"内连接查询",content:`取交集
-- 隐式内连接查询格式
select * from a, b where a.id = b.id; -- 显式内连接查询格式
select * from a inner join b on a.id = b.id; -- 隐式内连接和显示内连接，查询结果一样的，只是写法不同
-- 内连接就是筛选出符合条件 a.id = b.id 的记录，剩余的去掉
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a, b;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | aaa |
-- | 2 | b | 2 | bbb |
-- +----+------+----+------+`}]},{path:"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%96%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"外连接查询",slug:"外连接查询",content:`取交集 + 左表(或者右表)的剩余记录的补充
-- 左外连接查询格式
select * from a left join b on a.id = b.id;
-- 左外连接案例
-- 左外连接查询结果集 = 符合连接条件的记录 + 左表剩余记录
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a left join b on a.id = b.id;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | aaa |
-- | 2 | b | 2 | bbb |
-- | 3 | c | null | null |
-- +----+------+----+------+
-- 右外连接查询格式
select * from a right join b on a.id = b.id;
-- 右外连接案例
-- 右外连接查询结果集 = 符合连接条件的记录 + 右表剩余记录
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a right join b on a.id = b.id;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | aaa |
-- | 2 | b | 2 | bbb |
-- | null | null | 4 | ccc |
-- +----+------+----+------+`}]},{path:"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%9A%E8%A1%A8%E5%85%B3%E7%B3%BB.html",title:"",pathLocale:"/",contents:[{header:"多表关系",slug:"多表关系",content:""},{header:"一对一",slug:"一对一",content:"一个男人只能娶一个媳妇，一个女人也只能嫁给一个男人；一般不会有一对一，因为完全可以把两个表合二为一"},{header:"一对多(多对一)",slug:"一对多-多对一",content:`一个人可以有多个电脑，而一台电脑只能属于一个人
怎么做呢？
一般需要在多的一方添加一个字段，并添加外键关联，关联少的一方的主键 -- user表
create user( id int auto_increment primary key, u_name varchar(20)
);
-- computer表
create table computer( id int auto_increment primary key, c_name varchar(20), uid int, constraint c_u_key foreign key(uid) references user(id)
); insert into user (u_name) values ('张三');
insert into computer (c_name, uid) values ('电脑1', 1);
insert into computer (c_name, uid) values ('电脑2', 1);
-- 新增的时候可以给个默认值，也可以不写；或者给null也不报错，但是给null就没有意义了
insert into computer (c_name) values ('电脑3');
insert into computer (c_name, uid) values ('电脑4', 1); -- 删除外键约束
alter table computer drop foreign key c_u_key;
-- 添加外键约束
alter table computer add constraint c_u_key foreign key(uid) references user(id);`},{header:"多对多关系",slug:"多对多关系",content:`多个学生上多种课程
多个课程被多个学生选
学生表和课程表之间需要一个中间表，中间表中需要两个外键分别关联学生表和课程表 -- 学生表
create table student( id int auto_increment primary key, name varchar(20)
);
-- 课程表
create table course( id int auto_increment primary key, name varchar(20)
);
-- 中间表
create table student_course( sid int, cid int, primary key(sid, cid), -- 联合主键 constraint stu_key foreign key(sid) references student(id), constraint cou_key foreign key(cid) references course(id)
); -- 新增
insert into student (name) values ('张三');
insert into course (name) values ('语文');
insert into student_course (sid, cid) values (1, 1);
-- 删除
delete from student_course where sid = 1 and cid = 1;`}]},{path:"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%AD%90%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"子查询",slug:"子查询",content:`嵌套查询：查询语句里边还有查询语句；里边的查询语句称为子查询。 子查询结果为一条记录 -- 案例：查询 a 表中 id 值等于 b 表中名字为 Tony 的记录的 id select * from a where id XXX;
select * from b where name = 'Tony'; -- 子查询
select id from a where id = (select id from b where name = 'Tony'); -- 结果：
-- +----+------+
-- | id | name |
-- +----+------+
-- | 1 | Tony |
-- +----+------+ 子查询结果为多个记录 -- 案例：查询 a 表中 id 值等于 b 表中姓名为 Tony、Jerry 的记录的id select * from a where id in XXX;
select * from b where name = 'Tony' or name = 'Jerry'; -- 子查询
select id from a where id in (select id from b where name = 'Tony' or name = 'Jerry'); -- 结果：
-- +----+------+
-- | id | name |
-- +----+------+
-- | 1 | Tony |
-- | 2 | Jerry |
-- +----+------+ 子查询结果为一张表 -- 案例：查询 a 表中的记录信息，要求：用子查询实现按照 id 降序排列 -- 子查询方式1
select * from XXX;
select * from a order by id desc;
select * from (select * from a order by id desc) newA; -- 子查询方式2
select * from a where id in XXX;
select * from a order by id desc;
select * from a where id in (select id from a order by id desc); -- 结果：
-- +----+------+
-- | id | name |
-- +----+------+
-- | 5 | Tony |
-- | 4 | Jerry |
-- | 3 | Tom |
-- | 2 | Jerry |
-- | 1 | Tony |`}]},{path:"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E7%AC%9B%E5%8D%A1%E5%B0%94%E7%A7%AF%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"笛卡尔积查询",slug:"笛卡尔积查询",content:`所有多表查询的，最基础查询；笛卡尔积查询本身没有意义，平时不会用。
-- 格式
create table a( id int, name varchar(20)
); create table b( id int, name varchar(20)
); select * from a, b;
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a, b;
-- 结果:
-- 1 a 1 aaa
-- 2 b 1 aaa
-- 3 c 1 aaa
-- 1 a 2 bbb
-- 2 b 2 bbb
-- 3 c 2 bbb
-- 1 a 4 ccc
-- 2 b 4 ccc
-- 3 c 4 ccc`}]},{path:"/admin/Java/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E8%87%AA%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"自连接查询",slug:"自连接查询",content:`-- 自外连接查询格式
select * from a a1,a a2 where a1.id = a2.id;
-- 自连接查询案例
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); select * from a a1,a a2 where a1.id = a2.id;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | a |
-- | 2 | b | 2 | b |
-- | 3 | c | 3 | c |
-- +----+------+----+------+`}]},{path:"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/C3P0.html",title:"",pathLocale:"/",contents:[{header:"C3P0",slug:"c3p0",content:""},{header:"使用配置文件的方式",slug:"使用配置文件的方式",content:`导入 jar 包
导入配置文件
创建数据库连接池对象
获取数据库连接对象
归还连接对象 package com.api.SqlPool; import com.mchange.v2.c3p0.ComboPooledDataSource; import javax.sql.DataSource;
import java.sql.Connection; public class C3p0 { public static void main(String[] args) throws Exception { /*使用官方配置文件的方式 1. 导入 jar 包 2. 导入配置文件 3. 创建数据库连接池对象 4. 获取数据库连接对象 5. 归还连接对象 */ // 导入配置文件 // 创建数据库连接池对象 // 参数：configName DataSource dataSource = new ComboPooledDataSource("c3p0.config"); // 获取数据库连接对象 Connection conn = dataSource.getConnection(); System.out.println("成功获取连接"); System.out.println(conn); // 归还连接对象 conn.close(); }
}
<!-- c3p0.config.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<c3p0-config> <!--默认配置--> <default-config> <!--数据库连接参数--> <property name="driverClass">com.mysql.cj.jdbc.Driver</property> <property name="jdbcUrl"> jdbc:mysql://localhost:3306/sister?serverTimezone=UTC </property> <property name="user">root</property> <property name="password">Sap@1q2w3e4r</property> <!--数据库连接池参数--> <property name="checkoutTimeout">3000</property> <property name="maxPoolSize">10</property> <property name="initialPoolSize">5</property> </default-config> <named-config name="another"> <!--数据库连接参数--> <property name="driverClass">com.mysql.cj.jdbc.Driver</property> <property name="jdbcUrl"> jdbc:mysql://localhost:3306/sister?serverTimezone=UTC </property> <property name="user">root</property> <property name="password">Sap@1q2w3e4r</property> <!--数据库连接池参数--> <property name="checkoutTimeout">3000</property> <property name="maxPoolSize">10</property> <property name="initialPoolSize">5</property> </named-config>
</c3p0-config>`},{header:"不使用配置文件方式",slug:"不使用配置文件方式",content:`导入 jar 包
获取数据库连接池对象
配置参数
获取数据库连接对象
归还连接对象 package com.api.SqlPool; import com.mchange.v2.c3p0.ComboPooledDataSource; import javax.sql.DataSource;
import java.sql.Connection; public class C3p0 { public static void main(String[] args) throws Exception { /*不使用官方配置文件方式 1. 导入 jar 包 2. 获取数据库连接池对象 3. 配置参数 4. 获取数据库连接对象 5. 归还连接对象 */ // 获取数据库连接池对象（DataSource是父类，不能创建实例） // DataSource dataSource = new ComboPooledDataSource(); ComboPooledDataSource dataSource = new ComboPooledDataSource(); // 配置参数 dataSource.setUser("root"); dataSource.setPassword("Sap@1q2w3e4r"); dataSource.setJdbcUrl( "jdbc:mysql://localhost:3306/sister?serverTimezone=UTC" ); dataSource.setDriverClass("com.mysql.cj.jdbc.Driver"); // 获取数据库连接对象 Connection conn = dataSource.getConnection(); System.out.println(111); System.out.println(conn); // 归还连接对象 conn.close(); }
}`}]},{path:"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/Druid.html",title:"",pathLocale:"/",contents:[{header:"Druid",slug:"druid",content:""},{header:"使用配置文件方式",slug:"使用配置文件方式",content:`package com.api.SqlPool; import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory; import javax.sql.DataSource;
import java.sql.Connection;
import java.util.Properties; public class Druid { public static void main(String[] args) throws Exception{ /*使用官方配置文件的方式 1. 导入 jar 包 2. 导入配置文件 3. 创建数据库连接池对象 4. 获取数据库连接对象 5. 归还连接对象 */ // 导入配置文件 Properties p = new Properties(); p.load(Druid.class.getClassLoader().getResourceAsStream("druid.properties")); // 创建数据库连接池对象 DataSource dataSource = new DruidDataSourceFactory().createDataSource(p); // 获取数据库连接对象 Connection conn = dataSource.getConnection(); System.out.println("成功获取连接"); System.out.println(conn); // 归还连接对象 conn.close(); }
}
# src/main/resources/druid.properties
driverClassName=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=Sap@1q2w3e4r
initialSize=5
maxActive=10
maxWait=3000`},{header:"不使用配置文件方式",slug:"不使用配置文件方式",content:`package com.api.SqlPool; import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory; import javax.sql.DataSource;
import java.sql.Connection;
import java.util.Properties; public class Druid { public static void main(String[] args) throws Exception{ /*不使用官方配置文件方式 1. 导入 jar 包 2. 获取数据库连接池对象 3. 配置参数 4. 获取数据库连接对象 5. 归还连接对象 */ // 获取数据库连接池对象（DataSource是父类，不能创建实例） // DataSource dataSource = new DruidDataSource(); DruidDataSource dataSource = new DruidDataSource(); // 配置参数 dataSource.setUsername("root"); dataSource.setPassword("Sap@1q2w3e4r"); dataSource.setUrl("jdbc:mysql://localhost:3306/sister?serverTimezone=UTC"); dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver"); // 获取数据库连接对象 Connection conn = dataSource.getConnection(); System.out.println("成功获取连接"); System.out.println(conn); // 归还连接对象 conn.close(); }
}`},{header:"Druid 工具类封装",slug:"druid-工具类封装",content:`package com.api.SqlPool; import com.alibaba.druid.pool.DruidDataSourceFactory; import javax.sql.DataSource;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties; // 封装Druid工具类
public class DruidUtil { private static DataSource dataSource; static { Properties p = new Properties(); try { p.load( DruidUtil.class.getClassLoader().getResourceAsStream("druid.properties") ); } catch (IOException e) { System.out.println("读取配置文件失败"); e.printStackTrace(); } try { dataSource = DruidDataSourceFactory.createDataSource(p); } catch (Exception e) { System.out.println("创建数据源失败"); e.printStackTrace(); } } public static DataSource getDataSource() { return dataSource; } public static Connection getConnection() throws SQLException { return dataSource.getConnection(); } public static void close(Connection conn, PreparedStatement ps, ResultSet rs) { if (rs != null) { try { rs.close(); } catch (Exception e) { } } if (ps != null) { try { ps.close(); } catch (Exception e) { } } if (conn != null) { try { conn.close(); } catch (Exception e) { } } }
}
// 测试封装的工具类
package com.api.SqlPool; import java.sql.Connection;
import java.sql.SQLException; public class DruidUtilTest { public static void main(String[] args) { try { Connection conn = DruidUtil.getConnection(); System.out.println(conn); } catch (SQLException e) { System.out.println("获取连接失败"); e.printStackTrace(); } }
}`}]},{path:"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"数据库连接池概述",slug:"数据库连接池概述",content:`数据库连接池？
可以存储数据库连接对象的池子，需要的时候提取，用完了后放回去。池子思想，包括数据库连接池、线程池、对象池等。
数据库连接池的作用？
使用数据库连接池，避免了需要的时候需要创建连接，用完后需要关闭连接，下次再用再去创建，用完后再去关闭；
解决了这个问题，提前把一堆数据库连接对象，装进池子里，用完归还即可；节省时间，节约资源。
常用的第三方数据库连接池？
C3P0、Druid
C3P0：C3P0 是 Mchange 公司提供的一个开源的 JDBC 连接池，它实现了数据源和 JNDI 绑定，支持 JMX 监控，并且实现了 JDBC3 规范和 JDBC2 的标准扩展。但是，C3P0 在 Windows 操作系统下表现要好于 Linux 操作系统下；
Druid：Druid 是阿里巴巴开源平台上一个数据库连接池实现，结合了 C3P0 和 BoneCP 的优点，同时加入了日志监控。Druid 可以很好的监控 DB 池连接和 SQL 的执行情况，天生就是针对监控而生的 DB 连接池，在功能、性能、扩展性方面都超过其他 DB 连接池，包括 DBCP 和 C3P0。`}]},{path:"/admin/Java/MySql/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%B1%A0.html",title:"",pathLocale:"/",contents:[{header:"自定义数据库连接池",slug:"自定义数据库连接池",content:`// MyUtil
package com.api.SqlPool; import java.sql.*;
import java.util.Properties; public class MyUtil { private static String driver; private static String url; private static String username; private static String password; static { try { // 加载配置文件 Properties p = new Properties(); p.load( com.api.SqlPool.MyUtil.class.getClassLoader().getResourceAsStream( "jdbc.properties" ) ); System.out.println(p.getProperty("driver")); // 获取数据 driver = p.getProperty("driver"); url = p.getProperty("url"); username = p.getProperty("username"); password = p.getProperty("password"); // 注册驱动 try { Class.forName(driver); } catch (ClassNotFoundException e) { System.out.println("数据库连接池加载失败!"); e.printStackTrace(); } } catch (Exception e) { System.out.println("加载配置文件出错"); e.printStackTrace(); } } public static Connection getConnection() throws Exception { return DriverManager.getConnection(url, username, password); } public static void close(Connection conn, PreparedStatement ps, ResultSet rs) { if (rs != null) { try { rs.close(); } catch (SQLException e) { e.printStackTrace(); } } if (ps != null) { try { ps.close(); } catch (SQLException e) { e.printStackTrace(); } } if (conn != null) { try { conn.close(); } catch (SQLException e) { e.printStackTrace(); } } } public static void close(Connection conn, PreparedStatement ps) { close(conn, ps, null); }
}
package com.api.SqlPool; import java.sql.Connection; // 自定义数据库连接池
public class Demo01 { public static void main(String[] args) { for (int i = 0; i < 10; i++) { Connection conn = MySimplePool.getConnection(); System.out.println(conn); // 结果： // com.mysql.cj.jdbc.Driver // com.mysql.cj.jdbc.ConnectionImpl@6483f5ae // com.mysql.cj.jdbc.ConnectionImpl@b9afc07 // com.mysql.cj.jdbc.ConnectionImpl@382db087 // com.mysql.cj.jdbc.ConnectionImpl@73d4cc9e // com.mysql.cj.jdbc.ConnectionImpl@80169cf // Exception in thread "main" java.lang.RuntimeException: // 服务器忙，请稍后再试! } }
}
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://localhost:3306/sister?serverTimezone=UTC
username=root
password=Sap@1q2w3e4r`}]},{path:"/admin/Java/Spring/Aop/Aop%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"Aop 概述",slug:"aop-概述",content:`在不影响原来业务的情况下，实现代码的增强
AOP（Aspect Oriented Programming）是面向切面编程，旨在通过将横切关注点（如日志记录、事务管理等）与业务逻辑分离，提高代码的可维护性和可扩展性。
AOP 就是通过动态代理实现的。`}]},{path:"/admin/Java/Spring/Aop/SpringApi%E6%8E%A5%E5%8F%A3%E5%AE%9E%E7%8E%B0Aop.html",title:"",pathLocale:"/",contents:[{header:"Spring Api 接口实现 Aop",slug:"spring-api-接口实现-aop",content:`配置切入点，以及配置切入点的环绕方法 <?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd"> <!--注册bean--> <bean id="userService" class="com.haha.service.UserServiceImpl"></bean> <bean id="beforeLog" class="com.haha.log.BeforeLog"></bean> <bean id="afterLog" class="com.haha.log.AfterLog"></bean> <!--配置Aop：切忌，上边需要导入Aop的约束--> <aop:config> <!--配置多个切入点： expression表达式，表示的是切入点的所有方法以及所有参数--> <aop:pointcut id="pointcut" expression="execution(* com.haha.service.UserServiceImpl.*(..))" /> <!--配置多个执行环绕--> <aop:advisor advice-ref="beforeLog" pointcut-ref="pointcut"></aop:advisor> <aop:advisor advice-ref="afterLog" pointcut-ref="pointcut"></aop:advisor> </aop:config>
</beans>
// UserService
package com.haha.service; public interface UserService { public void add(); public void delete(); public void update(); public void query();
} // UserServiceImpl
package com.haha.service; public class UserServiceImpl implements UserService{ @Override public void add() { System.out.println("add"); } @Override public void delete() { System.out.println("delete"); } @Override public void update() { System.out.println("update"); } @Override public void query() { System.out.println("query"); }
} // 前置类
package com.haha.log; import org.springframework.aop.MethodBeforeAdvice; import java.lang.reflect.Method; public class BeforeLog implements MethodBeforeAdvice { // Method method, Object[] objects, Object o: // Method method: 要执行的目标对象的方法 // Object[] objects: 参数（args） // Object o: 目标对象(target) @Override public void before(Method method, Object[] objects, Object o) throws Throwable { System.out.println( o.getClass().getName() + "的" + method.getName() + "方法被执行了" ); }
} // 后置类
package com.haha.log; import org.springframework.aop.AfterReturningAdvice; import java.lang.reflect.Method; public class AfterLog implements AfterReturningAdvice { // Object o, Method method, Object[] objects, Object o1: // Object o: 返回值 // Method method: 要执行的目标对象的方法 // Object[] objects: 参数(args) // Object o1: 目标对象(target) @Override public void afterReturning(Object o, Method method, Object[] objects, Object o1) throws Throwable { System.out.println("执行了" + method.getName() + "方法，返回结果为：" + o); }
}
import com.haha.service.UserService;
import com.haha.service.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestAop1 { public static void main(String[] args) { ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml"); // 动态代理，代理的是接口，不再是实现类了 // UserServiceImpl user = (UserServiceImpl)context.getBean("userService"); UserService user = (UserService)context.getBean("userService"); user.add(); // 结果： // com.haha.service.UserServiceImpl的add方法被执行了 // add // 执行了add方法，返回结果为：null }
}`}]},{path:"/admin/Java/Spring/Aop/%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0Aop.html",title:"",pathLocale:"/",contents:[{header:"注解实现 Aop",slug:"注解实现-aop",content:`使用注解的方式实现，其实也分多种方式，比如使用配置文件，还是使用@Component 注解 <?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd"> <!--注册bean--> <bean id="userService" class="com.haha.service.UserServiceImpl"></bean> <bean id="beforeLog" class="com.haha.log.BeforeLog"></bean> <bean id="afterLog" class="com.haha.log.AfterLog"></bean> <!--使用注解(1)--> <bean id="annotationPointCut" class="com.haha.diy.AnnotationPointCut"></bean> <!--开启注解支持--> <aop:aspectj-autoproxy/> <!--使用注解(2)--> <!--注解的支持：注意上边需要引入的约束--> <context:annotation-config /> <context:component-scan base-package="com.haha.diy"/> <aop:aspectj-autoproxy/>
</beans>
// UserService
package com.haha.service; public interface UserService { public void add(); public void delete(); public void update(); public void query();
} // UserServiceImpl
package com.haha.service; public class UserServiceImpl implements UserService{ @Override public void add() { System.out.println("add"); } @Override public void delete() { System.out.println("delete"); } @Override public void update() { System.out.println("update"); } @Override public void query() { System.out.println("query"); }
} // 自定义注解类
package com.haha.diy; import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component; @Aspect // 表示当前类是一个切面类
@Component // 使用注解导入当前类
public class AnnotationPointCut { // @Before: 前置通知 // 切入点表达式：找到要代理的具体方法 @Before("execution(* com.haha.service.UserServiceImpl.*(..))") public void beforeMethod() { System.out.println("方法执行之前"); } @After("execution(* com.haha.service.UserServiceImpl.*(..))") public void afterMethod() { System.out.println("方法执行之后"); } // 在环绕通知中，我们可以给定一个参数，代表我们要获取的切入点方法 @Around("execution(* com.haha.service.UserServiceImpl.*(..))") public void aroundMethod(ProceedingJoinPoint joinPoint) throws Throwable { System.out.println("环绕通知，通知前我还能做处理"); // 执行通知方法中 Object obj = joinPoint.proceed(); System.out.println("环绕通知，通知后我还能做处理"); }
}
import com.haha.service.UserService;
import com.haha.service.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestAop1 { public static void main(String[] args) { ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml"); // 动态代理，代理的是接口，不再是实现类了 // UserServiceImpl user = (UserServiceImpl)context.getBean("userService"); UserService user = (UserService)context.getBean("userService"); user.add(); // 结果： // 环绕通知，通知前我还能做处理 // 方法执行之前 // add // 方法执行之后 // 环绕通知，通知后我还能做处理 }
}`}]},{path:"/admin/Java/Spring/Aop/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%AE%9E%E7%8E%B0Aop.html",title:"",pathLocale:"/",contents:[{header:"自定义类实现 Aop",slug:"自定义类实现-aop",content:`使用自定义类，首先配置切入面，在面内根据切入点，使用通知，进行环绕 <?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd"> <!--注册bean--> <bean id="userService" class="com.haha.service.UserServiceImpl"></bean> <bean id="beforeLog" class="com.haha.log.BeforeLog"></bean> <bean id="afterLog" class="com.haha.log.AfterLog"></bean> <!--配置Aop：切忌，上边需要导入Aop的约束--> <bean id="diy" class="com.haha.diy.DiyPointCut"></bean> <aop:config> <!--自定义切面，ref: 要引用的类--> <aop:aspect ref="diy"> <!--切入点 注意：com.UserServiceImpl：类路径；如果UserServiceImpl换成*，表示当前包下所有类--> <aop:pointcut id="point" expression="execution(* com.haha.service.UserServiceImpl.*(..))" /> <!--通知--> <aop:before method="beforeMethod" pointcut-ref="point"/> <aop:after method="afterMethod" pointcut-ref="point"/> </aop:aspect> </aop:config>
</beans>
// UserService
package com.haha.service; public interface UserService { public void add(); public void delete(); public void update(); public void query();
} // UserServiceImpl
package com.haha.service; public class UserServiceImpl implements UserService{ @Override public void add() { System.out.println("add"); } @Override public void delete() { System.out.println("delete"); } @Override public void update() { System.out.println("update"); } @Override public void query() { System.out.println("query"); }
} // 自定义类
package com.haha.diy; public class DiyPointCut { public void beforeMethod() { System.out.println("before method"); } public void afterMethod() { System.out.println("after method"); }
}
import com.haha.service.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestAop1 { public static void main(String[] args) { ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml"); // 动态代理，代理的是接口，不再是实现类了 // UserServiceImpl user = (UserServiceImpl)context.getBean("userService"); UserService user = (UserService)context.getBean("userService"); user.add(); // 结果： // before method // add // after method }
}`}]},{path:"/admin/Java/Spring/IoC/IoC-%E5%8F%8D%E8%BD%AC.html",title:"",pathLocale:"/",contents:[{header:"IoC-反转",slug:"ioc-反转",content:""},{header:"反转",slug:"反转",content:`通过下面的案例，理解 IoC 的反转，即当我们的程序需求在不断变更的时候，我们不能反复修改 private UserDao userDao = new UserDaoImpl(); 这段代码的赋值情况，而是应该在调用时通过外部传入(注入)，而不去改变UserServiceImpl原来的代码。 // UserDao
package com.haha.dao; public interface UserDao { void getUser();
} // UserDaoImpl
package com.haha.dao.Impl; import com.haha.dao.UserDao; public class UserDaoImpl implements UserDao { @Override public void getUser() { System.out.println("默认获取用户数据"); }
} // UserDaoMySqlImpl
package com.haha.dao.Impl; import com.haha.dao.UserDao; public class UserDaoMySqlImpl implements UserDao { @Override public void getUser() { System.out.println("获取MySql用户数据"); }
} // UserDaoOracleImpl
package com.haha.dao.Impl; import com.haha.dao.UserDao; public class UserDaoOracleImpl implements UserDao { @Override public void getUser() { System.out.println("获取Oracle用户数据"); }
} // UserService
package com.haha.service; public interface UserService { void getUser();
} // UserServiceImpl
package com.haha.service.Impl;
import com.haha.dao.UserDao;
import com.haha.service.UserService;
public class UserServiceImpl implements UserService { // private UserDao userDao = new UserDaoImpl(); 这就写死了 private UserDao userDao; // set 注入：值不是写死的，而是注入的，也就是传进来的 public void setUserDao(UserDao userDao) { this.userDao = userDao; } @Override public void getUser() { userDao.getUser(); }
} // MyTest
package com.haha.test;
import com.haha.dao.Impl.UserDaoImpl;
import com.haha.dao.Impl.UserDaoMySqlImpl;
import com.haha.dao.Impl.UserDaoOracleImpl;
import com.haha.service.Impl.UserServiceImpl;
import com.haha.service.UserService;
import org.junit.Test; public class MyTest { @Test public void test() { UserService userService = new UserServiceImpl(); // 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更 ((UserServiceImpl) userService).setUserDao(new UserDaoImpl()); userService.getUser(); // 输出：默认获取用户数据 } @Test public void mYSqlTest() { UserService userService = new UserServiceImpl(); // 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更 ((UserServiceImpl) userService).setUserDao(new UserDaoMySqlImpl()); userService.getUser(); // 输出：获取MySql用户数据 } @Test public void oracleTest() { UserService userService = new UserServiceImpl(); // 只需要修改注入的对象(setUserDao的参数)即可达到需求的变更 ((UserServiceImpl) userService).setUserDao(new UserDaoOracleImpl()); userService.getUser(); // 输出：获取Oracle用户数据 }
}`}]},{path:"/admin/Java/Spring/IoC/IoC-%E6%8E%A7%E5%88%B6.html",title:"",pathLocale:"/",contents:[{header:"控制",slug:"控制",content:`通过下面的案例，理解 IoC 的控制，即通过 Spring 容器来管理对象，而不是我们手动去创建对象。 <!-- bean.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
<!--
使用Spring来创建对象，在Spring中这些都称为bean
正常我们创建对象：
Hello hello = new Hello();
类型 变量名 = new 类名(); id: 唯一标识符，即变量名 class: 指定这个bean对象的类型，即类名 name: 别名(调用时也可以用别名来获取该对象) property: 对bean对象中的属性进行赋值 name: 属性的名称(类中的属性) value: 属性的值 ref: 引用另一个bean对象
-->
<bean id="hello" class="com.haha.pojo.Hello" name="hello2, h2, h3"> <property name="str" value="spring-hello"/>
</bean>
</beans>
// Hello
package com.haha.pojo; public class Hello { private String str; public String getStr() { return str; } public void setStr(String str) { this.str = str; }
}
// TestBean
import com.haha.pojo.Hello;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestBean { public static void main(String[] args) { // 获取Spring上下文对象 ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml"); // 我们的对象现在都在Spring中进行管理了，获取的时候，直接根据id获取就可以了 Hello str = (Hello)ac.getBean("hello"); System.out.println(str.getStr()); }
}`}]},{path:"/admin/Java/Spring/IoC/IoC%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC-%E5%9F%BA%E7%A1%80%E6%A1%88%E4%BE%8B.html",title:"",pathLocale:"/",contents:[{header:"IoC 控制反转-基础案例",slug:"ioc-控制反转-基础案例",content:`就是 IoC-反转和 IoC-控制的结合，也是 IoC 最基本的案例 <?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <bean id="mySqlImpl" class="com.haha.dao.Impl.UserDaoMySqlImpl"/> <bean id="oracleImpl" class="com.haha.dao.Impl.UserDaoOracleImpl"/> <bean id="userServiceImpl" class="com.haha.service.Impl.UserServiceImpl"> <!-- name: 是userServiceImpl对象中的属性 value：属性值，静态的属性值 ref: 引用另一个bean对象 --> <!-- 随着ref的引用的改变，获取到的数据等也随之改变了，不需要再去修改程序了 --> <property name="userDao" ref="mySqlImpl"/> </bean>
</beans>
// UserDao
package com.haha.dao; public interface UserDao { void getUser();
} // UserDaoImpl
package com.haha.dao.Impl; import com.haha.dao.UserDao; public class UserDaoImpl implements UserDao { @Override public void getUser() { System.out.println("默认获取用户数据"); }
} // UserDaoMySqlImpl
package com.haha.dao.Impl; import com.haha.dao.UserDao; public class UserDaoMySqlImpl implements UserDao { @Override public void getUser() { System.out.println("获取MySql用户数据"); }
} // UserDaoOracleImpl
package com.haha.dao.Impl; import com.haha.dao.UserDao; public class UserDaoOracleImpl implements UserDao { @Override public void getUser() { System.out.println("获取Oracle用户数据"); }
} // UserService
package com.haha.service; public interface UserService { void getUser();
} // UserServiceImpl
package com.haha.service.Impl;
import com.haha.dao.UserDao;
import com.haha.service.UserService;
public class UserServiceImpl implements UserService { // private UserDao userDao = new UserDaoImpl(); 这就写死了 private UserDao userDao; // set 注入：值不是写死的，而是注入的，也就是传进来的 public void setUserDao(UserDao userDao) { this.userDao = userDao; } @Override public void getUser() { userDao.getUser(); }
} // MyTestIoC
package com.haha.test; import com.haha.service.Impl.UserServiceImpl;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class MyTestIoC { public static void main(String[] args) { // 获取Spring上下文对象 ApplicationContext ac = new ClassPathXmlApplicationContext("bean.xml"); // 我们的对象现在都在Spring中进行管理了，获取的时候，直接根据id获取就可以了 // 注意：需要修改的时候，这些都不需要改动了，只需要修改配置文件即可 UserServiceImpl userServiceImpl = (UserServiceImpl) ac.getBean("userServiceImpl"); userServiceImpl.getUser(); // 输出：获取MySql用户数据 }
}`}]},{path:"/admin/Java/Spring/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5/p%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E6%B3%A8%E5%85%A5.html",title:"",pathLocale:"/",contents:[{header:"p 命名空间注入",slug:"p-命名空间注入",content:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p" xmlns:c="http://www.springframework.org/schema/c" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <!--p命名：实际使用的就是set注入(注入属性)--> <bean name="user1" class="com.haha.pojo.User" p:name="张三" p:age="20"></bean> <!--c命名：实际使用的就是构造器注入--> <bean name="user2" class="com.haha.pojo.User" c:name="李四" c:age="30"></bean>
</beans>
// Test
import com.haha.pojo.User;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; public class TestP { public static void main(String[] args) { ApplicationContext ac = new ClassPathXmlApplicationContext("user.xml"); // getBean(bean的id属性，实体类的实体类的class) // 当第二个值给定的时候，是不需要强制转换了，因为知道类型了 User user1= ac.getBean("user1", User.class); System.out.println(user1); // User(name=张三, age=20) User user2= ac.getBean("user2", User.class); System.out.println(user2); // User(name=李四, age=30) }
}
// User
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @Data
@AllArgsConstructor
@NoArgsConstructor
public class User { private String name; private int age;
}`}]},{path:"/admin/Java/Spring/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5/set%E6%96%B9%E6%B3%95%E6%B3%A8%E5%85%A5.html",title:"",pathLocale:"/",contents:[{header:"set 方法注入",slug:"set-方法注入",content:`依赖注入：实际都是 set 注入 <?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <bean id="address" class="com.haha.pojo.Address"> <property name="address" value="地址"/> </bean> <bean id="student" class="com.haha.pojo.Student"> <!--普通值注入: value--> <property name="name" value="姓名"/> <!--Bean注入：ref--> <property name="address" ref="address"/> <!--数组注入：--> <property name="books"> <array> <value>三国演义</value> <value>西游记</value> </array> </property> <!--list注入：--> <property name="hobbies"> <list> <value>唱歌</value> <value>跳舞</value> </list> </property> <!--map注入：--> <property name="cards"> <map> <entry key="身份证" value="123456"/> <entry key="银行卡" value="123456789"/> </map> </property> <!--set注入：--> <property name="games"> <set> <value>LOL</value> <value>王者荣耀</value> </set> </property> <!--空指针注入--> <property name="wife" value=""/> <!--Properties注入：--> <property name="info"> <props> <prop key="学号">123456</prop> <prop key="性别">男</prop> </props> </property> </bean>
</beans>
// Student
package com.haha.pojo; import lombok.Data; import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set; @Data
public class Student { private String name; private Address address; private String[] books; private List<String> hobbies; private Map<String, String> cards; private Set<String> games; private String wife; private Properties info;
} // Address
package com.haha.pojo; import lombok.Data; @Data
public class Address { private String address;
} // Test
import com.haha.pojo.Address;
import com.haha.pojo.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext; import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set; public class Test { public static void main(String[] args){ ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml"); Student student = (Student) context.getBean("student"); System.out.println(student.getName()); // 姓名 Address address = student.getAddress(); System.out.println(address.getAddress()); // 地址 String[] books = student.getBooks(); for (String book : books) { System.out.println(book); // 三国演义 // 西游记 } List<String> hobbies = student.getHobbies(); for (String hobby : hobbies){ System.out.println(hobby); // 唱歌 // 跳舞 } Map<String, String> cards = student.getCards(); for (String key : cards.keySet()){ System.out.println(key + " : " + cards.get(key)); // 身份证 : 123456 // 银行卡 : 123456789 } Set<String> games = student.getGames(); for (String game : games){ System.out.println(game); // LOL // 王者荣耀 } System.out.println(student.getWife()); // 空格 Properties info = student.getInfo(); for (String key : info.stringPropertyNames()){ System.out.println(key + " : " + info.getProperty(key)); // 学号 : 123456 // 性别 : 男 } }
}`}]},{path:"/admin/Java/Spring/%E4%BE%9D%E8%B5%96%E6%B3%A8%E5%85%A5/%E6%9E%84%E9%80%A0%E5%99%A8%E6%B3%A8%E5%85%A5.html",title:"",pathLocale:"/",contents:[{header:"构造器注入",slug:"构造器注入",content:"构造器注入前便已用使用过了，分为有参构造和无参构造"}]},{path:"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/SpringMvc%E6%89%A9%E5%B1%95.html",title:"",pathLocale:"/",contents:[{header:"SpringMvc 扩展",slug:"springmvc-扩展",content:`首先编写一个@Configuration 注解的类，用于扫描自定义的注解
这个类要实现 WebMvcConfigurer 接口，并且不能标注@EnableWebMvc 注解，否则会覆盖掉默认的配置
编写自定义的类或者说组件，并通过@Bean 把他交给 SpringBoot 管理，SpringBoot 就会帮我们自动装配
这样我们就完成了针对 SpringMvc 的自定义的扩展 package com.ths.config; import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer; import java.util.Locale;
// 自定义Mvc扩展
@Configuration // 配置类，目的是让SpringBoot进行扫描 MyMvcConfig 这个类
public class MyMvcConfig implements WebMvcConfigurer { // 自定义视图解析器：MyViewResolver @Bean // @Bean组测组件，将 MyViewResolver交给SpringBoot托管， public ViewResolver MyViewResolver(){ return null; } // MyViewResolver：要实现视图解析，就要实现 ViewResolver 接口 public static class MyViewResolver implements ViewResolver{ // 同时要重写 resolveViewName 方法 @Override public View resolveViewName(String s, Locale locale) throws Exception { return null; } } // 自定义视图跳转 @Override public void addViewControllers(ViewControllerRegistry registry) { // 添加视图跳转 registry.addViewController("/ths").setViewName("ths"); } // 添加静态资源映射 @Override public void addResourceHandlers(ResourceHandlerRegistry registry) { // 添加静态资源映射
registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/"); }
}`}]},{path:"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90.html",title:"",pathLocale:"/",contents:[{header:"静态资源",slug:"静态资源",content:""},{header:"静态资源引入",slug:"静态资源引入",content:`方式
文件所在路径
优先级
一般如何使用 resources
classpath:/resources
1
上传的文件 static
classpath:/static
2
静态的图片等 public
classpath:/public
3
公共的 js /
项目根目录
4
一般不使用`},{header:"webjars 引入",slug:"webjars-引入",content:"webjars 官网以依赖的方式引入外部资源，引入的资源在 jar 包内的 classpath:/META-INF/resources 路径下，但是这种方式很少使用"},{header:"修改静态资源路径",slug:"修改静态资源路径",content:"因为是自动装配，所以可以修改配置方式修改静态资源的路径，自己来配。"},{header:"源码",slug:"源码",content:`// 源码(WebMvcAutoConfiguration.java)截取
public void addResourceHandlers(ResourceHandlerRegistry registry) { if (!this.resourceProperties.isAddMappings()) { logger.debug("Default resource handling disabled"); } else { if (!registry.hasMappingForPattern("/webjars/**")) { ResourceHandlerRegistration registration = registry.addResourceHandler(new String[]{"/webjars/**"}).addResourceLocations(new String[]{"classpath:/META-INF/resources/webjars/"}); this.configureResourceCaching(registration); this.customizeResourceHandlerRegistration(registration); } String staticPathPattern = this.webFluxProperties.getStaticPathPattern(); if (!registry.hasMappingForPattern(staticPathPattern)) { ResourceHandlerRegistration registration = registry.addResourceHandler(new String[]{staticPathPattern}).addResourceLocations(this.resourceProperties.getStaticLocations()); this.configureResourceCaching(registration); this.customizeResourceHandlerRegistration(registration); } }
} // 源码(WebMvcProperties.java)截取
public class WebMvcProperties { /** * Path pattern used for static resources. */ private String staticPathPattern = "/**"; private final Async async = new Async(); private final Servlet servlet = new Servlet(); private final View view = new View(); private final Contentnegotiation contentnegotiation = new Contentnegotiation(); private final Pathmatch pathmatch = new Pathmatch();
} // 源码(ResourceProperties.java)截取
/** * Properties used to configure resource handling. * * @author Phillip Webb * @author Brian Clozel * @author Dave Syer * @author Venil Noronha * @author Kristine Jetzke * @since 1.1.0 */
@ConfigurationProperties(prefix = "spring.resources", ignoreUnknownFields = false)
public class ResourceProperties { private static final String[] CLASSPATH_RESOURCE_LOCATIONS = { "classpath:/META-INF/resources/", "classpath:/resources/", "classpath:/static/", "classpath:/public/" }; /** * Locations of static resources. Defaults to classpath:[/META-INF/resources/, * /resources/, /static/, /public/]. */ private String[] staticLocations = CLASSPATH_RESOURCE_LOCATIONS; /** * Whether to enable default resource handling. */ private boolean addMappings = true; private final Chain chain = new Chain(); private final Cache cache = new Cache(); public String[] getStaticLocations() { return this.staticLocations; }
}`}]},{path:"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/%E9%A6%96%E9%A1%B5.html",title:"",pathLocale:"/",contents:[{header:"首页",slug:"首页",content:""},{header:"跳转到首页",slug:"跳转到首页",content:`方式一： 只需要在静态资源存放目录下，新建一个 index.html 即可，访问 http://localhost:8080/ 即可访问到 index.html
方式二： 在 template 目录下新建 index.html，引入 thymeleaf 相关 依赖，并通过 Controller 访问`},{header:"方式二实现",slug:"方式二实现",content:`首先在 resources/templates 下新建一个 index.html
package com.ths.controller; import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping; // 在templates目录下的页面只能通过controller来跳转
// 需要thymeleaf模板引擎的支持
@Controller
public class IndexController { @GetMapping("/a") public String index(){ return "index"; }
}`},{header:"源码",slug:"源码",content:`// 源码(WebMvcAutoConfiguration.java 截取)
@Bean
public WelcomePageHandlerMapping welcomePageHandlerMapping(ApplicationContext applicationContext, FormattingConversionService mvcConversionService, ResourceUrlProvider mvcResourceUrlProvider) { WelcomePageHandlerMapping welcomePageHandlerMapping = new WelcomePageHandlerMapping( new TemplateAvailabilityProviders(applicationContext), applicationContext, getWelcomePage(), this.mvcProperties.getStaticPathPattern()); welcomePageHandlerMapping.setInterceptors(getInterceptors(mvcConversionService, mvcResourceUrlProvider)); return welcomePageHandlerMapping;
}
private Optional<Resource> getWelcomePage() { String[] locations = getResourceLocations(this.resourceProperties.getStaticLocations()); return Arrays.stream(locations).map(this::getIndexHtml).filter(this::isReadable).findFirst();
}
private Resource getIndexHtml(String location) { return this.resourceLoader.getResource(location + "index.html");
}`}]},{path:"/admin/Java/SpringBoot/yaml/jsr303%E6%95%B0%E6%8D%AE%E6%A0%A1%E9%AA%8C.html",title:"",pathLocale:"/",contents:[{header:"jsr303 数据校验",slug:"jsr303-数据校验",content:""},{header:"常用注解",slug:"常用注解",content:`注解
作用 @Validated
开启校验 @Range(min=, max=)
被指定的元素必须在合适的范围内 @CreditCardNumber
信用卡验证 @Email
邮箱地址验证 @Pattern
正则表达式验证 @URL
URL 地址验证`},{header:"空检查",slug:"空检查",content:`注解
作用 @Null
验证对象是否为 null @NotNull
验证对象是否不为 null，长度为 0 的字符串无法查验 @NotBlank
查验字符串是不是 null 还有被 trim 的长度是否大于 0，只对字符串，且会去掉前后空格 @NotEmpty
是否为 null 或者 empty`},{header:"Boolean 检查",slug:"boolean-检查",content:`注解
作用 @AssertTrue
验证 Boolean 对象是否为 true @AssertFalse
验证 Boolean 对象是否为 false`},{header:"长度检查",slug:"长度检查",content:`注解
作用 @Size(min=, max=)
验证对象(Array,Collection,Map,String)长度是否在给定的范围内 @Length(min=, max=)
验证字符串长度是否在给定的范围内`},{header:"日期检查",slug:"日期检查",content:`注解
作用 @Past
验证 Date 和 Calendar 对象是否在当前时间之前 @Future
验证 Date 和 Calendar 对象是否在当前时间之后 @Pattern
验证 String 对象是否符合正则表达式的规则`},{header:"数值检查",slug:"数值检查",content:`注解
作用 @Min
不小于 @Max
不大于 @DecimalMax
不大于 @DecimalMin
不小于 @Positive
值必须>0 @PositiveOrZero
值必须>=0 @Negative
值必须<0 @NegativeOrZero
值必须<= 0`},{header:"案例说明",slug:"案例说明",content:`package com.ths.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated; import javax.validation.constraints.Email;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map; @Data
@NoArgsConstructor
@AllArgsConstructor
@Component // 注册bean
@PropertySource(value = "classpath:yaml2.properties") // 加载指定的配置文件
@ConfigurationProperties(prefix = "person") // 读取配置文件
@Validated // 开启数据校验
public class Person { @Email(message = "不是email格式啊") // @Email：email格式校验 private String name; private int age; private Boolean happy; private Date birth; private String[] books; private List<Object> list; private Map<String, Object> map; private Dog dog;
}
开启校验后，如果不通过，编译时会报错，如下图：`}]},{path:"/admin/Java/SpringBoot/yaml/yaml.html",title:"",pathLocale:"/",contents:[{header:"yaml",slug:"yaml",content:`官方配置
yaml 比 properties 更加简洁，并且支持数据类型更多
yaml 文件可以注入到配置类中`},{header:"yaml 语法",slug:"yaml-语法",content:`key: value，冒号后面必须有空格
大小写敏感
使用缩进表示层级关系，k-v 对的缩进不允许使用 tab，只允许空格
缩进的空格数不重要，只要相同层级的元素左对齐即可
'#' 表示注释
字符串默认不使用引号，单引号和双引号都可以，单引号转义字符无效，双引号转义字符有效
yaml 支持的数据类型有：null、boolean、string、number、date、array、map
yaml 支持的数据结构有：scalar、sequence、mapping
yaml 文件可以注册到配置类中
yaml，支持松散绑定`},{header:"yaml 与 properties 的区别",slug:"yaml-与-properties-的区别",content:`yaml 可以写对象或者数组，properties 不行
yaml 写对象可以使用行内写法 student: name: zhangsan age: 18
# 等价于
student: { name: zhangsan, age: 18 } yaml 写数组 pets: - cat - dog
# 等价于
pets: [cat, dog] yaml 支持多行字符串，注意缩进 my: desc: > hello world
# 等价于
my: { desc: "hello\\nworld" }`}]},{path:"/admin/Java/SpringBoot/yaml/%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html",title:"",pathLocale:"/",contents:[{header:"多环境配置",slug:"多环境配置",content:"开发环境、测试环境、生产环境等"},{header:"配置文件的位置优先级",slug:"配置文件的位置优先级",content:`下边四个位置，配置文件的优先级由高到低，优先级高的会覆盖优先级低的 在项目根目录下的 config 文件夹下
在项目根目录下
在 src/main/resources/config 文件夹下
在 src/main/resources 文件夹下`},{header:"多环境配置",slug:"多环境配置-1",content:`下面只以 yaml 为例，也可以采用多个 properties 实现(application-dev.properties、application-test.properties、application-prod.properties)
然后在 application.properties 中，给 profiles.active 赋值，例如：spring.profiles.active=dev # 多环境配置
spring: profiles: active: dev
---
server: port: 8082
spring: profiles: dev
---
server: port: 8081
spring: profiles: test
---
server: port: 19200
spring: profiles: prod
在 8082 端口运行：`}]},{path:"/admin/Java/SpringBoot/yaml/%E7%BB%99%E5%B1%9E%E6%80%A7%E8%B5%8B%E5%80%BC.html",title:"",pathLocale:"/",contents:[{header:"给属性赋值",slug:"给属性赋值",content:`注解
作用 @ConfigurationProperties
自动读取 application.yam 中的多个属性；并给多个属性赋值 @Value
给单个属性赋值 @PropertySources + @Value
指定多个外部属性文件(.property) @PropertySource + @Value
指定一个外部属性文件(.property) @PropertySource + @ConfigurationProperties
自动读取指定的文件中的多个属性；并给多个属性赋值 @Environment
给单个属性赋值`},{header:"@ConfigurationProperties",slug:"configurationproperties",content:`@ConfigurationProperties(prefix = "属性名")
private String 属性名;`},{header:"@PropertySources + @Value",slug:"propertysources-value",content:`@PropertySources({ @PropertySource("classpath:属性文件名1"), @PropertySource("classpath:属性文件名2")
})
@Value("\${属性名}") // el表达式取出配置文件中属性值
private String 属性名;`},{header:"@PropertySource + @Value",slug:"propertysource-value",content:`@PropertySource("classpath:属性文件名")
@Value("\${属性名}") // el表达式取出配置文件中属性值
private String 属性名;`},{header:"@PropertySource + @ConfigurationProperties",slug:"propertysource-configurationproperties",content:`@PropertySource("classpath:属性文件名")
@ConfigurationProperties(prefix = "属性名")
private String 属性名;`},{header:"@Environment",slug:"environment",content:`@Environment
private String 属性名;`},{header:"具体案例",slug:"具体案例",content:`<!--给注解@ConfigurationProperties配置处理器-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-configuration-processor</artifactId> <optional>true</optional>
</dependency>
// 测试类
package com.ths; import com.ths.pojo.Person;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest; @SpringBootTest
class SpringBoot220ApplicationTests { @Autowired // 自动装配 private Person person; @Test void contextLoads() { System.out.println(person); // Person( // name=张三, // age=18, // happy=true, // birth=Mon Sep 09 00:00:00 CST 2019, // books=[钢铁是怎么练成的, List和数组很像], // list=[钢铁是怎么练成的, List和数组很像], // map={name=张三, age=18}, // dog=Dog(name=小花, age=3) // ) }
}
// Dog类
package com.ths.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @AllArgsConstructor
@Data
@NoArgsConstructor
public class Dog { private String firstName; // 松散绑定字段 private String name; private int age;
}
// Person类
package com.ths.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component; import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map; // @ConfigurationProperties(application.yaml) 方式
@AllArgsConstructor
@Data
@NoArgsConstructor
@Component // 注册bean
@ConfigurationProperties(prefix = "person") // 读取配置文件 prefix：指定属性
public class Person { private String name; private int age; private Boolean happy; private Date birth; private String[] books; private List<Object> list; private Map<String, Object> map; private Dog dog;
} // @PropertySources + @Value 方式
AllArgsConstructor
@Data
@NoArgsConstructor
@Component // 注册bean
@PropertySource(value = "classpath:yaml1.properties") // 加载指定的配置文件
public class Person { @Value("\${name}") private String name; @Value("\${age}") private int age; @Value("\${happy}") private Boolean happy; @Value("\${birth}") private Date birth; @Value("\${books}") private String[] books; @Value("\${list}") private List<Object> list; @Value("\${map}") private String mapStr; private Map<String, Object> map; @Value("\${dog}") private String dogStr; private Dog dog; public void init() { map = parseMap(mapStr); dog = parseDog(dogStr); } private Map<String, Object> parseMap(String str) { Map<String, Object> map = new HashMap<>(); String[] pairs = str.split(", "); for (String pair : pairs) { String[] keyValue = pair.split("="); if (keyValue.length == 2) { map.put(keyValue[0], keyValue[1]); } } return map; } private Dog parseDog(String str) { Dog dog = new Dog(); String[] pairs = str.split(", "); for (String pair : pairs) { String[] keyValue = pair.split("="); if (keyValue.length == 2) { switch (keyValue[0]) { case "name": dog.setName(keyValue[1]); break; case "age": dog.setAge(Integer.parseInt(keyValue[1])); break; } } } return dog; }
} // @PropertySource + @ConfigurationProperties 方式
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@PropertySource(value = "classpath:yaml2.properties") // 加载指定的配置文件
@ConfigurationProperties(prefix = "person") // 读取配置文件
public class Person { private String name; private int age; private Boolean happy; private Date birth; private String[] books; private List<Object> list; private Map<String, Object> map; private Dog dog;
}
# application.yaml
server: port: 8080
person: # # \${}: el表达式：占位符随机数 name: 张三\${random.int} age: 18 happy: true birth: 2019/09/09 hello: 你好 books: - 钢铁是怎么练成的 - List和数组很像 list: - 钢铁是怎么练成的 - List和数组很像 map: { name: 张三, age: 18 } dog: # \${...}: 这是Spring中的占位符，表示后面的内容将被解析为一个表达式。 # \${person.hello:hello}意思是person.hello ? person.hello : “hello” name: \${person.hello:hello}小花 # 松散绑定：在yaml中字段用 '-' 连接的，在实体类中这个字段可以换成驼峰式命名 fistName fist-name: 松散绑定 age: 3
#yaml1.properties
name = 小张
age = 0
happy = true
birth = 2019/03/01
books = 钢铁是怎么练成的, List和数组很像
list = 钢铁是怎么练成的, List和数组很像
map = name=张三, age=18
dog = name=小花, age=3
#yaml2.properties
person.name=小张
person.age=0
person.happy=true
person.birth=2019/03/01
person.books=钢铁是怎么练成的, List和数组很像
person.list=钢铁是怎么练成的, List和数组很像
person.map={"name":"张三","age":18}
person.dog={"name":"小花","age":3}`}]},{path:"/admin/Java/SpringBoot/yaml/%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"自动装配配置文件",slug:"自动装配配置文件",content:"明白自动装配过程中，配置文件是怎么提供的属性，那么自然就明白 yaml 中的属性都有哪些了(官方配置文档)"},{header:"如何知道哪些生效，哪些没生效",slug:"如何知道哪些生效-哪些没生效",content:`debug: true
Positive matches: 生效的
Negative matches: 没生效的
Exclusions: 排除的`},{header:"HttpEncodingAutoConfiguration + HttpProperties + yaml 举例",slug:"httpencodingautoconfiguration-httpproperties-yaml-举例",content:`spring: profiles: active: dev http: encoding: enabled: true
// 源码：HttpEncodingAutoConfiguration类
package org.springframework.boot.autoconfigure.web.servlet; import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.autoconfigure.http.HttpProperties;
import org.springframework.boot.autoconfigure.http.HttpProperties.Encoding.Type;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.filter.OrderedCharacterEncodingFilter;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.filter.CharacterEncodingFilter; /** * {@link EnableAutoConfiguration Auto-configuration} for configuring the encoding to use * in web applications. * * @author Stephane Nicoll * @author Brian Clozel * @since 2.0.0 */
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(HttpProperties.class)
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@ConditionalOnClass(CharacterEncodingFilter.class)
@ConditionalOnProperty(prefix = "spring.http.encoding", value = "enabled", matchIfMissing = true)
public class HttpEncodingAutoConfiguration { private final HttpProperties.Encoding properties; public HttpEncodingAutoConfiguration(HttpProperties properties) { this.properties = properties.getEncoding(); } @Bean @ConditionalOnMissingBean public CharacterEncodingFilter characterEncodingFilter() { CharacterEncodingFilter filter = new OrderedCharacterEncodingFilter(); filter.setEncoding(this.properties.getCharset().name()); filter.setForceRequestEncoding(this.properties.shouldForce(Type.REQUEST)); filter.setForceResponseEncoding(this.properties.shouldForce(Type.RESPONSE)); return filter; } @Bean public LocaleCharsetMappingsCustomizer localeCharsetMappingsCustomizer() { return new LocaleCharsetMappingsCustomizer(this.properties); } private static class LocaleCharsetMappingsCustomizer implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>, Ordered { private final HttpProperties.Encoding properties; LocaleCharsetMappingsCustomizer(HttpProperties.Encoding properties) { this.properties = properties; } @Override public void customize(ConfigurableServletWebServerFactory factory) { if (this.properties.getMapping() != null) { factory.setLocaleCharsetMappings(this.properties.getMapping()); } } @Override public int getOrder() { return 0; } }
}
// 源码：HttpProperties类
package org.springframework.boot.autoconfigure.http; import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Locale;
import java.util.Map; import org.springframework.boot.context.properties.ConfigurationProperties; /** * HTTP properties. * * @author Phillip Webb * @author Stephane Nicoll * @author Brian Clozel * @since 2.1.0 */
@ConfigurationProperties(prefix = "spring.http")
public class HttpProperties { /** * Whether logging of (potentially sensitive) request details at DEBUG and TRACE level * is allowed. */ private boolean logRequestDetails; /** * HTTP encoding properties. */ private final Encoding encoding = new Encoding(); public boolean isLogRequestDetails() { return this.logRequestDetails; } public void setLogRequestDetails(boolean logRequestDetails) { this.logRequestDetails = logRequestDetails; } public Encoding getEncoding() { return this.encoding; } /** * Configuration properties for http encoding. */ public static class Encoding { public static final Charset DEFAULT_CHARSET = StandardCharsets.UTF_8; /** * Charset of HTTP requests and responses. Added to the "Content-Type" header if * not set explicitly. */ private Charset charset = DEFAULT_CHARSET; /** * Whether to force the encoding to the configured charset on HTTP requests and * responses. */ private Boolean force; /** * Whether to force the encoding to the configured charset on HTTP requests. * Defaults to true when "force" has not been specified. */ private Boolean forceRequest; /** * Whether to force the encoding to the configured charset on HTTP responses. */ private Boolean forceResponse; /** * Locale in which to encode mapping. */ private Map<Locale, Charset> mapping; public Charset getCharset() { return this.charset; } public void setCharset(Charset charset) { this.charset = charset; } public boolean isForce() { return Boolean.TRUE.equals(this.force); } public void setForce(boolean force) { this.force = force; } public boolean isForceRequest() { return Boolean.TRUE.equals(this.forceRequest); } public void setForceRequest(boolean forceRequest) { this.forceRequest = forceRequest; } public boolean isForceResponse() { return Boolean.TRUE.equals(this.forceResponse); } public void setForceResponse(boolean forceResponse) { this.forceResponse = forceResponse; } public Map<Locale, Charset> getMapping() { return this.mapping; } public void setMapping(Map<Locale, Charset> mapping) { this.mapping = mapping; } public boolean shouldForce(Type type) { Boolean force = (type != Type.REQUEST) ? this.forceResponse : this.forceRequest; if (force == null) { force = this.force; } if (force == null) { force = (type == Type.REQUEST); } return force; } public enum Type { REQUEST, RESPONSE } }
}`}]},{path:"/admin/Java/SpringBoot/%E4%BB%BB%E5%8A%A1/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1.html",title:"",pathLocale:"/",contents:[{header:"定时任务",slug:"定时任务",content:""},{header:"1. 使用注解",slug:"_1-使用注解",content:`// 在启动类上添加@EnableScheduling注解
@SpringBootApplication
@EnableScheduling
public class SpringbootApplication { public static void main(String[] args) { SpringApplication.run(SpringbootApplication.class, args); }
}
// 在需要定时执行的方法上添加@Scheduled注解
package com.ths.service; import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service; @Service
public class ScheduledService { // 在一个特定的时间执行某任务 // cron表达式： 秒 分 时 日 月 周 @Scheduled(cron = "0 42 22 * * ?") // cron表达式自行百度 public void timing() { System.out.println("在cron设定的时间执行这个任务"); }
}`}]},{path:"/admin/Java/SpringBoot/%E4%BB%BB%E5%8A%A1/%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1.html",title:"",pathLocale:"/",contents:[{header:"异步任务",slug:"异步任务",content:`异步任务，解决了多线程的阻塞问题，只需要在方法上加上一个注解(@Async)即可，不需要手动创建线程池，同时需要在启动类上开启(@EnableAsync)注解功能 // Service
package com.ths.service; import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service; @Service
public class AsyncService { @Async // 告诉Spring，这是一个异步方法 public void task() { try { Thread.sleep(3000); } catch (InterruptedException e) { e.printStackTrace(); } System.out.println("数据正在处理"); }
} // Controller
package com.ths.controller; import com.ths.service.AsyncService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; @RestController
public class AsyncController { @Autowired AsyncService asyncService; @RequestMapping("task") public String task() { asyncService.task(); // 停止3秒，转圈圈 return "ok"; }
} // 启动类
package com.ths; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync; @SpringBootApplication
@EnableAsync // 开启异步注解功能
public class SpringBoot2TaskApplication { public static void main(String[] args) { SpringApplication.run(SpringBoot2TaskApplication.class, args); } }`}]},{path:"/admin/Java/SpringBoot/%E4%BB%BB%E5%8A%A1/%E9%82%AE%E4%BB%B6%E4%BB%BB%E5%8A%A1.html",title:"",pathLocale:"/",contents:[{header:"邮件任务",slug:"邮件任务",content:""},{header:"1.引入依赖",slug:"_1-引入依赖",content:`<!--邮件，导入的就是javax.mail-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-mail</artifactId>
</dependency>`},{header:"2.配置文件",slug:"_2-配置文件",content:`spring.application.name=spring-boot-2-task
spring.mail.username=2775376881@qq.com
spring.mail.password=xxxxxxxxxxxxxxxxxx
# 主机都是smtp开头
# smtp.qq.com：qq邮箱
# smtp.163.com：网易邮箱
# smtp.sina.com.cn：新浪邮箱
spring.mail.host=smtp.qq.com
# qq邮箱需要开启加密验证(其他邮箱不需要)
spring.mail.properties.mail.smtp.ssl.enable=true`},{header:"3.测试类",slug:"_3-测试类",content:`package com.ths; import com.ths.utils.EmailUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper; import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File; @SpringBootTest
class SpringBoot2TaskApplicationTests { @Autowired JavaMailSenderImpl mailSender; // 邮件发送对象 @Autowired EmailUtil emailUtil; // 注入 EmailUtil 实例 // 简单邮件 @Test void contextLoads1() { // 创建邮件对象 SimpleMailMessage message = new SimpleMailMessage(); // 设置邮件主题 message.setSubject("放假通知"); // 设置邮件发送者，需要和配置文件中的邮箱一致 message.setFrom("2775376881@qq.com"); // 设置邮件内容 message.setText("放假通知，放假7天，调休3天"); // 设置邮件接收者，可以有多个接收者，中间用逗号隔开，以下类似 message.setTo("2775376881@qq.com"); // 设置邮件抄送人，可以有多个抄送人 message.setCc("2775376881@qq.com"); mailSender.send(message); } // 复杂邮件 @Test void contextLoads2() throws MessagingException { // 创建复杂邮件对象 MimeMessage message = mailSender.createMimeMessage(); // 组装信息 MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8"); // 设置邮件主题 helper.setSubject("放假通知"); // 设置邮件发送者，需要和配置文件中的邮箱一致 helper.setFrom("2775376881@qq.com"); // 设置邮件内容 helper.setText("<p style='color: red;'>放假通知，放假7天，调休3天</p>", true); // 设置邮件接收者，可以有多个接收者，中间用逗号隔开，以下类似 helper.setTo("2775376881@qq.com"); // 设置邮件抄送人，可以有多个抄送人 helper.setCc("2775376881@qq.com"); // 设置邮件附件(文件不能为空) helper.addAttachment("1.jpg", new File("E:\\\\背景\\\\1.jpg")); // 发送 mailSender.send(message); } // 测试封装的复杂邮件发送工具类 // 简单邮件 @Test void contextLoads3() { String subject = "放假通知"; String from = "2775376881@qq.com"; String to = "2775376881@qq.com"; String content = "放假通知，放假7天，调休3天"; emailUtil.sendSimpleEmail(subject, from, to, content, true); } // 复杂邮件 @Test void contextLoads4() throws MessagingException { String subject = "放假通知"; String from = "2775376881@qq.com"; String to = "2775376881@qq.com"; String cc = "2775376881@qq.com"; String content = "<p style='color: red;'>放假通知，放假7天，调休3天</p>"; String[] attachmentPaths = {"E:\\\\背景\\\\1.jpg", "E:\\\\背景\\\\2.jpg"}; emailUtil.sendComplexEmail(subject, from, to, cc, content, true, attachmentPaths); }
}`},{header:"4.封装工具类",slug:"_4-封装工具类",content:`package com.ths.utils; import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component; import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.Arrays;
import java.util.List; @Component
public class EmailUtil { // 邮件发送对象 private final JavaMailSender mailSender; // 有参构造 public EmailUtil(JavaMailSender mailSender) { this.mailSender = mailSender; } /** * 发送简单邮件 * * @param subject 邮件主题 * @param from 发送者邮箱地址 * @param to 接收者邮箱地址（可以是单个或多个，用逗号分隔） * @param content 邮件内容 * @param isHtml 是否为HTML格式 */ public void sendSimpleEmail(String subject, String from, String to, String content, boolean isHtml) { // 创建邮件对象 MimeMessage message = mailSender.createMimeMessage(); // 组装信息 MimeMessageHelper helper = null; try { helper = new MimeMessageHelper(message, "UTF-8"); // 设置邮件主题 helper.setSubject(subject); // 设置发送者 helper.setFrom(from); // 设置接收者 List<String> toList = Arrays.asList(to.split(",")); helper.setTo(toList.toArray(new String[0])); // 设置邮件内容 helper.setText(content, isHtml); } catch (MessagingException e) { throw new RuntimeException("创建邮件消息失败", e); } try { mailSender.send(message); } catch (Exception e) { throw new RuntimeException("发送邮件失败", e); } } /** * 发送复杂邮件 * * @param subject 邮件主题 * @param from 发送者邮箱地址 * @param to 接收者邮箱地址（可以是单个或多个，用逗号分隔） * @param cc 抄送者邮箱地址（可以是单个或多个，用逗号分隔） * @param content 邮件内容 * @param isHtml 是否为HTML格式 * @param attachmentPaths 附件路径列表（可以为空） */ public void sendComplexEmail(String subject, String from, String to, String cc, String content, boolean isHtml, String... attachmentPaths) { // 创建邮件对象 MimeMessage message = mailSender.createMimeMessage(); // 组装信息 MimeMessageHelper helper = null; try { helper = new MimeMessageHelper(message, true, "UTF-8"); // 设置邮件主题 helper.setSubject(subject); // 设置发送者 helper.setFrom(from); // 设置接收者 List<String> toList = Arrays.asList(to.split(",")); helper.setTo(toList.toArray(new String[0])); // 设置抄送者 if (cc != null && !cc.isEmpty()) { List<String> ccList = Arrays.asList(cc.split(",")); helper.setCc(ccList.toArray(new String[0])); } // 设置邮件内容 helper.setText(content, isHtml); // 添加附件 for (String path : attachmentPaths) { if (path != null && !path.isEmpty()) { FileSystemResource file = new FileSystemResource(new File(path)); helper.addAttachment(file.getFilename(), file); } } } catch (MessagingException e) { throw new RuntimeException("创建邮件消息失败", e); } try { mailSender.send(message); } catch (Exception e) { throw new RuntimeException("发送邮件失败", e); } }
}`}]},{path:"/admin/Java/SpringBoot/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F.html",title:"",pathLocale:"/",contents:[{header:"分布式",slug:"分布式",content:""},{header:"分布式系统",slug:"分布式系统",content:"分布式系统是若干独立计算机的集合，这些计算机对于用户来说就像单个相关系统。(举例：拼多多下单，下单有很多个服务，但是用户感觉就是一个服务，这些服务就是分布式)"},{header:"负载均衡",slug:"负载均衡",content:"假设 A 服务占用 98%资源，B 服务只占用了 10%资源，负载均衡就是将负载高的服务分配给负载低的服务，从而保证系统的稳定运行"},{header:"服务降级",slug:"服务降级",content:"当服务出现问题，或者服务压力过大时，为了保证核心服务的正常运行，需要将非核心服务或者低优先级的服务暂时关闭或者延迟处理，待系统负载降低后，再重新开启或者恢复"},{header:"服务熔断",slug:"服务熔断",content:"服务熔断就是当服务出现问题时，立即关闭服务，防止服务雪崩"},{header:"服务限流",slug:"服务限流",content:"服务限流就是限制请求的速率，防止服务压力过大，导致服务崩溃"},{header:"RPC",slug:"rpc",content:`远程过程调用，是一种进程间通信方式，比如本地调用远程的方法，就像调用本地方法一样。(举例：我要洗衣服，但是我出门了，我给家人打电话，让家人帮我洗衣服)
RPC 的核心：通讯和序列化(通讯：网络传输，序列化：将对象转换成字节流，字节流转换成对象；网线传输的都是 2 进制的 01)`},{header:"Dubbo",slug:"dubbo",content:"RPC 服务框架"},{header:"Dubbo-admin",slug:"dubbo-admin",content:"查看服务的监控管理后台，当然了这个后台系统有没有都无所谓，只是方便我们查看服务而已"},{header:"Dubbo-admin 安装和启动",slug:"dubbo-admin-安装和启动",content:`[下载](gitee 地址) Dubbo-admin 并解压
启动 Zookeeper
进入到 dubbo-admin 目录下的 conf 目录，修改 application.properties 文件，配置注册中心地址(zookeeper 的地址)，当然都是默认也行
进入到 dubbo-admin 目录下的 target 目录，双击 dubbo-admin-0.0.1-SNAPSHOT.jar 文件，启动 Dubbo-admin
打开浏览器，输入 http://127.0.0.1:7001 ，即可访问 Dubbo-admin`},{header:"Zookeeper",slug:"zookeeper",content:"注册中心！！！分布式协调服务，用于分布式系统中的协调服务，比如：分布式锁、分布式配置中心、分布式命名服务、分布式队列等"},{header:"Zookeeper 安装和启动",slug:"zookeeper-安装和启动",content:`下载 Zookeeper 并解压
进入到 zookeeper 目录下的 conf 目录，复制 zoo_sample.cfg 并重命名为 zoo.cfg
配置 zoo.cfg(随意，一般配置 dataDir 和 clientPort，默认端口是 2181)
进入到 zookeeper 目录下的 bin 目录，双击 zkServer.cmd 文件，启动 Zookeeper`},{header:"Dubbo + Zookeeper 案例",slug:"dubbo-zookeeper-案例",content:"案例"},{header:"分布式架构的四大核心问题",slug:"分布式架构的四大核心问题",content:`这么多服务，客户端如何调用？
这么多服务，如何进行通信？
这么多服务，如何进行管理？
服务挂了，如何保证高可用？`},{header:"解决分布式架构的四大核心问题",slug:"解决分布式架构的四大核心问题",content:"Spring Cloud"}]},{path:"/admin/Java/SpringBoot/%E5%88%86%E5%B8%83%E5%BC%8F/%E6%A1%88%E4%BE%8B.html",title:"",pathLocale:"/",contents:[{header:"Dubbo+Zookeeper 案例",slug:"dubbo-zookeeper-案例",content:""},{header:"依赖",slug:"依赖",content:`<!--dubbo-->
<dependency> <groupId>org.apache.dubbo</groupId> <artifactId>dubbo-spring-boot-starter</artifactId> <version>2.7.3</version>
</dependency>
<!--zookeeper客户端-->
<dependency> <groupId>com.github.sgroschupf</groupId> <artifactId>zkclient</artifactId> <version>0.1</version>
</dependency>
<!--zookeeper服务端的两个依赖-->
<dependency> <groupId>org.apache.curator</groupId> <artifactId>curator-framework</artifactId> <version>2.12.0</version>
</dependency>
<dependency> <groupId>org.apache.curator</groupId> <artifactId>curator-recipes</artifactId> <version>2.12.0</version>
</dependency>
<!--zookeeper服务端-->
<dependency> <groupId>org.apache.zookeeper</groupId> <artifactId>zookeeper</artifactId> <version>3.4.14</version> <!--zookeeper和log4j冲突，需要排除log4j--> <exclusions> <exclusion> <groupId>org.slf4j</groupId> <artifactId>slf4j-log4j12</artifactId> </exclusion> </exclusions>
</dependency>`},{header:"生产者",slug:"生产者",content:`// 接口
package com.ths.service; public interface TickerService { public String getTick();
} // 实现类
package com.ths.service; import org.apache.dubbo.config.annotation.Service;
import org.springframework.stereotype.Component; @Service // 使用Dubbo的@Service注解，加上这个注解就会被扫描到，添加到注册中心
@Component // 使用了Dubbo后尽量不要使用@Service，因为Dubbo和Spring都有@Service
public class TicketServiceImpl implements TickerService{ @Override public String getTick() { return "《我是提供数据的服务》"; }
}
spring.application.name=provider-service
server.port=8001
# 提供者配置
# 服务应用的名字
dubbo.application.name=provider-service
# 注册中心地址
dubbo.registry.address=zookeeper://127.0.0.1:2181
# 哪些服务要被注册
dubbo.scan.base-packages=com.ths.service`},{header:"消费者",slug:"消费者",content:`// 接口(复制生产者的)
package com.ths.service; public interface TickerService { public String getTick();
} // 实现类
package com.ths.service; import org.apache.dubbo.config.annotation.Reference;
import org.springframework.stereotype.Service; @Service // 这个不是Dubbo的，是给Spring的拿来用，所以是Spring的
public class StudentService { // 我想拿到provider-service提供的数据,需要去注册中心查找服务 @Reference // 引用服务 TickerService tickerService; // TickerService：远程服务接口 public void buyTick() { String tick = tickerService.getTick(); System.out.println("学生购买了：" + tick); }
} // 测试类
package com.ths; import com.ths.service.StudentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest; @SpringBootTest
class ConsumerServiceApplicationTests { @Autowired StudentService studentService; @Test void contextLoads() { studentService.buyTick(); }
}
spring.application.name=provider-service
server.port=8001
# 提供者配置
# 服务应用的名字
dubbo.application.name=provider-service
# 注册中心地址
dubbo.registry.address=zookeeper://127.0.0.1:2181
# 哪些服务要被注册
dubbo.scan.base-packages=com.ths.service`}]},{path:"/admin/Java/SpringBoot/%E5%AE%89%E5%85%A8/Shiro.html",title:"",pathLocale:"/",contents:[{header:"Shiro",slug:"shiro",content:""},{header:"功能",slug:"功能",content:`功能
描述 认证
用户登录 授权
用户具有哪些权限 会话管理
用户登录后的会话管理 加密
对密码进行加密 Web 支持
可以非常容易的集成到 web 项目中 缓存
缓存用户信息，减少查询数据库的次数 记住我
记住用户登录状态，下次自动登录`},{header:"核心组件",slug:"核心组件",content:`组件
描述 Subject
用户 SecurityManager
管理所有用户 Realms
连接数据源，通过 Realm 获取安全数据（如用户、角色、权限）`},{header:"导入依赖",slug:"导入依赖",content:`<!--shiro-->
<dependency> <groupId>org.apache.shiro</groupId> <artifactId>shiro-spring</artifactId> <version>1.4.1</version>
</dependency>
<!--thymeleaf依赖-->
<dependency> <groupId>org.thymeleaf</groupId> <artifactId>thymeleaf-spring5</artifactId> <version>3.0.11.RELEASE</version>
</dependency>
<dependency> <groupId>org.thymeleaf.extras</groupId> <artifactId>thymeleaf-extras-java8time</artifactId> <version>3.0.4.RELEASE</version>
</dependency>`},{header:"Shiro 和 Thymeleaf 整合的话还需要导入依赖",slug:"shiro-和-thymeleaf-整合的话还需要导入依赖",content:`<dependency> <groupId>com.github.theborakompanioni</groupId> <artifactId>thymeleaf-extras-shiro</artifactId> <version>2.0.0</version>
</dependency>`},{header:"同时页面需要命名空间",slug:"同时页面需要命名空间",content:`<html xmlns:th="http://www.thymeleaf.org" xmlns:shiro="http://www.thymeleaf.org/thymeleaf-extras-shiro"
></html>`},{header:"配置 Shiro",slug:"配置-shiro",content:`// ShiroConfig
package com.ths.config; import at.pollux.thymeleaf.shiro.dialect.ShiroDialect;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration; import java.util.HashMap;
import java.util.Map; @Configuration
public class ShiroConfig { // Subject: 当前用户 ShiroFilterFactoryBean(3后写) // SecurityManager: 权限管理 DefaultWebSecurityManager(2再写) // Realm: 数据源 AuthenticatingRealm，需要自定义（1先写） @Bean public ShiroFilterFactoryBean getShiroFilterFactoryBean( @Qualifier("securityManager") DefaultWebSecurityManager defaultWebSecurityManager ){ ShiroFilterFactoryBean bean = new ShiroFilterFactoryBean(); // 设置安全管理器 bean.setSecurityManager(defaultWebSecurityManager); /* // 拦截(添加shiro的过滤器) anno：放行所有 authc: 必须认证才可以访问 user: 使用记住我或认证通过可以访问 perms: 拥有对某个资源的权限才能访问 role: 拥有某个角色权限才能访问 filterMap.put("/user/add", "authc"); filterMap.put("/user/update", "authc"); */ Map<String, String> filterMap = new HashMap<>(); // 授权 filterMap.put("/user/add", "perms[user:add]"); filterMap.put("/user/update", "perms[user:update]"); // 只有认证了才能访问user下边面的页面 filterMap.put("/user/*", "authc"); bean.setFilterChainDefinitionMap(filterMap); // 未登录界面 bean.setLoginUrl("/toLogin"); // 未授权界面 bean.setUnauthorizedUrl("/noAuth"); return bean; } @Bean(name="securityManager") public DefaultWebSecurityManager getDefaultWebSecurityManager( @Qualifier("userRealm") UserRealm userRealm ){ DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager(); // 关联Realm securityManager.setRealm(userRealm); return securityManager; } @Bean public UserRealm userRealm() { // 这里就和UserRealm联动了，进行数据认证 return new UserRealm(); } // 整合Thymeleaf需要配置 @Bean public ShiroDialect getShiroDialect(){ return new ShiroDialect(); }
}
// UserRealm
package com.ths.config; import com.ths.pojo.User;
import com.ths.service.UserServiceImpl;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired; // 自定义的Realm
public class UserRealm extends AuthorizingRealm { // 获取数据库中的用户信息 @Autowired UserServiceImpl userService; // 授权 @Override protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) { System.out.println("执行了授权"); // 给用户授权以及角色 SimpleAuthorizationInfo info = new SimpleAuthorizationInfo(); // 获取当前登陆的用户 Subject subject = SecurityUtils.getSubject(); User currentUser = (User) subject.getPrincipal(); // 当前用户授权 info.addStringPermission(currentUser.getPerms()); // 当前用户角色 info.addRole(currentUser.getRole()); return info; } // 认证 @Override protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException { System.out.println("执行了认证"); // 获取token UsernamePasswordToken UserToken = (UsernamePasswordToken) token; // 模拟数据 // String username = "admin"; // String password = "123456"; // if(!UserToken.getUsername().equals(username)){ // return null; // 自动抛出UnknownAccountException异常 // } // return new SimpleAuthenticationInfo("", password, ""); // 认证用户名和密码(数据库中获取) User user = userService.queryUserByName(UserToken.getUsername()); if (user==null){ return null; // 自动抛出UnknownAccountException异常 } // 密码认证(默认是简单认证) // return new SimpleAuthenticationInfo("", user.getPassword(), "");、 // MD5加密(md5不可逆) // String encryptedPassword = DigestUtils.md5Hex(user.getPassword()); // MD5加密密码认证 // return new SimpleAuthenticationInfo("", encryptedPassword, ""); // 存入Shiro缓存 Subject currentUser = SecurityUtils.getSubject(); Session session = currentUser.getSession(); session.setAttribute("currentUser", user); // MD5盐值加密(md5虽然不可逆，但他是固定的，123就是ac590...，加上盐值就不好破解了) // 获取盐值 String salt = user.getSalt(); // MD5盐值加密密码 String encryptedPassword = DigestUtils.md5Hex(user.getPassword() + salt); // MD5盐值加密密码认证 // 参数说明： // 1. principal:用户身份信息 // 2. 密码 // 3. realmName:当前realm的名称 return new SimpleAuthenticationInfo(user, encryptedPassword, "userRealm"); }
}
// LoginController
package com.ths.controller; import com.ths.pojo.User;
import com.ths.service.UserServiceImpl;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping; @Controller
public class LoginController { @Autowired UserServiceImpl userService; // 登录 @RequestMapping("/login") public String login(String username, String password, Model model) { // 检查用户名和密码是否为空 if (username == null||username.isEmpty()||password == null||password.isEmpty()) { model.addAttribute("msg", "用户名或密码不能为空"); return "login"; } // 获取当前用户 Subject subject = SecurityUtils.getSubject(); // 封装用户的登录数据(密码没有处理) // UsernamePasswordToken token = new UsernamePasswordToken(username, password); // 封装用户的登录数据(MD5加密密码) // UsernamePasswordToken token = // new UsernamePasswordToken(username, DigestUtils.md5Hex(password)); // 封装用户的登录数据(MD5密码盐值加密) // 获取盐值（假设从服务端获取） String salt = getSalt(username); // MD5盐值加密密码 String encryptedPassword = DigestUtils.md5Hex(password + salt); UsernamePasswordToken token = new UsernamePasswordToken(username, encryptedPassword); try { subject.login(token); // 执行登录方法 return "index"; }catch (UnknownAccountException e){ model.addAttribute("msg", "用户名不存在"); return "login"; } catch (IncorrectCredentialsException e){ model.addAttribute("msg", "密码错误"); return "login"; } catch (LockedAccountException e){ model.addAttribute("msg", "用户被锁了"); return "login"; } } // 获取盐值 private String getSalt(String username) { String salt = userService.getSaltByUsername(username); return salt; } // 注销 @RequestMapping("/logout") public String logout() { Subject subject = SecurityUtils.getSubject(); subject.logout(); return "login"; }
}
// RouteController
package com.ths.controller; import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody; @Controller
public class RouteController { @RequestMapping({"/", "/index"}) public String index(Model model){ model.addAttribute("msg", "Hello Shiro"); return "index"; } @RequestMapping("/toLogin") public String toLogin(){ return "login"; } @RequestMapping("/user/add") public String add(){ return "user/add"; } @RequestMapping("/user/update") public String update(){ return "user/update"; } @RequestMapping("/noAuth") @ResponseBody public String unauthorized(){ return "您无权访问!"; }
}
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org" xmlns:shiro="http://www.w3.org/1999/xhtml"
> <head> <meta charset="UTF-8" /> <title>index</title> </head> <body> <h1>index</h1> <h2 th:text="\${msg}"></h2> <div shiro:hasPermission="user:add"> <a th:href="@{/user/add}">添加</a> </div> <div shiro:hasPermission="user:update"> <a th:href="@{/user/update}">更新</a> </div> <!-- th:if="\${!session.currentUser}" --> <div th:if="!session.currentUser"> <a th:href="@{/toLogin}">登录</a> </div> <div th:if="session.currentUser"> <a th:href="@{/logout}">注销</a> </div> </body>
</html>`}]},{path:"/admin/Java/SpringBoot/%E5%AE%89%E5%85%A8/SpringSecurity.html",title:"",pathLocale:"/",contents:[{header:"SpringSecurity",slug:"springsecurity",content:"SpringSecurity(spring-security5.2.0 官方文档) 和 Shiro 都是框架，除了类和名字不一样，他俩很像，功能也差不多，Security 是 Spring 家族的，功能比 Shiro 强大，而且配置也简单。之前我们使用过滤器、拦截器，这些需要大量的原生代码。 Spring Security 的主要功能包括："},{header:"主要功能",slug:"主要功能",content:`功能
功能
功能 功能权限
用户认证
记住我 访问权限
用户授权
会话管理(超时、并发会话) 菜单权限
安全防护(SQL 注入、XSS、CSRF)
退出登录`},{header:"认证和授权",slug:"认证和授权",content:`SpringSecurity，基于 Aop 横切，所以安装依赖后，会自动拦截所有请求，进行认证和授权。 <!--spring-security-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-security</artifactId>
</dependency>
// 进行认证和授权
package com.ths.config; import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; @EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter { // Aop横切 // 链式编程 // 授权 @Override protected void configure(HttpSecurity http) throws Exception { // 关闭csrf(默认开启的，目的是防止被攻击，这块关闭是要让post和get请求都能走通) http.csrf().disable(); // 注释掉重写自定义 http.authorizeRequests() // 登录页，所有人可以访问 .antMatchers("/login.html").permitAll() // 首页必须登录后才能访问 .antMatchers("/").authenticated() // 其他页面的访问权限 .antMatchers("/emp/**").hasRole("vip1") .antMatchers("/widget","/widget.html").hasRole("vip1") .antMatchers("/button","/button.html").hasRole("vip2") .antMatchers("/element","/element.html").hasRole("vip2") .antMatchers("/typography", "/typography.html").hasRole("vip2") .antMatchers("/chart","/chart.html").hasRole("vip3") .antMatchers("/form", "/form.html").hasRole("vip3") .antMatchers("/table", "/table.html").hasRole("vip3"); // 没有权限跳转到登录页(http://localhost:8080/login跳转到该页面) // loginPage("/xxx"): 自定义登录页 // usernameParameter("username"): 自定义用户名参数 // passwordParameter("password"): 自定义密码参数 // defaultSuccessUrl("/home"): 登录成功跳转的页面 // loginProcessingUrl("/xxx"): 自定义登录处理url http.formLogin() .loginPage("/login") .usernameParameter("username") .passwordParameter("password") .loginProcessingUrl("/login") .defaultSuccessUrl("/home"); // 注销(http://localhost:8080/logout跳转到该页面) http.logout().logoutSuccessUrl("/login"); // 开启记住我功能(默认开启了cookie，且默认保存两周) http.rememberMe().rememberMeParameter("remember"); } // 认证(获取用户或者权限) // new BCryptPasswordEncoder(): 密码加密的一种方式,密码太简单会报错 @Override public void configure(AuthenticationManagerBuilder auth) throws Exception { // 内存中配置用户(正常需要数据库中获取并配置用户) auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder()) .withUser("admin").password(new BCryptPasswordEncoder().encode("123456")).roles("vip1","vip2", "vip3") .and() .withUser("root").password(new BCryptPasswordEncoder().encode("123456")).roles("vip2") .and() .withUser("guest").password(new BCryptPasswordEncoder().encode("123456")).roles("vip3"); }
}`},{header:"如果整合 SpringSecurity 和 Thymeleaf，还需要引入依赖",slug:"如果整合-springsecurity-和-thymeleaf-还需要引入依赖",content:`<!--SpringSecurity和Thymeleaf整合包-->
<dependency> <groupId>org.thymeleaf.extras</groupId> <!--页面上导入命名空间不报错：xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"--> <artifactId>thymeleaf-extras-springsecurity5</artifactId> <version>3.0.4.RELEASE</version>
</dependency>
<!-- 菜单页面 -->
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org" xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"
> <head> <meta charset="UTF-8" /> <title>Title</title> </head> <body> <div> <!--侧边栏--> <div class="sidebar pe-4 pb-3" th:fragment="sidebar"> <nav class="navbar bg-light navbar-light"> <a href="home.html" class="navbar-brand mx-4 mb-3"> <h3 class="text-primary"> <i class="fa fa-hashtag me-2"></i>Admin System </h3> </a> <!--thymeleaf与SpringSecurity整合，通过权限判断菜单是否展示--> <!--没生效，因为要求SpringBoot最高版本是2.1.0以下的，降级就生效了，但是代码没错--> <!--sec:authorise="isAuthenticated()"：判断是否登录--> <!--sec:authentication="name"：用户名--> <!--sec:authentication="principal.authorities"：角色--> <!--sec:authorise="hasRole('vip1')"：如果角色是vip1--> <div class="d-flex align-items-center ms-4 mb-4"> <div class="position-relative"> <img class="rounded-circle" th:src="@{/picture/user.jpg}" alt="" style="width: 40px; height: 40px;" /> <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" ></div> </div> <div class="ms-3" sec:authorize="isAuthenticated()"> <h6 class="mb-0" sec:authentication="name"></h6> <span sec:authentication="principal.authorities" id="data-roles" ></span> </div> </div> <div class="navbar-nav w-100"> <!--接收组件传递的参数--> <a href="home.html" th:class="\${activePage == 'home.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}" ><i class="fa fa-home me-2"></i>Home</a > <a sec:authorise="hasRole('vip1')" th:href="@{/employeeList}" th:class="\${activePage == 'list.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}" ><i class="fa fa-tachometer-alt me-2"></i>List</a > <div class="nav-item dropdown"> <a href="#" data-bs-toggle="dropdown" th:class=" \${(activePage == 'button.html' || activePage == 'typography.html' || activePage == 'element.html') ? 'nav-link dropdown-toggle active show' : 'nav-link dropdown-toggle'}" > <i class="fa fa-laptop me-2"></i>Elements </a> <div sec:authorise="hasRole('vip1','vip2')" th:class=" \${(activePage == 'button.html' || activePage == 'typography.html' || activePage == 'element.html') ? 'dropdown-menu bg-transparent border-0 show' : 'dropdown-menu bg-transparent border-0'}" > <a href="button.html" th:class="\${activePage == 'button.html' ? 'dropdown-item active' : 'dropdown-item'}" >Buttons</a > <a href="typography.html" th:class="\${activePage == 'typography.html' ? 'dropdown-item active' : 'dropdown-item'}" >Typography</a > <a href="element.html" th:class="\${activePage == 'element.html' ? 'dropdown-item active' : 'dropdown-item'}" >Other Elements</a > </div> </div> <a sec:authorise="hasRole('vip1')" href="widget.html" th:class="\${activePage == 'widget.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}" ><i class="fa fa-th me-2"></i>Widgets</a > <a sec:authorise="hasRole('vip1', 'vip3')" href="form.html" th:class="\${activePage == 'form.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}" ><i class="fa fa-keyboard me-2"></i>Forms</a > <a sec:authorise="hasRole('vip1', 'vip3')" href="table.html" th:class="\${activePage == 'table.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}" ><i class="fa fa-table me-2"></i>Tables</a > <a sec:authorise="hasRole('vip1', 'vip3')" href="chart.html" th:class="\${activePage == 'chart.html' ? 'nav-item nav-link active' : 'nav-item nav-link'}" ><i class="fa fa-chart-bar me-2"></i>Charts</a > </div> </nav> </div> <!--顶部导航栏--> <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0" th:fragment="navbar" > <a href="index1.html" class="navbar-brand d-flex d-lg-none me-4"> <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2> </a> <a href="#" class="sidebar-toggler flex-shrink-0"> <i class="fa fa-bars"></i> </a> <form class="d-none d-md-flex ms-4"> <input class="form-control border-0" type="search" placeholder="Search" /> </form> <div class="navbar-nav align-items-center ms-auto"> <div class="nav-item dropdown"> <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" > <img class="rounded-circle me-lg-2" th:src="@{/picture/user.jpg}" alt="" style="width: 40px; height: 40px;" /> <span class="d-none d-lg-inline-flex" sec:authentication="name" ></span> </a> <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0" > <a th:href="@{/logout}" class="dropdown-item">Log Out</a> </div> </div> </div> </nav> </div> </body>
</html>
// 菜单
package com.ths.controller; import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping; @Controller
public class RouteController { @RequestMapping({"", "/index"}) private String signIn() { return "index"; } @RequestMapping("/login") private String login() { return "login"; } @RequestMapping("/home") public String home() { return "home"; } @RequestMapping("/button") private String button() { return "button"; } @RequestMapping("/chart") private String chart() { return "chart"; } @RequestMapping("/element") private String element() { return "element"; } @RequestMapping("/form") private String form() { return "form"; } @RequestMapping("/table") private String table() { return "table"; } @RequestMapping("/typography") private String typography() { return "typography"; } @RequestMapping("/widget") private String widget() { return "widget"; }
}
// config
package com.ths.config; import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer; // 自定义Mvc扩展
@Configuration // 配置类，目的是让SpringBoot进行扫描 MyMvcConfig 这个类
public class MyMvcConfig implements WebMvcConfigurer { // 自定义视图跳转 @Override public void addViewControllers(ViewControllerRegistry registry) { // 添加视图跳转 registry.addViewController("/").setViewName("index"); registry.addViewController("/login.html").setViewName("login"); registry.addViewController("/home.html").setViewName("home"); registry.addViewController("/button.html").setViewName("button"); registry.addViewController("/chart.html").setViewName("chart"); registry.addViewController("/form.html").setViewName("form"); registry.addViewController("/element.html").setViewName("element"); registry.addViewController("/table.html").setViewName("table"); registry.addViewController("/widget.html").setViewName("widget"); registry.addViewController("/typography.html").setViewName("typography"); registry.addViewController("/list.html").setViewName("emp/list"); } // 自定义一个国际化解析器 @Bean public LocaleResolver localeResolver(){ return new MyLocaleResolver(); }
}
// 国际化
package com.ths.config; import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.thymeleaf.util.StringUtils; import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Locale; // 自定义一个LocaleResolver(国际化解析器)
public class MyLocaleResolver implements LocaleResolver { // 解析请求 @Override public Locale resolveLocale(HttpServletRequest request) { // 获取请求中携带的参数 String language = request.getParameter("l"); Locale locale = Locale.getDefault(); // 如果没有就是用默认的语言 // 如果携带了参数，就解析参数 if (!StringUtils.isEmpty(language)){ String[] split = language.split("_"); // zh_CN || en_US // 国家和地区 locale = new Locale(split[0], split[1]); } return locale; } @Override public void setLocale(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Locale locale) { }
}`}]},{path:"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/Druid.html",title:"",pathLocale:"/",contents:[{header:"Druid",slug:"druid",content:"Druid 是阿里巴巴开源的一款数据库连接池，它提供了丰富的功能和性能优化，包括 SQL 监控、连接池管理、SQL 防火墙、慢查询分析等。"},{header:"Druid 使用步骤",slug:"druid-使用步骤",content:`添加 Druid 依赖
配置 Druid 数据源
配置 Druid 监控`},{header:"Druid 依赖",slug:"druid-依赖",content:`<!--druid-->
<dependency> <groupId>com.alibaba</groupId> <artifactId>druid</artifactId> <version>1.2.6</version>
</dependency>
<!--log4j: Druid需要log4j依赖进行日志-->
<dependency> <groupId>log4j</groupId> <artifactId>log4j</artifactId> <version>1.2.17</version>
</dependency>`},{header:"Druid 数据源",slug:"druid-数据源",content:"spring.datasource: username: root password: 123456 url: jdbc:mysql://localhost:3306/sister?useUnicode=true &characterEncoding=utf-8&serverTimezone=UTC driver-class-name: com.mysql.cj.jdbc.Driver # 数据源改成Druid，没有就是默认的Hikari type: com.alibaba.druid.pool.DruidDataSource # SpringBoot默认不注入的属性，需要自己配置的 # Druid # 初始化大小 initial-size: 5 # 最小空闲连接数 min-Idle: 5 # 最大连接数 max-active: 20 # 配置获取连接等待超时的时间 max-wait: 6000 # 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 time-between-eviction-runs-millis: 60000 # 配置一个连接在池中最小生存的时间，单位是毫秒 min-evictable-idle-time-millis: 300000 # 用来检测连接是否有效的sql，要求是一个查询语句 validation-query: SELECT 1 FROM DUAL # 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能 test-while-idle: true # 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能 test-on-borrow: false # 归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能 test-on-return: false # 打开PSCache，并且指定每个连接上PSCache的大小 pool-prepared-statements: true # 配置监控拦截统计的filters(stat:监控统计, log4j: 日志记录, wall: 预防sql注入) # 如果报错如下: java.lang.ClassNotFoundException: org.apache.log4j.Priority # 择需要导入log4j的依赖 # 通过connectProperties属性来打开mergeSql功能；慢SQL记录 connection-properties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500 # 配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙 filters: stat,wall,log4j # 合并多个DruidDataSource的监控数据 use-global-datasource-stat: true # 配置监控统计拦截的filters，去掉后监控界面sql无法统计，'wall'用于防火墙 max-pool-prepared-statement-per-connection-size: 20"},{header:"Druid 监控",slug:"druid-监控",content:`package com.ths.config; import com.alibaba.druid.filter.stat.StatFilter;
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration; import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map; // 自定义Druid配置类
@Configuration
public class DruidConfig { // 绑定配置文件中的属性 @ConfigurationProperties(prefix = "spring.datasource") @Bean public DataSource druidDataSource() { return new DruidDataSource(); } // 后台监控功能(因为SpringBoot内置Servlet，所以没有相关配置 // 这个类就相当于web.xml，访问: 项目启动后， // 在浏览器中将访问的url改成druid，http://localhost:8080/druid/sql.html) @Bean public ServletRegistrationBean statViewServlet() { ServletRegistrationBean<StatViewServlet> bean = new ServletRegistrationBean(new StatViewServlet(), "/druid/*"); // 需要有人登录才能访问 Map<String, String> initParams = new HashMap<>(); initParams.put("loginUsername", "admin"); // key 是固定的 initParams.put("loginPassword", "123456"); // key 是固定的 /** * allow: 允许谁可以访问，如果配置了，需要将ip白名单配置，否则不允许所有ip访问 * “”：默认就是允许所有访问 * localhost: 表示本机访问 * 192.168.1.1: 表示指定ip访问 * deny: 拒绝谁访问 */ initParams.put("allow", ""); initParams.put("deny", "192.168.3.33"); bean.setInitParameters(initParams); // 初始化参数 return bean; } // filter过滤 @Bean public FilterRegistrationBean webStatFilter() { FilterRegistrationBean bean = new FilterRegistrationBean(); bean.setFilter(new WebStatFilter()); // 配置过滤哪些 Map<String, String> initParams = new HashMap<>(); // 不记录哪些页面 initParams.put("exclusions", "*.js,*.css,/druid/*"); bean.setInitParameters(initParams); return bean; } // 配置log4j @Bean public StatFilter statFilter() { StatFilter statFilter = new StatFilter(); statFilter.setSlowSqlMillis(500); // 慢sql，单位ms statFilter.setLogSlowSql(true); // 是否记录慢sql statFilter.setMergeSql(true); // 合并sql return statFilter; }
}
# 加上这个配置文件后会把日志输出到控制台上
# log4j.properties
log4j.rootLogger=INFO, console # Console Appender
log4j.appender.console=org.apache.log4j.ConsoleAppender
log4j.appender.console.Target=System.out
log4j.appender.console.layout=org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n # Druid Logger
log4j.logger.druid=DEBUG, console`}]},{path:"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/jdbcTemplate.html",title:"",pathLocale:"/",contents:[{header:"JdbcTemplate",slug:"jdbctemplate",content:"SpringBoot 中有很多 xxxTemplate，比如 JdbcTemplate、RestTemplate、OkHttpTemplate、WebClientTemplate 等，这些模板类都是 Spring 提供的简化开发模板类，可以大大简化开发。"},{header:"使用 JdbcTemplate",slug:"使用-jdbctemplate",content:""},{header:"1. 添加依赖",slug:"_1-添加依赖",content:`<!--JDBC启动器-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<!--mysql-->
<dependency> <groupId>mysql</groupId> <artifactId>mysql-connector-java</artifactId> <version>8.0.28</version>
</dependency>`},{header:"2. 配置数据源",slug:"_2-配置数据源",content:`spring: profiles: active: dev
---
spring: profiles: dev
server: port: 8080
spring.datasource: username: root password: 123456 url: jdbc:mysql://localhost:3306/sister?useUnicode=true&characterEncoding=utf-8&serverTimezone=UTC driver-class-name: com.mysql.cj.jdbc.Driver`},{header:"3. 创建 JdbcTemplate 实例",slug:"_3-创建-jdbctemplate-实例",content:`@Configuration
public class JdbcConfig { @Bean public JdbcTemplate jdbcTemplate(DataSource dataSource) { return new JdbcTemplate(dataSource); }
}`},{header:"4. 使用 JdbcTemplate 进行数据库操作",slug:"_4-使用-jdbctemplate-进行数据库操作",content:`package com.ths.config; import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController; import java.util.List;
import java.util.Map; @RestController
// @Service
public class JDBCController { // SpringBoot 中有很多 xxxTemplate，已经配置好Bean的，拿来就能用 @Autowired JdbcTemplate jdbcTemplate; // 查询数据据库的所有信息(没有实体类，怎么获取数据库中的信息) @GetMapping("/userList") public List<Map<String, Object>> userList() { String sql = "select * from user"; System.out.println(jdbcTemplate.queryForList(sql)); return jdbcTemplate.queryForList(sql); } @GetMapping("/add") public String add() { String sql = "insert into user(id, name, age) values (3,'小明', '20')"; jdbcTemplate.update(sql); return "新增成功!"; } @GetMapping("/update/{id}") public String updateUser(@PathVariable("id") int id) { String sql = "update user set name=?,age=? where id= ?"; Object[] args = {"小红", 22, id}; jdbcTemplate.update(sql, args); return "修改成功!"; } @GetMapping("/delete/{id}") public String deleteUser(@PathVariable("id") int id) { // 这句sql不如修改那样好，不安全，Object[] args可以防止sql注入 String sql = "delete from user where id = " + id; jdbcTemplate.update(sql); return "删除成功!"; }
}`}]},{path:"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/Mybatis-Plus.html",title:"",pathLocale:"/",contents:[{header:"Mybatis-Plus",slug:"mybatis-plus",content:""},{header:"简介",slug:"简介",content:"MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。"},{header:"特性",slug:"特性",content:"特性 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作，无需自己编写 CRUD 代码 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求 支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作 支持自定义全局通用操作：支持全局通用方法注入(Write once, use anywhere) 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置 内置逻辑删除功能：支持全局逻辑删除扫描，支持业务逻辑删除，无需自己写逻辑删除的代码 内置自动填充功能：可自动填充字段，无需手动设置 CREATE_TIME、UPDATE_TIME、DELETED 等字段值 内置序列化功能：提供 JSON 序列化插件，可解决序列化问题，无需额外引入第三方库 可自定义注解、全局配置、支持自定义插件扩展"},{header:"快速开始",slug:"快速开始",content:""},{header:"1. 引入依赖",slug:"_1-引入依赖",content:`<dependency> <groupId>com.baomidou</groupId> <artifactId>mybatis-plus-boot-starter</artifactId> <version>3.4.3.4</version>
</dependency>`},{header:"2. 配置数据源",slug:"_2-配置数据源",content:`spring: datasource: driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/mybatis_plus?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=UTC username: root password: root
mybatis-plus: mapper-locations: classpath:/mapper/*.xml type-aliases-package: com.example.demo.entity`},{header:"3. 创建实体类",slug:"_3-创建实体类",content:`@Data
@TableName("user")
public class User { @TableId(type = IdType.AUTO) private Long id; private String name; private Integer age; private String email;
}`},{header:"4. 创建 Mapper 接口",slug:"_4-创建-mapper-接口",content:`@Mapper
public interface UserMapper extends BaseMapper<User> {
}`},{header:"5. 测试",slug:"_5-测试",content:`@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void contextLoads() { List<User> users = userMapper.selectList(null); users.forEach(System.out::println); }
}`},{header:"CRUD 扩展",slug:"crud-扩展",content:""},{header:"1. 插入操作",slug:"_1-插入操作",content:`@Test
void testInsert() { User user = new User(); user.setName("张三"); user.setAge(18); user.setEmail("zhangsan@atguigu.com"); int result = userMapper.insert(user); System.out.println("result = " + result); System.out.println("id = " + user.getId());
}`},{header:"2. 主键策略",slug:"_2-主键策略",content:`ID_WORKER - 全局唯一 ID (Long 类型的主键)
ID_WORKER_STR - 字符串全局唯一 ID (String 类型的主键)
UUID - 全局唯一 ID (UUID 类型的主键)
AUTO - 数据库 ID 自增
INPUT - 用户输入 ID (该类型可以通过自己注册自动填充插件进行填充)
NONE - 无状态 (适合那种把 ID 放在了业务字段里面的情况)
IDENTITY - 数据库 ID 自增(只支持 mysql,oracle,db2)`},{header:"3. 更新操作",slug:"_3-更新操作",content:`@Test
void testUpdate() { User user = new User(); user.setId(1L); user.setName("张三丰"); user.setAge(100); user.setEmail("zhangsanfeng@atguigu.com"); int result = userMapper.updateById(user); // 根据id进行更新,没有传值的字段将更新为null System.out.println("result = " + result);
}`},{header:"4. 自动填充",slug:"_4-自动填充",content:`@Data
@TableName("user")
public class User { @TableId(type = IdType.AUTO) private Long id; private String name; private Integer age; private String email; @TableField(fill = FieldFill.INSERT) private LocalDateTime createTime; @TableField(fill = FieldFill.INSERT_UPDATE) private LocalDateTime updateTime;
}
@Component
public class MyMetaObjectHandler implements MetaObjectHandler { @Override public void insertFill(MetaObject metaObject) { this.strictInsertFill(metaObject, "createTime", LocalDateTime::now, LocalDateTime.class); this.strictInsertFill(metaObject, "updateTime", LocalDateTime::now, LocalDateTime.class); } @Override public void updateFill(MetaObject metaObject) { this.strictUpdateFill(metaObject, "updateTime", LocalDateTime::now, LocalDateTime.class); }
}`},{header:"5. 乐观锁",slug:"_5-乐观锁",content:`@Data
@TableName("user")
public class User { @TableId(type = IdType.AUTO) private Long id; private String name; private Integer age; private String email; @Version private Integer version;
}
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void testOptimisticLocker() { User user = userMapper.selectById(1L); user.setName("张三"); user.setAge(18); User user2 = userMapper.selectById(1L); user2.setName("张三丰"); user2.setAge(100); userMapper.updateById(user2); userMapper.updateById(user); }
}`},{header:"6. 查询操作",slug:"_6-查询操作",content:`@Test
void testSelectById() { User user = userMapper.selectById(1L); System.out.println(user);
}`},{header:"7. 分页查询",slug:"_7-分页查询",content:`@Configuration
public class MyBatisPlusConfig { @Bean public PaginationInterceptor paginationInterceptor() { return new PaginationInterceptor(); }
}
@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void testPage() { Page<User> page = new Page<>(1, 3); userMapper.selectPage(page, null); page.getRecords().forEach(System.out::println); System.out.println(page.getCurrent()); System.out.println(page.getPages()); System.out.println(page.getSize()); System.out.println(page.getTotal()); System.out.println(page.hasNext()); System.out.println(page.hasPrevious()); }
}`},{header:"8. 删除操作",slug:"_8-删除操作",content:`@Test
void testDeleteById() { int result = userMapper.deleteById(1L); System.out.println("result = " + result);
}`},{header:"9. 批量删除",slug:"_9-批量删除",content:`@Test
void testDeleteBatchIds() { List<Long> idList = Arrays.asList(1L, 2L, 3L); int result = userMapper.deleteBatchIds(idList); System.out.println("result = " + result);
}`},{header:"10. 逻辑删除",slug:"_10-逻辑删除",content:`@Data
@TableName("user")
public class User { @TableId(type = IdType.AUTO) private Long id; private String name; private Integer age; private String email; @TableLogic private Integer deleted;
}
@Mapper
public interface UserMapper extends BaseMapper<User> {
}
@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void testLogicDelete() { int result = userMapper.deleteById(1L); System.out.println("result = " + result); }
}`},{header:"11. 条件构造器",slug:"_11-条件构造器",content:`@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void testCondition() { QueryWrapper<User> queryWrapper = new QueryWrapper<>(); queryWrapper.eq("name", "张三"); User user = userMapper.selectOne(queryWrapper); System.out.println(user); }
}`},{header:"12. 代码生成器",slug:"_12-代码生成器",content:`public class CodeGenerator { public static void main(String[] args) { AutoGenerator autoGenerator = new AutoGenerator(); // 全局配置 GlobalConfig globalConfig = new GlobalConfig(); String projectPath = System.getProperty("user.dir"); globalConfig.setOutputDir(projectPath + "/src/main/java"); globalConfig.setAuthor("test"); globalConfig.setOpen(false); globalConfig.setSwagger2(true); autoGenerator.setGlobalConfig(globalConfig); // 数据源配置 DataSourceConfig dataSourceConfig = new DataSourceConfig(); dataSourceConfig.setUrl("jdbc:mysql://localhost:3306/mybatis_plus?useUnicode=true&useSSL=false&characterEncoding=utf8"); dataSourceConfig.setDriverName("com.mysql.cj.jdbc.Driver"); dataSourceConfig.setUsername("root"); dataSourceConfig.setPassword("123456"); autoGenerator.setDataSource(dataSourceConfig); // 包配置 PackageConfig packageConfig = new PackageConfig(); packageConfig.setModuleName("user"); packageConfig.setParent("com.example.demo"); autoGenerator.setPackageInfo(packageConfig); // 策略配置 StrategyConfig strategyConfig = new StrategyConfig(); strategyConfig.setInclude("user"); strategyConfig.setNaming(NamingStrategy.underline_to_camel); strategyConfig.setColumnNaming(NamingStrategy.underline_to_camel); strategyConfig.setEntityLombokModel(true); strategyConfig.setRestControllerStyle(true); strategyConfig.setControllerMappingHyphenStyle(true); autoGenerator.setStrategy(strategyConfig); autoGenerator.execute(); }
}`},{header:"13. 分页插件",slug:"_13-分页插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL)); return interceptor; }
}
@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void testPage() { Page<User> page = new Page<>(1, 3); userMapper.selectPage(page, null); List<User> records = page.getRecords(); records.forEach(System.out::println); System.out.println("当前页：" + page.getCurrent()); System.out.println("每页显示的条数：" + page.getSize()); System.out.println("总记录数：" + page.getTotal()); System.out.println("总页数：" + page.getPages()); System.out.println("是否有上一页：" + page.hasPrevious()); System.out.println("是否有下一页：" + page.hasNext()); }
}`},{header:"14. 乐观锁插件",slug:"_14-乐观锁插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor()); return interceptor; }
}
@SpringBootTest
class DemoApplicationTests { @Autowired private UserMapper userMapper; @Test void testOptimisticLocker() { User user = new User(); user.setId(1L); user.setName("test"); user.setAge(20); user.setEmail("test@baomidou.com"); user.setVersion(1); int result = userMapper.updateById(user); System.out.println("result = " + result); }
}`},{header:"15. 性能分析插件",slug:"_15-性能分析插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new PerformanceInnerInterceptor()); return interceptor; }
}`},{header:"16. 逻辑删除插件",slug:"_16-逻辑删除插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new LogicSqlInjector()); return interceptor; }
}`},{header:"17. 自动填充插件",slug:"_17-自动填充插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new MetaObjectHandlerInnerInterceptor()); return interceptor; }
}`},{header:"18. SQL 注入器",slug:"_18-sql-注入器",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new LogicSqlInjector()); return interceptor; }
}`},{header:"19. 多租户插件",slug:"_19-多租户插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new TenantLineInnerInterceptor()); return interceptor; }
}`},{header:"20. 动态表名插件",slug:"_20-动态表名插件",content:`@Configuration
public class MybatisPlusConfig { @Bean public MybatisPlusInterceptor mybatisPlusInterceptor() { MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); interceptor.addInnerInterceptor(new DynamicTableNameInnerInterceptor()); return interceptor; }
}`}]},{path:"/admin/Java/SpringBoot/%E6%95%B0%E6%8D%AE%E5%BA%93%E9%9B%86%E6%88%90/Mybatis.html",title:"",pathLocale:"/",contents:[{header:"MyBatis",slug:"mybatis",content:""},{header:"Mybatis 使用步骤",slug:"mybatis-使用步骤",content:`添加 MyBatis 依赖
整合 MyBatis
编写 Mapper 接口和 XML 映射文件进行测试`},{header:"MyBatis 依赖",slug:"mybatis-依赖",content:`<!--JDBC启动器-->
<dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<!--mysql-->
<dependency> <groupId>mysql</groupId> <artifactId>mysql-connector-java</artifactId> <version>8.0.28</version>
</dependency>
<!--mybatis启动器-->
<dependency> <groupId>org.mybatis.spring.boot</groupId> <artifactId>mybatis-spring-boot-starter</artifactId> <version>2.1.4</version>
</dependency>`},{header:"整合 MyBatis",slug:"整合-mybatis",content:`spring.datasource: username: root password: 123456 url: jdbc:mysql://localhost:3306/sister?useUnicode=true &characterEncoding=utf-8&serverTimezone=UTC driver-class-name: com.mysql.cj.jdbc.Driver
mybatis: type-aliases-package: com.ths.pojo mapper-locations: classpath:mapper/*.xml`},{header:"编写 Mapper 接口和 XML 映射文件进行测试",slug:"编写-mapper-接口和-xml-映射文件进行测试",content:`// pojo实体类
package com.ths.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @Data
@AllArgsConstructor
@NoArgsConstructor
public class MybatisUse { private int id; private String name; private String age;
} // mapper接口
package com.ths.mapper; import com.ths.pojo.MybatisUse;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository; import java.util.List; @Mapper // 加上这个注解就是MyBatis的Mapper接口
// 或者在SpringBootApplication中指定扫描包就不用配了
@Repository
public interface MybatisUseMapper { List<MybatisUse> queryMybatisUseList(); MybatisUse queryMybatisUseById(int id); void addMybatisUse(MybatisUse mybatis); void deleteMybatisUse(int id); void updateMybatisUse(MybatisUse mybatis);
}
<!-- 映射文件 -->
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.ths.mapper.MybatisUseMapper"> <select id="queryMybatisUseList" resultType="MybatisUse" useCache="true"> select * from mybatisuse </select> <select id="queryMybatisUseById" resultType="MybatisUse"> select * from mybatisuse where id = #{id} </select> <insert id="addMybatisUse" parameterType="MybatisUse"> insert into mybatisuse(id, name, age) values(#{id}, #{name}, #{age}) </insert> <delete id="deleteMybatisUse" parameterType="int"> delete from mybatisuse where id = #{id} </delete> <update id="updateMybatisUse" parameterType="MybatisUse"> update mybatisuse set name = #{name}, age = #{age} where id = #{id} </update>
</mapper>
// controller测试
package com.ths.controller; import com.ths.mapper.MybatisUseMapper;
import com.ths.pojo.MybatisUse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody; import java.util.List; @Controller
public class MybatisUseController { final MybatisUseMapper mybatisUseMapper; public MybatisUseController(MybatisUseMapper mybatisUseMapper) { this.mybatisUseMapper = mybatisUseMapper; } // 查询全部 @RequestMapping("/mybatisUseList") @ResponseBody public List<MybatisUse> mybatisUseList() { return mybatisUseMapper.queryMybatisUseList(); } // 根据id查询 @RequestMapping("/mybatisUseById") @ResponseBody public MybatisUse mybatisUseById(int id) { return mybatisUseMapper.queryMybatisUseById(id); } // 添加 @RequestMapping("/mybatisUseAdd") public String mybatisUseAdd(MybatisUse mybatis) { mybatisUseMapper.addMybatisUse(mybatis); return "redirect:/mybatisUseList"; } // 删除 @RequestMapping("/mybatisUseDelete") public String mybatisUseDelete(int id) { mybatisUseMapper.deleteMybatisUse(id); return "redirect:/mybatisUseList"; } // 修改 @RequestMapping("/mybatisUseUpdate") public String mybatisUseUpdate(MybatisUse mybatis) { mybatisUseMapper.updateMybatisUse(mybatis); return "redirect:/mybatisUseList"; }
}`},{header:"指定 Mapper 扫描包",slug:"指定-mapper-扫描包",content:`package com.ths; import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan; @SpringBootApplication
@MapperScan("com.ths.mapper") // 指定扫描的mapper接口位置，在接口中就不用@Mapper
public class SpringBoot220Application { public static void main(String[] args) { SpringApplication.run(SpringBoot220Application.class, args); }
}`}]},{path:"/admin/Java/SpringBoot/%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D/%E8%87%AA%E5%8A%A8%E8%A3%85%E9%85%8D%E5%8E%9F%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"自动装配原理",slug:"自动装配原理",content:""}]},{path:"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/api%E6%9C%8D%E5%8A%A1.html",title:"",pathLocale:"/",contents:[{header:"api 服务",slug:"api-服务",content:"api 服务提供实体"},{header:"依赖",slug:"依赖",content:`<dependencies> <!--lombok--> <dependency> <groupId>org.projectlombok</groupId> <artifactId>lombok</artifactId> </dependency>
</dependencies>`},{header:"实体类",slug:"实体类",content:`package com.ths.api.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors; import java.io.Serializable; @Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true) // 链式写法的注解
public class Dept implements Serializable { // 分布式，所有实体类必须序列化 private Long deptno; private String dname; private String db_source; // 哪个数据库中的字段
}`}]},{path:"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/Dubbo%E5%92%8CCloud%E4%BB%A3%E7%A0%81%E5%AF%B9%E6%AF%94.html",title:"",pathLocale:"/",contents:[{header:"Dubbo 和 Cloud 代码对比",slug:"dubbo-和-cloud-代码对比",content:""},{header:"Dubbo 实现流程",slug:"dubbo-实现流程",content:`安装并启动 zookpeer，作为注册中心
在生产者项目中发布一个接口(@Service)到注册中心
在消费者中也要创建一个同生产者中相同接口
在消费者项目中引用(@Reference)注册中心的接口并调用`},{header:"SpringCloud 实现流程",slug:"springcloud-实现流程",content:"简单来说，就是 api 模块提供实体类，生产者模块提供接口实现，消费者模块通过 RestTemplate 调用接口"}]},{path:"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/%E6%B6%88%E8%B4%B9%E8%80%85%E6%9C%8D%E5%8A%A1.html",title:"",pathLocale:"/",contents:[{header:"消费者服务",slug:"消费者服务",content:"消费者服务，通过 RestTemplate 来调用生产者提供的接口，实现页面的展示等"},{header:"依赖",slug:"依赖",content:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> <parent> <artifactId>ths-spring-cloud</artifactId> <groupId>org.ths</groupId> <version>1.0-SNAPSHOT</version> </parent> <modelVersion>4.0.0</modelVersion> <artifactId>project-consumer-80</artifactId> <properties> <maven.compiler.source>8</maven.compiler.source> <maven.compiler.target>8</maven.compiler.target> </properties> <dependencies> <!--消费者也需要实体类，导入project-api模块--> <dependency> <groupId>org.ths</groupId> <artifactId>project-api</artifactId> <version>1.0-SNAPSHOT</version> </dependency> <!--springboot--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-web</artifactId> </dependency> <!--devtools--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-devtools</artifactId> </dependency> <!----> <dependency> <groupId>org.mybatis</groupId> <artifactId>mybatis</artifactId> <version>3.5.6</version> <scope>compile</scope> </dependency> </dependencies> </project>`},{header:"配置文件",slug:"配置文件",content:`server: port: 808
spring: application: name: project-consumer-80`},{header:"注册 RestTemplate",slug:"注册-resttemplate",content:`package com.ths.consumer.config; import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate; @Configuration // 将方法返回的RestTemplate注册到Spring中
public class BeanConfig { @Bean // 将RestTemplate交给Spring托管 public RestTemplate getRestTemplate() { return new RestTemplate(); }
}`},{header:"控制层",slug:"控制层",content:`package com.ths.consumer.controller; import com.ths.api.pojo.Dept;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate; import java.util.List; @RestController // 只能用@RestController，不能用@Controller
@RequestMapping("/consumer/dept")
public class GetDeptController { // 消费者不应该有service层了，而是负责获取数据并在页面上渲染即可 // xxxTemplate 是SpringCloud提供的一个模板，用来调用服务 // RestTemplate：Spring中默认没有注册，需要自己注册(BeanConfig) // RestTemplate：Restful风格服务模板，从提供者模块中获取需要的内容 // RestTemplate：简单粗暴无脑，直接调用即可 private final RestTemplate restTemplate; // 注册后就可以使用了 public GetDeptController(RestTemplate restTemplate) { this.restTemplate = restTemplate; } // 服务端请求的url前缀
private static final String REST_URL_PREFIX = "http://localhost:8001";
@GetMapping("/get/{id}")
public Dept getDeptById(@PathVariable("id") Long id) { // 参数1：请求地址，参数2：返回类型 return restTemplate.getForObject(REST_URL_PREFIX + "/dept/get/" + id, Dept.class);
}
@GetMapping("/list")
public List<Dept> queryAll() { return restTemplate.getForObject(REST_URL_PREFIX + "/dept/list", List.class);
}
@PostMapping("/add")
public boolean addDept(Dept dept) { // 参数1：请求地址，参数2：请求参数，参数3：返回类型 return Boolean.TRUE.equals( restTemplate.postForObject(REST_URL_PREFIX + "/dept/add", dept, Boolean.class) );
}
@PostMapping("/delete")
public boolean deleteDept(@Param("id") Long id) { return Boolean.TRUE.equals( restTemplate.postForObject(REST_URL_PREFIX + "/dept/delete", id, Boolean.class) );
}
@PostMapping("/update")
public boolean updateDept(@RequestBody Dept dept) { return Boolean.TRUE.equals( restTemplate.postForObject(REST_URL_PREFIX + "/dept/update", dept, Boolean.class) );
}
}`},{header:"启动类",slug:"启动类",content:`package com.ths.consumer; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication; @SpringBootApplication
public class Consumer_80 { public static void main(String[] args) { SpringApplication.run(Consumer_80.class, args); }
}`}]},{path:"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/%E7%88%B6%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96.html",title:"",pathLocale:"/",contents:[{header:"父项目依赖",slug:"父项目依赖",content:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> <modelVersion>4.0.0</modelVersion> <groupId>org.ths</groupId> <artifactId>ths-spring-cloud</artifactId> <version>1.0-SNAPSHOT</version> <modules> <module>project-api</module> <module>project-provider-8001</module> <module>project-consumer-80</module> </modules> <!--打包方式，springboot可能打jar--> <packaging>pom</packaging> <!--properties：管理--> <properties> <!--编码方式--> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <!--输出日志编码方式--> <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding> <java.version>1.8</java.version> <project.name>ths-spring-cloud</project.name> <maven.compiler.source>8</maven.compiler.source> <maven.compiler.target>8</maven.compiler.target>
<!-- <log4j.version>1.2.18</log4j.version>--> <junit.version>4.12</junit.version> <lombok.version>1.18.20</lombok.version> <logback.version>1.2.3</logback.version> </properties> <dependencyManagement> <dependencies> <!--spring-cloud--> <dependency> <groupId>org.springframework.cloud</groupId> <artifactId>spring-cloud-dependencies</artifactId> <version>Hoxton.SR1</version> <type>pom</type> <scope>import</scope> </dependency> <!--spring-boot--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-dependencies</artifactId> <version>2.2.0.RELEASE</version> <type>pom</type> <scope>import</scope> </dependency> <!--数据库--> <dependency> <groupId>mysql</groupId> <artifactId>mysql-connector-java</artifactId> <version>8.0.28</version> </dependency> <dependency> <groupId>com.alibaba</groupId> <artifactId>druid</artifactId> <version>1.2.6</version> </dependency> <!--spring-boot启动器--> <dependency> <groupId>org.mybatis.spring.boot</groupId> <artifactId>mybatis-spring-boot-starter</artifactId> <version>2.1.4</version> </dependency> <!--log4j-->
<!-- <dependency>-->
<!-- <groupId>org.apache.logging.log4j</groupId>-->
<!-- <artifactId>log4j-api</artifactId>-->
<!-- <version>\${log4j.version}</version>-->
<!-- </dependency>--> <!--junit--> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>\${junit.version}</version> </dependency> <!--lombok--> <dependency> <groupId>org.projectlombok</groupId> <artifactId>lombok</artifactId> <version>\${lombok.version}</version> </dependency> <!--logback：日志门面--> <dependency> <groupId>ch.qos.logback</groupId> <artifactId>logback-core</artifactId> <version>\${logback.version}</version> </dependency> </dependencies> </dependencyManagement>
</project>`}]},{path:"/admin/Java/SpringCloud/SpringCloud%E5%9F%BA%E7%A1%80%E9%A1%B9%E7%9B%AE/%E7%94%9F%E4%BA%A7%E8%80%85%E6%9C%8D%E5%8A%A1.html",title:"",pathLocale:"/",contents:[{header:"生产者服务",slug:"生产者服务",content:"生产者服：给消费者服务提供接口调用的 spring-boot 项目"},{header:"依赖",slug:"依赖",content:`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> <parent> <artifactId>ths-spring-cloud</artifactId> <groupId>org.ths</groupId> <version>1.0-SNAPSHOT</version> </parent> <modelVersion>4.0.0</modelVersion> <artifactId>project-provider-8001</artifactId> <properties> <maven.compiler.source>8</maven.compiler.source> <maven.compiler.target>8</maven.compiler.target> </properties> <dependencies> <!--因为需要实体类，所以需要导入project-api模块--> <dependency> <groupId>org.ths</groupId> <artifactId>project-api</artifactId> <version>1.0-SNAPSHOT</version> </dependency> <!--junit--> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> </dependency> <!--数据库--> <dependency> <groupId>mysql</groupId> <artifactId>mysql-connector-java</artifactId> </dependency> <!--数据库的数据源--> <dependency> <groupId>com.alibaba</groupId> <artifactId>druid</artifactId> </dependency> <!--logback日志--> <dependency> <groupId>ch.qos.logback</groupId> <artifactId>logback-core</artifactId> </dependency> <!--springboot启动器--> <dependency> <groupId>org.mybatis.spring.boot</groupId> <artifactId>mybatis-spring-boot-starter</artifactId> </dependency> <!--springboot-test--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-test</artifactId> <scope>test</scope> </dependency> <!--热部署工具：保存后就可以自动根本更新了，不用重启--> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-devtools</artifactId> </dependency> <dependency> <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-web</artifactId> </dependency> </dependencies> </project>`},{header:"项目配置",slug:"项目配置",content:`server: port: 8001
# mybatis配置
mybatis: # 配置别名：实体类包名路径(api模块) type-aliases-package: com.ths.api.pojo # 配置mapper接口的位置(当前模块) mapper-locations: classpath:mybatis/mapper/*.xml # 配置全局配置文件(当前模块) config-location: classpath:mybatis/mybatis-config.xml
# spring配置
spring: application: name: project-provider-8001 datasource: type: com.alibaba.druid.pool.DruidDataSource driver-class-name: com.mysql.cj.jdbc.Driver url: jdbc:mysql://localhost:3306/db01?useUnicode= true&characterEncoding=utf-8&serverTimezone=UTC username: root password: 123456 # 配置连接池 dbcp2: initialSize: 5 # 最小连接池数量 minIdle: 5 # 最大连接池数量 maxTotal: 20 # 最大等待时间，配置了maxWait毫秒的线程如果获取连接失败，则抛出异常 maxWaitMillis: 5000 # 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 timeBetweenEvictionRunsMillis: 60000 # 配置一个连接在池中最小生存的时间，单位是毫秒 minEvictableIdleTimeMillis: 300000 # 连接有效性检查的 SQL 查询 validationQuery: SELECT 1 # 是否在空闲时进行连接有效性检查 testWhileIdle: true # 是否在获取连接时进行连接有效性检查 testOnBorrow: false # 是否在归还连接时进行连接有效性检查 testOnReturn: false # 是否缓存 PreparedStatemen poolPreparedStatements: true # 每个连接缓存的最大 PreparedStatement 数量 maxPoolPreparedStatementPerConnectionSize: 20 # 配置过滤器，如统计、防火墙、日志等 filters: stat,wall,log4j`},{header:"mybatis 配置文件",slug:"mybatis-配置文件",content:`<!--mybatis-config.xml-->
<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration> <settings> <!--自动将数据库中的下划线命名（如 user_name）转换为 Java 中的驼峰命名（如 userName）--> <setting name="mapUnderscoreToCamelCase" value="true"/> <!--开启二级缓存--> <setting name="cacheEnabled" value="true"/> <!--日志输出的方式--> <setting name="logImpl" value="STDOUT_LOGGING"/> <!--懒加载提高性能--> <setting name="lazyLoadingEnabled" value="true"/> <!--控制是否启用激进的懒加载策略，false只对关联对象进行按需加载，true对所有关联对象进行一次性加载--> <setting name="aggressiveLazyLoading" value="false"/> <!--多结果集支持--> <setting name="multipleResultSetsEnabled" value="true"/> <!--执行插入操作后自动获取并设置生成的主键值--> <setting name="useGeneratedKeys" value="true"/> </settings>
</configuration>`},{header:"映射文件接口",slug:"映射文件接口",content:`package com.ths.provider.mapper; import com.ths.api.pojo.Dept;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository; import java.util.List; @Mapper
@Repository // 同@Component一样，交给Spring托管，dao层使用@Repository
public interface DeptMapper { public List<Dept> queryAll(); public Dept queryById(Long id); public boolean addDept(Dept dept); public boolean deleteDept(Long id); public boolean updateDept(Dept dept);
}`},{header:"映射文件",slug:"映射文件",content:`<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.ths.provider.mapper.DeptMapper"> <resultMap id="DeptResultMap" type="com.ths.api.pojo.Dept"> <id property="deptno" column="deptno"/> <result property="dname" column="dname"/> <result property="db_source" column="db_source"/> </resultMap> <!--resultType="com.ths.api.pojo.Dept",默认映射,可能有潜在问题--> <select id="queryAll" resultMap="DeptResultMap"> select * from dept </select> <select id="queryById" resultMap="DeptResultMap"> select * from dept where deptno=#{id} </select> <insert id="addDept" parameterType="com.ths.api.pojo.Dept"> insert into dept(dname,db_source) values(#{dname},DATABASE()) </insert> <delete id="deleteDept" parameterType="Long"> delete from dept where deptno=#{id} </delete> <update id="updateDept" parameterType="com.ths.api.pojo.Dept"> update dept set dname=#{dname} where deptno=#{deptno} </update>
</mapper>`},{header:"服务层",slug:"服务层",content:`// 接口
package com.ths.provider.service; import com.ths.api.pojo.Dept; import java.util.List; public interface DeptService { public List<Dept> queryAll(); public Dept queryById(Long id); public boolean addDept(Dept dept); public boolean deleteDept(Long id); public boolean updateDept(Dept dept);
} // 实现类
package com.ths.provider.service; import com.ths.api.pojo.Dept;
import com.ths.provider.mapper.DeptMapper;
import org.springframework.stereotype.Service; import java.util.List; @Service // 同@Component一样，交给Spring托管，service层使用@Service
public class DeptServiceImpl implements DeptService{ private final DeptMapper mapper; public DeptServiceImpl(DeptMapper mapper) { this.mapper = mapper; } // 这两行等同于上边 // @Autowired // private DeptMapper mapper; @Override public List<Dept> queryAll() { return mapper.queryAll(); } @Override public Dept queryById(Long id) { Dept dept = mapper.queryById(id); System.out.println(dept); return dept; } @Override public boolean addDept(Dept dept) { return mapper.addDept(dept); } @Override public boolean deleteDept(Long id) { return mapper.deleteDept(id); } @Override public boolean updateDept(Dept dept) { return mapper.updateDept(dept); }
}`},{header:"启动项",slug:"启动项",content:`package com.ths.provider; import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication; @SpringBootApplication
public class Provider_8001 { public static void main(String[] args) { SpringApplication.run(Provider_8001.class, args); }
}`}]},{path:"/admin/Java/SpringMvc/Json/fastjson.html",title:"",pathLocale:"/",contents:[{header:"fastjson",slug:"fastjson",content:`阿里巴巴推出的一款插件 方法
作用 JSON.toJSONString()
java 对象转 json 字符串 JSON.parseObject()
json 字符串转 java 对象 JSON.parseArray()
json 字符串转 java 集合 JSON.toJavaObject()
json 字符串转 java 对象 JSON.parse()
json 字符串转 java 对象`},{header:"常用注解",slug:"常用注解",content:`注解
作用 @JSONField
json 字段名映射 @JSONType
json 类型映射 @JSONField(serialize = false)
json 字段不序列化 @JSONField(deserialize = false)
json 字段不反序列化`},{header:"案例",slug:"案例",content:`// FastJsonController
package com.haha.controller; import com.alibaba.fastjson.JSON;
import com.haha.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody; import java.util.ArrayList;
import java.util.List; @Controller
@RequestMapping("/fastjson")
public class FastJsonController { @RequestMapping("/f1") @ResponseBody public String f1(){ User u1 = new User("小明", 18, "男"); User u2 = new User("小光", 20, "女"); User u3 = new User("大道", 18, "男"); List<User> users = new ArrayList<User>(); users.add(u1); users.add(u2); users.add(u3); return JSON.toJSONString(users); }
} // User
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @AllArgsConstructor
@Data
@NoArgsConstructor
public class User { private String name; private int age; private String sex;
}
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd"> <context:component-scan base-package="com.haha.controller"/> <!-- Json乱码问题配置 --> <mvc:annotation-driven> <mvc:message-converters register-defaults="true"> <!--消息转化机制--> <bean class="org.springframework.http.converter.StringHttpMessageConverter"> <constructor-arg value="UTF-8"/> </bean> <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"> <property name="objectMapper"> <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean"> <property name="failOnEmptyBeans" value="false"/> </bean> </property> </bean> </mvc:message-converters> </mvc:annotation-driven> <mvc:default-servlet-handler/> <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver" > <property name="prefix" value="/WEB-INF/jsp/"/> <property name="suffix" value=".jsp"/> </bean>
</beans>`}]},{path:"/admin/Java/SpringMvc/Json/jackson-databind.html",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:`使用 jackson-databind 处理数据 <!-- 配置文件 -->
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc" xmlns:context="http://www.springframework.org/schema/context" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd"> <context:component-scan base-package="com.haha.controller"/> <!-- Json乱码问题配置 --> <mvc:annotation-driven> <mvc:message-converters register-defaults="true"> <!--消息转化机制--> <bean class="org.springframework.http.converter.StringHttpMessageConverter"> <constructor-arg value="UTF-8"/> </bean> <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"> <property name="objectMapper"> <bean class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean"> <property name="failOnEmptyBeans" value="false"/> </bean> </property> </bean> </mvc:message-converters> </mvc:annotation-driven> <mvc:default-servlet-handler/> <mvc:annotation-driven/> <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="InternalResourceViewResolver"> <property name="prefix" value="/WEB-INF/jsp/"/> <property name="suffix" value=".jsp"/> </bean>
</beans>
// JsonController.java
package com.haha.controller; import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.haha.pojo.User;
import com.haha.utils.JsonUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody; import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List; @Controller
@RequestMapping("/json")
public class JsonController { @RequestMapping(value = "/j1", produces = {"application/json;charset=utf-8"}) @ResponseBody public String json1() throws JsonProcessingException { ObjectMapper mapper = new ObjectMapper(); User user = new User(1,"小明",23); String str = mapper.writeValueAsString(user); return str; } // 返回json @RequestMapping("/j2") @ResponseBody // 让当前的方法不返回视图，只返回json数据 public String json2() throws JsonProcessingException { ObjectMapper mapper = new ObjectMapper(); User user = new User(1,"中文",23); String str = mapper.writeValueAsString(user); return str; } // 返回数组(方法1) @RequestMapping("/j3") @ResponseBody // 让当前的方法不返回视图，只返回json数据 public String json3() throws JsonProcessingException { User user1 = new User(1,"中文",23); User user2 = new User(1,"中文",23); User user3 = new User(1,"中文",23); User user4 = new User(1,"中文",23); List userList = new ArrayList(); userList.add(user1); userList.add(user2); userList.add(user3); userList.add(user4); String str = new ObjectMapper().writeValueAsString(userList); return str; } // 返回时间戳 @RequestMapping("/j4") @ResponseBody public String json4() throws JsonProcessingException { // 默认的生成的是时间戳 Date date = new Date(); SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); return new ObjectMapper().writeValueAsString(sdf.format(date)); } // 时间戳工具类 @RequestMapping("/j5") @ResponseBody public String json5() throws JsonProcessingException { Date date = new Date(); return JsonUtil.getJson(date, "yyyy-MM-dd HH:mm:ss"); } // 返回数组(方法2-使用封装的工具类) @RequestMapping("/j6") @ResponseBody public String json6() throws JsonProcessingException { User user1 = new User(1,"中文",23); User user2 = new User(1,"中文",23); User user3 = new User(1,"中文",23); User user4 = new User(1,"中文",23); List userList = new ArrayList(); userList.add(user1); userList.add(user2); userList.add(user3); userList.add(user4); return JsonUtil.getJson(userList); }
} // User.java
package com.haha.pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @AllArgsConstructor
@Data
@NoArgsConstructor
public class User { private int id; private String name; private int age;
} // JsonUtil
package com.haha.utils; import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature; import java.text.SimpleDateFormat; // Json工具类 - 时间戳
// params : obj - 要转换的对象, dateFormat - 时间格式
public class JsonUtil { public static String getJson(Object obj, String dateFormat) { ObjectMapper mapper = new ObjectMapper(); mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false); SimpleDateFormat sdf = new SimpleDateFormat(dateFormat); mapper.setDateFormat(sdf); try { return mapper.writeValueAsString(obj); } catch (JsonProcessingException e) { e.printStackTrace(); } return null; } // 默认返回json public static String getJson(Object obj) throws JsonProcessingException { ObjectMapper mapper = new ObjectMapper(); return mapper.writeValueAsString(obj); }
}`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useContext.html",title:"",pathLocale:"/",contents:[{header:"useContext",slug:"usecontext",content:"useContext 是 React 提供的 Hook，用于在函数组件中方便地访问 context。处理跨组件状态共享的强大工具，正确使用它可以简化组件间的通信并提高代码的可维护性。"},{header:"1. 创建 Context",slug:"_1-创建-context",content:`首先，需要使用 React.createContext 创建一个 Context 对象。
const MyContext = React.createContext(defaultValue);`},{header:"2. 提供 Context 值",slug:"_2-提供-context-值",content:`使用 Context.Provider 组件来包裹组件树，以向树内的组件提供 Context 值。
<MyContext.Provider value={/* 一些值 */}> <YourComponent />
</MyContext.Provider>`},{header:"3. 消费 Context",slug:"_3-消费-context",content:`在函数组件中，使用 useContext 来消费 Context。
import { useContext } from 'react'; function YourComponent() { const value = useContext(MyContext); // ...
}`},{header:"4. 渲染属性模式",slug:"_4-渲染属性模式",content:"useContext 的设计初衷是替代“渲染属性”模式（render props）。"},{header:"5. 没有中间组件",slug:"_5-没有中间组件",content:"useContext 允许你直接访问 Context 值，而不需要通过每一层组件手动传递 props。"},{header:"6. 依赖项",slug:"_6-依赖项",content:"useContext 会将其依赖的 Context 作为依赖项，因此当 Context 值变化时，组件会重新渲染。"},{header:"7. 默认值",slug:"_7-默认值",content:`自 React v16.3 起，Context API 支持默认值。如果在组件树中未找到 Provider，就会使用这个默认值。
const theme = useContext(MyContext);
如果没有 MyContext.Provider 包裹组件，theme 将会是 undefined。`},{header:"8. 在自定义 Hook 中使用",slug:"_8-在自定义-hook-中使用",content:`可以在自定义 Hook 中使用 useContext 来访问 Context，这样可以在多个组件间复用 Context 逻辑。
function useMyContext() { return useContext(MyContext);
} function ComponentA() { const value = useMyContext(); // ...
} function ComponentB() { const value = useMyContext(); // ...
}`},{header:"9. 注意事项",slug:"_9-注意事项",content:`useContext 钩子会将其依赖的 Context 作为依赖项，因此当 Context 值变化时，组件会重新渲染。如果需要优化性能，可以考虑使用 React.memo 或 useMemo。
如果在函数组件中使用 useContext，该组件将会在每次渲染时重新创建，除非它被 React.memo 包裹。`},{header:"10. Context 的更新",slug:"_10-context-的更新",content:"当 Provider 的 value 属性改变时，所有消费该 Context 的组件都会重新渲染。如果需要避免不必要的渲染，可以使用 useMemo 或 useReducer 来创建一个稳定的 value。"},{header:"11. 与 useReducer 结合",slug:"_11-与-usereducer-结合",content:`有时，管理 Context 的复杂状态可能需要一个 reducer 函数。这种情况下，可以将 useReducer 与 Context 结合使用。
const MyContext = React.createContext(); function MyProvider({ children }) { const [state, dispatch] = useReducer(reducer, initialState); return ( <MyContext.Provider value={{ state, dispatch }}> {children} </MyContext.Provider> );
}`},{header:"12. 跨组件共享状态",slug:"_12-跨组件共享状态",content:"useContext 允许你跨多个组件层级共享状态，而不必使用 props 链式传递。"},{header:"13. Context 的嵌套",slug:"_13-context-的嵌套",content:"可以嵌套多个 Provider，以便在组件树的不同部分提供不同的 Context 值。"},{header:"14. 避免过度使用",slug:"_14-避免过度使用",content:"虽然 useContext 非常有用，但应避免过度使用，因为它可能导致难以追踪的渲染性能问题。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useEffect.html",title:"",pathLocale:"/",contents:[{header:"useEffect",slug:"useeffect",content:"useEffect 是 React 中一个非常强大的 Hook，它允许你在函数组件中执行副作用操作，如数据获取、订阅或手动更改 DOM。正确使用它可以帮助你管理组件的生命周期和状态变化。"},{header:"1. 基本使用",slug:"_1-基本使用",content:`useEffect 用于在组件渲染后执行副作用操作。它接受一个函数和一个依赖数组。
import { useEffect } from 'react'; function Example() { useEffect(() => { console.log('Component is rendered'); return () => { console.log('Cleanup'); }; }, []); // 空依赖数组表示这个effect只在挂载和卸载时运行
}`},{header:"2. 清理函数",slug:"_2-清理函数",content:`useEffect 可以返回一个清理函数，用于执行清理操作，如取消网络请求、移除事件监听器等。
useEffect(() => { const subscription = props.source.subscribe(); return () => { subscription.unsubscribe(); };
}, [props.source]); // props.source是依赖项`},{header:"3. 依赖数组",slug:"_3-依赖数组",content:`useEffect 的第二个参数是一个依赖数组，它决定了 effect 何时运行。如果依赖项改变，effect 会重新运行。
useEffect(() => { console.log('Effect runs when count changes');
}, [count]); // 当count变化时，effect重新运行`},{header:"4. 副作用的模拟",slug:"_4-副作用的模拟",content:"在类组件中，useEffect 相当于componentDidMount、componentDidUpdate和componentWillUnmount的组合。"},{header:"5. 模拟componentDidMount和componentDidUpdate",slug:"_5-模拟componentdidmount和componentdidupdate",content:`通过添加依赖项，你可以模拟componentDidUpdate行为。
useEffect(() => { console.log('Mount or update when count changes');
}, [count]); // 类似于componentDidUpdate`},{header:"6. 模拟componentWillUnmount",slug:"_6-模拟componentwillunmount",content:`通过返回一个清理函数，你可以模拟componentWillUnmount行为。
useEffect(() => { console.log('Cleanup when unmounting'); return () => { console.log('Component will unmount'); };
}, []); // 类似于componentWillUnmount`},{header:"7. 副作用的依赖性",slug:"_7-副作用的依赖性",content:"确保将所有外部变量和 props 作为依赖项，以确保 effect 在依赖项变化时正确运行。"},{header:"8. 条件 Effect",slug:"_8-条件-effect",content:`你可以通过条件渲染或条件执行 effect 函数来控制 effect 的执行。
useEffect(() => { if (show) { console.log('Effect runs when show is true'); }
}, [show]);`},{header:"9. 多个 Effect",slug:"_9-多个-effect",content:`你可以在组件中使用多个useEffect调用，以处理不同的副作用逻辑。
useEffect(() => { // 第一个effect
}, [dependency1]); useEffect(() => { // 第二个effect
}, [dependency2]);`},{header:"10. 性能优化",slug:"_10-性能优化",content:"如果你在 effect 中进行高开销操作，如数据获取或大规模计算，考虑使用useMemo或useCallback进行优化。"},{header:"11. 避免不必要的渲染",slug:"_11-避免不必要的渲染",content:"通过正确使用依赖数组，你可以避免不必要的组件渲染。"},{header:"12. 副作用的纯粹性",slug:"_12-副作用的纯粹性",content:"尽量保持 effect 函数的纯粹性，避免在 effect 内部产生副作用，除非是必须的。"},{header:"13. 使用useLayoutEffect",slug:"_13-使用uselayouteffect",content:`在必要时，可以使用useLayoutEffect来执行同步的副作用操作，如 DOM 测量。
import { useLayoutEffect } from 'react'; useLayoutEffect(() => { // Synchronous re-rendering
});`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useMemo%E5%92%8CuseCallback.html",title:"",pathLocale:"/",contents:[{header:"useMemo 和 useCallback",slug:"usememo-和-usecallback",content:"useMemo 和 useCallback 是 React 提供的两个 Hook，用于优化性能，它们通过记忆化来避免不必要的计算和渲染。以下是这两个 Hook 的关键技术点和概念："},{header:"useMemo",slug:"usememo",content:""},{header:"1. 基本使用",slug:"_1-基本使用",content:`useMemo 用于对高开销的计算进行记忆化，以优化性能。
import { useMemo } from 'react'; function expensiveCalculation(x, y) { // 假设这是一个复杂的计算 return x * y;
} function MyComponent({ x, y }) { const result = useMemo(() => expensiveCalculation(x, y), [x, y]); return <div>Result: {result}</div>;
}`},{header:"2. 依赖数组",slug:"_2-依赖数组",content:"useMemo 接受一个函数和一个依赖数组，只有当依赖项改变时，才会重新计算。"},{header:"3. 避免不必要的计算",slug:"_3-避免不必要的计算",content:"useMemo 可以避免在每次渲染时都进行高开销的计算。"},{header:"4. 惰性计算",slug:"_4-惰性计算",content:"useMemo 可以用于惰性计算，即只有在需要时才进行计算。"},{header:"5. 与useMemo结合使用",slug:"_5-与usememo结合使用",content:"useMemo 可以与 useCallback 结合使用，以确保传递给子组件的回调函数的稳定性。"},{header:"useCallback",slug:"usecallback",content:""},{header:"1. 基本使用",slug:"_1-基本使用-1",content:`useCallback 用于返回一个记忆化的回调函数，这个函数只有在依赖项改变时才会重新创建。
import { useCallback } from 'react'; function MyComponent({ doSomething }) { const handleDoSomething = useCallback(() => { doSomething(); }, [doSomething]); return <button onClick={handleDoSomething}>Do Something</button>;
}`},{header:"2. 依赖数组",slug:"_2-依赖数组-1",content:"useCallback 接受一个函数和一个依赖数组，只有当依赖项改变时，才会重新创建函数。"},{header:"3. 避免不必要的渲染",slug:"_3-避免不必要的渲染",content:"useCallback 可以避免子组件因为父组件的重新渲染而不必要的重新渲染。"},{header:"4. 稳定性",slug:"_4-稳定性",content:"useCallback 可以确保回调函数的引用稳定性，这对于传递给子组件或使用在useEffect中非常有用。"},{header:"5. 自定义 Hook",slug:"_5-自定义-hook",content:"useCallback 可以用于创建自定义 Hook，以在多个组件间复用回调逻辑。"},{header:"6. 与useMemo的区别",slug:"_6-与usememo的区别",content:`useMemo 用于优化高开销的计算。
useCallback 用于优化回调函数的创建。`},{header:"7. 性能注意事项",slug:"_7-性能注意事项",content:`过度使用 useMemo 和 useCallback 可能会导致性能下降，因为它们会增加代码的复杂性。
应该在真的有性能瓶颈时才使用这两个 Hook。`},{header:"8. 与React.memo结合使用",slug:"_8-与react-memo结合使用",content:"useMemo 和 useCallback 可以与 React.memo 结合使用，以避免组件的不必要的渲染。"},{header:"9. 惰性初始化",slug:"_9-惰性初始化",content:"useMemo 和 useCallback 可以用于惰性初始化对象或函数。"},{header:"10. 避免深比较",slug:"_10-避免深比较",content:"在依赖数组中，应避免进行深比较，因为这可能会导致性能问题。"},{header:"11. 避免在渲染阶段使用",slug:"_11-避免在渲染阶段使用",content:"useMemo 和 useCallback 应该谨慎使用，以避免在渲染阶段进行复杂的计算或创建函数。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useReducer.html",title:"",pathLocale:"/",contents:[{header:"useReducer",slug:"usereducer",content:"useReducer 是 React 提供的另一个 Hook，它让你可以在函数组件中使用 reducer 函数来管理复杂状态。"},{header:"1. 基本使用",slug:"_1-基本使用",content:`useReducer 让你向组件传递一个 reducer 函数，这个函数会根据 action 来返回新的状态。
import { useReducer } from 'react'; function reducer(state, action) { switch (action.type) { case 'increment': return { count: state.count + 1 }; case 'decrement': return { count: state.count - 1 }; default: throw new Error(); }
} function Counter() { const [state, dispatch] = useReducer(reducer, { count: 0 }); return ( <> Count: {state.count} <button onClick={() => dispatch({ type: 'increment' })}>+</button> <button onClick={() => dispatch({ type: 'decrement' })}>-</button> </> );
}`},{header:"2. 初始化状态",slug:"_2-初始化状态",content:"useReducer 的第二个参数是初始状态。与 useState 不同，它不是在渲染后才定义，而是在组件创建时就定义。"},{header:"3. 调度动作",slug:"_3-调度动作",content:"useReducer 返回一个数组，其中第二个元素是一个 dispatch 函数，用来分派 action。"},{header:"4. Reducer 函数",slug:"_4-reducer-函数",content:"Reducer 是一个纯函数，它接受当前状态和一个动作对象，返回新的状态对象。"},{header:"5. 动作对象",slug:"_5-动作对象",content:"Action 是一个包含类型属性的对象，表示要执行什么操作。"},{header:"6. 状态更新逻辑",slug:"_6-状态更新逻辑",content:"Reducer 通常包含多个 case，每个 case 对应一种动作，返回对应动作的新状态。"},{header:"7. 状态不可变性",slug:"_7-状态不可变性",content:"与 Redux 类似，useReducer 要求状态更新时返回一个新对象，而不是修改原状态。"},{header:"8. 性能优化",slug:"_8-性能优化",content:"由于状态不可变性，useReducer 可以用于性能优化，如避免不必要的渲染。"},{header:"9. 自定义 Hook",slug:"_9-自定义-hook",content:"useReducer 可以与 useContext 结合使用，创建复杂的状态逻辑和全局状态管理。"},{header:"10. 与useState比较",slug:"_10-与usestate比较",content:`useState 适合管理简单状态。
useReducer 适合管理复杂状态逻辑，如多子值状态。`},{header:"11. 异步操作",slug:"_11-异步操作",content:`虽然 useReducer 本身不处理异步操作，但可以与 useEffect 结合使用执行异步操作。
import { useReducer, useEffect } from 'react'; function reducer(state, action) { // ...
} function MyComponent() { const [state, dispatch] = useReducer(reducer, { /* 初始状态 */ }); useEffect(() => { // 异步操作 }, [state.value]); // 当state.value变化时执行 // ...
}`},{header:"12. 初始状态作为函数",slug:"_12-初始状态作为函数",content:`如果初始状态需要根据 props 计算，可以传递一个函数给 useReducer。
const initialReducerState = { count: 0 };
function reducer(state, action) { // ...
} function Counter({ initialCount }) { const [state, dispatch] = useReducer( reducer, (initialCount) => ({ count: initialCount }), initialCount ); // ...
}`},{header:"13. 调试",slug:"_13-调试",content:"使用 useReducer 的调试模式可以更容易地跟踪动作和状态的变化。"},{header:"14. 动作组合",slug:"_14-动作组合",content:"可以在 reducer 中组合多个动作，以处理复杂的状态转换。"},{header:"15. 状态提升",slug:"_15-状态提升",content:"对于深层嵌套组件的状态管理，可以考虑将状态提升到共同的父组件中。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useRef.html",title:"",pathLocale:"/",contents:[{header:"useRef",slug:"useref",content:"useRef 是 React 提供的 Hook，用于在函数组件中访问 DOM 元素、管理内部状态或保存任何可变值。"},{header:"1. 基本使用",slug:"_1-基本使用",content:`useRef 创建一个可变的 ref 对象，它在整个组件生命周期内持续存在。
import { useRef } from 'react'; function MyComponent() { const myRef = useRef(null); return <div ref={myRef}>Hello</div>;
}`},{header:"2. 访问 DOM 元素",slug:"_2-访问-dom-元素",content:`useRef 常用于直接访问 DOM 元素，如获取输入字段或按钮。
function TextInput() { const inputRef = useRef(null); function focusInput() { inputRef.current.focus(); } return ( <> <input ref={inputRef} type="text" /> <button onClick={focusInput}>Focus the input</button> </> );
}`},{header:"3. 初始值",slug:"_3-初始值",content:`useRef 可以接受一个初始值，该值将在组件挂载时被设置。
const ref = useRef(initialValue);`},{header:"4. 保存可变值",slug:"_4-保存可变值",content:`useRef 可以用来保存任何可变值，这个值在组件的整个生命周期内持续存在。
function Timer() { const intervalRef = useRef(); function startTimer() { intervalRef.current = setInterval(() => { console.log('Tick'); }, 1000); } function stopTimer() { clearInterval(intervalRef.current); } useEffect(() => { startTimer(); return stopTimer; }, []); return null;
}`},{header:"5. 传递回调函数",slug:"_5-传递回调函数",content:`useRef 可以用于保存回调函数，确保回调函数的稳定性。
function MyComponent() { const handleButtonClick = useRef(() => { console.log('Button clicked'); }); return <button onClick={handleButtonClick.current}>Click me</button>;
}`},{header:"6. 组合使用",slug:"_6-组合使用",content:`useRef 可以与 useEffect 组合使用，以处理副作用。
import { useRef, useEffect } from 'react'; function MyComponent() { const myRef = useRef(null); useEffect(() => { console.log('Ref current:', myRef.current); }, []); return <div ref={myRef}>Hello</div>;
}`},{header:"7. 清除 Ref",slug:"_7-清除-ref",content:`虽然 useRef 创建的 ref 对象在组件卸载后仍然存在，但可以通过手动设置 null 来清除。
function MyComponent() { const myRef = useRef(null); useEffect(() => { return () => { myRef.current = null; }; }, []); return <div ref={myRef}>Hello</div>;
}`},{header:"8. 多个 Ref",slug:"_8-多个-ref",content:"可以在一个组件中使用多个 ref，只要每个 ref 都有唯一的引用。"},{header:"9. 与类组件的区别",slug:"_9-与类组件的区别",content:"在类组件中，通常使用React.createRef创建 ref，而在函数组件中使用useRef。"},{header:"10. Refs 与 Context",slug:"_10-refs-与-context",content:"useRef 可以与 useContext 结合使用，以在组件树中传递 DOM 元素引用。"},{header:"11. Refs 与 forwardRef",slug:"_11-refs-与-forwardref",content:`useRef 可以与 forwardRef 结合使用，以将 ref 传递给子组件。
import React, { forwardRef } from 'react'; const FancyButton = forwardRef((props, ref) => ( <button ref={ref} className="FancyButton"> {props.children} </button>
)); function App() { const buttonRef = useRef(); return <FancyButton ref={buttonRef}>Click me!</FancyButton>;
}`},{header:"12. Refs 与 useImperativeHandle",slug:"_12-refs-与-useimperativehandle",content:"当使用 forwardRef 时，useImperativeHandle 可以用于控制子组件暴露给父组件的实例值。"},{header:"13. 调试",slug:"_13-调试",content:"useRef 可以用于调试目的，如保存组件的特定状态或日志信息。"}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/Hooks/useState.html",title:"",pathLocale:"/",contents:[{header:"useState",slug:"usestate",content:"useState 是最基本的 Hook，它允许你在函数组件中添加局部状态。useState 接受一个参数作为初始状态，并返回一个数组，其中第一个元素是当前状态，第二个元素是一个函数，用于更新状态。"},{header:"1. 基本使用",slug:"_1-基本使用",content:`useState允许你在函数组件中创建一个状态变量和一个更新该状态的函数。
import { useState } from 'react'; function Example() { const [count, setCount] = useState(0); // 初始状态为0 return ( <div> <p>You clicked {count} times</p> <button onClick={() => setCount(count + 1)}>Click me</button> </div> );
}`},{header:"2. 初始状态",slug:"_2-初始状态",content:`你可以传递一个参数给useState作为初始状态值。如果没有提供参数，初始状态将是undefined。
const [state, setState] = useState(initialState);`},{header:"3. 更新状态",slug:"_3-更新状态",content:`useState返回一个数组，其第二个元素是一个函数，用来更新状态。状态更新可能是异步的。
setCount((prevCount) => prevCount + 1);`},{header:"4. 函数作为参数",slug:"_4-函数作为参数",content:`你可以传递一个函数给setState，该函数接收上一个状态作为参数，并返回一个新状态。
setCount((prevCount) => prevCount + 1);`},{header:"5. 多状态变量",slug:"_5-多状态变量",content:`如果你有多个状态需要管理，可以多次调用useState。
const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banana');
const [todos, setTodos] = useState([]);`},{header:"6. 状态惰性初始化",slug:"_6-状态惰性初始化",content:`你可以惰性地初始化状态，即在首次渲染时根据 props 或上下文计算初始状态。
const [state, setState] = useState(() => { const initialState = someExpensiveComputation(props); return initialState;
});`},{header:"7. 使用状态进行数据提交",slug:"_7-使用状态进行数据提交",content:`你可以使用状态来处理表单数据，并在提交时使用其值。
function Form() { const [input, setInput] = useState(''); function handleSubmit(event) { event.preventDefault(); console.log(input); } return ( <form onSubmit={handleSubmit}> <input value={input} onChange={(e) => setInput(e.target.value)} /> <button type="submit">Submit</button> </form> );
}`},{header:"8. 状态与副作用",slug:"_8-状态与副作用",content:"你可以结合useState和useEffect来处理与状态相关的副作用。\nimport { useState, useEffect } from 'react'; function Example() { const [count, setCount] = useState(0); useEffect(() => { document.title = `You clicked ${count} times`; }); return ( <div> <p>You clicked {count} times</p> <button onClick={() => setCount(count + 1)}>Click me</button> </div> );\n}"},{header:"9. 自定义 Hook",slug:"_9-自定义-hook",content:`你可以使用useState来创建自定义 Hook，以在多个组件间复用状态逻辑。
function useFriendStatus(friendID) { const [isOnline, setIsOnline] = useState(null); useEffect(() => { function handleStatusChange(status) { setIsOnline(status.isOnline); } ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange); return () => { ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange); }; }, [friendID]); return isOnline;
}`},{header:"10. 状态的不可变性",slug:"_10-状态的不可变性",content:`在更新状态时，不要直接修改状态对象，而是应该返回一个新对象。
const [user, setUser] = useState({ name: 'Kimi' }); // 正确
setUser((prevUser) => ({ ...prevUser, name: 'New Name' })); // 错误
setUser((user) => ({ ...user, name: 'New Name' }));`},{header:"11. 状态的依赖性",slug:"_11-状态的依赖性",content:`如果你在useEffect中使用状态，请确保将状态作为依赖项，以避免遗漏更新。
useEffect(() => { console.log(count);
}, [count]); // 将count作为依赖项`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E7%BB%84%E4%BB%B6/%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"函数组件",slug:"函数组件",content:"函数组件是 React 16.8 版本引入 Hooks API 后的主要编程范式"},{header:"1. 定义函数组件",slug:"_1-定义函数组件",content:`函数组件是一个使用 JavaScript 函数定义的 React 组件。它接收一个 props 参数，并返回一个 React 元素。 const MyComponent = (props) => { return <div>{props.message}</div>;
};`},{header:"2. 使用 Props",slug:"_2-使用-props",content:`函数组件可以通过 props 接收父组件传递的数据，并在组件内部使用。也可以通过解构赋值的方式从 props 中获取数据。 const MyComponent = ({ message }) => { return <div>{message}</div>;
};`},{header:"3. 使用 Hooks",slug:"_3-使用-hooks",content:"Hooks 是 React 16.8 版本引入的新特性，它允许你在函数组件内部使用状态和其他 React 特性。"},{header:"4. 性能优化",slug:"_4-性能优化",content:`函数组件默认是记忆化的，但可以通过 React.memo 进行进一步优化。 const MyComponent = React.memo(function MyComponent(props) { // 仅当 props 发生变化时才重新渲染
});`},{header:"5. 错误处理",slug:"_5-错误处理",content:`函数组件可以使用 try/catch 语句来捕获和处理错误。也可以使用 Error Boundaries 来捕获函数组件中的错误。 class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, errorInfo) { // 你同样可以将错误日志上报给服务器 console.log(error, errorInfo); } render() { if (this.state.hasError) { // 你可以渲染任何自定义的退路 UI return <h1>Something went wrong.</h1>; } return this.props.children; }
}`},{header:"6. 条件渲染",slug:"_6-条件渲染",content:`在函数组件中，你可以使用 JavaScript 的逻辑来实现条件渲染。例如，你可以使用 if 语句或三元运算符来根据条件渲染不同的元素。 const MyComponent = ({ isLoading, data }) => { if (isLoading) { return <div>Loading...</div>; } if (!data) { return <div>No data available</div>; } return <div>{data}</div>;
};`},{header:"7.列表渲染",slug:"_7-列表渲染",content:`const MyComponent = ({ items }) => { return ( <ul> {items.map((item) => ( <li key={item.id}>{item.text}</li> ))} </ul> );
};`},{header:"8. Fragment 和高阶组件",slug:"_8-fragment-和高阶组件",content:`使用 Fragment 来分组元素，而不添加额外的 DOM 节点。 import React, { Fragment } from 'react'; const MyComponent = () => { return ( <Fragment> <ChildA /> <ChildB /> </Fragment> );
};`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E7%BB%84%E4%BB%B6/%E7%B1%BB%E7%BB%84%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"类组件",slug:"类组件",content:""},{header:"类组件技术点和概念",slug:"类组件技术点和概念",content:"类组件在 React 中是通过 ES6 类定义的，它们提供了更多的功能，如生命周期方法和状态管理。"},{header:"1. 定义类组件",slug:"_1-定义类组件",content:`类组件是通过继承React.Component来定义的。
import React, { Component } from 'react'; class MyComponent extends Component { render() { return <div>Hello, {this.props.name}</div>; }
}`},{header:"2. 构造函数",slug:"_2-构造函数",content:`在构造函数中，可以初始化 state 和绑定方法。
class MyComponent extends Component { constructor(props) { super(props); this.state = { count: 0 }; this.handleClick = this.handleClick.bind(this); } handleClick() { this.setState({ count: this.state.count + 1 }); } render() { return ( <div> <p>You clicked {this.state.count} times</p> <button onClick={this.handleClick}>Click me</button> </div> ); }
}`},{header:"3. render 方法",slug:"_3-render-方法",content:`render方法是类组件中唯一必须实现的方法，它返回要渲染的 React 元素。
render() { return <div>{this.props.message}</div>;
}`},{header:"4. 生命周期方法",slug:"_4-生命周期方法",content:"类组件有多个生命周期方法，可以用来执行副作用操作或响应组件状态和 props 的变化。"},{header:"4.1 componentDidMount",slug:"_4-1-componentdidmount",content:`在组件挂载后执行，通常用于执行 DOM 操作或数据获取。
componentDidMount() { console.log('Component is mounted');
}`},{header:"4.2 componentDidUpdate",slug:"_4-2-componentdidupdate",content:`在组件更新后执行，可以用来处理 DOM 或执行副作用。
componentDidUpdate(prevProps, prevState) { if (this.props.message !== prevProps.message) { console.log('Message has changed'); }
}`},{header:"4.3 componentWillUnmount",slug:"_4-3-componentwillunmount",content:`在组件卸载前执行，通常用于清理操作，如取消网络请求或清除定时器。
componentWillUnmount() { console.log('Component will unmount');
}`},{header:"5. 状态管理",slug:"_5-状态管理",content:`类组件通过this.state来管理内部状态。
this.state = { count: 0 }; // 更新状态
this.setState({ count: this.state.count + 1 });`},{header:"6. 默认 Props 和 PropTypes",slug:"_6-默认-props-和-proptypes",content:`可以使用defaultProps和PropTypes来设置默认 props 和进行 props 类型检查。
MyComponent.propTypes = { message: PropTypes.string.isRequired
}; MyComponent.defaultProps = { message: 'Hello World'
};`},{header:"7. 性能优化",slug:"_7-性能优化",content:`可以使用shouldComponentUpdate来进行性能优化，避免不必要的渲染。
shouldComponentUpdate(nextProps, nextState) { return this.props.message !== nextProps.message;
}`},{header:"8. Context",slug:"_8-context",content:`类组件可以使用contextType来消费 context。
static contextType = MyContext; render() { const value = this.context; return <div>{value}</div>;
}`},{header:"9. Refs",slug:"_9-refs",content:`类组件可以使用React.createRef来创建 refs，并可以通过this.ref.current来访问 DOM 元素或组件实例。
constructor(props) { super(props); this.myRef = React.createRef();
} render() { return <div ref={this.myRef}>Hello</div>;
}`},{header:"10. 错误处理",slug:"_10-错误处理",content:`类组件可以使用静态方法getDerivedStateFromError和componentDidCatch来捕获和处理错误。
static getDerivedStateFromError(error) { return { hasError: true };
} componentDidCatch(error, info) { // 错误处理逻辑
}`},{header:"11. 条件渲染和列表渲染",slug:"_11-条件渲染和列表渲染",content:`与函数组件类似，类组件也可以进行条件渲染和列表渲染。
render() { const { items } = this.props; return ( <ul> {items.map(item => ( <li key={item.id}>{item.text}</li> ))} </ul> );
}`}]},{path:"/web/React/React%E6%8F%90%E5%8D%87/%E7%BB%84%E4%BB%B6/%E7%BB%84%E4%BB%B6%E7%9A%84%E7%BB%84%E5%90%88.html",title:"",pathLocale:"/",contents:[{header:"组件的组合",slug:"组件的组合",content:"组件组合是 React 中的核心概念之一，它允许你将复杂的 UI 分解成独立可复用的组件。"},{header:"1. 组合基础",slug:"_1-组合基础",content:`在 React 中，组件可以嵌套组合，子组件可以接收来自父组件的 props。
function Welcome(props) { return <h1>Hello, {props.name}</h1>;
} function App() { return <Welcome name="Kimi" />;
}`},{header:"2. Props 传递",slug:"_2-props-传递",content:`父组件可以通过 props 向子组件传递数据。
function Avatar(props) { return ( <img src={props.user.avatarUrl} alt={props.user.name} /> );
} function UserInfo(props) { return ( <div> <Avatar user={props.user} /> <h2>{props.user.name}</h2> </div> );
}`},{header:"3. 子组件组合",slug:"_3-子组件组合",content:`子组件可以进一步组合更小的组件。
function Comment(props) { return ( <div className="Comment"> <Avatar user={props.author} /> <div className="Comment-content"> <div className="username">{props.author.name}</div> <div className="text">{props.text}</div> </div> </div> );
}`},{header:"4. 条件渲染",slug:"_4-条件渲染",content:`组件可以根据条件渲染不同的子组件。
function App() { const [isLoggedIn, setIsLoggedIn] = useState(false); function handleLoginClick() { setIsLoggedIn(true); } return ( <div> {isLoggedIn ? <Dashboard /> : <Login />} <button onClick={handleLoginClick}>Log in</button> </div> );
}`},{header:"5. 列表渲染",slug:"_5-列表渲染",content:`父组件可以使用 JavaScript 的map方法渲染子组件列表。
function NumberList(props) { const numbers = props.numbers; return ( <ul> {numbers.map((number) => ( <ListItem key={number.id} value={number} /> ))} </ul> );
}`},{header:"6. Fragments",slug:"_6-fragments",content:`使用React.Fragment可以组合多个子组件而不添加额外的 DOM 元素。
import React, { Fragment } from 'react'; function Dialog({ children, title }) { return ( <Fragment> <h1>{title}</h1> <p>{children}</p> </Fragment> );
}`},{header:"7. 高阶组件（HOC）",slug:"_7-高阶组件-hoc",content:`高阶组件是一个函数，它接受一个组件并返回一个新的组件。
function withExtraInfo(WrappedComponent) { return class extends React.Component { render() { const extraInfo = someFunctionToCollectExtraInfo(); return ( <WrappedComponent {...this.props} extraInfo={extraInfo} /> ); } };
}`},{header:"8. Context API",slug:"_8-context-api",content:`Context 允许你在组件树中传递值，而不必在每个层级手动传递 props。
const MyContext = React.createContext(defaultValue); function App() { return ( <MyContext.Provider value={/* some value */}> <ChildComponent /> </MyContext.Provider> );
} function ChildComponent() { return ( <MyContext.Consumer> {value => /* 渲染一些东西 */} </MyContext.Consumer> );
}`},{header:"9. 组件的封装和复用",slug:"_9-组件的封装和复用",content:`你应该构建可复用的组件，这样你可以在不同的项目中使用它们。
function Button({ onClick, children }) { return <button onClick={onClick}>{children}</button>;
} function App() { return <Button onClick={() => alert('Clicked!')}>Click me</Button>;
}`},{header:"10. 组件的拆分",slug:"_10-组件的拆分",content:`将大组件拆分为更小的子组件，可以提高代码的可维护性和可读性。
// 大组件
function Post({ user, content }) { return ( <article> <UserInfo user={user} /> <Content content={content} /> </article> );
} // 小组件
function UserInfo({ user }) { // ...
} function Content({ content }) { // ...
}`},{header:"11. 组件之间的通信",slug:"_11-组件之间的通信",content:"组件之间可以通过 props、state 提升、Context 或状态管理库（如 Redux）进行通信。"},{header:"12. 组件的性能优化",slug:"_12-组件的性能优化",content:`通过避免不必要的渲染和使用React.memo、useMemo、useCallback等进行性能优化。
组件组合是 React 中最重要的概念之一，它使得构建大型应用程序变得简单和可维护。通过合理地组合组件，你可以创建出既强大又灵活的用户界面。`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0/%E6%8C%87%E5%AE%9A%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"指定类型参数",slug:"指定类型参数",content:"当使用泛型时，有时可能想要显式指定泛型参数的类型，而不是让编译器去推断。这通常在编译器无法从上下文中推断出类型，或者你想要明确你的意图时发生。"},{header:"指定泛型参数",slug:"指定泛型参数",content:`你可以通过在泛型函数、类或接口的后面添加尖括号 <> 并指定类型参数来实现。我们显式地告诉 identity 函数，我们想要使用 string 类型的泛型参数。 function identity<T>(arg: T): T { return arg;
} // 显式指定泛型参数为 string
const result = identity<string>("Hello, World!");`},{header:"在数组中指定泛型参数",slug:"在数组中指定泛型参数",content:'let list: Array<string> = ["Alice", "Bob"];'},{header:"在类中指定泛型参数",slug:"在类中指定泛型参数",content:`class GenericNumber<T> { zeroValue: T; add: (x: T, y: T) => T;
} let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));`},{header:"在接口中指定泛型参数",slug:"在接口中指定泛型参数",content:`interface GenericIdentityFn<T> { (arg: T): T;
} let myIdentity: GenericIdentityFn<string> = (arg) => arg;`},{header:"在条件类型中指定泛型参数",slug:"在条件类型中指定泛型参数",content:`type Compare<T, U> = T extends U ? true : false; type IsNumber = Compare<123, number>; // true
type IsString = Compare<123, string>; // false`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0/%E6%8E%A8%E6%96%AD.html",title:"",pathLocale:"/",contents:[{header:"推断",slug:"推断",content:"泛型推断是指编译器根据上下文环境自动确定泛型参数类型的过程。这使得开发者在调用泛型函数或构造泛型类型时，不必显式指定泛型参数，从而简化了代码。"},{header:"泛型推断的基本例子",slug:"泛型推断的基本例子",content:`在这个例子中，即使没有显式指定泛型参数，TypeScript 编译器也能够根据传递给 identity 函数的参数类型，推断出 T 应该是 number 类型或 string 类型。 function identity<T>(arg: T): T { return arg;
} const result = identity(42); // TypeScript 推断 T 为 number
const strResult = identity("Hello, World!"); // TypeScript 推断 T 为 string`},{header:"泛型推断在对象中的应用",slug:"泛型推断在对象中的应用",content:`function createObject<T>(key: T, value: T): { [K in T]: T } { return { [key]: value };
} const obj = createObject("key", "value"); // TypeScript 推断 T 为 string`},{header:"泛型类中的推断",slug:"泛型类中的推断",content:`class GenericClass<T> { value: T; constructor(value: T) { this.value = value; } getValue(): T { return this.value; }
} const genericObj = new GenericClass(123); // TypeScript 推断 T 为 number
const genericStrObj = new GenericClass("Hello"); // TypeScript 推断 T 为 string`},{header:"泛型约束与推断",slug:"泛型约束与推断",content:`泛型约束可以用来限制泛型参数的类型，同时也可以影响泛型推断 interface Lengthwise { length: number;
} function loggingIdentity<T extends Lengthwise>(arg: T): T { // Now we know it has a .length property, no more error console.log(arg.length); return arg;
}
// TypeScript 推断 T 为 string
const result = loggingIdentity("Hello, World!");
// Error: number does not satisfy the 'Lengthwise' constraint
const noResult = loggingIdentity(42);`}]},{path:"/web/Ts/%E5%85%B3%E4%BA%8E%E5%87%BD%E6%95%B0/%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0/%E7%BA%A6%E6%9D%9F%E6%9D%A1%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"约束条件",slug:"约束条件",content:"泛型约束条件（Generic Constraints）允许你限制泛型参数可以是哪些类型。这通常通过使用 extends 关键字来实现，它指定了泛型参数必须符合特定的类型或接口。"},{header:"泛型约束的基本使用",slug:"泛型约束的基本使用",content:`泛型约束通常用于函数或类中，以确保泛型参数满足特定的条件。例如，你可能有一个函数，它需要操作具有 .length 属性的对象。T extends Lengthwise 指定了泛型参数 T 必须实现 Lengthwise 接口，即必须具有 length 属性。 interface Lengthwise { length: number;
} function loggingIdentity<T extends Lengthwise>(arg: T): T { console.log(arg.length); // 现在我们知道它具有.length属性，因此没有错误 return arg;
}`},{header:"使用类型参数作为约束",slug:"使用类型参数作为约束",content:`可以使用另一个类型参数作为当前类型参数的约束。这在你需要基于一个类型参数定义另一个类型参数时非常有用。Key extends keyof T 指定了 Key 必须是 T 的键之一，这样可以确保 obj[key] 是合法的访问 function getProperty<T, Key extends keyof T>(obj: T, key: Key): T[Key] { return obj[key];
}`},{header:"类型约束的高级用法",slug:"类型约束的高级用法",content:"泛型约束不仅可以用于接口，还可以用于类型别名、交叉类型等更复杂的类型表达式。例如，你可以创建一个类型别名，它将数组中的元素类型设为只读，但只有当该类型是数组时才生效。在这个类型别名中，如果 T 是数组类型，那么结果类型将是数组元素类型的只读版本。 type ReadOnlyIfArray<T> = T extends any[] ? Readonly<T[number]> : T;"}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/Array%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"Array 类型",slug:"array-类型",content:"可以使用泛型来定义数组类型，这样可以确保数组中的元素都是相同的类型。这可以通过两种方式实现：使用泛型接口或泛型类型别名。"},{header:"使用泛型接口定义数组类型",slug:"使用泛型接口定义数组类型",content:`interface ArrayOfNumbers { data: number[];
} interface ArrayOfUsers { data: { id: number; name: string; }[];
}`},{header:"使用泛型类型别名定义数组类型",slug:"使用泛型类型别名定义数组类型",content:`type ArrayOfNumbers = number[]; type ArrayOfUsers = { id: number; name: string;
}[]; const numbers: ArrayOfNumbers = [1, 2, 3];
const users: ArrayOfUsers = [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" },
];`},{header:"使用泛型类定义数组类型",slug:"使用泛型类定义数组类型",content:`class GenericArray<T> { items: T[]; constructor(items: T[]) { this.items = items; } addItem(item: T) { this.items.push(item); }
} const strings = new GenericArray<string>(["hello", "world"]);
strings.addItem("typescript"); const people = new GenericArray<{ id: number; name: string }>([ { id: 1, name: "Alice" }, { id: 2, name: "Bob" },
]);
people.addItem({ id: 3, name: "Carol" });`},{header:"使用泛型约束定义数组类型",slug:"使用泛型约束定义数组类型",content:`interface HasName { name: string;
} function printNames<T extends HasName>(users: T[]) { users.forEach((user) => console.log(user.name));
} printNames([{ name: "Alice" }, { name: "Bob" }]);`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/ReadonlyArray%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"ReadonlyArray 类型",slug:"readonlyarray-类型",content:"ReadonlyArray 是一种内置的泛型类型，它表示一个只读的数组。这意味着数组的元素可以被读取，但不能被修改（即不能添加、删除或修改元素）。这与 JavaScript 中的 Object.freeze() 方法类似，但专门用于数组。"},{header:"使用 ReadonlyArray",slug:"使用-readonlyarray",content:`ReadonlyArray 可以用于确保数组不会被修改。这对于防止数据被意外改变非常有用，特别是在函数式编程中。 let readOnlyArray: ReadonlyArray<number> = [1, 2, 3]; // 以下操作都是不允许的，会导致编译错误
// readOnlyArray[0] = 10;
// readOnlyArray.push(4);
// readOnlyArray.pop();`},{header:"定义泛型对象类型时使用 ReadonlyArray",slug:"定义泛型对象类型时使用-readonlyarray",content:`type User = { readonly id: number; readonly name: string;
}; type UserArray = { users: ReadonlyArray<User>;
}; const users: UserArray = { users: [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" }, ],
}; // 以下操作都是不允许的，会导致编译错误
// users.users.push({ id: 3, name: 'Carol' });
// users.users[0] = { id: 1, name: 'Alice Updated' };`},{header:"使用泛型与 ReadonlyArray",slug:"使用泛型与-readonlyarray",content:`type ReadOnlyArray<T> = ReadonlyArray<T>; const readOnlyNumbers: ReadOnlyArray<number> = [1, 2, 3];
const readOnlyUsers: ReadOnlyArray<User> = [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" },
]; // 以下操作都是不允许的，会导致编译错误
// readOnlyNumbers.push(4);
// readOnlyUsers[0] = { id: 1, name: 'Alice Updated' };`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/readonly%E5%85%83%E7%BB%84%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"Readonly 元组类型",slug:"readonly-元组类型",content:""},{header:"定义 Readonly 元组类型",slug:"定义-readonly-元组类型",content:`// 定义一个只读元组类型
type ReadonlyTuple = Readonly<[number, string, boolean]>; const readonlyTuple: ReadonlyTuple = [42, "hello", true]; // 以下操作都是不允许的，会导致编译错误
// readonlyTuple[0] = 1;
// readonlyTuple.push(5);`},{header:"泛型 Readonly 元组类型",slug:"泛型-readonly-元组类型",content:`// 定义一个泛型只读元组类型
type GenericReadonlyTuple<T extends readonly unknown[]> = Readonly<T>; // 使用泛型只读元组类型
const genericReadonlyTuple: GenericReadonlyTuple<[number, string]> = [ 42, "hello",
]; // 以下操作都是不允许的，会导致编译错误
// genericReadonlyTuple[0] = 1;
// genericReadonlyTuple.push("world");`},{header:"在对象类型中使用 Readonly 元组类型",slug:"在对象类型中使用-readonly-元组类型",content:`// 定义一个包含只读元组属性的对象类型
type ObjectWithReadonlyTuple = { readonly data: [number, string];
}; const obj: ObjectWithReadonlyTuple = { data: [1, "example"],
}; // 以下操作都是不允许的，会导致编译错误
// obj.data = [2, "another example"];
// obj.data[0] = 2;`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E5%85%83%E7%BB%84%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"元组类型",slug:"元组类型",content:"元组（Tuple）类型是一种有用的类型，它允许你定义一个具有固定数量和类型的元素的数组，但各个元素的类型不必相同。元组类型对于处理具有不同类型元素的数组特别有用，例如，你可以使用元组来表示具有特定结构的数据库查询结果或函数返回值。"},{header:"定义泛型元组类型",slug:"定义泛型元组类型",content:`泛型元组类型可以让你创建具有不同类型元素的数组，同时保持类型的灵活性。GenericTuple<T> 是一个泛型元组类型，它定义了一个包含三个相同类型 T 的元素的数组。MixedTuple 是一个具有不同类型元素的元组类型。 // 定义一个泛型元组类型
type GenericTuple<T> = [T, T, T]; // 使用泛型元组类型
const tuple: GenericTuple<number> = [1, 2, 3]; // OK
const tuple2: GenericTuple<string> = ["a", "b", "c"]; // OK // 定义一个具有不同类型元素的泛型元组类型
type MixedTuple = [number, string, boolean]; const mixedTuple: MixedTuple = [42, "Hello", true]; // OK`},{header:"泛型对象类型中的元组类型",slug:"泛型对象类型中的元组类型",content:`可以在对象类型中使用元组类型作为属性，或者作为函数的参数和返回值。定义一个泛型接口，包含一个元组类型的属性。TupleObject<T> 是一个泛型接口，它定义了一个名为 tuple 的属性，该属性是一个包含两个相同类型 T 的元素的元组。getTuple 函数接受两个相同类型的参数，并返回一个包含这两个参数的元组。 interface TupleObject<T> { tuple: [T, T];
} // 使用泛型接口
const tupleObject: TupleObject<number> = { tuple: [10, 20],
}; // 定义一个函数，返回一个元组类型
function getTuple<T>(a: T, b: T): [T, T] { return [a, b];
} const result = getTuple<number>(1, 2); // [1, 2]
const result2 = getTuple<string>("hello", "world"); // ['hello', 'world']`}]},{path:"/web/Ts/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B/%E6%B3%9B%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B.html",title:"",pathLocale:"/",contents:[{header:"泛型对象类型",slug:"泛型对象类型",content:"泛型允许你创建可重用的组件，这意味着你可以为函数、接口和类创建通用的定义，然后在使用时指定具体的类型。泛型在定义对象类型时非常有用，因为它们允许你定义具有一个或多个任意类型属性的对象。"},{header:"定义泛型接口",slug:"定义泛型接口",content:`可以使用泛型来定义接口，这样可以确保对象的类型在编译时就是正确的。 interface GenericObject<T> { id: T; name: string;
} const user: GenericObject<number> = { id: 1, name: "Alice",
}; const product: GenericObject<string> = { id: "P123", name: "Laptop",
};`},{header:"泛型类型别名",slug:"泛型类型别名",content:`type GenericObject<T> = { id: T; name: string;
}; const user: GenericObject<number> = { id: 1, name: "Alice",
}; const product: GenericObject<string> = { id: "P123", name: "Laptop",
};`},{header:"使用泛型类",slug:"使用泛型类",content:`class ItemStorage<T> { items: T[]; constructor(items: T[]) { this.items = items; } addItem(item: T) { this.items.push(item); }
} const numbers = new ItemStorage<number>([1, 2, 3]);
numbers.addItem(4); const strings = new ItemStorage<string>(["hello", "world"]);
strings.addItem("typescript");`},{header:"泛型约束",slug:"泛型约束",content:`interface HasName { name: string;
} function printName<T extends HasName>(item: T) { console.log(item.name);
} printName({ name: "Alice" });
printName({ name: "Book" });`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%8F%92%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"插件",slug:"插件",content:""},{header:"unplugin-auto-import -D",slug:"unplugin-auto-import-d",content:`解决问题: 在组件开发中无需每次都引入 import {ref, reactive ...} from，尤其是特别多的时候；但是 ts 的话还有一些配置需要去配，具体需要百度了。 // vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite"; export default defineConfig({ plugins: [ vue(), AutoImport({ imports: ["vue", "vue-router"], }), ],
});`},{header:"pinia-plugin-persist --save",slug:"pinia-plugin-persist-save",content:"解决问题: 持久化 pinia"}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/class%E4%B8%8Estyle%E7%9A%84%E7%BB%91%E5%AE%9A.html",title:"",pathLocale:"/",contents:[{header:"class 与 style 的绑定",slug:"class-与-style-的绑定",content:"类（class）和样式（style）的绑定是模板中常见的动态渲染需求。Vue 提供了几种方式来动态地绑定类和样式。"},{header:"类的绑定",slug:"类的绑定",content:""},{header:"对象语法",slug:"对象语法",content:`active 类将根据 isActive 的值动态添加或移除，text-danger 类将根据 hasError 的值动态添加或移除。 <!-- 模板 -->
<div :class="{ active: isActive, 'text-danger': hasError }"></div>
// 脚本
export default { data() { return { isActive: true, hasError: false, }; },
};`},{header:"数组语法",slug:"数组语法",content:`activeClass 和 errorClass 是计算属性，它们返回的字符串将作为类名动态添加到元素上。 <!-- 模板 -->
<div :class="[activeClass, errorClass]"></div>
// 脚本
export default { computed: { activeClass() { return this.isActive ? "active" : ""; }, errorClass() { return this.hasError ? "text-danger" : ""; }, }, data() { return { isActive: true, hasError: false, }; },
};`},{header:"样式的绑定",slug:"样式的绑定",content:""},{header:"对象语法",slug:"对象语法-1",content:`文本颜色将根据 activeColor 的值动态设置，字体大小将根据 fontSize 的值动态设置。 <!-- 模板 -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
// 脚本
export default { data() { return { activeColor: "red", fontSize: 30, }; },
};`},{header:"数组语法",slug:"数组语法-1",content:`<!-- 模板 -->
<div :style="[baseStyles, overrideStyles]"></div>
// 脚本
export default { data() { return { overrideStyles: { color: "blue", }, }; }, computed: { baseStyles() { return { fontSize: "16px", fontFamily: "Arial", }; }, },
};`},{header:"自动添加前缀",slug:"自动添加前缀",content:`Vue 的 :style 绑定还支持自动添加浏览器前缀。display: flex 样式将自动添加 -webkit- 前缀，以确保在旧版浏览器中也能正常工作。 <!-- 模板 -->
<div :style="{ display: 'flex', WebkitDisplay: 'flex' }"></div>`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/props%E4%B8%8Eemit.html",title:"",pathLocale:"/",contents:[{header:"props 与 emit",slug:"props-与-emit",content:"在 Vue 3 中，组件之间的通信是非常重要的，尤其是父子组件之间的数据传递。props 和 emit 是实现这种通信的两个核心机制。"},{header:"# Props",slug:"props",content:"props 是父组件向子组件传递数据的一种方式。在 Vue 3 中，你可以使用 defineProps 来定义组件接收的 props。"},{header:"定义 Props",slug:"定义-props",content:`在 Vue 3 中，你可以通过 defineProps 辅助函数来定义组件接收的 Props。 import { defineProps } from "vue"; const props = defineProps({ message: String, count: Number, user: { type: Object, required: true, },
});`},{header:"传递 Props",slug:"传递-props",content:`在父组件中，你可以通过在子组件标签上使用 v-bind 或简写为 : 来传递 Props。 <template> <ChildComponent :message="greeting" :count="times" :user="userObj" />
</template> <script>
import ChildComponent from "./ChildComponent.vue"; export default { components: { ChildComponent, }, data() { return { greeting: "Hello", times: 3, userObj: { name: "Alice" }, }; },
};
<\/script>`},{header:"Emit",slug:"emit",content:"emit 是子组件向父组件发送消息的一种方式。"},{header:"使用 defineEmits",slug:"使用-defineemits",content:'在 Vue 3 的 setup() 函数中，你可以使用 defineEmits 函数来定义要发出的自定义事件。 import { defineComponent, defineEmits } from "vue"; export default defineComponent({ setup() { const emit = defineEmits(["customEvent"]); const handleClick = () => { emit("customEvent", "Hello from child!"); }; return { handleClick, }; }, template: ` <button @click="handleClick">Click me</button> `,\n});'},{header:"在父组件中监听事件",slug:"在父组件中监听事件",content:`你可以使用 v-on 指令（或简写为 @）来监听子组件发出的自定义事件。 <template> <div> <ChildComponent @customEvent="handleCustomEvent" /> </div>
</template> <script>
import ChildComponent from "./ChildComponent.vue"; export default { components: { ChildComponent, }, methods: { handleCustomEvent(message) { console.log(message); // 输出: Hello from child! }, },
};
<\/script>`},{header:"注意事项",slug:"注意事项",content:`不要直接修改 Props：虽然 Vue 允许在子组件内部访问到 Props 的原始引用，但是按照 Vue 的最佳实践，你应该避免直接修改 Props。
动态 Props：如果需要根据条件传递不同的 Props，可以使用计算属性来动态地决定传递的值。
Prop 的类型和验证：尽量使用类型注解来提高代码的可读性和可维护性，并且通过验证器来确保 Props 的合法性。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E4%BC%A0%E9%80%8FAttribute%E7%9A%84%E5%8F%96%E6%B6%88%E4%B8%8EuseAttrs.html",title:"",pathLocale:"/",contents:[{header:"传透 Attribute 的取消与 useAttrs",slug:"传透-attribute-的取消与-useattrs",content:"在 Vue 3 中，组件可以接收来自父组件的附加属性（称为“透传 Attributes”），这些属性没有在子组件的 props 中声明。Vue 3 提供了几种处理这些透传属性的方法。"},{header:"透传 Attributes",slug:"透传-attributes",content:"透传 Attributes 是指那些传递给组件但没有被声明为 props 或 emits 的 attribute 或 v-on 事件监听器。最常见的例子包括 class、style 和 id。"},{header:"单个根节点",slug:"单个根节点",content:`当组件以单个元素为根节点时，透传的 attribute 会自动应用到该根元素上。 <!-- 子组件模板 -->
<template> <button>Click Me</button>
</template> <!-- 父组件模板 -->
<template> <my-button class="large" />
</template>
<!-- 渲染结果： -->
<button class="large">Click Me</button>`},{header:"禁用属性透传",slug:"禁用属性透传",content:`在某些情况下，你可能希望禁用属性透传。这可以通过在子组件的 inheritAttrs 选项中设置 false 来实现。 <!-- 子组件模板 -->
<template> <button>Click Me</button>
</template> <script>
export default { inheritAttrs: false,
};
<\/script> <!-- 父组件模板 -->
<template> <my-button class="large" />
</template>
<!-- 渲染结果： -->
<button>Click Me</button>`},{header:"多根节点",slug:"多根节点",content:`对于有多个根节点的组件，Vue 不会自动透传 attribute。如果未显式绑定 $attrs，Vue 会发出警告。 <template> <header>...</header> <main v-bind="$attrs">...</main> <footer>...</footer>
</template>`},{header:"useAttrs",slug:"useattrs",content:"Vue 3 引入了 useAttrs API，允许你在 <script setup> 中访问透传的 attribute。"},{header:"使用 useAttrs",slug:"使用-useattrs",content:`<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
<\/script> 在非 <script setup> 环境中，attrs 会作为 setup() 函数的上下文参数提供。这样，所有透传的 attribute 都会被应用到 <div> 上。 <script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();
<\/script> <template> <div v-bind="attrs">自定义内容</div>
</template>`},{header:"注意事项",slug:"注意事项",content:`attrs 对象不是响应式的，不能用于设置数据监听。
如果需要响应性，应使用 props。
可以使用 onUpdated 生命周期钩子来在每次更新时执行副作用。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E4%BE%A6%E5%90%AC%E5%99%A8watch%E4%B8%8EwatchEffect.html",title:"",pathLocale:"/",contents:[{header:"侦听器 watch 与 watchEffect",slug:"侦听器-watch-与-watcheffect",content:"在 Vue 3 中，watch 和 watchEffect 是用于响应式侦听的 API，它们允许你对响应式数据的变化做出反应。"},{header:"watchEffect",slug:"watcheffect",content:"watchEffect 侦听器在被创建时立即执行，并在其依赖的响应式数据变化时重新执行。任何 someReactiveSource 或 anotherReactiveSource 的变化都会触发回调函数的重新执行。"},{header:"基本用法",slug:"基本用法",content:`import { watchEffect } from "vue"; watchEffect(() => { const result = someReactiveSource.value * anotherReactiveSource.value; console.log(result);
});`},{header:"特点",slug:"特点",content:`自动追踪依赖：watchEffect 会自动追踪其回调函数中用到的响应式数据。
立即执行：watchEffect 创建时会立即执行一次回调函数。
无参访问：回调函数内部无法访问侦听的数据变化。`},{header:"watch",slug:"watch",content:'watch 侦听器用于更精细的侦听，允许你指定具体的数据源和选项。 import { watch } from "vue"; watch( () => source, (newValue, oldValue) => { console.log(`值从 ${oldValue} 改变到 ${newValue}`); }\n);'},{header:"特点",slug:"特点-1",content:'明确侦听：你可以指定一个或多个具体的响应式数据源进行侦听。\n深入侦听：通过传递选项，可以深入侦听到对象的每个属性。\n访问变化数据：回调函数提供了新旧值，以及侦听的数据变化。 <script setup>\nimport { ref, watch } from "vue"; const state = ref(0); watch(state, (newValue, oldValue) => { console.log(`新值：${newValue}, 旧值：${oldValue}`);\n}); // 深入侦听一个对象\nconst stateObject = ref({ count: 0 }); watch( () => stateObject.value.count, (newValue, oldValue) => { console.log(`计数变化：从 ${oldValue} 到 ${newValue}`); }, { deep: true, }\n);\n<\/script> <template> <button @click="state.value++">增加</button> <button @click="stateObject.value.count++">计数增加</button>\n</template>'},{header:"选择 watch 还是 watchEffect？",slug:"选择-watch-还是-watcheffect",content:`如果你只需要执行副作用而不需要获取新旧值，使用 watchEffect。
如果你需要获取变化的数据或者执行更复杂的逻辑，使用 watch。
watchEffect 更适合用于组件的初始化或全局状态的侦听。
watch 更适合用于细粒度的侦听，例如表单数据的验证。`},{header:"注意事项",slug:"注意事项",content:`避免在 watchEffect 中进行重计算或高成本操作，因为它会无条件地重新执行。
使用 watch 时，合理利用 immediate 选项来决定是否在侦听开始时立即触发回调。
考虑使用 deep 选项来侦听复杂数据结构的深层变化。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%9F%BA%E7%A1%80ref%E4%B8%8Ereactive.html",title:"",pathLocale:"/",contents:[{header:"响应式基础 ref 与 reactive",slug:"响应式基础-ref-与-reactive",content:"响应式系统是使用 Proxy 实现的，它提供了更细粒度的响应式控制。Vue 3 引入了 ref 和 reactive 两个 API 来创建响应式数据。"},{header:"ref",slug:"ref",content:`ref 用于将一个普通的 JavaScript 值转换为响应式值。它主要用于处理基础类型数据（如字符串、数字等）。当在模板中使用 ref 时，Vue 会自动解包.value，所以你可以直接使用 count 而不是 count.value。
import { ref } from "vue"; const count = ref(0); // 创建一个响应式的数字
console.log(count.value); // 输出 0 count.value++; // 修改响应式数据
console.log(count.value); // 输出 1`},{header:"reactive",slug:"reactive",content:`reactive 用于将一个 JavaScript 对象转换为响应式对象。它接受一个普通对象并返回该对象的响应式代理。reactive 返回的对象是原对象的响应式代理，它包含原对象的所有属性和方法，但不是原对象本身。
import { reactive } from "vue"; const state = reactive({ count: 0, name: "Vue",
}); console.log(state.count); // 输出 0
console.log(state.name); // 输出 'Vue' state.count++; // 修改响应式对象的属性
console.log(state.count); // 输出 1`},{header:"注意事项",slug:"注意事项",content:`不要直接修改 ref 或 reactive 对象的.value 属性，因为这会破坏其响应性。
使用 ref 和 reactive 时，Vue 3 的响应式系统会自动追踪依赖和变更，无需手动操作。
在组件内部，通常使用 setup 函数来定义响应式数据。`},{header:"使用场景",slug:"使用场景",content:`使用 ref 来处理单个数据项，如状态标志、计数器等。
使用 reactive 来处理复杂的数据结构，如对象或数组。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E6%8F%92%E6%A7%BD%E7%9A%84%E7%94%A8%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"插槽 v-model:default={...}的用法",slug:"插槽-v-model-default-的用法",content:"Vue 3 引入了对组件插槽和 v-model 的一些改进，使得内容分发和双向数据绑定更加灵活和强大。"},{header:"默认插槽",slug:"默认插槽",content:`默认插槽是最常见的一种插槽，没有指定名称。 <!-- 子组件 -->
<template> <div> <slot>默认内容</slot> </div>
</template> <!-- 父组件 -->
<child-component> <p>这是要插入的内容</p>
</child-component>`},{header:"具名插槽",slug:"具名插槽",content:`具名插槽通过 name 属性定义，允许一个组件有多个插槽。 <!-- 子组件 -->
<template> <div> <header> <slot name="header"></slot> </header> <main> <slot></slot> <!-- 默认插槽 --> </main> <footer> <slot name="footer"></slot> </footer> </div>
</template> <!-- 父组件 -->
<child-component> <template v-slot:header> <h1>头部内容</h1> </template> <template v-slot:footer> <p>底部内容</p> </template>
</child-component>`},{header:"作用域插槽",slug:"作用域插槽",content:`作用域插槽可以让插槽的内容访问子组件中的数据。 <!-- 子组件 -->
<template> <ul> <li v-for="item in items"> <slot :item="item">{{ item.defaultText }}</slot> </li> </ul>
</template>
<!-- 父组件 -->
<child-component> <template v-slot:default="slotProps"> <span>{{ slotProps.item.text }}</span> </template>
</child-component>`},{header:"v-model",slug:"v-model",content:`Vue 3 的 v-model 现在使用 modelValue 作为 prop 名称，以及 update:modelValue 作为事件名称。 <!-- 子组件 -->
<template> <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template> <script>
export default { props: ["modelValue"], emits: ["update:modelValue"],
};
<\/script> <!-- 父组件 -->
<child-component v-model="parentValue"></child-component>`},{header:"v-model:default",slug:"v-model-default",content:`Vue 3 引入了 v-model:default，允许在默认插槽中使用 v-model。 <!-- 子组件 -->
<template> <div> <slot :modelValue="modelValue" @update:modelValue="modelValue = $event" ></slot> </div>
</template> <script>
export default { props: ["modelValue"], emits: ["update:modelValue"],
};
<\/script> <!-- 父组件 -->
<child-component v-model:default="parentValue"></child-component>`},{header:"自定义 v-model",slug:"自定义-v-model",content:`可以通过 defineModel 方法自定义 v-model 的 prop 和事件。 <!-- 子组件 -->
<script setup>
const model = defineModel({ prop: "customValue", event: "customEvent",
});
<\/script> <template> <input :value="model.value" @input="model.update($event.target.value)" />
</template>
<!-- 父组件 -->
<child-component v-model:customValue="parentValue"></child-component>`},{header:"v-model 参数",slug:"v-model-参数",content:`可以为 v-model 传递参数来自定义绑定的 prop。 <child-component v-model:title="pageTitle" />
<!-- 相当于: -->
<child-component :title="pageTitle" @update:title="pageTitle = $event" />`},{header:"多个 v-model 绑定",slug:"多个-v-model-绑定",content:'可以在同一个组件上使用多个 v-model。 <child-component v-model:title="pageTitle" v-model:content="pageContent" />'},{header:"v-model 修饰符",slug:"v-model-修饰符",content:'Vue 3 的 v-model 支持修饰符，如 .lazy、.number 和 .trim。 <child-component v-model.lazy="parentValue" />'}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93(v-if%E4%B8%8Ev-for%E7%9A%84%E4%BC%98%E5%85%88%E7%BA%A7).html",title:"",pathLocale:"/",contents:[{header:"条件渲染(v-if 与 v-for 的优先级)",slug:"条件渲染-v-if-与-v-for-的优先级",content:`v-if 和 v-for 都是常用的指令，用于条件渲染和列表渲染。它们在使用时有明确的优先级规则:
v-for 有比 v-if 更高的优先级。
当 v-if 和 v-for 同时出现在同一个元素上时，v-for 会被首先处理。`},{header:"为什么 v-for 优先级更高？",slug:"为什么-v-for-优先级更高",content:`Vue 官方文档中提到，这是为了优化性能。因为 v-for 创建的每个节点都会执行 v-if，如果 v-if 在 v-for 之前解析，那么它将多次运行，这会降低效率。所以 Vue 设计为先进行 v-for 循环，然后对每个循环项应用 v-if 条件。
v-for: 首先遍历 items 数组，为每个元素创建一个<li>元素。
v-if: 然后对每个生成的<li>元素应用 v-if 条件，只有当 item.isVisible 为 true 时，该元素才会被渲染。 <template> <ul> <li v-for="item in items" v-if="item.isVisible">{{ item.text }}</li> </ul>
</template>`},{header:"性能考虑",slug:"性能考虑",content:`如果需要根据某些条件过滤掉一些不需要的项，并且这些项在渲染后不会影响 DOM 结构，那么可以在 v-for 之前使用计算属性或方法来过滤数据，这样可以减少 DOM 操作，提高性能。filteredItems 是一个计算属性，它只包含 isVisible 为 true 的项。然后 v-for 遍历 filteredItems 进行渲染，这样避免了对每个项都执行 v-if 条件判断。 <template> <ul> <li v-for="item in filteredItems" :key="item.id">{{ item.text }}</li> </ul>
</template> <script> import { computed } from "vue"; export default { data() { return { items: [ { id: 1, text: "Item 1", isVisible: true }, { id: 2, text: "Item 2", isVisible: false }, ], }; }, computed: { filteredItems() { return this.items.filter((item) => item.isVisible); }, }, };
<\/script>`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",title:"",pathLocale:"/",contents:[{header:"生命周期",slug:"生命周期",content:"在 Vue 3 中，组件的生命周期钩子用于在不同阶段执行代码，例如创建、更新、渲染和销毁组件。以下是 Vue 3 中组件生命周期的主要钩子："},{header:"Setup 阶段",slug:"setup-阶段",content:"setup()：在组件实例创建之前执行，用于声明响应式数据和计算属性。"},{header:"创建阶段",slug:"创建阶段",content:`beforeCreate()：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
created()：在实例创建完成后被调用，此时实例已完成数据观测、属性和方法的运算，但挂载阶段还未开始，$el 属性还未显示出来。`},{header:"装载阶段",slug:"装载阶段",content:`beforeMount()：在挂载开始之前被调用：相关的render函数首次被调用。
onBeforeMount()：一个onMounted的别名，在挂载开始之前被调用。
mounted()：在el被新创建的vm.$el替换后调用，可以执行 DOM 操作。`},{header:"更新阶段",slug:"更新阶段",content:`beforeUpdate()：在数据变化之后，DOM 被重新渲染之前调用，此时可以在这个钩子中进一步地更改状态。
updated()：在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后被调用。`},{header:"渲染阶段",slug:"渲染阶段",content:"render()：Vue 3 中的渲染函数，用于手动编写模板渲染逻辑。"},{header:"销毁阶段",slug:"销毁阶段",content:`beforeUnmount()：在卸载开始之前被调用。
unmounted()：在组件卸载之后调用。`},{header:"异步操作",slug:"异步操作",content:`onBeforeUnmount()：在组件卸载之前被调用。
onUnmounted()：在组件卸载之后被调用。`},{header:"错误处理",slug:"错误处理",content:`onErrorCaptured()：当捕获一个来自子孙组件的错误时被调用。
onRenderTracked()：当依赖项被追踪时触发。
onRenderTriggered()：当依赖项触发重新渲染时触发。`},{header:"示例",slug:"示例",content:`<script setup>
import { onMounted, onUnmounted } from "vue"; onMounted(() => { console.log("组件已挂载");
}); onUnmounted(() => { console.log("组件已卸载");
});
<\/script>`},{header:"注意事项",slug:"注意事项",content:`生命周期钩子在 setup() 函数中通过 onXXX 的形式注册。
setup() 阶段是 Composition API 的入口，它在组件实例创建之前执行。
created 和 mounted 钩子在服务器端渲染 (SSR) 时只调用一次。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C(%E5%B1%80%E9%83%A8%E4%B8%8E%E5%85%A8%E5%B1%80).html",title:"",pathLocale:"/",contents:[{header:"组件注册(局部与全局)",slug:"组件注册-局部与全局",content:"组件可以全局注册，使得它们可以在应用的任何地方使用；也可以局部注册，使得它们只在一个组件的模板中可用。"},{header:"全局注册",slug:"全局注册",content:"全局注册的组件可以在应用的任何组件模板中使用。在 Vue 3 中，全局注册可以通过应用实例的.component()方法实现。"},{header:"使用方法",slug:"使用方法",content:`MyComponent 将全局注册，可以在任何组件的模板中通过<my-component-name>使用。 import { createApp } from "vue";
import App from "./App.vue";
import MyComponent from "./components/MyComponent.vue"; const app = createApp(App); app.component("my-component-name", MyComponent); app.mount("#app");`},{header:"局部注册",slug:"局部注册",content:`局部注册的组件只在定义它们的组件模板中可用。MyComponent 将在当前组件的模板中局部注册，并可以通过<my-component-name>使用。 import MyComponent from "./components/MyComponent.vue"; export default { components: { "my-component-name": MyComponent, },
};`},{header:"特点",slug:"特点",content:`依赖明确：局部注册使得组件之间的依赖关系更加明确。
Tree-shaking：未被使用的组件不会包含在最终的构建结果中。`},{header:"自动化全局注册",slug:"自动化全局注册",content:"对于需要全局注册多个组件的情况，可以创建一个插件来自动化这个过程。"},{header:"使用插件自动化注册",slug:"使用插件自动化注册",content:`// register.js
import ImageView from "./ImageView.vue";
import Sku from "./Sku.vue"; export default { install(app) { app.component("XtxImageView", ImageView); app.component("XtxSku", Sku); },
}; // main.js
import componentPlugin from "./register.js"; const app = createApp(App);
app.use(componentPlugin);
app.mount("#app");`},{header:"特点",slug:"特点-1",content:`批量注册：通过一个插件文件可以注册多个组件，简化代码。
集中管理：所有的全局组件都在一个地方进行注册，方便管理。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E7%BB%84%E5%90%88%E5%BC%8FApi%E7%9A%84%E4%BC%98%E7%82%B9.html",title:"",pathLocale:"/",contents:[{header:"组合式 Api 可以像一样 react-hooks 拆分",slug:"组合式-api-可以像一样-react-hooks-拆分",content:"Vue 3 引入了组合式 API（Composition API），它提供了一种新的方式来组织和共享代码逻辑。React 则通过 Hooks 提供了类似的能力。以下是对两者的详细对比。"},{header:"组合式 API",slug:"组合式-api",content:""},{header:"定义与特点",slug:"定义与特点",content:`组合式 API 是 Vue 3 中引入的一套新的 API，允许开发者使用函数的方式组织组件代码。它的核心是 setup 函数，它是组件的入口点，可以返回响应式数据、方法、计算属性等。 响应式 API：如 ref() 和 reactive()，用于创建响应式状态和计算属性。
生命周期钩子：如 onMounted() 和 onUnmounted()，在组件的不同生命周期阶段执行逻辑。
依赖注入：如 provide() 和 inject()，用于组件树中的依赖传递。`},{header:"使用场景",slug:"使用场景",content:`逻辑复用：通过组合函数实现代码逻辑的复用。
代码组织：将相关逻辑分组，易于理解和维护。
类型推导：更好的 TypeScript 支持，提高代码质量和开发体验。`},{header:"示例代码",slug:"示例代码",content:`import { ref, onMounted } from "vue"; export default { setup() { const count = ref(0); onMounted(() => { console.log("组件已挂载"); }); return { count }; },
};`},{header:"React Hooks",slug:"react-hooks",content:""},{header:"定义与特点",slug:"定义与特点-1",content:`React Hooks 是 React 16.8 引入的一套新的 API，允许在函数组件中使用状态和其他 React 特性。常用的 Hooks 包括 useState、useEffect、useContext 等。 状态管理：如 useState，用于在函数组件中添加状态。
副作用处理：如 useEffect，用于处理组件的副作用，如数据获取、订阅等。
上下文访问：如 useContext，用于访问 React 上下文。`},{header:"使用场景",slug:"使用场景-1",content:`状态管理：在函数组件中轻松管理状态。
副作用处理：集中处理组件的副作用。
逻辑复用：通过自定义 Hooks 实现逻辑的复用。`},{header:"示例代码",slug:"示例代码-1",content:`import React, { useState, useEffect } from "react"; function Counter() { const [count, setCount] = useState(0); useEffect(() => { console.log("组件已挂载"); }, []); return <div>{count}</div>;
}`},{header:"对比",slug:"对比",content:`设计理念：Vue 3 的组合式 API 更注重逻辑的组合和代码的组织，而 React Hooks 强调在函数组件中使用状态和其他特性。
使用方式：Vue 3 的组合式 API 通过 setup 函数提供统一的入口，React Hooks 则通过在函数组件顶层调用不同的 Hook 实现。
性能优化：React 提供了如 useMemo 和 useCallback 等 Hooks 来优化性能，Vue 3 的响应式系统则在内部自动优化。
类型支持：Vue 3 的组合式 API 在 TypeScript 中的支持更直观，而 React Hooks 需要额外的类型声明。`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4%E4%B8%8E%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8F%92%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"自定义指令与自定义插件",slug:"自定义指令与自定义插件",content:"在 Vue 3 中，自定义指令和插件是两种强大的功能，它们可以扩展 Vue 的核心功能，以适应更复杂的场景。自定义指令和插件是 Vue 3 中强大的工具，它们可以帮你构建更加动态和可扩展的应用程序。通过自定义指令，你可以控制 DOM 元素的低级操作；而插件则可以提供全局级别的功能增强。"},{header:"自定义指令",slug:"自定义指令",content:"自定义指令允许你直接对 DOM 元素进行底层操作，比如监听键盘事件或者控制 DOM 元素的显示/隐藏。"},{header:"如何定义",slug:"如何定义",content:`在 Vue 3 中，自定义指令应该提供几个生命周期钩子，例如： created：绑定元素的 attribute 或事件监听器被应用之前调用。
beforeMount：在元素被插入到 DOM 之前调用。
mounted：在绑定元素的父组件和所有子节点都挂载完成后调用。
beforeUpdate：在包含组件的 VNode 更新之前调用。
updated：在包含组件的 VNode 及其子组件的 VNode 更新后调用。
beforeUnmount：在卸载绑定元素的父组件之前调用。
unmounted：当指令与元素解除绑定且父组件已卸载时调用。 const app = Vue.createApp({}); app.directive("focus", { mounted(el) { el.focus(); },
});
<!-- 使用 -->
<input v-focus>`},{header:"自定义插件",slug:"自定义插件",content:"自定义插件是 Vue 应用的扩展，它们可以添加全局方法或属性，注册组件，甚至添加全新的指令。"},{header:"如何定义",slug:"如何定义-1",content:`自定义插件应该有一个 install 方法，这个方法的第一个参数是 Vue 应用实例，第二个参数是一个可选的选项对象。 const myPlugin = { install(app, options) { app.config.globalProperties.$myGlobalMethod = () => { console.log("Hello from my plugin!"); }; },
};
const app = Vue.createApp({}); app.use(myPlugin);`},{header:"提供/注入 (Provide/Inject)",slug:"提供-注入-provide-inject",content:`插件也可以使用 provide 和 inject 来向应用提供数据或功能。 app.provide("theme", "dark");
const theme = inject("theme");`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E8%A1%A8%E5%8D%95%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A.html",title:"",pathLocale:"/",contents:[{header:"表单的双向绑定",slug:"表单的双向绑定",content:"在 Vue 3 中，v-model 是实现表单输入和应用状态之间双向绑定的指令。它不仅简化了数据的同步操作，还使得用户输入和数据模型之间的交互变得更加直观和高效。"},{header:"基本用法",slug:"基本用法",content:'在文本输入框中使用 v-model 来创建双向数据绑定：这里，message 是组件的数据属性，用户的输入会实时更新这个属性的值，反之亦然。 <input v-model="message" placeholder="edit me" />'},{header:"复选框和单选按钮",slug:"复选框和单选按钮",content:`复选框和单选按钮同样可以使用 v-model 进行双向绑定：在这个例子中，checked 是一个布尔值，用于跟踪复选框是否被选中；picked 会根据选中的单选按钮的值进行更新。 <input type="checkbox" v-model="checked" />
<input type="radio" v-model="picked" value="option1" />`},{header:"下拉选择器",slug:"下拉选择器",content:`对于 <select> 元素，v-model 绑定到选中的值：selected 会保存当前选中的 <option> 的值。 <select v-model="selected"> <option value="option1">Option 1</option> <option value="option2">Option 2</option>
</select>`},{header:"自定义组件",slug:"自定义组件",content:`在自定义组件中，v-model 可以通过 defineModel 实现双向绑定，这是 Vue 3.4 引入的新特性，简化了双向绑定的实现： <!-- 子组件 -->
<script setup> const model = defineModel(); function update() { model.value++; }
<\/script>
<template> <div>Parent bound v-model is: {{ model }}</div> <button @click="update">Increment</button>
</template>
<!-- 父组件 -->
<CustomComponent v-model="inputValue" />`},{header:"修饰符",slug:"修饰符",content:`v-model 还提供了几个修饰符，如 .lazy、.number 和 .trim，来处理不同的输入场景： <!-- 延迟更新 -->
<input v-model.lazy="msg" /> <!-- 自动转换为数字 -->
<input v-model.number="age" type="text" /> <!-- 自动去除首尾空格 -->
<input v-model.trim="msg" />`}]},{path:"/web/Vue/Vue3/%E6%8A%80%E6%9C%AF%E7%82%B9/%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6%E4%B8%8E%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%8C%BA%E5%88%AB.html",title:"",pathLocale:"/",contents:[{header:"计算属性的缓存机制与事件的区别",slug:"计算属性的缓存机制与事件的区别",content:"计算属性（Computed Properties）和事件（Events）是两个不同的概念，它们在功能和用途上有所区别。下面分别介绍它们的特点和区别。"},{header:"计算属性（Computed Properties）",slug:"计算属性-computed-properties",content:"计算属性是基于它们的响应式依赖进行缓存的属性。只有当计算属性依赖的响应式数据发生变化时，计算属性才会重新计算。这意味着计算属性是惰性的：只有在需要时它们才会计算。"},{header:"特点：",slug:"特点",content:`缓存机制： 计算属性的结果会被缓存，只有当依赖的数据发生变化时，缓存才会失效，然后重新计算。
响应式： 计算属性是响应式的，它们会根据依赖的数据变化自动更新。
无副作用： 计算属性应该只依赖于它们的响应式输入，不应该产生副作用。 import { computed, ref } from "vue"; const count = ref(1);
const doubled = computed(() => count.value * 2); console.log(doubled.value); // 输出 2
count.value++; // 修改依赖数据
console.log(doubled.value); // 输出 4，缓存已失效，重新计算`},{header:"事件（Events）",slug:"事件-events",content:"事件是组件间通信的一种方式。在 Vue 中，事件可以由用户操作（如点击按钮）或程序逻辑触发，并通过事件监听器进行处理。"},{header:"特点：",slug:"特点-1",content:`非缓存： 事件不是缓存的，每次触发事件时都会执行事件处理函数。
即时性： 事件是即时的，它们会在触发时立即执行相关的逻辑。
通信机制： 事件用于父子组件或非父子组件之间的通信。 import { defineComponent, ref, onMounted } from "vue"; export default defineComponent({ setup() { const count = ref(0); function increment() { count.value++; } onMounted(() => { window.addEventListener("click", () => { increment(); console.log("Clicked! Count is now:", count.value); }); }); return { count, }; },
});`},{header:"区别",slug:"区别",content:`缓存： 计算属性具有缓存机制，而事件没有。计算属性的结果只在依赖数据变化时更新，事件每次触发都会执行。
用途： 计算属性用于基于响应式数据的派生状态，事件用于组件间的通信。
性能： 由于计算属性的缓存机制，它们可以提高性能，避免不必要的计算。事件则没有这种优化。
响应式： 计算属性是响应式的，依赖的数据变化时会自动更新。事件处理函数需要手动触发和监听。`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/pinia.html",title:"",pathLocale:"/",contents:[{header:"pinia",slug:"pinia",content:`pinia 写法:选择器 API、组合式 API
例如：
/**store/index.ts**/ //创建大仓库
import { createPinia } from "pinia";
//createPinia方法可以用于创建大仓库
let store = createPinia();
//对外暴露,安装仓库
export default store;
/**store/modules/info.ts**/ //定义info小仓库
import { defineStore } from "pinia";
//第一个仓库:小仓库名字 第二个参数:小仓库配置对象
//defineStore方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据
let useInfoStore = defineStore("info", { //存储数据:state state: () => { return { count: 99, arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], }; }, actions: { //注意:函数没有context上下文对象 //没有commit、没有mutations去修改数据 updateNum(a: number, b: number) { this.count += a; }, }, getters: { total() { let result: any = this.arr.reduce((prev: number, next: number) => { return prev + next; }, 0); return result; }, },
});
//对外暴露方法
export default useInfoStore;
/**store/modules/todo.ts**/ //定义组合式API仓库
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
//创建小仓库
let useTodoStore = defineStore("todo", () => { let todos = ref([ { id: 1, title: "吃饭" }, { id: 2, title: "睡觉" }, { id: 3, title: "打豆豆" }, ]); let arr = ref([1, 2, 3, 4, 5]); const total = computed(() => { return arr.value.reduce((prev, next) => { return prev + next; }, 0); }); //务必要返回一个对象:属性与方法可以提供给组件使用 return { todos, arr, total, updateTodo() { todos.value.push({ id: 4, title: "组合式API方法" }); }, };
}); export default useTodoStore;
<!-- ParentComponent.vue -->
<template> <div class="box"> <h1>pinia</h1> <div class="container"> <Child></Child> <Child1></Child1> </div> </div>
</template> <script setup lang="ts"> import Child from "./Child.vue"; import Child1 from "./Child1.vue"; //vuex:集中式管理状态容器,可以实现任意组件之间通信！！！ //核心概念:state、mutations、actions、getters、modules //pinia:集中式管理状态容器,可以实现任意组件之间通信！！！ //核心概念:state、actions、getters //pinia写法:选择器API、组合式API
<\/script>
<!-- ChildComponent.vue -->
<template> <div class="child"> <h1>{{ infoStore.count }}---{{infoStore.total}}</h1> <button @click="updateCount">点击我修改仓库数据</button> </div>
</template> <script setup lang="ts"> import useInfoStore from "../../store/modules/info"; //获取小仓库对象 let infoStore = useInfoStore(); console.log(infoStore); //修改数据方法 const updateCount = () => { //仓库调用自身的方法去修改仓库的数据 infoStore.updateNum(66, 77); };
<\/script>
<!-- Child1.vue -->
<template> <div class="child1"> {{ infoStore.count }} <p @click="updateTodo">{{ todoStore.arr }}{{todoStore.total}}</p> </div>
</template> <script setup lang="ts"> import useInfoStore from "../../store/modules/info"; //获取小仓库对象 let infoStore = useInfoStore(); //引入组合式API函数仓库 import useTodoStore from "../../store/modules/todo"; let todoStore = useTodoStore(); //点击p段落去修改仓库的数据 const updateTodo = () => { todoStore.updateTodo(); };
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/props.html",title:"",pathLocale:"/",contents:[{header:"props",slug:"props",content:`Vue 3 中组件之间的通信方式有以下几种：
使用 props：与 Vue 2 中的用法类似，父组件通过在子组件上绑定属性，将数据传递给子组件。子组件通过 props 选项接收这些数据。
例如：
<!-- ParentComponent.vue -->
<template> <div class="box"> <h1>props:我是父组件曹操</h1> <hr /> <Child info="我是曹操" :money="money"></Child> </div>
</template> <script setup lang="ts">
//props:可以实现父子组件通信,props数据还是只读的！！！
import Child from "./Child.vue";
import { ref } from "vue";
let money = ref(10000);
<\/script> <!-- ChildComponent.vue -->
<template> <div class="son"> <h1>我是子组件:曹植</h1> <p>{{ props.info }}</p> <p>{{ props.money }}</p> <!--props可以省略前面的名字---> <p>{{ info }}</p> <p>{{ money }}</p> <button @click="updateProps">修改props数据</button> </div>
</template> <script setup lang="ts">
//需要使用到defineProps方法去接受父组件传递过来的数据
//defineProps是Vue3提供方法,不需要引入直接使用
let props = defineProps(["info", "money"]); //数组|对象写法都可以
//按钮点击的回调
const updateProps = () => { // props.money+=10; props:只读的 console.log(props.info);
};
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/provide%E4%B8%8Einject.html",title:"",pathLocale:"/",contents:[{header:"provide 与 inject",slug:"provide-与-inject",content:`provide(提供)与 inject(注入)：Vue3 提供 provide(提供)与 inject(注入),可以实现隔辈组件传递数据。
<!-- ParentComponent.vue -->
<template> <div class="box"> <h1>Provide与Inject{{ car }}</h1> <hr /> <Child></Child> </div>
</template>
<script setup lang="ts">
import Child from "./Child.vue";
//vue3提供provide(提供)与inject(注入),可以实现隔辈组件传递数据
import { ref, provide } from "vue";
let car = ref("法拉利");
//祖先组件给后代组件提供数据
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide("TOKEN", car);
<\/script> <!-- Child.vue -->
<template> <div class="child"> <h1>我是子组件1</h1> <Child></Child> </div>
</template>
<script setup lang="ts">
import Child from "./GrandChild.vue";
<\/script> <!-- GrandChild.vue -->
<template> <div class="child1"> <h1>孙子组件</h1> <p>{{ car }}</p> <button @click="updateCar">更新数据</button> </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
//注入祖先组件提供数据
//需要参数:即为祖先提供数据的key
let car = inject("TOKEN");
const updateCar = () => { car.value = "自行车";
};
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/ref%E4%B8%8E_parent.html",title:"",pathLocale:"/",contents:[{header:"ref 与$parent",slug:"ref-与-parent",content:`使用 ref 与$parent：在 Vue 3 中，ref可以获取真实的DOM节点,可以获取到子组件实例VC,$parent:可以在子组件内部获取到父组件的实例。
<!-- ParentComponent.vue -->
<template> <div class="box"> <h1>我是父亲曹操:{{ money }}</h1> <button @click="handler">找我的儿子曹植借10元</button> <hr /> <Son ref="son"></Son> <hr /> <Dau></Dau> </div>
</template>
<script setup lang="ts">
//ref:可以获取真实的DOM节点,可以获取到子组件实例VC
//$parent:可以在子组件内部获取到父组件的实例
//引入子组件
import Son from "./Son.vue";
import Dau from "./Daughter.vue";
import { ref } from "vue";
//父组件钱数
let money = ref(100000000);
//获取子组件的实例
let son = ref();
//父组件内部按钮点击回调
const handler = () => { money.value += 10; //儿子钱数减去10 son.value.money -= 10; son.value.fly();
};
//对外暴露
defineExpose({ money,
});
<\/script> <!-- Son.vue -->
<template> <div class="son"> <h3>我是子组件:曹植{{ money }}</h3> </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
//儿子钱数
let money = ref(666);
const fly = () => { console.log("我可以飞");
};
//组件内部数据对外关闭的，别人不能访问
//如果想让外部访问需要通过defineExpose方法对外暴露
defineExpose({ money, fly,
});
<\/script> <!-- Daughter.vue -->
<template> <div class="dau"> <h1>我是闺女曹杰{{ money }}</h1> <button @click="handler($parent)">点击我爸爸给我10000元</button> </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
//闺女钱数
let money = ref(999999);
//闺女按钮点击回调
const handler = ($parent) => { money.value += 10000; $parent.money -= 10000;
};
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/slot.html",title:"",pathLocale:"/",contents:[{header:"slot",slug:"slot",content:`使用插槽：在 Vue 3 中，作用域插槽就是可以传递数据的插槽,子组件可以讲数据回传给父组件,父组件可以决定这些回传的。
<!-- ParentComponent.vue -->
<template> <div> <h1>slot</h1> <Test1 :todos="todos"> <template v-slot="{ $row, $index }"> <p :style="{ color: $row.done ? 'green' : 'red' }"> {{ $row.title }}--{{ $index }} </p> </template> </Test1> <Test> <div> <pre>大江东去浪淘尽,千古分流人物</pre> </div> <!-- 具名插槽填充a --> <template #a> <div>我是填充具名插槽a位置结构</div> </template> <!-- 具名插槽填充b v-slot指令可以简化为# --> <template #b> <div>我是填充具名插槽b位置结构</div> </template> </Test> </div>
</template> <script setup lang="ts">
import Test from "./Test.vue";
import Test1 from "./Test1.vue";
//插槽:默认插槽、具名插槽、作用域插槽
//作用域插槽:就是可以传递数据的插槽,子组件可以讲数据回传给父组件,父组件可以决定这些回传的
//数据是以何种结构或者外观在子组件内部去展示！！！
import { ref } from "vue";
//todos数据
let todos = ref([ { id: 1, title: "吃饭", done: true }, { id: 2, title: "睡觉", done: false }, { id: 3, title: "打豆豆", done: true }, { id: 4, title: "打游戏", done: false },
]);
<\/script> <!-- Test.vue -->
<template> <div class="box"> <h1>我是子组件默认插槽</h1> <!-- 默认插槽 --> <slot></slot> <h1>我是子组件默认插槽</h1> <h1>具名插槽填充数据</h1> <slot name="a"></slot> <h1>具名插槽填充数据</h1> <h1>具名插槽填充数据</h1> <slot name="b"></slot> <h1>具名插槽填充数据</h1> </div>
</template>
<script setup lang="ts"><\/script> <!-- Test1.vue -->
<template> <div class="box"> <h1>作用域插槽</h1> <ul> <li v-for="(item, index) in todos" :key="item.id"> <!--作用域插槽:可以讲数据回传给父组件--> <slot :$row="item" :$index="index"></slot> </li> </ul> </div>
</template>
<script setup lang="ts">
//通过props接受父组件传递数据
defineProps(["todos"]);
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/useAttrs.html",title:"",pathLocale:"/",contents:[{header:"useAttrs",slug:"useattrs",content:`使用 useAttrs：Vue3 提供一个方法 useAttrs 方法,它可以获取组件身上的属性与事件。
<template> <div> <h1>useAttrs</h1> <el-button type="primary" size="small" :icon="Edit"></el-button> <!-- 自定义组件 --> <HintButton type="primary" size="small" :icon="Edit" title="编辑按钮" @click="handler" @xxx="handler" ></HintButton> </div>
</template>
<script setup lang="ts">
//vue3框架提供一个方法useAttrs方法,它可以获取组件身上的属性与事件！！！
//图标组件
import { Check, Delete, Edit, Message, Search, Star,
} from "@element-plus/icons-vue";
import HintButton from "./HintButton.vue";
//按钮点击的回调
const handler = () => { alert(12306);
};
<\/script> <!-- HintButton.vue -->
<template> <div :title="title"> <el-button :="$attrs"></el-button> </div>
</template>
<script setup lang="ts">
//引入useAttrs方法:获取组件标签身上属性与事件
import { useAttrs } from "vue";
//此方法执行会返回一个对象
let $attrs = useAttrs();
//万一用props接受title
let props = defineProps(["title"]);
//props与useAttrs方法都可以获取父组件传递过来的属性与属性值
//但是props接受了useAttrs方法就获取不到了
console.log($attrs);
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/v-model.html",title:"",pathLocale:"/",contents:[{header:"v-model",slug:"v-model",content:`使用 v-model：在 Vue 3 中，可以使用 v-model 指令将数据双向绑定到父组件和子组件。
<!-- ParentComponent.vue -->
<template> <div> <h1>v-model:钱数{{ money }}{{ pageNo }}{{ pageSize }}</h1> <input type="text" v-model="info" /> <hr /> <!-- props:父亲给儿子数据 --> <!-- <Child :modelValue="money" @update:modelValue="handler"></Child> --> <!-- v-model组件身上使用 第一:相当有给子组件传递props[modelValue] = 10000 第二:相当于给子组件绑定自定义事件update:modelValue --> <Child v-model="money"></Child> <hr /> <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Child1> </div>
</template> <script setup lang="ts">
//v-model指令:收集表单数据,数据双向绑定
//v-model也可以实现组件之间的通信,实现父子组件数据同步的业务
//父亲给子组件数据 props
//子组件给父组件数据 自定义事件
//引入子组件
import Child from "./Child.vue";
import Child1 from "./Child1.vue";
import { ref } from "vue";
let info = ref("");
//父组件的数据钱数
let money = ref(10000);
//自定义事件的回调
const handler = (num) => { //将来接受子组件传递过来的数据 money.value = num;
}; //父亲的数据
let pageNo = ref(1);
let pageSize = ref(3);
<\/script> <!-- Child.vue -->
<template> <div class="child"> <h3>钱数:{{ modelValue }}</h3> <button @click="handler">父子组件数据同步</button> </div>
</template>
<script setup lang="ts">
//接受props
let props = defineProps(["modelValue"]);
let $emit = defineEmits(["update:modelValue"]);
//子组件内部按钮的点击回调
const handler = () => { //触发自定义事件 $emit("update:modelValue", props.modelValue + 1000);
};
<\/script> <!-- Child1.vue -->
<template> <div class="child2"> <h1>同时绑定多个v-model</h1> <button @click="handler">pageNo{{ pageNo }}</button> <button @click="$emit('update:pageSize', pageSize + 4)"> pageSize{{ pageSize }} </button> </div>
</template>
<script setup lang="ts">
let props = defineProps(["pageNo", "pageSize"]);
let $emit = defineEmits(["update:pageNo", "update:pageSize"]);
//第一个按钮的事件回调
const handler = () => { $emit("update:pageNo", props.pageNo + 3);
};
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF.html",title:"",pathLocale:"/",contents:[{header:"全局事件总线",slug:"全局事件总线",content:`使用第三方插件，需要 npm install mitt 全局安装并对外暴漏一个 bus 对象
//引入mitt插件:mitt一个方法,方法执行会返回bus对象
import mitt from "mitt";
const $bus = mitt();
export default $bus;
<!-- ParentComponent.vue -->
<template> <div class="box"> <h1>全局事件总线$bus</h1> <hr /> <div class="container"> <Child1></Child1> <Child2></Child2> </div> </div>
</template> <script setup lang="ts">
//引入子组件
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
<\/script> <!-- Child1.vue -->
<template> <div class="child1"> <h3>我是子组件1:曹植</h3> </div>
</template>
<script setup lang="ts">
import $bus from "../../bus";
//组合式API函数
import { onMounted } from "vue";
//组件挂载完毕的时候,当前组件绑定一个事件,接受将来兄弟组件传递的数据
onMounted(() => { //第一个参数:即为事件类型 第二个参数:即为事件回调 $bus.on("car", (car) => { console.log(car); });
});
<\/script> <!-- Child2.vue -->
<template> <div class="child2"> <h2>我是子组件2:曹丕</h2> <button @click="handler">点击我给兄弟送一台法拉利</button> </div>
</template>
<script setup lang="ts">
//引入$bus对象
import $bus from "../../bus";
//点击按钮回调
const handler = () => { $bus.emit("car", { car: "法拉利" });
};
<\/script>`}]},{path:"/web/Vue/Vue3/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1/%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6.html",title:"",pathLocale:"/",contents:[{header:"自定义事件",slug:"自定义事件",content:`使用 自定义事件：在 Vue 3 中，不管是放在标签身上、组件标签身上都是原生 DOM 事件。可以通过自定义事件向父组件传值。
<!-- Parent.vue --> <template> <div> <h1>事件</h1> <!-- 原生DOM事件 --> <pre @click="handler"> 大江东去浪淘尽,千古分流人物 </pre> <button @click="handler1(1, 2, 3, $event)">点击我传递多个参数</button> <hr /> <!-- vue2框架当中:这种写法自定义事件,可以通过.native修饰符变为原生DOM事件 vue3框架下面写法其实即为原生DOM事件 vue3:原生的DOM事件不管是放在标签身上、组件标签身上都是原生DOM事件 --> <Event1 @click="handler2"></Event1> <hr /> <!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 --> <Event2 @xxx="handler3" @click="handler4"></Event2> </div>
</template> <script setup lang="ts">
//引入子组件
import Event1 from "./Event1.vue";
//引入子组件
import Event2 from "./Event2.vue";
//事件回调--1
const handler = (event) => { //event即为事件对象 console.log(event);
};
//事件回调--2
const handler1 = (a, b, c, $event) => { console.log(a, b, c, $event);
};
//事件回调---3
const handler2 = () => { console.log(123);
};
//事件回调---4
const handler3 = (param1, param2) => { console.log(param1, param2);
};
//事件回调--5
const handler4 = (param1, param2) => { console.log(param1, param2);
};
<\/script> <!-- Event1.vue -->
<template> <div class="son"> <p>我是子组件1</p> <button>点击我也执行</button> </div>
</template> <script setup lang="ts"><\/script> <!-- Event2.vue -->
<template> <div class="child"> <p>我是子组件2</p> <button @click="handler">点击我触发自定义事件xxx</button> <button @click="$emit('click', 'AK47', 'J20')"> 点击我触发自定义事件click </button> </div>
</template>
<script setup lang="ts">
//利用defineEmits方法返回函数触发自定义事件
//defineEmits方法不需要引入直接使用
let $emit = defineEmits(["xxx", "click"]);
//按钮点击回调
const handler = () => { //第一个参数:事件类型 第二个|三个|N参数即为注入数据 $emit("xxx", "东风导弹", "航母");
};
<\/script>`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E6%89%93%E5%8D%B0%E6%B5%81/PrintStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"PrintStream 类",slug:"printstream-类",content:"打印字节流，只有输出流，没有输入流"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public PrintStream(String fileName)
根据指定的文件创建 PrintStream public PrintStream(OutputStream out, boolean autoFlush)
根据指定的 OutputStream 创建 PrintStream；默认 false`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void println(any x)
打印任意类型的 x，并换行 public void print(any x)
打印任意类型的 x，不换行 public void write(int b)
将指定的字节写入此流，不换行 public void write(byte[] buf, int off, int len)
将指定的字节数组的一部分写入此流，不换行`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.DaYinOutput; import java.io.FileOutputStream;
import java.io.PrintStream; public class PrintStream01 { public static void main(String[] args) throws Exception{ // public PrintStream(String fileName) /* PrintStream ps = new PrintStream("aaa/888.txt"); ps.println("你好"); ps.print("这个不换行!"); ps.write(97); ps.close(); */ // PrintStream(OutputStream out, boolean autoFlush) // autoFlush：只有值为true，且方法为println、printf、format才会自动刷新 PrintStream ps = new PrintStream(new FileOutputStream("aaa/888.txt") , true); ps.println("autoFlush:true，这个会自动刷新；且换行"); ps.print("autoFlush:true，这个也不会自动刷新；且不换行!"); ps.write(new byte[]{ 97, 98, 99, 100}, 0, 4); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E6%89%93%E5%8D%B0%E6%B5%81/PrintWriter%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"PrintWriter 类",slug:"printwriter-类",content:"打印字符流，只有输出流，没有输入流"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public PrintWriter(String fileName)
根据指定的文件创建 PrintWriter public PrintWriter(Writer out, boolean autoFlush)
根据指定的 Writer 创建 PrintWriter；默认 false`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void println(any x)
打印任意类型的 x，并换行 public void print(any x)
打印任意类型的 x，不换行 public void write(String s)
打印字符串 s ，不换行`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.DaYinOutput; import java.io.FileWriter;
import java.io.PrintWriter; public class PrintWriter01 { public static void main(String[] args) throws Exception{ // public PrintWriter(String fileName) /* PrintWriter pw = new PrintWriter("aaa/666.txt"); pw.println("你好"); pw.print("这个不换行!"); pw.write("只能打印字符串、字符或者字符数组；且也不换行"); pw.close(); */ // public PrintWriter(Writer out, boolean autoFlush) // autoFlush：只有值为true，且方法为println、printf、format才会自动刷新 PrintWriter pw = new PrintWriter(new FileWriter("aaa/666.txt"), true); pw.println("autoFlush:true，这个会自动刷新；且换行"); pw.print("autoFlush:true，这个也不会自动刷新；且不换行!"); pw.write("打印字符串 s；autoFlush:true，这个也不会自动刷新；且不换行! "); }
}`},{header:"文件复制",slug:"文件复制",content:`package com.wuziqi.gobang.IO.DaYinOutput; import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter; public class PrintCopy01 { public static void main(String[] args) throws Exception { // 一次读取一行，一次写出一行 BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); PrintWriter pw = new PrintWriter("aaa/777.txt"); String line = null; while ((line = br.readLine()) != null) { pw.println(line); } pw.close(); br.close(); // 读取一行写入一行，同时开启自动刷新 BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); PrintWriter pw = new PrintWriter(new FileWriter("aaa/777.txt"), true); String line = null; while ((line = br.readLine()) != null) { pw.println(line); } }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/ArrayList%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"ArrayList 实现类",slug:"arraylist-实现类",content:"需要导包，在 java.util 下；ArrayList 是 List 接口的实现类；底层是数组数据结构。"},{header:"ArrayList 类的特点(List 接口的特点)",slug:"arraylist-类的特点-list-接口的特点",content:`有序的集合（即：存进去的顺序和取出来的顺序是一致的） 有索引
元素都允许重复`},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public ArrayList
new 对象`},{header:"常见的成员方法",slug:"常见的成员方法",content:"和 List 接口 中定义的方法基本一致，当然包括Collection 集合中的方法。"},{header:"遍历",slug:"遍历",content:"和 List 接口 中定义的遍历一样。"},{header:"案例",slug:"案例",content:`/** * 已知集合中存储了"aaa"、"bbb"、"aaa"、"ccc"、"aaa"、"ddd" * * 要求：把集合中的所有"aaa"干掉
*/
import java.util.ArrayList; public class ArrayListDemo { public static void main(String[] args){ ArrayList list = new ArrayList(); list.add("aaa"); list.add("bbb"); list.add("aaa"); list.add("ccc"); list.add("aaa"); list.add("ddd"); System.out.println("修改前的集合：" + list); // 把集合中的所有"aaa"干掉 for (int i = 0; i < list.size(); i++){ if ("aaa".equals(list.get(i))){ list.remove(i); i--; /** * 注意： * 如果删除的是最后一个元素，则不会影响集合的长度 * 如果删除的不是最后一个元素，则需要重新计算下标的位置，重新开始 * i--不能忘记，否则会出现删除不完全的情况 * 如果使用迭代器删除或者使用增强for循环删除，有可能会报错 * java.util.ConcurrentModificationException * 并发修改异常 */ } } }
}
/** * 已知一个集合，有3个学生，遍历打印3个学生的信息
*/
package com.wuziqi.gobang.controller; import java.util.ArrayList; public class DemoList { public static void main(String[] args) { ArrayList astu = new ArrayList(); astu.add(new Student("小明",18)); astu.add(new Student("小张",20)); astu.add(new Student("rose",18)); for (Object o : astu) { //for each 多态格式 // System.out.println(o); 这样直接打印没问题 // 换一种打印 Student s = (Student) o; // 向下转型后才可以使用特有方法 System.out.println(s.getName() + "..." + s.getAge()); } }
} class Student{ private String name; private int age; Student(String name, int age){ this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Student{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/LinkedList%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"LinkedList 实现类",slug:"linkedlist-实现类",content:"需要导包，在 java.util 下；LinkedList 是 List 接口的实现类；底层是双向链表数据结构。"},{header:"LinkedList 类的特点(同 ArrayList)",slug:"linkedlist-类的特点-同-arraylist",content:`有序的集合（即：存进去的顺序和取出来的顺序是一致的） 有索引
元素都允许重复`},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public LinkedList
new 对象`},{header:"常见的成员方法",slug:"常见的成员方法",content:`同 ArrayList LinkedList 特有的方法
作用 public void addFirst(Object e)
在首位添加元素 public void addLast(Object e)
在末尾添加元素 public Object getFirst()
获取首位元素 public Object getLast()
获取末尾元素 public Object removeFirst()
删除首位元素，返回被删除的元素 public Object removeLast()
删除末尾元素，返回被删除的元素`},{header:"遍历",slug:"遍历",content:"同 ArrayList"},{header:"到底用 ArrayList 还是 LinkedList",slug:"到底用-arraylist-还是-linkedlist",content:`需要判断对时间和空间的权衡来选择使用哪种集合类。
ArrayList：数组数据结构，查询快，增删慢
LinkedList：链表数据结构，查询慢，增删快 需要考虑存取速度和 LinkedList 需要更多的内存空间 如果需要频繁的插入和删除元素，建议使用 LinkedList 如果需要频繁的随机访问元素，建议使用 ArrayList`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/List/List%E5%AD%90%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"List 子接口",slug:"list-子接口",content:"需要导包，在 java.util 下；List 也是接口，是 Collection 的子接口。"},{header:"List 集合的特点",slug:"list-集合的特点",content:`有序的集合（即：存进去的顺序和取出来的顺序是一致的） 有索引，所以 List 集合也被称为索引集合
元素都允许重复，所以 List 集合也被称为有序集合`},{header:"常见的成员方法",slug:"常见的成员方法",content:`Collection 集合的方法都被继承了，不描述了 方法
作用 boolean add(Object e)
添加元素 void add(int index, Object element)
添加元素 boolean remove(Object o)
删除元素 boolean removeIf(Predicate filter)
按照条件删除元素 Object remove(int index)
删除指定索引处的元素 Object set(int index, Object element)
修改指定索引处的元素，返回被修改的数据 Object get(int index)
返回指定索引处的元素`},{header:"List 集合遍历",slug:"list-集合遍历",content:"转数组循环遍历 迭代器遍历 增强 for 循环遍历(for each) 普通的 for 循环遍历(利用索引)"},{header:"方法的使用案例",slug:"方法的使用案例",content:`package com.wuziqi.gobang.controller; import java.util.ArrayList;
import java.util.Iterator;
import java.util.List; public class DemoList { public static void main(String[] args) { List list = new ArrayList(); list.add("aaa"); list.add("bbb"); list.add("ccc"); // void add(int index, Object element) list.add(1, "ddd"); System.out.println(list); // [aaa, ddd, bbb, ccc] list.remove("ddd"); // void remove(int index) list.remove(1); System.out.println(list); // [aaa, ccc] // Object set(int index, Object element) list.set(1, "bbb"); System.out.println(list); // [bbb,ccc] // Object get(int index) list.get(1); System.out.println(list.get(1)); // bbb list.add("bbb"); list.add("ccc"); list.add(111); list.add(111); // 转数组遍历 Object[] obj = list.toArray(); for (int i = 0; i < obj.length; i++){ System.out.println(obj[i]); } // 迭代器遍历 Iterator it = list.iterator(); while (it.hasNext()){ System.out.println(it.next()); } // 增强for遍历(for each) for (Object o : list){ System.out.println(o); } // 普通for缓存遍历(利用索引) for(int i = 0; i < list.size(); i++){ System.out.println(list.get(i)); } }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/Comparable%E8%87%AA%E7%84%B6%E6%8E%92%E5%BA%8F.html",title:"",pathLocale:"/",contents:[{header:"Comparable 自然排序",slug:"comparable-自然排序",content:`一堆学生，只有姓名和年龄，
先根据年龄从小到大排序，
如果年龄相同，则按照字典顺序从小到大排序，
同龄的学生中没有同名的。 package com.wuziqi.gobang.Set; import java.util.TreeSet; public class DemoComparable { public static void main(String[] args) { TreeSet<Person> ts = new TreeSet<Person>(); ts.add(new Person("Tom", 20)); ts.add(new Person("Rose", 19)); ts.add(new Person("Jerry", 20)); ts.add(new Person("Jack", 19)); ts.add(new Person("Tina", 18)); ts.add(new Person("Rose", 19)); System.out.println(ts); }
}
class Person implements Comparable<Person> { private String name; private int age; public Person(String name, int age) { this.name = name; this.age = age; } @Override public String toString() { return "Person{" + "name='" + name + '\\'' + ", age=" + age + '}'; } public int compareTo(Person o) { int i = this.age - o.age; return i == 0 ? this.name.compareTo(o.name) : i; }
}
/** * 输出结果： * [Person{name='Tina', age=18}, Person{name='Jack', age=19}, * Person{name='Rose', age=19}, *Person{name='Jerry', age=20}, * Person{name='Tom', age=20}] */`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/Comparator%E6%AF%94%E8%BE%83%E5%99%A8.html",title:"",pathLocale:"/",contents:[{header:"Comparator 比较器",slug:"comparator-比较器",content:`一堆学生，只有姓名和年龄，
先根据年龄从小到大排序，
如果年龄相同，则按照字典顺序从小到大排序，
同龄的学生中没有同名的。 package com.wuziqi.gobang.Set; import java.util.Comparator;
import java.util.TreeSet; public class DemoComparator { public static void main(String[] args) { TreeSet<Student> ts = new TreeSet<Student>(new Comparator<Student>() { @Override public int compare(Student o1, Student o2) { int i = o1.getAge() - o2.getAge(); return i == 0 ? o1.getName().compareTo(o2.getName()) : i; } }); ts.add(new Student("Tom", 20)); ts.add(new Student("Rose", 19)); ts.add(new Student("Jerry", 20)); ts.add(new Student("Jack", 19)); ts.add(new Student("Tina", 18)); ts.add(new Student("Rose", 19)); System.out.println(ts); }
}
class Student{ private String name; private int age; public Student(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Student{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}
/** * 输出结果： * [Person{name='Tina', age=18}, Person{name='Jack', age=19}, * Person{name='Rose', age=19}, *Person{name='Jerry', age=20}, * Person{name='Tom', age=20}] */`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/HashSet%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"HashSet 实现类",slug:"hashset-实现类",content:""},{header:"HashSet 集合的特点",slug:"hashset-集合的特点",content:"无序性（即：存进去的顺序和取出来的顺序不一定一致） 无索引 唯一性，HashSet 类中的元素的不能重复"},{header:"常见的成员方法",slug:"常见的成员方法",content:"与 Set 集合一致"},{header:"HashSet 集合遍历",slug:"hashset-集合遍历",content:"转数组循环遍历 迭代器遍历 增强 for 循环遍历(for each)"},{header:"HashSet 存储字符串类型的数据",slug:"hashset-存储字符串类型的数据",content:""},{header:"HashSet 存储 Integer 类型的数据",slug:"hashset-存储-integer-类型的数据",content:""},{header:"HashSet 存储的数据类型可以不一致",slug:"hashset-存储的数据类型可以不一致",content:`package com.wuziqi.gobang.Set; import java.util.HashSet; public class HashSets { public static void main(String[] args) { HashSet<String> hs = new HashSet<String>(); hs.add("aaa"); hs.add("ccc"); hs.add("aaa"); // 唯一性：去重 hs.add("bbb"); System.out.println(hs); // [aaa, ccc, bbb] HashSet<Integer> hs1 = new HashSet<Integer>(); hs1.add(1); hs1.add(3); hs1.add(1); // 唯一性：去重 hs1.add(4); System.out.println(hs1); // [1, 3, 4] HashSet ts2 = new HashSet(); ts2.add(1); ts2.add("3"); ts2.add(true); System.out.println(ts2); // [1, 3, true] }
}`},{header:"HashSet 存储自定义的类默认不去重的问题",slug:"hashset-存储自定义的类默认不去重的问题",content:`去重：重写 hashCode()和 equals()方法package com.wuziqi.gobang.Set; import java.util.HashSet;
import java.util.Objects; public class HashSets { public static void main(String[] args) { HashSet<String> hs = new HashSet<String>(); hs.add("aaa"); hs.add("ccc"); hs.add("bbb"); hs.add("aaa"); System.out.println(hs); // [aaa, ccc, bbb] HashSet<Integer> hs1 = new HashSet<Integer>(); hs1.add(1); hs1.add(3); hs1.add(1); hs1.add(4); System.out.println(hs1); // [1, 3, 4] HashSet ts2 = new HashSet(); ts2.add(1); ts2.add("3"); ts2.add(true); System.out.println(ts2); // [1, 3, true] HashSet<Cat> ts3 = new HashSet<Cat>(); ts3.add(new Cat("Tom", 18)); ts3.add(new Cat("Tony", 20)); ts3.add(new Cat("Jerry", 18)); ts3.add(new Cat("Tom", 18)); ts3.add(new Cat("Tony", 21)); ts3.add(new Cat("Jessy", 18)); System.out.println(new Cat("Tom", 18).equals(new Cat("Tom", 18))); // false System.out.println(ts3); // [Cat{name='Tony', age=21}, Cat{name='Tom', age=18}, // Cat{name='Jessy', age=18}, Cat{name='Jerry', age=18}, // Cat{name='Tony', age=20}, Cat{name='Tom', age=18}] // 去重：重写hashCode和equals方法 }
}
class Cat{ private String name; private int age; public Cat(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Cat{" + "name='" + name + '\\'' + ", age=" + age + '}'; } // 去重的最终方案 @Override public boolean equals(Object o) { // return true; ：写死了 equals Cat c = (Cat) o; // 向下转型，获取到成员属性 return this.name.equals(c.name) && this.age == c.age; } @Override public int hashCode() { // return 1; ：写死了 hashCode // *12：为了避免出现 18 +12 = 12 + 18 这样的问题发生 // 还有比如 "Aa".hashCode() = "BB".hashCode() 这样的问题 // 这种问题出现了也没事，因为在equals方法中，会判断 name是否一致 return this.name.hashCode() + this.age * 12; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/LinkedHashSet%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"LinkedHashSet 实现类",slug:"linkedhashset-实现类",content:`与 HashSet实现类一样，唯一的不同就是 LinkedHashSet 实现类是有序的集合（即：存进去的顺序和取出来的顺序是一致的）
package com.wuziqi.gobang.Set; import java.util.LinkedHashSet; public class HashSets { public static void main(String[] args) { LinkedHashSet <String> lhs = new LinkedHashSet<String>(); lhs.add("aaa"); lhs.add("ccc"); lhs.add("bbb"); System.out.println(lhs); // [aaa, ccc, bbb] }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/Set%E6%8E%A5%E5%8F%A3.html",title:"",pathLocale:"/",contents:[{header:"Set 子接口",slug:"set-子接口",content:"需要导包，在 java.util 下；Set 也是接口，是 Collection 的子接口。"},{header:"Set 集合的特点",slug:"set-集合的特点",content:"无序性（即：存进去的顺序和取出来的顺序不一定一致） 无索引 唯一性，Set 集合中的元素的不能重复"},{header:"常见的成员方法",slug:"常见的成员方法",content:"与 Collection 集合一致"},{header:"Set 集合遍历",slug:"set-集合遍历",content:"转数组循环遍历 迭代器遍历 增强 for 循环遍历(for each)"},{header:"方法的使用案例",slug:"方法的使用案例",content:`package com.wuziqi.gobang.Set; import java.util.HashSet;
import java.util.Set; public class Demo01 { public static void main(String[] args) { Set<String> set = new <String> HashSet(); set.add("aaa"); set.add("bbb"); set.add("ccc"); // set.add(111);// 由于泛型，编译报错 Boolean b = set.add("aaa"); System.out.println(b); // 唯一性：false System.out.println(set); // 无序性：[aaa, ccc, bbb] }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/%E5%8D%95%E5%88%97%E9%9B%86%E5%90%88Collection/Set/TreeSet%E5%AE%9E%E7%8E%B0%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"TreeSet 实现类",slug:"treeset-实现类",content:""},{header:"TreeSet 集合的特点",slug:"treeset-集合的特点",content:"无序性（即：存进去的顺序和取出来的顺序不一定一致） 无索引 唯一性，TreeSet 类中的元素的不能重复 可以排序的(按照规则排序，默认按照字典顺序由小到大)"},{header:"常见的成员方法",slug:"常见的成员方法",content:"与 Set 集合一致"},{header:"TreeSet 集合遍历",slug:"treeset-集合遍历",content:"转数组循环遍历 迭代器遍历 增强 for 循环遍历(for each)"},{header:"TreeSet 存储字符串类型的数据",slug:"treeset-存储字符串类型的数据",content:"按照字典顺序，由小到大排序"},{header:"TreeSet 存储 Integer 类型的数据",slug:"treeset-存储-integer-类型的数据",content:`按照数字的大小，由小到大排序package com.wuziqi.gobang.Set; import java.util.TreeSet; public class TreeSets { public static void main(String[] args) { TreeSet<String> ts = new TreeSet<String>(); ts.add("aaa"); ts.add("ccc"); ts.add("bbb"); System.out.println(ts); // 按照字典顺序，由小到大：[aaa, bbb, ccc] TreeSet<Integer> ts1 = new TreeSet<Integer>(); ts1.add(1); ts1.add(3); ts1.add(2); System.out.println(ts1); // 按照数字大小由小到大：1 2 3 }
}`},{header:"TreeSet 存储的数据类型不一致的问题",slug:"treeset-存储的数据类型不一致的问题",content:`TreeSet 一般与泛型一起使用package com.wuziqi.gobang.Set; import java.util.TreeSet; public class TreeSets { public static void main(String[] args) { TreeSet ts2 = new TreeSet(); ts2.add(1); ts2.add("3"); ts2.add(true); // 运行时期异常：因为底层排序没有规则， // 所以出现类型转换异常，因此一般与泛型一起使用 System.out.println(ts2); }
}`},{header:"TreeSet 存储自定义的类的问题",slug:"treeset-存储自定义的类的问题",content:`如果存储的是自定义类，需要构造 Comparable 或者 Comparator，不然也会报类型转换异常package com.wuziqi.gobang.Set; import java.util.TreeSet; public class TreeSets { public static void main(String[] args) { TreeSet<Pig> ts3 = new TreeSet<Pig>(); ts3.add(new Pig("小猪", 1)); ts3.add(new Pig("小猪", 2)); // 运行时期异常：没有给排序规则，类型转换异常， // 因此需要Comparable 或者 Comparator System.out.println(ts3); }
}
class Pig{ private String name; private int age; public Pig(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Pig{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`},{header:"TreeSet 存储自定义的类需要满足的条件",slug:"treeset-存储自定义的类需要满足的条件",content:"自然排序 Comparable 如何实现自然排序？ 自定义的这个类要实现 Comparable 接口 重写 compareTo 抽象方法 在 compareTo 方法中定义排序规则 return 0：集合中的元素只有一个 return 正数：集合中的元素按照正序排列 return 负数：集合中的元素按照倒序排列 比较器 Comparator 如何实现比较器？ 自定义类 创建 TreeSet 对象时，在构造方法中传递 Comparator 的对象 重写 compareTo 抽象方法 在 compare() 方法中定义排序规则 return 0：集合中的元素只有一个 return 正数：集合中的元素按照正序排列 return 负数：集合中的元素按照倒序排列"},{header:"Comparable",slug:"comparable",content:`// Comparable 自然排序
package com.wuziqi.gobang.Set; import java.util.TreeSet; public class TreeSets { public static void main(String[] args) { TreeSet<Pig> ts3 = new TreeSet<Pig>(); ts3.add(new Pig("小猪", 1)); ts3.add(new Pig("小猪", 2)); System.out.println(ts3); }
}
class Pig implements Comparable<Pig>{ private String name; private int age; public Pig(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Pig{" + "name='" + name + '\\'' + ", age=" + age + '}'; } @Override public int compareTo(Pig o) { return 0; /** * return 0：[Pig{name='小猪', age=1}] * return 正数：[Pig{name='小猪', age=1}, Pig{name='小猪', age=2}] * return 负数：[Pig{name='小猪', age=2}, Pig{name='小猪', age=1}] */ }
}`},{header:"Comparator",slug:"comparator",content:`// Comparator 比较器
package com.wuziqi.gobang.Set; import java.util.Comparator;
import java.util.TreeSet; public class TreeSets { public static void main(String[] args) { TreeSet<Dog> ts4 = new TreeSet<Dog>(new Comparator<Dog>() { @Override public int compare(Dog o1, Dog o2) { return 0; /** * return 0：[Dog{name='小狗', age=18}] * return 正数：[Dog{name='小狗', age=18}, Dog{name='小狗', age=30}] * return 负数：[Dog{name='小狗', age=30}, Dog{name='小狗', age=18}] */ } }); ts4.add(new Dog("小狗", 18)); ts4.add(new Dog("小狗", 30)); System.out.println(ts4); }
}
class Dog { private String name; private int age; public Dog(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Dog{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/Request%E5%AF%B9%E8%B1%A1%E6%A6%82%E8%BF%B0.html",title:"",pathLocale:"/",contents:[{header:"Request 对象",slug:"request-对象",content:"Request 对象 就是请求对象，是 Tomcat 封装的一个对象，里面包含了所有的请求消息的格式"},{header:"Request 体系结构",slug:"request-体系结构",content:`ServletRequest 接口：
javax.servlet.ServletRequest 接口 HttpServletRequest 接口：
javax.servlet.http.HttpServletRequest 接口 RequestFacade 类：
org.apache.catalina.connector.RequestFacade 实现类`},{header:"Request 对象原理",slug:"request-对象原理",content:"客户端发送请求，Tomcat 服务器接收到请求，Tomcat 服务器会创建 Request 对象，Request 对象会封装请求消息，然后将 Request 对象传递给 Servlet 程序供我们使用，我们能够通过 Request 对象获取到各种想要的数据了"}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/Request%E5%AF%B9%E8%B1%A1%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82%E6%B6%88%E6%81%AF.html",title:"",pathLocale:"/",contents:[{header:"Request 对象获取请求消息",slug:"request-对象获取请求消息",content:""},{header:"1. 获取请求行数据",slug:"_1-获取请求行数据",content:`方法
作用 String getMethod()
获取请求方式 String getContextPath()
获取虚拟目录 String getServletPath()
获取 Servlet 路径 String getRequestURI()
获取请求 URI StringBuffer getRequestURL()
获取请求 URL String getQueryString()
获取请求参数 String getProtocol()
获取请求协议 String getRemoteAddr()
获取客户端 IP`},{header:"2. 获取请求头数据",slug:"_2-获取请求头数据",content:`方法
作用 String getHeader(String name)
根据请求头的名称获取请求头的值 Enumeration <String> getHeaderNames()
获取所有的请求头 Enumeration getHeaders(String name)
根据请求头的名称获取值 int getIntHeader(String name)
根据请求头获取对应的值，注意值 只能是 int 类型`},{header:"3. 获取请求体数据",slug:"_3-获取请求体数据",content:`方法
作用 ServletInputStream getInputStream()
获取请求体数据，只有 post 请求才有请求体 BufferedReader getReader()
获取请求体数据，只有 post 请求才有请求体`},{header:"方法的使用",slug:"方法的使用",content:`package com.Request; import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.Enumeration; @WebServlet("/ReqDemo01")
public class Demo01 extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { // 1. 获取请求行信息 // String getMethod() 获取请求方式 // String getContextPath() 获取虚拟目录 // String getServletPath() 获取 Servlet 路径 // String getRequestURI() 获取请求 URI // StringBuffer getRequestURL()获取请求 URL // String getQueryString() 获取请求参数 // String getProtocol() 获取请求协议 // String getRemoteAddr() 获取客户端 IP地址 String method = req.getMethod(); System.out.println(method); String contextPath = req.getContextPath(); System.out.println(contextPath); String servletPath = req.getServletPath(); System.out.println(servletPath); String requestURI = req.getRequestURI(); System.out.println(requestURI); StringBuffer requestURL = req.getRequestURL(); System.out.println(requestURL); String queryString = req.getQueryString(); // 浏览器默认对URL进行了编码，所以需要使用URLDecoder解码 String params = URLDecoder.decode(queryString,"UTF-8"); System.out.println(params); // post请求时 queryString 为null，所以直接打印就行了，不能转码，否则会报错 System.out.println(queryString); String protocol = req.getProtocol(); System.out.println(protocol); String remoteAddr = req.getRemoteAddr(); System.out.println(remoteAddr); // 结果： // GET || POST // /MyWebApp_war // /ReqDemo01 // /MyWebApp_war/ReqDemo01 // http://localhost:8080/MyWebApp_war/ReqDemo01 // username=张三&password=123456 || null // HTTP/1.1 // 0:0:0:0:0:0:0:1 // 2. 获取请求头的信息(Accept、Connection、Content-Length、Referer、User-Agent、Cookie) // String getHeader(String name) 根据请求头的名称获取请求头的值 // Enumeration <String> getHeaderNames() 获取所有的请求头 // Enumeration <String> getHeaders(String name) 根据请求头的名称获取值 // int getIntHeader(String name) 根据请求头获取对应的值，注意值 只能是 int 类型 String header = req.getHeader("User-Agent"); System.out.println(header); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 //text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8, // application/signed-exchange;v=b3;q=0.7 String header1 = req.getHeader("Accept"); System.out.println(header1); // text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7 String header2 = req.getHeader("Connection"); System.out.println(header2); // keep-alive String header3 = req.getHeader("Content-Length"); System.out.println(header3); // null || 43(参数字符串长度数值) String header4 = req.getHeader("Referer"); System.out.println(header4); // http://localhost:8080/MyWebApp_war/demo.html String header5 = req.getHeader("Cookie"); System.out.println(header5); // JSESSIONID=1DC30CA8374390C718CEE5E28235215D Enumeration<String> headerNames = req.getHeaderNames(); while (headerNames.hasMoreElements()) { String name = headerNames.nextElement(); String value = req.getHeader(name); System.out.println(name + ":" + value); //host:localhost:8080 //connection:keep-alive //sec-ch-ua:"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24" //sec-ch-ua-mobile:?0 //sec-ch-ua-platform:"Windows" //upgrade-insecure-requests:1 //user-agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 // Safari/537.36 //accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8, // application/signed-exchange;v=b3;q=0.7 //sec-fetch-site:same-origin //sec-fetch-mode:navigate //sec-fetch-user:?1 //sec-fetch-dest:document //referer:http://localhost:8080/MyWebApp_war/demo.html //accept-encoding:gzip, deflate, br, zstd //accept-language:zh-CN,zh;q=0.9 //cookie:JSESSIONID=1DC30CA8374390C718CEE5E28235215D } Enumeration<String> headerNames1 = req.getHeaders("User-Agent"); while (headerNames1.hasMoreElements()) { String name = headerNames1.nextElement(); String value = req.getHeader(name); System.out.println(name + ":" + value); // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36:null } int header6 = req.getIntHeader("Content-Length"); System.out.println(header6); // -1(get) || 43(post) // 3. 获取请求体对象 // ServletInputStream getInputStream() 获取请求体数据，只有 post 请求才有请求体 // BufferedReader getReader() 获取请求体数据，只有 post 请求才有请求体 System.out.println("-----------------------------"); ServletInputStream sis = req.getInputStream(); System.out.println(sis.toString()); // org.apache.catalina.connector.CoyoteInputStream@7c206475 int i = sis.read(); System.out.println(i); // 117 System.out.println("-----------------------------"); BufferedReader br = req.getReader(); System.out.println(br.toString()); // org.apache.catalina.connector.CoyoteReader@6c796bd0 while (br.ready()) { String body = br.readLine(); String params = URLDecoder.decode(body,"UTF-8"); System.out.println(params); // username=张三&password=123456 } } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E5%85%B1%E4%BA%AB%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"共享相关方法",slug:"共享相关方法",content:`在 web 核心中有 4 大域对象(ServletContext、HttpSession、ServletRequest、HttpServletResponse)，
每个域对象负责管理自己所在的范围，Request 域对象负责管理的就是一次请求和一次响应之间的范围。根据域对象所具备的方法可以判断出，域对象就是一个容器，容器在一次请求时生成，在一次请求后就销毁了。注意，是一次请求和一次响应之间。 域对象的产生和销毁 域对象方法
作用 void setAttribute(String name, Object value)
存储数据 Object getAttribute(String name)
获取数据 void removeAttribute(String name)
移除数据`},{header:"转发请求实现共享数据",slug:"转发请求实现共享数据",content:`因为域对象的销毁是在一次请求和一次相应之间的，第二次请求时已经销毁，获取到的是 null，目前可以通过请求转发来实现共享数据。 // Servlet1
// 存储数据
request.setAttribute("name", "张三");
// 请求转发
request.getRequestDispatcher("/Servlet2").forward(request, response); // Servlet2
// 获取数据
String name = (String) request.getAttribute("name");
System.out.println(name);
// 张三
请求转发实现数据共享`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E8%BD%AC%E5%8F%91%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"转发相关方法",slug:"转发相关方法",content:'转发：转发就是实现通过 Servlet 可以访问另外一个 Servlet 或者 html 的功能，这个功能和重定向很像，但有一定区别。 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { request.setCharacterEncoding("utf-8"); // 转发到某个servlet或者html request.getRequestDispatcher("/servlet||/demo.html").forward(request, response); }'},{header:"转发的特点",slug:"转发的特点",content:`浏览器地址栏不变
转发只能进行内部跳转
转发是一次请求，一次响应，也是地址栏不能改变的原因
转发可以实现数据的共享(设置和获取)
转发可以实现 WEB-INF 目录下的资源访问
Tomcat 会自动添加项目的虚拟路径`},{header:"重定向",slug:"重定向",content:`重定向是两次请求，两次响应
重定向可以访问其他站点
重定向地址栏会改变
正常情况下，重定向不能实现数据的共享，因为第二次请求是外部进来的
重定向不能实现 WEB-INF 目录下的资源访问， 因为第二次请求是外部进来的
需要手动设置项目的虚拟路径了，因为可以访问外部了`},{header:"内部转发实现 WEB-INF 目录下的资源访问",slug:"内部转发实现-web-inf-目录下的资源访问",content:'浏览器(外部)正常是不能访问内部(WEB-INF、classes、META-INF、static、upload、resources)目录下的资源的，但是可以通过内部转发实现访问。 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { request.setCharacterEncoding("utf-8"); // 转发到某个servlet或者html request.getRequestDispatcher("/WEB-INF/demo.html").forward(request, response); }'},{header:"防盗链的实现",slug:"防盗链的实现",content:'protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { request.setCharacterEncoding("utf-8"); // 如果referer存在，且包含youku，则转发到servlet||/demo.html // 否则重定向到error.html String referer = request.getHeader("referer"); if(referer != null && referer.contains("youku")){ request.getRequestDispatcher("/servlet||/demo.html").forward(request, response); }else{ response.sendRedirect(request.getContextPath()+"/error.html"); } }'}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/Http/Request%E5%AF%B9%E8%B1%A1/%E8%BD%AC%E5%8F%91%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E7%9A%84%E6%96%B9%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"转发请求参数的方法",slug:"转发请求参数的方法",content:`方法
作用 Map <String, String[]> getParameterMap()
获取所有参数的 name 和 value String getParameter(String name)
获取指定 name 的项目的 value 值(input) Enumeration <String> getParameterNames()
获取所有参数的 name String[] getParameterValues(String name)
获取指定 name 的所有项目的 value 值(radio 或者 checkbox) package com.Request; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Map;
import java.util.Set; @WebServlet("/ReqDemo02")
public class Demo02 extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { // String getParameter(String name) 获取指定名称的请求参数 // Enumeration <String> getParameterNames() 获取所有请求参数的名称 // String[] getParameterValues(String name) 获取指定名称的请求参数 // Map <String, String[]> getParameterMap() 获取所有请求参数的名称和值 // 设置编码格式，否则post请求会出现乱码问题 req.setCharacterEncoding("utf-8"); String username = req.getParameter("username"); System.out.println(username); // 张三 String password = req.getParameter("password"); System.out.println(password); // 123456 Enumeration<String> parameterNames = req.getParameterNames(); while (parameterNames.hasMoreElements()) { String nextElement = parameterNames.nextElement(); System.out.println(nextElement + ":" + req.getParameter(nextElement)); // username:张三 // password:123456 // hobby:basketball } String[] hobbies = req.getParameterValues("hobby"); for (String hobby : hobbies) { System.out.println(hobby); // basketball // pingpang } Map<String, String[]> map = req.getParameterMap(); Set<Map.Entry<String, String[]>> set = map.entrySet(); for (Map.Entry<String, String[]> entry : set) { String key = entry.getKey(); String[] value = entry.getValue(); for (String s : value) { System.out.println(key + ":" + s); // username:张三 // password:123456 // hobby:basketball // hobby:pingpang } } } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}`},{header:"请求参数中文出现乱码问题",slug:"请求参数中文出现乱码问题",content:`一般情况下，浏览器段都会在 html 种设置为 utf-8，而 tomcat 默认的编码为 ISO-8859-1，所以需要进行编码转换。
注意：乱码出现在 post 请求中，get 请求在 tomcat8 版本之后已经解决了，所以 get 请求不需要进行编码转换。 // 获取请求参数
String username = request.getParameter("username");
// 进行编码转换
username = new String(username.getBytes("ISO-8859-1"), "UTF-8");`},{header:"BeanUtils 工具类的使用",slug:"beanutils-工具类的使用",content:`方法
作用 BeanUtils.populate(user, map);
把 表单项的 map 集合数据封装到 user 对象中 package com.Request; import com.domain.User;
import org.apache.commons.beanutils.BeanUtils; import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map; @WebServlet("/ReqDemo03")
public class Demo03 extends HttpServlet { @Override protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { req.setCharacterEncoding("utf-8"); User user = new User(); Map<String, String[]> map = req.getParameterMap(); try { BeanUtils.populate(user, map); } catch (Exception e) { e.printStackTrace(); } System.out.println(user); } @Override protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException { this.doGet(req, resp); }
}
// User.java
package com.domain; public class User { private String username; private String password; private int sex; private int age; private String email; public String getUsername() { return username; } public void setUsername(String username) { this.username = username; } public String getPassword() { return password; } public void setPassword(String password) { this.password = password; } public int getSex() { return sex; } public void setSex(int sex) { this.sex = sex; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } public String getEmail() { return email; } public void setEmail(String email) { this.email = email; } @Override public String toString() { return "User{" + "username='" + username + '\\'' + ", password='" + password + '\\'' + ", sex=" + sex + ", age=" + age + ", email='" + email + '\\'' + '}'; }
}
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head> <meta charset="UTF-8"> <title>Title</title>
</head>
<body>
<form method="post" action="http://localhost:8080/MyWebApp_war/ReqDemo03"> 姓名：<input type="text" name="username"/></br> 密码：<input type="password" name="password"/></br> 性别：<input type="radio" name="age" value="男" /> <input type="radio" name="age" value="女" /></br> 年龄：<input type="number" name="age"/></br> email:<input type="text" name="email"/></br> <input type="submit" value="提交"/>
</form>
</body>
</html>`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E4%BA%8B%E5%8A%A1/%E4%BA%8B%E5%8A%A1%E5%A4%84%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"事务",slug:"事务",content:`事务？
大事：比如转账操作，至少需要 2 条及以上语句才能完成；小事：比如新增操作，只需要 1 条语句即可完成。`},{header:"事务处理",slug:"事务处理",content:`处理什么问题？
从 A 的卡里扣 100，转到 B 的卡里；由于网络故障，从 A 的卡里扣了 100，但是 B 的卡里钱不能到账。
方案一：
start transaction; -- 手动开启事务
commit; -- 提交事务(提交后数据才会修改)
rollback; -- 回滚事务(如果不提交的话会自动回滚) -- 常见的组合： -- start transaction;
-- commit; -- start transaction;
-- rollback; -- 开始事务后，要么 commit 提交，要么 rollback 回滚
-- 具体案例： -- 开启事务
start transaction; -- 转账操作
update account set money = money - 100 where name = 'A';
update account set money = money + 100 where name = 'B'; -- 提交事务
commit; -- 回滚事务
-- rollback;
方案二： 事务相关命令
作用 select @@autocommit
查看自动提交还是手动提交 set @@autocommit = 0
禁止自动提交 set @@autocommit = 1
开启自动提交 -- 开启自动提交
set @@autocommit = 0; -- 转账操作
update account set money = money - 100 where name = 'A';
update account set money = money + 100 where name = 'B'; -- 提交事务
commit; -- 回滚事务
-- rollback;
;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E4%BA%8B%E5%8A%A1/%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB.html",title:"",pathLocale:"/",contents:[{header:"隔离级别",slug:"隔离级别",content:""},{header:"事务的四大特性",slug:"事务的四大特性",content:`原子性(最小的单位，不能再往下分)、持久性、一致性(操作前后是一致的)、隔离性(事务间没有关系，互不影响)
当多个事务，并发操作同一张表时，会打破隔离性，以此产生新的问题(脏读、不可重复读、幻读，幻读也是虚读) 脏读：事务 A 读到了事务 B 未提交的数据 不可重复读：事务 A 读到了事务 B 提交后 修改(update)的 数据 幻读：事务 A 读到了事务 B 提交后 新增(insert)的或减少的 数据 丢失更新：事务 A 更新了事务 B 未提交的数据`},{header:"事务的隔离级别",slug:"事务的隔离级别",content:`串行化：事务 A 执行时，事务 B 必须等待事务 A 执行完毕后才能执行；这就比较卡。 隔离级别
是否会脏读
不可重复读
幻读
丢失更新
默认级别 读未提交(read uncommitted)
是
是
是
是
--- 读已提交(read committed)
否
是
是
是
Oracle 可重复读(repeatable read)
否
否
是
是
MySQL 串行化(serializable)
否
否
否
否
---`},{header:"设置隔离级别",slug:"设置隔离级别",content:`隔离级别相关命令
作用 select @@tx_isolation
查看当前隔离级别 set global transaction isolation level 隔离级别
设置全局的隔离级别 set session transaction isolation level 隔离级别
设置当前会话的隔离级别`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%88%86%E7%BB%84.html",title:"",pathLocale:"/",contents:[{header:"分组",slug:"分组",content:`select * from 表名 group by 字段;
注意： 分组之后查询的字段，必须是分组字段，或者是使用聚合函数处理的字段 where 和 having 都是条件语句；但 where 在分组前，而 having 在分组后 -- 按照性别分组，每组多少人
select count(*) from students group by sex; -- 按照年龄分组，查询出每组的人数
-- 要求：只显示人数大于2的记录
-- 先分组，再筛选
select age, count(*) from students group by age having count(*) > 2; -- 20岁以上的人，按照年龄分组，查询每组的人数
-- 要求：只显示人数大于2的记录
-- 先筛选，后分组，再筛选
select age, count(*) from students where age > 20 group by age having count(*) > 2; -- 按照性别分组，查询出每组的人数
-- 要求：只显示人数大于2的记录，并且按照人数降序排序
-- 先分组，后筛选
select sex, count(*) from students group by sex
having count(*) > 2 order by count(*) desc; -- 筛选出年龄大于18的记录，然后按照性别分组，查询出每组的人数，只展示人数大于2的记录
-- 要求：先筛选，后分组，再筛选
select sex, count(*) from students where age > 18 group by sex
having count(*) > 2; -- 查询学生信息，按照年龄段分组查询，小于 18 的为一组，18-20 为一组，大于 20 的为一组
select age, count(*), case when age < 18 then '小于 18'
when age >= 18 and age <= 20 then '18-20'
else '大于 20' end as 年龄段 from students;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%88%86%E9%A1%B5.html",title:"",pathLocale:"/",contents:[{header:"分页查询",slug:"分页查询",content:`select * from 表名 limit 个数, 每页条数;
其中，个数从 0 开始，即默认为 0；每页条数默认为 10 条；个数等于 第 n 页 * 每页条数 -- 查询第一页的记录
select * from students limit 0, 10; -- 查询第二页的记录
select * from students limit 10, 10; -- 查询第三页的记录
select * from students limit 20, 10; -- 查询第四页的记录
select * from students limit 30, 10; -- 查询第n页
select * from students limit (n-1) * 每页条数, 每页条数;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%8D%E6%9D%82%E7%9A%84%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"复杂的条件查询",slug:"复杂的条件查询",content:""}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%8E%92%E5%BA%8F.html",title:"",pathLocale:"/",contents:[{header:"排序",slug:"排序",content:`select * from 表名 order by 字段名 排序方式;
排序方式：asc（升序）、desc（降序），默认升序。 -- 查询学生表，按照年龄排序
select * from student order by age; -- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序
select * from student order by age, id; -- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，并且只显示前三条记录
select * from student order by age, id limit 3; -- 查询学生表，按照年龄排序，如果年龄相同，则按照学号排序，
-- 并且只显示前三条记录，并且只显示年龄大于18的记录
select * from student where age > 18 order by age, id limit 3; -- 查询学生信息，按照年龄降序，其中年龄为18、19、20，如果年龄相同，则按照学号排序
select * from student where age in(18, 19, 20) order by age, id desc; -- 查询学生信息，按照姓名由字典顺序进行排序
select * from student order by name; -- 查询100个学生信息，按照年龄由大到小进行排序，年龄相同的话，
-- 按照姓名由字典顺序进行排序，
-- 如果姓名也相同的话，按照学号降序排序
select * from student order by age desc, name, id desc limit 100;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2%E5%9F%BA%E7%A1%80.html",title:"",pathLocale:"/",contents:[{header:"条件查询",slug:"条件查询",content:"select * from 表名 where 条件; select 字段1, 字段2, 字段3,... from 表名 where 条件; select name, age from student where age > 18; select * from student where age > 18 and sex = '男';"},{header:"常用的条件",slug:"常用的条件",content:`操作符
描述 =
等于 >
大于 <
小于 >=
大于等于 <=
小于等于 != 或者 <>
不等于 between ... and ...
在范围内(包头包尾) 字段名 in(value1, value2, ...)
查询字段值为 xxx 的数据 is null
是空 is not null
不是空 and 或者 &&
逻辑与 or 或者 | |
逻辑或 distinct
去重 like
模糊查询 as
给列名或者表名起别名 create table student( id int primary key auto_increment, name varchar(20) not null, age int, sex varchar(5)
); insert into student(name, age, sex) values('Tom', 18, '男');
insert into student(name, age, sex) values('Jerry', 20, '男');
insert into student(name, age, sex) values('Rose', 19, '女');
insert into student(name, age, sex) values('Wei', 21, '女');
insert into student(name, age, sex) values('Wei', 21, '女'); select * from student where age >= 18 and age <= 20; select * from student where age between 18 and 20; select * from student where name in('Tom', 'Rose'); -- 查询是否空值，千万别写成 sex = null;
select * from student where sex is null; select * from student where sex is not null; select * from student where name = 'Tom' and age = 18; select * from student where name = 'Tom' && age = 18; -- 针对某个字段去重
select distinct age from student; -- 针对多个字段去重
select distinct name, age from student; -- 针对整体去重
select distinct * from student; -- 模糊查询：查询表中名字的第二个字母是e的数据
-- %代表0个或多个字符，_代表任意的一个字符
select * from student where name like '_e%'; -- 查询名字中包含e的
select * from student where name like '%e%'; -- 可以用汉字，且不需要引号；引号加上也没问题
select id as Id, name as 姓名, age as 年龄, sex as 性别 from student; -- as 也可以省略，同样也是给字段起别名
select id Id, name 姓名, age 年龄, sex 性别 from student; -- 给表起别名
select * from student as s; select s.id, s.name, s.age, s.sex from student as s;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E7%BA%A6%E6%9D%9F.html",title:"",pathLocale:"/",contents:[{header:"约束",slug:"约束",content:`非空约束：不能为空，即 不能为 Null -- 格式
create table 表名( 字段名 数据类型 not null
); -- 非空约束
create table student{ name varchar(20) not null, age int not null, sex varchar(5) not null
} -- 删除非空约束
alter table 表名 modify 字段名 数据类型; alter table student modify name varchar(20); -- 添加非空约束
alter table 表名 modify 字段名 数据类型 not null; alter table student modify name varchar(20) not null; 唯一约束：不能重复(Null 是没有值，没有重不重复这么一说) -- 格式
create table 表名( 字段名 数据类型 unique
); -- 唯一约束
create table student{ name varchar(20) unique, age int, sex varchar(5)
}; -- 删除唯一约束
alter table 表名 drop index 字段名; alter table student drop index name; -- 添加唯一约束
alter table 表名 modify 字段名 数据类型 unique; alter table student modify name varchar(20) unique; 主键约束：非空且唯一，每张表只能有一个主键 -- 格式
create table 表名( 字段名 数据类型 primary key
); -- 主键约束
create table student{ id int primary key, name varchar(20), age int, sex varchar(5)
}; -- 删除主键约束
alter table 表名 drop primary key; alter table student drop primary key;
-- 删除之后需要再改一下(这个方法就这样)
alter table modify id int; -- 添加主键约束
alter table 表名 modify 字段名 数据类型 primary key; alter table student modify id int primary key; 主键自增约束：在主键的基础上自动增长，所以也是只能有一个，在上一条的基础上加 1 -- 格式
create table 表名( 字段名 数据类型 auto_increment
); -- 自增约束
create table student{ id int primary key auto_increment, name varchar(20), age int, sex varchar(5)
}; -- 删除自增约束
alter table 表名 modify 字段名 数据类型; alter table student modify id int; -- 添加自增约束
alter table 表名 modify 字段名 数据类型 auto_increment; alter table student modify id int auto_increment; 外键约束 -- 标准格式
create table 表2名( constraint 键名 数据类型 foreign key (外键字段) references 表1名(表1的字段)
);
-- 简化格式(没有给键名，系统默认生成，键名可通过 show create table 表名 查看)
create table 表2名( foreign key (外键字段) references 表1名(表1的字段)
); -- 外键约束
create table user( id int primary key, name varchar(20)
);
create table student{ id int primary key, name varchar(20), uid int, constraint stu_user_fk foreign key (uid) references user(id)
}; -- 删除外键约束
alter table 表2名 drop foreign key 外键的名字; alter table student drop foreign key stu_user_fk; -- 添加外键约束
alter table 表2名
add constraint 外键的名字 foreign key (外键字段) references 表1名(表1的字段); alter table student
add constraint stu_user_fk foreign key (uid) references user(id); -- 注意：添加上外键约束后，想要删除主表是不行的，两种方式删除主表
-- 1. 先删除外键约束，再删除子表
-- 2. 先删除子表，此时因为子表没了那约束自然没了`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%8D%95%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"聚合函数",slug:"聚合函数",content:`注意：
avg() 和 sum()函数中计算时，可能不准确，因为涉及到某个数字可能为 Null，即新增的时候没有给值，所以此时可以用 ifnull()函数来处理。
还有很多聚合函数，这里只介绍常用的，其他可以自行百度或者查文档。 函数
作用 count()
统计数量 sum()
求和 max()
最大值 min()
最小值 avg()
平均值 truncate(x,y)
保留 y 位小数 round(x,y)
保留 y 位小数 ifnull(x,y)
如果 x 值为 Null，返回 y -- 查询学生数量
select count(*) from student; select count(id) from student; select count(name) as 总的人数 from student; select count(id) from student where age > 18 and sex = 1; -- 查询学生年龄总和
select sum(age) from student; select sum(age) as 总年龄 from student; select sum(age) as 总年龄 from student where sex = 1; -- 查询学生年龄最大值
select max(age) from student; select max(age) as 最大年龄 from student; select max(age) as 最大年龄 from student where sex = 1; -- 查询学生年龄最小值
select min(age) from student; select min(age) as 最大年龄 from student where sex = 1; -- 查询学生年龄平均值
select avg(age) as 学生平均年龄 from student; -- 查询学生平均年龄保持两位小数
select truncate(avg(age), 2) as 学生平均年龄 from student;
select truncate(sum(age)/count(*), 2) as 学生平均年龄 from student; -- 查询学生平均年龄保留一位小数
select round(avg(age), 1) as 学生平均年龄 from student;
select round(sum(age)/count(*), 1) as 学生平均年龄 from student; -- 查询学生平均年龄保留一位小数
select round(ifnull(sum(age), 0)/count(*), 1) as 学生平均年龄 from student;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%86%85%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"内连接查询",slug:"内连接查询",content:`取交集
-- 隐式内连接查询格式
select * from a, b where a.id = b.id; -- 显式内连接查询格式
select * from a inner join b on a.id = b.id; -- 隐式内连接和显示内连接，查询结果一样的，只是写法不同
-- 内连接就是筛选出符合条件 a.id = b.id 的记录，剩余的去掉
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a, b;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | aaa |
-- | 2 | b | 2 | bbb |
-- +----+------+----+------+`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%96%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"外连接查询",slug:"外连接查询",content:`取交集 + 左表(或者右表)的剩余记录的补充
-- 左外连接查询格式
select * from a left join b on a.id = b.id;
-- 左外连接案例
-- 左外连接查询结果集 = 符合连接条件的记录 + 左表剩余记录
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a left join b on a.id = b.id;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | aaa |
-- | 2 | b | 2 | bbb |
-- | 3 | c | null | null |
-- +----+------+----+------+
-- 右外连接查询格式
select * from a right join b on a.id = b.id;
-- 右外连接案例
-- 右外连接查询结果集 = 符合连接条件的记录 + 右表剩余记录
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a right join b on a.id = b.id;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | aaa |
-- | 2 | b | 2 | bbb |
-- | null | null | 4 | ccc |
-- +----+------+----+------+`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%A4%9A%E8%A1%A8%E5%85%B3%E7%B3%BB.html",title:"",pathLocale:"/",contents:[{header:"多表关系",slug:"多表关系",content:""},{header:"一对一",slug:"一对一",content:"一个男人只能娶一个媳妇，一个女人也只能嫁给一个男人；一般不会有一对一，因为完全可以把两个表合二为一"},{header:"一对多(多对一)",slug:"一对多-多对一",content:`一个人可以有多个电脑，而一台电脑只能属于一个人
怎么做呢？
一般需要在多的一方添加一个字段，并添加外键关联，关联少的一方的主键 -- user表
create user( id int auto_increment primary key, u_name varchar(20)
);
-- computer表
create table computer( id int auto_increment primary key, c_name varchar(20), uid int, constraint c_u_key foreign key(uid) references user(id)
); insert into user (u_name) values ('张三');
insert into computer (c_name, uid) values ('电脑1', 1);
insert into computer (c_name, uid) values ('电脑2', 1);
-- 新增的时候可以给个默认值，也可以不写；或者给null也不报错，但是给null就没有意义了
insert into computer (c_name) values ('电脑3');
insert into computer (c_name, uid) values ('电脑4', 1); -- 删除外键约束
alter table computer drop foreign key c_u_key;
-- 添加外键约束
alter table computer add constraint c_u_key foreign key(uid) references user(id);`},{header:"多对多关系",slug:"多对多关系",content:`多个学生上多种课程
多个课程被多个学生选
学生表和课程表之间需要一个中间表，中间表中需要两个外键分别关联学生表和课程表 -- 学生表
create table student( id int auto_increment primary key, name varchar(20)
);
-- 课程表
create table course( id int auto_increment primary key, name varchar(20)
);
-- 中间表
create table student_course( sid int, cid int, primary key(sid, cid), -- 联合主键 constraint stu_key foreign key(sid) references student(id), constraint cou_key foreign key(cid) references course(id)
); -- 新增
insert into student (name) values ('张三');
insert into course (name) values ('语文');
insert into student_course (sid, cid) values (1, 1);
-- 删除
delete from student_course where sid = 1 and cid = 1;`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E5%AD%90%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"子查询",slug:"子查询",content:`嵌套查询：查询语句里边还有查询语句；里边的查询语句称为子查询。 子查询结果为一条记录 -- 案例：查询 a 表中 id 值等于 b 表中名字为 Tony 的记录的 id select * from a where id XXX;
select * from b where name = 'Tony'; -- 子查询
select id from a where id = (select id from b where name = 'Tony'); -- 结果：
-- +----+------+
-- | id | name |
-- +----+------+
-- | 1 | Tony |
-- +----+------+ 子查询结果为多个记录 -- 案例：查询 a 表中 id 值等于 b 表中姓名为 Tony、Jerry 的记录的id select * from a where id in XXX;
select * from b where name = 'Tony' or name = 'Jerry'; -- 子查询
select id from a where id in (select id from b where name = 'Tony' or name = 'Jerry'); -- 结果：
-- +----+------+
-- | id | name |
-- +----+------+
-- | 1 | Tony |
-- | 2 | Jerry |
-- +----+------+ 子查询结果为一张表 -- 案例：查询 a 表中的记录信息，要求：用子查询实现按照 id 降序排列 -- 子查询方式1
select * from XXX;
select * from a order by id desc;
select * from (select * from a order by id desc) newA; -- 子查询方式2
select * from a where id in XXX;
select * from a order by id desc;
select * from a where id in (select id from a order by id desc); -- 结果：
-- +----+------+
-- | id | name |
-- +----+------+
-- | 5 | Tony |
-- | 4 | Jerry |
-- | 3 | Tom |
-- | 2 | Jerry |
-- | 1 | Tony |`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E7%AC%9B%E5%8D%A1%E5%B0%94%E7%A7%AF%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"笛卡尔积查询",slug:"笛卡尔积查询",content:`所有多表查询的，最基础查询；笛卡尔积查询本身没有意义，平时不会用。
-- 格式
create table a( id int, name varchar(20)
); create table b( id int, name varchar(20)
); select * from a, b;
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); create table b( id int, name varchar(20)
);
insert into b values(1,'aaa');
insert into b values(2,'bbb');
insert into b values(4,'ccc'); select * from a, b;
-- 结果:
-- 1 a 1 aaa
-- 2 b 1 aaa
-- 3 c 1 aaa
-- 1 a 2 bbb
-- 2 b 2 bbb
-- 3 c 2 bbb
-- 1 a 4 ccc
-- 2 b 4 ccc
-- 3 c 4 ccc`}]},{path:"/admin/Java/Java%E8%BF%9B%E9%98%B6/MySql/%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2/%E8%87%AA%E8%BF%9E%E6%8E%A5%E6%9F%A5%E8%AF%A2.html",title:"",pathLocale:"/",contents:[{header:"自连接查询",slug:"自连接查询",content:`-- 自外连接查询格式
select * from a a1,a a2 where a1.id = a2.id;
-- 自连接查询案例
create table a( id int, name varchar(20)
);
insert into a values(1,'a');
insert into a values(2,'b');
insert into a values(3,'c'); select * from a a1,a a2 where a1.id = a2.id;
-- 结果:
-- +----+------+----+------+
-- | id | name | id | name |
-- +----+------+----+------+
-- | 1 | a | 1 | a |
-- | 2 | b | 2 | b |
-- | 3 | c | 3 | c |
-- +----+------+----+------+`}]},{path:"/admin/Java/Spring/IoC/IoC%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F/%E6%97%A0%E5%8F%82%E6%9E%84%E9%80%A0.html",title:"",pathLocale:"/",contents:[{header:"无参构造(默认的)",slug:"无参构造-默认的",content:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <bean id="user" class="pojo.User"> <property name="name" value="无参构造"/> </bean>
</beans>
// User
package pojo; import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; @NoArgsConstructor
@Data
@AllArgsConstructor
public class User { private String name; public void show() { System.out.println(name); }
}
// test1
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import pojo.User; public class Test1 { public static void main(String[] args) throws Exception { ApplicationContext context = new ClassPathXmlApplicationContext("bean1.xml"); User user = (User)context.getBean("user"); user.show(); }
}`}]},{path:"/admin/Java/Spring/IoC/IoC%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F/%E6%9C%89%E5%8F%82%E6%9E%84%E9%80%A0.html",title:"",pathLocale:"/",contents:[{header:"有参构造",slug:"有参构造",content:`<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"> <!--1.下标赋值--> <bean id="user1" class="pojo.User"> <constructor-arg index="0" value="张三"/> </bean> <!--2. 类型赋值(不建议使用)--> <bean id="user2" class="pojo.User"> <constructor-arg type="java.lang.String" value="李四"/> </bean> <!--3. 参数名赋值--> <bean id="user3" class="pojo.User"> <constructor-arg name="name" value="王五"/> </bean>
</beans>
// Test2 import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import pojo.User; // 有参构造
public class Test2 { public static void main(String[] args) throws Exception { ApplicationContext context = new ClassPathXmlApplicationContext("bean2.xml"); User user1 = (User) context.getBean("user1"); user1.show(); User user2 = (User) context.getBean("user1"); user2.show(); User user3 = (User) context.getBean("user1"); user3.show(); }
}`}]},{path:"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/thymeleaf/thymeleaf.html",title:"",pathLocale:"/",contents:[{header:"thymeleaf",slug:"thymeleaf",content:""},{header:"模板",slug:"模板",content:'需要在 html 标签上添加thymeleaf 头部约束 <html xmlns:th="http://www.thymeleaf.org"></html>'},{header:"源码",slug:"源码",content:`// ThymeleafAutoConfiguration.java 截取
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(ThymeleafProperties.class)
@ConditionalOnClass({ TemplateMode.class, SpringTemplateEngine.class })
@AutoConfigureAfter({ WebMvcAutoConfiguration.class, WebFluxAutoConfiguration.class })
public class ThymeleafAutoConfiguration { // ...
}`},{header:"配置文件",slug:"配置文件",content:`// ThymeleafProperties.java 截取
@ConfigurationProperties(prefix = "spring.thymeleaf")
public class ThymeleafProperties { private static final Charset DEFAULT_ENCODING = StandardCharsets.UTF_8; public static final String DEFAULT_PREFIX = "classpath:/templates/"; public static final String DEFAULT_SUFFIX = ".html";
}`}]},{path:"/admin/Java/SpringBoot/web%E9%9B%86%E6%88%90/thymeleaf/thymeleaf%E8%AF%AD%E6%B3%95.html",title:"",pathLocale:"/",contents:[{header:"thymeleaf 语法",slug:"thymeleaf-语法",content:"thymeleaf 和 vue 一样，都是模板引擎，用于在 html 中插入数据；只是 thymeleaf 的开头是 th:，而 vue 是 v-"},{header:"表达式",slug:"表达式",content:`语法
说明
语法
说明
语法
说明
语法
说明 \${...}
变量表达式
[[...]]
文本
th:if
判断
th:href
设置 href 属性 *{...}
选择表达式
[(...)]
属性
th:unless
判断
th:src
设置 src 属性 #{...}
消息表达式
[()]
消息
th:switch
判断
th:attr
设置任意属性 @{...}
URL 表达式
[()]
URL
th:case
判断
th:class
设置 class 属性 ~{...}
片段表达式
[()]
片段
th:each
遍历
th:style
设置 style 属性 th:message
设置文本内容
th:messages
设置文本内容
th:text
设置文本内容
th:utext
同 th:tex，唯一区别是会转义 html 标签`},{header:"举例：",slug:"举例",content:`<div th:text="\${user.name}"></div>
<div th:utext="<h1>\${user.name}</h1>"></div>
<div th:each="user:\${users}" th:text="\${user}"></div>
<div th:each="user:\${users}">[[\${user}]]</div>
<div th:if="\${user.age > 18}"></div>
<div th:src="@{\${user.avatar}}"></div>
<div th:fragment="userList"> <ul> <li th:each="user:\${users}">[[\${user.name}]]</li> </ul>
</div>
<!-- 条件 -->
<div th:if="\${user.age > 18}">成年</div>
<div th:unless="\${user.age > 18}">未成年</div>
<div th:switch="\${user.sex}"> <p th:case="1">男</p> <p th:case="2">女</p> <p th:case="*">未知</p>
</div>
<!-- 循环 -->
<ul> <li th:each="user:\${users}">[[\${user.name}]]</li>
</ul>
<!-- 属性设置 -->
<a th:href="@{/user/list}">用户列表</a> <img th:src="@{/user/avatar}" />
<div th:attr="title=\${user.name}, data-id=\${user.id}"></div>
<div th:attr=" title=\${user.name}, data-id=\${user.id}, class=\${user.sex == 1 ? 'man' : 'woman'} "
></div>
<div th:class="\${user.sex == 1 ? 'man' : 'woman'}"></div>
<div th:style="'color: ' + (\${user.sex == 1 ? 'blue' : 'red'})"></div>
<!-- 消息表达式属性赋值 -->
<div th:text="#{user.name}"></div>
<div th:text="#{user.name(\${user.name})}"></div>`},{header:"表达式对象",slug:"表达式对象",content:`语法
说明
语法
说明 #ctx
web context 对象
#session
HttpSession 对象 #vars
变量对象
#servletContext
ServletContext 对象 #locale
locale 对象
#execInfo
表达式解析器相关信息 #request
HttpServletRequest 对象
#config
配置对象 #response
HttpServletResponse 对象
#objects
全部对象`},{header:"举例：",slug:"举例-1",content:`<div th:text="\${#ctx.request.contextPath}"></div>
<div th:text="\${#vars.user.name}"></div>
<div th:text="\${#locale.language}"></div>
<div th:text="\${#request.getAttribute('user')}"></div>
<div th:text="\${#response.getHeader('Content-Type')}"></div>
<div th:text="\${#session.getAttribute('user')}"></div>
<div th:text="\${#servletContext.getAttribute('user')}"></div>
<div th:text="\${#execInfo.templateName}"></div>
<div th:text="\${#config.maxUploadSize}"></div>`},{header:"表达式运算符",slug:"表达式运算符",content:`语法
说明
语法
说明 +
加法运算符
!=
不等于运算符 -
减法运算符
<
小于运算符 *
乘法运算符
>
大于运算符 /
除法运算符
<=
小于等于运算符 %
取模运算符
>=
大于等于运算符 ==
等于运算符
!
逻辑非运算符`},{header:"举例：",slug:"举例-2",content:'<div th:text="${user.age % 2}"></div>\n<div th:text="${user.age != 18}"></div>\n<div th:text="${!user.sex}"></div>'},{header:"片段表达式",slug:"片段表达式",content:`语法
说明
语法
说明 th:insert
插入片段
th:fragment
定义片段 th:replace
替换片段
th:remove
移除片段 th:include
包含片段`},{header:"举例：",slug:"举例-3",content:`<!-- 定义片段 -->
<div th:fragment="userList"> <ul> <li th:each="user:\${users}">[[\${user.name}]]</li> </ul>
</div>
<!-- 插入片段 -->
<div th:insert="~{userList::userList}"></div>
<!-- 替换片段 -->
<div th:replace="~{userList::userList}"></div>
<!-- 包含片段 -->
<div th:include="~{userList::userList}"></div>
<!-- 移除片段 -->
<div th:remove="all">移除所有</div>
<div th:remove="tag">移除标签</div>
<div th:remove="body">移除内容</div>
<div th:remove="all-but-first">移除除第一个外的所有</div>
<div th:remove="all-but-last">移除除最后一个外的所有</div>
<div th:remove="none">不移除</div>`},{header:"真实案例",slug:"真实案例",content:`<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org"> <head> <meta charset="UTF-8" /> <title>首页</title> </head> <body> <!--/*@thymesVar id="msg" type=""*/--> <div th:text="\${msg}"></div> <div th:utext="\${msg}"></div> <hr /> <!--/*@thymesVar id="url" type=""*/--> <a th:href="@{\${url}}">百度</a> <hr /> <!--/*@thymesVar id="lists" type=""*/--> <div th:each="list:\${lists}" th:text="\${list}"></div> <div th:each="list:\${lists}">[[\${list}]]</div> </body>
</html>
package com.ths.controller; import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping; import java.util.Arrays; // 在templates目录下的页面只能通过controller来跳转
// 需要thymeleaf模板引擎的支持
@Controller
public class IndexController { @GetMapping("/a") public String index(Model model){ String[] arr = {"java","python","c++"}; model.addAttribute("msg","<h1>Hello Thymeleaf</h1>"); model.addAttribute("url","https://www.baidu.com"); model.addAttribute("lists", Arrays.asList(arr)); return "index"; }
}`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/defineStore.html",title:"",pathLocale:"/",contents:[{header:"defineStore",slug:"definestore",content:"定义一个 store"},{header:"定义",slug:"定义",content:`import { defineStore } from "pinia"; export const useStore = defineStore("storeId", { state: () => { return { counter: 0, }; }, actions: { increment() { this.counter++; }, }, getters: { doubleCounter: (state) => state.counter * 2, },
});`},{header:"参数",slug:"参数",content:`id：唯一标识符，用于在应用程序中访问 store
options：包含 store 的配置选项的对象`},{header:"options",slug:"options",content:`state：一个函数，返回一个包含 store 状态的对象
actions：一个对象，包含 store 的方法
getters：一个对象，包含 store 的计算属性`},{header:"使用",slug:"使用",content:`import { useStore } from "./store"; export default { setup() { const store = useStore(); store.increment(); // 调用 store 的方法 console.log(store.doubleCounter); // 访问 store 的计算属性 },
};`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/getters%E5%92%8Cactions.html",title:"",pathLocale:"/",contents:[{header:"getters 和 actions",slug:"getters-和-actions",content:""},{header:"getters",slug:"getters",content:`类似于计算属性，getters 的返回值会根据它的依赖被缓存起来，并且只有当它的依赖值发生了改变才会被重新计算 getters 中的函数接收一个 state 作为其第一个参数
getters 可以被嵌套调用，它们可以返回其他 getters
getters 可以通过 this 访问其他 getters
getters 可以通过 this.$pinia 访问整个 store 实例
getters 可以通过 this.$pinia.state 访问整个 state
getters 可以通过 this.$pinia.getters 访问整个 getters
getters 可以通过 this.$pinia.actions 访问整个 actions
getters 可以通过 this.$pinia.commit 访问整个 commit
getters 可以通过 this.$pinia.dispatch 访问整个 dispatch import { defineStore } from "pinia"; export const useStore = defineStore("main", { state: () => ({ count: 0, }), getters: { doubleCount: (state) => state.count * 2, },
});`},{header:"actions",slug:"actions",content:`actions 类似于组件中的 methods，它们可以包含任意逻辑，包括异步操作 actions 可以通过 this 访问整个 store 实例
actions 可以通过 this.$pinia.state 访问整个 state
actions 可以通过 this.$pinia.getters 访问整个 getters
actions 可以通过 this.$pinia.actions 访问整个 actions
actions 可以通过 this.$pinia.commit 访问整个 commit
actions 可以通过 this.$pinia.dispatch 访问整个 dispatch import { defineStore } from "pinia"; export const useStore = defineStore("main", { state: () => ({ count: 0, }), actions: { // 支持同步和异步 increment() { this.count++; }, },
});`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/pinia%E4%B8%8Evuex%E7%9A%84%E5%8C%BA%E5%88%AB.html",title:"",pathLocale:"/",contents:[{header:"pinia 和 vuex 的区别",slug:"pinia-和-vuex-的区别",content:`pinia 是一个更轻量级的状态管理库，而 vuex 是一个更重量级的状态管理库。
pinia 不需要 mutations，而 vuex 需要 mutations。
pinia 可以直接修改 state 中的数据，而 vuex 需要通过 mutations 来修改 state 中的数据。
pinia 的模块化不需要 modules，而 vuex 的模块化需要 modules。
pinia 的热模块替换功能比 vuex 更好。
pinia 的插件和社区支持比 vuex 更好。
pinia 的 TypeScript 支持比 vuex 更好。
pinia 的 devtools 支持比 vuex 更好。`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._dispose.html",title:"",pathLocale:"/",contents:[{header:"store.$dispose",slug:"store-dispose",content:"store.$dispose 是 Pinia 提供的一个方法，用于手动销毁一个 store 实例。"},{header:"用法",slug:"用法",content:`import { createApp } from "vue";
import { createPinia } from "pinia"; const app = createApp(App);
const pinia = createPinia(); const store = pinia.defineStore("myStore", { state: () => ({ count: 0, }), actions: { increment() { this.count++; }, },
}); app.use(pinia);
app.mount("#app"); // 在某个时刻手动销毁 store 实例
store.$dispose();`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._forceUpdate.html",title:"",pathLocale:"/",contents:[{header:"store.$forceUpdate",slug:"store-forceupdate",content:`强制更新 store 中的数据 import { defineStore } from "pinia"; export const useStore = defineStore("main", { state: () => ({ count: 0, }), actions: { increment() { this.count++; }, $forceUpdate() { this.$patch({ count: this.count + 1, }); }, },
});
const store = useStore(); store.$forceUpdate();`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._id.html",title:"",pathLocale:"/",contents:[{header:"store.$id",slug:"store-id",content:"store.$id 是一个只读属性，用于获取 store 的唯一标识符。"},{header:"示例",slug:"示例",content:`import { defineStore } from 'pinia' const useStore = defineStore('main', { state: () => ({ count: 0, }), actions: { increment() { this.count++ }, },
}`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._onAction.html",title:"",pathLocale:"/",contents:[{header:"store.$onAction",slug:"store-onaction",content:"监听 action 的执行"},{header:"语法",slug:"语法",content:`store.$onAction( callback: ( action: Action<Context>, onError: (error: Error) => void ) => void | (() => void), detached?: boolean
): () => void`},{header:"参数",slug:"参数",content:`callback：回调函数，当 action 执行时触发
detached：是否在 store 被销毁时自动移除监听器`},{header:"返回值",slug:"返回值",content:"() => void：取消监听器的函数"},{header:"示例",slug:"示例",content:"import { defineStore } from 'pinia' const useStore = defineStore('main', { state: () => ({ count: 0, }), actions: { increment() { this.count++ }, },\n}) const store = useStore() const unwatch = store.$onAction(({ before: (action, args) => { console.log(`before ${action.name} with args ${args}`) }, after: (action, args, returnedValue) => { console.log(`after ${action.name} with args ${args} and returned ${returnedValue}`) }, onError: (action, error) => { console.log(`error in ${action.name} with args ${error}` }\n})\n}) unwatch()"}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._patch.html",title:"",pathLocale:"/",contents:[{header:"store.$patch",slug:"store-patch",content:"修改 store 中的状态"},{header:"语法",slug:"语法",content:"store.$patch(partialState | partialStateFunction);"},{header:"参数",slug:"参数",content:"partialState | partialStateFunction"},{header:"示例",slug:"示例",content:`import { defineStore } from "pinia"; const useStore = defineStore("main", { state: () => ({ counter: 0, }), actions: { increment() { this.counter++; }, },
}); const store = useStore(); // 1. 传递一个对象
store.$patch({ counter: store.counter + 1, name: "Abigail",
}); // 2. 传递一个函数
store.$patch((state) => { state.counter++; state.name = "Abigail";
});`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._reset.html",title:"",pathLocale:"/",contents:[{header:"store.$reset",slug:"store-reset",content:"重置 store 的状态到初始状态"},{header:"示例",slug:"示例",content:`import { defineStore } from "pinia"; const useCounterStore = defineStore("counter", { state: () => ({ count: 0, }), actions: { increment() { this.count++; }, $reset() { this.count = 0; }, },
}); const store = useCounterStore();
store.increment();
console.log(store.count); // 1 store.$reset(); // 重置状态到初始状态
console.log(store.count); // 0`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._state.html",title:"",pathLocale:"/",contents:[{header:"store.$state",slug:"store-state",content:"获取 store 的 state"},{header:"示例",slug:"示例",content:`import { defineStore } from "pinia"; const useStore = defineStore("main", { state: () => ({ counter: 0, }), actions: { increment() { this.counter++; }, },
}); const store = useStore(); console.log(store.$state); // { counter: 0 }`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/store._subscribe.html",title:"",pathLocale:"/",contents:[{header:"store.$subscribe",slug:"store-subscribe",content:"监听 store 的变化"},{header:"参数",slug:"参数",content:`callback：监听回调函数
options：配置项`},{header:"返回值",slug:"返回值",content:"unsubscribe：取消监听的函数"},{header:"示例",slug:"示例",content:`import { defineStore } from "pinia"; const useStore = defineStore("main", { state: () => ({ count: 0, }), actions: { increment() { this.count++; }, },
}); const store = useStore(); // 监听 store 的变化
store.$subscribe((mutation, state) => { console.log(mutation); console.log(state);
}); store.increment(); // 输出：{ type: 'increment', storeId: 'main' } { count: 1 }`},{header:"options",slug:"options",content:`detached：是否在组件卸载后仍然监听 store 的变化
deep：是否深度监听 store 的变化
flush：监听的时机，可选值：pre、post、sync
onCleanup：取消监听时的回调函数`},{header:"示例",slug:"示例-1",content:`import { defineStore } from "pinia"; const useStore = defineStore("main", { state: () => ({ count: 0, }), actions: { increment() { this.count++; }, },
}); const store = useStore(); // 监听 store 的变化
store.$subscribe( (mutation, state) => { console.log(mutation); console.log(state); }, { detached: true, deep: true, flush: "pre", onCleanup() { console.log("取消监听"); }, }
); store.increment(); // 输出：{ type: 'increment', storeId: 'main' } { count: 1 }`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/storeToRefs.html",title:"",pathLocale:"/",contents:[{header:"storeToRefs",slug:"storetorefs",content:"store 中的 state 转换为 ref"},{header:"语法",slug:"语法",content:'import { storeToRefs } from "pinia"; const { name, age } = storeToRefs(store);'},{header:"示例",slug:"示例",content:`import { defineStore } from "pinia";
import { storeToRefs } from "pinia"; const useStore = defineStore("main", { state: () => ({ name: "张三", age: 18, }),
}); const store = useStore(); const { name, age } = storeToRefs(store);`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/%E5%88%86%E6%A8%A1%E5%9D%97.html",title:"",pathLocale:"/",contents:[{header:"模块化",slug:"模块化",content:""}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/pinia/%E6%8C%81%E4%B9%85pinia.html",title:"",pathLocale:"/",contents:[{header:"持久化 pinia",slug:"持久化-pinia",content:""},{header:"介绍",slug:"介绍",content:"Pinia 提供了插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。"},{header:"持久化插件",slug:"持久化插件",content:"Pinia 提供了一个插件机制，允许开发者自定义插件，实现各种功能，比如持久化、日志记录、状态同步等。其中，持久化插件可以将 Pinia 的状态持久化到本地存储中，比如 localStorage 或者 sessionStorage，这样即使页面刷新或者关闭，状态也不会丢失。"},{header:"pinia-plugin-persist",slug:"pinia-plugin-persist",content:"pinia-plugin-persist 是一个用于将 Pinia 状态持久化的插件，它可以将状态保存到 localStorage 或者 sessionStorage 中，并在页面刷新或者关闭后自动恢复状态。"},{header:"安装",slug:"安装",content:"npm install pinia-plugin-persist"},{header:"使用",slug:"使用",content:`import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; const pinia = createPinia();
pinia.use(piniaPluginPersist); export default pinia;`},{header:"配置",slug:"配置",content:`import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; const pinia = createPinia();
pinia.use(piniaPluginPersist, { key: "my-app", // 本地存储的键名 storage: localStorage, // 本地存储的方式，可以是 localStorage 或者 sessionStorage paths: ["user.name", "user.age"], // 需要持久化的状态路径
}); export default pinia;`},{header:"整体案例",slug:"整体案例",content:`// src/store/index.js
// 开启缓存
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; const store = createPinia();
store.use(piniaPluginPersist); export default store;
// src/store/user.js
import { defineStore } from "pinia"; export const useUserStore = defineStore("user", { state: () => ({ name: "张三", age: 18, gender: "男", }), actions: { setName(name) { this.name = name; }, setAge(age) { this.age = age; }, }, getters: { fullName: (state) => \`\${state.name} \${state.age}\`, }, persist: { // 直接配置就行了，index.js中已经配置了 enabled: true, // 开启持久化 strategies: [ { key: "user", // 本地存储的键名 // 本地存储的方式，可以是 localStorage 或者 sessionStorage storage: localStorage, paths: ["name", "age"], // 需要持久化的状态路径，不需要gender所以不缓存 }, ], },
});`},{header:"注意事项",slug:"注意事项",content:`持久化插件会将状态保存到本地存储中，如果状态中包含敏感信息，需要谨慎使用。
持久化插件会在页面刷新或者关闭后自动恢复状态，如果状态中包含动态生成的数据，需要小心处理。
持久化插件只支持简单的数据类型，如果状态中包含复杂的数据类型，需要手动处理。
持久化插件可能会影响性能，如果状态非常大，需要谨慎使用。
持久化插件可能会与其他插件冲突，需要小心处理。
持久化插件只支持持久化状态，如果需要持久化其他数据，需要手动处理。`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/customRef.html",title:"",pathLocale:"/",contents:[{header:"customRef(自定义 ref)",slug:"customref-自定义-ref",content:"创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显式控制。"},{header:"自定义 ref 函数示例(实现防抖效果)",slug:"自定义-ref-函数示例-实现防抖效果",content:"setup() { // 自定义一个ref，名为:myRef function myRef(value, delay) { let timer return customRef((track, trigger) => { return { get() { console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`) // 通知Vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的) track() return value }, set(newValue) { console.log(`有人把myRef这个容器中数据改为了:${newValue}`) clearTimeout(timer) timer = setTimeout(() => { value = newValue trigger() // 通知Vue去重新解析模板 }, delay) }, } }) } // let keyword = ref('hello') // 使用Vue提供的ref let keyword = myRef('hello', 500) // 使用自定义的ref\n}"}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/provide%E5%92%8Cinject.html",title:"",pathLocale:"/",contents:[{header:"provide 和 inject",slug:"provide-和-inject",content:"查看组件通信中的介绍"}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/readonly%E5%92%8CshallowReadonly.html",title:"",pathLocale:"/",contents:[{header:"readonly 与 shallowReadonly",slug:"readonly-与-shallowreadonly",content:`也可以是 ref 定义的;一般用于引用了别人的数据,并且在当前页面内不允许改。
readonly 和 shallowReadonly 的区别在于 readonly 是深度只读,而 shallowReadonly 是浅度只读,只对第一层属性进行只读处理,不会对嵌套的属性进行只读处理 import { reactive, readonly, shallowReadonly } from "vue"; const state = reactive({ name: "张三", age: 18, info: { height: 1.88, weight: 75, },
}); // readonly:深度只读
const state2 = readonly(state); // shallowReadonly:浅度只读
const state3 = shallowReadonly(state); state2.name = "李四"; // 报错
state3.name = "李四"; // 报错
state3.info.height = 1.88; // 不报错`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/shallowReactive%E5%92%8CshallowRef.html",title:"",pathLocale:"/",contents:[{header:"shallowReactive 与 shallowRef",slug:"shallowreactive-与-shallowref",content:""},{header:"shallowReactive",slug:"shallowreactive",content:"只处理对象最外层属性的响应式（浅响应式）。"},{header:"shallowRef",slug:"shallowref",content:"只处理基本数据类型的响应式，不进行对象的响应式处理。"},{header:"什么时候使用？",slug:"什么时候使用",content:`shallowReactive: 如果有一个对象数据，结构比较深，但变化时只是外层属性变化。 shallowRef: 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换。 import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from "vue"; export default { name: "Demo", setup() { // 数据 // let person = shallowReactive({ //只考虑第一层数据的响应式 let person = reactive({ name: "张三", age: 18, job: { j1: { salary: 20, }, }, }); let x = shallowRef({ y: 0, }); console.log("******", x); // 返回一个对象（常用） return { person, // 这里应该是 person 而不是 X x, }; },
};`},{header:"shallowReactive",slug:"shallowreactive-1",content:`import { shallowReactive } from "vue"; export default { name: "Demo", setup() { // 数据 let person = shallowReactive({ name: "张三", age: 18, job: { j1: { salary: 20, }, }, }); // 方法 function changeInfo() { person.name = "李四"; person.age = 48; person.job.j1.salary = 30; // 不进行响应式处理 } // 返回一个对象（常用） return { person, changeInfo, };
}`},{header:"shallowRef",slug:"shallowref-1",content:`import { shallowRef } from "vue"; export default { name: "Demo", setup() { // 数据 let x = shallowRef({ y: 0, }); // 方法 function changeInfo() { x.value = { y: 10 }; // 重新赋值，会触发响应式 } // 返回一个对象（常用） return { x, changeInfo, }; },
};`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/toRaw%E5%92%8CmarkRaw.html",title:"",pathLocale:"/",contents:[{header:"toRaw 与 markRaw",slug:"toraw-与-markraw",content:""},{header:"toRaw",slug:"toraw",content:`作用: 将一个由reactive生成的响应式对象转为普通对象。
使用场景: 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。`},{header:"markRaw",slug:"markraw",content:`作用: 标记一个对象，使其永远不会再成为响应式对象。
应用场景: 有些值不应被设置为响应式的，例如复杂的第三方类库等。
当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。`},{header:"toRaw 示例",slug:"toraw-示例",content:`let person = reactive({ name: "张三", age: 18, job: { j1: { salary: 20, }, },
}); function showRawPerson() { const p = toRaw(person); p.age; // 直接读取p的age属性 // p变了，但是person没变 console.log(p);
}`},{header:"markRaw 示例",slug:"markraw-示例",content:`function addCar() { let car = { name: "奔驰", price: 40 }; person.car = markRaw(car); // person 是响应式的，但是 car 是不变的
}`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96CompositionApi/%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%88%A4%E6%96%AD.html",title:"",pathLocale:"/",contents:[{header:"Vue3 的响应式系统辅助函数",slug:"vue3-的响应式系统辅助函数",content:""},{header:"isRef",slug:"isref",content:"作用: 检查一个值是否为一个ref对象。"},{header:"isReactive",slug:"isreactive",content:"作用: 检查一个对象是否是由reactive创建的响应式代理。"},{header:"isReadonly",slug:"isreadonly",content:"作用: 检查一个对象是否是由readonly创建的只读代理。"},{header:"isProxy",slug:"isproxy",content:`作用: 检查一个对象是否是由reactive或者readonly方法创建的代理。 import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy,
} from "vue"; export default { name: "App", setup() { let car = reactive({ name: "奔驰", price: "40W" }); let sum = ref(0); let car2 = readonly(car); console.log(isRef(sum)); // true console.log(isReactive(car)); // true console.log(isReadonly(car2)); // true console.log(isProxy(car)); // true console.log(isProxy(sum)); // false, 因为ref底层用的是definedProperty，他的响应式是需要reactive的帮助的 return { ...toRefs(car) }; },
};`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96%E5%8F%98%E5%8C%96/%E5%85%A8%E5%B1%80API%E7%9A%84%E8%BD%AC%E7%A7%BB.html",title:"",pathLocale:"/",contents:[{header:"全局 API 的转移(具体参考 vue 迁移指南)",slug:"全局-api-的转移-具体参考-vue-迁移指南",content:`Vue3.0 对 Vue2.x 中的 API 进行了一些调整，主要包括将全局 API 从Vue.xxx调整到应用实例app上。 // Vue2.x中的写法
Vue.component("MyButton", { data: () => ({ count: 0, }), template: '<button @click="count++">Clicked {{ count }} times.</button>',
}); // 注册全局指令
Vue.directive("focus", { inserted: (el) => el.focus(),
}); Vue3.0 中对全局 API 进行了调整，将全局 API 从 Vue.xxx 调整到应用实例 app 上。 2.x 全局 API(Vue)
3.x 实例 API(app) Vue.config.xxxx
app.config.xxxx Vue.config.productionTip
移除 Vue.component
app.component Vue.directive
app.directive Vue.mixin
app.mixin Vue.use
app.use Vue.prototype
app.config.globalProperties`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%85%B6%E4%BB%96%E5%8F%98%E5%8C%96/%E5%85%B6%E4%BB%96%E6%9B%B4%E6%94%B9.html",title:"",pathLocale:"/",contents:[{header:"其他更改 (具体参考 vue 迁移指南)",slug:"其他更改-具体参考-vue-迁移指南",content:""},{header:"1. data 必须是函数，不能是对象类型",slug:"_1-data-必须是函数-不能是对象类型",content:""},{header:"2. 过度类 关于类名的更改",slug:"_2-过度类-关于类名的更改",content:`// Vue2.x写法
.v-enter,
.v-leave-to { opacity: 0;
}
.v-leave,
.v-enter-to { opacity: 1;
} // Vue3.x写法
.v-enter-from,
.v-leave-to { opacity: 0;
}
.v-leave-from,
.v-enter-to { opacity: 1;
}`},{header:"4. 移除 keyCode 作为 v-on 的修饰符，同时不再支持 Vue.config.keyCodes",slug:"_4-移除-keycode-作为-v-on-的修饰符-同时不再支持-vue-config-keycodes",content:""},{header:"5. 移除 v-on.native 修饰符",slug:"_5-移除-v-on-native-修饰符",content:""},{header:"6. 移除 filter",slug:"_6-移除-filter",content:""},{header:"7. 移除内联模板",slug:"_7-移除内联模板",content:""},{header:"8. 移除 $children",slug:"_8-移除-children",content:""},{header:"9. 移除 $listeners",slug:"_9-移除-listeners",content:""},{header:"10. 移除 $set",slug:"_10-移除-set",content:""},{header:"11. 移除 $delete",slug:"_11-移除-delete",content:""},{header:"12. 移除 $on, $off 和 $once 实例方法",slug:"_12-移除-on-off-和-once-实例方法",content:""},{header:"13. 移除 $destroy 实例方法",slug:"_13-移除-destroy-实例方法",content:""},{header:"14. 移除 $on, $off 和 $once 实例方法",slug:"_14-移除-on-off-和-once-实例方法",content:""},{header:"15. 移除 $destroy 实例方法",slug:"_15-移除-destroy-实例方法",content:""},{header:"16. 移除 $isServer 实例属性",slug:"_16-移除-isserver-实例属性",content:""},{header:"17. 移除 $scopedSlots 实例属性",slug:"_17-移除-scopedslots-实例属性",content:""},{header:"18. 移除 $createElement 实例方法",slug:"_18-移除-createelement-实例方法",content:""},{header:"19. 移除 $attrs 和 $listeners 属性",slug:"_19-移除-attrs-和-listeners-属性",content:""},{header:"20. 移除 $slots 属性",slug:"_20-移除-slots-属性",content:""},{header:"21. 移除 $createElement 实例方法",slug:"_21-移除-createelement-实例方法",content:""},{header:"22. 移除 $attrs 和 $listeners 属性",slug:"_22-移除-attrs-和-listeners-属性",content:""},{header:"23. 移除 $slots 属性",slug:"_23-移除-slots-属性",content:""},{header:"24. 移除 $createElement 实例方法",slug:"_24-移除-createelement-实例方法",content:""}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/computed%E5%92%8Cwatch.html",title:"",pathLocale:"/",contents:[{header:"computed 和 watch",slug:"computed-和-watch",content:"computed 和 watch 与 Vue2 中的用法基本一致，只是语法上有些不同"},{header:"computed",slug:"computed",content:`计算属性，用于声明式地描述一个值依赖于其他值，并且当依赖变化时，自动更新该值
computed 的值会缓存，只有当依赖的值发生变化时，才会重新计算 import { computed } from "vue"; export default { setup() { const count = ref(0); const doubleCount = computed(() => count.value * 2); return { count, doubleCount, }; },
};`},{header:"watch",slug:"watch",content:`监听一个或多个响应式数据的变化，并在变化时执行回调函数
watch 可以监听 ref 和 reactive 的数据，也可以监听一个 getter 函数的返回值 let sum = ref(0);
let msg = ref("你好啊");
let person = ref({ name: "张三", age: 18, job: { j1: { salary: 20, }, },
});
console.log(person); // 监控单个属性的变化
watch(sum, (newValue, oldValue) => { console.log("sum的值变化了", newValue, oldValue);
});
// 深度监控person变化
watch( person, (newValue, oldValue) => { console.log("person的值变化了", newValue, oldValue); }, { deep: true }
); // 返回一个对象（常用）
return { sum, msg, person,
};`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/provide%E5%92%8Cinject.html",title:"",pathLocale:"/",contents:[]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/reactive%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"reactive 函数",slug:"reactive-函数",content:`定义一个对象类型的响应式数据(基本类型不要用它,要用 ref 函数)；reactive 定义的响应式数据是“深层次的”。内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。 <!-- 接收一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象） -->
const 代理对象 = reactive(源对象)
<template> <h1>一个人的信息</h1> <h2>姓名: {{ person.name }}</h2> <h2>年龄: {{ person.age }}</h2> <h3>工作种类: {{ person.job.type }}</h3> <h3>工作薪水: {{ person.job.salary }}</h3> <h3>爱好: {{ person.hobby }}</h3> <h3>测试的数据c: {{ person.job.a.b.c }}</h3> <button @click="changeInfo">修改人的信息</button>
</template>
<script>
import { reactive } from "vue"; export default { name: "App", setup() { let person = reactive({ name: "张三", age: 18, job: { type: "前端工程师", salary: "30K", a: { b: { c: 666, }, }, hobby: ["抽烟", "喝酒", "烫头"], }, }); // 方法 function changeInfo() { person.name = "李四"; person.age = 48; person.job.type = "UI设计师"; person.job.salary = "60K"; person.job.a.b.c = 999; person.hobby[0] = "学习"; } return { person, changeInfo, }; },
};
<\/script>
<script>
// 返回一个对象（常用）
function changeInfo() { // ...
}
return { person, changeInfo };
<\/script>`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/reactive%E5%92%8Cref%E5%AF%B9%E6%AF%94.html",title:"",pathLocale:"/",contents:[{header:"ref 与 reactive 对比",slug:"ref-与-reactive-对比",content:""},{header:"从定义数据角度对比:",slug:"从定义数据角度对比",content:`ref 用来定义：基本类型数据。
reactive 用来定义：对象（或数组）类型数据。
备注: ref 也可以用来定义对象（或数组）类型数据，它内部会自动通过 reactive 转为代理对象。`},{header:"从原理角度对比:",slug:"从原理角度对比",content:`ref 通过 Object.defineProperty() 的 get 与 set 来实现响应式（数据劫持）。
reactive 通过使用 Proxy 来实现响应式（数据劫持），并通过 Reflect 操作源对象内部的数据。`},{header:"从使用角度对比:",slug:"从使用角度对比",content:`ref 定义的数据：操作数据需要 .value，读取数据时模板中直接读取不需要 .value。
reactive 定义的数据：操作数据与读取数据均不需要 .value。`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/ref%E5%87%BD%E6%95%B0.html",title:"ref 函数",pathLocale:"/",contents:[{header:"ref 函数",slug:"ref-函数",content:`定义一个响应式的数据。包含响应式数据的引用对象（reference 对象，简称 ref 对象）。 备注: 接收的数据可以是基本类型，也可以是对象类型。
基本类型的数据: 响应式依然是靠Object.defineProperty()的get与set完成的。
对象类型的数据: 内部“求助”了 Vue 3.0 中的一个新函数reactive函数。 <template> <!-- 不需要\`.value\`，直接使用 --> <div>{{ xxx }}</div>
</template>
<script setup>
const xxx = ref(initValue);
xxx.value = newValue;
<\/script>`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/setup%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"setup 函数",slug:"setup-函数",content:"Vue3.0 中一个新的配置项，值为一个函数。setup 是所有 Composition API(组合 API)“表演的舞台”。组件中所用到的:数据、方法等等，均要配置在 setup 中。"},{header:"setup 函数的两种返回值:",slug:"setup-函数的两种返回值",content:`若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。(重点关注!)
若返回一个渲染函数，则可定义渲染内容。(了解)`},{header:"注意点:",slug:"注意点",content:`尽量不要与 Vue2.x 配置混用 Vue2.x 配置(data、methods、computed...)中可以访问到 setup 中的属性、方法。
但在 setup 中不能访问到 Vue2.x 配置(data、methods、computed...)。
如果有重名，setup 优先。 setup 不能是一个 async 函数，因为返回值不再是 return 的对象，而是 promise，模板看不到 return 对象中的属性。 <template> <h1>一个人的信息</h1> <h2>姓名: {{ name }}</h2> <h2>年龄: {{ age }}</h2>
</template> <script>
export default { name: "App", setup() { // 数据 let name = "张三"; let age = 18; // 返回一个对象(常用) return { name, age, sayHello, test2, a, }; // 返回一个渲染函数 // return () => h('h1', '尚硅谷') },
};
<\/script>`},{header:"setup 的两个注意点",slug:"setup-的两个注意点",content:""},{header:"setup 执行的时机",slug:"setup-执行的时机",content:"在beforeCreate之前执行一次，this是undefined。"},{header:"setup 的参数",slug:"setup-的参数",content:`props: 值为对象，包含组件外部传递过来，且组件内部声明接收了的属性。
context: 上下文对象 attrs: 值为对象，包含组件外部传递过来，但没有在props配置中声明的属性，相当于this.$attrs。
slots: 收到的插槽内容，相当于this.$slots。
emit: 分发自定义事件的函数，相当于this.$emit。 <!-- App.vue -->
<template> <Demo @hello="showHelloMsg" msg="你好啊" school="尚硅谷"> <template v-slot:qwe> <span>尚硅谷</span> </template> </Demo>
</template> <script>
import Demo from "./components/Demo"; export default { components: { Demo }, name: "App", setup() { function showHelloMsg(value) { console.log(value); } },
};
<\/script> <!-- Demo.vue -->
<template> <h1>一个人的信息</h1> <h2>姓名: {{ person.name }}</h2> <h2>年龄: {{ person.age }}</h2> <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template> <script>
import { reactive } from "vue"; export default { name: "Demo", props: ["msg", "school"], emits: ["hello"], setup(props, context) { // console.log('---setup---', props) console.log("---setup---", context); // console.log('---setup---', context.attrs) // 详单与Vue2中的$attrs // console.log('---setup---', context.emit) // 触发自定义事件的 console.log("---setup---", context.slots); // 触发自定义事件的 // 数据 let person = reactive({ name: "张三", age: 18, }); // 方法 function test() { context.emit("hello", 666); } return { person, test, }; },
};
<\/script>`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/toRefs%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"toRefs",slug:"torefs",content:`toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象.将响应式对象转换为普通对象，其中每个属性都是指向原始对象相应属性的 ref。 const { name, age } = toRefs(person);
import { reactive, toRefs } from "vue"; const person = reactive({ name: "张三", age: 18,
}); const { name, age } = toRefs(person); console.log(name.value); // '张三'
console.log(age.value); // 18`},{header:"注意事项",slug:"注意事项",content:`toRefs 函数返回的是一个普通对象，其中每个属性都是指向原始对象相应属性的 ref。
toRefs 函数不会改变原始对象的响应式特性，只是将其转换为普通对象。
toRefs 函数通常用于将响应式对象解构为普通对象，以便在模板中使用。
toRefs 函数可以接受一个可选的第二个参数，用于指定转换后的 ref 的名称。 const { name, age } = toRefs(person, { name: "fullName", age: "age" }); 在上述示例中，name 和 age 的 ref 名称分别为 fullName 和 age。`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/toRef%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"toRef",slug:"toref",content:`将响应式对象中的某个属性单独提供给外部使用,不会影响到原始对象中的属性。 const name = toRef(person, "name");
import { reactive, toRef } from "vue"; const person = reactive({ name: "张三", age: 18,
}); const name = toRef(person, "name"); console.log(name.value); // 张三 name.value = "李四"; console.log(person.name); // 李四`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/watchEffect%E5%87%BD%E6%95%B0.html",title:"",pathLocale:"/",contents:[{header:"Vue3 中的 watch 和 watchEffect",slug:"vue3-中的-watch-和-watcheffect",content:""},{header:"watch 和 watchEffect 的区别",slug:"watch-和-watcheffect-的区别",content:`watch：既要指明监视的属性，也要指明监视的回调。
watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。`},{header:"watchEffect 与 computed 的对比",slug:"watcheffect-与-computed-的对比",content:`watchEffect 有点像 computed： 但 computed 注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。
而 watchEffect 更注重的是过程（回调函数的函数体），所以不用写返回值。
watchEffect 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。 watchEffect(() => { const x1 = sum.value; const x2 = person.age; console.log("watchEffect配置的回调执行了");
});
// setup函数和监视
setup() { // 数据 let sum = ref(0) let msg = ref('你好啊') let person = reactive({ name: '张三', age: 18, job: { j1: { salary: 20 } } }) // 监视 // watch(sum, (newValue, oldValue) => { // console.log('sum的值变化了', newValue, oldValue) // }, { immediate: true }) watchEffect(() => { const x1 = sum.value const x2 = person.job.j1.salary console.log('watchEffect所指定的回调执行了') })
}`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.html",title:"",pathLocale:"/",contents:[{header:"vue2.x 的响应式",slug:"vue2-x-的响应式",content:""},{header:"实现原理:",slug:"实现原理",content:`对象类型: 通过 Object.defineProperty() 对属性的读取、修改进行拦截（数据劫持）。 数组类型: 通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。 Object.defineProperty(data, "count", { get() {}, set() {},
});`},{header:"Vue3.0 的响应式",slug:"vue3-0-的响应式",content:""},{header:"实现原理:",slug:"实现原理-1",content:"通过 Proxy(代理): 拦截对象中任意属性的变化，包括属性值的读写、属性的添加、属性的删除等。 通过 Reflect(反射): 对被代理对象的属性进行操作。"},{header:"defineProperty",slug:"defineproperty",content:`let person = { name: "张三", age: 18,
}; let p = {};
Object.defineProperty(p, "name", { get() { // 有人读取name时调用 return person.name; }, set(value) { // 有人修改name时调用 console.log("有人修改了name属性,我发现了,我要去更新界面!"); person.name = value; },
}); Object.defineProperty(p, "age", { get() { // 有人读取age时调用 return person.age; }, set(value) { // 有人修改age时调用 console.log("有人修改了age属性，我发现了，我要去更新界面!"); person.age = value; },
});`},{header:"Vue2 真实实现",slug:"vue2-真实实现",content:`export default { name: "App", data() { return { person: { name: "张三", age: 18, hobby: ["学习", "吃饭"], }, }; }, methods: { addSex() { // console.log(this.person.sex) // this.person.sex = '女' // console.log(this.person.sex) this.$set(this.person, "sex", "女"); // Vue.set(this.person, 'sex', '女') }, deleteName() { // console.log(this.person.name) // delete this.person.name // console.log(this.person.name) // this.$delete(this.person, 'name') Vue.delete(this.person, "name", "女"); }, updateHobby() { // this.person.hobby[0] = '逛街' // this.$set(this.person.hobby, 0, '逛街') // this.person.hobby.splice(0, 1, '逛街') }, },
};`},{header:"Proxy",slug:"proxy",content:'let person = { name: "张三", age: 18,\n};\nconst p = new Proxy(person, { // 有人读取p的某个属性时调用 get(target, propName) { console.log(`有人读取了p身上的${propName}属性`); return target[propName]; }, // 有人修改p的某个属性、或给p追加某个属性时调用 set(target, propName, value) { console.log(`有人修改了p身上的${propName}属性，我要去更新界面了!`); target[propName] = value; }, // 有人删除p的某个属性时调用 deleteProperty(target, propName) { console.log(`有人删除了p身上的${propName}属性，我要去更新界面了!`); return delete target[propName]; },\n});'},{header:"Reflect.defineProperty",slug:"reflect-defineproperty",content:`目前正在将 Object 对象的属性移植到 reflect, 它能返回 Boolean 值, 易于捕获错误 const obj = {}; const x1 = Reflect.defineProperty(obj, "c", { get() { return 3; },
});
console.log(x1); const x2 = Reflect.defineProperty(obj, "c", { get() { return 4; },
}); if (x2) { console.log("某某某操作成功了!");
} else { console.log("某某某操作失败了!");
}`},{header:"Vue3 实现",slug:"vue3-实现",content:'const person = { name: "张三", age: 18,\n}; const p = new Proxy(person, { // 有人读取p的某个属性时调用 get(target, propName) { console.log(`有人读取了p身上的${propName}属性`); return Reflect.get(target, propName); }, // 有人修改p的某个属性、或给p追加某个属性时调用 set(target, propName, value) { console.log(`有人修改了p身上的${propName}属性，我要去更新界面了!`); Reflect.set(target, propName, value); }, // 有人删除p的某个属性时调用 deleteProperty(target, propName) { console.log(`有人删除了p身上的${propName}属性，我要去更新界面了!`); return Reflect.deleteProperty(target, propName); },\n});'}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90.html",title:"",pathLocale:"/",contents:[{header:"Vue 3 生命周期与对应钩子",slug:"vue-3-生命周期与对应钩子",content:`beforeCreate ==> setup()
created ==> setup()
beforeMount ==> onBeforeMount
mounted ==> onMounted
beforeUpdate ==> onBeforeUpdate
updated ==> onUpdated
beforeUnmount ==> onBeforeUnmount
unmounted ==> onUnmounted`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E5%B8%B8%E7%94%A8CompositionApi/%E8%87%AA%E5%AE%9A%E4%B9%89hook.html",title:"",pathLocale:"/",contents:[{header:"自定义 Hook",slug:"自定义-hook",content:"本质上是一个函数，把setup函数中使用的 Composition API 进行了封装。 类似于 Vue 2.x 中的 mixin。"},{header:"自定义 Hook 的优势",slug:"自定义-hook-的优势",content:`复用代码：可以在多个组件之间复用状态逻辑。
让setup中的逻辑更清楚易懂：通过将相关逻辑组织在自定义 Hook 中，使得setup函数更加简洁和可读。 <!-- Demo.vue 组件 -->
<template> <h2>当前求和为: {{ sum }}</h2> <hr /> <h2>当前点击时鼠标的坐标为: x: {{ point.x }}, y: {{ point.y }}</h2> <button @click="sum++">点我+1</button>
</template> <script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint"; export default { name: "Demo", setup() { let sum = ref(0); let point = usePoint(); return { sum, point }; },
};
<\/script>
// usePoint.js 钩子函数
import { reactive, onMounted, onBeforeUnmount } from "vue"; export default function () { // 实现鼠标“打点”相关的数据 let point = reactive({ x: 0, y: 0, }); // 实现鼠标“打点”相关的方法 function savePoint(event) { point.x = event.pageX; point.y = event.pageY; console.log(event.pageX, event.pageY); } // 实现鼠标“打点”相关的生命周期钩子 onMounted(() => { window.addEventListener("click", savePoint); }); onBeforeUnmount(() => { window.removeEventListener("click", savePoint); }); // return point; return point;
}`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%96%B0%E7%BB%84%E4%BB%B6/Fragment.html",title:"",pathLocale:"/",contents:[{header:"Fragment 根标签",slug:"fragment-根标签",content:""},{header:"Vue2 中",slug:"vue2-中",content:"组件必须有一个根标签。"},{header:"Vue3 中",slug:"vue3-中",content:"组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中。"},{header:"好处",slug:"好处",content:`减少标签层级。
减小内存占用。`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%96%B0%E7%BB%84%E4%BB%B6/Suspense.html",title:"Vue3 中异步组件的使用",pathLocale:"/",contents:[{header:"Vue3 中异步组件的使用",slug:"vue3-中异步组件的使用",content:""},{header:"作用",slug:"作用",content:"等待异步组件时渲染一些额外内容，让应用有更好的用户体验。"},{header:"使用步骤",slug:"使用步骤",content:`异步引入组件import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); 使用 Suspense 包裹组件，并配置好 default 与 fallback <template> <div class="app"> <h3>我是App组件</h3> <Suspense> <template v-slot:default> <Child /> </template> <template v-slot:fallback> <h3>加载中.....</h3> </template> </Suspense> </div>
</template>`}]},{path:"/web/Vue/Vue3/Vue%E5%9F%BA%E7%A1%80/%E6%96%B0%E7%BB%84%E4%BB%B6/Teleport.html",title:"",pathLocale:"/",contents:[{header:"Teleport",slug:"teleport",content:"传送门组件，将组件渲染到指定的 DOM 节点中，一般都是渲染到 body 中"},{header:"基本使用",slug:"基本使用",content:`<template> <div> <button @click="show = !show">Toggle</button> <Teleport to="body"> <div v-if="show" class="modal"> <p>Hello from the modal!</p> <button @click="show = false">Close</button> </div> </Teleport> </div>
</template> <script>
export default { data() { return { show: false, }; },
};
<\/script> <style>
.modal { position: fixed; /* ... */
}
</style>`},{header:"to 属性",slug:"to-属性",content:`to 属性指定了要渲染到的 DOM 节点，可以是 CSS 选择器或者 DOM 节点 <template> <div> <button @click="show = !show">Toggle</button> <Teleport to="#modal" ><!-- to 属性指定了要渲染到的 DOM 节点 --> <div v-if="show" class="modal"> <p>Hello from the modal!</p> <button @click="show = false">Close</button> </div> </Teleport> </div>
</template> <script>
export default { data() { return { show: false, }; },
};
<\/script> <style>
.modal { position: fixed; /* ... */
}
</style>`},{header:"disabled 属性",slug:"disabled-属性",content:`disabled 属性可以禁用 Teleport 组件，当 disabled 为 true 时，组件不会渲染到指定的 DOM 节点中 <template> <div> <button @click="show = !show">Toggle</button> <Teleport to="body" :disabled="disabled"> <div v-if="show" class="modal"> <p>Hello from the modal!</p> <button @click="show = false">Close</button> </div> </Teleport> </div>
</template> <script>
export default { data() { return { show: false, disabled: false, }; },
};
<\/script> <style>
.modal { position: fixed; /* ... */
}
</style>`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E7%AC%A6%E6%B5%81/%E5%86%99%E5%85%A5/BufferedReader%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"BufferedReader 类",slug:"bufferedreader-类",content:"缓冲字符输出流、有缓冲区、高效"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public BufferedReader(Reader in)
读取给定 File 对象的文件`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void flush
刷新缓冲区 public void close
释放资源，同时自带刷新缓冲区的功能 其他方法
同 FileReader`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZiFuInput; import java.io.BufferedReader;
import java.io.FileReader; public class BufferedReader01 { public static void main(String[] args) throws Exception { /* FileReader fr = new FileReader("aaa/111.txt"); BufferedReader br = new BufferedReader(fr); */ BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); int len = 0; while( (len = br.read()) != -1){ System.out.print((char)len); } }
}`},{header:"特有的成员方法",slug:"特有的成员方法",content:`方法
作用 public String readLine()
一次读取一行，返回值是 String 类型，读不到返回 null package com.wuziqi.gobang.IO.ZiFuInput; import java.io.BufferedReader;
import java.io.FileReader; public class BufferedReadLine { public static void main(String[] args) throws Exception{ // public String readLine()：一次读取一行，没有就是null BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); /* String s1 = br.readLine(); String s2 = br.readLine(); String s3 = br.readLine(); String s4 = br.readLine(); String s5 = br.readLine(); System.out.println(s1); System.out.println(s2); System.out.println(s3); System.out.println(s4); System.out.println(s5); // ai约不约？随便吧。 // 字符流嘛 // 必须来点中文啊 // null // null */ String line = null; while ((line = br.readLine()) != null) { System.out.println(line); } // ai约不约？随便吧。 // 字符流嘛 // 必须来点中文啊 }
}`},{header:"文件的复制",slug:"文件的复制",content:`package com.wuziqi.gobang.IO.ZiFuInput; import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter; public class BufferedCopy01 { public static void main(String[] args) throws Exception{ // 1.一次读取一个字符，一次写入一个字符 /* BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/222.txt")); int ch = 0; while((ch = br.read()) != -1){ bw.write(ch); } bw.close(); br.close(); */ // 2.一次读取一个字符数组，一次写入一个字符数组一部分 /* BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/222.txt")); char[] chs = new char[1024]; int len = 0; while((len = br.read(chs)) != -1){ bw.write(chs, 0, len); } bw.close(); br.close(); */ // 3.一次读取一行，一次写入行 //（这种方式最后总会多出来一个空行，如果不在意可以使用） BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt")); BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/555.txt")); String line = null; while ((line = br.readLine()) != null) { bw.write(line, 0, line.length()); bw.newLine(); } bw.close(); br.close(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E7%AC%A6%E6%B5%81/%E5%86%99%E5%85%A5/FileReader%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"FileReader 类",slug:"filereader-类",content:""},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public FileReader(String fileName)
根据指定的文件名读取 public FileReader(File file)
根据指定的文件读取`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public int read()
一次读取一个字符数据 public int read(char[] cbuf)
一次读取一个字符数组，返回实际读取字符的个数 public int read(char[] cbuf, int off, int len)
一次读取一个字符数组的部分数据`},{header:"示例",slug:"示例",content:`package com.wuziqi.gobang.IO.ZiFuInput; import java.io.FileReader; public class FileReaderDemo01 { public static void main(String[] args) throws Exception { // public FileReader(String fileName) FileReader fr = new FileReader("aaa/111.txt"); System.out.println(fr); // java.io.FileReader@23fc625e // 一次读一个字符：public int read() /* int a = fr.read(); int a1 = fr.read(); int a2 = fr.read(); System.out.println(a); // 97 System.out.println(a1); // 105 System.out.println(a2); // 32422 System.out.println((char) a2); // 约 int a = 0; while( (a = fr.read()) != -1 ) { System.out.print((char) a); // ai约不约？随便吧。 } */ // 一次读取一个数组：public int read(char[] cbuf) /* char[] arr = new char[5]; int a = fr.read(arr); System.out.println(a); // 5 读到了5个字符 System.out.println(new String(arr)); // ai约不约 char[] arr = new char[5]; int a = 0; while( (a = fr.read(arr)) != -1 ) { System.out.print(new String(arr, 0, a)); // ai约不约？随便吧。 } */ // 一次读取一个数组的部分：public int read(char[] cbuf, int off, int len) char[] arr = new char[5]; int a = fr.read(arr, 1,3); System.out.println(a); // 3：读取到3个 System.out.println(new String(arr)); // ai约 }
}`},{header:"文件的复制",slug:"文件的复制",content:`package com.wuziqi.gobang.IO.ZiFuInput; import java.io.FileReader;
import java.io.FileWriter; public class FileCopy01 { public static void main(String[] args) throws Exception { // 一次读取一个字符，一次写入一个字符 /* FileReader fr = new FileReader("aaa/111.txt"); FileWriter fw = new FileWriter("aaa/222.txt"); int len = 0; while( (len = fr.read()) != -1){ fw.write(len); } fw.close(); fr.close(); */ // 一次读取一个字符数组，一次写入一个字符数组的一部分 FileReader fr = new FileReader("aaa/111.txt"); FileWriter fw = new FileWriter("aaa/222.txt"); char [] ch = new char[1024]; int len = 0; while( (len = fr.read(ch)) != -1){ fw.write(ch,0,len); } fw.close(); fr.close(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E7%AC%A6%E6%B5%81/%E8%BE%93%E5%87%BA/BufferedWriter%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"BufferedWriter 类",slug:"bufferedwriter-类",content:"缓冲字符输出流、有缓冲区、高效"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public BufferedWriter(Writer out)
将输出流写到给定 File 对象的文件`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void close
释放资源，同时自带刷新缓冲区的功能 其他方法
同 FileWriter`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZiFuOutput; import java.io.BufferedWriter;
import java.io.FileWriter; public class BufferedWriter01 { public static void main(String[] args) throws Exception{ /* FileWriter fw = new FileWriter("aaa/222.txt"); BufferedWriter bw = new BufferedWriter(fw); */ BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/222.txt")); }
}`},{header:"特有的成员方法",slug:"特有的成员方法",content:`方法
作用 public void newLine()
换行(不用考虑系统，自动切换；"\\r\\n"换行时要考虑系统) package com.wuziqi.gobang.IO.ZiFuOutput; import java.io.BufferedWriter;
import java.io.FileWriter; public class BufferedNewLine { public static void main(String[] args) throws Exception{ // public void newLine()：相当于换行符 BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/444.txt")); bw.newLine(); bw.newLine(); bw.newLine(); bw.write("都到这行了!"); bw.flush(); bw.close(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E7%AC%A6%E6%B5%81/%E8%BE%93%E5%87%BA/FileWriter%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"FileWriter 类",slug:"filewriter-类",content:""},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public FileWriter(File file)
将输出流写到给定 File 对象的文件中 public FileWriter(File file, boolean append)
同上，追加 public FileWriter(String fileName)
将输出流写到指定名字的文件中 public FileWriter(String fileName, boolean append)
同上并追加`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void close
释放资源 public void flush
刷新 public void write(int c)
写入一个字符数据 public void write(char[] cbuf)
写入一个字符数组数据 public void write(char[] cbuf, int off, int len)
写入一个字符数组的一部分数据 public void write(String str)
写入一个字符串数据 public void write(String str, int off, int len)
写入一个字符串的一部分数据`},{header:"示例",slug:"示例",content:`package com.wuziqi.gobang.IO.ZiFuOutput; import java.io.FileWriter; public class FileWriterDemo01 { public static void main(String[] args) throws Exception { // 给定了一个不存在的文件，那么会自动创建 // public FileWriter(String fileName) FileWriter fw = new FileWriter("aaa/111.txt"); System.out.println(fw); // java.io.FileWriter@23fc625e // public void write(int c) fw.write(97); // a fw.write(105); // i // public void write(char[] cbuf) char[] cbuf = {'约', '不'}; fw.write(cbuf); // 约不 // public void write(char[] cbuf, int off, int len) fw.write(cbuf, 0, 1); // 约 // public void write(String str) fw.write("？"); // ？ // public void write(String str, int off, int len) fw.write("？随便吧。爱约不约", 1, 4); // 随便吧。 fw.flush(); fw.close(); // ai约不约？随便吧。 }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E5%86%99%E5%85%A5/BufferedInputStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"BufferedInputStream 类",slug:"bufferedinputstream-类",content:"缓冲字节输入流、有缓冲区、高效"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public BufferedInputStream(InputStream in)
读取给定的已经存在的文件中的数据`},{header:"常见的成员方法",slug:"常见的成员方法",content:"同 FileInputStream"},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZiJieInput; import java.io.BufferedInputStream;
import java.io.FileInputStream; public class DemoBufferedInputStream { public static void main(String[] args) throws Exception { // public BufferedInputStream(FileInputStream in) // 有参构造的原因是因为底层，使用的是装饰设计模式 // FileInputStream fis = new FileInputStream("aaa/bbb.txt"); // BufferedInputStream bis = new BufferedInputStream(fis); BufferedInputStream bis = new BufferedInputStream(new FileInputStream("aaa/bbb.txt")); // 读取 // 一次读取一个字节 int by = 0; while ((by = bis.read()) != -1) { System.out.print((char) by); } // 一次读取一个数组的字节 byte[] bys = new byte[5]; int len = 0; while ((len = bis.read(bys)) != -1) { System.out.print(new String(bys, 0, len)); } }
}`},{header:"文件复制",slug:"文件复制",content:`// 方式一(一次读取一个字节，一次写入一个字节)
package com.wuziqi.gobang.IO.ZiJieInput; import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream; public class DemoCopyBuffer1 { public static void main(String[] args) throws Exception { // 创建一个字节输入流对象 BufferedInputStream fis = new BufferedInputStream( new FileInputStream("aaa/bbb.txt") ); // 创建一个字节输出流对象 BufferedOutputStream fos = new BufferedOutputStream( new FileOutputStream("aaa/b.txt") ); // 一次读取一个字节，一次写入一个字节 int by = 0; while ((by = fis.read()) != -1) { fos.write(by); } // 释放资源，关闭流 fis.close(); fos.close(); }
}`},{header:"复制文件(高效)",slug:"复制文件-高效",content:`// 方式二(一次读取一个字节数组，一次写入一个字节数组的一部分)
package com.wuziqi.gobang.IO.ZiJieInput; import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream; public class DemoCopyBuffer2 { public static void main(String[] args) throws Exception { // 创建字节输入流对象 BufferedInputStream fis = new BufferedInputStream(new FileInputStream("aaa/b.txt")); // 创建字节输出流对象 BufferedOutputStream fos = new BufferedOutputStream(new FileOutputStream("aaa/a.txt")); // 一次读取一个字节数组，一次写入一个字节数组的一部分 byte[] bys = new byte[5]; int len = 0; while( (len = fis.read(bys)) != -1 ){ fos.write(bys, 0, len); } // 释放资源 fis.close(); fos.close(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E5%86%99%E5%85%A5/FileInputStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"FileInputStream 类.md",slug:"fileinputstream-类-md",content:""},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public FileInputStream(File file)
读取给定的已经存在的文件中的数据 public FileInputStream(String name)
作用同上`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public int read()
读取一个字节大小的数据 public int read(byte[] b)
实际上读取到了几个字符的个数 public int read(byte[] b,int off,int len)
读取文件中字节数组的一部分`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZiJieInput; import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays; public class DemoFileInputStream { public static void main(String[] args) throws IOException { // 在aaa.txt文件中读取一个字节长度的内容 // public FileInputStream(File file) File file1 = new File("aaa/bbb.txt"); FileInputStream fis = new FileInputStream(file1); /* * public int read(): 每次读取一个字节，返回一个int类型的值 * 返回值：如果读取到了，返回一个字节对应int值，如果到了末尾，开始返回-1 * 每次执行都会继续读取，直到读取到末尾 * 当前文件中只有abc三个字符，所以读取到abc后，再读取就会返回-1 */ int by1 = fis.read(); System.out.println((char)by1); // a int by2 = fis.read(); System.out.println((char)by2); // b int by3 = fis.read(); System.out.println((char)by3); // c int by4 = fis.read(); System.out.println(by4); // -1 int by5 = fis.read(); System.out.println(by5); // -1 /* * 循环读取1： * 上边是已知当前文件有三个字符， * 假设不知道一个文件有多少个字符， * 可以用当前的循环方法 */ int byt1 = fis.read(); while(byt1 !=-1){ System.out.println((char)byt1); byt1 = fis.read(); } //循环读取2：循环1的优化 int byt2 = 0; while((byt2 = fis.read()) !=-1){ System.out.println((char)byt2); } /* * public int read(byte[] b): 实际上读取到了几个字符的个数 * new byte[n]: 会读取n个字符，但是实际读取要看文件中的字符个数； * 如果文件中的字符个数超过了n，则当前返回值就是n； * 如果文件中的字符个数不足n，则当前返回值就是实际读取到的字符个数； * 其中，读取到的字符内容，会给到new byte[n]，所以最好用一个变量接收便于使用 */ byte[] byts1 = new byte[3]; int number0 = fis.read(byts1); System.out.println(number0); // 3 System.out.println(Arrays.toString(byts1)); // [97, 98, 99] String sss = new String(byts1); System.out.println(sss); // [a, b, c] int number1 = fis.read(new byte[4]); System.out.println(number1); // 3 int number2 = fis.read(new byte[5]); System.out.println(number2); // 3 int number3 = fis.read(new byte[2]); System.out.println(number3); // 2 int number4 = fis.read(new byte[1]); System.out.println(number4); // 1 /* * 循环读取：上边是已知文件字符数，如果不知道的话就需要循环了 * 每次读n个 * 直到读取的个数为 -1，即没读取到，结束 */ byte[] bytes = new byte[5]; int len = 0; while( (len = fis.read(bytes)) !=-1){ String s = new String(bytes, 0, len); System.out.println(s); } }
}`},{header:"关闭流",slug:"关闭流",content:`方法
作用 public void close
关闭输入流或者输出流`},{header:"文件复制",slug:"文件复制",content:`// 方式一(一次读取一个字节，一次写入一个字节)
package com.wuziqi.gobang.IO.ZiJieInput; import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException; public class DemoCopyFile1 { public static void main(String[] args) throws IOException { // 创建一个字节输入流对象 FileInputStream fis = new FileInputStream("aaa/bbb.txt"); // 创建一个字节输出流对象 FileOutputStream fos = new FileOutputStream("aaa/b.txt"); // 一次读取一个字节，一次写入一个字节 int by = 0; while ((by = fis.read()) != -1) { fos.write(by); } // 释放资源，关闭流 fis.close(); fos.close(); }
}
// 方式二(一次读取一个字节数组，一次写入一个字节数组的一部分)
package com.wuziqi.gobang.IO.ZiJieInput; import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException; public class DemoCopyFile2 { public static void main(String[] args) throws IOException { // 创建字节输入流对象 FileInputStream fis = new FileInputStream("aaa/b.txt"); // 创建字节输出流对象 FileOutputStream fos = new FileOutputStream("aaa/a.txt"); // 一次读取一个字节数组，一次写入一个字节数组的一部分 byte[] bys = new byte[5]; int len = 0; while( (len = fis.read(bys)) != -1 ){ fos.write(bys, 0, len); } // 释放资源 fis.close(); fos.close(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E8%BE%93%E5%87%BA/BufferedOutputStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"BufferedOutputStream 类",slug:"bufferedoutputstream-类",content:"缓冲字节输出流、有缓冲区、高效"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public BufferedInputStream(OutputStream out)
将输出流写到给定 File 对象的文件`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void flush
刷新缓冲区 public void close
释放资源，同时自带刷新缓冲区的功能 其他方法
同 FileOutputStream`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZiJieOutput; import java.io.BufferedOutputStream;
import java.io.FileOutputStream; public class DemoBufferedIOutputStream { public static void main(String[] args) throws Exception { // public BufferedOutputStream(FileOutputStream out) // 有参构造的原因是因为底层，使用的是装饰设计模式 // FileOutputStream fos = new FileOutputStream("aaa/bbb.txt"); // BufferedOutputStream bos = new BufferedOutputStream(fos); BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("aaa/bbb.txt", true)); // 写出数据 // 一次写出一个字节 bos.write(97); bos.write(97); bos.write(99); bos.write(98); // 刷新缓冲区，否则数组一直在缓冲区，没有写入，导致文件一直是空白的 bos.flush(); // 一次写出一个数组长度的字节 byte[] bytes = {97, 98, 99, 100, 101, 102, 103, 104}; // 换行 bos.write("\\r\\n".getBytes()); bos.write(bytes); // 缓冲 bos.flush(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AD%97%E8%8A%82%E6%B5%81/%E8%BE%93%E5%87%BA/FileOutputStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"FileOutputStream 类.md",slug:"fileoutputstream-类-md",content:""},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public FileOutputStream(File file)
将输出流写到给定 File 对象的文件中 public FileOutputStream(String name)
作用同上，区别先去创建一个文件对象 public FileOutputStream(String name, Boolean append)
目的同上，但是与上边两个不同点是可以控制是否追加`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public void write(int b)
在文件中写一个字节大小的数据 public void write(byte[] b)
将一个字节数组写到文件中 public void write(byte[] b,int off,int len)
将字节数组的一部分写到文件中，从 off 位置开始，写入 len 个`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZiJieOutput; import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException; public class DemoFileOutputStream { public static void main(String[] args) throws IOException { // aaa目录对象 File file = new File("aaa"); // 创建aaa目录对象 boolean isFolderAaa = file.mkdir(); // aaa.txt文件对象 File file1 = new File("aaa.txt"); // 创建aaa.txt文件 boolean isTxtAaa = file1.createNewFile(); // bbb.txt文件对象 File file2 = new File(file,"bbb.txt"); // 在aaa目录下创建bbb.txt文件 boolean isTxtBbb = file2.createNewFile(); // 在aaa.txt文件中写入一个字节长度的内容 // public FileOutputStream(File file) FileOutputStream fos = new FileOutputStream(file1); // public void write(int b) fos.write(1); // 在文件中是一个字符长度的二进制乱码  fos.write(97); // 在文件中表现为a // 两个添加执行完成后文件中内容为a // 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容 // 在bbb.txt文件中写入一个字节数组，或者说多个字节的内容 // public void write(byte[] b) byte[] bytes = {97, 98, 99, 100, 101, 102, 103, 104}; FileOutputStream fosb = new FileOutputStream(file2); fosb.write(bytes);// 文件中内容为 abcdefghi fosb.write(bytes, 2, 3);// 文件中内容为 cde // 两个方法执行完成后文件中内容为abcdefghcde // 但是整个程序再执行一次的时候，默认文件是空着的，重新添加内容 }
}`},{header:"两个小问题",slug:"两个小问题",content:`如何换行？ 换行符：
windows：\\r\\n
linux：\\n
mac：\\r FileOutputStream fosb = new FileOutputStream("aaa.txt");
/* * write(byte[] b) * getBytes: 将字符串转换为字节数组
*/
fosb.write("\\r\\n".getBytes()); 如何追加？
正常情况下每次运行程序，文件都会被清空，如果想要追加，需要使用第三个构造方法，并且需要传入一个布尔值，传入 true 表示追加，传入 false 表示覆盖；默认是 false。 // public FileOutputStream(String name, Boolean append)
FileOutputStream fosb = new FileOutputStream(file2, true);`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E6%B5%81/%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96/ObjectInputStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"ObjectInputStream 类",slug:"objectinputstream-类",content:"反序列化流 反序列化：将本地磁盘中的对象，以流的形式，还原成内存中的对象。"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public ObjectInputStream(InputStream in)
创建一个指定 InputStream 的 ObjectInputStream 对象，该 InputStream 对象用于读取流中的数据`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public final Object readObject()
从流中读取一个对象`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ObjectInput; import java.io.FileInputStream;
import java.io.ObjectInputStream; public class ObjectInputStream01 { public static void main(String[] args) throws Exception { // public ObjectInputStream(InputStream in) ObjectInputStream ois = new ObjectInputStream( new FileInputStream("aaa/o.txt") ); // public final Object readObject() Object p = ois.readObject(); System.out.println(p); // Person{name='张三', age=18} }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E5%AF%B9%E8%B1%A1%E6%93%8D%E4%BD%9C%E6%B5%81/%E5%BA%8F%E5%88%97%E5%8C%96/ObjectOutputStream%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"ObjectOutputStream 类",slug:"objectoutputstream-类",content:`序列化流 序列化：将内存中的对象，以流的形式，从内存中写出到本地。
序列化后的文件看不懂没关系，因为本身就是需要被反序列化才能用的东西
另外对象一定要实现 Serializable 类，否则会报异常`},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public ObjectOutputStream(OutputStream out)
创建一个向指定的 OutputStream 写入 Java 对象序列的 ObjectOutputStream`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 public final void writeObject(Object obj)
将指定的对象写出`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ObjectOutput; import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.HashMap; public class ObjectOutputStream01 { public static void main(String[] args) throws Exception { // public ObjectOutputStream(OutputStream out) ObjectOutputStream oos = new ObjectOutputStream( new FileOutputStream("aaa/o.txt") ); // public final void writeObject(Object obj) // 最后的文件看不懂没关系，还需要返序列化操作的 // 写入一个对象 oos.writeObject(new Person("张三", 18)); // 写入多个对象可以使用集合 HashMap<Integer, Person> map= new HashMap<Integer, Person>(); map.put(1, new Person("John", 18)); map.put(2, new Person("Jack", 20)); map.put(3, new Person("Jim", 22)); oos.writeObject(map); }
}
class Person implements Serializable { // 此处必须要实现当前这个接口，否则会报错 /** * 版本号： * 1. 不写，会自动生成；此时修改类可能会报错； * 2. 给一个固定的版本号，不要重复；类修改了不会报错 */ private static final long serialVersionUID = 1L; private String name; private int age; public Person(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } public void setName(String name) { this.name = name; } public int getAge() { return age; } public void setAge(int age) { this.age = age; } @Override public String toString() { return "Person{" + "name='" + name + '\\'' + ", age=" + age + '}'; }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E8%BD%AC%E6%8D%A2%E6%B5%81/%E8%BE%93%E5%85%A5/InputStreamReader%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"InputStreamReader 类",slug:"inputstreamreader-类",content:"转换流可以将字节流转换成字符流"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public InputStreamReader(InputStream in)
创建一个使用默认字符编码的 InputStreamReader public InputStreamReader(InputStream in, String charsetName)
创建一个使用指定字符编码的 InputStreamReader`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 方法
同 FileReader`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZhuanhuanInput; import java.io.FileInputStream;
import java.io.InputStreamReader; public class InputStreamReader01 { public static void main(String[] args) throws Exception{ // public InputStreamReader(InputStream in) /* FileInputStream fis = new FileInputStream("aaa/111.txt"); InputStreamReader isr = new InputStreamReader(fis); */ InputStreamReader isr = new InputStreamReader(new FileInputStream("aaa/111.txt")); int len = 0; while( (len = isr.read()) != -1){ System.out.print((char)len); } }
}`},{header:"转换流文件复制",slug:"转换流文件复制",content:`package com.wuziqi.gobang.IO.ZhuanhuanInput; import java.io.*; public class FileCopy1 { public static void main(String[] args) throws Exception { // 1. 一次读取一个字符，一次写出一个字符 InputStreamReader isr = new InputStreamReader( new FileInputStream("aaa/111.txt") ); OutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream("aaa/222.txt") ); int ch = 0; while ((ch = isr.read()) != -1) { osw.write(ch); } osw.close(); isr.close(); // 2. 一次读取一个字符数组，一次写出一个字符数组的一部分 InputStreamReader isr = new InputStreamReader( new FileInputStream("aaa/111.txt") ); OutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream("aaa/222.txt") ); char[] buf = new char[1024]; int len = 0; while ((len = isr.read(buf)) != -1){ osw.write(buf,0,len); } osw.close(); isr.close(); // 3. 用BufferedReader增强，一次读取一行并写入一行 BufferedReader br = new BufferedReader( new InputStreamReader(new FileInputStream("aaa/111.txt")) ); BufferedWriter bw = new BufferedWriter( new OutputStreamWriter(new FileOutputStream("aaa/222.txt")) ); String line = null; while ((line = br.readLine()) != null){ bw.write(line); bw.newLine(); } bw.close(); br.close(); // 4. 一次读取一个字符数组，一次写入一个字符数组的一部分(高效) BufferedReader br = new BufferedReader( new InputStreamReader(new FileInputStream("aaa/111.txt")) ); BufferedWriter bw = new BufferedWriter( new OutputStreamWriter(new FileOutputStream("aaa/222.txt")) ); char[] buf = new char[1024]; int len = 0; while ((len = br.read(buf)) != -1){ bw.write(buf,0,len); } bw.close(); br.close(); // 5. 一次读取一个字符，一次写出一个字符(高效) BufferedReader br = new BufferedReader( new InputStreamReader(new FileInputStream("aaa/111.txt")) ); BufferedWriter bw = new BufferedWriter( new OutputStreamWriter(new FileOutputStream("aaa/222.txt")) ); int ch = 0; while ((ch = br.read()) != -1) { bw.write(ch); } bw.close(); br.close(); }
}`}]},{path:"/admin/Java/Java%E5%B8%B8%E7%94%A8Api/IO%E6%B5%81/%E8%BD%AC%E6%8D%A2%E6%B5%81/%E8%BE%93%E5%87%BA/OutputStreamWriter%E7%B1%BB.html",title:"",pathLocale:"/",contents:[{header:"OutputStreamWriter 类",slug:"outputstreamwriter-类",content:"转换流可以将字节流转换成字符流"},{header:"常见的构造方法",slug:"常见的构造方法",content:`方法
作用 public OutputStreamWriter(OutputStream out)
创建一个使用默认字符编码的 OutputStreamWriter public OutputStreamWriter(OutputStream out, String charsetName)
创建一个使用命名字符编码的 OutputStreamWriter`},{header:"常见的成员方法",slug:"常见的成员方法",content:`方法
作用 方法
同 FileWriter`},{header:"方法的使用",slug:"方法的使用",content:`package com.wuziqi.gobang.IO.ZhuanhuanOutput; import java.io.FileOutputStream;
import java.io.OutputStreamWriter; public class OutputStreamWriter01 { public static void main(String[] args) throws Exception{ // public OutputStreamWriter(OutputStream out) /* FileOutputStream fos = new FileOutputStream("aaa/111.txt"); OutputStreamWriter osw = new OutputStreamWriter(fos); */ OutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream("aaa/111.txt") ); }
}`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[{header:"",slug:"",content:"404 Not Found"}]},{path:"/category/",title:"Categories",pathLocale:"/",contents:[]},{path:"/category/history/",title:"Category History",pathLocale:"/",contents:[]},{path:"/category/categorya/",title:"Category CategoryA",pathLocale:"/",contents:[]},{path:"/category/categoryb/",title:"Category CategoryB",pathLocale:"/",contents:[]},{path:"/category/categoryc/",title:"Category CategoryC",pathLocale:"/",contents:[]},{path:"/tag/",title:"Tags",pathLocale:"/",contents:[]},{path:"/tag/wwi/",title:"Tag WWI",pathLocale:"/",contents:[]},{path:"/tag/wwii/",title:"Tag WWII",pathLocale:"/",contents:[]},{path:"/tag/tag-a/",title:"Tag tag A",pathLocale:"/",contents:[]},{path:"/tag/tag-b/",title:"Tag tag B",pathLocale:"/",contents:[]},{path:"/tag/tag-c/",title:"Tag tag C",pathLocale:"/",contents:[]},{path:"/tag/tag-d/",title:"Tag tag D",pathLocale:"/",contents:[]},{path:"/tag/tag-e/",title:"Tag tag E",pathLocale:"/",contents:[]},{path:"/article/",title:"Articles",pathLocale:"/",contents:[]},{path:"/timeline/",title:"Timeline",pathLocale:"/",contents:[]}],_="update-vuepress-plugin-full-text-search2-search-index";var A=v(H),N=B(()=>{const e=new Map;for(const t of A.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[_]=e=>{A.value=e});function J(e){const t=v([]);let i=null;return j(e,()=>{i&&clearTimeout(i),i=setTimeout(a,100)}),t;function a(){const c=e.value.toLowerCase().trim();if(!c){t.value=[];return}const o=new Map,n=new Set;for(const r of A.value)for(const s of V(r,c)){n.add(s.parentPageTitle);let l=o.get(s.parentPageTitle);l||(l=[],o.set(s.parentPageTitle,l)),l.push(s)}const p=[...n].sort((r,s)=>{const l=o.get(r);return o.get(s).length-l.length});t.value=[...o].flatMap(([,r])=>r).sort((r,s)=>r.parentPagePriority-s.parentPagePriority||p.indexOf(r.parentPageTitle)-p.indexOf(s.parentPageTitle)||r.priority-s.priority)}}function*V(e,t){const i=w(e.title,t);if(i){yield{path:e.path,parentPageTitle:E(e),title:e.title,display:i,page:e,content:null,parentPagePriority:1,priority:1};return}for(const a of e.contents){const c=w(a.header,t);if(c){yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:E(e),title:e.title,display:c,page:e,content:null,parentPagePriority:10,priority:2};continue}const o=w(a.content,t);o&&(yield{path:e.path+(a.slug?`#${a.slug}`:""),parentPageTitle:E(e),title:e.title,display:[{type:"header",str:`${a.header}
`},...o],page:e,content:null,parentPagePriority:10,priority:10})}}function E(e){const t=e.path.split("/");let i="/";return t[1]&&(i=`/${t[1]}/`),(N.value.get(i)||e).title}function w(e,t){const i=[];let a=0;const c=e.toLowerCase().replace(/\s/gu," ");let o=0,n=c.indexOf(t,o);if(n<0)return null;for(;n>=0;){const r=n+t.length;if(p(e.slice(o,n),"normal"),p(e.slice(n,r),"highlight"),o=r,n=c.indexOf(t,o),a>100)break}return p(e.slice(o),"normal"),i.filter(r=>r.str);function p(r,s){let l=r;s==="normal"&&l.length>100&&a===0&&(l=`… ${l.slice(-10)}`);let g=!1;if(a+l.length>100){if(i.some(h=>h.type==="ellipsis"))return;l=l.slice(0,Math.max(100-a,1)),g=!0}i.push({type:s,str:l}),a+=l.length,g&&(i.push({type:"ellipsis",str:" …"}),a+=2)}}var z={"/":{placeholder:"全文搜索"}};const W=z,$=M({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>W}},setup(e){const{locales:t}=I(e),i=v(""),a=v(!1),c=v(-1),o=J(i),n=B(()=>i.value&&a.value&&o.value.length),p=P(),r=L(),s=B(()=>t.value[r.value]??{});function l(){if(!n.value)return;let u=c.value-1;u<0&&(u=o.value.length-1),h(u)}function g(){if(!n.value)return;let u=c.value+1;u>=o.value.length&&(u=0),h(u)}function h(u){c.value=u}function R(){c.value=-1}function T(u){if(!n.value)return;const x=o.value[u];x&&p.push(x.path)}return{query:i,focused:a,focusIndex:c,suggestions:o,activeSuggestion:n,onUp:l,onDown:g,focus:h,unfocus:R,go:T,locale:s}}}),X={class:"search-box",role:"search"},G=["placeholder"],Z=["onMousedown","onMouseenter"],Y=["href"],K={key:0,class:"parent-page-title"},Q={class:"suggestion-row"},ee={class:"page-title"},te={class:"suggestion-content"};function ne(e,t,i,a,c,o){return m(),d("div",X,[U(b("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:S({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=f(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=f((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=f((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,G),[[O,e.query]]),e.activeSuggestion?(m(),d("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(m(!0),d(C,null,k(e.suggestions,(n,p)=>(m(),d("li",{key:p,class:S(["suggestion",{focused:p===e.focusIndex}]),onMousedown:r=>e.go(p),onMouseenter:r=>e.focus(p)},[b("a",{href:n.path,onClick:t[6]||(t[6]=q(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[p-1]||e.suggestions[p-1].parentPageTitle!==n.parentPageTitle)?(m(),d("div",K,y(n.parentPageTitle),1)):D("",!0),b("div",Q,[b("div",ee,y(n.title||n.path),1),b("div",te,[(m(!0),d(C,null,k(n.display,(r,s)=>(m(),d("span",{key:s,class:S(r.type)},y(r.str),3))),128))])])],8,Y)],42,Z))),128))],32)):D("",!0)])}const ae=F($,[["render",ne],["__scopeId","data-v-27eae8f3"],["__file","SearchBox.vue"]]);export{ae as default};
