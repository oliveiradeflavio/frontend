//máscaras campos 
$(document).ready(function(){
    $('#cnpj').mask('00.000.000/0000-00')
    $('#cep').mask('00000-000')
    $('#telefone').mask('(00)0000-0000')
    $('#celular').mask('(00)00000-0000')
})

//campo número entrada de somente número, impedindo texto via teclado. 
function preventNonNumericalInput(e) {
    e = e || window.event;
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }