<!-- @format -->

## React 中`Portals`

React 的`Portals`是一种将子元素渲染到父组件之外的 DOM 节点的机制。可以在需要将 UI 元素渲染在父组件之外时使用。

### 1. 定义和用途

`Portals`允许你将子元素渲染到存在于父组件之外的 DOM 节点上。这在创建模态框、提示框、下拉菜单等需要“突破”其父级容器的样式时非常有用。

### 2. 创建 Portal

使用`ReactDOM.createPortal`函数创建一个 Portal，它接受两个参数：要渲染的子元素和目标 DOM 节点。

```jsx
import { createPortal } from 'react-dom';
// ...
return createPortal(
  <div>这里是要渲染的内容</div>,
  document.getElementById('my-node')
);
```

### 3. 事件冒泡

Portal 中的事件冒泡遵循 React 组件树，而不是 DOM 树。这意味着，即使 Portal 在 DOM 中的位置与 React 树不同，事件依然会向上冒泡到 React 树中的父组件。

### 4. 性能考虑

Portal 可以提高性能，因为它允许你在不重新渲染父组件的情况下更新子组件。

### 5. 无障碍性

使用 Portal 时，需要确保应用程序的无障碍性。例如，对于模态框，确保所有人都能够与之交互，遵循 WAI-ARIA 模态实践指南。

### 6. 清理

当使用 Portal 时，确保在组件卸载时清理 Portal，以避免内存泄漏。

### 7. 集成非 React 内容

Portals 也可以用来集成非 React 内容，例如在 React 应用中嵌入非 React 小部件。

### 8. 与 Context 一起使用

即使 Portal 渲染在不同的 DOM 节点，它仍然可以访问 React 树中的 Context。

### 9. 限制

虽然 Portal 提供了灵活性，但过度使用可能会使应用程序结构变得复杂，并且难以维护。

### 10. 实用案例

Portals 的常见用例包括模态框、提示框、下拉菜单、加载屏幕和 Cookie 警告等。

### 11. 与 React Hooks 结合使用

你可以将 Portal 与 React Hooks 结合使用，例如使用`useEffect`来处理 Portal 的挂载和清理。

### 12. 测试 Portals

测试使用 Portal 的组件可能需要特殊处理，以确保 Portal 内容正确渲染并且事件处理正确。
