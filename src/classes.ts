export interface User {
  firstName: string;
  lastName: string;
  id: number;
}

export class UserAccount {
  firstName: string;
  lastName: string;
 
  constructor(name: string, lastName: string) {
    this.firstName = name;
    this.lastName = lastName;
  }

  getCredentials(): string {
    return `${this.firstName} ${this.lastName}`
  }

}

export interface ICounter {
  next(): number;
}


export class Counter {
  accumulator: number;
  constructor(accumulator: number){
    this.accumulator = accumulator;
  }
}

export class Sum extends Counter implements ICounter{
  constructor(){
    super(0)
  }
  next(): number{
    this.accumulator++;
    return this.accumulator;    
  }
}

export class Countdown extends Counter implements ICounter{
  next(): number{
    this.accumulator--;
    return this.accumulator;    
  }

}