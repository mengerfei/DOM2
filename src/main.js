// const x1 = jQuery(".test1").find(".child");
// console.log(x1);
// jQuery(".test")
//   //
//   .find(".child")
//   //
//   .addClass("red")
//   //
//   .addClass("green")
//   //
//   .end()
//   //
//   .addClass("yellow");

const api1 = jQuery(".test");
const api2 = api1
  .find(".child")
  .addClass("red")
  .addClass("blue")
  .addClass("green");

const oldApi = api2.end().addClass("yellow");
