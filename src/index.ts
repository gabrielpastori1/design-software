import { User, UserAccount, Counter, Sum, Countdown } from './classes'


const iUser: User = {
	firstName: 'João',
	lastName: 'Silva',
	id: 232323
}

let user: UserAccount;

user = new UserAccount('Gilson', 'Doi Junior')


console.log(iUser, user)

 
const counter: Counter = new Counter(10);

const countdown: Countdown = new Countdown(10)

const sum: Sum = new Sum()

console.log(counter, countdown, sum)


// counter.next()

countdown.next()

sum.next()

console.log(counter, countdown, sum)
