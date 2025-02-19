<!-- @format -->

## react 中事件处理

### 当事件绑定的元素正是你要操作的元素时

> 可以省略 ref 绑定,通过 event.target 获取到当前元素(其实事件的触发是通过事件委托，委托元素的上级元素进行处理的，即冒泡)

```jsx
// 创建ref容器
myRef = React.createRef();
myRef2 = React.createRef();

// 展示左侧输入框的数据
showData = () => {
  alert(this.myRef.current.value);
};

// 展示右侧输入框的数据
showData2 = (event) => {
  alert(event.target.value);
};

render() {
  return (
    <div>
      <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
      <button onClick={this.showData}>点我提示左侧的数据</button>
      <input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
    </div>
  );
}
```

### 非受控组件

> 点击 button 的时候会执行 handleSubmit 事件,但是事件是绑定在 form 上的,承接上面所说事件委托

```jsx
// 创建组件
class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault(); // 阻止表单提交
    const { username, password } = this;
    alert(
      `你输入的用户名是: ${username.value}, 你输入的密码是: ${password.value}`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        用户名:
        <input
          ref={(c) => (this.username = c)}
          type="text"
          name="username"
        />
        密码:
        <input
          ref={(c) => (this.password = c)}
          type="password"
          name="password"
        />
        <button>登录</button>
      </form>
    );
  }
}
```

### 受控组件(推荐)

> 没有 ref, 尽量减少了 ref 绑定,提高效率; 事件的双向绑定

```jsx
// 初始化状态
state = {
  username: '', // 用户名
  password: ''  // 密码
};

// 保存用户名到状态中
saveUsername = (event) => {
  this.setState({ username: event.target.value });
};

// 保存密码到状态中
savePassword = (event) => {
  this.setState({ password: event.target.value });
};

// 表单提交的回调
handleSubmit = (event) => {
  event.preventDefault(); // 阻止表单提交
  const { username, password } = this.state;
  alert(`你输入的用户名是: ${username}, 你输入的密码是: ${password}`);
};

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      用户名:<input onChange={this.saveUsername} type="text" name="username"/>
      密码:<input onChange={this.savePassword} type="password" name="password"/>
      <button>登录</button>
    </form>
  );
}
```

### 高阶组件-柯里化函数

> ([dataType]:因为字符串形式的不会转成相应的 key, 所以用[]包裹一下)

```jsx
// 初始化状态
state = {
  username: '', // 用户名
  password: ''  // 密码
};

// 保存表单数据到状态中
saveFormData = (dataType) => {
  return (event) => {
    this.setState({ [dataType]: event.target.value });
  };
};

// 表单提交的回调
handleSubmit = (event) => {
  event.preventDefault(); // 阻止表单提交
  const { username, password } = this.state;
  alert(`你输入的用户名是: ${username}, 你输入的密码是: ${password}`);
};

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      用户名:<input onChange={this.saveFormData('username')} type="text" name="username"/>
      密码:<input onChange={this.saveFormData('password')} type="password" name="password"/>
      <button>登录</button>
    </form>
  );
}
```

### 高阶组件-不用柯里化函数()

> 直接在函数中调用,返回一个函数,再调用返回的函数,传入参数

```jsx
// 保存表单数据到状态中
saveFormData = (dataType, event) => {
  this.setState({ [dataType]: event.target.value });
};

// 表单提交的回调
handleSubmit = (event) => {
  event.preventDefault(); // 阻止表单提交
  const { username, password } = this.state;
  alert(`你输入的用户名是: ${username}, 你输入的密码是: ${password}`);
};

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      用户名:<input onChange={event => this.saveFormData('username', event)} type="text" name="username"/>
      密码:<input onChange={event => this.saveFormData('password', event)} type="password" name="password"/>
      <button>登录</button>
    </form>
  );
}

// 渲染组件
ReactDOM.render(<Login />, document.getElementById('test'));
```
