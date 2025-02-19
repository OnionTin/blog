## BufferedWriter 类

> 缓冲字符输出流、有缓冲区、高效

### 常见的构造方法

| 方法                              | 作用                             |
| --------------------------------- | -------------------------------- |
| public BufferedWriter(Writer out) | 将输出流写到给定 File 对象的文件 |

### 常见的成员方法

| 方法              | 作用                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| public void close | 释放资源，同时自带刷新缓冲区的功能                                                                 |
| 其他方法          | <RouteLink to="/admin/Java/Java常用Api/IO流/字符流/输出/FileWriter类.md">同 FileWriter</RouteLink> |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZiFuOutput;

import java.io.BufferedWriter;
import java.io.FileWriter;

public class BufferedWriter01 {
    public static void main(String[] args) throws Exception{
        /*
        FileWriter fw = new FileWriter("aaa/222.txt");
        BufferedWriter bw = new BufferedWriter(fw);
        */
        BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/222.txt"));
    }
}
```

### 特有的成员方法

| 方法                  | 作用                                                 |
| --------------------- | ---------------------------------------------------- |
| public void newLine() | 换行(不用考虑系统，自动切换；"\r\n"换行时要考虑系统) |

```java
package com.wuziqi.gobang.IO.ZiFuOutput;

import java.io.BufferedWriter;
import java.io.FileWriter;

public class BufferedNewLine {
    public static void main(String[] args) throws Exception{
        // public void newLine()：相当于换行符
        BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/444.txt"));
        bw.newLine();
        bw.newLine();
        bw.newLine();
        bw.write("都到这行了!");
        bw.flush();
        bw.close();
    }
}
```
