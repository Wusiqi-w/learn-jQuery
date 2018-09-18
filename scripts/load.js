//下面的例子会把文件 "demo_test.txt" 的内容加载到指定的 <div> 元素中：

$(document).ready(function(){
    $('#btn1').click(function(){
        $('#test').load('../jquery-ajax/demo_test.txt');
    });
});


// 也可以把 jQuery 选择器添加到 URL 参数。

// 下面的例子把 "demo_test.txt" 文件中 id="p1" 的元素的内容，加载到指定的 <div> 元素中：

$(document).ready(function(){
    $('#btn1').click(function(){
        $('#test').load('../jquery-ajax/demo_test.txt #p1');
    });
});

