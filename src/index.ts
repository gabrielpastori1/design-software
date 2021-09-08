import * as readline from 'readline-sync'
import StateMachine from './StateMachine'
import Menu from './views/Menu'
import Sample from './views/Sample'
;(async function () {
  // console.log(Menu)
  const stateControl: StateMachine = new StateMachine(new Menu())
  stateControl.addState(new Sample())
  let input = ''
  do {
    stateControl.exec('')
  } while (stateControl.getCurState() !== 'END')
})()
