import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, Image ,View} from 'react-native';
import Inicio from './src/screens/inicio';
import Sintomas from './src/screens/sintomas';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{flex:1 ,backgroundColor:'#f65555'}}>
      <NavigationContainer>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:50}}>
          <Image source={require('./assets/Logo.png')} alt="Logo" style={{width:50, height:50}}/>
          <Text style={{fontSize:30, marginLeft:10, fontStyle:'italic', color:'white'}}>CycleFlow</Text>
        </View>
        <Tab.Navigator 
        initialRouteName="Inicio"
        shifting={true}
        tabBarOptions={{
          activeTintColor: '#252122',
          inactiveTintColor:'#e1d8d8',
          indicatorStyle :{
            backgroundColor:'#e41d62'
          },
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: '#f65555' },
        }}
        >
          <Tab.Screen name="Inicio" component={Inicio}  />
          <Tab.Screen name="Sintomas"  component={Sintomas} />
          <Tab.Screen name="Diario"   component={Inicio} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
