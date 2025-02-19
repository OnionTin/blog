<!-- @format -->

## React `React.lazy` 和 `Suspense`

`React.lazy` 和 `Suspense` 是 React 中用于代码分割和懒加载的两个重要功能，按需加载组件，从而优化应用的加载时间和性能。

### 1. React.lazy

`React.lazy` 是一个用于动态加载组件的函数。它允许你将组件分割成独立的代码块，这些代码块只有在需要时才会被加载。

```jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

- 当你使用 `React.lazy` 时，你实际上是在告诉 React，只有在需要渲染该组件时才加载它的代码。
- 它返回一个对象，该对象包含一个 `.then()` 方法，允许你处理加载完成的 Promise 。

### 2. Suspense

`Suspense` 是一个组件，它可以让你包裹懒加载的组件，并提供一个回退（fallback）UI，这个 UI 会在懒加载的组件加载完成之前显示。

```jsx
<React.Suspense fallback={<div>Loading...</div>}>
  <OtherComponent />
</React.Suspense>
```

- `fallback` 属性可以是任何 React 节点，通常是一个加载指示器。
- 当懒加载的组件正在加载时，`Suspense` 会渲染 `fallback` 属性提供的 UI 。

### 3. 使用场景

- **懒加载组件**：对于不立即需要的组件，如页面底部的“关于我们”部分。
- **代码分割**：将大型应用分割成更小的代码块，以加快初始加载速度。
- **性能优化**：通过按需加载资源，减少应用的加载时间。

### 4. 优势

- **提升首屏速度**：通过代码分割，减少首屏加载时间。
- **动态加载**：仅在组件需要渲染时才加载，减少无用资源的加载。
- **更好的用户体验**：`Suspense` 的 `fallback` 属性提供了平滑的加载过渡 。

### 5. 注意事项

- **错误处理**：使用错误边界（Error Boundaries）来捕获懒加载组件中的错误。
- **避免过度使用**：虽然懒加载可以提升性能，但过度使用可能导致应用结构复杂化。
- **兼容性**：确保你的构建工具（如 Webpack）支持代码分割。

### 6. 实现原理

- `React.lazy` 会返回一个懒加载组件对象，该对象在渲染时会动态加载对应的模块代码。
- `Suspense` 组件会捕获懒加载组件加载过程中的异常，并渲染 `fallback` UI。
- 当组件加载完成时，`Suspense` 会渲染实际的组件，并卸载 `fallback` UI 。

### 7. 与 Concurrent Mode 结合

- `React.lazy` 和 `Suspense` 可以与 React 的 Concurrent Mode 结合使用，以实现更流畅的加载体验和更好的资源调度 。

### 8. 实际案例

```jsx
import React, { Suspense } from 'react';
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
```

在这个例子中，`LazyComponent` 将被懒加载，直到它需要被渲染时才加载。在加载过程中，将显示一个加载指示器。
