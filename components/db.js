import React from "react";
import * as SQlite from "expo-sqlite";


//crea y abre la base de datos

const db = SQlite.openDatabase("CyclesFlow.db");

//funcionalidades de la base de datos

//obtener las notas del usuario

const getCalendario =(setCalendarioFunc)=>{
    db.transaction9((tx)=>{
        tx.executeSql(

   "select * from Calendario",
      [],
      (_, { rows: { _array } }) => {
        setCalendarioFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener el Calendario");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Calendario obtenido");
      }
    );
  });
};

const getSintomas =(setSintomasFunc)=>{
  db.transaction9((tx)=>{
      tx.executeSql(

 "select * from Sintomas",
    [],
    (_, { rows: { _array } }) => {
      setSintomasFunc(_array);
    },
    (_t, error) => {
      console.log("Error al momento de obtener el Sintomas");
      console.log(error);
    },
    (_t, _success) => {
      console.log("sintomas obtenidos");
    }
  );
});
};

const getDiario =(setDiarioFunc)=>{
  db.transaction9((tx)=>{
      tx.executeSql(

 "select * from Diario",
    [],
    (_, { rows: { _array } }) => {
      setDiarioFunc(_array);
    },
    (_t, error) => {
      console.log("Error al momento de obtener el Diario");
      console.log(error);
    },
    (_t, _success) => {
      console.log("diario obtenidos");
    }
  );
});
};


    // Insertar Calendario
const insertCalendario = async (fechaI,  successFunc) => {
  const dato=fechaI[0];
  const dato2=fechaF[1];
      db.transaction(
        (tx) => {
          tx.executeSql("insert into Calendario(fechaI,fechaF) values (?,?)", [dato,dato2]);
        },
        (_t, error) => {
          console.log("Error al insertar el Calendario");
          console.log(_t);
          console.log(error);
        },
        (_t, _success) => {
          successFunc;
        }
      );
    };

    // Insertar Sintomas
  const insertSintomas = async (dolor_cabeza, successFunc) => {
  const dato=dolor_cabeza[0];
  const dato1=mareo[1];
  const dato2=acne[2];
  const dato3=dolor_lumbar[3];
  const dato4=gripe[4];
  const dato5=flujo[5];
  const dato6=manchado[6];
  const dato7=sensibilidad[7];
  const dato8=fatiga[8];
  const dato9=fiebre[9];
      db.transaction(
        (tx) => {
          tx.executeSql("insert into Sintomas(dolor_cabeza, mareo, acne, dolor_lumbar, gripe, flujo, manchado, sensibilidad, fatiga, fiebre) values (?,?,?,?,?,?,?,?,?,?)", [
            dato,dato1,dato2,dato3,dato4,dato5,dato6,dato7,dato8,dato9
            
          ]);
        },
        (_t, error) => {
          console.log("Error al insertar el Sintomas");
          console.log(_t);
          console.log(error);
        },
        (_t, _success) => {
          successFunc;
        }
      );
    };

    // Insertar Diario
  const insertDiario = async (diario, successFunc) => {
  const dato=diario[0];
      db.transaction(
        (tx) => {
          tx.executeSql("insert into Diario(diario) values (?)", [
            dato,
            
          ]);
        },
        (_t, error) => {
          console.log("Error al insertar el Diario");
          console.log(_t);
          console.log(error);
        },
        (_t, _success) => {
          successFunc;
        }
      );
    };
    
    // Borrar la tabla Calendario
  const dropDatabaseTableAsync = async () => {
      return new Promise((resolve, reject) => {
        db.transaction(
          (tx) => {
            tx.executeSql("drop table Calendario");
          },
          (_t, error) => {
            console.log("Error al eliminar la tabla de Calendario");
            reject(error);
          },
          (_t, result) => {
            resolve(result);
          }
        );
      });
    };

    // Borrar la tabla Sintomas
  const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table Sintomas");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de Sintomas");
          reject(error);
        },
        (_t, result) => {
          resolve(result);
        }
      );
    });
  };

  // Borrar la tabla Diario
  const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table Diario");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de Diario");
          reject(error);
        },
        (_t, result) => {
          resolve(result);
        }
      );
    });
  };

  // Creación de la tabla de Calendario
  const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists Calendario (PKcalendarioID integer primary key autoincrement, fechaI date not null, fechaF date not null, recordatorio time not null);"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Tabla creada!");
          resolve(success);
        }
      );
    });
  };

  // Creación de la tabla de Sintomas
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Sintomas (PKsintomaID integer primary key autoincrement, dolor_cabeza int not null, mareo int not null, acne int not null, dolor_lumbar int not null, gripe int not null, flujo int not null, manchado int not null, sensibilidad int not null, fatiga int not null, fiebre int not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Tabla creada!");
        resolve(success);
      }
    );
  });
};

// Creación de la tabla de Diario
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Diario (PKdiarioID integer primary key autoincrement, diario text not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Tabla creada!");
        resolve(success);
      }
    );
  });
};




export const database = {
 
 getCalendario,
 getSintomas,
 getDiario,
 insertCalendario,
 insertSintomas,
 insertDiario,
 setupDatabaseTableAsync,
 dropDatabaseTableAsync,
};
