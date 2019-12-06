import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const DisplayFrindship = (prop) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop.data}</Text>
            <Text style={styles.text}>{prop.result}</Text>
        </View>
    )
}

export default DisplayFrindship;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 28,
      backgroundColor: '#fff',
      
    },
    text:{
        fontSize:30,
        textAlign:"center",

    }
  });