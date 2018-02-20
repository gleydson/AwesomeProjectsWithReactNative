import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import MainPage from './components/MainPage';
import ContactsAdd from './components/contactsAdd';
import Conversation from './components/Conversation';

export default class extends Component {
     render() {
          return (
               <Router
                    navigationBarStyle={{ backgroundColor: '#115e54' }}
                    titleStyle={{ color: '#fff' }}
               >
                    <Stack>
                         <Scene
                              key='loginForm'
                              component={LoginForm}
                              title='Login'
                              hideNavBar
                         />
                         <Scene
                              key='registerForm'
                              component={RegisterForm}
                              title='Cadastro'
                         />
                         <Scene
                              key='welcome'
                              component={Welcome}
                              title='Bem Vindo'
                              hideNavBar
                         />
                         <Scene
                              key='main'
                              component={MainPage}
                              title='Principal'
                              hideNavBar
                         />
                         <Scene
                              key='contactAdd'
                              component={ContactsAdd}
                              title='Adicionar Contato'
                         />
                         <Scene
                              key='conversation'
                              component={Conversation}
                              title='Conversa'
                         />
                    </Stack>
               </Router>
          );
     }
}
