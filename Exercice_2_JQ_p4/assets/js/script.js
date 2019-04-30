$(function () {
  // on déclare d'abord les variables
    var note1;
    var note2;
    var note3;
    var note4;
    var note5;
  // on créer une fonction avec l'event 'click' sur le bouton '#submit'
  $('#submit').click(function calcul() {
    // on leur donne la valeur de type nombre des inputs
    var notes = $('input');
    var sum = 0;
    $.each(notes, function () {
      sum += Number($(this).val());
    });
    // note1 = Number($('#note1').val());
    // note2 = Number($('#note2').val());
    // note3 = Number($('#note3').val());
    // note4 = Number($('#note4').val());
    // note5 = Number($('#note5').val());
    // on fait le calcul de la moyenne
    var result = ((sum / notes.length).toFixed(2));
    // on créer un 'if' et on renvoit une 'alert()' en fonction du résultat
    if (result >= 0 && result < 10) {
      alert('La moyenne est de ' + result + '\n' + 'En dessous de la moyenne');
    } else if (result >=10 && result < 13){
      alert('La moyenne est de ' + result + '\n' + 'Moyen');
    } else if (result >= 13 && result < 16){
      alert('La moyenne est de ' + result + '\n' + 'Bien');
    } else {
      alert('La moyenne est de ' + result + '\n' + 'Très Bien');
    }
  });
});
