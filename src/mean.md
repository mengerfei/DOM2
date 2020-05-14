链式风格 也叫 jQuery 风格
`window.jQuery() `是我们提供的全局函数

特殊函数 jQuery
    jQuery(选择器) 用于获取对应的元素
    但它却不返回这些元素
    相反，它返回一个对象，称为 jQuery构造出来的对象
    这个对象可以操作对应的元素
  ```javascript
    const api = jQuery(".test"); // 不返回元素们， 返回 api 对象
api.addClass("red"); // 遍历所有刚才获取的元素， 添加 .red
api.addClass("red").addClass("blue").addClass("green"); // 链式操作

// 由于api 只使用一次，所以可以省掉 即 下面的代码
jQuery(".test");
api.addClass("red");
addClass("red").addClass("blue").addClass("green");

obj.fn(p1)  函数里的 this 就是 obj
obj.fn.call(obj.p1)
```
