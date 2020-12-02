/*                          INSTRUÇÕES PARA EDITAR                           */
/*****************************************************************************/
/* Para alterar o HTML do header e do footer você deve alterar o HTML que    */
/* está dentro da função document.write('...')                               */
/*                                                                           */
/* Toda vez que for começar uma linha nova, tem que colocar uma              */
/* barrinha invertida: \                                                     */
/*                                                                           */
/*   Não vai funcionar:                                                      */
/*      document.write(' <h1>Título</h1>                                     */
/*                       <p>Parágrafo</p> ');                                */
/*   Vai funcionar:                                                          */
/*      document.write(' <h1>Título</h1>\                                    */
/*                       <p>Parágrafo</p> ');                                */
/*                                                                           */
/* Mesmo linhas EM BRANCO necessitam da barrinha invertida: \                */
/*      document.write(' <h1>Título</h1>\                                    */    
/*                       \                                                   */
/*                       <p>Parágrafo</p> ');                                */
/*                                                                           */
/* Quando for usar aspas, use aspas duplas "", pois a função document.write  */
/* já recebe uma string que está usando aspas simples                        */
/*                                                                           */
/*   Não vai funcionar: document.write(' <div class='classe'>Oi</div> ');    */
/*                                                                           */
/*   Vai funcionar:     document.write(' <div class="classe">Oi</div> ');    */
/*                                                                           */
/* Observe o que já está feito neste arquivo como exemplo.                   */
/*****************************************************************************/

document.write('\
Telefone: (55) 12344 - 5678 </br>\
Email: contato@backtowork </br>\
<span class="nets">\
  Redes sociais:</br>\
</span>\
\
<div class="redes">\
  <span>\
    <a href="https://www.facebook.com/" target="blank">\
      <img src="./images/Facebook.png" alt="Facebook">\
    </a>\
  </span>\
  <span>\
    <a href="https://twitter.com/" target="blank">\
      <img src="./images/twitter.png" alt="Twitter">\
    </a>\
  </span>\
  <span>\
    <a href="https://www.youtube.com/" target="blank">\
      <img src="./images/youtube.png" alt="Youtube">\
    </a>\
  </span>\
</div>\
');
