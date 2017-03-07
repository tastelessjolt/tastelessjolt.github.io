$(document).ready(function() {
  var arr = $(location).attr('href').split('/');
  // console.log(arr[arr.length - 1].split('.')[0]);
  var name = arr[arr.length - 1].split('.')[0];
  jQuery.ajax('http://harshithgoka.me/' + name).done(function(data) {
      $('.hero-body').replaceWith($(data));
      console.log();
    });
  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });
});

$('.delete').click(function() {
    $(this).parent().detach();
  });

  $('.get').click(function() {
    var name = $(this).text().toLowerCase();
    if(name == 'home') { name = 'index'; }
    jQuery.ajax('http://harshithgoka.me/' + name + '.html').done(function(data) {
      $('.hero-body').replaceWith($(data).find('.hero-body'));
      console.log();
    });

    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');

  });