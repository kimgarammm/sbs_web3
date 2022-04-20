
//문서준비이벤트
$(function(){
    //메인메뉴에 마우스 올렸을때
   $('.mainmenu').on('mouseover',function(){
       //메인메뉴의  자식서브메뉴만
       //$(this).children('.submenu').slideDown(500)
       //모든 서브메뉴
       $('.submenu').stop().slideDown(500)
   })

   //메인메뉴-마우스 벗어날떼
   $('.mainmenu').on('mouseleave',function(){
    //메인메뉴의  자식서브메뉴만
   // $(this).children('.submenu').stop().slidUp(500)
   //모든서브메뉴
   $('.submenu').stop().slideUp(500)

})

//메인메뉴 클릭할때
$('.mainmenu').on('click',function(){
    //메인메뉴의 자식서브메뉴만
    //$('.submenu').stop().slideUp(500)
   // $(this).children('.submenu').stop().slideToggle(500)
   //모든 서브메뉴
   $('.submenu').stop().slideToggle(500)
})


})