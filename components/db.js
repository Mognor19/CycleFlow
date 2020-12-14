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

const getAjustes =(setAjustesFunc)=>{
  db.transaction9((tx)=>{
      tx.executeSql(

 "select * from Ajustes",
    [],
    (_, { rows: { _array } }) => {
      setAjustesFunc(_array);
    },
    (_t, error) => {
      console.log("Error al momento de obtener el Ajustes");
      console.log(error);
    },
    (_t, _success) => {
      console.log("ajustes obtenidos");
    }
  );
});
};


    // Insertar Calendario
const insertCalendario = async (fechaI,  successFunc) => {
  const dato=fechaI[0];
  const dato2=fechaF[1];
  const dato3=recordatorio[2];
      db.transaction(
        (tx) => {
          tx.executeSql("insert into Calendario(fechaI,fechaF,recordatorio) values (?,?,?)", [dato,dato2,dato3]);
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
  const dato10=diario[10];
      db.transaction(
        (tx) => {
          tx.executeSql("insert into Sintomas(dolor_cabeza, mareo, acne, dolor_lumbar, gripe, flujo, manchado, sensibilidad, fatiga, fiebre, diario) values (?,?,?,?,?,?,?,?,?,?,?)", [
            dato,dato1,dato2,dato3,dato4,dato5,dato6,dato7,dato8,dato9,dato10
            
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

    // Insertar Ajustes
  const insertAjustes = async (color, successFunc) => {
  const dato=color[0];
  const dato2=notificacion[1];
      db.transaction(
        (tx) => {
          tx.executeSql("insert into Ajustes(color,notificacion) values (?,?)", [
            dato,dato2
            
          ]);
        },
        (_t, error) => {
          console.log("Error al insertar el Ajustes");
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

  // Borrar la tabla Ajustes
  const dropDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql("drop table Ajustes");
        },
        (_t, error) => {
          console.log("Error al eliminar la tabla de Ajustes");
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
          "create table if not exists Sintomas (PKsintomaID integer primary key autoincrement, dolor_cabeza int not null, mareo int not null, acne int not null, dolor_lumbar int not null, gripe int not null, flujo int not null, manchado int not null, sensibilidad int not null, fatiga int not null, fiebre int not null, diario text not null);"
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

// Creación de la tabla de Ajustes
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists Ajustes (PKajustesID integer primary key autoincrement, color string not null, notificacion string not null);"
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
 getAjustes,
 insertCalendario,
 insertSintomas,
 insertAjustes,
 setupDatabaseTableAsync,
 dropDatabaseTableAsync,
};
