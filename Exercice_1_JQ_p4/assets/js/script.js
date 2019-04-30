$(function() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var win = 0;
  var lose = 0;
  var egal = 0;
  $( "#shifumi" ).click(function() {
    var findNumber = getRandomIntInclusive(1, 3);
    var idChecked = $('.select').val();
    var victory;
    if (win != 0 || lose != 0) {
      victory = ((win / (win + lose)) * 100).toFixed(2) + '%';
    };
    $('#info-V').text(victory);
    if (findNumber == 1 && idChecked == 2 || findNumber == 2 && idChecked == 3 || findNumber == 3 && idChecked == 1) {
      win++;
      $('#info').html('Vous avez gagné la partie en cours.');
      $('#info-G').text(win);
    } else if (findNumber == 1 && idChecked == 3 || findNumber == 2 && idChecked == 1 || findNumber == 3 && idChecked == 2) {
      lose++;
      $('#info').html('Vous avez perdu la partie en cours.');
      $('#info-P').text(lose);
    } else {
      egal++;
      $('#info').html('égalité');
      $('#info-E').text(egal);
    }
  });
});
