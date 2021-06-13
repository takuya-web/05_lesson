// ヘッダーメニュー／マウスオーバーアニメーション
$(function(){
  $(".p-header__nav_item").mouseover(function(){
    $(this).children(".p-header__nav_list-sub").stop().slideDown();
  });
  $(".p-header__nav_item").mouseout(function(){
    $(".p-header__nav_list-sub").stop().slideUp();
  });
});

$(function(){
  $(".c-hamburger").click(function(){
    $(".p-header__nav__rp").slideToggle(200);
  });
});
// メニューの中身
  $(".p-header__ac-parent").hover(function(){
    $(this).find(".p-header__ac-child").slideToggle(150);
    $(this).toggleClass("open");
  });

// ハンバーガーボタン
$(function($){
  $(".is-hamburger").on("click",function(){
    $(this).toggleClass("is-open");
    $(".c-gmenu").toggleClass("is-open");
    $("body").toggleClass("is-open");
  });
});