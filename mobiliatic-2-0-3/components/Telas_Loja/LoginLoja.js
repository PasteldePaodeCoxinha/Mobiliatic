import React, { useState } from 'react';
import { Image, Alert, TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Style from '../../style';
const LoginLoja = ({ route, navigation }) => { 
//ADVINHA?????CONSTANTES 
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  //METODO DE CORNO PARA FAZER LOGIN
  function onLogin(){
    if ((username=='user01' || username=='user01@email.com')&&(password=='123'))
        navigation.navigate('PermissoesLoja') + alert("penes")
    else
        alert("Não permitido")    
  }
  return ( 
    <ScrollView style={Style.Container}>     
      <View style={Style.Container}>
        <View>
        
        {/*IMAGEM DA LOGO LINDA*/}
          <Image style={Style.Logo} 
            source={require("../../assets/Logo.png")}
          />
        </View>
        <Text style={Style.BaseText1}>Login</Text>
        
        {/*USERNAME LEGAL*/}
        <TextInput style={Style.Input01}
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder={'Nome de Usuário ou E-mail'}
        />
        
        {/*SENHA INUTIL*/}
        <TextInput style={Style.Input01}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Senha'}
          secureTextEntry={true}
        />
        
        {/*IR PARA CADASTRO*/}
        <View style={Style.Meio}>
        <Text style={Style.FontText03}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CadastroLoja')}>
        <Text style={Style.FontText04}>Cadastre-se.</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={Style.Button01} onPress={() => onLogin()}>              
          <Text style={Style.FontText02}>LOGIN </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
}
export default LoginLoja;