// $(function () {
//   // on déclare trois variables qui permettra de valider le formulaire si les variables restent égale à true
//   var valid1 = true;
//   var valid2 = true;
//   var valid3 = true;
//   // on vérifie les différentes conditions, si elles ne sont pas remplient, la var valid1 devient false
//   $('.formContent').blur(function () {
//     if ($(this).val().length = 0 || !$(this).val().match(/^[a-z]+$/i))
//     {
//        $(this).css('border', '2px solid red');
//        console.log(false);
//        return valid1 = false;
//     }
//     else
//     {
//       $(this).css('border', 'none');
//       return valid1 = true;
//     }
//   });
//
//     // on vérifie les différentes conditions, si elles ne sont pas remplient, la var valid2 devient false
//   $('#email').blur(function () {
//     if (!$(this).val().match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i))
//     {
//        $(this).css('border', '2px solid red');
//        return valid2 = false;
//     }
//     else
//     {
//       $(this).css('border', 'none');
//       return valid2 = true;
//     }
//   });
//     // on vérifie les différentes conditions, si elles ne sont pas remplient, la var valid3 devient false
//   $('#phonenumber').blur(function () {
//     if (!$(this).val().match(/^[0-9]{10,10}$/g))
//     {
//        $(this).css('border', '2px solid red');
//        return valid3 = false;
//     }
//     else
//     {
//       $(this).css('border', 'none');
//       return valid3 = true;
//     }
//   });
//  // si une des conditions sont remplie, l'envoi du formulaire ce stop
//   $('#button_submit').click(function () {
//     if (valid1 == false || valid2 == false || valid3 == false || valid4 == false) {
//       event.preventDefault();
//       console.log('Veuillez remplir correctement le formulaire');
//       alert('Veuillez remplir correctement le formulaire');
//     } else {
//       alert()
//     }
//   });
// });
//

$(function () {
  var stringRegex = /^[A-ZÔÖÀÉÈÎÏ]{1}[a-zA-ZéèôöîïÉÈÎÏ '-]+([-'\s][a-zA-ZéèôöîïÉÈÎÏ '-][a-zéèôöîï ']+)?$/;
  var dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  $('form').submit(function (event) {
    var test = true;
    $('input[type = "text"]').each(function () {
      let input = $(this).val();
      if (input == '') {
        alert('Ce champ est obligatoire');
        test = false;
      } else if (!stringRegex.test(input)) {
        alert('Saisie incorrecte');
        test = false;

      }
    });
    var date = $('input[type = "date"]').val();
    if (date == '') {
      alert('Date requise');
      test = false;

    } else if (!dateRegex.test(date)) {
      alert('Saisie incorrecte de la date');
      test = false;

    }
    if (!test) {
      event.preventDefault();
    } else {
      alert('ok');
    }
  });
});
