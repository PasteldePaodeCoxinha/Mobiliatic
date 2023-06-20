import React, { useState } from 'react';
import {
  Image,
  Picker,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Style from '../../style'
import ListaEstado from "./ListaEstado"

const CadastroLoja= ({ route, navigation }) => {
    ////////////////////
   /////CONSTANTS//////
  ////////////////////
  const [nomeLoja, setNomeLoja] = useState('')
  const [emailLoja, setEmailLoja] = useState('')
  const [cnpj, setcnpj] = useState('')
  const [cep, setCep] = useState('')
  const [senhaLoja, setsenhaLoja] = useState('')
  const [timeOut, setTimeOut] = useState(10000)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [Atualizar, definirAtualizar] = useState(false);
  const [viewSelecionarEndereco, setViewSelecionarendereco] = useState(false)

//Função para a visualização da lista de estados
  function selecionarListaEndereco(v) {
    setViewSelecionarendereco(v)
  }

//Função de atualização (incompleto)
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }


//Função de cadastro de loja
async function CadastrarLoja() {
    setLoading(true);

    var url = 'https://mobiliatic2.000webhostapp.com/Loja/Insert.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    
    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body:JSON.stringify({
      nomeLoja: nomeLoja, 
      emailLoja:emailLoja,
      cnpj:cnpj,
      estado:global.idEstado,
      cep:cep,
      senhaLoja:senhaLoja
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
        
         alert(responseJson.informacoes[0].msg)
         navigation.navigate('ConfiguracoesLoja')
         
      })
      //se ocorrer erro na requisição ou conversãok
      .catch((error) => {
        timeout && clearTimeout(timeout);
      });

    setLoading(false);
  }
 

  return(
    <ScrollView style={Style.Container}
      refreshControl={
        //ATUALIZAR
        <RefreshControl
          refreshing={Atualizar}
          onRefresh={aoAtualizar}
          colors={['#C29E5B']}/>
    }>
    {/*Caso viewSelecionarEndereco for falso mostar a tela de cadastro*/}
    {!viewSelecionarEndereco ? (
      <View style={Style.ContainerCenter}>
        <Text style={Style.FontText01}>Cadastro</Text>

        {/*NOME DA LOJA*/}
        <TextInput style={Style.Input02} 
          placeholder={'Nome da loja'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setNomeLoja(text)}}
          value={nomeLoja}/>

        {/*EMAIL DA LOJA*/}
        <TextInput style={Style.Input02} 
          placeholder={'Email'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setEmailLoja(text)}}
          value={emailLoja}/>

        {/*CNPJ*/}
        <TextInput style={Style.Input02} 
          placeholder={'CNPJ'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setcnpj(text)}}
          value={cnpj}/>

        {/*Mostra a lista de estados tornando o viewSelecionarEndereco=true*/}
        <TouchableOpacity style={Style.Button01}
          onPress={() => selecionarListaEndereco(true)}>              
          <Text style={Style.FontText02}>Selecionar um estado</Text>
        </TouchableOpacity>
        <Text style={Style.FontText03}>Estado selecionado: {global.nomeEstado}</Text>

          {/*CEP DA LOJA*/}
          <TextInput style={Style.Input02} 
          placeholder={'CEP'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setCep(text)}}
          value={cep}/>

        {/*Senha da conta*/}
        <TextInput style={Style.Input02} 
          placeholder={'senha'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setsenhaLoja(text)}}
          value={senhaLoja}
          secureTextEntry={true}/>

        {/*Confirmaçõa da senha*/}
        <TextInput style={Style.Input02} 
          placeholder={'Confirmar senha'}/>

        {/*Botão de cadastrar*/}
        <TouchableOpacity style={Style.Button01}
          onPress={() => CadastrarLoja()}>              
          <Text style={Style.FontText02}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
      </View>
      ) : (
        <View>

        {/*Lista de estados */}
        <ListaEstado></ListaEstado>

        {/*Botão que volta para a tela de cadastro tornando viewSelecionarEndereco=false*/}
        <TouchableOpacity style={Style.Button01}
          onPress={() => selecionarListaEndereco(false)}>              
          <Text style={Style.FontText02}>Voltar para cadastro</Text>
        </TouchableOpacity>
        </View>
        
      )}
    </ScrollView>
  )
 }
 export default CadastroLoja;