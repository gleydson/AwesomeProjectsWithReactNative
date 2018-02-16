import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';

import SceneMain from './components/scene-main';
import SceneOtherGames from './components/scene-other-games';
import SceneAboutGame from './components/scene-about-game';
import SceneResult from './components/scene-result';

const Routes = () => (
     <Router sceneStyle={{ backgroundColor: '#61bd8c' }}>
          <Stack>
               <Scene
                    key="main"
                    initial
                    component={SceneMain}
                    title='Cara ou Coroa'
                    navigationBarStyle={{
                    }}
                    titleStyle={{
                         color: '#000',
                         fontWeight: 'bold',
                         alignSelf: 'center'
                    }}
                    title="Cara ou Coroa"
               />
               <Scene
                    key="about"
                    component={SceneAboutGame}
                    title='Sobre o Jogo'
               />
               <Scene
                    key="others" 
                    component={SceneOtherGames}
                    title='Outros Jogos'
               />
               <Scene
                    key="result" 
                    component={SceneResult}
                    title='Resultado'
               />
          </Stack>
     </Router>
);

export default Routes;
