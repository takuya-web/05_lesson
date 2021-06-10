// ヘッダーメニュー／マウスオーバーアニメーション
$(function(){
  $(".p-header__nav_item").mouseover(function(){
    $(this).children(".p-header__nav_list-sub").stop().slideDown(150);
  });
  $(".p-header__nav_item").mouseout(function(){
    $(".p-header__nav_list-sub").stop().slideUp(0);
  });
});

// ハンバーガーボタン
$(function($){
  $(".is-hamburger").on("click",function(){
    $(this).toggleClass("is-open");
    $(".c-gmenu").toggleClass("is-open");
    $("body").toggleClass("is-open");
  });
});