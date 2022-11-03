/* Crie função que receba seu nome e sua idade e depois mostre em uma menssagem o seu nome e se voçê é de maior ou de menor
*/


function meuNome (nome){
   console.log('Seu nome é : ' + nome);

}

function verificarIdade (idade){
   if (idade >= 18){
       console.log('Vc ja é de Maior!')
   } else {
       console.log('Vc ainda é de Menor')
   }
}

meuNome('Eduardo');
verificarIdade('20');
