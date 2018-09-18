

//animate()方法的简单应用，参数{params},必需的参数，定义形成动画的css属性


// $(document).ready(function(){
//     $('button').click(function(){
//         $('div').animate({ left : '250px' });
//     });
// });

//animate()操作多个属性

// $(document).ready(function(){
//     $('button').click(function(){
//         $('div').animate({
//             left : '250px',
//             opacity : '0.5',
//             height : '150px',
//             width : '150px'
//         });
//     });
// });

//animate()-使用相对值

// $(document).ready(function(){
//     $('button').click(function(){
//         $('div').animate({
//             left : '250px',
//             height : '+=150px',
//             width : '+=150px'
//         });
//     });
// });


//animate() - 使用预定义的值

// $(document).ready(function(){
//     $('button').click(function(){
//         $('div').animate({
//             height : 'toggle'
//         }, 'fast');
//     });
// });


//animate() - 使用队列功能

// $(document).ready(function(){
//     $('button').click(function(){
//         var div = $('div');
//         div.animate({ height : '300px', opacity : '0.4'}, 'slow');
//         div.animate({ width : '300px', opacity : '0.8'}, 'slow');
//         div.animate({ height : '100px', opacity : '0.4'}, 'slow');
//         div.animate({ width : '100px', opacity : '0.8'}, 'slow');
//     });
// });

//对字体进行操作

$(document).ready(function(){
    $('button').click(function(){
        var div = $('div');
        div.animate({ left : '100px', width : '200px'}, 'slow');
        div.animate({ fontSize : '3em'}, 'slow');
    });
});