title: graphql
subtitle: 一种用于 API 的查询语言
speaker: zhuchongyue@baidu.com
url: https://github.com/ksky521/nodeppt
transition: cards

[slide]

# GraphQL

## 一种用于 API 的查询语言
## 演讲者：zhuchongyue@baidu.com

[slide]
# 引子 {:&.flexbox.vleft}
* 你难道没有遇到过？
	* 到了联调阶段发现RD返回的数据结构跟预定完全不一样？ {:&.moveIn}
	* 前端组件化后，数据结构固定，接口数据对不上？
	* 同一套API兼容多端带回冗余数据？
	* 接口扁平化支持不好？
	* 接口升级
 		* https://xxx.com/path/v1/someapi.json
		* https://xxx.com/path/v2/someapi.json
	* ...

[slide]
# What's GraphQL?
## 定义
* GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

[slide]
# What's GraphQL?
### 一图胜千言
![graphql](/img/graphql1.png)


[slide]
# What's GraphQL?


 <style type="text/css">
	.faux-graphiql::before {
		background: linear-gradient(#f0f0f0, #dedede);
	    border-radius: 6px 6px 0 0;
	    box-shadow: inset 0 2px 2px -2px white, 0 1px rgba(0, 0, 0, 0.4);
	    content: ' ';
	    display: block;
	    height: 25px;
	    position: absolute;
	    top: 0;
	    width: 100%;
	}

 	.faux-graphiql {

      margin: 0 auto;
	    background: white;
	    border-radius: 6px 6px 0 0;
	    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.12);
	    overflow: hidden;
	    padding-top: 26px;
	    position: relative;

 	  width: 440px;
 	  height: 330px;
 	  display: flex;
 	  flex-direction: column;
 	  pointer-events: none;
 	}
 	 .faux-graphiql .query,
 	 .faux-graphiql .response {
 	  flex: 1;
 	}
 	 .faux-graphiql .query {
 	  border-bottom: solid 5px #e0e0e0;
 	}
 	 .faux-graphiql .cursor {
 	  width: 7px;
 	  height: 15px;
 	  background-color: #d0d0d0;
 	  display: inline-block;
 	  margin: -1px 1px -3px;
 	  animation: cursor-blink 0.5s infinite linear both alternate;
 	}
 	@keyframes cursor-blink {
 	  0%,
 	  30% {
 	    opacity: 0;
 	  }
 	  70%,
 	  100% {
 	    opacity: 1;
 	  }
 	}
 	 .faux-graphiql .ch {
 	  display: none;
 	}

 	.prism {
 		padding: 1ch;
 	    font-family: 'Roboto Mono', Menlo, Monaco, monospace;
 	    font-weight: 400;
 	    color: #202020;
 	    font-size: 13px;
 	    line-height: 17px;
 	    direction: ltr;
 	    text-align: left;
 	    white-space: pre;
 	    word-spacing: normal;
 	    word-break: normal;
 	    -moz-tab-size: 2;
 	    -o-tab-size: 2;
 	    tab-size: 2;
 	    -webkit-hyphens: none;
 	    -moz-hyphens: none;
 	    -ms-hyphens: none;
 	    hyphens: none;
 	    position: relative;
 	}
 </style>

 <div class="faux-graphiql">
    <div class="query">
     <pre class="prism">{
  hero {
    name<span id="ch0" class="ch"><br /></span><span id="ch1" class="ch"> </span><span id="ch2" class="ch"> </span><span id="ch3" class="ch"> </span><span id="ch4" class="ch"> </span><span id="ch5" class="ch">h</span><span id="ch6" class="ch">e</span><span id="ch7" class="ch">i</span><span id="ch8" class="ch">g</span><span id="ch9" class="ch">h</span><span id="ch10" class="ch">t</span><span id="ch11" class="ch"><br /></span><span id="ch12" class="ch"> </span><span id="ch13" class="ch"> </span><span id="ch14" class="ch"> </span><span id="ch15" class="ch"> </span><span id="ch16" class="ch">m</span><span id="ch17" class="ch">a</span><span id="ch18" class="ch">s</span><span id="ch19" class="ch">s</span><span class="cursor"></span>
  }
}</pre>
    </div>
    <div class="response">
     <div id="r1">
      <pre class="prism language-json"><span class="punctuation">{</span>
  <span class="attr-name">&quot;hero&quot;</span><span class="punctuation">:</span> <span class="punctuation">{</span>
    <span class="attr-name">&quot;name&quot;</span><span class="punctuation">:</span> <span class="string">&quot;Luke Skywalker&quot;</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span></pre>
     </div>
     <div id="r2">
      <pre class="prism language-json"><span class="punctuation">{</span>
  <span class="attr-name">&quot;hero&quot;</span><span class="punctuation">:</span> <span class="punctuation">{</span>
    <span class="attr-name">&quot;name&quot;</span><span class="punctuation">:</span> <span class="string">&quot;Luke Skywalker&quot;</span><span class="punctuation">,</span>
    <span class="attr-name">&quot;height&quot;</span><span class="punctuation">:</span> <span class="number">1.72</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span></pre>
     </div>
     <div id="r3">
      <pre class="prism language-json"><span class="punctuation">{</span>
  <span class="attr-name">&quot;hero&quot;</span><span class="punctuation">:</span> <span class="punctuation">{</span>
    <span class="attr-name">&quot;name&quot;</span><span class="punctuation">:</span> <span class="string">&quot;Luke Skywalker&quot;</span><span class="punctuation">,</span>
    <span class="attr-name">&quot;height&quot;</span><span class="punctuation">:</span> <span class="number">1.72</span><span class="punctuation">,</span>
    <span class="attr-name">&quot;mass&quot;</span><span class="punctuation">:</span> <span class="number">77</span>
  <span class="punctuation">}</span>
<span class="punctuation">}</span></pre>
     </div>
    </div>
</div>
<script type="text/javascript">
    (function(){
          var i = 0;
          var forward = true;
          setTimeout(type, 2000);
          showResponse(1);
          function type() {
            if (forward) {
              document.getElementById('ch' + i).style.display = 'inline';
              i++;
              if (i === 20) {
                forward = false;
                showResponse(3);
                setTimeout(type, 1500);
              } else if (i === 11) {
                showResponse(2);
                setTimeout(type, 1500);
              } else {
                setTimeout(type, Math.random() * 180 + 70);
              }
            } else {
              i--;
              document.getElementById('ch' + i).style.display = 'none';
              if (i === 0) {
                forward = true;
                showResponse(1);
                setTimeout(type, 2000);
              } else {
                setTimeout(type, 80);
              }
            }
          }
          function showResponse(num) {
            document.getElementById('r1').style.display = num === 1 ? 'block' : 'none';
            document.getElementById('r2').style.display = num === 2 ? 'block' : 'none';
            document.getElementById('r3').style.display = num === 3 ? 'block' : 'none';
          }
        })()
</script>

[slide]
#what's GraphQL?

### 最大的特点：按需索取数据，组织数据能力前置
![graphql](/img/cs.jpeg)

[slide]
#what's GraphQL?
## Demo: http://localhost:5000/graphql

[slide]
#what's GraphQL?
## 基本概念(Client)
* Fields
* Arguments
* Aliases
* Fragments
* Operation Name
* Variables
* Directives
* Mutations

[slide]
#what's GraphQL?
## 基本概念(Server)
* Type System
* Type Language
* Object Types and Fields
* ...


[slide]
# Why GraphQL?


[slide]
# How to use GraphQL?


# 封面样式2 {:&.flexbox.vleft}
## 左对齐

[slide style="background-image:url('/img/graphql1.png')"]

## 使用背景

[slide]
## 使用.class/#id/自定义属性样式
----

```javascript
alert('nodeppt');
```

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.5

Github：https://github.com/ksky521/nodeppt
