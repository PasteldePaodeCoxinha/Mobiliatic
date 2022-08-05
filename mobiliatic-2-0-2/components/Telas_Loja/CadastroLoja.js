import React, { useState } from 'react';
import { Image, Alert, TextInput, View, TouchableOpacity, Text, Picker } from 'react-native';
import Style from '../../style'
import SQLite from 'react-native-sqlite-storage'
const CadastroLoja= ({ route, navigation }) => { 

  return(
    <View style={Style.Container}>
    
    <Text style={Style.FontText01}>Cadastro</Text>

    <TextInput style={Style.Input02}
    placeholder={'Nome Completo'}/>
    
    <TextInput style={Style.Input02}
    placeholder={'E-mail'}/>
    
    <TextInput style={Style.Input02}
    placeholder={'CPNJ'}/>

    <TextInput style={Style.Input02}
    placeholder={'Estado'}/>

    <TextInput style={Style.Input02}
    placeholder={'Cidade'}/>

    <TextInput style={Style.Input02}
    placeholder={'CEP'}/>

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

 export default CadastroLoja;