//addClass() 方法, 向被选元素添加一个或多个类

// $(document).ready(function () {
//     $('#btn1').click(function () {
//         $('h1, p').addClass('blue');
//         $('div').addClass('important');
//     });
//     $('#btn2').click(function(){
//         $('h2').addClass('important blue');
//     });
// });


// removeClass() - 从被选元素删除一个或多个类

// $(document).ready(function () {
//     $('button').click(function () {
//         $('h1, h2, p').removeClass('blue');
//     });
// });


// toggleClass() - 对被选元素进行添加/删除类的切换操作 

// $(document).ready(function () {
//     $('button').click(function () {
//         $('h1, h2, p').toggleClass('blue');
//     });
// });



// css() - 设置或返回样式属性

// 返回首个匹配元素的CSS属性
// $(document).ready(function () {
//     $("button").click(function () {
//         alert("Background color = " + $("p").css("background-color"));
//     });
// });


//设置 CSS 属性
// $(document).ready(function(){
//     $('button').click(function(){
//         $('p').css('background-color', 'yellow');
//     });
// });


//设置多个 CSS 属性

$(document).ready(function(){
    $('button').click(function(){
        $('p').css({'background-color' : 'yellow', 'font-size' : '200%' });
    });
});