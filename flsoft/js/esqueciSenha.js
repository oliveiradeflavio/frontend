/* Máscara CPF */
  $(document).ready(function(){
    $('#cpf').mask('000.000.000-00')
  })

/*função que faz a verificaçao do email, se tem conteudo antes do @ e após.
verifica se após o @ temos algum conteudo e se tem o (ponto), exemplo
teste@teste.com ou teste@teste.com.br
*/
function validaEmail(email){
  var re = /\S+@\S+\.\S+/;
  return re.test(email);

}

function validaCPF(cpf) {
      if (typeof cpf !== "string") return false
      cpf = cpf.replace(/[\s.-]*/igm, '')
      if (
          !cpf ||
          cpf.length != 11 ||
          cpf == "00000000000" ||
          cpf == "11111111111" ||
          cpf == "22222222222" ||
          cpf == "33333333333" ||
          cpf == "44444444444" ||
          cpf == "55555555555" ||
          cpf == "66666666666" ||
          cpf == "77777777777" ||
          cpf == "88888888888" ||
          cpf == "99999999999"
      ) {
          return false
      }
      var soma = 0
      var resto
      for (var i = 1; i <= 9; i++)
          soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
      resto = (soma * 10) % 11
      if ((resto == 10) || (resto == 11))  resto = 0
      if (resto != parseInt(cpf.substring(9, 10)) ) return false
      soma = 0
      for (var i = 1; i <= 10; i++)
          soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
      resto = (soma * 10) % 11
      if ((resto == 10) || (resto == 11))  resto = 0
      if (resto != parseInt(cpf.substring(10, 11) ) ) return false
      return true
  }

    /*Após clicar no botão enviar, essa função irá ser chamada para
    poder verificar os 3 campos se estão condizentes.
    */
    function verificaCampo(){
      var nome = document.getElementById('nomecompleto').value
      var cpf = document.getElementById('cpf').value
      var email = document.getElementById('email').value
      
      if (nome === "" || cpf === "" || email === "") {
        console.log("campos obrigatório");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Preenchimento dos campos é obrigatório.'
         })

      }else if(nome.length < 10){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Digite o nome completo'
         })

      }else if (validaCPF(cpf) == false)  {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Número de CPF inválido'
         })
  
      }else if (validaEmail(email) == false) {
        console.log("email incorreto")
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'email incorreto'
         })

      }else{
        Swal.fire({
          icon: 'success',
          title: 'Dados enviado com sucesso',
          text: 'Em alguns minutos a nova senha chegará no seu e-mail.',
          showConfirmButton: false,
          timer: 4000
         }).then(() => {
          document.getElementById("formEsqueciSenha").submit
         })
      }
  }

  //limpando os 3 campos
  function limpaCampos(){
    nome = document.getElementById('nomecompleto').value = ""
    cpf =  document.getElementById('cpf').value = ""
    email = document.getElementById('email').value = ""
  } 
