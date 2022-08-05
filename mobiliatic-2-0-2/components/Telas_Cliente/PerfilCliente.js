import React, { useState } from 'react';
import { Image, Alert, View, Pressable, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from '../../style';
const PerfilCliente = ({route, navigation }) => {
  return (      
      <View style={Style.Container}>
        {/*Luiz grande*/}
        <View style={Style.ContainerPerfil}>
          <Image style={Style.Perfil}
            source={require('../../assets/ImgUser.png')}/>
          <Pressable 
            onPress={() => navigation.navigate('LoginLoja')}>
            <Image style={Style.ButtonPerfil}
              source={require('../../assets/ImgUser.png')}
            />
          </Pressable>
        </View>

        {/*username do Luiz*/}
        <View style={Style.ContainerUsername}>
          <View style={Style.InputOrTextUsername}>
            <Text style={Style.FontText05}> User_01</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('LoginLoja')}>
            <Image style={Style.ButtonUsername} 
              source={require("../../assets/ImgUser.png")}
            />
          </Pressable>
        </View>

        {/*seguidores e seguindo do Luiz*/}
        <View style={Style.ContainerFollow}>
          <View style={Style.ContainerFollow1}>
            <Text style={Style.FontText05}> 100</Text>
            <Text style={Style.FontText05}> Seguidores</Text>
          </View>
          <View style={Style.ContainerFollow2}>
            <Text style={Style.FontText05}> 120</Text>
            <Text style={Style.FontText05}> Seguindo</Text>
          </View>
        </View>

        {/*Luiz submissões*/}
        <View style={Style.ContainersubmissionsAndPosts}>
          <Text style={Style.FontText05}> Submissões</Text>
          <Pressable onPress={() => navigation.navigate('LoginLoja')}>
            <Image style={Style.ButtonSubmissions}
              source={require("../../assets/ImgUser.png")}
            />
          </Pressable>
        </View>

        
        {/*Luiz postagens*/}
        <View style={Style.ContainersubmissionsAndPosts}>
          <TextInput style={Style.InputPosts} placeholder={'Faça uma postagem...'}/>
          <Image style={Style.ImagePosts}  source={require("../../assets/ImgUser.png")}/>
          <Image style={Style.ImagePosts} source={require("../../assets/ImgUser.png")}/>
          <Image style={Style.ImagePosts} source={require("../../assets/ImgUser.png")}/>
        </View>

        {/*Luiz Botões principais*/}
        <View style={Style.ContainerMainButtons}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginLoja')}>
              <Image style={Style.ImageMainButtons}  source={require('../../assets/ImgUser.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginLoja')}>
              <Image style={Style.ImageMainButtons}  source={require('../../assets/ImgUser.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginLoja')}>
              <Image style={Style.ImageMainButtons1} source={require('../../assets/ImgUser.png')}/>
              </TouchableOpacity>
        </View>
        <Text style={Style.FontCopyright1}>  © Mobiliatic  </Text>
      </View>
  );
}
export default PerfilCliente;