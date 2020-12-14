import React, {useState, Fragment} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { Button, Container } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import { useEffect } from 'react';

const { height, width } = Dimensions.get('window');

export default function inicio() {
  const [value, onChangeText] = React.useState(new Date(1598051730000));
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChangeText(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Fragment>
       <View>
        <TouchableOpacity
        onPress={showDatepicker}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Text>{value.getFullYear}</Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignContent:'center', backgroundColor:'#f35454', height:height, width:width}}>
        
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
