// var btnDown = document.getElementsByClassName('counter-down');
// var btnUp =   document.getElementsByClassName('counter-up');
var $contador = $(".controler");    
$contador.val(0);

$(".counter").click(function(){
    if($(this).hasClass('counter-up') && ($contador.val()<=9))
        $contador.val(parseInt($contador.val())+1);
    if($(this).hasClass('counter-down') && ($contador.val()>=1)) 
        $contador.val(parseInt($contador.val())-1);
});