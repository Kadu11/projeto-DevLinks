/*Para alterar do modo escuro para o claro, é necessário adicionar uma função "onlick" no html com o nome da função que será toggleMode após isso,
no Javascript, será necessário criar uma função com o mesmo nome adicionado no html.
*/
function toggleMode() {
  // Após isso criar uma variável com o nome do elemento onde se encontra a função adicionada "html", e utilizar a DOM "document.documenteElement", pois ele se refere a todo html, caso fosse adicionado ao body ou outra tag, seria viável utilizar o "document.classList" que vai buscar pelo nome da classe.
  const html = document.documentElement
  // Faz a mesma coisa que o if...else faria, mas de forma mais simples economizando tempo e linhas de código.
  html.classList.toggle('light')

//Para trocar de imagem é necessário pegar a tag img
const img = document.querySelector('#avatar')

// substituir a imagem
if(html.classList.contains('light')) {
// se tiver light mode adicionar a imagem light

} else {
// se tiver, sem light mode, manter a  imagem normal

}

// Após isso será necessário criar um if...else com o nome da tag + classList.contains('nome da class'), que serve para ver se aquela class se encontra no elemento. Se a class for encontrada será retornado um true, fazendo assim com que a html.classList.remove('nome da tag'), remova a tag do elemento com o clique sobre a função. Mas se não for encontrada a class será retornado um false, que irá ativar o html.classList.add('nome da tag'), que serve para adicionar algo, ou seja, vai adicionar aquela tag ao elemento criando assim o estilo desejado.
//   if(html.classList.contains('light')) {
//     html.classList.remove('light')
//   } else {
//     html.classList.add('light')
//   }
}