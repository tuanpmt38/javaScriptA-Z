/**
 * Khai báo biến `rectangle` là 1 object gồm có các property:
 * - width: chiều rộng, là 1 số bất kì
 * - height: chiều cao, là 1 số bất kì
 * Viết các method:
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều cao
 * - getArea: trả về diện tích
 */

var rectangle = {
  width : 50,
  height: 60,
  getWidth: function (){
    console.log(50);
  },
  getHeight: function (){
    console.log(60);
  }
};

console.log(rectangle.getWidth(80));
console.log(rectangle.getHeight(60));
function getArea(getWidth, getHeight){
  return getWidth*getHeight;
};
console.log(getArea(50,60));