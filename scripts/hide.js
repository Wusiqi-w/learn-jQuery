
//隐藏被点击的当前文本

// $(document).ready(function(){
//     $('p').click(function(){
//         $(this).hide();
//     });
// });



//隐藏部分文本

// $(document).ready(function(){
//     $('.ex .hide').click(function(){
//         $(this).parents('.ex').hide('slow');
//     });
// });


// 隐藏和显示

// $(document).ready(function(){
//     $('#hide').click(function(){
//         //第一个参数可取值，slow, fast或毫秒
//         $('p').hide(1000);
//     });
//     $('#show').click(function(){
//         $('p').show('fast');
//     });
// });


// 使用toggle()方法来切换hide()和show()方法
$(document).ready(function(){
    $('button').click(function(){
        $('p').toggle('slow');
    });
});
