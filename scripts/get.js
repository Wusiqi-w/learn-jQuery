// 通过jQuery text()和html()方法来获得内容

$(document).ready(function(){
    $('#btn1').click(function(){
        alert('Text: ' + $('#test').text());
    });
    $('#btn2').click(function(){
        alert('HTML: ' + $('#test').html());
    });
});

// 通过 jQuery val() 方法获得输入字段的值

// $(document).ready(function(){
//     $('button').click(function(){
//         alert('Value: ' + $('#test').val());
//     });
// });


// jQuery attr() 方法用于获取属性值 

$(document).ready(function(){
    $('button').click(function(){
        alert($('#w3s').attr('href'));
    });
});