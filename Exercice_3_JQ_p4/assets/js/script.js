// $(function () {
//   // on déclare trois variables qui permettra de valider le formulaire si les variables restent égale à true
//   var valid1 = true;
//   var valid2 = true;
//   var valid3 = true;
//   // on vérifie les différentes conditions, si elles ne sont pas remplient, la var valid1 devient false
//   $('.pseudo').blur(function () {
//     if ($(this).val().length < 2 || $(this).val().length > 25 || !$(this).val().match(/^[a-z]+$/i))
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
//     if (!$(this).val().match(/^[0-9]{10,14}$/g))
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
//     }
//   });
// });

$(function () {
  // Lorsque le formulaire va être soumis
  $('form').submit(function () {
    // On récupère tout les inputs
    var inputs = $('input');
    $.each(inputs, function () {
      let input = this;
      $('small').remove();
      // on vérifie que nos champs respectent les contraintes (required, maxlength, minlength)
      if (!input.validity.valid) {
        var small = $('<small></small>');
        small.addClass('alert alert-danger');
        small.text(input.validationMessage);
        $(input).after(small);
        event.preventDefault();
      };
    }, false);
  });
});



// var regexName =  /^[A-Za-z]+(([- ]?)[A-Za-z])*$/
// var regexPhone = /^0[67][0-9]{8}/
// var regexEmail = /^[a-zA-Z][a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)@[a-z][a-zA-Z0-9_\.-]+\.[a-z]{2,5}/
