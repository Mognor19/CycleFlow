import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const CyclesFlowContext = createContext({});

export const CyclesFlowContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { diarios: initialDiarios, children } = props;

  // Almacenar los valores en el estado
  const [diarios, setDiarios] = useState(initialDiarios);
  const [diario, setDiario] = useState("");

  // Cargar u obtener las notas
  useEffect(() => {
    refreshDiarios();
  }, []);

  const refreshDiarios = () => {
    return database.getCyclesFlow(setDiarios);
  };

  const addNewDiario = async (diario) => {
    await database.insertDiarios(diario, refreshDiarios);
    return refreshDiarios();
  };

  const getDiarioById = (id) => {
    return database.getDiarioById(id, setDiario);

    console.log(response);

    // Obtener el valor de la primera posición del arreglo
    // const value = Diario[0];
    // setDiario(value);

    // console.log(value);
    // console.log(Diario);
  };

  // Crear el objeto de contexto
  const CyclesFlowContext = {
    diarios, 
    diario,
    addNewDiario,
    getDiarioById,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <CyclesFlowContext.Provider value={CyclesFlowContext}>
      {children}
    </CyclesFlowContext.Provider>
  );
};