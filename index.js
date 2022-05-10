function add() {
    var texto = document.getElementById('texto')
    var lista = document.getElementById('lista')
    var dados = []

    dados.push(texto.value)

    dados.forEach(element => {
        lista.insertAdjacentHTML('beforeend', `
        <tr>
        <td>${element}</td>
        
        </tr>
           
        `)
        
    });
  

}


