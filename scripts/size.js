// width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。
// height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。

// innerWidth() 方法返回元素的宽度（包括内边距）。
// innerHeight() 方法返回元素的高度（包括内边距）。

// outerWidth() 方法返回元素的宽度（包括内边距和边框）。
// outerHeight() 方法返回元素的高度（包括内边距和边框）。


// outerWidth(true) 方法返回元素的宽度（包括内边距、边框和外边距）。
// outerHeight(true) 方法返回元素的高度（包括内边距、边框和外边距）。

// $(document).ready(function () {
//     $('button').click(function () {
//         var txt = '';
//         txt += 'Width of div: ' + $('#div1').width() + '<br />';
//         txt += 'Height of div ' + $('#div1').height() + '</br>';
//         txt += 'Inner width of div: ' + $('#div1').innerWidth() + '</br>';
//         txt += 'Inner height of div: ' + $('#div1').innerHeight() +  '</br>';
//         txt += 'Outer width of div: ' + $('#div1').outerWidth() + '</br>';
//         txt += 'Outer height of div: ' + $('#div1').outerHeight() + '</br>';
//         txt+= 'Outer width (+margin): ' + $('#div1').outerWidth(true) + '</br>';
//         txt+= 'Outer height (+margin): ' + $('#div1').outerHeight(true);
//         $('#div1').html(txt);
//     });
// });

// 设置指定的 <div> 元素的宽度和高度

$(document).ready(function () {
    $('button').click(function () {
        $("#div1").width(320).height(320);
    });
});