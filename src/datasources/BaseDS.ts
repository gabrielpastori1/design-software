import * as DB from 'nedb';

export class BaseDS {
    private static instance: BaseDS;

    private db?: DB<any>;


    private constructor() { 
        this.db = new DB({ filename: './base.db', autoload: true });
    }


    public static getInstance(): BaseDS {
        if (!BaseDS.instance) {
            BaseDS.instance = new BaseDS();
        }

        return BaseDS.instance;
    }

}