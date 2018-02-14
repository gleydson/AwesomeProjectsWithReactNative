import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const generateRandomNumber = () => {
  let number = Math.random();
  number = Math.floor(number * 100);
  alert(number);
};

const App = () => {
  return (
    <View>
      <Text>Gerador de números aleatórios</Text>
      <Button
      title="Gerar número"
      onPress={generateRandomNumber}
      />
    </View>
  );
};

AppRegistry.registerComponent('GenerateRandomNumber', () => App);
