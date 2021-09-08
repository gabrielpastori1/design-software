export interface Transition {
  input: string
  callback: () => string
}

export interface State {
  name: string
  transitionTable: Transition[]
}
