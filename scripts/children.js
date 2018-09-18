//children() 方法返回被选元素的所有直接子元素。

// $(document).ready(function(){
//     $('div').children().css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });


// 下面的例子返回类名为 "1" 的所有 <p> 元素，并且它们是 <div> 的直接子元素

// $(document).ready(function(){
//     $('div').children('p.1').css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });



// find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。

// 下面的例子返回属于 <div> 后代的所有 <span> 元素：

// $(document).ready(function(){
//     $('div').find('span').css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });


// 下面的例子返回 <div> 的所有后代

$(document).ready(function(){
    $('div').find('*').css({
        'color' : 'red',
        'border' : '2px solid red'
    });
});
