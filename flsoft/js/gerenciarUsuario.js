// mascara telefone
 
          $(document).ready(function(){
              $("#celular").mask("(00)00000-0000")
              $("#telefone").mask("(00)0000-0000")
              $('#cpf').mask('000.000.000-00')
              $('#dtnascimento').mask('00/00/0000')
          })
    

    
// data de cadastro no input

        var hoje = new Date();
        var dia = hoje.getDate();
        var mes = hoje.getMonth()+1;
        var ano = hoje.getFullYear();
        document.getElementById('dtcadastro').value = dia+"/"+mes+"/"+ano;
