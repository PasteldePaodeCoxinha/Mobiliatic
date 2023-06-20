import React, { useState, useLayoutEffect} from 'react';
import {Image,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput, 
  TouchableOpacity,
  View
} from 'react-native';
import Style from '../../style';

const PerfilCliente = ({route, navigation }) => {
    ////////////////////
   /////CONSTANTS//////
  ////////////////////
  const [Atualizar, definirAtualizar] = useState(false);
  const[showConfigs, changeShowConfigs] = useState('');
  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

//Função de atualização (incompleto)
  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }

 useLayoutEffect(() => {
    getInformacoesCliente();
  }, []);

  // Requisita os cam
  async function getInformacoesCliente() {
    setLoading(true);
    var url = 'https://mobiliatic2.000webhostapp.com/Cliente/Consultar.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body: JSON.stringify({ email: global.emailCliente}),
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
          global.idCliente = responseJson.informacoes[0].id
          
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
    <SafeAreaView  style={Style.Container}>
      <ScrollView
        refreshControl={
          //ATUALIZAR
          <RefreshControl
            refreshing={Atualizar}
            onRefresh={aoAtualizar}
            colors={['#C29E5B']}/>
      }>
        <View>
          {/*Navbar*/}
          <View style={Style.ContainerNavbar}>
              <TouchableOpacity  style={Style.ButtonGear1} onPress={() => changeShowConfigs(true)}>
                <Image style={Style.ImageGearButton} source={require('../../Icons/gear_icon.png')}/>
              </TouchableOpacity>
          </View>

          {/*Configurações*/}
          <Modal visible={showConfigs} transparent onRequestClose={() => changeShowConfigs(false)}>
            <View style={Style.ContainerModal}>
              <View style={Style.ContainerModal1}>
                {/*Botão voltar */}
                <TouchableOpacity  style={Style.ButtonGear2} onPress={() => changeShowConfigs(false)}>
                  <Image style={Style.ImageGearButton} source={require('../../Icons/gear_icon.png')}/>
                </TouchableOpacity>

                <Text style={Style.FontText01}> Configurações </Text>
                {/*Configurções da conta*/}
                <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
                  <Text style={Style.FontText02}> Conta </Text>
                </TouchableOpacity>
                {/*Configurções de privacidade*/}
                <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
                  <Text style={Style.FontText02}>Privacidade </Text>
                </TouchableOpacity>
                {/*Configurções de anúncios*/}
                <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
                  <Text style={Style.FontText02}> Anúncios </Text>
                </TouchableOpacity>
                {/*Configurções de notificções*/}
                <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
                  <Text style={Style.FontText02}> Notificações </Text>
                </TouchableOpacity>
                {/*Configurções de acessibilidade*/}
                <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
                  <Text style={Style.FontText02}> Acessibilidade </Text>
                </TouchableOpacity>
                {/*Informações sobre*/}
                <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
                  <Text style={Style.FontText02}> Sobre </Text>
                </TouchableOpacity>
              </View>
              {/*Fundo transparente*/}
              <View style={Style.ContainerModal2}>
              </View>
            </View>
          </Modal>

          {/*Area Perfil Cliente*/}

            <View style={Style.ContainerPerfil}>
              {/*Imagem perfil*/}
              <View style={{marginLeft: 25}}>
                <Image style={Style.Perfil} source={require('../../assets/ImgUser.png')}/>
              </View>
            
              {/*Botão muda imagem do perfil*/}
              <TouchableOpacity onPress={() => navigation.navigate('LoginCliente')}>
                <Image style={Style.ButtonPerfil} source={require('../../Icons/plusadd_icon.png')}/>
              </TouchableOpacity>
            </View>

              {/*Area do username*/}
            <View style={Style.ContainerUsername}>
              <View style={Style.InputOrTextUsername}>
                <Text style={Style.FontText05}>{global.emailCliente} e id: {global.idCliente}</Text>
              </View>

              <Text style={Style.FontText05}>{global.emailCliente} e id: {global.idCliente}</Text>

              {/*Botão muda username*/}
              <View style={Style.ButtonUsername}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginCliente')}>
                  <Image style={Style.ImagePencilEdit} source={require("../../Icons/penciledit_icon.png")}/>  
                </TouchableOpacity>
              </View>
            </View>

            {/*Area seguidores e seguindo*/}
            <View style={Style.ContainerFollow}>
              {/*Seguidores*/}
              <View style={Style.ContainerFollow1}>
                <Text style={Style.FontText05}> 100</Text>
                <Text style={Style.FontText05}> Seguidores</Text>
              </View>

              {/*Seguindor*/}
              <View style={Style.ContainerFollow2}>
                <Text style={Style.FontText05}> 120</Text>
                <Text style={Style.FontText05}> Seguindo</Text>
              </View>
            </View>

            {/*Area submissoes*/}
            <View style={Style.ContainerSubmissions}>
              <Text style={Style.FontText05}> Submissões</Text>
              
              {/*Botão de submissoes*/}
              <Pressable onPress={() => navigation.navigate('LoginLoja')}>
                <Image style={Style.ButtonSubmissions}
                  source={require("../../Icons/maximize_icon.png")}/>
              </Pressable>
            </View>

            {/*Área imoveis postados*/}
            <View style={Style.ContainerCarousel}>
              <ScrollView horizontal>
              <Image source={require("../../assets/ImgUser.png")}/>
              <Image source={require("../../assets/ImgUser.png")}/>
              <Image source={require("../../assets/ImgUser.png")}/>
              </ScrollView>
            </View>

            {/*Área fazer postagens*/}
            <View style={Style.ContainerPosts}>
              {/*Digitar a postagens*/}
              <TextInput style={Style.InputPosts} placeholder={'Faça uma postagem...'}/>

                <TouchableOpacity onPress={() => navigation.navigate('PerfilCliente')}>
                  <Image style={Style.ImagePosts}  source={require("../../Icons/camera_icon.png")}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PerfilCliente')}>
                  <Image style={Style.ImagePosts} source={require("../../Icons/photo_icon.png")}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PerfilCliente')}>
                  <Image style={Style.ImagePosts} source={require("../../Icons/pencil_icon.png")}/>
                </TouchableOpacity>
            </View>
          </View>          
        </ScrollView>

          {/*FOOTER*/}
            <View style={Style.Footer}>
              <View style={Style.ContainerMainButtons}>
                {/*Botão de pesquisa*/}
                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                  <Image style={Style.ImageMainButtons}  source={require('../../Icons/magnifyingglass_icon.png')}/>
                </TouchableOpacity>
                {/*Botão de homepage*/}
                <TouchableOpacity onPress={() => navigation.navigate('LoginLoja')}>
                  <Image style={Style.ImageMainButtons}  source={require('../../Icons/home_icon.png')}/>
                </TouchableOpacity>
                {/*Botão de chat*/}
                <TouchableOpacity onPress={() => navigation.navigate('LoginLoja')}>
                  <Image style={Style.ImageMainButtons1} source={require('../../Icons/message_icon.png')}/>
                </TouchableOpacity>
              </View>
           </View>
           
    </SafeAreaView>
  );
}
export default PerfilCliente;