import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

//import styles from './HomeCC.styles';

class HomeCC extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.red}>Test prac</Text>

        <View style={styles.box} />
        <View style={styles.box1} />
        <View style={styles.box2} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  red: {
    fontSize: 25,
    color: 'red',
    paddingBottom: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    padding: 5,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  mypc: {
    width: 250,
    height: 250,
    backgroundColor: 'black',
  },
  urladd: {
    width: 250,
    height: 200,
    backgroundColor: 'black',
  },
});

export default HomeCC;
