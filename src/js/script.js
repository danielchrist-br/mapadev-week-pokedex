const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoAberto = document.querySelector('.aberto')
        cartaoAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.id
        const cartaoPokemonParaAbrir = document.querySelector(`#cartao-${idPokemonSelecionado}`)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const listaPokemonAtivo = document.querySelector('.ativo')
        listaPokemonAtivo.classList.remove('ativo')

        const listaPokemonSelecionado = document.querySelector(`#${idPokemonSelecionado}`)
        listaPokemonSelecionado.classList.add('ativo')
    })
})