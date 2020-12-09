import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from '../components/Calendar';

export default function inicio() {
  return (
    <Fragment>
      <div style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
        <Calendar />
      </div>
  </Fragment>
  );
}

const styles = StyleSheet.create({
  
});
