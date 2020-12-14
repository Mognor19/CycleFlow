import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { Button, Container } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import { useEffect } from 'react';

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
  
    return (
      <Fragment>
        <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:'#f35454', height:height, width:width}}>
        <View style={{marginLeft:45, bottom:55}}>
      <View style={styles.checkboxContainer}>
      <CheckBox
    disabled={false}
    value={checkBoxDolordeCabeza}
    onValueChange={(newValue) => setCheckBoxDolordeCabeza(newValue)}
  />
        <Text style={styles.label}>Dolor de Cabeza</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxMareo}
    onValueChange={(newValue) => setCheckBoxMareo(newValue)}
  />
        <Text style={styles.label}>Mareo</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxDolorLumbar}
    onValueChange={(newValue) => setCheckBoxDolorLumbar(newValue)}
  />
        <Text style={styles.label}>Dolor lumbar</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxAcne}
    onValueChange={(newValue) => setCheckBoxAcne(newValue)}
  />
        <Text style={styles.label}>Acné</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxGripe}
    onValueChange={(newValue) => setCheckBoxGripe(newValue)}
  />
        <Text style={styles.label}>Gripe</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxAntojos}
    onValueChange={(newValue) => setCheckBoxAntojos(newValue)}
  />
        <Text style={styles.label}>Antojos</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxCambiosHumor}
    onValueChange={(newValue) => setCheckBoxCambiosHumor(newValue)}
  />
        <Text style={styles.label}>Cambios de humor</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxSensibilidad}
    onValueChange={(newValue) => setCheckBoxSensibilidad(newValue)}
  />
        <Text style={styles.label}>Sensibilidad de mamas</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxFatiga}
    onValueChange={(newValue) => setCheckBoxFatiga(newValue)}
  />
        <Text style={styles.label}>Fátiga</Text>
        </View>
        <View style={styles.checkboxContainer}>
        <CheckBox
    disabled={false}
    value={checkBoxFiebre}
    onValueChange={(newValue) => setCheckBoxFiebre(newValue)}
  />
        <Text style={styles.label}>Fiebre</Text>
        </View>

    </View>
        </View>
    </Fragment>
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
      },
  });