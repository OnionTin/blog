## class 与 style 的绑定

> 类（class）和样式（style）的绑定是模板中常见的动态渲染需求。Vue 提供了几种方式来动态地绑定类和样式。

### 类的绑定

#### 对象语法

> active 类将根据 isActive 的值动态添加或移除，text-danger 类将根据 hasError 的值动态添加或移除。

```html
<!-- 模板 -->
<div :class="{ active: isActive, 'text-danger': hasError }"></div>
```

```js
// 脚本
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
```

#### 数组语法

> activeClass 和 errorClass 是计算属性，它们返回的字符串将作为类名动态添加到元素上。

```html
<!-- 模板 -->
<div :class="[activeClass, errorClass]"></div>
```

```js
// 脚本
export default {
  computed: {
    activeClass() {
      return this.isActive ? "active" : "";
    },
    errorClass() {
      return this.hasError ? "text-danger" : "";
    },
  },
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
};
```

### 样式的绑定

#### 对象语法

> 文本颜色将根据 activeColor 的值动态设置，字体大小将根据 fontSize 的值动态设置。

```html
<!-- 模板 -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
// 脚本
export default {
  data() {
    return {
      activeColor: "red",
      fontSize: 30,
    };
  },
};
```

#### 数组语法

```html
<!-- 模板 -->
<div :style="[baseStyles, overrideStyles]"></div>
```

```js
// 脚本
export default {
  data() {
    return {
      overrideStyles: {
        color: "blue",
      },
    };
  },
  computed: {
    baseStyles() {
      return {
        fontSize: "16px",
        fontFamily: "Arial",
      };
    },
  },
};
```

#### 自动添加前缀

> Vue 的 :style 绑定还支持自动添加浏览器前缀。display: flex 样式将自动添加 -webkit- 前缀，以确保在旧版浏览器中也能正常工作。

```html
<!-- 模板 -->
<div :style="{ display: 'flex', WebkitDisplay: 'flex' }"></div>
```
