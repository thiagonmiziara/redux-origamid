 function desafio() {
     import store from "./desafio/store/configureStore.js";
     import {
         incrementarTempo,
         reduzirTempo,
         modificarEmail,
     } from "./desafio/store/aluno.js";

     import {
         completarAula,
         completarCurso,
         resetarCurso
     } from './desafio/store/aulas.js';

     function render() {
         const { aluno, aula } = store.getState();
         const aulasE1 = document.getElementById("aulas");
         const alunoE1 = document.getElementById("aluno");

         alunoE1.innerText = ` ${aluno.nome} : ${aluno.email} : ${aluno.diasRestantes}`;

         aulasE1.innerText = aulas.filter((aula) => {
             aula.completa === true;
         }).length;
     }
     render();
     store.subscribe(render);
     store.dispatch(incrementarTempo());
     store.dispatch(reduzirTempo());
     store.dispatch(modificarEmail('thiago@origamid.com'));
     store.dispatch(completarAula(2));
     store.dispatch(resetarCurso());
     store.dispatch(completarCurso());

 }
 export default desafio();