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
  $(".p-header__ac-parent").hover(function(){
    let $subList = $(this).next("ul");
      if($subList.css("display") == "none"){
        $subList.slideDown();
      } else {
        $subList.slideUp();
      }
  });

// ハンバーガーボタン
$(function($){
  $(".is-hamburger").on("click",function(){
    $(this).toggleClass("is-open");
    $(".c-gmenu").toggleClass("is-open");
    $("body").toggleClass("is-open");
  });
});