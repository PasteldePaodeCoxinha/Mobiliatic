import React, { useState } from 'react';
import { Image, Alert, TextInput, View, TouchableOpacity, Text, Picker, ScrollView, DatePickerAndroid} from 'react-native';
import Style from '../../style'
import SQLite from 'react-native-sqlite-storage'
import DatePicker from 'react-native-datepicker';


const CadastroCliente = ({ route, navigation }) => { 
//constantes
const [selectedSexo, setSelectedSexo] = useState('Sexo');
const [date, setDate] = useState('09-10-2020');

  return(
    <View style={Style.Container}>
    
    <Text style={Style.FontText01}>Cadastro</Text>

    <TextInput style={Style.Input02}
    placeholder={'Nome Completo'}/>
    
    <TextInput style={Style.Input02}
    placeholder={'CPF'}/>
<View style={Style.Horizontal}>
{/*CAXINHAS*/}
    
     <DatePicker
          style={Style.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>

    <TextInput style={Style.Input02}
    placeholder={'E-mail'}/>

    <Picker
        selectedValue={selectedSexo}
        style={Style.CaxinhaSexo}
        onValueChange={(itemValue, itemIndex) => setSelectedSexo(itemValue)}>
        
      <Picker.Item label='Masculino' value='M' />
      <Picker.Item label='Feminino' value='F' />

      </Picker>

    <TextInput style={Style.Input02}
    placeholder={'Senha'}/>
    
    <TextInput style={Style.Input02}
    placeholder={'Confirmar senha'}/>

    <TouchableOpacity style={Style.Button01}>              
          <Text style={Style.FontText02}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
        </View>
  )
 }

 export default CadastroCliente;
 