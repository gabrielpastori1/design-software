import { Singleton } from './singleton'

let instance: Singleton;

// instance  = new Singleton();
// console.log(instance.name)

// instance  = new Singleton();

instance  = Singleton.getInstance();

console.log('1', instance.name)

instance  = Singleton.getInstance();

console.log('2', instance.name)

let instance2: Singleton = Singleton.getInstance();

console.log('3', instance2.name);

// Double numero = 2.0
// double numero2 = 2.0
// if(numero == numero2) //retornar falso
// if(numero === numero2) //comparo forçadamente o valor

console.log('igual', instance == instance2 )

instance.name = 'José'

console.log('primeira', instance);
console.log('segunda', instance2);


