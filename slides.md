---
theme: dracula
favicon: 'https://draculatheme.com/static/img/favicon.ico'
title: Vue快速入手
transition: view-transition
mdc: true
---
# Vue快速入门

研发部第三次例会

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# 前置课程

只学习基础不用深入了解，需要时查阅即可，进阶必须熟练掌握。

- HTML
- CSS
- JavaScript--BOM
- JavaScript--DOM

<br>
<br>

---

# 创建Vue实例，初始化渲染

#### 核心四步

1. 创建容器

2. 引包（官网：<https://v2.cn.vuejs.org/> 开发版本）

3. 创建实例

4. 指定配置项 el data => 渲染数据

```ts {all|1,4|all}
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>

    <script>
        const app = new Vue(
            {
                el: '#app',
                data: {
                    msg: 'Hello World'
                }
            }
        )
    </script>
```

---
# 装插件调试Vue应用

1. 谷歌应用商店
2. 极简插件

<br>
<br>

---

# 插值表达式

```ts {1,2,3,4,5,6,7}
<h3>{{ title }}</h3>

<p>{{ nickname.toUpperCase() }}</p>

<p>{{ age>=18 ? '成年' : '未成年' }}</p>

<p>{{ obj.name }}</p>
```

---


# Vue指令

#### v-html

- 作用：设置元素的innerHTML
- v-html="表达式"

```ts {4-8|1|all}
<div v-html="msg"></div>

    data: {
                    msg: `
                    <a href="http://www.baidu.com">
                        hello baidu
                    </a>
                    `
                }
```

---

# Vue指令

#### v-show v-if

- 作用：控制元素的显示隐藏
- v-show="表达式" 表达式值true显示,false隐藏
- v-if="表达式" 表达式值true显示,false隐藏
- v-show适合频繁切换显示隐藏的场景
- v-if适合不频繁切换的场景

```ts {1-2|all}
<div v-show="flag" class="box">v-show</div>
<div v-if="flag" class="box">v-if</div>

   data: {
                    flag: false
                }
```

---

# Vue指令

#### v-else v-else-if

- 作用：辅助v-if进行判断渲染
- v-else v-else-if="表达式"
- 需要紧挨着v-if进行使用
```ts {all}
    <div id="app">
        <p v-if="gender === 1">性别：男</p>
        <p v-else>性别：女</p>
        <hr>
        <p v-if="score >= 90">成绩评定A</p>
        <p v-else-if="score >= 70">成绩评定B</p>
        <p v-else-if="score >= 60">成绩评定C</p>
        <p v-else>成绩评定D</p>
    </div>
    data: {
                    gender: 2,
                    score: 80
                }

```

---

# Vue指令

#### v-on

- 作用：注册事件=添加监听+提供处理逻辑
- v-on:事件名 = “内联语句”
- v-on:事件名 = "methods中的函数名"

```ts {1|2|3|4|all}
<button v-on:click="count++">+</button>
<button @click="count--">-</button>
<button @click='fn'>-</button>
<button @click='fn(参数1，参数2)'>-</button>
```

---
layout: center
class: "text-center"
---
# 作业：

用Vue渲染一个案例

ddl：4.15



