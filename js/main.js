$(document).ready(function() {
  var arr = $(location).attr('href').split('/');
  // console.log(arr[arr.length - 1].split('.')[0]);
  var ending = arr[arr.length - 1];
  
  var name = ending.split('.')[0];
  if(ending == 'harshithgoka.me' || ending == '') {
    name = 'index';
  }
  jQuery.ajax(name + ".part").done(function(data) {
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

$('a.get').click(function(event) {
  event.preventDefault();
  var name = $(this).text().toLowerCase();
  if(name == 'home') { name = 'index'; }
  jQuery.ajax( name + ".part").done(function(data) {
    $('.hero-body').replaceWith($(data));
    console.log();
  });

  $('.is-active').removeClass('is-active');
  $(this).addClass('is-active');

});