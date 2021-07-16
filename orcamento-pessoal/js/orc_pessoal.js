class Despesa {
    constructor(data, tipo, descricao, valor){
        this.data = data
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }

    limpaCampos(){
        data.value =''
        tipo.value = '',
        descricao.value = '',
        valor.value = ''
    }
    
}

class Bd{
    constructor(){
        //assim que iniciar a gravação no localStorage, verificamos se 
        //está vazio. Se estiver setamos o id com valor 0
        let id = localStorage.getItem('id')
        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    //Para que os valores salvos não seja substituido, atribuimos o ID e incrementamos.
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    //no momento de salvar, chamamos o método getProximoID para que atribuido o valor ao id
    //isto é o valor já vai ser incrementado antes de gravar a id no localStorage.
    gravar(d){
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
    }

    recuperaTodosRegistros(){
        //array de despesas
        let despesas = Array()

        let id = localStorage.getItem('id')

        //recuperando todas as despesas cadastradas em localStorage
        for(let i = 1; i <= id; i++){
            //recuperar a despesa
            let despesa = JSON.parse(localStorage.getItem(i))

            //se existir a possiblidade de haver índice que foram pulados/removidos
            //nestes casos nós vamos pular esses índices
            if (despesa === null){
                continue
            }
            despesa.id = i 
            despesas.push(despesa)
        }
        return despesas
    }

    pesquisar(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperaTodosRegistros()

        //data
        if (despesa.data != '') {
            console.log('filtro data');
            console.log(despesa.data);
            //como estou salvando no padrão "pt-br" a forma da data faço a coversão 
            //antes de fazer a comparação no Filter que usa o formato yyyy-mm-dd
            let dataFormatada = new Date(despesa.data)
            despesa.data = dataFormatada.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
            despesasFiltradas = despesasFiltradas.filter(d => d.data == despesa.data) 
        }

        //tipo
        if ((despesa.tipo != '')) {
            console.log('filtro tipo');   
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }   

         //tipo
         if ((despesa.descricao != '')) {
            console.log('filtro descricao');   
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }  
        
          //valor
          if ((despesa.valor != '')) {
            console.log('filtro valor');   
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }  
        
        return despesasFiltradas
    }

    //remove as despesas pleo botão de remoção que está dentro da tabela
    remover(id){
        localStorage.removeItem(id)
    }

}

let bd = new Bd()


function letraMaiusculas(){
    let descricao = document.getElementById('descricao')
    let adicionarDescricao = document.getElementById('adicionar_categoria')
    if (descricao != null) {
        descricao.value = descricao.value.toUpperCase()  
    }
    if (adicionarDescricao != null) {
        adicionarDescricao.value = adicionarDescricao.value.toUpperCase() 
    }
}

function criarOpcoesSelectTipo(novaCategoria){
    let select_tipo = document.getElementById('tipo')
    let option = Array()
    option = ['ALIMENTAÇÃO', 'EDUCAÇÃO', 'LAZER', 'SAÚDE']
    
    if (novaCategoria != null) {
        option.length = 0 //para que não seja duplicado os valores 
        option.push(novaCategoria)
      
    }
    console.log(option);
    option.forEach(function (item){ 
        option = document.createElement('option')
        option.text = item.toUpperCase()
        if (select_tipo != null) {
            select_tipo.append(option) 
           
        }
    })   
}
criarOpcoesSelectTipo()

//cadastra nova categoria 
function cadastraNovaCategoria(){
    let novaCategoria = document.getElementById('adicionar_categoria')
    if (novaCategoria.value != '') {
        criarOpcoesSelectTipo(novaCategoria.value)
        novaCategoria.value = ''
    }    
}



function cadastrarDespesa(){
    //recebendo a data no formato yyyy-mm-dd e mostrand para o usuário no formato dd/mm/yyyy
    let data = document.getElementById('data').value
    dataFormatada = new Date(data)
    dataFormatada = dataFormatada.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(
        dataFormatada,
        tipo.value, 
        descricao.value, 
        valor.value
    )
    //let lp = new Despesa()
    console.log(despesa);
    
    if(despesa.validarDados()){
        //criar o dialog que irá apresentar se foi salvo com sucesso ou não 
        //retorna true
        bd.gravar(despesa)
        document.getElementById('modal_titulo').innerHTML = "Sucesso"
        document.getElementById('modal_titulo_div').className = 'modal-header text-success'
        document.getElementById('modal_conteudo').innerHTML = "Despesa foi cadastrada com sucesso"
        document.getElementById('modal_btn').innerHTML = "Voltar"
        document.getElementById('modal_btn').className = 'btn btn-success'
        $('#modalRegistraDespesa').modal('show')
        limpaCampos()
    
    } else {
        //criar o dialog que irá apresentar se foi salvo com sucesso ou não 
        //retorna false
        document.getElementById('modal_titulo').innerHTML = 'Erro'
        document.getElementById('modal_titulo_div').className =  'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Existem campos obrigatórios que não foram preenchidos'
        document.getElementById('modal_btn').innerHTML = 'Corrigir'
        document.getElementById('modal_btn').className = 'btn btn-danger'
        $('#modalRegistraDespesa').modal('show')
    }

}

function limpaCampos(){
    let lp = new Despesa()
    lp.limpaCampos()
    let btnConsultaDespesa = document.getElementById('btnConsultaDespesa')
    if(btnConsultaDespesa != null){
        pesquisarDespesa()
    }
  
    
}

//mascara valor formatando
$(document).ready(function(){
    $('#valor').maskMoney({
        prefix: 'R$',
        decimal: ',',
        thousands: "."
    })
})

function carregaListaDespesas(despesas = Array(), filtro = false){
    
    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperaTodosRegistros()
    }

    //selecionando o elemento tbody da tabela da págian consulta.html
    let listaDepesas = document.getElementById('listaDespesas')
    listaDepesas.innerHTML = ''

    //percorrer o Array despesas, listando cada despesa de forma dinâmica
    despesas.forEach(function(d){
        //criando a linha (tr)
        let linha = listaDespesas.insertRow()

        //criando as colunas (td)
        //console.log(d.data);
        linha.insertCell(0).innerHTML = d.data
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        //botão de excluir as despesas que estão dentro da tabela
        let btn = document.createElement('button')
        btn.className = 'btn btn-danger btn-excluir-despesa'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            //remover a despesa escolhida
            //para eu poder passar a ID preciso primeiro remover essa strin "id_despesa".
            //está com essa string para não dar conflito com algo dentro do DOM com nome ID
            let id = this.id.replace('id_despesa_', '')
            document.getElementById('modal_titulo').innerHTML = "Alerta"
            document.getElementById('modal_titulo_div').className = 'modal-header text-warning'
            document.getElementById('modal_conteudo').innerHTML = `Deseja realmente remover a despesa ${d.descricao}`
            document.getElementById('modal_btn_voltar').innerHTML = "Voltar"
            document.getElementById('modal_btn_excluir').innerHTML = "Excluir"
            document.getElementById('modal_btn_voltar').className = 'btn btn-warning'
            document.getElementById('modal_btn_excluir').className = 'btn btn-danger'
            $('#modalRemoveDespesa').modal('show')
            document.getElementById('modal_btn_excluir').onclick = function(){
                 bd.remover(id)
                 console.log('excluiu');
                 //como o item está criado dentro do DOM, precisamos atualizar a página para que 
                 //as informações sejam atualizada, assim consultado que não existe o item dentro
                  // do localStorage
                  window.location.reload()
            }    
          
        }
        linha.insertCell(4).append(btn)
    })
}

function pesquisarDespesa(){

    let data = document.getElementById('data').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(data, tipo, descricao, valor)
    let despesas = bd.pesquisar(despesa)

    carregaListaDespesas(despesas, true)
    
}