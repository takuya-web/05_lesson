// ヘッダーメニュー／マウスオーバーアニメーション
$(function(){
  $(".p-header__nav_item").mouseover(function(){
    $(this).children(".p-header__nav_list-sub").stop().slideDown();
  });
  $(".p-header__nav_item").mouseout(function(){
    $(".p-header__nav_list-sub").stop().slideUp(0);
  });
});

$(function(){
  $(".c-hamburger").click(function(){
    $(".p-header__nav__rp").slideToggle(200);
  });
});
// メニューの中身
$(function() {
  $('.p-header__ac-parent').hover(function() {
    $(this).children('.p-header__ac-child').slideToggle(200);
    // openクラスをつける
    $(this).toggleClass("open");
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