window.$ = window.jQuery = function (selectorOrTemplate) {
  let elements;
  if (typeof selectorOrTemplate === "string") {
    elements = document.querySelectorAll(selectorOrTemplate);
  } else if (elements instanceof Array) {
    elements = selectorOrTemplate;
  }
  // api 可以操作elements
  const api = Object.create(jQuery.prototype); //创建一个对象， 这个对象的 __proto__ 为括号里的东西
  //相当于 const api = {__proto__ = jQuery.prototype}
  //   api.elements = elements
  //   api.oldApi = selectorOrTemplate.oldApi
  Object.assign(api, {
    elements: elements,
    oldApi: selectorOrTemplate.oldApi,
  });
  return api;
};

jQuery.fn = jQuery.prototype = {
  jQuery: true,
  constructor: jQuery,
  //获取元素
  get(index) {
    return this.elements(index);
  },

  //查找元素
  find(selector) {
    let array = [];
    for (let i = 0; i < this.elements.length; i++) {
      const elements2 = Array.from(this.elements[i].querySelectorAll(selector));
      array = array.concat(elements2);
    }
    //   const newApi = jQuery(array);
    //   return newApi;
    array.oldApi = this; // this 就是 旧 api
    return jQuery(array);
  },

  //遍历元素
  each(fn) {
    for (let i = 1; i < this.elements.length; i++) {
      fn.call(null, this.elements[i], i);
    }
    return this;
  },

  //获取父元素
  parent() {
    const array = [];
    this.each((node) => {
      if (array.indexOf(node.parentNode) === -1) {
        array.push(node.parentNode);
      }
    });
    return jQuery(array);
  },

  //获取子元素
  children() {
    const array = [];
    this.each((node) => {
      array.push(...node.children);
      // 等价于 array.push(node.children[0],node.children[1],node.children[2])
    });
    return jQuery(array);
  },

  //打印元素
  print() {
    console.log(this.elements);
  },

  //添加元素class
  // 闭包：函数访问外部的变量
  addClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className);
    }
    return this;
  },

  //结束操作
  end() {
    return this.oldApi; // this 就是当前的 新 api
  },
};
