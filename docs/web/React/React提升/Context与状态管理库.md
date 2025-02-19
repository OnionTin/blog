<!-- @format -->

## Context 与状态管理库

React Context 提供了一种在组件树中共享值的方式，而无需显式地通过每个层级传递 props。这使得它成为实现全局状态管理的理想选择，尤其是在与状态管理库结合使用时。

### React Context

React Context 允许你创建一个全局的 state，通过`Provider`组件包裹你的应用，使得状态在整个应用中可访问。通过`useContext` Hook，你可以在任何组件中轻松地访问和更新这个全局状态。

- **创建 Context**：

  ```jsx
  const MyContext = React.createContext(defaultValue);
  ```

- **提供 Context 值**：

  ```jsx
  <MyContext.Provider value={/* 一些值 */}>
    <YourComponent />
  </MyContext.Provider>
  ```

- **消费 Context**：
  ```jsx
  function YourComponent() {
    const value = useContext(MyContext);
    // ...
  }
  ```

### 状态管理库

虽然 React Context 可以处理一些全局状态管理的场景，但在面对更复杂的状态逻辑时，你可能需要一个更强大的状态管理库。

#### Redux

Redux 是一个流行的状态管理库，它提供了一个中央存储，以可预测的方式管理应用的状态。它的核心概念包括单一数据源、状态是只读的以及使用纯函数来执行修改。

- **特点**：
  - 单一数据源：整个应用的状态存储在一个对象中。
  - 纯函数：通过 reducers 处理状态更新。
  - 中间件：支持如 Redux-Saga、Redux-Thunk 等中间件。

#### MobX

MobX 是一个轻量级的响应式状态管理库，它允许你以更直观的方式管理状态。它使用可观察的数据结构和自动追踪依赖关系。

- **特点**：
  - 响应式：当状态改变时，相关的组件会自动更新。
  - 装饰器：使用装饰器来定义可观察的属性。

#### Recoil

Recoil 是由 Facebook 开发的一个实验性的状态管理库，它提供了原子化的状态管理方式。

- **特点**：
  - 原子状态：状态被分割成独立的片段。
  - 选择器：允许你基于状态派生出新的值。

#### Jotai

Jotai 是一个基于 React Hooks 的轻量级状态管理库，它专注于原子状态管理和响应式编程。

- **特点**：
  - 原子状态：状态被分割成独立的原子。
  - 派生状态：允许基于现有状态派生出新的值。

### 结合使用

你可以将 React Context 与这些状态管理库结合使用，以实现更高效的全局状态管理。例如，你可以使用 Redux 来管理应用的状态，同时使用 Context API 来在组件树中传递这些状态。

- **Redux 与 Context**：

  ```jsx
  <Provider store={store}>
    <App />
  </Provider>
  ```

- **MobX 与 Context**：
  ```jsx
  <Provider {...mobxStore}>
    <App />
  </Provider>
  ```

通过这种方式，你可以利用状态管理库的强大功能，同时享受 Context 提供的简洁性和易用性。

### 最佳实践

- **避免过度使用**：只在需要全局访问时使用 Context。
- **分离逻辑**：保持 Context 的简洁性，将逻辑代码抽离到单独的函数或组件中。
- **结合使用**：根据项目需求，灵活地结合使用不同的状态管理库和 Context API。
