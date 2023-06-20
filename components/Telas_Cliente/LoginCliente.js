import React, { useState } from 'react';
import {
  Image,
  TextInput,
  View,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Text} from 'react-native';
import Style from '../../style';

const LoginCliente = ({ route, navigation }) => {
    ////////////////////
   /////CONSTANTS//////
  ////////////////////
  const [email,setEmail]=useState("")
  const [senha,setSenha]=useState("")
  const [Atualizar, definirAtualizar] = useState(false);
  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

//Função de atualização (incompleto)
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }

//função de login
  async function Login(){
    setLoading(true);

    var url = 'https://mobiliatic2.000webhostapp.com/Cliente/Login.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    
    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body:JSON.stringify({
      email:email,
      senha:senha
      }),
      headers: {                
                'Content-Type': 'application/json',
              },
       
    })
      .then((response) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {
          return response.json();
        }
      })
      .then((responseJson) => {
        
        if(responseJson.informacoes){
          global.emailCliente = email
          navigation.navigate('PerfilCliente')
        }else{
          alert('E-mail ou senha incorretos')
        }
        
        
      })
      //se ocorrer erro na requisição ou conversão
      .catch((error) => {
        console.log(error)
        timeout && clearTimeout(timeout);
      });

    setLoading(false);
  }

  return (
    <ScrollView  style={Style.Container}
      refreshControl={
        <RefreshControl
          //ATUALIZAR
          refreshing={Atualizar}
          onRefresh={aoAtualizar}
          colors={['#C29E5B']}/>
      }>
      <View style={Style.ContainerCenter}>
        {/*IMAGEM LOGO*/}
        <Image style={Style.Logo} source={require("../../assets/Logo.png")}/>
        <Text style={Style.BaseText1}> Login </Text>

        {/*EMAIL*/}
        <TextInput style={Style.Input01}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={'E-mail'}
        />

        {/*SENHA*/}
        <TextInput style={Style.Input01}
          value={senha}
          onChangeText={(senha) => setSenha(senha)}
          placeholder={'Senha'}
          secureTextEntry={true}
        />

        {/*TEXTO 1 CADASTRO*/}
        <Text style={Style.FontText03}>Não possui uma conta?</Text>

        {/*BOTÃO CADASTRO*/}
        <TouchableOpacity onPress={() => navigation.navigate('CadastroCliente')}>
          <Text style={Style.FontText04}>Cadastre-se.</Text>
        </TouchableOpacity>

        {/*BOTÃO LOGIN*/}
        <TouchableOpacity style={Style.Button01} onPress={(Login)}>              
          <Text style={Style.FontText02}>LOGIN</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}
export default LoginCliente;