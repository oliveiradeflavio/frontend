//preenche os campos da página perfil para não ficar vazio durante o teste/apresentação
function preenchPerfil(){
    document.getElementById('nome').value="Flávio Oliveira"
    document.getElementById('cpfPerfil').value='000.000.000-00'
    document.getElementById('email').value='teste@teste.com.br'
  }

  //máscara para cpf
  $(document).ready(function(){
    $('#cpfPerfil').mask('000.000.000-00')
  })

  //verifcando email 
  function validaEmail(email){
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  //valida cpf
  function validaCPF(cpfPerfil) {
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

function habilitaCamposSenhas(){
    if (document.getElementById('check-senha').checked){
        document.getElementById('senhaAntiga').disabled = false
        document.getElementById('senhaNova').disabled = false
        
    }else {
        document.getElementById('senhaAntiga').disabled = true
        document.getElementById('senhaNova').disabled = true
        document.getElementById('senhaAntiga').value = ""
        document.getElementById('senhaNova').value = ""
    }
}

function validaSenha(){
    var senhaAntiga = document.getElementById('senhaAntiga').value
    var senhaNova = document.getElementById('senhaNova').value
    
    if (senhaAntiga == senhaNova) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            backdrop: false,
            text: 'Sua nova senha precisa ser diferente da senha antiga'
        })
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Parabéns',
            backdrop: false,
            text: 'Senha alterada com sucesso'
        })
   
    }
}

function checaCampos(){
    if(document.getElementById('check-senha').checked){
        validaSenha()
    }else if(validaCPF('cpfPerfil') == true){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            backdrop: false,
            text: 'Número de CPF inválido'
           })
    }else {
        Swal.fire({
            icon: 'success',
            title: 'Salvar',
            text: 'Registros salvo com sucesso',
            showConfirmButton: false,
            timer: 3000,
            backdrop: false,
        })
    }
   
}

function cancelaCampos(){
    preenchPerfil()
    document.getElementById('check-senha').checked = false
    document.getElementById('senhaAntiga').disabled = true
    document.getElementById('senhaNova').disabled = true
    document.getElementById('senhaAntiga').value = ""
    document.getElementById('senhaNova').value = ""
}
