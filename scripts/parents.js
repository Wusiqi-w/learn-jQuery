// parent() 方法返回被选元素的直接父元素。

// $(document).ready(function(){
//     $('span').parent().css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });

//parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。

// $(document).ready(function () {
//     $('span').parents().css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });

// 下面的例子返回所有 <span> 元素的所有祖先，并且它是 <ul> 元素

// $(document).ready(function(){
//     $('span').parents('ul').css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });

// parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素

$(document).ready(function(){
    $('span').parentsUntil('div').css({
        'color' : 'red',
        'border' : '2px solid red'
    });
});