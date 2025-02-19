## BufferedReader 类

> 缓冲字符输出流、有缓冲区、高效

### 常见的构造方法

| 方法                             | 作用                     |
| -------------------------------- | ------------------------ |
| public BufferedReader(Reader in) | 读取给定 File 对象的文件 |

### 常见的成员方法

| 方法              | 作用                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------- |
| public void flush | 刷新缓冲区                                                                                         |
| public void close | 释放资源，同时自带刷新缓冲区的功能                                                                 |
| 其他方法          | <RouteLink to="/admin/Java/Java常用Api/IO流/字符流/写入/FileReader类.md">同 FileReader</RouteLink> |

### 方法的使用

```java
package com.wuziqi.gobang.IO.ZiFuInput;

import java.io.BufferedReader;
import java.io.FileReader;

public class BufferedReader01 {
    public static void main(String[] args) throws Exception {
        /*
        FileReader fr = new FileReader("aaa/111.txt");
        BufferedReader br = new BufferedReader(fr);
        */
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        int len = 0;
        while( (len = br.read()) != -1){
            System.out.print((char)len);
        }
    }
}
```

### 特有的成员方法

| 方法                     | 作用                                                |
| ------------------------ | --------------------------------------------------- |
| public String readLine() | 一次读取一行，返回值是 String 类型，读不到返回 null |

```java
package com.wuziqi.gobang.IO.ZiFuInput;

import java.io.BufferedReader;
import java.io.FileReader;

public class BufferedReadLine {
    public static void main(String[] args) throws  Exception{
        // public String readLine()：一次读取一行，没有就是null
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        /*
        String s1 = br.readLine();
        String s2 = br.readLine();
        String s3 = br.readLine();
        String s4 = br.readLine();
        String s5 = br.readLine();
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
        System.out.println(s5);
        // ai约不约？随便吧。
        // 字符流嘛
        // 必须来点中文啊
        // null
        // null
        */
        String line = null;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        // ai约不约？随便吧。
        // 字符流嘛
        // 必须来点中文啊
    }
}
```

### 文件的复制

```java
package com.wuziqi.gobang.IO.ZiFuInput;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class BufferedCopy01 {
    public static void main(String[] args) throws Exception{
        // 1.一次读取一个字符，一次写入一个字符
        /*
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/222.txt"));
        int ch = 0;
        while((ch = br.read()) != -1){
            bw.write(ch);
        }
        bw.close();
        br.close();
        */

        // 2.一次读取一个字符数组，一次写入一个字符数组一部分
        /*
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/222.txt"));
        char[] chs = new char[1024];
        int len = 0;
        while((len = br.read(chs)) != -1){
            bw.write(chs, 0, len);
        }
        bw.close();
        br.close();
        */

        // 3.一次读取一行，一次写入行
        //（这种方式最后总会多出来一个空行，如果不在意可以使用）
        BufferedReader br = new BufferedReader(new FileReader("aaa/111.txt"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("aaa/555.txt"));
        String line = null;
        while ((line = br.readLine()) != null) {
            bw.write(line, 0, line.length());
            bw.newLine();
        }
        bw.close();
        br.close();
    }
}
```
