$(document).ready(function () {
    // swiper 輪播效果用
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
        },
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // 燈箱效果
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });


    // 下拉式選單
    $(".dropDown").click(function (e) { 
        e.preventDefault();
        $(this).siblings(".dropDown_open").slideToggle();
    });

    // 回到頁頭
    function showBtn() {
        if ($(this).scrollTop() > 500) {
            $('.top').fadeIn();
        }else{
            $('.top').fadeOut();
        }
    };
    $(window).scroll(showBtn);

    $(".top a").click(function (e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop:0
        },2000);
    });
});