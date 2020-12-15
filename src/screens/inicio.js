import React, {useState, Fragment} from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const { height, width } = Dimensions.get('window');

export default function inicio() {
  //Constantes que determinan los valores a mostrar
  const [prediccion, setPrediccion] = useState('');
  const [mes, setMes] = useState('');
  const [primerDia, setPrimerDia] = useState('');
  const [segundoDia, setSegundoDia] = useState('');
  const [tercerDia, setTercerDia] = useState('');
  const [cuartoDia, setCuartoDia] = useState('');
  const [quintoDia, setQuintoDia] = useState('');
  const [sextoDia, setSextoDia] = useState('');
  const [septimoDia, setSeptimoDia] = useState('');
  const [size, setSize] = useState(15);
  const [padding, setPadding] = useState(20);
  const [top, setTop] = useState(13);
  const [value, setValue] = useState('Que Fecha comenzo su ultimo periodo. →');
  const [consejo, setConsejo] = useState('');
  const [date, setDate] = useState(new Date(2020,11,15));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //Cambiar la fecha una vez que el usuario escoja una
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const replace = String(currentDate);
    setValue(replace.replace("00:00:00 GMT-0600 (CST)"," "));
    const mesDiaAñoText = replace.replace("00:00:00 GMT-0600 (CST)"," ");
    mesPrediccion(mesDiaAñoText.substring(4,7), mesDiaAñoText.substring(8,10));
    setSize(24);
    setPadding(100);
    setTop(5);
  };
  //Determinar el modo que mostrara el calendario (con o sin tiempo)
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  
  //Determina que el metodo a utilizar es unicamente fechas
  const showDatepicker = () => {
    showMode('date');
  };
  //Calculo de las fechas en las que vendra el periodo
  const mesPrediccion = (mesCambio, diaCambio) =>{
    //Identificar el numero del mes
    if (mesCambio === 'Jan'){
      setPrediccion(1)
    }else if(mesCambio === 'Feb'){
      setPrediccion(2)
    }else if(mesCambio === 'Mar'){
      setPrediccion(3)
    }else if(mesCambio === 'Apr'){
      setPrediccion(4)
    }else if(mesCambio === 'May'){
      setPrediccion(5)
    }else if(mesCambio === 'Jun'){
      setPrediccion(6)
    }else if(mesCambio === 'Jul'){
      setPrediccion(7)
    }else if(mesCambio === 'Aug'){
      setPrediccion(8)
    }else if(mesCambio === 'Sep'){
      setPrediccion(9)
    }else if(mesCambio === 'Oct'){
      setPrediccion(10)
    }else if(mesCambio === 'Nov'){
      setPrediccion(11)
    }else if(mesCambio === 'Dec'){
      setPrediccion(12)
    }
    if((parseInt(diaCambio)+29)-31 < parseInt(diaCambio)){
      if(prediccion == 1){
        setMes("February")
        setConsejo('Tomate el tiempo necesario para el descanso.')
      }
      if(prediccion == 3){
        setMes("April")
        setConsejo('Empieza una dieta sana y equilibrada.')
      }
      if(prediccion == 5){
        setMes("June")
        setConsejo('Hacer unos cuantos minutos de estiramientos y ejercicios físicos.')
      }
      if(prediccion == 7){
        setMes("August")
        setConsejo('Se recomienda utilizar remedios naturales para aliviar las molestias musculares.')
      }
      if(prediccion == 8){
        setMes("September")
        setConsejo('Dejar a un lado la ropa ajustada e incómoda durante los días del ciclo menstrual.')
      }
      if(prediccion == 10){
        setMes("November")
        setConsejo('Tomar vitaminas tienen un efecto directo sobre  la fatiga y te ayuda a eliminar líquidos.')
      }
      if(prediccion == 12){
        setMes("January")
        setConsejo('Date un baño relajante, esto relajara la tensión y evitara esa desagradable sensación de estar dolorida.')
      }
    }else if((parseInt(diaCambio)+29)-30 < parseInt(diaCambio)){
      if(prediccion == 4){
        setMes("May")
        setConsejo('Aplícate calor en la zona, el calor te ayudará a relajar los músculos del útero aliviando así el dolor abdominal.')
      }
      if(prediccion == 6){
        setMes("July")
        setConsejo('Masajes con aceites esenciales, date masajes circulares en el abdomen, en el sentido de las agujas del reloj.')
      }
      if(prediccion == 9){
        setMes("October")
        setConsejo('No pierdas la calma, el estrés suele cebarse en nosotras especialmente durante estos días.')
      }
      if(prediccion == 11){
        setMes("Dicember")
        setConsejo('Toma medicamentos, estas medicinas pueden ayudar a que los cólicos sean menos severos.')
      }
    }else if((parseInt(diaCambio)+29)-28 < parseInt(diaCambio)){
      if(prediccion == 2){
        setMes("March")
        setConsejo('Las menstruaciones suelen durar unos 7 días, pero pueden ser más cortas.')
      }
    }
    //Identificar el dia que inicia el periodo
    if(prediccion == 1 || prediccion == 3 || prediccion == 5 || prediccion == 7 || prediccion == 8 || prediccion == 10 || prediccion == 12){
      return setPrimerDia((parseInt(diaCambio) + 29)-31),setSegundoDia((parseInt(diaCambio) + 30)-31),setTercerDia((parseInt(diaCambio) + 31)-31),setCuartoDia((parseInt(diaCambio) + 32)-31),setQuintoDia((parseInt(diaCambio) + 33)-31),setSextoDia((parseInt(diaCambio) + 34)-31),setSeptimoDia((parseInt(diaCambio) + 35)-31)
    }else if( prediccion == 4 || prediccion == 6 || prediccion == 9 || prediccion == 11){
      return setPrimerDia((parseInt(diaCambio) + 29)-30),setSegundoDia((parseInt(diaCambio) + 30)-30),setTercerDia((parseInt(diaCambio) + 31)-30),setCuartoDia((parseInt(diaCambio) + 32)-30),setQuintoDia((parseInt(diaCambio) + 33)-30),setSextoDia((parseInt(diaCambio) + 34)-30),setSeptimoDia((parseInt(diaCambio) + 35)-30)
    }else if(prediccion == 2){
      return setPrimerDia((parseInt(diaCambio) + 29)-28),setSegundoDia((parseInt(diaCambio) + 30)-28),setTercerDia((parseInt(diaCambio) + 31)-28),setCuartoDia((parseInt(diaCambio) + 32)-28),setQuintoDia((parseInt(diaCambio) + 33)-28),setSextoDia((parseInt(diaCambio) + 34)-28),setSeptimoDia((parseInt(diaCambio) + 35)-28)
    }
  }

  return (
    <Fragment>
      <View style={{flex:1,alignContent:'center', backgroundColor:'#ea8f94', height:height, width:width}}>
        <View style={{flexDirection:'row', alignSelf:'center',marginTop:60}}>
          <Text style={{fontWeight:'bold', paddingRight:padding, fontSize:size, paddingTop:top, color:'white'}}>{value}</Text>
          <TouchableOpacity onPress={showDatepicker}>
            <FontAwesome name="calendar" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'column', marginTop:70}}>
          <Text style={{alignSelf:'center', fontSize:40, color:'white'}}>{mes}</Text>
          <Text style={{alignSelf:'center', fontSize:25, color:'white',marginTop:17, marginBottom:17}}>Dias del periodo</Text>
          <View style={{flexDirection:'row', alignSelf:'center', marginTop:20}}>
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{primerDia}</Text>
            </View >
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{segundoDia}</Text>
            </View>
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{tercerDia}</Text>
            </View>
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{cuartoDia}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', alignSelf:'center', marginTop:20}}>
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{quintoDia}</Text>
            </View>
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{sextoDia}</Text>
            </View>
            <View style={{flexDirection:'column', marginRight:15}}>
              <Entypo name="calendar" size={50} color="white" />
              <Text style={{color:'white', textAlign:'center',fontSize:22, marginTop:16,position:'absolute', width:50}}>{septimoDia}</Text>
            </View>
          </View>
          <Text style={{fontSize:24, color:'white',fontWeight:'bold',marginTop:22, marginLeft:25}}>Consejo</Text>
          <Text style={{fontSize:22, width:310, padding:10,backgroundColor:'#f1c1c5',color:'white', textAlign:'justify', alignSelf:'center', marginTop:10}}>{consejo}</Text>
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