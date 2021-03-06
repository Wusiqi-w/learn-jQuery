//first() 方法返回被选元素的首个元素。下面的例子选取首个 <div> 元素内部的第一个 <p> 元素

// $(document).ready(function () {
//     $('div p').first().css('background-color', 'yellow');
// });


// last() 方法返回被选元素的最后一个元素。下面的例子选择最后一个 <div> 元素中的最后一个 <p> 元素：

// $(document).ready(function () {
//     $('div p').last().css('background-color', 'yellow');
// });

// eq() 方法返回被选元素中带有指定索引号的元素。
// 索引号从 0 开始，因此首个元素的索引号是 0 而不是 1。下面的例子选取第二个 <p> 元素（索引号 1）

// $(document).ready(function(){
//     $('p').eq(1).css('background-color', 'yellow');
// });


// filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
// 下面的例子返回带有类名 "intro" 的所有 <p> 元素：

// $(document).ready(function(){
//     $('p').filter('.intro').css('background-color', 'yellow');
// });


// not() 方法返回不匹配标准的所有元素。not() 方法与 filter() 相反。
// 下面的例子返回不带有类名 "intro" 的所有 <p> 元素：


$(document).ready(function(){
    $('p').not('.intro').css('background-color', 'yellow');
});
