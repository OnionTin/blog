/** @format */

import { blogPlugin } from '@vuepress/plugin-blog';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchPlugin } from '@vuepress/plugin-search';
import { copyCodePlugin } from '@vuepress/plugin-copy-code';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';

import { defineUserConfig } from 'vuepress';

import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';

import fullTextSearchPlugin from 'vuepress-plugin-full-text-search2';

export default defineUserConfig({
  host: 'localhost', // ip
  port: '8099', //端口号
  base: '/blog/',
  // dest: 'dist',
  lang: 'zh-CN',
  title: '你好，幸运儿！',
  description: "OnionTin's owner blog",
  head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        children: [
          {
            text: 'Vue',
            link: '/web/Vue/'
          },
          {
            text: 'React',
            link: '/web/React/'
          },
          {
            text: 'Ts',
            link: '/web/Ts/'
          }
        ]
      },
      {
        text: '后端',
        children: [
          {
            text: 'Java',
            link: '/admin/Java/'
          },
          {
            text: 'Python',
            link: '/admin/Python/'
          },
          {
            text: 'Node',
            link: '/admin/Node/'
          }
        ]
      },
      {
        text: '大数据',
        link: '/database/database.md'
      },
      { text: 'Ui相关', link: '/ui/ui.md' },
      { text: 'nvm', link: '/nvm/nvm.md' },
      { text: '代码分享', link: 'https://www.codecopy.cn/' }
    ],
    sidebar: {
      '/web/Vue/': [
        {
          text: 'Vue2组件通信',
          collapsible: false,
          link: '/web/Vue/Vue2/Vue2组件通信.md'
        },
        {
          text: 'Vue3',
          collapsible: false,
          children: [
            {
              text: 'Vue基础',
              collapsible: false,
              children: [
                {
                  text: '常用CompositionApi',
                  collapsible: true,
                  children: [
                    {
                      text: 'setup函数',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/setup函数.md'
                    },
                    {
                      text: 'ref函数',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/ref函数.md'
                    },
                    {
                      text: 'reactive函数',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/reactive函数.md'
                    },
                    {
                      text: 'reactive和ref对比',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/reactive和ref对比.md'
                    },
                    {
                      text: 'toRef函数',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/toRef函数.md'
                    },
                    {
                      text: 'toRefs函数',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/toRefs函数.md'
                    },
                    {
                      text: 'computed和watch',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/computed和watch.md'
                    },
                    {
                      text: 'watchEffect函数',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/watchEffect函数.md'
                    },
                    {
                      text: '生命周期钩子',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/生命周期钩子.md'
                    },
                    {
                      text: '自定义hook',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/自定义hook.md'
                    },
                    {
                      text: '响应式原理',
                      link: '/web/Vue/Vue3/Vue基础/常用CompositionApi/响应式原理.md'
                    }
                  ]
                },
                {
                  text: '其他CompositionApi',
                  collapsible: true,
                  children: [
                    {
                      text: 'shallowReactive和shallowRef',
                      link: '/web/Vue/Vue3/Vue基础/其他CompositionApi/shallowReactive和shallowRef.md'
                    },
                    {
                      text: 'readonly和shallowReadonly',
                      link: '/web/Vue/Vue3/Vue基础/其他CompositionApi/readonly和shallowReadonly.md'
                    },
                    {
                      text: 'toRaw和markRaw',
                      link: '/web/Vue/Vue3/Vue基础/其他CompositionApi/toRaw和markRaw.md'
                    },
                    {
                      text: 'customRef',
                      link: '/web/Vue/Vue3/Vue基础/其他CompositionApi/customRef.md'
                    },
                    {
                      text: 'provide和inject',
                      link: '/web/Vue/Vue3/Vue基础/其他CompositionApi/provide和inject.md'
                    },
                    {
                      text: '响应式数据判断',
                      link: '/web/Vue/Vue3/Vue基础/其他CompositionApi/响应式数据判断.md'
                    }
                  ]
                },
                {
                  text: '新组件',
                  collapsible: true,
                  children: [
                    {
                      text: 'Fragment',
                      link: '/web/Vue/Vue3/Vue基础/新组件/Fragment.md'
                    },
                    {
                      text: 'Teleport',
                      link: '/web/Vue/Vue3/Vue基础/新组件/Teleport.md'
                    },
                    {
                      text: 'Suspense',
                      link: '/web/Vue/Vue3/Vue基础/新组件/Suspense.md'
                    }
                  ]
                },
                {
                  text: '其他变化(具体参考vue迁移指南)',
                  collapsible: true,
                  children: [
                    {
                      text: '全局API的转移',
                      link: '/web/Vue/Vue3/Vue基础/其他变化/全局API的转移.md'
                    },
                    {
                      text: '其他更改',
                      link: '/web/Vue/Vue3/Vue基础/其他变化/其他更改.md'
                    }
                  ]
                },
                {
                  text: '插件',
                  collapsible: true,
                  link: '/web/Vue/Vue3/Vue基础/插件.md'
                },
                {
                  text: 'pinia',
                  collapsible: true,
                  children: [
                    {
                      text: 'defineStore',
                      link: '/web/Vue/Vue3/Vue基础/pinia/defineStore.md'
                    },
                    {
                      text: 'store.$state',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$state.md'
                    },
                    {
                      text: 'store.$id',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$id.md'
                    },

                    {
                      text: 'storeToRefs',
                      link: '/web/Vue/Vue3/Vue基础/pinia/storeToRefs.md'
                    },
                    {
                      text: 'store.$patch',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$patch.md'
                    },
                    {
                      text: 'store.$subscribe',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$subscribe.md'
                    },
                    {
                      text: 'store.$reset',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$reset.md'
                    },
                    {
                      text: 'store.$dispose',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$dispose.md'
                    },
                    {
                      text: 'store.$onAction',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$onAction.md'
                    },
                    {
                      text: 'store.$forceUpdate',
                      link: '/web/Vue/Vue3/Vue基础/pinia/store.$forceUpdate.md'
                    },
                    {
                      text: 'getters和actions',
                      link: '/web/Vue/Vue3/Vue基础/pinia/getters和actions.md'
                    },
                    {
                      text: '分模块',
                      link: '/web/Vue/Vue3/Vue基础/pinia/分模块.md'
                    },
                    {
                      text: '持久pinia',
                      link: '/web/Vue/Vue3/Vue基础/pinia/持久pinia.md'
                    },
                    {
                      text: 'pinia与vuex的区别',
                      link: '/web/Vue/Vue3/Vue基础/pinia/pinia与vuex的区别.md'
                    }
                  ]
                }
              ]
            },
            {
              text: '技术点',
              collapsible: true,
              children: [
                {
                  text: '响应式基础ref与reactive',
                  link: '/web/Vue/Vue3/技术点/响应式基础ref与reactive.md'
                },
                {
                  text: '计算属性的缓存机制与事件的区别',
                  link: '/web/Vue/Vue3/技术点/计算属性的缓存机制与事件的区别.md'
                },
                {
                  text: 'class与style的绑定',
                  link: '/web/Vue/Vue3/技术点/class与style的绑定.md'
                },
                {
                  text: '条件渲染(v-if与v-for的优先级)',
                  link: '/web/Vue/Vue3/技术点/条件渲染(v-if与v-for的优先级).md'
                },
                {
                  text: '表单的双向绑定',
                  link: '/web/Vue/Vue3/技术点/表单的双向绑定.md'
                },
                {
                  text: '生命周期',
                  link: '/web/Vue/Vue3/技术点/生命周期.md'
                },
                {
                  text: '侦听器watch与watchEffect',
                  link: '/web/Vue/Vue3/技术点/侦听器watch与watchEffect.md'
                },
                {
                  text: '组件注册(局部与全局)',
                  link: '/web/Vue/Vue3/技术点/组件注册(局部与全局).md'
                },
                {
                  text: 'props与emit',
                  link: '/web/Vue/Vue3/技术点/props与emit.md'
                },
                {
                  text: '插槽的用法',
                  link: '/web/Vue/Vue3/技术点/插槽的用法.md'
                },
                {
                  text: '传透Attribute的取消与useAttrs',
                  link: '/web/Vue/Vue3/技术点/传透Attribute的取消与useAttrs.md'
                },
                {
                  text: '组合式Api的优点',
                  link: '/web/Vue/Vue3/技术点/组合式Api的优点.md'
                },
                {
                  text: '自定义指令与自定义插件',
                  link: '/web/Vue/Vue3/技术点/自定义指令与自定义插件.md'
                }
              ]
            },
            {
              text: '组件通信',
              collapsible: true,
              children: [
                {
                  text: 'props',
                  link: '/web/Vue/Vue3/组件通信/props.md'
                },
                {
                  text: '自定义事件',
                  link: '/web/Vue/Vue3/组件通信/自定义事件.md'
                },
                {
                  text: '全局事件总线',
                  link: '/web/Vue/Vue3/组件通信/全局事件总线.md'
                },
                {
                  text: 'v-model新用法',
                  link: '/web/Vue/Vue3/组件通信/v-model.md'
                },
                {
                  text: 'useAttrs',
                  link: '/web/Vue/Vue3/组件通信/useAttrs.md'
                },
                {
                  text: 'ref与$parent',
                  link: '/web/Vue/Vue3/组件通信/ref与$parent.md'
                },
                {
                  text: 'provide与inject',
                  link: '/web/Vue/Vue3/组件通信/provide与inject.md'
                },
                {
                  text: 'pinia',
                  link: '/web/Vue/Vue3/组件通信/pinia.md'
                },
                {
                  text: 'slot',
                  link: '/web/Vue/Vue3/组件通信/slot.md'
                }
              ]
            }
          ]
        }
      ],
      '/web/React/': [
        {
          text: 'react基础',
          collapsible: true,
          children: [
            {
              text: 'react-dom',
              link: '/web/React/react-dom.md'
            },
            {
              text: 'props和state',
              link: '/web/React/props和state.md'
            },
            {
              text: 'BrowserRouter',
              link: '/web/React/BrowserRouter.md'
            },
            {
              text: 'HashRouter',
              link: '/web/React/HashRouter.md'
            },
            {
              text: 'Suspense',
              link: '/web/React/Suspense.md'
            },
            {
              text: 'react生命周期',
              link: '/web/React/react生命周期.md'
            },
            {
              text: 'react-router',
              link: '/web/React/react-router.md'
            },
            {
              text: 'redux',
              link: '/web/React/redux.md'
            },
            {
              text: 'react - css',
              link: '/web/React/react-css.md'
            },
            {
              text: 'react - hooks',
              link: '/web/React/react-hooks.md'
            },
            {
              text: 'redux和hooks搭配使用流程',
              link: '/web/React/redux和hooks搭配使用流程.md'
            },
            {
              text: 'react高阶组件',
              link: '/web/React/react高阶组件.md'
            },
            {
              text: 'react中间件',
              link: '/web/React/react中间件.md'
            },
            {
              text: 'react分层',
              link: '/web/React/react分层.md'
            },
            {
              text: 'react类型检查',
              link: '/web/React/react类型检查.md'
            },
            {
              text: '虚拟dom实现原理',
              link: '/web/React/虚拟dom实现原理.md'
            },
            {
              text: '单向数据流和双向绑定原理',
              link: '/web/React/单向数据流和双向绑定原理.md'
            },
            {
              text: 'react组件信息传递',
              link: '/web/React/react组件信息传递.md'
            },
            {
              text: 'jsx语法规则',
              link: '/web/React/jsx语法规则.md'
            },
            {
              text: '类相关基本知识',
              link: '/web/React/类相关基本知识.md'
            },
            {
              text: '函数式组件与类式组件',
              link: '/web/React/函数式组件与类式组件.md'
            },
            {
              text: '类相关基本知识',
              link: '/web/React/类相关基本知识.md'
            },
            {
              text: '类组件中的属性',
              link: '/web/React/类组件中的属性.md'
            },
            {
              text: 'react中事件处理',
              link: '/web/React/react中事件处理.md'
            },
            {
              text: 'todoList小案例总结',
              link: '/web/React/todoList小案例总结.md'
            },
            {
              text: 'redux开发者工具',
              link: '/web/React/redux开发者工具.md'
            }
          ]
        },
        {
          text: 'react扩展',
          collapsible: true,
          children: [
            {
              text: 'setState',
              link: '/web/React/setState.md'
            },
            {
              text: 'lazyLoad',
              link: '/web/React/lazyLoad.md'
            },
            {
              text: 'useState',
              link: '/web/React/useState.md'
            },
            {
              text: 'useEffect',
              link: '/web/React/useEffect.md'
            },
            {
              text: 'refEffect',
              link: '/web/React/refEffect.md'
            },
            {
              text: 'context',
              link: '/web/React/context.md'
            },
            {
              text: 'pureComponent',
              link: '/web/React/pureComponent.md'
            },
            {
              text: 'render和props',
              link: '/web/React/render和props.md'
            },
            {
              text: '组件通信',
              link: '/web/React/组件通信.md'
            }
          ]
        },
        {
          text: 'React提升',
          collapsible: false,
          children: [
            {
              text: 'JSX',
              link: '/web/React/React提升/JSX.md'
            },
            {
              text: '组件',
              collapsible: true,
              children: [
                {
                  text: '函数组件',
                  link: '/web/React/React提升/组件/函数组件.md'
                },
                {
                  text: '类组件',
                  link: '/web/React/React提升/组件/类组件.md'
                },
                {
                  text: '组件的组合',
                  link: '/web/React/React提升/组件/组件的组合.md'
                }
              ]
            },
            {
              text: 'ContextAPI',
              link: '/web/React/React提升/ContextAPI.md'
            },
            {
              text: 'Hooks',
              collapsible: true,
              children: [
                {
                  text: 'useState',
                  link: '/web/React/React提升/Hooks/useState.md'
                },
                {
                  text: 'useEffect',
                  link: '/web/React/React提升/Hooks/useEffect.md'
                },
                {
                  text: 'useContext',
                  link: '/web/React/React提升/Hooks/useContext.md'
                },
                {
                  text: 'useReducer',
                  link: '/web/React/React提升/Hooks/useReducer.md'
                },
                {
                  text: 'useRef',
                  link: '/web/React/React提升/Hooks/useRef.md'
                },
                {
                  text: 'useMemo和useCallback',
                  link: '/web/React/React提升/Hooks/useMemo和useCallback.md'
                }
              ]
            },
            {
              text: 'props',
              link: '/web/React/React提升/props.md'
            },
            {
              text: 'state',
              link: '/web/React/React提升/state.md'
            },
            {
              text: '事件处理',
              link: '/web/React/React提升/事件处理.md'
            },
            {
              text: '条件渲染',
              link: '/web/React/React提升/条件渲染.md'
            },
            {
              text: '列表和键',
              link: '/web/React/React提升/列表和键.md'
            },
            {
              text: '表单处理',
              link: '/web/React/React提升/表单处理.md'
            },
            {
              text: '高阶组件(HOC)',
              link: '/web/React/React提升/高阶组件(HOC).md'
            },
            {
              text: 'Fragment',
              link: '/web/React/React提升/Fragment.md'
            },
            {
              text: 'Portals',
              link: '/web/React/React提升/Portals.md'
            },
            {
              text: 'Refs',
              link: '/web/React/React提升/Refs.md'
            },
            {
              text: '渲染props',
              link: '/web/React/React提升/渲染props.md'
            },
            {
              text: 'React.lazy和Suspense',
              link: '/web/React/React提升/React.lazy和Suspense.md'
            },
            {
              text: 'React.Profiler',
              link: '/web/React/React提升/React.Profiler.md'
            },
            {
              text: '错误边界',
              link: '/web/React/React提升/错误边界.md'
            },
            {
              text: 'Fiber',
              link: '/web/React/React提升/Fiber.md'
            },
            {
              text: 'Context与状态管理库',
              link: '/web/React/React提升/Context与状态管理库.md'
            },
            {
              text: '自定义Hooks',
              link: '/web/React/React提升/自定义Hooks.md'
            },
            {
              text: '状态提升',
              link: '/web/React/React提升/状态提升.md'
            },
            {
              text: '组合vs继承',
              link: '/web/React/React提升/组合vs继承.md'
            },
            {
              text: 'React版本差异',
              link: '/web/React/React提升/React版本差异 .md'
            },
            {
              text: '懒加载',
              link: '/web/React/React提升/懒加载.md'
            }
          ]
        }
      ],
      '/admin/Java/': [
        {
          text: 'java基础',
          collapsible: true,
          children: [
            {
              text: '数据类型',
              link: '/admin/Java/Java基础/数据类型.md'
            },
            {
              text: 'ASCII编码',
              link: '/admin/Java/Java基础/ASCII编码.md'
            },
            {
              text: '数组',
              link: '/admin/Java/Java基础/数组.md'
            },
            {
              text: '方法',
              link: '/admin/Java/Java基础/方法.md'
            },
            {
              text: '方法的重载',
              link: '/admin/Java/Java基础/方法的重载.md'
            },
            {
              text: '面向对象',
              link: '/admin/Java/Java基础/面向对象.md'
            },
            {
              text: '成员变量和局部变量',
              link: '/admin/Java/Java基础/成员变量和局部变量.md'
            },
            {
              text: 'static',
              link: '/admin/Java/Java基础/static.md'
            },
            {
              text: '继承',
              link: '/admin/Java/Java基础/继承.md'
            },
            {
              text: 'super',
              link: '/admin/Java/Java基础/super.md'
            },
            {
              text: '封装',
              link: '/admin/Java/Java基础/封装.md'
            },
            {
              text: '重写',
              link: '/admin/Java/Java基础/重写.md'
            },
            {
              text: '多态',
              link: '/admin/Java/Java基础/多态.md'
            },
            {
              text: 'final',
              link: '/admin/Java/Java基础/final.md'
            },
            {
              text: '代码块',
              link: '/admin/Java/Java基础/代码块.md'
            },
            {
              text: '抽象类',
              link: '/admin/Java/Java基础/抽象类.md'
            },
            {
              text: '接口',
              link: '/admin/Java/Java基础/接口.md'
            },
            {
              text: '类与接口',
              link: '/admin/Java/Java基础/类与接口.md'
            },
            {
              text: '修饰符',
              link: '/admin/Java/Java基础/修饰符.md'
            },
            {
              text: '内部类',
              link: '/admin/Java/Java基础/内部类.md'
            },
            {
              text: '匿名内部类',
              link: '/admin/Java/Java基础/匿名内部类.md'
            },
            {
              text: '面向对象三大特征',
              link: '/admin/Java/Java基础/面向对象三大特征.md'
            }
          ]
        },
        {
          text: 'java常用Api',
          collapsible: true,
          children: [
            {
              text: 'Object类的常用Api',
              link: '/admin/Java/Java常用Api/Object类的常用Api.md'
            },
            {
              text: 'String字符串',
              link: '/admin/Java/Java常用Api/String字符串.md'
            },
            {
              text: 'StringBuilder',
              link: '/admin/Java/Java常用Api/StringBuilder.md'
            },
            {
              text: 'Math',
              link: '/admin/Java/Java常用Api/Math.md'
            },
            {
              text: 'Integer包装类',
              link: '/admin/Java/Java常用Api/Integer包装类.md'
            },
            {
              text: 'System',
              link: '/admin/Java/Java常用Api/System.md'
            },
            {
              text: 'Date',
              link: '/admin/Java/Java常用Api/Date.md'
            },
            {
              text: 'Calendar',
              link: '/admin/Java/Java常用Api/Calendar.md'
            },
            {
              text: 'Arrays',
              link: '/admin/Java/Java常用Api/Arrays.md'
            },
            {
              text: 'UUID',
              link: '/admin/Java/Java常用Api/UUID.md'
            },
            {
              text: 'Random',
              link: '/admin/Java/Java常用Api/Random.md'
            },
            {
              text: 'BigDecimal',
              link: '/admin/Java/Java常用Api/BigDecimal.md'
            },
            {
              text: 'Localdatetime',
              link: '/admin/Java/Java常用Api/Localdatetime.md'
            },
            {
              text: '异常',
              link: '/admin/Java/Java常用Api/异常.md'
            },
            {
              text: '集合概述',
              link: '/admin/Java/Java常用Api/集合.md'
            },
            {
              text: '单列集合Collection',
              collapsible: true,
              children: [
                {
                  text: 'Collection接口',
                  link: '/admin/Java/Java常用Api/单列集合Collection/Collection接口.md'
                },
                {
                  text: 'Iterator迭代器',
                  link: '/admin/Java/Java常用Api/单列集合Collection/Iterator迭代器.md'
                },
                {
                  text: 'List',
                  collapsible: false,
                  children: [
                    {
                      text: 'List子接口',
                      link: '/admin/Java/Java常用Api/单列集合Collection/List/List子接口.md'
                    },
                    {
                      text: 'ArrayList实现类',
                      link: '/admin/Java/Java常用Api/单列集合Collection/List/ArrayList实现类.md'
                    },
                    {
                      text: 'LinkedList实现类',
                      link: '/admin/Java/Java常用Api/单列集合Collection/List/LinkedList实现类.md'
                    }
                  ]
                },
                {
                  text: 'Set',
                  collapsible: false,
                  children: [
                    {
                      text: 'Set子接口',
                      link: '/admin/Java/Java常用Api/单列集合Collection/Set/Set接口.md'
                    },
                    {
                      text: 'TreeSet实现类',
                      link: '/admin/Java/Java常用Api/单列集合Collection/Set/TreeSet实现类.md'
                    },
                    {
                      text: 'Comparable自然排序',
                      link: '/admin/Java/Java常用Api/单列集合Collection/Set/Comparable自然排序.md'
                    },
                    {
                      text: 'Comparator比较器',
                      link: '/admin/Java/Java常用Api/单列集合Collection/Set/Comparator比较器.md'
                    },
                    {
                      text: 'HashSet实现类',
                      link: '/admin/Java/Java常用Api/单列集合Collection/Set/HashSet实现类.md'
                    },
                    {
                      text: 'LinkedHashSet实现类',
                      link: '/admin/Java/Java常用Api/单列集合Collection/Set/LinkedHashSet实现类.md'
                    }
                  ]
                }
              ]
            },
            {
              text: '数据结构',
              collapsible: true,
              children: [
                {
                  text: '队列、栈、数组、链表',
                  link: '/admin/Java/Java常用Api/数据结构/数据结构.md'
                },
                {
                  text: '二叉树',
                  link: '/admin/Java/Java常用Api/数据结构/二叉树.md'
                },
                {
                  text: '哈希表',
                  link: '/admin/Java/Java常用Api/数据结构/哈希表.md'
                }
              ]
            },
            {
              text: '泛型',
              link: '/admin/Java/Java常用Api/泛型.md'
            },
            {
              text: '双列集合Map',
              collapsible: true,
              children: [
                {
                  text: 'Map接口',
                  link: '/admin/Java/Java常用Api/双列集合Map/Map接口.md'
                },
                {
                  text: 'HashMap实现类',
                  link: '/admin/Java/Java常用Api/双列集合Map/HashMap实现类.md'
                },
                {
                  text: 'TreeMap实现类',
                  link: '/admin/Java/Java常用Api/双列集合Map/TreeMap实现类.md'
                },
                {
                  text: 'LinkedHashMap实现类',
                  link: '/admin/Java/Java常用Api/双列集合Map/LinkedHashMap实现类.md'
                },
                {
                  text: 'HashTable实现类',
                  link: '/admin/Java/Java常用Api/双列集合Map/HashTable实现类.md'
                },
                {
                  text: 'Properties实现类',
                  link: '/admin/Java/Java常用Api/双列集合Map/Properties实现类.md'
                }
              ]
            },
            {
              text: 'Collections工具类',
              link: '/admin/Java/Java常用Api/Collections工具类.md'
            },
            {
              text: '集合总结',
              link: '/admin/Java/Java常用Api/集合总结.md'
            },
            {
              text: '可变参数',
              link: '/admin/Java/Java常用Api/可变参数.md'
            },
            {
              text: '递归',
              link: '/admin/Java/Java常用Api/递归.md'
            },
            {
              text: 'File类',
              link: '/admin/Java/Java常用Api/File类.md'
            },
            {
              text: 'I/O流',
              collapsible: true,
              children: [
                {
                  text: 'I/O流概述',
                  link: '/admin/Java/Java常用Api/IO流/IO流概述.md'
                },
                {
                  text: '字节流',
                  collapsible: true,
                  children: [
                    {
                      text: '写入输出流',
                      collapsible: false,
                      children: [
                        {
                          text: 'FileOutputStream类',
                          link: '/admin/Java/Java常用Api/IO流/字节流/输出/FileOutputStream类.md'
                        },
                        {
                          text: 'BufferedOutputStream类',
                          link: '/admin/Java/Java常用Api/IO流/字节流/输出/BufferedOutputStream类.md'
                        }
                      ]
                    },
                    {
                      text: '读取输入流',
                      collapsible: false,
                      children: [
                        {
                          text: 'FileInputStream类',
                          link: '/admin/Java/Java常用Api/IO流/字节流/写入/FileInputStream类.md'
                        },
                        {
                          text: 'BufferedInputStream类',
                          link: '/admin/Java/Java常用Api/IO流/字节流/写入/BufferedInputStream类.md'
                        }
                      ]
                    }
                  ]
                },
                {
                  text: '字符流',
                  collapsible: true,
                  children: [
                    {
                      text: '写入输出流',
                      collapsible: false,
                      children: [
                        {
                          text: 'FileWriter类',
                          link: '/admin/Java/Java常用Api/IO流/字符流/输出/FileWriter类.md'
                        },
                        {
                          text: 'BufferedWriter类',
                          link: '/admin/Java/Java常用Api/IO流/字符流/输出/BufferedWriter类.md'
                        }
                      ]
                    },
                    {
                      text: '读取输入流',
                      collapsible: false,
                      children: [
                        {
                          text: 'FileReader类',
                          link: '/admin/Java/Java常用Api/IO流/字符流/写入/FileReader类.md'
                        },
                        {
                          text: 'BufferedReader类',
                          link: '/admin/Java/Java常用Api/IO流/字符流/写入/BufferedReader类.md'
                        }
                      ]
                    }
                  ]
                },
                {
                  text: 'I/O流异常处理',
                  link: '/admin/Java/Java常用Api/IO流/IO流异常处理.md'
                },
                {
                  text: 'I/O流的选择',
                  link: '/admin/Java/Java常用Api/IO流/IO流的选择.md'
                },
                {
                  text: '转换流',
                  collapsible: true,
                  children: [
                    {
                      text: '转换读取输入流',
                      collapsible: false,
                      children: [
                        {
                          text: 'InputStreamReader类',
                          link: '/admin/Java/Java常用Api/IO流/转换流/输入/InputStreamReader类.md'
                        }
                      ]
                    },
                    {
                      text: '转换写入输出流',
                      collapsible: false,
                      children: [
                        {
                          text: 'OutputStreamWriter',
                          link: '/admin/Java/Java常用Api/IO流/转换流/输出/OutputStreamWriter类.md'
                        }
                      ]
                    }
                  ]
                },
                {
                  text: '打印流',
                  collapsible: true,
                  children: [
                    {
                      text: 'PrintStream类',
                      link: '/admin/Java/Java常用Api/IO流/打印流/PrintStream类.md'
                    },
                    {
                      text: 'PrintWriter类',
                      link: '/admin/Java/Java常用Api/IO流/打印流/PrintWriter类.md'
                    }
                  ]
                },
                {
                  text: '对象操作流',
                  collapsible: true,
                  children: [
                    {
                      text: '序列化',
                      collapsible: false,
                      children: [
                        {
                          text: 'ObjectOutputStream类',
                          link: '/admin/Java/Java常用Api/IO流/对象操作流/序列化/ObjectOutputStream类.md'
                        }
                      ]
                    },
                    {
                      text: '反序列化',
                      collapsible: false,
                      children: [
                        {
                          text: 'ObjectInputStream类',
                          link: '/admin/Java/Java常用Api/IO流/对象操作流/反序列化/ObjectInputStream类.md'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: '装饰设计模式',
              link: '/admin/Java/Java常用Api/装饰设计模式.md'
            },
            {
              text: '编码和解码',
              link: '/admin/Java/Java常用Api/编码和解码.md'
            },
            {
              text: '类加载器',
              link: '/admin/Java/Java常用Api/类加载器.md'
            },
            {
              text: '多线程',
              collapsible: true,
              children: [
                {
                  text: '多线程概述',
                  link: '/admin/Java/Java常用Api/多线程/多线程概述.md'
                },
                {
                  text: '多线程的实现',
                  link: '/admin/Java/Java常用Api/多线程/多线程的实现.md'
                },
                {
                  text: '并发访问问题',
                  link: '/admin/Java/Java常用Api/多线程/并发访问问题.md'
                },
                {
                  text: '同步机制',
                  link: '/admin/Java/Java常用Api/多线程/同步机制.md'
                },
                {
                  text: '等待唤醒机制',
                  link: '/admin/Java/Java常用Api/多线程/等待唤醒机制.md'
                },
                {
                  text: '死锁',
                  link: '/admin/Java/Java常用Api/多线程/死锁.md'
                },
                {
                  text: '定时器',
                  link: '/admin/Java/Java常用Api/多线程/定时器.md'
                }
              ]
            },
            {
              text: '单例设计模式',
              link: '/admin/Java/Java常用Api/单例设计模式.md'
            },
            {
              text: '枚举',
              link: '/admin/Java/Java常用Api/枚举.md'
            },
            {
              text: '关于jar包',
              link: '/admin/Java/Java常用Api/关于jar包.md'
            }
          ]
        },
        {
          text: 'java进阶',
          collapsible: true,
          children: [
            {
              text: '反射',
              collapsible: true,
              children: [
                {
                  text: '反射概述',
                  link: '/admin/Java/Java进阶/反射/反射概述.md'
                },
                {
                  text: '获取Class对象',
                  link: '/admin/Java/Java进阶/反射/获取Class对象.md'
                },
                {
                  text: '获取构造方法',
                  link: '/admin/Java/Java进阶/反射/获取构造方法.md'
                },
                {
                  text: '获取成员变量对象',
                  link: '/admin/Java/Java进阶/反射/获取成员变量对象.md'
                },
                {
                  text: '获取成员方法对象',
                  link: '/admin/Java/Java进阶/反射/获取成员方法对象.md'
                },
                {
                  text: '反射案例1',
                  link: '/admin/Java/Java进阶/反射/反射案例1.md'
                },
                {
                  text: '反射案例2',
                  link: '/admin/Java/Java进阶/反射/反射案例2.md'
                }
              ]
            },
            {
              text: '注解',
              collapsible: true,
              children: [
                {
                  text: '注解概述',
                  link: '/admin/Java/Java进阶/注解/注解概述.md'
                },
                {
                  text: '自定义注解',
                  link: '/admin/Java/Java进阶/注解/自定义注解.md'
                },
                {
                  text: '元注解',
                  link: '/admin/Java/Java进阶/注解/元注解.md'
                },
                {
                  text: '注解的解析',
                  link: '/admin/Java/Java进阶/注解/注解的解析.md'
                }
              ]
            },
            {
              text: 'XML',
              collapsible: true,
              children: [
                {
                  text: 'XML概述',
                  link: '/admin/Java/Java进阶/XML/XML概述.md'
                },
                {
                  text: 'XML约束',
                  link: '/admin/Java/Java进阶/XML/XML约束.md'
                },
                {
                  text: 'XML解析',
                  link: '/admin/Java/Java进阶/XML/XML解析.md'
                },
                {
                  text: 'DOM4J解析',
                  link: '/admin/Java/Java进阶/XML/DOM4J解析.md'
                },
                {
                  text: 'Jsoup解析',
                  link: '/admin/Java/Java进阶/XML/Jsoup解析.md'
                }
              ]
            },
            {
              text: 'Mysql'
            },
            {
              text: 'MyBatis'
            },
            {
              text: 'Tomcat',
              link: '/admin/Java/Java进阶/Tomcat.md'
            },
            {
              text: 'Servlet',
              collapsible: true,
              children: [
                {
                  text: 'Servlet概述',
                  link: '/admin/Java/Java进阶/Servlet/Servlet概述.md'
                },
                {
                  text: '在idea中集成Tomcat',
                  link: '/admin/Java/Java进阶/Servlet/在idea中集成Tomcat.md'
                },
                {
                  text: 'Servlet生命周期',
                  link: '/admin/Java/Java进阶/Servlet/Servlet生命周期.md'
                },
                {
                  text: 'Servlet执行流程',
                  link: '/admin/Java/Java进阶/Servlet/Servlet执行流程.md'
                },
                {
                  text: 'Servlet注解配置',
                  link: '/admin/Java/Java进阶/Servlet/Servlet注解配置.md'
                },
                {
                  text: 'Servlet实现方式',
                  link: '/admin/Java/Java进阶/Servlet/Servlet体系结构.md'
                },
                {
                  text: 'Servlet参数配置',
                  link: '/admin/Java/Java进阶/Servlet/Servlet参数配置.md'
                }
              ]
            },
            {
              text: 'Http',
              collapsible: true,
              children: [
                {
                  text: 'Http概述',
                  link: '/admin/Java/Java进阶/Http/Http概述.md'
                },
                {
                  text: 'Request对象',
                  collapsible: false,
                  children: [
                    {
                      text: 'Request对象概述',
                      link: '/admin/Java/Java进阶/Http/Request对象/Request对象概述.md'
                    },
                    {
                      text: 'Request对象获取请求消息',
                      link: '/admin/Java/Java进阶/Http/Request对象/Request对象获取请求消息.md'
                    },
                    {
                      text: '转发请求参数的方法',
                      link: '/admin/Java/Java进阶/Http/Request对象/转发请求参数的方法.md'
                    },
                    {
                      text: '转发相关方法',
                      link: '/admin/Java/Java进阶/Http/Request对象/转发相关方法.md'
                    },
                    {
                      text: '共享相关方法',
                      link: '/admin/Java/Java进阶/Http/Request对象/共享相关方法.md'
                    }
                  ]
                },
                {
                  text: 'Http路径',
                  link: '/admin/Java/Java进阶/Http/Http路径.md'
                },
                {
                  text: 'Response对象',
                  link: '/admin/Java/Java进阶/Http/Response对象.md'
                },
                {
                  text: '设置Response对象响应体',
                  link: '/admin/Java/Java进阶/Http/设置响应体.md'
                }
              ]
            },
            {
              text: 'ServletContext域对象',
              link: '/admin/Java/Java进阶/Servlet/ServletContext.md'
            },
            {
              text: 'jsp',
              collapsible: true,
              children: [
                {
                  text: 'jsp原理',
                  link: '/admin/Java/Java进阶/jsp/jsp原理.md'
                },
                {
                  text: 'jsp语法',
                  link: '/admin/Java/Java进阶/jsp/jsp语法.md'
                },
                {
                  text: 'jstl',
                  link: '/admin/Java/Java进阶/jsp/jstl.md'
                }
              ]
            },
            {
              text: 'MVC',
              link: '/admin/Java/Java进阶/MVC.md'
            },
            {
              text: 'Cookie',
              link: '/admin/Java/Java进阶/Cookie.md'
            },
            {
              text: 'Session',
              link: '/admin/Java/Java进阶/Session.md'
            },
            {
              text: 'Filter',
              collapsible: true,
              children: [
                {
                  text: 'Filter概述',
                  link: '/admin/Java/Java进阶/Filter/Filter概述.md'
                },
                {
                  text: 'Filter',
                  link: '/admin/Java/Java进阶/Filter/Filter.md'
                }
              ]
            },
            {
              text: 'Listener',
              link: '/admin/Java/Java进阶/Listener.md'
            },
            {
              text: 'json',
              link: '/admin/Java/Java进阶/json.md'
            },
            {
              text: 'Maven',
              collapsible: true,
              children: [
                {
                  text: 'Maven介绍',
                  link: '/admin/Java/Java进阶/Maven/Maven.md'
                },
                {
                  text: '集成Maven',
                  link: '/admin/Java/Java进阶/Maven/集成Maven.md'
                },
                {
                  text: 'Maven的依赖范围与依赖传递',
                  link: '/admin/Java/Java进阶/Maven/Maven的依赖范围与依赖传递.md'
                },
                {
                  text: '依赖继承与聚合',
                  link: '/admin/Java/Java进阶/Maven/依赖继承与聚合.md'
                }
              ]
            }
          ]
        },
        {
          text: 'MySql',
          collapsible: true,
          children: [
            {
              text: '数据库常识',
              link: '/admin/Java/MySql/数据库常识.md'
            },
            {
              text: '库操作',
              link: '/admin/Java/MySql/库操作.md'
            },
            {
              text: '表操作',
              link: '/admin/Java/MySql/表操作.md'
            },
            {
              text: '增删改',
              link: '/admin/Java/MySql/增删改.md'
            },
            {
              text: '单表查询',
              collapsible: false,
              children: [
                {
                  text: '条件查询基础',
                  link: '/admin/Java/MySql/单表查询/条件查询基础.md'
                },
                {
                  text: '聚合函数',
                  link: '/admin/Java/MySql/单表查询/聚合函数.md'
                },
                {
                  text: '排序',
                  link: '/admin/Java/MySql/单表查询/排序.md'
                },
                {
                  text: '分组',
                  link: '/admin/Java/MySql/单表查询/分组.md'
                },
                {
                  text: '分页',
                  link: '/admin/Java/MySql/单表查询/分页.md'
                },
                {
                  text: '约束',
                  link: '/admin/Java/MySql/单表查询/约束.md'
                }
              ]
            },
            {
              text: '多表查询',
              collapsible: false,
              children: [
                {
                  text: '多表关系',
                  link: '/admin/Java/MySql/多表查询/多表关系.md'
                },
                {
                  text: '笛卡尔积查询',
                  link: '/admin/Java/MySql/多表查询/笛卡尔积查询.md'
                },
                {
                  text: '内连接查询',
                  link: '/admin/Java/MySql/多表查询/内连接查询.md'
                },
                {
                  text: '外连接查询',
                  link: '/admin/Java/MySql/多表查询/外连接查询.md'
                },
                {
                  text: '自连接查询',
                  link: '/admin/Java/MySql/多表查询/自连接查询.md'
                },
                {
                  text: '子查询',
                  link: '/admin/Java/MySql/多表查询/子查询.md'
                }
              ]
            },
            {
              text: '事务',
              collapsible: false,
              children: [
                {
                  text: '事务处理',
                  link: '/admin/Java/MySql/事务/事务处理.md'
                },
                {
                  text: '隔离级别',
                  link: '/admin/Java/MySql/事务/隔离级别.md'
                }
              ]
            },
            {
              text: 'JDBC',
              link: '/admin/Java/MySql/JDBC.md'
            },
            {
              text: '预处理语句',
              link: '/admin/Java/MySql/预处理语句.md'
            },
            {
              text: 'JDBC工具类封装',
              link: '/admin/Java/MySql/JDBC工具类封装.md'
            },
            {
              text: 'JDBC中事务处理',
              link: '/admin/Java/MySql/JDBC中事务处理.md'
            },
            {
              text: '视图',
              link: '/admin/Java/MySql/视图.md'
            },
            {
              text: '索引',
              link: '/admin/Java/MySql/索引.md'
            },
            // {
            //   text: "存储过程",
            //   link: "/admin/Java/MySql/存储过程.md",
            // },
            {
              text: '数据库连接池',
              collapsible: true,
              children: [
                {
                  text: '数据库连接池概述',
                  link: '/admin/Java/MySql/数据库连接池/数据库连接池概述.md'
                },
                {
                  text: '自定义数据库连接池',
                  link: '/admin/Java/MySql/数据库连接池/自定义数据库连接池.md'
                },
                {
                  text: 'C3P0',
                  link: '/admin/Java/MySql/数据库连接池/C3P0.md'
                },
                {
                  text: 'Druid',
                  link: '/admin/Java/MySql/数据库连接池/Druid.md'
                }
              ]
            },
            {
              text: 'JdbcTemplate',
              collapsible: true,
              children: [
                {
                  text: 'ORM',
                  link: '/admin/Java/MySql/JdbcTemplate/ORM.md'
                },
                {
                  text: 'JdbcTemplate基本使用',
                  link: '/admin/Java/MySql/JdbcTemplate/JdbcTemplate基本使用.md'
                },
                {
                  text: 'JUnit单元测试',
                  link: '/admin/Java/MySql/JdbcTemplate/JUnit.md'
                },
                {
                  text: 'JdbcTemplate实际使用',
                  link: '/admin/Java/MySql/JdbcTemplate/JdbcTemplate实际使用.md'
                }
              ]
            }
          ]
        },
        {
          text: 'MyBatis',
          collapsible: true,
          children: [
            {
              text: 'MyBatis入门',
              link: '/admin/Java/MyBatis/MyBatis入门.md'
            },
            {
              text: '单表操作',
              collapsible: true,
              children: [
                {
                  text: '查询',
                  link: '/admin/Java/MyBatis/单表操作/查询.md'
                },
                {
                  text: '增加',
                  link: '/admin/Java/MyBatis/单表操作/增加.md'
                },
                {
                  text: '删除',
                  link: '/admin/Java/MyBatis/单表操作/删除.md'
                },
                {
                  text: '修改',
                  link: '/admin/Java/MyBatis/单表操作/修改.md'
                }
              ]
            },
            {
              text: 'MyBatis的CRUD',
              link: '/admin/Java/MyBatis/MyBatis的CRUD.md'
            },
            {
              text: '日志',
              link: '/admin/Java/MyBatis/日志.md'
            },
            {
              text: 'SqlMapConfig配置文件',
              link: '/admin/Java/MyBatis/SqlMapConfig.md'
            },
            {
              text: '映射文件配置',
              link: '/admin/Java/MyBatis/映射文件配置.md'
            },
            {
              text: '多表查询',
              collapsible: true,
              children: [
                {
                  text: 'MyBatis中一对一查询',
                  link: '/admin/Java/MyBatis/多表查询/MyBatis中一对一查询.md'
                },
                {
                  text: 'MyBatis中一对多查询',
                  link: '/admin/Java/MyBatis/多表查询/MyBatis中一对多查询.md'
                },
                {
                  text: 'MyBatis中多表查询',
                  link: '/admin/Java/MyBatis/多表查询/MyBatis中多表查询.md'
                }
              ]
            },
            {
              text: 'MyBatis延迟加载',
              link: '/admin/Java/MyBatis/MyBatis延迟加载.md'
            },
            {
              text: 'MyBatis缓存',
              link: '/admin/Java/MyBatis/MyBatis缓存.md'
            }
          ]
        },
        {
          text: 'Spring5',
          collapsible: true,
          children: [
            {
              text: 'Spring介绍',
              link: '/admin/Java/Spring/Spring介绍.md'
            },
            {
              text: 'Spring环境搭建',
              link: '/admin/Java/Spring/Spring环境搭建.md'
            },
            {
              text: 'IoC',
              collapsible: true,
              children: [
                {
                  text: 'IoC-反转',
                  link: '/admin/Java/Spring/IoC/IoC-反转.md'
                },
                {
                  text: 'IoC-控制',
                  link: '/admin/Java/Spring/IoC/IoC-控制.md'
                },
                {
                  text: 'IoC控制反转-基础案例',
                  link: '/admin/Java/Spring/IoC/IoC控制反转-基础案例.md'
                },
                {
                  text: 'IoC创建对象的方式',
                  collapsible: false,
                  children: [
                    {
                      text: '无参构造',
                      link: '/admin/Java/Spring/IoC/IoC创建对象的方式/无参构造.md'
                    },
                    {
                      text: '有参构造',
                      link: '/admin/Java/Spring/IoC/IoC创建对象的方式/有参构造.md'
                    }
                  ]
                }
              ]
            },
            {
              text: 'import导入bean',
              link: '/admin/Java/Spring/import导入bean.md'
            },
            {
              text: '依赖注入',
              collapsible: false,
              children: [
                {
                  text: '构造器注入',
                  link: '/admin/Java/Spring/依赖注入/构造器注入.md'
                },
                {
                  text: 'set方法注入',
                  link: '/admin/Java/Spring/依赖注入/set方法注入.md'
                },
                {
                  text: 'p命名空间注入',
                  link: '/admin/Java/Spring/依赖注入/p命名空间注入.md'
                }
              ]
            },
            {
              text: 'bean作用域范围scope',
              link: '/admin/Java/Spring/作用域范围scope.md'
            },
            {
              text: 'bean自动装配',
              link: '/admin/Java/Spring/自动装配.md'
            },
            {
              text: 'bean注解自动装配',
              link: '/admin/Java/Spring/注解自动装配.md'
            },
            {
              text: 'bean注解自动扫描装配',
              link: '/admin/Java/Spring/注解自动扫描装配.md'
            },
            {
              text: 'javaConfig配置',
              link: '/admin/Java/Spring/javaConfig配置.md'
            },
            {
              text: '通过案例理解静态代理',
              link: '/admin/Java/Spring/通过案例理解静态代理.md'
            },
            {
              text: '动态代理',
              link: '/admin/Java/Spring/动态代理.md'
            },
            {
              text: 'Aop',
              collapsible: false,
              children: [
                {
                  text: 'Aop概述',
                  link: '/admin/Java/Spring/Aop/Aop概述.md'
                },
                {
                  text: 'Spring Api 接口实现Aop',
                  link: '/admin/Java/Spring/Aop/SpringApi接口实现Aop.md'
                },
                {
                  text: '自定义类实现 Aop',
                  link: '/admin/Java/Spring/Aop/自定义类实现Aop.md'
                },
                {
                  text: '注解实现 Aop',
                  link: '/admin/Java/Spring/Aop/注解实现Aop.md'
                }
              ]
            },
            {
              text: 'MyBatis回顾',
              link: '/admin/Java/Spring/MyBatis回顾.md'
            },
            {
              text: 'Spring整合MyBatis',
              link: '/admin/Java/Spring/Spring整合MyBatis.md'
            },
            {
              text: 'Spring事务管理',
              link: '/admin/Java/Spring/Spring事务管理.md'
            }
          ]
        },
        {
          text: 'SpringMvc',
          collapsible: true,
          children: [
            {
              text: '回顾Servlet',
              link: '/admin/Java/SpringMvc/回顾Servlet.md'
            },
            {
              text: 'SpringMvc介绍',
              link: '/admin/Java/SpringMvc/SpringMvc介绍.md'
            },
            {
              text: 'SpringMvc原理',
              link: '/admin/Java/SpringMvc/SpringMvc应用.md'
            },
            {
              text: 'SpringMvc注解开发',
              link: '/admin/Java/SpringMvc/SpringMvc注解开发.md'
            },
            {
              text: 'Controller注解配置',
              link: '/admin/Java/SpringMvc/Controller注解配置.md'
            },
            {
              text: 'SpringMvc转发和重定向',
              link: '/admin/Java/SpringMvc/SpringMvc转发和重定向.md'
            },
            {
              text: 'GetMapping参数和数据响应',
              link: '/admin/Java/SpringMvc/GetMapping参数和数据响应.md'
            },
            {
              text: '中文乱码的问题',
              link: '/admin/Java/SpringMvc/中文乱码的问题.md'
            },
            {
              text: 'Json处理',
              collapsible: true,
              children: [
                {
                  text: 'jackson-databind',
                  link: '/admin/Java/SpringMvc/Json/jackson-databind.md'
                },
                {
                  text: 'fastjson',
                  link: '/admin/Java/SpringMvc/Json/fastjson.md'
                }
              ]
            },
            {
              text: 'ssm整合',
              link: '/admin/Java/SpringMvc/ssm整合.md'
            },
            {
              text: 'mvc拦截器',
              link: '/admin/Java/SpringMvc/mvc拦截器.md'
            },
            {
              text: '文件上传下载',
              link: '/admin/Java/SpringMvc/文件上传下载.md'
            }
          ]
        },
        {
          text: 'SpringBoot-2.2.0.RELEASE',
          collapsible: true,
          children: [
            {
              text: '项目快速创建',
              link: '/admin/Java/SpringBoot/快速创建.md'
            },
            {
              text: '初识SpringBoot',
              link: '/admin/Java/SpringBoot/初识SpringBoot.md'
            },
            {
              text: '自动装配',
              collapsible: true,
              children: [
                {
                  text: '自动装配原理',
                  link: '/admin/Java/SpringBoot/自动装配/自动装配原理.md'
                }
              ]
            },
            {
              text: 'yaml',
              collapsible: true,
              children: [
                {
                  text: 'yaml介绍',
                  link: '/admin/Java/SpringBoot/yaml/yaml.md'
                },
                {
                  text: '给属性赋值',
                  link: '/admin/Java/SpringBoot/yaml/给属性赋值.md'
                },
                {
                  text: 'jsr303数据校验',
                  link: '/admin/Java/SpringBoot/yaml/jsr303数据校验.md'
                },
                {
                  text: '多环境配置',
                  link: '/admin/Java/SpringBoot/yaml/多环境配置.md'
                },
                {
                  text: '自动装配配置文件',
                  link: '/admin/Java/SpringBoot/yaml/自动装配配置文件.md'
                }
              ]
            },
            {
              text: 'web集成',
              collapsible: true,
              children: [
                {
                  text: '静态资源',
                  link: '/admin/Java/SpringBoot/web集成/静态资源.md'
                },
                {
                  text: '首页',
                  link: '/admin/Java/SpringBoot/web集成/首页.md'
                },
                {
                  text: 'thymeleaf',
                  collapsible: false,
                  children: [
                    {
                      text: 'thymeleaf模板',
                      link: '/admin/Java/SpringBoot/web集成/thymeleaf/thymeleaf.md'
                    },
                    {
                      text: 'thymeleaf语法',
                      link: '/admin/Java/SpringBoot/web集成/thymeleaf/thymeleaf语法.md'
                    }
                  ]
                },
                {
                  text: 'SpringMvc扩展',
                  link: '/admin/Java/SpringBoot/web集成/SpringMvc扩展.md'
                }
              ]
            },
            {
              text: '数据库集成',
              collapsible: true,
              children: [
                {
                  text: 'jdbcTemplate',
                  link: '/admin/Java/SpringBoot/数据库集成/jdbcTemplate.md'
                },
                {
                  text: 'Mybatis',
                  link: '/admin/Java/SpringBoot/数据库集成/Mybatis.md'
                },
                {
                  text: 'Mybatis-Plus',
                  link: '/admin/Java/SpringBoot/数据库集成/Mybatis-Plus.md'
                },
                {
                  text: 'Druid',
                  link: '/admin/Java/SpringBoot/数据库集成/Druid.md'
                }
              ]
            },
            {
              text: '安全',
              collapsible: false,
              children: [
                {
                  text: 'SpringSecurity',
                  link: '/admin/Java/SpringBoot/安全/SpringSecurity.md'
                },
                {
                  text: 'Shiro',
                  link: '/admin/Java/SpringBoot/安全/Shiro.md'
                }
              ]
            },
            {
              text: 'swagger',
              link: '/admin/Java/SpringBoot/swagger.md'
            },
            {
              text: '任务',
              collapsible: true,
              children: [
                {
                  text: '异步任务(多线程)',
                  link: '/admin/Java/SpringBoot/任务/异步任务.md'
                },
                {
                  text: '邮件任务',
                  link: '/admin/Java/SpringBoot/任务/邮件任务.md'
                },
                {
                  text: '定时任务',
                  link: '/admin/Java/SpringBoot/任务/定时任务.md'
                }
              ]
            },
            {
              text: 'Jsoup爬虫',
              link: '/admin/Java/SpringBoot/Jsoup.md'
            },
            {
              text: '分布式(Dubbo+Zookeeper)',
              collapsible: true,
              children: [
                {
                  text: '分布式',
                  link: '/admin/Java/SpringBoot/分布式/分布式.md'
                },
                {
                  text: 'Dubbo+Zookeeper案例',
                  link: '/admin/Java/SpringBoot/分布式/案例.md'
                }
              ]
            }
          ]
        },
        {
          text: 'Redis',
          collapsible: true,
          children: [
            {
              text: 'Redis',
              link: '/admin/Java/Redis/Redis.md'
            },
            {
              text: 'RedisTemplate',
              link: '/admin/Java/Redis/RedisTemplate.md'
            }
          ]
        },
        {
          text: 'MyBatisPlus',
          collapsible: true,
          children: [
            {
              text: 'MyBatis-Plus',
              link: '/admin/Java/MyBatisPlus/MyBatis-Plus.md'
            }
          ]
        },
        {
          text: 'SpringCloud',
          collapsible: true,
          children: [
            {
              text: '微服务介绍',
              link: '/admin/Java/SpringCloud/微服务介绍.md'
            },
            {
              text: 'SpringCloud基础项目',
              collapsible: true,
              children: [
                {
                  text: '父项目依赖',
                  link: '/admin/Java/SpringCloud/SpringCloud基础项目/父项目依赖.md'
                },
                {
                  text: 'api服务',
                  link: '/admin/Java/SpringCloud/SpringCloud基础项目/api服务.md'
                },
                {
                  text: '生产者服务',
                  link: '/admin/Java/SpringCloud/SpringCloud基础项目/生产者服务.md'
                },
                {
                  text: '消费者服务',
                  link: '/admin/Java/SpringCloud/SpringCloud基础项目/消费者服务.md'
                },
                {
                  text: 'Dubbo和Cloud代码对比',
                  link: '/admin/Java/SpringCloud/SpringCloud基础项目/Dubbo和Cloud代码对比.md'
                }
              ]
            },
            {
              text: 'Eureka注册中心',
              collapsible: true,
              link: '/admin/Java/SpringCloud/Eureka.md'
            },
            {
              text: '将服务注册到注册中心',
              collapsible: true,
              link: '/admin/Java/SpringCloud/将服务注册到注册中心.md'
            },
            {
              text: 'Eureka自我保护机制',
              collapsible: true,
              link: '/admin/Java/SpringCloud/Eureka自我保护机制.md'
            },
            {
              text: '获取注册中心中服务信息',
              collapsible: true,
              link: '/admin/Java/SpringCloud/获取注册中心中服务信息.md'
            },
            {
              text: '服务集群',
              collapsible: true,
              link: '/admin/Java/SpringCloud/服务集群.md'
            },
            {
              text: 'CAP原则',
              collapsible: true,
              link: '/admin/Java/SpringCloud/CAP原则.md'
            },
            {
              text: 'Ribbon负载均衡',
              collapsible: true,
              link: '/admin/Java/SpringCloud/Ribbon负载均衡.md'
            },
            {
              text: '负载均衡实现',
              collapsible: true,
              link: '/admin/Java/SpringCloud/负载均衡实现.md'
            },
            {
              text: '自定义负载均衡算法',
              collapsible: true,
              link: '/admin/Java/SpringCloud/自定义负载均衡算法.md'
            },
            {
              text: 'Feign注解实现负载均衡',
              link: '/admin/Java/SpringCloud/Feign.md'
            },
            {
              text: 'HyStrix服务端服务熔断',
              link: '/admin/Java/SpringCloud/HyStrix服务熔断.md'
            },
            {
              text: 'HyStrix客户端服务降级',
              link: '/admin/Java/SpringCloud/HyStrix服务降级.md'
            },
            {
              text: '服务熔断和服务降级',
              link: '/admin/Java/SpringCloud/服务熔断和服务降级.md'
            },
            {
              text: 'Dashboard流监控',
              link: '/admin/Java/SpringCloud/Dashboard流监控.md'
            },
            {
              text: 'Zuul路由网关',
              link: '/admin/Java/SpringCloud/Zuul路由网关.md'
            },
            {
              text: 'Zuul访问路径详解',
              link: '/admin/Java/SpringCloud/Zuul访问路径详解.md'
            },
            {
              text: 'SpringCloudConfig-服务端配置',
              link: '/admin/Java/SpringCloud/服务端连接git配置.md'
            },
            {
              text: 'SpringCloudConfig-客户端配置',
              link: '/admin/Java/SpringCloud/客户端连接服务端访问远程.md'
            },
            {
              text: 'SpringCloudConfig远程配置测试',
              link: '/admin/Java/SpringCloud/远程配置测试.md'
            }
          ]
        },
        {
          text: 'Linux'
        },
        {
          text: 'AlibabaCloud',
          collapsible: true,
          children: []
        }
      ],
      '/web/Ts/': [
        {
          text: 'TypeScript',
          collapsible: false,
          children: [
            {
              text: '常用类型',
              collapsible: true,
              children: [
                {
                  text: '类型声明',
                  link: '/web/Ts/常用类型/声明类型.md'
                },
                {
                  text: '字面量',
                  link: '/web/Ts/常用类型/字面量.md'
                },
                {
                  text: 'any',
                  link: '/web/Ts/常用类型/any.md'
                },
                {
                  text: 'array',
                  link: '/web/Ts/常用类型/array.md'
                },
                {
                  text: 'tuple',
                  link: '/web/Ts/常用类型/tuple.md'
                },
                {
                  text: '函数',
                  link: '/web/Ts/常用类型/函数.md'
                },
                {
                  text: '对象',
                  link: '/web/Ts/常用类型/对象.md'
                },
                {
                  text: '类型别名(type)',
                  link: '/web/Ts/常用类型/type(类型别名).md'
                },
                {
                  text: '联合类型(|)',
                  link: '/web/Ts/常用类型/联合类型.md'
                },
                {
                  text: '交叉类型',
                  link: '/web/Ts/常用类型/交叉类型.md'
                },
                {
                  text: '类型断言',
                  link: '/web/Ts/常用类型/类型断言.md'
                },
                {
                  text: '类型守卫',
                  link: '/web/Ts/常用类型/类型守卫.md'
                },
                {
                  text: 'enum',
                  link: '/web/Ts/常用类型/enum.md'
                },
                {
                  text: 'interface(接口)',
                  link: '/web/Ts/常用类型/interface接口.md'
                },
                {
                  text: 'interface和type区别',
                  link: '/web/Ts/常用类型/interface和type区别.md'
                },
                {
                  text: 'BigInt',
                  link: '/web/Ts/常用类型/BigInt.md'
                }
              ]
            },
            {
              text: '类型缩小',
              link: '/web/Ts/类型缩小/类型缩小.md'
            },
            {
              text: '关于函数',
              collapsible: true,
              children: [
                {
                  text: '函数类型表达式',
                  link: '/web/Ts/关于函数/函数类型表达式.md'
                },
                {
                  text: '调用签名',
                  link: '/web/Ts/关于函数/调用签名.md'
                },
                {
                  text: '构造签名',
                  link: '/web/Ts/关于函数/构造签名.md'
                },
                {
                  text: '泛型函数',
                  collapsible: false,
                  children: [
                    {
                      text: '推断',
                      link: '/web/Ts/关于函数/泛型函数/推断.md'
                    },
                    {
                      text: '约束条件',
                      link: '/web/Ts/关于函数/泛型函数/约束条件.md'
                    },
                    {
                      text: '指定类型参数',
                      link: '/web/Ts/关于函数/泛型函数/指定类型参数.md'
                    }
                  ]
                },
                {
                  text: '可选参数',
                  link: '/web/Ts/关于函数/可选参数.md'
                },
                {
                  text: '函数重载',
                  link: '/web/Ts/关于函数/函数重载.md'
                },
                {
                  text: '在函数中声明this',
                  link: '/web/Ts/关于函数/在函数中声明this.md'
                },
                {
                  text: 'void',
                  link: '/web/Ts/关于函数/void.md'
                },
                {
                  text: 'unknown',
                  link: '/web/Ts/关于函数/unknown.md'
                },
                {
                  text: 'never',
                  link: '/web/Ts/关于函数/never.md'
                },
                {
                  text: 'Function',
                  link: '/web/Ts/关于函数/Function.md'
                },
                {
                  text: '剩余形参和实参',
                  link: '/web/Ts/关于函数/剩余形参.md'
                },
                {
                  text: '参数解构',
                  link: '/web/Ts/关于函数/参数解构.md'
                }
              ]
            },
            {
              text: '对象类型',
              collapsible: true,
              children: [
                {
                  text: '属性修饰符',
                  link: '/web/Ts/对象类型/属性修饰符.md'
                },
                {
                  text: '溢出属性检查',
                  link: '/web/Ts/对象类型/溢出属性检查.md'
                },
                {
                  text: '扩展类型',
                  link: '/web/Ts/对象类型/扩展类型.md'
                },
                {
                  text: '交叉类型',
                  link: '/web/Ts/对象类型/交叉类型.md'
                },
                {
                  text: '泛型对象类型',
                  collapsible: true,
                  children: [
                    {
                      text: '泛型对象类型',
                      link: '/web/Ts/对象类型/泛型对象类型/泛型对象类型.md'
                    },
                    {
                      text: 'Array类型',
                      link: '/web/Ts/对象类型/泛型对象类型/Array类型.md'
                    },
                    {
                      text: 'ReadonlyArray类型',
                      link: '/web/Ts/对象类型/泛型对象类型/ReadonlyArray类型.md'
                    },
                    {
                      text: '元组类型',
                      link: '/web/Ts/对象类型/泛型对象类型/元组类型.md'
                    },
                    {
                      text: 'readonly元组类型',
                      link: '/web/Ts/对象类型/泛型对象类型/readonly元组类型.md'
                    }
                  ]
                }
              ]
            },
            {
              text: '类型操作',
              collapsible: true,
              children: [
                {
                  text: '泛型',
                  link: '/web/Ts/类型操作/泛型.md'
                },
                {
                  text: 'keyof类型运算符',
                  link: '/web/Ts/类型操作/keyof类型运算符.md'
                },
                {
                  text: 'typeof类型运算符',
                  link: '/web/Ts/类型操作/typeof类型运算符.md'
                },
                {
                  text: '索引访问类型',
                  link: '/web/Ts/类型操作/索引访问类型.md'
                },
                {
                  text: '条件类型',
                  link: '/web/Ts/类型操作/条件类型.md'
                },
                {
                  text: '映射类型',
                  link: '/web/Ts/类型操作/映射类型.md'
                },
                {
                  text: '模板字面类型',
                  link: '/web/Ts/类型操作/模板字面类型.md'
                }
              ]
            },
            {
              text: '类',
              collapsible: true,
              children: [
                {
                  text: 'calss类',
                  link: '/web/Ts/类/calss类.md'
                },
                {
                  text: '构造函数和this',
                  link: '/web/Ts/类/构造函数和this.md'
                },
                {
                  text: 'extends继承',
                  link: '/web/Ts/类/extends继承.md'
                },
                {
                  text: 'super关键字',
                  link: '/web/Ts/类/super关键字.md'
                },
                {
                  text: 'abstract抽象类',
                  link: '/web/Ts/类/abstract抽象类.md'
                }
              ]
            },
            {
              text: '模块',
              collapsible: true,
              children: [
                {
                  text: 'ts编译选项',
                  link: '/web/Ts/模块/ts编译选项.md'
                }
              ]
            }
          ]
        }
      ]
    }
  }),
  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || ''
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false
          })
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false
          })
        }
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
              return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            );
          }
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false
          })
        }
      ],
      hotReload: true
    }),
    // 启用流程图
    mdEnhancePlugin({
      mermaid: true
    }),
    // 本地标题搜索
    searchPlugin({
      locales: {
        '/': {
          placeholder: '标题搜索'
        }
      }
    }),
    // 本地全文搜索
    fullTextSearchPlugin({
      locales: {
        '/': {
          placeholder: '全文搜索'
        }
      }
    }),
    // 复制粘贴
    copyCodePlugin({}),
    // 滚动页面更新路由
    activeHeaderLinksPlugin({})
  ],
  bundler: viteBundler()
});
