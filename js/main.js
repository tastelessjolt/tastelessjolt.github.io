$(document).ready(function() {
  console.log(self);
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