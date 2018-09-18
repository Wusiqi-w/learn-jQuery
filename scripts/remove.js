
// remove() 方法删除被选元素及其子元素

// $(document).ready(function(){
//     $('button').click(function(){
//         $('#div1').remove();
//     });
// });

// empty() 方法删除被选元素的子元素

// $(document).ready(function(){
//     $('button').click(function(){
//         $('#div1').empty();
//     });
// });


// 过滤被删除的元素,下面的例子删除 class="italic" 的所有 <p> 元素：
$(document).ready(function(){
    $('button').click(function(){
        $('p').remove('.italic');
    });
});