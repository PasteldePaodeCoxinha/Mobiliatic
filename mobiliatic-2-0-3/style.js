import * as React from 'react';
import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({

  ////////////////////
 ///  CONTAINERS  ///
////////////////////
  Container: {flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#EDE6CA',
    padding: 20},
    
  Container1: {alignItems: 'center', 
    justifyContent: 'center'},

  ContainerPerfil: {alignItems: 'center',
    display: 'flex', 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginBottom:20,
    justifyContent: 'center'},

  ContainerUsername: {alignItems: 'center',
    display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginBottom:20,
    justifyContent: 'center'},

  ContainerFollow: {alignItems: 'center',
    display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginBottom: 30,
    justifyContent: 'center'},

  ContainerFollow1: {alignItems: 'center',
    display: 'flex',
    flexDirection: 'column', 
    flexWrap: 'wrap',
    justifyContent: 'center'},

  ContainerFollow2: {alignItems: 'center',
    display: 'flex',
    flexDirection: 'column', 
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 20},

  ContainersubmissionsAndPosts: {display: 'flex',
    flexDirection: 'row', 
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'center'},

  ContainerMainButtons: {justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 43,
    flexWrap: 'wrap'},

  ContainerMensagens: {justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap'},

//-------------------//
  ////////////////////
 ///  ORGANIZAÇÃO ///
////////////////////

  Horizontal: {flexDirection: "row"},
  
  Meio:{justifyContent:'center',
  alignItems:"center"},
//-------------------//
  ////////////////////
 ///    IMAGENS   ///
////////////////////
  Logo: {height: 150, 
    width: 150, 
    borderRadius: 100,
    marginTop: 5, 
    marginBottom:50},

  Perfil: {borderRadius: 50,
    height:150,
    width:150},

  ImagePosts: {height: 20,
    marginRight: 18,
    marginTop:  2,
    width: 20},

  ImageMainButtons: {height: 32,
    marginRight: 78,
    width: 35},

  ImageMainButtons1: {height: 32,
    width: 35},

//-------------------//
  ////////////////////
 ///    FONTES    ///
////////////////////
  FontText01: {fontSize: 30, 
    fontFamily:'century gothic',
    color: '#000000', 
    marginTop: 20, 
    textAlign:'center',
    justifyContent:'center'},

  FontText02: {margin: 4, 
    fontWeight: 'bold', 
    fontSize: 17,
    fontFamily:'century gothic', 
    color: 'white', 
    paddingTop: 5},

  FontText03: {margin: 4, 
    fontWeight: 'bold', 
    fontSize:14,
    fontFamily:'century gothic',
    marginVertical: 15},

  FontText04: {margin: 4, 
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily:'century gothic', 
    color: '#0057FF', 
    marginVertical: 15},

  FontText05: {fontWeight: 'bold',
    fontSize:17,
    textAlign: 'center',
    fontFamily:'century gothic'},

  FontCopyright: {fontStyle: 'italic',
    fontSize: 14,
    fontFamily:'Roboto', 
    color: '#000000', 
    marginTop: 50},

  FontCopyright1: {fontStyle: 'italic',
    fontSize: 14,
    fontFamily:'Roboto', 
    color: '#000000', 
    marginTop: 10},

  BaseText1: {fontSize: 25, 
    textAlign: 'center',
   marginBottom: 16, 
   fontFamily: 'century gothic'},

///////////////
////INPUTS/////
///////////////
  Input01: {width: 250, 
  height: 44, 
  padding: 10, 
  borderRadius:10,
  borderColor: 'Black', 
  marginBottom: 10, 
  backgroundColor: '#E5D2AF', 
  textAlign: 'center', 
  marginTop: 10,
  shadowRadius:3,
  shadowOpacity:1},
  
  Input02: {width: 250, 
    height: 24, 
    padding: 5, 
    borderRadius:10,
    borderColor: 'Black', 
    marginBottom: 20,
    backgroundColor: '#E5D2AF', 
    textAlign: 'center', 
    marginTop: 10,
    shadowRadius: 3,
    shadowOpacity: 1},

  InputPosts: {width: 270,
    height: 24,
    padding: 5,
    backgroundColor: '#E5D2AF', 
    textAlign: 'left',
    shadowRadius:3,
    marginRight: -110,
    shadowOpacity:0.5},

  InputOrTextUsername: {backgroundColor: '#E5D2AF',
    alignItems: 'center',
    paddingTop: 3.5,
    height:30,
    width:170},

//////////////
////BOTÕES////
//////////////

  Button01: {width: "100%", 
    height: 40, 
    marginTop: 30, 
    marginBottom: 10,
    borderRadius: 50, 
    backgroundColor: "#C29E5B", 
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 1},

  ButtonPerfil: {height:32, 
    width:35,
    borderColor:'#C29E5B',
    borderRadius: 50,
    borderWidth: 7,
    marginLeft:-25,
    marginTop:-70},
    
  ButtonUsername: {height:32, 
    width:35,
    borderColor:'#C29E5B',
    borderRadius: 50,
    borderWidth: 7,
    marginLeft:-15,
    marginTop: -30},
    
  ButtonSubmissions: {height: 35,
    marginLeft: 120,
    marginTop: -5,
    width: 35},

/////////////
///Dropdown//
/////////////
CaxinhaDia:{width: 50, 
  height: 24, 
  padding: 0, 
  marginBottom: 10,
  backgroundColor: '#E5D2AF', 
  textAlign: 'center',
  borderRadius: 10,
  marginRight: 5,
  shadowRadius: 3,
  shadowOpacity: 1,
  },

  CaxinhaMes:{width: 100, 
  height: 24,
  padding: 0,  
  marginBottom: 10,
  backgroundColor: '#E5D2AF', 
  textAlign: 'center',
  borderRadius: 10,
  marginRight: 5, 
  shadowRadius: 3,
  shadowOpacity: 1,
  },

  CaxinhaAno:{width: 60, 
  height: 24,
  padding: 0, 
  marginBottom: 10,
  backgroundColor: '#E5D2AF', 
  textAlign: 'center', 
  borderRadius: 10,
  shadowRadius: 3,
  shadowOpacity: 1,
  },

  CaxinhaSexo:{width: 250, 
  height: 24,
  padding: 0, 
  marginBottom: 10,
  backgroundColor: '#E5D2AF', 
  textAlign: 'center', 
  borderRadius: 10,
  shadowRadius: 3,
  shadowOpacity: 1,
  },

/////////////
////OUTROS///
/////////////

});
export default Style;