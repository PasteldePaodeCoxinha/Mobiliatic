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
  Button,
} from 'react-native';
import Style from '../../style'
//import DatePicker from 'react-native-date-picker'

const CadastroCliente = ({ route, navigation }) => {

    ////////////////////
   /////CONSTANTS//////
  ////////////////////
const [nome, setNome] = useState('');
const [cpf, setCpf] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [sexo, setSexo] = useState('');
const [date, setDate] = useState('');

const [open, setOpen] = useState(false)

const [timeOut, setTimeOut] = useState(10000);
const [loading, setLoading] = useState(false);
const [msg, setMsg] = useState('');

//Função de atualização (incompleto)
  const [Atualizar, definirAtualizar] = useState(false);
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }

//Função de cadastro do cliente
  async function CadastrarCliente() {
    setLoading(true);

    // faz um fetch (requisição htpp ao script que está encarregado de
    // realizar a consulta de inf. no banco de dados)
    //... creating config obj here (not relevant for this answer)

    var url = 'https://mobiliatic2.000webhostapp.com/Cliente/Insert.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    
    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body:JSON.stringify({
      nome: nome, 
      cpf:cpf,
      date:date,
      email:email,
      sexo:sexo,
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
        
         alert(responseJson.informacoes[0].msg)
         navigation.navigate('PerfilCliente')
        
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
      <View style={Style.ContainerCenter}>
        <Text style={Style.FontText01}>Cadastro</Text>

        {/*NOME DO CLIENTE*/}
        <TextInput style={Style.Input02} 
          placeholder={'Nome Completo'}
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setNome(text)}}
          value={nome} />

        {/*CPF DO CLIENTE*/}
        <TextInput style={Style.Input02} 
          placeholder={'CPF'} 
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setCpf(text)}}
          value={cpf}/>

        {/*DATA DE NASCIMENTO DO CLIENTE*/}
       {/* <View style={Style.ContainerDate}>
          <Button title="Open" onPress={() => setOpen(true)} />
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
        </View>*/}

        {/*EMAIL DO CLIENTE*/}
        <TextInput style={Style.Input02} 
          placeholder={'E-mail'} 
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setEmail(text)}}
          value={email}/>

        {/*SELEÇÃO DO SEXO DO CLIENTE*/}
        {/*<View style={Style.ConteinerGenderBox}>
          <View style={Style.ConteinerGenderBox1}>
            <Picker selectedValue={sexo}
              style={Style.GenderBox}
              onValueChange={(value, itemIndex) => setSexo(value)}>
              <Picker.Item label='Selecione um Sexo:' value=''/>
              <Picker.Item label='Masculino' value='Masculino' />
              <Picker.Item label='Feminino' value='Feminino' />
            </Picker>
          </View>
          <View style={Style.ConteinerGenderBox2}>
            <Image style={Style.ImageGenderDropdown}
              source={require('../../Icons/genderdropdown_icon.png')}/>
          </View>
        </View>*/}

        {/*SENHA DO CLIENTE*/}
        <TextInput style={Style.Input02} 
          placeholder={'Senha'} 
          placeholderTextColor='#8b8b8c'
          onChangeText={(text) => {setSenha(text)}}
          value={senha}
          secureTextEntry={true}/>

        {/*CONFIRMAÇÃO DA SENHA*/}
        <TextInput style={Style.Input02} 
          placeholder={'Confirmar senha'} 
          placeholderTextColor='#8b8b8c'
          secureTextEntry={true}/>

        {/*BOTÃO DE CADASTRO*/}
        <TouchableOpacity style={Style.Button01}
          onPress={() => CadastrarCliente()}>              
          <Text style={Style.FontText02}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
      </View>
    </ScrollView>
  )
 }

 export default CadastroCliente;
 