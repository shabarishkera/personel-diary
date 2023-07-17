import * as SQLITE from 'expo-sqlite'
const database =SQLITE.openDatabase( 'diarydatabase.db');
export function init() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {

            ts.executeSql(`
            CREATE TABLE IF NOT EXISTS diarydata(
                 dateinfo varchar(20) PRIMARY KEY,
                 year int ,
                day varchar(20),
                 data TEXT);
                `, [], (_,result) => {
                    resolve(result);
            }, (_, error) => reject(error));
            
        });
        database.transaction((ts) => {

            ts.executeSql(`
            CREATE TABLE IF NOT EXISTS user(
                email varchar(30) PRIMARY KEY,
                name varchar(25) ,
               password TEXT);`,
                 [], (_,result) => {
                    resolve(result);
            }, (_, error) => reject(error));
            
        });
    })
    return promise;
}

///
export function putData(dateinfo,year,day,data) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `INSERT INTO diarydata (dateinfo,year,day,data) VALUES (?, ?, ?,?)`,
                [dateinfo,year,day,data],
                (_, result) => {
                    
                    resolve(result.insertId);
                },
                (_, error) => reject(error)
            );
        });
        
    });

    return promise;
}

export async function editdiary(date,data) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`UPDATE  diarydata SET data='${data
                }'
                 WHERE dateinfo='${date}' `, [], () => resolve(), (_, error) => reject(error));
        });
      
    })
    return promise;
}
export function fetchdiary(date) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
         
            ts.executeSql(`SELECT data FROM  diarydata where dateinfo='${date}' `, [], (_,result) => {
                
                resolve(result);
            }, (_, error) => reject(error));
        });
    });
    return promise;
}
export function fetchalldiary() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
         
            ts.executeSql(`SELECT * FROM  diarydata;' `, [], (_,result) => {
                
                resolve(result);
            }, (_, error) => reject(error));
        });
    });
    return promise;
}
export function addDiary(date,year,day,data) {
    console.log("data got="+date+" "+year+" "+day+" "+data)
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
         
            ts.executeSql(`INSERT INTO diarydata values('${date}',${year},${day},'${data}') `, [], (_,result) => {
                
                resolve(result);
            }, (_, error) => reject(error));
        });
    });
    return promise;
}
export async function deletediary(obj) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`DELETE FROM diarydata WHERE date='${obj.date}' `, [], (_,result) => {
                resolve(result)}, (_, error) => reject(error));
        });
        
    })
    return promise;
}

export async function deleteyear(obj) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`DELETE FROM diarydata WHERE year=${obj.year} `, [], () => {
                resolve()}, (_, error) => reject(error));
        });
        
    })
    return promise;
}

export async function updateuser(password) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`UPDATE USER SET password=${password}`, [], (_,result) => {
                resolve(result)}, (_, error) => reject(error));
        });
    })
    return promise;
}
export async function getuserData(password) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(`select * from user limit 1`, [], (_,result) => {
                resolve(result)}, (_, error) => reject(error));
        });
    })
    return promise;
}
export function createuser(email,username,password) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `INSERT INTO user (email,name,password) VALUES (?, ?, ?)`,
                [ email,username, password],
                (code,result) => {
                    console.log(result);
                    resolve(result.insertId);
                },
                (code,error) => reject(error)
            );
        });
    });
    return promise;

   
}
export function checkUserPhrase(password) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `select * from user where password='${password}'`,
                [],
                (code,result) => {
                    
                    resolve(result.rows);
                },
                (code,error) => reject(error)
            );
        });
    });
    return promise;
}



export function changeusercredentials(email,name) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `update user set name='${name}' , email='${email}'`,
                [],
                (code,result) => {
                    
                    resolve(result.rows);
                },
                (code,error) => reject(error)
            );
        });
    });
    return promise;
}
export function deletediarytable() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `DROP TABLE IF EXISTS diarydata`,
                [],
                (code,result) => {
                    
                    resolve(result.rows);
                },
                (code,error) => reject(error)
            );
        });
    });
    return promise;
}
export function deleteusertable() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((ts) => {
            ts.executeSql(
                `DROP TABLE IF EXISTS user`,
                [],
                (code,result) => {
                    
                    resolve(result.rows);
                },
                (code,error) => reject(error)
            );
        });
    });
    return promise;
}