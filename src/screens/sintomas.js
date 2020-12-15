import React, {useState, useEffect ,Fragment} from 'react';
import { StyleSheet, Dimensions, ScrollView} from 'react-native';
import * as Font from "expo-font";
import {Text,View,H1,Textarea,Button , Content, Spinner} from 'native-base';
import CheckBox from '@react-native-community/checkbox';

const { height, width } = Dimensions.get('window');

export default function inicio() {
  const [checkBoxDolordeCabeza, setCheckBoxDolordeCabeza] = useState(false)
  const [checkBoxMareo, setCheckBoxMareo] = useState(false)
  const [checkBoxDolorLumbar, setCheckBoxDolorLumbar] = useState(false)
  const [checkBoxAcne, setCheckBoxAcne] = useState(false)
  const [checkBoxGripe, setCheckBoxGripe] = useState(false)
  const [checkBoxAntojos, setCheckBoxAntojos] = useState(false)
  const [checkBoxCambiosHumor, setCheckBoxCambiosHumor] = useState(false)
  const [checkBoxSensibilidad, setCheckBoxSensibilidad] = useState(false)
  const [checkBoxFatiga, setCheckBoxFatiga] = useState(false)
  const [checkBoxFiebre, setCheckBoxFiebre] = useState(false)
  const [diario, setDiario] = useState("");
  const [enableSave, setEnableSave] = useState(true);
  const [errorDiario, setErrorDiario] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (diario) setEnableSave(false);
    else setEnableSave(true);
  }, [diario]);
  
  const nuevaNota = async () => {
    if (diario) {
      await addnuevaNota(diario, refreshDiario);
      navigation.goBack();
    } else {
      setErrorDiario(true);
    }
  };
  useEffect(() => {
    const loadFontsAsync = async () => {
      await Font.loadAsync({
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }).then(() => {
        setFontsLoaded(true);
      });
    };

    loadFontsAsync();
  }, []);

  if (!fontsLoaded)
    return (
      <Content contentContainerStyle={styles.content}>
        <Spinner color="blue" />
      </Content>
    );
    return (
      <ScrollView>
        <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:'#ea8f94', width:width}}>
        <View style={{marginLeft:45, marginTop:30}}>
        <View style={styles.checkboxContainer}>
      <CheckBox
      tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxDolordeCabeza}
    onValueChange={(newValue) => setCheckBoxDolordeCabeza(newValue)}
  />
        <Text style={styles.label}>Dolor de Cabeza</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxMareo}
    onValueChange={(newValue) => setCheckBoxMareo(newValue)}
  />
        <Text style={styles.label}>Mareo</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxDolorLumbar}
    onValueChange={(newValue) => setCheckBoxDolorLumbar(newValue)}
  />
        <Text style={styles.label}>Dolor lumbar</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxAcne}
    onValueChange={(newValue) => setCheckBoxAcne(newValue)}
  />
        <Text style={styles.label}>Acné</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxGripe}
    onValueChange={(newValue) => setCheckBoxGripe(newValue)}
  />
        <Text style={styles.label}>Gripe</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxAntojos}
    onValueChange={(newValue) => setCheckBoxAntojos(newValue)}
  />
        <Text style={styles.label}>Antojos</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxCambiosHumor}
    onValueChange={(newValue) => setCheckBoxCambiosHumor(newValue)}
  />
        <Text style={styles.label}>Cambios de humor</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxSensibilidad}
    onValueChange={(newValue) => setCheckBoxSensibilidad(newValue)}
  />
        <Text style={styles.label}>Sensibilidad de mamas</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxFatiga}
    onValueChange={(newValue) => setCheckBoxFatiga(newValue)}
  />
        <Text style={styles.label}>Fátiga</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
        tintColors={{true:'#ffffff', false:'#000000'}}
    disabled={false}
    value={checkBoxFiebre}
    onValueChange={(newValue) => setCheckBoxFiebre(newValue)}
  />
  <Text style={styles.label}>Fiebre</Text>
    </View>
        </View>
        <View style={{marginBottom:50,marginLeft:25, marginRight:25, marginTop:20}}>
          <H1 style={{alignSelf:'center', color:'white'}}>Diario</H1>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Escribe algo..."
            value={diario}
            onChangeText={setDiario}
            style={errorDiario ? styles.inputError : styles.diario}
          />
          {errorDiario ? (
            <Text style={styles.error}>¡Debes ingresar una nota!</Text>
          ) : null}
          <Button
            style={styles.button}
            onPress={nuevaNota}
            // disabled={enableSave}
          >
            <Text>Guardar</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor:'#f65555',
    marginTop:50,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
      color:'white'
    },
    button: {
      fontFamily: "Roboto",
      alignSelf:'center',
      backgroundColor:'#f65555',
      marginTop:20
    },
    error: {
      fontSize: 12,
      color: "red",
      marginBottom: 10,
    },
    inputError: {
      borderColor: "red",
    },
    note: {
      borderColor: "black",
      marginBottom: 10,
    },
    diario: {
      borderColor:'white',
      color:'white'
    },
});