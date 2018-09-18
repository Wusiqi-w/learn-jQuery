// 演示带有不同参数的 fadeIn() 方法
// $(document).ready(function(){
//     $('button').click(function(){
//         $('#div1').fadeIn();
//         $('#div2').fadeIn('slow');
//         $('#div3').fadeIn(3000);
//     });
// });



//演示带有不同参数的 fadeOut() 方法
// $(document).ready(function () {
//     $('button').click(function () {
//         $('#div1').fadeOut();
//         $('#div2').fadeOut('slow');
//         $('#div3').fadeOut(3000);
//     });
// });

//演示带有不同参数的 fadeToggle() 方法
// $(document).ready(function () {
//     $('button').click(function () {
//         $('#div1').fadeToggle();
//         $('#div2').fadeToggle('slow');
//         $('#div3').fadeToggle(3000);
//     });
// });

//演示带有不同参数的 fadeTo() 方法, 必需speed参数，opacity（不透明度）参数
$(document).ready(function () {
    $('button').click(function () {
        $('#div1').fadeTo('slow', 0.15);
        $('#div2').fadeTo('slow', 0.4);
        $('#div3').fadeTo(3000, 0.7);
    });
});