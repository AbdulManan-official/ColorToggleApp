import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[bgcolor,setbgcolor]=useState("white");
 
    const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
  return (
    <View style={[styles.container,{backgroundColor:bgcolor}]}>
      <Button style={styles.buttonText} onPress={()=>setbgcolor(generateRandomColor)}title='Change Color' />    
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
