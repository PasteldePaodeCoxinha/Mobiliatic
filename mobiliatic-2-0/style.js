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

  Container1: {flex: 1, 
    alignItems: 'left', 
    justifyContent: 'center', 
    backgroundColor: '#EDE6CA',
    padding: 20},
    
//-------------------//
  ////////////////////
 ///  ORGANIZAÇÃO ///
////////////////////

  Horizontal: {flexDirection: "row"},
  
  Meio:{justifyContent:'center',
  alignItems:"center",},

  Esquerda:{
    alignItems:'left'
  },
//-------------------//
  ////////////////////
 ///    IMAGENS   ///
////////////////////

  Logo: {height: 150, 
    width: 150, 
    borderRadius: 100,
    marginTop: 5, 
    marginBottom:50},

//-------------------//
  ////////////////////
 ///    FONTES    ///
////////////////////
  FontText01: {fontSize: 30, 
    fontFamily:'century gothic',
    color: '#000000', 
    marginTop: 20, 
    textAlign:'center'},

  FontText02: {margin: 4, 
    fontWeight: 'bold', 
    fontSize: 17,
    fontFamily:'century gothic', 
    color: 'white', 
    paddingTop: 5},

  FontText04: {margin: 4, 
    fontWeight: 'bold', 
    fontSize:14,
    fontFamily:'century gothic', 
    color: 'black', 
    marginVertical: 15},
    FontText05: {margin: 4, 
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily:'century gothic', 
    color: '#0057FF', 
    marginVertical: 15,},

  FontCopyright: {fontStyle: 'italic',
    fontSize: 14,
    fontFamily:'Roboto', 
    color: '#000000', 
    marginTop: 50},

  BaseText1: {fontSize: 25, 
    textAlign: 'center',
   marginBottom: 16, 
   fontFamily: 'century gothic',},

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
  shadowOpacity:1,
  },

  Input02: {width: 250, 
  height: 24, 
  padding: 10, 
  borderRadius:10,
  borderColor: 'Black', 
  marginBottom: 20,
  backgroundColor: '#E5D2AF', 
  textAlign: 'center', 
  marginTop: 10,
  shadowRadius: 3,
  shadowOpacity: 1,
  },


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
  shadowOpacity: 1,},
  
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

});
export default Style;