import { BaseDS } from "src/datasources/BaseDS";


export class Usuario {
    // public static insert(name: string, age: number): void {
    //     this.dataSource 
    //     throw new Error("Method not implemented.");
    // }
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


}
