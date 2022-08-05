import React, { useState } from 'react';
import { Image, Alert, View, TouchableOpacity, Text } from 'react-native';
import Style from '../style';
const LoginInicial = ({route, navigation }) => {
  return (
      <View style={Style.Container}>
          <Image style={Style.Logo}
            source={require("../assets/Logo.png")}
          />
      <View style={Style.ContainerFollow1}>
        <Text style={Style.FontText01}> Escolha uma das opções abaixo: </Text>
      </View>
        <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
          <Text style={Style.FontText02}>Sou um cliente </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginLoja')}>
          <Text style={Style.FontText02}>Possuo uma loja </Text>
        </TouchableOpacity>
        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
      </View>
  );
}
export default LoginInicial;