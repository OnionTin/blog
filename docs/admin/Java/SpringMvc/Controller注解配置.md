<!-- @format -->

## Controller 注解配置

| 注解            | 说明                                                                     |
| --------------- | ------------------------------------------------------------------------ |
| @Controller     | 控制器，被 Spring 托管，返回数据和视图(类和方法上都行)                   |
| @RequestMapping | 用于映射请求 URL 到控制器方法，可以指定请求方法、请求参数、请求头等      |
| @GetMapping     | 映射 GET 请求                                                            |
| @PostMapping    | 映射 POST 请求                                                           |
| @PutMapping     | 映射 PUT 请求                                                            |
| @DeleteMapping  | 映射 DELETE 请求                                                         |
| @PathVariable   | 和@RequestMapping 一起使用，用于获取 URL 中的路径变量(即 url 传递的参数) |
| @RequestParam   | 用于获取请求参数                                                         |
| @RequestHeader  | 用于获取请求头                                                           |
| @RequestBody    | 用于获取请求体                                                           |
| @ResponseBody   | 用于返回请求的数据，同时限制@Controller 只返回数据没有视图               |
| @RestController | 同@Controller，不用限制，他只返回数据(注意: 只能用在类上)                |
