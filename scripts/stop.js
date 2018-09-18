
// 停止滑动

// $(document).ready(function(){
//     $('#flip').click(function(){
//         $('#panel').slideDown(5000);
//     });
//     $('#stop').click(function(){
//         $('#panel').stop();
//     });
// });


//停止动画

$(document).ready(function(){
    $('#start').click(function(){
        $('div').animate({left : '100px'}, 5000);
        $('div').animate({fontSize : '3em'}, 5000);
    });
    $('#stop').click(function(){
        $('div').stop();
    });
    $('#stop2').click(function(){
        $('div').stop(true);
    });
    $('#stop3').click(function(){
        $('div').stop(true, true);
    });
});