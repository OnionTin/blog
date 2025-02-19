<!-- @format -->

## lazyLoad

### 路由组件的 lazyLoad

```js
// 1.通过 React 的 lazy 函数配合 import()函数动态加载路由组件===>路由组件代码会被分开打包
const Login = lazy(() => import('@/pages/Login'));
```

```jsx
// 2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义 loading 界面
<Suspense fallback={<h1>loading.....</h1>}>
  <Switch>
    <Route
      path="/xxx"
      component={Xxxx}
    />
    <Redirect to="/login" />
  </Switch>
</Suspense>
```
