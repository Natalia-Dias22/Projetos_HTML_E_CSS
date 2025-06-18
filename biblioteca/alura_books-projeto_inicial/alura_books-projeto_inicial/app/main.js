let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' 
getBuscarLivrosDaAPI()


//função assincrona para usar await
//await faz o código esperar até que os dados cheguem da internet.

async function getBuscarLivrosDaAPI () {
    const res = await  fetch(endpointDaAPI)//espere por uma promessa
    //Aqui você pega a resposta (res) e extrai o conteúdo JSON dela.
    livros = await res.json()
    
    let livrosComDesconto = aplicarDesconto(livros)
   exibirOsLivrosNaTela(livrosComDesconto)
}




