import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import Style from '../../style';
import ListaEstado from "./ListaEstado"

const ConfiguracoesLoja = ({ navigation }) => {
  const [idLoja, setIdLoja] = useState('')
  const [nomeLoja, setNomeLoja] = useState('')
  const [emailLoja, setEmailLoja] = useState('')
  const [cnpj, setcnpj] = useState('')
  const [cep, setCep] = useState('')
  const [senhaLoja, setsenhaLoja] = useState('')
  
  const [timeOut, setTimeOut] = useState(10000)
  const [loading, setLoading] = useState(false)
  const [Atualizar, definirAtualizar] = useState(false)
  const [msg, setMsg] = useState('')
  const [viewSelecionarEndereco, setViewSelecionarendereco] = useState(false)

  function selecionarListaEndereco(v) {
    setViewSelecionarendereco(v);
  }

//Função de atualização (incompleto)
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }

  async function alterar() {
    setLoading(true);
    var url = 'https://mobiliatic2.000webhostapp.com/Loja/Alterar.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body: JSON.stringify({
        
      idLoja: idLoja,
      nomeLoja: nomeLoja, 
      emailLoja: emailLoja,
      cnpj: cnpj,
      estado: global.idEstado,
      cep: cep,
      senhaLoja: senhaLoja
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
        alert(responseJson.informacoes[0].msg);
      })
      //se ocorrer erro na requisição ou conversãok
      .catch((error) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {
          //Error logic here
        }

        //  alert('erro'+error)
      });

    setLoading(false);
  }


   async function consultar() {
    setLoading(true);
    var url = 'https://mobiliatic2.000webhostapp.com/Loja/Consultar.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {

      method: 'POST', //tipo de requisição
      body: JSON.stringify({ cnpj: cnpj }),
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
        if (responseJson.informacoes[0].id == 0)
         {
          //alert('Informação não econtrada!');
          alert(JSON.stringify(responseJson))
         }
        else {
          setIdLoja(responseJson.informacoes[0].id);
          setNomeLoja(responseJson.informacoes[0].nomeLoja);
          setEmailLoja(responseJson.informacoes[0].emailLoja);
          setCep(responseJson.informacoes[0].cep);
          setsenhaLoja(responseJson.informacoes[0].senhaLoja);

          global.nomeEstado = responseJson.informacoes[0].nomeEstado;
    }
      })
      //se ocorrer erro na requisição ou conversãok
      .catch((error) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {
          //Error logic here
        }

        //  alert('erro'+error)
      });

    setLoading(false);
  }

  async function excluir() {
    if (idLoja > 0) {
      setLoading(true);
      var url = 'https://mobiliatic2.000webhostapp.com/Loja/Delete.php';
      var wasServerTimeout = false;
      var timeout = setTimeout(() => {
        wasServerTimeout = true;
        alert('Tempo de espera para busca de informações excedido');
      }, timeOut);

      const resposta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({idLoja: idLoja}),
        headers: {'Content-Type': 'application/json'},
      })
      .then((response) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {return response.json();}
      })
      .then((responseJson) => {
        setIdLoja(0);
        setNomeLoja('');
        setEmailLoja('');
        setcnpj('');
        setCep('');
        setsenhaLoja('');
        alert(responseJson.informacoes[0].msg);
      })
      .catch((error) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {
          //Error logic here
        }
      });
      setLoading(false);
    }
    else {alert('Realizar consulta')}
  }

  return (
    <ScrollView style={Style.Container}
      refreshControl={
        <RefreshControl
          refreshing={Atualizar}
          onRefresh={aoAtualizar}
          colors={['#C29E5B']}/>
      }>
      {!viewSelecionarEndereco ? (
      <View style={Style.ContainerCenter}>
        <Image style={Style.Perfil} source={require('../../assets/ImgUser.png')}/>
        {loading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        <View style={Style.Container2}>
          
          <Text style={Style.FontText01}>Configuracoes da loja</Text>


          <Text style={Style.FontText01}>codigo: {idLoja} </Text>

          <TextInput style={Style.Input02} 
          placeholder={'Nome Completo'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setNomeLoja(text)}}
          value={nomeLoja}/>

        {/**/}
        <TextInput style={Style.Input02} 
          placeholder={'Email'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setEmailLoja(text)}}
          value={emailLoja}/>

        {/**/}
        <TextInput style={Style.Input02} 
          placeholder={'CNPJ'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setcnpj(text)}}
          value={cnpj}/>

        {/**/}
        <TouchableOpacity style={Style.Button01}
          onPress={() => selecionarListaEndereco(true)}>              
          <Text style={Style.FontText02}>Selecionar um estado</Text>
        </TouchableOpacity>
        <Text style={Style.FontText03}>Estado selecionado: {global.nomeEstado}</Text>

          {/**/}
          <TextInput style={Style.Input02} 
          placeholder={'CEP'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setCep(text)}}
          value={cep}/>

        {/**/}
        <TextInput style={Style.Input02} 
          placeholder={'senha'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setsenhaLoja(text)}}
          value={senhaLoja}
          secureTextEntry={true}/>

          <View style={Style.ContainerConfigurations}>
              <TouchableOpacity onPress={() => consultar()}>
                <Text style={Style.FontTextConfig}>Consultar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alterar()}>
                <Text style={Style.FontTextConfig}>Alterar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluir()}>
                <Text style={Style.FontTextConfig1}>Excluir</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>

      ) : (
        <View>
        <ListaEstado></ListaEstado>

        <TouchableOpacity style={Style.Button01}
          onPress={() => selecionarListaEndereco(false)}>              
          <Text style={Style.FontText02}>Voltar para Configuracoes</Text>
        </TouchableOpacity>
        </View>
      )
      }
    </ScrollView>
  );
};
export default ConfiguracoesLoja;