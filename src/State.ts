
interface Transition {
    input: string, 
    callback: () => string
}
export default interface State {
    name: string,
    transitionTable: Transition[]
}