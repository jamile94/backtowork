function checkButton() {
  $('.video-list button').click(function() {
    $('.checked').css('background-color','white')
    $('.checked').removeClass('checked');
    $(this).addClass('checked');
    $(this).css('background-color', '#347d6c');
  })
};

checkButton();
