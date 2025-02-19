<!-- @format -->

## 自定义 Hooks

自定义 Hooks 是一种在 React 中复用状态逻辑的高级技巧。它们让你可以在多个组件之间重用状态逻辑而不必直接复用类组件的代码。通过封装状态逻辑和副作用，自定义 Hooks 让你的组件更加简洁和清晰。

### 1. 使用 Hooks 的规则

- 只能在函数组件的顶层使用 Hooks。
- 不要在循环、条件语句或嵌套函数中调用 Hooks。

### 2. 创建自定义 Hook

自定义 Hook 是通过在函数前面加上`use`前缀来创建的，它是一个 JavaScript 函数。

```jsx
function useMyCustomHook(input) {
  // ...状态逻辑
  return someValue;
}
```

### 3. 使用 useState 和 useEffect

自定义 Hooks 内部可以使用其他 Hooks，如`useState`和`useEffect`。

```jsx
function useUser(name) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${name}`);
      const userData = await response.json();
      setUser(userData);
    };

    fetchUser();
  }, [name]);

  return user;
}
```

### 4. 暴露公共 API

自定义 Hook 应该暴露一个公共 API，这样其他组件就可以使用它。

```jsx
function useUser(name) {
  // ...状态逻辑
  return { user, isLoading, error };
}
```

### 5. 参数化

自定义 Hook 可以接受参数，使其更加灵活和通用。

```jsx
function useFetchData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}
```

### 6. 使用自定义 Hook

在组件中使用自定义 Hook，就像使用内置 Hook 一样。

```jsx
function UserProfile({ userName }) {
  const user = useUser(userName);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <div>{user.name}</div>;
}
```

### 7. 命名约定

自定义 Hook 的命名应该以`use`为前缀，并且能够清晰地表达其功能。

### 8. 避免副作用

自定义 Hook 的主要目的是封装状态逻辑，而不是副作用。副作用应该在组件内部使用`useEffect`处理。

### 9. 使用自定义 Hook 进行性能优化

自定义 Hook 可以用于封装性能优化逻辑，如 memoization、throttling 或 debouncing。

```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

### 10. 自定义 Hook 的组合

你可以创建多个自定义 Hook，并将它们组合起来使用。
