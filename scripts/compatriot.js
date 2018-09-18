// siblings() 方法返回被选元素的所有同胞元素。

// $(document).ready(function(){
//     $('h2').siblings().css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });


// 下面的例子返回属于 <h2> 的同胞元素的所有 <p> 元素：

// $(document).ready(function(){
//     $('h2').siblings('p').css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });


// next() 方法返回被选元素的下一个同胞元素。该方法只返回一个元素

// $(document).ready(function(){
//     $('h2').next().css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });

// nextAll() 方法返回被选元素的所有跟随的同胞元素

// $(document).ready(function(){
//     $('h2').nextAll().css({
//         'color' : 'red',
//         'border' : '2px solid red'
//     });
// });

// nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素

$(document).ready(function(){
    $('p').nextUntil('h3').css({
        'color' : 'red',
        'border' : '2px solid red'
    });
});

// prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞元素向后遍历，而不是向前）。