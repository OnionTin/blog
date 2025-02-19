<!-- @format -->

## GetMapping 参数和数据响应

```java
// UserController
package com.haha.controller;

import com.haha.pojo.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/user")
public class UserController {
  // 前端参数是一个字符串
  // localhost:8080/user/t1?name=xxx
  @GetMapping("/t1")
  public String test1(@RequestParam("username") String name, Model model){
    // @RequestParam:
    // 1. 不加这个注解的话，只有参数名一致(地址栏和形参)，才能接收到e
    // 2. 改变请求参数的名字，@RequestParam("username") String name
    // 3. 前端传递的参数必须是username，是name都会报错

    // 1. 接收前端参数
    System.out.println("接收到前端的参数为：" + name);
    // 2. 将结果返回给前端，Model
    model.addAttribute("msg", name);
    // 3. 视图跳转
    return "test";
  }

  // 前端参数是一个对象
  // localhost:8080/user/t2?id=xxx&name=xxx&age=xxx
  // 要求前端传递的参数和方法中的形参，字段都必须保持一致，否则不一致的字段会为null
  @GetMapping("/t2")
  public String test2(User user, Model model){
    // 1. 接收前端参数
    System.out.println("接收到前端的参数为：" + user);
    // User(id=12, name=null, age=18)
    // 2. 将结果返回给前端，Model
    model.addAttribute("msg", user);
    // 3. 视图跳转
    return "test";
  }

  /*
  数据处理有3种方式:
  1. ModelAndView(继承Controller常用)：存储数据的同时可以设置视图逻辑，控制展示层的跳转
  2. Model(注解常用)：只适用于存储数据(最常用)
  3. ModelMap：继承了LinkedMap，同时继承了LinkedMap的方法和特性
  */
  @GetMapping("/t3")
  public String test3(ModelMap map){
    return "test";
  }
}
```

```java
// User
package com.haha.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {
  private int id;
  private String name;
  private int age;
}
```
