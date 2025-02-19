## json

### 响应设置 MIME 类型

```java
response.setContextType("application/json;charset=utf-8");
```

### json 格式和对象之间的相互转换

> 用 json 转换器(jackson、fastJson、gson 等第三方)进行转换，和之前的 BeanUtils 工具类很像。下面的案例是用 jackson 进行转换。

### json 转 对象

```java
String json = "{\"name\":\"张三\",\"age\":20}"; // java中必须用双引号，所以把"进行转义
ObjectMapper objectMapper = new ObjectMapper();
Person person = objectMapper.readValue(json, Person.class);
System.out.println(person);
System.out.println(person.getAge());
```

### 对象 转 json 并响应

```java
response.setContentType("application/json;charset=utf-8");
Person person = new Person();
person.setName("张三");
person.setAge(20);
ObjectMapper objectMapper = new ObjectMapper();
// String json = objectMapper.writeValueAsString(person);
// response.getWriter().write(json);
objectMapper.writeValue(response.getWriter(), person); // 和上边两句一样的效果
```

### json 转 List

```java
String json = "[{\"name\"":\"张三\",\"age\:20},{\"name\":\"李四\",age:25}]";
ObjectMapper objectMapper = new ObjectMapper();
List<Person> personList = objectMapper.readValue(
  json,
  new TypeReference<List<Person>>() {}
);
System.out.println(personList);
```

### List 转 json 并响应

```java
List<Person> personList = new ArrayList<>();
personList.add(new Person("张三", 20));
personList.add(new Person("李四", 25));
ObjectMapper objectMapper = new ObjectMapper();
String json = objectMapper.writeValueAsString(personList);
System.out.println(json);
response.getWriter().write(json);
// response.setContentType("application/json;charset=utf-8");
// objectMapper.writeValue(response.getWriter(), personList);
```

### json 转 Map

```java
String json = "{\"name\":\"张三\",\"age\":20}";
ObjectMapper objectMapper = new ObjectMapper();
Map<String, Object> map = objectMapper.readValue(
  json, new TypeReference<Map<String, Object>>() {}
);
System.out.println(map);
```

### Map 转 json 并响应

```java
Map<String, Object> map = new HashMap<>();
map.put("name", "张三");
map.put("age", 20);
ObjectMapper objectMapper = new ObjectMapper();
String json = objectMapper.writeValueAsString(map);
System.out.println(json);
response.getWriter().write(json);
// response.setContentType("application/json;charset=utf-8");
// objectMapper.writeValue(response.getWriter(), map);
```
