## 虚拟 dom 实现原理

> 虚拟 dom 是用 js 模拟一颗 dom 树,放在浏览器内存中，相当于在 js 和真实 dom 中加了一个缓存，利用 dom diff 算法避免了没有必要的 dom 操作，从而提高性能。

### 虚拟 dom 优点：

> 1.  虚拟 DOM 具有批处理和高效的 Diff 算法,最终表现在 DOM 上的修改只是变更的部分，可以保证非常高效的渲染,优化性能；
> 2.  虚拟 DOM 不会立马进行排版与重绘操作，对虚拟 DOM 进行频繁修改，最后一次性比较并修改真实 DOM 中需要改的部分；
> 3.  虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部；

### 虚拟 dom 缺点：

> 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢；

### React 组件的渲染过程：

> 1.  使用 JSX 编写 React 组件后所有的 JSX 代码会通过 Babel 转化为 React.createElement 执行;
> 2.  createElement 函数对 key 和 ref 等特殊的 props 进行处理，并获取 defaultProps 对默认 props 进行赋值，并且对传入的子节点进行处理，最终构造成一个 ReactElement 对象（所谓的虚拟 DOM）。
> 3.  ReactDOM.render 将生成好的虚拟 DOM 渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实 DOM。

### 虚拟 DOM 的组成——ReactElementelement 对象结构：

1. type：元素的类型，可以是原生 html 类型（字符串），或者自定义组件（函数或 class）
2. key：组件的唯一标识，用于 Diff 算法，下面会详细介绍
3. ref：用于访问原生 dom 节点
4. props：传入组件的 props，chidren 是 props 中的一个属性，它存储了当前组件的孩子节点，可以是数组（多个孩子节点）或对象（只有一个孩子节点）
5. owner：当前正在构建的 Component 所属的 Component
6. self：（非生产环境）指定当前位于哪个组件实例
7. \_source：（非生产环境）指定调试代码来自的文件(fileName)和代码行数(lineNumber);
