## DOM

## DOM属性

### **节点**

> 元素节点、文本节点、属性节点、注释节点

`childNodes`，`parentNode`，`firstChild`，`lastChild`，`previousSibling`，`nextSibling`。

### **元素节点**

> HTML 中的标签

`children`，`parentElement`，`firstElementChild`，`lastElementChild`，`previousElementSibling`，`nextElementSibling`

### 获取节点元素

#### getElementsBy\*

**它返回一个集合，而不是一个元素！**

`document.getElementsBy*（css）` 返回 `elem` 中与给定匹配成功的所有元素。

#### querySelector

`document.querySelector（css）` 的调用将返回给定 CSS 选择器的第一个元素。

#### matches

检查 `elem` 是否与给定的 CSS 选择器匹配。它返回 `true` 或 `false`。

```js
   <div id="id"></div>
    <script>
        let eId=document.getElementById('id')
        console.log(eId.matches('#id'));//true
    </script>
```

#### closest

`closest`方法用于从元素自身开始，沿着 DOM 树向上查找，直到找到与指定 CSS 选择器匹配的第一个祖先元素。

#### **NodeList 与 HTMLCollection**

##### NodeList

`querySelectorAll` 返回*静态*集合。它就像一个固定的元素数组。

##### HTMLCollection

所有方法 `“getElementsBy*”` 都返回一个*实时*集合。此类集合始终反映文档的当前状态，并在文档更改时“自动更新”。

### 节点属性

`nodeName` 或者 `tagName`:`nodeName` 是为任意 `Node`,  `tagName` 属性仅适用于 `Element` 节点。

`innerHTML`

`outerHTML` :元素的完整 HTML。

`nodeValue/data`:
非元素节点（文本、注释）的内容。

`textContent`:返回元素内所有的文本内容,会保留所有的空白字符（空格、换行等）

`innerText`:是一个用于获取或设置元素内部纯文本内容的属性

### 特性和属性

#### DOM 属性

*   它们是大小写敏感的（要写成 `elem.nodeType`，而不是 `elem.NoDeTyPe`）。

##### dataset

```js
<img data-src="./img/1.jpg" alt="懒加载1" />
//node.dataset.src
```

#### HTML 特性

*   它们的名字是大小写不敏感的（`id` 与 `ID` 相同）。
*   它们的值总是 `字符串` 相型的。

##### 特性方法

*   `elem.hasAttribute(name)` —— 检查特性是否存在。
*   `elem.getAttribute(name)` —— 获取这个特性值。
*   `elem.setAttribute(name, value)` —— 设置这个特性值。
*   `elem.removeAttribute(name)` —— 移除这个特性。

### 修改文档

`document.createElement(tag)`:用给定的标签创建一个新 **元素节点（element node）**

`document.createTextNode(text)`:用给定的文本创建一个 **文本节点**

`elem.remove()`

`elem.cloneNode(true)` 来创建元素的一个“深”克隆 —— 具有所有特性（attribute）和子元素。

`node.append()`

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/752a1d2c188242de82817e9536b7059f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-35py6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDExMDQwNjAzNDY4MDQ0NCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735709496&x-orig-sign=Jx%2F1o8Ja9jwpGhwrL0%2FVnY3TRVk%3D)

### className 和 classList

#### elem.classList

`elem.className` 字符串

`elem.classList` 是一个特殊的对象，它具有 `add/remove/toggle` 单个类的方法。

`classList` 是可迭代的

#### 计算样式：getComputedStyle

`style` **属性仅对** `"style" `**特性（attribute）值起作用，而没有任何 CSS 级内联样式**

### 获取元素宽高

#### offset

相对于**视口**的位置和大小

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f0fed6ff0e4441cc9e24a96b7a17ac78~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-35py6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDExMDQwNjAzNDY4MDQ0NCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735709496&x-orig-sign=ZeD7Mval%2F88c19B8%2FE%2FbjJLlrMo%3D)

#### client

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1c7d15e9657045ffb1811f6d89ad0199~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-35py6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDExMDQwNjAzNDY4MDQ0NCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735709496&x-orig-sign=ztjcD9Uh1oszfPFvq8cP24tz%2Bdo%3D)

#### scroll

相对于 **文档** 的位置和大小

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/fabe2a9b85004b689c705e2206c577db~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-35py6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDExMDQwNjAzNDY4MDQ0NCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735709496&x-orig-sign=AE9OTfVxL0AhtGt0isUTnmgNawI%3D)

#### getBoundingClientRect

相对于**视口**的位置和大小

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b2b65ee5a5044059a3922ec222b2c97d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-35py6:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDExMDQwNjAzNDY4MDQ0NCJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1735709496&x-orig-sign=unhDa9Y1DLUo%2BNzEtWhUhcjAJ4g%3D)

#### event中宽高

`offsetX`**和**`offsetY`

相对于**元素自身左上角**坐标

`clientX`**和**`clientY`

在浏览器**视口**内的相对位置

`pageX`**和**`pageY`

在整个文档中的位置

`screenX`**和**`screenY`

相对于**电脑屏幕**

### Window 大小和滚动

#### scrollX,scrollY

对于文档滚动，在大多数浏览器中，我们可以使用 `document.documentElement.scrollLeft/scrollTop`

从 `window.pageXOffset/pageYOffset` 中获取页面当前滚动信息：

    alert('当前已从顶部滚动：' + window.pageYOffset);//window.scrollX
    alert('当前已从左侧滚动：' + window.pageXOffset);//window.scrollY

*   `window.pageXOffset` 是 `window.scrollX` 的别名。
*   `window.pageYOffset` 是 `window.scrollY` 的别名。

#### scrollTo，scrollBy

方法 `scrollBy(x,y)` 将页面滚动至 **相对于当前位置的** `(x, y) `**位置**。

方法 `scrollTo(pageX,pageY)` 将页面滚动至 **绝对坐标**

#### scrollIntoView

对 `elem.scrollIntoView(top)` 的调用将滚动页面以使 `elem` 可见

#### 禁止滚动

要使文档不可滚动，只需要设置 `document.body.style.overflow = "hidden"`。

    document.body.style.overflow = "hidden"
    document.body.style.overflow = ""
