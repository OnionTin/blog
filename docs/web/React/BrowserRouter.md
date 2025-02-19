## BrowserRouter(利用 h5 Api 实现路由切换)

> `BrowserRouter` 是 React Router 库中的一个组件，用于在 React 应用程序中创建单页面应用程序（SPA）的路由。它使用 HTML5 的 `history` API 来实现页面的导航，不会触发页面的重新加载。

### 特点

- **无需刷新**：利用 `history` API 的 `pushState` 和 `replaceState` 方法，实现无刷新的路由切换。
- **动态路由匹配**：可以动态地匹配 URL 路径，并渲染对应的组件。
- **嵌套路由**：支持嵌套路由，方便创建复杂的页面结构。
- **链接（Link）组件**：提供了 `<Link>` 组件，用于创建可导航的链接，与普通 `<a>` 标签不同，它不会重新加载页面。

### 安装

> 使用 npm 或 yarn 安装 React Router：

```bash
npm install react-router-dom
# 或者
yarn add react-router-dom
```

### 使用

> 在应用程序中，BrowserRouter 通常包裹在根组件之外，作为应用的顶层路由

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> |<Link to="/about">About</Link> |
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### 组件

1. BrowserRouter：用于创建一个单页面应用程序的路由。
2. Routes：一个容器组件，用于包裹多个 Route 组件。
3. Route：定义路由规则，当路径匹配时，渲染对应的组件。
4. Link：用于创建导航链接，点击时不会重新加载页面。
