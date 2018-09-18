//防止文档在完全加载之前运行jquery代码
$(document).ready(function () {
    $('button').click(function () {
        //隐藏当前的HTML元素
        // $(this).hide();
        //隐藏所有<p>元素
        // $('p').hide();
        //隐藏id=“test”的元素
        // $('#test').hide();
        //隐藏所有class=“test”的元素
        // $('.test').hide();
        //把所有p元素的背景颜色更改为红色
        $('p').css('background', 'red');
    });
});