## JUnit

需要导入 Juint 相关的 jar 包

| 注解        | 作用                     |
| ----------- | ------------------------ |
| @Test       | 表示该方法是一个测试方法 |
| @BeforeEach | 在测试方法执行之前执行   |
| @AfterEach  | 在测试方法执行之后执行   |

```java
package com.api.JdbcTemplate;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TestDemo {
    @AfterEach
    public void ccc() {
        System.out.println("after");
    }

    @BeforeEach
    public void aaa() {
        System.out.println("before");
    }

    @Test
    public void bbb() {
        System.out.println("test");
    }

    // 运行结果：
    // before
    // test
    // after
}
```
