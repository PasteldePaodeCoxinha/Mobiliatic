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

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PermissoesCliente"
        screenOptions={{headerStyle:
              {backgroundColor: '#EDE6CA' },
            headerTintColor: 'black',
            headerTitleStyle:
              {fontWeight: 'bold'}}}>
        <Stack.Screen
          name="LoginInicial"
          component={LoginInicial}
          options={{title:''}}
        />
        <Stack.Screen
          name="LoginCliente"
          component={LoginCliente}
          options={{title:''}}
        />
        <Stack.Screen
          name="LoginLoja"
          component={LoginLoja}
          options={{title:''}}
        />
        <Stack.Screen
          name="CadastroCliente"
          component={CadastroCliente}
          options={{title:''}}
        />
        <Stack.Screen
          name="CadastroLoja"
          component={CadastroLoja}
          options={{title:''}}
        />
        <Stack.Screen
          name="PerfilCliente"
          component={PerfilCliente}
          options={{title:''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;