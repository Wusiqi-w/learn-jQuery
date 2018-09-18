
// 通过 text()、html() 以及 val() 方法来设置内容

// $(document).ready(function(){
//     $('#btn1').click(function(){
//         $('#test1').text('Hello world!');
//     });
//     $('#btn2').click(function(){
//         $('#test2').html('<b>Hello world!</b>');
//     });
//     $('#btn3').click(function(){
//         $('#test3').val('Dolly Duck');
//     });
//     $('#btn4').click(function(){
//         $('#w3s').attr({
//             'href' : 'http://www.w3school.com.cn/jquery/',
//             'title' : 'W3School jQuery 教程'
//         });
//     });
// });


// text()、html() 以及 attr() 的回调函数

$(document).ready(function(){
    $('#btn1').click(function(){
        $('#test1').text(function(i, origText){
            return 'Old text: ' + origText + ' New text: Hello world! (index: ' + i +')'
        });
    });
    $('#btn2').click(function(){
        $('#test2').html(function(i, origText){
            return 'Old html: ' + origText + ' New html: Hello <b>world!</b> (index: ' + i +')'
        });
    });
    $('#btn3').click(function(){
        $('#w3s').attr('href', function(i, origValue){
            return origValue + '/jquery';
        });
    });
});