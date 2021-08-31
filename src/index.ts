import * as readline from 'readline-sync';


function soLiga(state: string){
  console.log('ligou')
  return 'LIG-PAR'
}

function ligaMov(state: string){
  console.log('ligou e está em movimento')
  return 'LIG-MOV'
}

function soDesliga(state: string){
  console.log('desligou')
  return 'DES-PAR'
}

function desligaMov(state: string){
  console.log('desligou e está em movimento')
  return 'DES-MOV'
}

function soMov(state: string){
  console.log('começou a movimentar')
  return 'DES-MOV'
}

function movLig(state: string){
  console.log('começou a movimentar e está ligado')
  return 'LIG-MOV'
}

function soPara(state: string){
  console.log('parou')
  return 'DES-PAR'
}

function paraLig(state: string){
  console.log('parou e esta ligado')
  return 'LIG-PAR'
}


(async function (){
  let state: string = 'DES-PAR'
  let transitionMatrix: any = {
    'DES-PAR': {
      '1': soLiga,
      '2': soMov
    },
    'DES-MOV': {
      '1': ligaMov,
      '2': soPara 
    },
    'LIG-PAR': {
      '1': soDesliga,
      '2': movLig
    },
    'LIG-MOV': {
      '1': desligaMov,
      '2': paraLig
    },
  }
  let input;
  do {
    input = readline.question('aperte a alternativa desejada: (1) botão 1 (2) botão 2 (s) Sair\n')

    state = transitionMatrix[state][input]()
  } while(input !== 's')
})()