<!-- @format -->

## render 和 props

### 如何向组件内部动态传入带内容的结构(标签)?

**Vue 中:**

- 使用 slot 技术，也就是通过组件标签体传入结构 `<A><B/></A>`

**React 中:**

- 使用 children props: 通过组件标签体传入结构
- 使用 render props: 通过组件标签属性传入结构，一般用 render 函数属性

### children props

```jsx
<A>
  <B>xxxx</B>
</A>;
{
  this.props.children;
}
// 问题：如果B组件需要A组件内的数据，==>做不到
```

### render props

```jsx
<A render={(data) => <C data={data}></C>}></A>
// A组件: {this.props.render(内部state数据)}
// C组件: 读取A组件传入的数据显示 {this.props.data}
```

### 案例

```jsx
export default class Parent extends React.Component {
  render() {
    return (
      <div className="parent">
        <h3>Parent</h3>
        <A render={(name) => <C name={name}></C>}></A>
      </div>
    );
  }
}

class A extends React.Component {
  state = { name: 'tom' };
  render() {
    console.log(this.props);
    const { name } = this.state;
    return (
      <div className="a">
        <h3>A</h3>
        {this.props.render(name)}
      </div>
    );
  }
}
```
