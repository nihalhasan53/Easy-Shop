import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';
import ProductsContainer from './Screens/Products/ProductsContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsContainer/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
