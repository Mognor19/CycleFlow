import React, {useState, Fragment, Component} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { Button, Container } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import CheckBox from '@react-native-community/checkbox';
import { useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';
import { set } from 'date-fns';

const { height, width } = Dimensions.get('window');

export default function inicio() {
  const [size, setSize] = useState(15);
  const [padding, setPadding] = useState(20);
  const [top, setTop] = useState(10);
  const [value, setValue] = useState('Que Fecha termino tu ultimo periodo. →');
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date(2020,11,15));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const replace = String(currentDate);
    console.log(replace);
    setValue(replace.replace("00:00:00 GMT-0600 (CST)"," "));
    setSize(24);
    setPadding(100);
    setTop(5);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <Fragment>
      <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:'#f35454', height:height, width:width}}>
        <View style={{flexDirection:'row', alignSelf:'center', bottom:300}}>
          <Text style={{fontWeight:'bold', paddingRight:padding, fontSize:size, paddingTop:top}}>{value}</Text>
          <TouchableOpacity
            onPress={showDatepicker}
          >
            <Entypo name="calendar" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
  </Fragment>
  );
}
