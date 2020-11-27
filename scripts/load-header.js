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
<a href="index.html">\
  <div class="logo">\
    <div id="triangle"></div>\
    <div id="backtowork">BACK TO WORK</div>\
  </div>\
</a>\
\
<button class="btn-menu">\
  <i class="fas fa-bars fa-lg"></i>\
</button>\
\
<nav class="menu">\
  <a href="#" class="btn-close">x</a>\
  <ul>\
    <a href=#><li>O projeto</li></a>\
    <a href="about.html"><li>Quem somos</li></a>\
    <a href="cursos.html"><li>Cursos</li></a>\
    <a href="contatos.html"><li>Contatos</li></a>\
  </ul>\
</nav>\
\
<script src="./scripts/menu.js"></script>\
');
