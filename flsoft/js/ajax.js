let content  = document.getElementById('ajax-content')

function fetchContent(el){
    let view = el.getAttribute('a-view')
    let folder = el.getAttribute('a-folder')
    const scriptSRC = el.getAttribute('a-script')

    fetch(`/ajax/${folder}/${view}.html`)
    .then(response => {
        let html = response.text()
        return html
    })
    .then(html => {
        content.innerHTML = html
    })
    .then(() => {
        const script = document.createElement("script")
        script.async = true
        script.src = `/js/${scriptSRC}.js`
        document.body.appendChild(script);
    })
    .then(() => {
        const script = document.createElement("script")
        script.async = true
        script.src = "/js/esqueciSenha.js"
        document.body.appendChild(script);
    })
    .then(() => {
        const script = document.createElement("script")
        script.async = true
        script.src = "/js/perfil.js"
        document.body.appendChild(script);
    })

    /*
    .then(() => {
        const script = document.createElement("script")
        script.async = true
        script.src = "/js/gerenciarFornecedor.js"
        document.body.appendChild(script);
    })
    .then(() => {
        const script = document.createElement("script")
        script.async = true
        script.src = "/js/gerenciarProdutos.js"
        document.body.appendChild(script);
    })
    */
}