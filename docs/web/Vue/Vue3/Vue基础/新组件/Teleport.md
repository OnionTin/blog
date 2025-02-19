## Teleport

> 传送门组件，将组件渲染到指定的 DOM 节点中，一般都是渲染到 body 中

### 基本使用

```vue
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Teleport to="body">
      <div v-if="show" class="modal">
        <p>Hello from the modal!</p>
        <button @click="show = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.modal {
  position: fixed; /* ... */
}
</style>
```

### to 属性

> to 属性指定了要渲染到的 DOM 节点，可以是 CSS 选择器或者 DOM 节点

```vue
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Teleport to="#modal"
      ><!-- to 属性指定了要渲染到的 DOM 节点 -->
      <div v-if="show" class="modal">
        <p>Hello from the modal!</p>
        <button @click="show = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.modal {
  position: fixed; /* ... */
}
</style>
```

### disabled 属性

> disabled 属性可以禁用 Teleport 组件，当 disabled 为 true 时，组件不会渲染到指定的 DOM 节点中

```vue
<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Teleport to="body" :disabled="disabled">
      <div v-if="show" class="modal">
        <p>Hello from the modal!</p>
        <button @click="show = false">Close</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      disabled: false,
    };
  },
};
</script>

<style>
.modal {
  position: fixed; /* ... */
}
</style>
```
