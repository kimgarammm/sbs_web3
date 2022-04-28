$(function () {


    // 스와이퍼 시작!
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horisontal',             /*슬라이드 방향:'vertical','horisontal' */
        loop: true,                          /*반복여부 */
        autoplay:{                           //자동재생
            delay:3000,                      //슬라이드 당 지연시간(ms)    
            pauseOnMouseEnter:true,          //마우스 올리면 자동재생 멈춤
            disableOnInteraction:true,       //인터렉션(화살표,드래그,...) 중 자동재생 비활성화
        },
        speed:3000,                         //슬라이드가 넘어가는 시간(ms)
        slidePerView:1,                     //보여주는 슬라이드 개수
        spaceBetween:50,                    //슬라이드 간 여백 

        grabCursor:true,                  //마우스 커서를 잡는 손가락 모양

        centeredSlides:true,               //센터모드

        /*다양한 효과 */
        //fade
        /*effect:"fade",
        fadeEffect:{
            crossFade:true                //오버랩
        },*/
       
       //
        /*effect:"coverflow",
       coverFlowEffect:{
           rotate:50,
           slideShadow:true,


       },*/
       //cube


    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type:'bullet',          //bullets: ● ● ●
                                     //'fraction:(현재번호/전체번호)
                                    //'progressbar':진행률(게이지)
            clickable:true,
        },


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },


        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',   //스크롤바가 적용될 요소
            hide:true,              //스크롤바 숨김(직접 움직일 떄는 보이고 그외에 숨김)
            draggable:true,         //스크롤바 드래그 가능여부
            snapOnRelease:true ,     //스크롤바를 놓을때, 슬라이드 위치 맞춤

        },
    });


})