
import 'react-native-gesture-handler'
import * as React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import LoginInicial from './components/LoginInicial'
import LoginCliente from './components/Telas_Cliente/LoginCliente'
import LoginLoja from './components/Telas_Loja/LoginLoja'
import CadastroCliente from './components/Telas_Cliente/CadastroCliente'
import CadastroLoja from './components/Telas_Loja/CadastroLoja'
import PerfilCliente from './components/Telas_Cliente/PerfilCliente'
import PerfilLoja from './components/Telas_Loja/PerfilLoja'
import ConfiguracoesCliente from './components/Telas_Cliente/ConfiguracoesCliente'
import ConfiguracoesLoja from './components/Telas_Loja/ConfiguracoesLoja'
import HomePage from './components/Telas_Cliente/HomePage'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ConfiguracoesCliente"
        screenOptions={{headerStyle:
              {backgroundColor: '#EDE6CA' },
            headerTintColor: 'black',
            headerTitleStyle:
              {fontWeight: 'bold'}}}>
        
        <Stack.Screen
          name="LoginInicial"
          component={LoginInicial}
          options={{title:'',}}
        />
 
        <Stack.Screen
          name="LoginCliente"
          component={LoginCliente}
          options={{title:'',}}
        />

        <Stack.Screen
          name="LoginLoja"
          component={LoginLoja}
          options={{title:'',}}
        />

        <Stack.Screen
          name="CadastroCliente"
          component={CadastroCliente}
          options={{title:'',}}
        />

        <Stack.Screen
          name="CadastroLoja"
          component={CadastroLoja}
          options={{title:'',}}
        />

        <Stack.Screen
          name="PerfilCliente"
          component={PerfilCliente}
          options={{
            header:()=> null
            }}
        />

        <Stack.Screen
          name="ConfiguracoesCliente"
          component={ConfiguracoesCliente}
          options={{title:''}}
        />

        <Stack.Screen
          name="ConfiguracoesLoja"
          component={ConfiguracoesLoja}
          options={{title:''}}
        />

        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title:''}}
        />

        <Stack.Screen
          name="PerfilLoja"
          component={PerfilLoja}
          options={{title:''}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;