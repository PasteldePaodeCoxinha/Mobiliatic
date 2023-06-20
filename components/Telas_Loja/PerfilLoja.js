import React, { useState } from 'react';
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
const PerfilLoja = ({route, navigation }) => {
  const [Atualizar, definirAtualizar] = useState(false);
  const[showConfigs, changeShowConfigs] = useState('');

  const aoAtualizar = () => {
    definirAtualizar(true);
    alert('Você atualizou :0')
    definirAtualizar(false);
  }

  return (
    <SafeAreaView  style={Style.Container}>
      <ScrollView
        refreshControl={
          //REFRESH
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
          <Modal visible={showConfigs} transparent onRequestClose={() => changeShowConfigs(false)}>
            {/*FOLLOW*/}
            <View style={Style.ContainerModal}>
              {/*SEGUIDORES*/}
              <View style={Style.ContainerModal1}>
                <TouchableOpacity  style={Style.ButtonGear2} onPress={() => changeShowConfigs(false)}>
                  <Image style={Style.ImageGearButton} source={require('../../Icons/gear_icon.png')}/>
                </TouchableOpacity>
              <Text style={Style.FontText01}> Configurações </Text>
            <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={Style.FontText02}> Conta </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={Style.FontText02}>Privacidade </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={Style.FontText02}> Anúncios </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={Style.FontText02}> Notificações </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={Style.FontText02}> Acessibilidade </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.Button01} onPress={() => navigation.navigate('LoginCliente')}>
              <Text style={Style.FontText02}> Sobre </Text>
            </TouchableOpacity>
              </View>
              {/*SEGUINDO*/}
              <View style={Style.ContainerModal2}>
              </View>
            </View>
          </Modal>
          {/*Navbar*/}
          <View style={Style.ContainerPerfil}>
            <View style={{marginLeft: 25}}>
              <Image style={Style.Perfil} source={require('../../assets/ImgUser.png')}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('LoginCliente')}>
              <Image style={Style.ButtonPerfil} source={require('../../Icons/plusadd_icon.png')}/>
            </TouchableOpacity>
          </View>
          {/*Navbar*/}
          <View style={Style.ContainerUsername}>
            <View style={Style.InputOrTextUsername}>
              <Text style={Style.FontText05}> User_01</Text>
            </View>
            <View style={Style.ButtonUsername}>
              <TouchableOpacity onPress={() => navigation.navigate('LoginCliente')}>
                <Image style={Style.ImagePencilEdit} source={require("../../Icons/penciledit_icon.png")}/>  
              </TouchableOpacity>
            </View>
          </View>
          {/*Navbar*/}
          <View style={Style.ContainerAdress}>
            <View style={Style.InputOrTextAdress}>
              <Text style={Style.FontText06}> SP</Text>
              <Text style={Style.FontText06}> São José dos Campos</Text>
            </View>
            <View style={Style.ButtonUsername}>
              <TouchableOpacity onPress={() => navigation.navigate('LoginCliente')}>
                <Image style={Style.ImagePencilEdit} source={require("../../Icons/penciledit_icon.png")}/>  
              </TouchableOpacity>
            </View>
          </View>
          {/*Navbar*/}
          <View style={Style.ContainerPublication}>
                <Image style={Style.ImagePublicationUser}
                  source={require("../../assets/ImgUser.png")}
                />
            <View style={Style.ContainerPublication1}>
              <Text style={Style.TextUsername}>User_01</Text>
              <Text style={Style.TextPublication}>21 min.</Text>
            </View>
            <View style={Style.ContainerPublication2}>
            <Text style={Style.TextPublication}>Fazemos móveis planejados com MDF a partir de R$124,99.</Text>
            </View>
            <View style={Style.ContainerCarousel1}>
              <ScrollView horizontal>
              <Image source={require("../../assets/ImgUser.png")}/>
              <Image source={require("../../assets/ImgUser.png")}/>
              <Image source={require("../../assets/ImgUser.png")}/>
              </ScrollView>
            </View>
          </View>
          {/*Navbar*/}
          <View style={Style.ContainerPosts}>
            <TextInput style={Style.InputPosts} placeholder={'Faça uma postagem...'}/>
            <Image style={Style.ImagePosts}  source={require("../../Icons/camera_icon.png")}/>
            <Image style={Style.ImagePosts} source={require("../../Icons/photo_icon.png")}/>
            <Image style={Style.ImagePosts} source={require("../../Icons/pencil_icon.png")}/>
          </View>
        </View>
      </ScrollView>
      
          {/*FOOTER*/}
            <View style={Style.Footer}>
              <View style={Style.ContainerMainButtons}>
                {/*Botão de pesquisa*/}
                <TouchableOpacity onPress={() => navigation.navigate('Configuracoes')}>
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
export default PerfilLoja;