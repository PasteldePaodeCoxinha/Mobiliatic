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

const ConfiguracoesCliente = ({ navigation }) => {
  const [id, setId] = useState();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sexo, setSexo] = useState('');
  const [date, setDate] = useState('');
  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [Atualizar, definirAtualizar] = useState(false);
  
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }

  async function alterar() {
    setLoading(true);
    var url = 'https://mobiliatic2.000webhostapp.com/Cliente/Alterar.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body: JSON.stringify({
        id:id,
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        sexo:sexo,
        date:date,
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
    var url = 'https://mobiliatic2.000webhostapp.com/Cliente/Consultar.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body: JSON.stringify({ cpf: cpf }),
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
          alert('Informação não econtrada!');
        else {
          setId(responseJson.informacoes[0].id);
          setNome(responseJson.informacoes[0].nome);
          setEmail(responseJson.informacoes[0].email);
          setDate(responseJson.informacoes[0].date);
          setSexo(responseJson.informacoes[0].sexo);
          setSenha(responseJson.informacoes[0].senha);
          
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
    if (id > 0) {
      setLoading(true);
      var url = 'https://mobiliatic2.000webhostapp.com/Cliente/Delete.php';
      var wasServerTimeout = false;
      var timeout = setTimeout(() => {
        wasServerTimeout = true;
        alert('Tempo de espera para busca de informações excedido');
      }, timeOut);

      const resposta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({id: id}),
        headers: {'Content-Type': 'application/json'},
      })
      .then((response) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {return response.json();}
      })
      .then((responseJson) => {
        setId(0);
        setNome('');
        setCpf('');
        setDate('');
        setEmail('');
        setSexo('');
        setSenha('');
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
      <View style={Style.ContainerCenter}>
        {loading ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        <View style={Style.Container2}>
          
          <Text style={Style.FontText01}>id: {id}</Text>

          <TextInput
            style={Style.Input02}
            placeholder="Nome"
            placeholderTextColor='#8b8b8c'
            onChangeText={(text) => setNome(text)}
            value={nome}
          />

          <TextInput
            style={Style.Input02}
            placeholder="CPF"
            placeholderTextColor='#8b8b8c'
            onChangeText={(text) => setCpf(text)}
            value={cpf}
          />

          <TextInput
            style={Style.Input02}
            placeholder="Email"
            placeholderTextColor='#8b8b8c'
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <TextInput
            style={Style.Input02}
            placeholder="Data de Nascimento"
            placeholderTextColor='#8b8b8c'
            onChangeText={(text) => setDate(text)}
            value={date}
          />

          <TextInput
            style={Style.Input02}
            placeholder="Sexo"
            placeholderTextColor='#8b8b8c'
            onChangeText={(text) => setSexo(text)}
            value={sexo}
          />

          <TextInput
            style={Style.Input02}
            placeholder="Senha"
            placeholderTextColor='#8b8b8c'
            onChangeText={(text) => setSenha(text)}
            value={senha}
            secureTextEntry={true}
          />
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
    </ScrollView>
  );
};
export default ConfiguracoesCliente;