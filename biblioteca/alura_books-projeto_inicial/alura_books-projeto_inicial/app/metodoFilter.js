const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(event) {
    const elementoBtn = event.target
    const categoria = elementoBtn.value
    console.log('Categoria clicada:', categoria)

    let livrosFiltrados = categoria == 'disponivel'
        ? livros.filter(livro => livro.quantidade > 0)
        : livros.filter(livro => livro.categoria == categoria)

    exibirOsLivrosNaTela(livrosFiltrados)
}
