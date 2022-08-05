/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './Navigation';

const App = () => {
  
  return (
    <SafeAreaView style = {Styles.container}>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
