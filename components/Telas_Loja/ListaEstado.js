import React, { Component, useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image, ScrollView
} from 'react-native';
import Style from '../../style'

const ListaEstado = ({ route, navigation }) => {
    ////////////////////
   /////CONSTANTS//////
  ////////////////////
  const [listaInfo, setListaInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeOut, setTimeOut] = useState(10000);
  const [viewImage, setViewImage] = useState(true);
  const [selecionado, setSelecionado] = useState('');
  const [imagem_selecionada, setImagemSelecionada] = useState('');

  // Armazena o nome e o id do estado escolhido em uma variavel global
  const selectState = (item) => {
      global.idEstado=item.id
      global.nomeEstado=item.nome
      alert("Escolha selecionada: "+item.nome)

  };

  // Executa a função de requisição das informçãoes da tabela de estado logo no inicio
  useEffect(() => {
    getInformacoesBD();
  }, []);

  // Requisita os cam
  async function getInformacoesBD() {
    setLoading(true);
    // endereço remoto do localhost (via ngrok)
    var url = 'https://mobiliatic2.000webhostapp.com/Endereco/Estado.php';
    // faz um fetch (requisição htpp ao script que está encarregado de
    // realizar a consulta de inf. no banco de dados)
    //... creating config obj here (not relevant for this answer)
    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      setLoading(false);
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'GET', //tipo de requisição
    })
      // quando o script php terminar de executar vai executar a próxima linha
      .then((response) => {
        timeout && clearTimeout(timeout); //If everything is ok, clear the timeout
        if (!wasServerTimeout) {
          return response.json();
        }
      }) // os dados já vieram? Converte em JSON
      .then((responseJson) => {
        // os dados já foram convertidoks
        // mostra o que obteve do banco a partir do script
        //alert(JSON.stringify(responseJson))
        setListaInfo([]);
        for (var i = 0; i < responseJson.Estados.length; i++) {
          setListaInfo((listaInfo) => {
            const list = [
              ...listaInfo,
              {
                id: responseJson.Estados[i].id,
                nome: responseJson.Estados[i].nome,
                uf: responseJson.Estados[i].uf,
              },
            ];
            return list;
          });
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
  return (
    <SafeAreaView style={Style.Container}>
 
        <View style={Style.ContainerCenter}>
          {loading ? (
            <View>
              <Text style={Style.FontText03}>
                Aguarde obtendo informações
              </Text>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          ) : (
            <Text style={Style.FontText03}>
              Selecionar um estado
            </Text>
          )}
         
          <FlatList
            data={listaInfo}
            renderItem={({ item }) => (
               
              <View
                style={{
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  borderRadius: 5,
                  backgroundColor: item.id % 2 == 0 ? '@DCDCDC' : '#C0C0C0',
                  width:250,
                }}>

                  <View style={{ padingLeft: 0 }}>
                    <TouchableOpacity onPress={() => selectState(item)}>
                      <View>                        
                        <Text style={Style.FontText02}>Id: {item.id} </Text>
                        <Text style={Style.FontText02}>Nome: {item.nome} </Text>
                        <Text style={Style.FontText02}>Sigla: {item.uf} </Text>
                      </View>
                    </TouchableOpacity>
                  </View>

              </View>
              
            )}
          />
          
        </View>
    </SafeAreaView>
  );
};

export default ListaEstado;
