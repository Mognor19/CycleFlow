import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Dimensions, ScrollView} from 'react-native';
import * as Font from "expo-font";
import {Text,View,H1,Textarea,Button , Content, Spinner, List, ListItem, Body, Icon, Right} from 'native-base';
import { CyclesFlowContext } from '../../context/cycleflowcontext'

const { height, width } = Dimensions.get('window');


  const diariosListScreen = ({ navigation }) => {
    const {diario} = useContext(CyclesFlowContext);

    const [diarios, setDiario] = useState("");
    const [enableSave, setEnableSave] = useState(true);
    const [errorDiario, setErrorDiario] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    
  
    useEffect(() => {
      if (diarios) setEnableSave(false);
      else setEnableSave(true);
    }, [diarios]);
    
    const nuevaNota = async () => {
      if (diarios) {
        await addnuevaNota(diarios, refreshDiario);
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
        <View style={{flex:1,alignContent:'center', backgroundColor:'#ea8f94', width:width, height:height}}>
          <View style={{marginBottom:10,marginLeft:25, marginRight:25, marginTop:20}}>
            <H1 style={{alignSelf:'center', color:'white'}}>Diario</H1>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Escribe algo..."
              value={diarios}
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
            <Content>
            <List>
            {diario
                ? diario.map((diario) => (
                  <ListItem
                    key={diario.id.toString()}
                      onPress={() => {
                      navigation.navigate("diario", { id: diario.id });
                    }}
                  >
                    <Body>
                      <Text numberOfLines={2}>{diario.diario}</Text>
                    </Body>
                    <Right>
                      <Icon name="arrow-forward" />
                    </Right>
                  </ListItem>
                ))
              : null}
          </List>
        </Content>
        </View>
        </View>
      </ScrollView>
      );
}

const styles = StyleSheet.create({
  fondo: {
    backgroundColor:'#f65555',
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
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
    diario: {
      borderColor: "black",
      marginBottom: 10,
    },
    diario: {
      borderColor:'white',
      color:'white'
    },
});

export default diariosListScreen;