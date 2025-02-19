## BigInt

> BigInt 是一种特殊的数据类型，用于表示大于 2^53 - 1 的整数，这个值是 JavaScript 中可以用 Number 表示的最大整数。BigInt 可以表示任意大的整数，非常适合用于处理大整数运算，如加密算法、大数据处理等场景。

### 创建 BigInt

> 可以通过在整数后面添加 n 后缀，或者使用 BigInt() 函数创建 BigInt。

```ts
// 使用 n 后缀
const bigNumber1 = 123456789012345678901234567890n;
// 使用 BigInt 函数
const bigNumber2 = BigInt("123456789012345678901234567890");
```

### BigInt 运算

> BigInt 支持标准的算术运算符，如 +, -, \*, / 等

```ts
const sum = bigNumber1 + bigNumber2;
const difference = bigNumber1 - bigNumber2;
const product = bigNumber1 * bigNumber2;
const quotient = bigNumber1 / bigNumber2;
```

### 类型检查

> 使用 typeof 检查 BigInt 类型时，返回值为 "bigint"。

```ts
typeof 10n === "bigint"; // true
typeof BigInt(10) === "bigint"; // true
```

### 注意事项

> 1. BigInt 不能与 Number 类型混合运算，必须显式转换。
>
> 2. BigInt 不支持 Math 库中的函数。
>
> 3. 转换 BigInt 为 Number 可能会导致精度丢失。

```ts
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);
const hugeString = BigInt("9007199254740991");
console.log(theBiggestInt === alsoHuge); // true
console.log(theBiggestInt === hugeString); // true

const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
const maxPlusOne = previousMaxSafe + 1n;
const multi = previousMaxSafe * 2n;
const subtr = multi - 10n;
const mod = multi % 10n;
const bigN = 2n ** 54n;
```

### 限制与建议

> 1. 精度问题：在处理非常大的数值时，使用 BigInt 可以避免 Number 类型的精度问题。
>
> 2. 性能考虑：BigInt 操作通常比 Number 操作慢，因为它们需要自定义实现且缺乏本地硬件支持。
>
> 3. 环境支持：确保你的运行环境支持 BigInt，例如，较老的浏览器或 Node.js 版本可能不支持。
