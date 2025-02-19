## HashRouter(利用 hash 实现路由切换)

> `HashRouter` 是 React Router v6 中用于在 Web 浏览器中创建路由的组件之一，特别适合在不支持或不需要使用 HTML5 History API 的情况下使用。它通过 URL 的 hash（即 URL 中 `#` 后面的部分）来管理路由状态，这意味着路由路径不会发送到服务器。

### 特点

- **无服务器依赖**：`HashRouter` 不依赖服务器配置，适用于那些你无法控制服务器配置的情况。
- **简单易用**：只需将应用包裹在 `HashRouter` 组件内，即可实现路由功能。
- **兼容性好**：几乎所有浏览器都支持 URL hash，因此 `HashRouter` 在浏览器兼容性方面表现良好。

### 安装

> 使用 npm 或 yarn 安装 React Router v6：

```bash
npm install react-router-dom@6
# 或者
yarn add react-router-dom@6
```

### 使用

> 在应用的顶层组件中使用 HashRouter：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
```

### 配置

1. basename：可以配置应用在 URL 中的基础路径。
2. window：默认使用当前页面的 window 对象，但也可以用于跟踪另一个窗口的 URL，例如 &lt;iframe&gt;。

```jsx
function App() {
  return (
    <HashRouter basename="/app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
```

### HashRouter 与 BrowserRouter 的比较

1. BrowserRouter 使用 HTML5 的 History API 来管理路由状态，适用于需要与服务器配合的场景。
2. HashRouter 使用 URL 的 hash 部分来管理路由状态，适用于无法控制服务器配置的场景。
3. 官方推荐，除非绝对必要，否则不要使用 HashRouter。
4. HashRouter 在刷新页面时可能会导致路由状态（如 state 参数）丢失。
