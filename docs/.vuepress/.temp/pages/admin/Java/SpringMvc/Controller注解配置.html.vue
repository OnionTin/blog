<template><div><!-- @format -->
<h2 id="controller-注解配置" tabindex="-1"><a class="header-anchor" href="#controller-注解配置"><span>Controller 注解配置</span></a></h2>
<table>
<thead>
<tr>
<th>注解</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>@Controller</td>
<td>控制器，被 Spring 托管，返回数据和视图(类和方法上都行)</td>
</tr>
<tr>
<td>@RequestMapping</td>
<td>用于映射请求 URL 到控制器方法，可以指定请求方法、请求参数、请求头等</td>
</tr>
<tr>
<td>@GetMapping</td>
<td>映射 GET 请求</td>
</tr>
<tr>
<td>@PostMapping</td>
<td>映射 POST 请求</td>
</tr>
<tr>
<td>@PutMapping</td>
<td>映射 PUT 请求</td>
</tr>
<tr>
<td>@DeleteMapping</td>
<td>映射 DELETE 请求</td>
</tr>
<tr>
<td>@PathVariable</td>
<td>和@RequestMapping 一起使用，用于获取 URL 中的路径变量(即 url 传递的参数)</td>
</tr>
<tr>
<td>@RequestParam</td>
<td>用于获取请求参数</td>
</tr>
<tr>
<td>@RequestHeader</td>
<td>用于获取请求头</td>
</tr>
<tr>
<td>@RequestBody</td>
<td>用于获取请求体</td>
</tr>
<tr>
<td>@ResponseBody</td>
<td>用于返回请求的数据，同时限制@Controller 只返回数据没有视图</td>
</tr>
<tr>
<td>@RestController</td>
<td>同@Controller，不用限制，他只返回数据(注意: 只能用在类上)</td>
</tr>
</tbody>
</table>
</div></template>


