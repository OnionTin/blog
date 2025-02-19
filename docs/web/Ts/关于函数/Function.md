## Function

> 全局类型 Function 是所有 JavaScript 函数值的类型。它包括了所有函数对象共有的属性，如 call、bind 和 apply。此外，Function 类型的值可以被调用，并且这些调用返回 any 类型 。

> 当你在函数中声明 this 参数时，你为该函数调用时的上下文对象提供了一个类型注解。这在对象的方法或回调函数中尤其有用，以确保函数调用时 this 的类型是正确的。Printer 接口定义了一个 print 方法，该方法声明了 this 参数为 Printer 类型。这确保了 print 方法中的 this 指的是 Printer 类型的对象。

```ts
interface Printer {
  print(this: Printer, message: string): void;
}

function setupPrinter(p: Printer) {
  const printer: Printer = {
    print: function (this: Printer, message: string) {
      console.log(message);
    },
  };
  window.onload = function (this: Printer) {
    this.print("The page has finished loading.");
  }.bind(printer);
}

const myPrinter: Printer = {
  print: function (this: Printer, message: string) {
    console.log(`Printing: ${message}`);
  },
};

setupPrinter(myPrinter);
```

> 在回调函数中声明 this 参数时，你可以确保回调函数中的 this 与期望的类型一致。doSomething 函数接受一个回调函数 f，该回调函数声明了 this 参数为 Printer 类型。这确保了当 doSomething 调用 f 时，this 指向 Printer 类型的对象。

```ts
function doSomething(f: (this: Printer, message: string) => void) {
  return f.call(printer, "Hello, World!");
}

doSomething(myPrinter.print);
```

### 注意

需要注意的是，箭头函数不绑定自己的 this，它们继承父执行上下文的 this。因此，当你在类的方法中使用箭头函数时，this 可能不会指向你期望的对象。为了避免这种情况，可以使用普通函数或使用 bind 来确保 this 的正确性。
