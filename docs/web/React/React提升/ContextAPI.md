<!-- @format -->

## Context API

React 的 Context API 允许你在组件树中共享值，而不必在每个层级手动传递 props。处理跨组件通信的强大工具，它可以用来共享状态、功能或任何可变的值，而不必显式地通过组件链逐级传递。

### 1. 创建 Context

使用`React.createContext`创建一个新的 Context 对象。

```jsx
const MyContext = React.createContext(defaultValue);
```

### 2. 提供 Context 值

使用`Context.Provider`组件包裹你想要提供值的组件树。

```jsx
<MyContext.Provider value={/* 一些值 */}>
  <YourComponent />
</MyContext.Provider>
```

### 3. 消费 Context

组件可以使用`Context.Consumer`或`useContext` Hook 来消费 Context。

#### 使用`Context.Consumer`

```jsx
<MyContext.Consumer>
  {value => /* 根据context值渲染组件 */}
</MyContext.Consumer>
```

#### 使用`useContext` Hook

```jsx
import { useContext } from 'react';

function YourComponent() {
  const value = useContext(MyContext);
  // ...
}
```

### 4. Context 默认值

为 Context 设置默认值，以便在没有`Provider`的情况下使用。

```jsx
const defaultValue = { theme: 'light' };
const MyContext = React.createContext(defaultValue);
```

### 5. 更新 Context 值

更新`Provider`的`value`属性将导致所有消费该 Context 的组件重新渲染。

```jsx
<MyContext.Provider value={{ theme: 'dark' }}>
  <App />
</MyContext.Provider>
```

### 6. 使用 Context 进行状态管理

Context 可以用于全局状态管理，如用户身份验证、主题或偏好设置。

### 7. 嵌套 Context

可以嵌套多个 Context，以在组件树的不同部分提供不同的值。

### 8. Context 与组件性能

过度使用 Context 或不正确的更新可能导致性能问题，因为每个消费 Context 的组件都会在 Context 值更新时重新渲染。

### 9. Memoization

使用`React.memo`、`useMemo`或`useCallback`来避免不必要的渲染。

### 10. Context 与 Redux

Context 可以作为状态管理解决方案，但通常与 Redux 等库结合使用，以处理更复杂的状态逻辑。

### 11. 注意事项

- Context 是为频繁跨组件树传递数据而设计的，而不是作为通用的状态管理解决方案。
- 如果 Context 值变化不频繁，但组件仍然重新渲染，考虑使用`useMemo`创建一个稳定的值。
- 在类组件中，可以使用`static contextType`来消费 Context。

### 12. 自定义 Hook 与 Context

创建自定义 Hook 来包装 Context 的使用方法，以便在多个组件中重用。

```jsx
function useMyContext() {
  return useContext(MyContext);
}
```

### 13. Context 的替代方案

对于简单的跨组件通信，可以考虑使用提升 state 或 props drilling 作为 Context 的替代方案。

### 14. Context 的类型检查

使用`PropTypes`来验证 Context 的值。

### 15. Context 与 Suspense

Context 可以与`React.Suspense`一起使用，为数据加载提供更好的错误边界和加载状态。
