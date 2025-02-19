<!-- @format -->

## pureComponent

### Component 的 2 个问题

> 1. 只要执行`setState()`，即使不改变状态数据，组件也会重新 render（效率低）
> 2. 只当前组件重新 render，就会自动重新 render 子组件，纵使子组件没有用到父组件的任何数据（效率低）

### 效率高的做法

> 只有当组件的 state 或 props 数据发生改变时才重新 render()

### 原因

> Component 中的`shouldComponentUpdate()`总是返回 true

### 解决

#### 1. 重写`shouldComponentUpdate()`方法

> 比较新旧 state 或 props 数据，如果有变化才返回 true，如果没有返回 false

#### 2. 使用`PureComponent`

> `PureComponent`重写了`shouldComponentUpdate()`，只有 state 或 props 数据有变化才返回 true

**注意:**

- 只是进行 state 和 props 数据的浅比较，如果只是数据对象内部数据变了，返回 false
- 不要直接修改 state 数据，而是要产生新数据
- 项目中一般使用`PureComponent`来优化
