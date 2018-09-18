$(document).ready(function(){
    $('button').click(function(){
        $('#div1').load('../jquery-ajax/demo_test.txt', function(responseTxt, statusTxt, xhr){
            if(statusTxt === 'success') {
                alert('外部内容加载成功！ ');
            } else if(statusTxt === 'error'){
                alert('Error: ' + xhr.status + ': ' + xhr.statusText )
            } else {
                alert('Nothing');
            }
        })
    });
});