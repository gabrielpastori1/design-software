import { BaseDS } from "src/datasources/BaseDS";


export class Base {
    insert(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
    update(): void {
        throw new Error("Method not implemented.");
    }
    list(): any[] {
        throw new Error("Method not implemented.");
    }

    
    private dataSource = BaseDS.getInstance()


}
