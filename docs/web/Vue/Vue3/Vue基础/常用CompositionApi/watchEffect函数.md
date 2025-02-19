## Vue3 中的 watch 和 watchEffect

### watch 和 watchEffect 的区别

- watch：既要指明监视的属性，也要指明监视的回调。
- watchEffect：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

### watchEffect 与 computed 的对比

- **watchEffect** 有点像 `computed`：
  - 但 `computed` 注重的是计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而 `watchEffect` 更注重的是过程（回调函数的函数体），所以不用写返回值。
  - `watchEffect` 所指定的回调中用到的数据只要发生变化，则直接重新执行回调。

```javascript
watchEffect(() => {
  const x1 = sum.value;
  const x2 = person.age;
  console.log("watchEffect配置的回调执行了");
});
```

```js
// setup函数和监视
setup() {
  // 数据
  let sum = ref(0)
  let msg = ref('你好啊')
  let person = reactive({
    name: '张三',
    age: 18,
    job: {
      j1: {
        salary: 20
      }
    }
  })

  // 监视
  // watch(sum, (newValue, oldValue) => {
  //   console.log('sum的值变化了', newValue, oldValue)
  // }, { immediate: true })

  watchEffect(() => {
    const x1 = sum.value
    const x2 = person.job.j1.salary
    console.log('watchEffect所指定的回调执行了')
  })
}
```
