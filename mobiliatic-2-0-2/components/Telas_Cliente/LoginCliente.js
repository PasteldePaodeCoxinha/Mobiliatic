import React, { useState } from 'react';
import { Image, Alert, TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Style from '../../style';
import SQLite from 'react-native-sqlite-storage'
const LoginCliente = ({ route, navigation }) => {  
//MAIS UMA CONSTANTE
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  
  //FUNÇÃO TEMPORARIA PARA FAZER LOGIN
  function onLogin(){
    if ((username=='user01' || username=='user01@email.com')&&(password=='123'))
        navigation.navigate('PerfilCliente')
    else
        alert("Não permitido")    
  }

  const mudarUsername = () =>{
    setUsername(username)
  }
  
  return (      
      <View style={Style.Container}>
        <View>
        {/*IMAGEM DE LOGO*/}
          <Image style={Style.Logo} 
            source={require("../../assets/Logo.png")}
          />
        </View>
        {/*USERNAME DO HACKER*/}
        <Text style={Style.BaseText1}>Login</Text>
        <TextInput style={Style.Input01}
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder={'Nome de Usuário ou E-mail'}
        />
        {/*SENHA*/}
        <TextInput style={Style.Input01}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Senha'}
          secureTextEntry={true}
        />
        {/*TELA DE CADASTRO*/}
        <View style={Style.Meio}>
        <Text style={Style.FontText03}>Não possui uma conta?</Text> 
        <TouchableOpacity onPress={() => navigation.navigate('CadastroCliente')}>
        <Text style={Style.FontText04}>Cadastre-se.</Text></TouchableOpacity>
        </View>
        
        <TouchableOpacity style={Style.Button01} onPress={() => onLogin()}>              
          <Text style={Style.FontText02}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
        </View>
  );
}
export default LoginCliente;