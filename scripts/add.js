// append()/after()方法， 在被选元素的结尾插入内容

// $(document).ready(function(){
//     $('#btn1').click(function(){
//         $('p').append(' <b>Appended text</b>.');
//     });
//     $('#btn2').click(function(){
//         $('ol').append('<li>Appended item</li>');
//     });
// });


// prepend()/before()方法在被选元素的开头插入内容

// $(document).ready(function(){
//     $('#btn1').click(function(){
//         $('p').prepend('<b>Prepended text</b> ');
//     });
//     $('#btn2').click(function(){
//         $('ol').prepend('<li>Prepended item</li>');
//     });
// });


//通过 append() 和 prepend() 方法添加若干新元素

$(document).ready(function(){
    $('button').click(function(){
        var txt1 = '<p>Text.</p>'              //以HTML创建新元素
        var txt2 = $('<p></p>').text('Text.'); // 以jquery创建新元素
        var txt3 = document.createElement('p');
        txt3.innerHTML = 'Text.';              // 通过 DOM 来创建文本
        $('body').append(txt1, txt2, txt3);    // 追加新元素

    });
});