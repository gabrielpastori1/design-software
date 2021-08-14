import * as DB from 'nedb';

interface Struct {
  a: string;
  id?: string;
}


(async function(){
  const db = new DB({ filename: './db', autoload: true });


  db.insert([{ a: 5 }, { a: 42 }, { a: 5 }, {b: 12, c: 'sdsdad'}], function (err) {
    if(err) {
      console.log(err)
    } else {
      console.log('saved')
    }
  });
  
  
  db.find({}, function (err: any, docs: Struct[]) {
    if(err) {
      console.log(err)
    } else {
      console.log(docs)
    }
  });
  
  
  await db.remove({a: 5}, { multi: false });
  await db.update({a: 5}, { $set: {a: 10} });

  const find: Promise<Struct[]> = new Promise((resolve, reject) => {
    db.find({}, function(err: any, docs: Struct[]){
      if(err){
        reject(err)
      }
      resolve(docs)
    })
  });
  
  const list = (await find );
  console.log(list);
  
})()
