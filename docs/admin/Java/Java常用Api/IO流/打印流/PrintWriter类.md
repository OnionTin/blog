## PrintWriter 类

打印字符流，只有输出流，没有输入流

### 常见的构造方法

| 方法                                              | 作用                                           |
| ------------------------------------------------- | ---------------------------------------------- |
| public PrintWriter(String fileName)               | 根据指定的文件创建 PrintWriter                 |
| public PrintWriter(Writer out, boolean autoFlush) | 根据指定的 Writer 创建 PrintWriter；默认 false |

### 常见的成员方法

| 方法                        | 作用                     |
| --------------------------- | ------------------------ |
| public void println(any x)  | 打印任意类型的 x，并换行 |
| public void print(any x)    | 打印任意类型的 x，不换行 |
| public void write(String s) | 打印字符串 s ，不换行    |

### 方法的使用

```java
package com.wuziqi.gobang.IO.DaYinOutput;

import java.io.FileWriter;
import java.io.PrintWriter;

public class PrintWriter01 {
    public static void main(String[] args) throws Exception{
        // public PrintWriter(String fileName)
        /*
        PrintWriter pw = new PrintWriter("aaa/666.txt");
        pw.println("你好");
        pw.print("这个不换行!");
        pw.write("只能打印字符串、字符或者字符数组；且也不换行");
        pw.close();
        */

        // public PrintWriter(Writer out, boolean autoFlush)
        // autoFlush：只有值为true，且方法为println、printf、format才会自动刷新
        PrintWriter pw = new PrintWriter(new FileWriter("aaa/666.txt"), true);
        pw.println("autoFlush:true，这个会自动刷新；且换行");
        pw.print("autoFlush:true，这个也不会自动刷新；且不换行!");
        pw.write("打印字符串 s；autoFlush:true，这个也不会自动刷新；且不换行! ");
    }
}
```

### 文件复制

```java
package com.wuziqi.gobang.IO.DaYinOutput;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.PrintWriter;

public class PrintCopy01 {
    public static void main(String[] args) throws Exception {
        // 一次读取一行，一次写出一行
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        PrintWriter pw = new PrintWriter("aaa/777.txt");
        String line = null;
        while ((line = br.readLine()) != null) {
            pw.println(line);
        }
        pw.close();
        br.close();

        // 读取一行写入一行，同时开启自动刷新
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        PrintWriter pw = new PrintWriter(new FileWriter("aaa/777.txt"), true);
        String line = null;
        while ((line = br.readLine()) != null) {
            pw.println(line);
        }
    }
}
```
