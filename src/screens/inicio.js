import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Container } from 'native-base';
import Calendar from '../components/Calendar';

const { height, width } = Dimensions.get('window');

export default function inicio() {
  return (
    <Fragment>
      <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:'#f35454', height:height, width:width}}>
        {/* <Calendar /> */}
        <Text>Hola chicos</Text>
      </View>
  </Fragment>
  );
}

const styles = StyleSheet.create({
  
});
