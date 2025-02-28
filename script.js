"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(function () {
    var $btn = $('.filter__body [data-filter]'),
      $list = $('.gallery__grid [data-category]');
    $(document).on('click', '.filter__body [data-filter]', function (e) {
      e.preventDefault();
      var $btnTxt = $(this).attr('data-filter');
      console.log("選択されたフィルタ:", $btnTxt);
      var $list = $('.gallery__grid [data-category]');
      console.log("取得したリスト:", $list); // ここで確認

      if ($btnTxt === 'all') {
        $list.fadeIn();
      } else {
        $list.hide().filter('[data-category="' + $btnTxt + '"]').fadeIn();
      }
    });

    // $btn.on('click', function(e) {
    //   e.preventDefault();

    //   var $btnTxt = $(this).attr('data-filter');

    //   if ($btnTxt == 'all'){
    //     $list.fadeOut().promise().done(function() {
    //       $list.fadeIn();
    //     });
    //   } else {
    //     $list.fadeOut().promise().done(function() {
    //       $list.filter('[data-category = "' + $btnTxt + '"]').fadeIn();
    //     });
    //   }
    // });
  });

  $(function () {
    $('.filter__button').on('click', function () {
      $('.filter__button').removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
});