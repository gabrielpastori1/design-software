import { BaseDS } from "src/datasources/BaseDS";


/**
 * Os models funcionam como interfaces
 * entre banco de dados e sistema. 
 * 
 * Models não possuem uma templete único,
 * vai variar de acordo com as necessidades
 * de cada classe.
 * 
 * Nelas são executada as funções que manipulam
 * o banco de dados, as regras mais comuns e existente
 * na maioria dos models é o CRUD 
 *  -Create
 *  -Read
 *  -Update
 *  -Delete
 *
 */

export class Usuario {
    
    public static insert(name: string, age: number): void {
        this.dataSource.getConection()?.insert([{ name: name, age: age }])
        throw new Error("Method not implemented.");
    }
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public save() {
        this.dataSource.getConection()?.insert([{
            name: this.name,
            age: this.age
        }])
    }
    deleteOne(params: any): void {
        this.dataSource.getConection()?.remove(params, {multi: false})
    }
    deleteMany(params: any): void {
        this.dataSource.getConection()?.remove(params, {multi: true})
    }
    update(params: any, newValue: any): void {
        this.dataSource.getConection()?.update(params, newValue);
    }
    async list(): Promise<Usuario[]>  {
        const find: Promise<Usuario[]> = new Promise((resolve, reject) => {
            this.dataSource.getConection()?.find({}, function(err: any, docs: Usuario[]){
              if(err){
                reject(err)
              }
              resolve(docs)
            })
        });
        return find;
        
    }

    private name: string;
    private age: number;
    private dataSource = BaseDS.getInstance()
    private static dataSource = BaseDS.getInstance()


}
