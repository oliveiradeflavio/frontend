//preenche os campos da página perfil para não ficar vazio durante o teste/apresentação
function preenchPerfil(){
    document.getElementById('nome').value="Flávio Oliveira"
    document.getElementById('cpf').value='83913782257'
    document.getElementById('email').value='teste@teste.com.br'
  }

  //máscara para cpf
  $(document).ready(function(){
    $('#cpf').mask('000.000.000-00')
  })

  //verifcando email 
  function validaEmail(email){
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  //valida cpf
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

function validaSenha(){
    var senhaAntiga = document.getElementById('senhaAntiga').value
    var senhaNova = document.getElementById('senhaNova').value
    
    if (senhaAntiga == senhaNova) {
        alert('Sua nova senha precisa ser diferente da senha antiga.')
    } else {
        alert('Senha alterada.')
    }
}


function checaCampos(){
    validaSenha()
    if(validaCPF(cpf) == false){
        alert('cpf incorreto')
    }
}
