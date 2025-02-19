## List 子接口

需要导包，在 java.util 下；List 也是接口，是 Collection 的子接口。

### List 集合的特点

1. <font color=red>有序</font>的集合（即：存进去的顺序和取出来的顺序是一致的）
2. <font color=red>有索引</font>，所以 List 集合也被称为索引集合
3. 元素都<font color=red>允许重复</font>，所以 List 集合也被称为有序集合

### 常见的成员方法

<font color=red><RouteLink to="/admin/Java/Java常用Api/单列集合Collection/Collection接口.md">Collection 集合</RouteLink>的方法都被继承了，不描述了</font>
| 方法 | 作用 |
| ---------------------------------- | ---------------- |
| boolean add(Object e) | 添加元素 |
| void add(int index, Object element) | 添加元素 |
| boolean remove(Object o) | 删除元素 |
| boolean removeIf(Predicate filter) | 按照条件删除元素 |
| Object remove(int index) | 删除指定索引处的元素 |
| Object set(int index, Object element) | 修改指定索引处的元素，返回被修改的数据 |
| Object get(int index) | 返回指定索引处的元素 |

### List 集合遍历

1. 转数组循环遍历

2. 迭代器遍历

3. 增强 for 循环遍历(for each)

4. 普通的 for 循环遍历(利用索引)

### 方法的使用案例

```java
package com.wuziqi.gobang.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class DemoList {
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        // void add(int index, Object element)
        list.add(1, "ddd");
        System.out.println(list); // [aaa, ddd, bbb, ccc]

        list.remove("ddd");
        // void remove(int index)
        list.remove(1);
        System.out.println(list); // [aaa, ccc]

        // Object set(int index, Object element)
        list.set(1, "bbb");
        System.out.println(list); // [bbb,ccc]

        // Object get(int index)
        list.get(1);
        System.out.println(list.get(1)); // bbb

        list.add("bbb");
        list.add("ccc");
        list.add(111);
        list.add(111);
        // 转数组遍历
        Object[] obj = list.toArray();
        for (int i = 0; i < obj.length; i++){
            System.out.println(obj[i]);
        }
        // 迭代器遍历
        Iterator it = list.iterator();
        while (it.hasNext()){
            System.out.println(it.next());
        }
        // 增强for遍历(for each)
        for (Object o : list){
            System.out.println(o);
        }
        // 普通for缓存遍历(利用索引)
        for(int i = 0; i < list.size(); i++){
            System.out.println(list.get(i));
        }
    }
}
```
