import * as readline from 'readline-sync'
import { State, Transition } from '../State'

export default class Menu implements State {
  name: string
  transitionTable: Transition[]
  public constructor() {
    this.name = 'MENU'
    this.transitionTable = [
      {
        input: '',
        callback: () => {
          const input = readline.question(
            'aperte a alternativa desejada:' +
              '(1) Somar ' +
              '(2) Subtrair ' +
              '(s) Sair\n'
          )
          console.log(`você pressionou ${input}`)
          if (input === '1') return 'ADD'
          if (input === '2') return 'SUB'
          if (input === 's') return 'END'
          return 'MENU'
        },
      },
    ]
  }
}
