import * as readline from 'readline-sync';
import StateMachine from './StateMachine';

(async function (){
  let input;
  do {
    input = readline.question('aperte a alternativa desejada:'+
    '(1) botão 1 '+
    '(2) botão 2 '+
    '(s) Sair\n')
    console.log(input)

  } while(input !== 's')
})()





