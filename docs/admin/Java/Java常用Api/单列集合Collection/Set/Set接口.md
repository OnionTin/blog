## Set 子接口

需要导包，在 java.util 下；Set 也是接口，是 Collection 的子接口。

### Set 集合的特点

1. <font color=red>无序性</font>（即：存进去的顺序和取出来的顺序不一定一致）
2. <font color=red>无索引</font>
3. <font color=red>唯一性</font>，Set 集合中的元素的不能重复

### 常见的成员方法

<font color=red><RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Collection接口.md">与 Collection 集合</RouteLink>一致</font>

### Set 集合遍历

1. 转数组循环遍历

2. 迭代器遍历

3. 增强 for 循环遍历(for each)

### 方法的使用案例

```java
package com.wuziqi.gobang.Set;

import java.util.HashSet;
import java.util.Set;

public class Demo01 {
    public static void main(String[] args) {
        Set<String> set = new <String> HashSet();
        set.add("aaa");
        set.add("bbb");
        set.add("ccc");
        // set.add(111);// 由于泛型，编译报错
        Boolean b = set.add("aaa");
        System.out.println(b); // 唯一性：false
        System.out.println(set); // 无序性：[aaa, ccc, bbb]
    }
}
```
