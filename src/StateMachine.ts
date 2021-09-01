import State from './State'
export default class StateMachine {
    private states: State[] = [];
    private curState: string;
    constructor(initialState: State) {
        this.curState = initialState.name;
    }
    public addState(newState: State): void {
        const size = this.states.length;
        this.states[size] = newState;
    }
    public exec(input: string) {
        // Como fazer?
    }
}