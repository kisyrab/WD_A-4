$(function(){

    //sub menu 영역
    $(".main>li , .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    })//마우스오버
    
    $(".main>li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();

    })//마우스아웃


    //이미지fade영역
    $(".fade li").eq(0).siblings().hide();
    
    var n = 0;
    setInterval(function(){
        
        // $(".fade li").eq(n).fadeOut();
        if(n==2){
            n=0;
        }else{
            n++;
        }
            console.log(n);
        // $(".fade li").eq(n).fadeIn();
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
        },2000)



}) //j