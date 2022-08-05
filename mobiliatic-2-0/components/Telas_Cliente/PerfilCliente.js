import React, { useState } from 'react';
import { Image, Alert, View, TouchableOpacity, Text, TextInput} from 'react-native';
import Style from '../../style';
const PerfilCliente = ({route, navigation }) => {
  return (      
      <View style={Style.Container}>
        {/*Luiz grande*/}
        <View style={{alignItems: 'center',
          display: 'flex', 
          flexDirection: 'row', 
          flexWrap: 'wrap',
          marginBottom:20,
          justifyContent: 'center'}}>

          <Image style={{borderRadius: '50%',
            height:150,
            width:150}} 
            source={require('../../assets/ImgUser.png')}/>

          <TouchableOpacity 
            onPress={() => navigation.navigate('LoginLoja')}>

            <Image style={{height:32, 
              width:35,
              borderColor:'#C29E5B',
              borderRadius: '50%',
              borderWidth: 7,
              marginLeft:-25,
              marginTop:-70,}}
              source={require('../../assets/ImgUser.png')}
            />

          </TouchableOpacity>

        </View>

        {/*username do Luiz*/}
        <View style={{alignItems: 'center',
          display: 'flex',
          flexDirection: 'row', 
          flexWrap: 'wrap',
          marginBottom:20,
          justifyContent: 'center'}}>

          <View style={{backgroundColor: '#E5D2AF',
            alignItems: 'center',
            paddingTop: 3.5,
            height:30,
            width:170}}>

            <Text style={{fontWeight: 'bold',
              fontSize:17,
              fontFamily:'century gothic',
              color: 'black'}}> User_01</Text>

          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('LoginLoja')}>

            <Image style={{height:32, 
              width:35,
              borderColor:'#C29E5B',
              borderRadius: '50%',
              borderWidth: 7,
              marginLeft:-15,
              marginTop: -30,}} 
              source={require("../../assets/ImgUser.png")}
            />

          </TouchableOpacity>
        </View>

        {/*seguidores e seguindo do Luiz*/}
        <View style={{alignItems: 'center',
            display: 'flex',
            flexDirection: 'row', 
            flexWrap: 'wrap',
            marginBottom: 30,
            justifyContent: 'center'}}>

          <View style={{alignItems: 'center',
            display: 'flex',
            flexDirection: 'column', 
            flexWrap: 'wrap',
            justifyContent: 'center'}}>

            <Text style={{fontWeight: 'bold', 
              fontSize: 17,
              fontFamily:'century gothic',
              color: 'black'}}> 100</Text>

            <Text style={{fontWeight: 'bold',
              fontSize: 17,
              fontFamily:'century gothic',
              color: 'black',}}> Seguidores</Text>

          </View>

          <View style={{alignItems: 'center',
            display: 'flex',
            flexDirection: 'column', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginLeft: 20}}>

            <Text style={{fontWeight: 'bold', 
              fontSize: 17,
              fontFamily:'century gothic',
              color: 'black'}}> 120</Text>

            <Text style={{fontWeight: 'bold',
              fontSize: 17,
              fontFamily:'century gothic',
              color: 'black',}}> Seguindo</Text>

          </View>

        </View>
        {/*Luiz submissões*/}
        <View style={{display: 'flex',
            flexDirection: 'row', 
            flexWrap: 'wrap',
            marginBottom: 20,
            justifyContent: 'center'}}>

          <Text style={{fontSize: 17,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'century gothic'}}> Submissões</Text>

          <Image style={{height: 35,
            marginLeft: 120,
            marginTop: -5,
            width: 35}}
            source={require("../../assets/ImgUser.png")}
          />

        </View>

        {/*carrossel poggers*/}
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', 
            fontSize: 14.5,
            marginBottom: 20,
            fontFamily:'century gothic', 
            color: 'black'}}> Carrosel :0</Text>

        </View>
        {/*Luiz postagens*/}
        <View style={{justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 20,
          flexWrap: 'wrap',}}>

          <TextInput style={{width: 270,
            height: 24,
            padding: 10,
            backgroundColor: '#E5D2AF', 
            textAlign: 'left',
            shadowRadius:3,
            marginRight: -110,
            shadowOpacity:0.5}}
            placeholder={'Faça uma postagem...'}/>

          <Image style={{height: 20,
            marginRight: 20,
            marginTop:  2,
            width: 20}} 
            source={require("../../assets/ImgUser.png")}
          />

          <Image style={{height: 20,
            marginRight: 20,
            marginTop:  2,
            width: 20}} 
            source={require("../../assets/ImgUser.png")}
          />

          <Image style={{height: 20, 
            marginTop: 2,
            width: 20}} 
            source={require("../../assets/ImgUser.png")}
          />

        </View>

        {/*Luiz Botões principais*/}
        <View style={{display: 'flex',
            flexDirection: 'row', 
            flexWrap: 'wrap',
            marginTop: 60,
            justifyContent: 'center'}}>

            <TouchableOpacity 
              onPress={() => navigation.navigate('LoginLoja') }>

              <Image style={{height:32, 
                width: 35,
                marginRight: 70,}}
                source={require('../../assets/ImgUser.png')}
              />

            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => navigation.navigate('LoginLoja')}>

              <Image style={{height: 32,
                marginRight: 70, 
                width: 35}}
                source={require('../../assets/ImgUser.png')}
              />

            </TouchableOpacity>
            
            <View style={{display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginLoja')}>
                <Image style={{height: 32, 
                  width: 35}}
                  source={require('../../assets/ImgUser.png')}
                />
              </TouchableOpacity>
              <Text style={{height: 18, 
              width: 18,
              paddingLeft: 5,
              paddingRight: 10,
              paddingBottom: 13,
              borderColor:'#C29E5B',
              borderRadius: '50%',
              fontSize: 10,
              fontFamily:'century gothic', 
              borderWidth: 3,
              marginTop: -2}}>1</Text>
            </View>
        </View>
        <Text style={Style.FontCopyright}>  © Mobiliatic  </Text>
      </View>
  );
}
export default PerfilCliente;