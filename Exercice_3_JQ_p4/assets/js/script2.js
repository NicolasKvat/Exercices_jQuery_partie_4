$(function() {
  var regexName =  /^[A-Za-z]+(([- ]?)[A-Za-z])*$/
  var regexPhone = /^0[67][0-9]{8}/
  var regexEmail = /^[a-zA-Z][a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)@[a-z][a-zA-Z0-9_\.-]+\.[a-z]{2,5}/
  $('form').submit(function (event) {
    var name = $('#lastname').val();
    var firstName = $('#firstname').val();
    var eMail = $('#email').val();
    var phoneNumber = $('#phonenumber').val();
    if(name == '') {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Ce champ est obligatoire');
      $('#lastname').after(small);
    }
    else if (!regexName.test(name)) {
      var small = $('<small></small>');
      small.addClass('alert alert-danger');
      small.text('Saisie incorrecte');
      $('#lastname').after(small);
    }
    event.preventDefault();
  });
});
