## readonly 与 shallowReadonly

> 也可以是 ref 定义的;一般用于引用了别人的数据,并且在当前页面内不允许改。
> readonly 和 shallowReadonly 的区别在于 readonly 是深度只读,而 shallowReadonly 是浅度只读,只对第一层属性进行只读处理,不会对嵌套的属性进行只读处理

```js
import { reactive, readonly, shallowReadonly } from "vue";

const state = reactive({
  name: "张三",
  age: 18,
  info: {
    height: 1.88,
    weight: 75,
  },
});

// readonly:深度只读
const state2 = readonly(state);

// shallowReadonly:浅度只读
const state3 = shallowReadonly(state);

state2.name = "李四"; // 报错
state3.name = "李四"; // 报错
state3.info.height = 1.88; // 不报错
```
