import React, { useState } from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Style from '../style';
const LoginInicial = ({route, navigation }) => {
  const [Atualizar, definirAtualizar] = useState(false);
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
    }
  return (
    <ScrollView style={Style.Container}
      refreshControl={
        //REFRESH
        <RefreshControl
          refreshing={Atualizar}
          onRefresh={aoAtualizar}
          colors={['#C29E5B']}/>
      }>
      <View style={Style.ContainerCenter}>
        {/*IMAGEM LOGO*/}
        <Image style={Style.Logo} source={require("../assets/Logo.png")}/>
        {/*TEXTO ESCOLHA*/}
        <View style={Style.ContainerFollow1}>
          <Text style={Style.FontText01}> Escolha uma das opções abaixo: </Text>
        </View>
        {/*ESCOLHA CLIENTE*/}
        <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
          <Text style={Style.FontText02}>Sou um cliente </Text>
        </TouchableOpacity>
        {/*ESCOLHA LOJA*/}
        <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginLoja')}>
          <Text style={Style.FontText02}>Possuo uma loja </Text>
        </TouchableOpacity>
        {/*COPYRIGHT*/}
        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
      </View>
    </ScrollView>
  );
}
export default LoginInicial;