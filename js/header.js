$(function(){
  $(".p-header__nav_item").mouseover(function(){
    $(this).children(".p-header__nav_list-sub").stop().slideDown(150);
  });
  $(".p-header__nav_item").mouseout(function(){
    $(".p-header__nav_list-sub").stop().slideUp(0);
  });
});