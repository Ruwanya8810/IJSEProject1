import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const HomeCC = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const name = 'Apple';
    // If CONDITIONS
    if (name === 'BlueBerry') {
      console.log('Fruit 1', name);
    } else if (name === 'Orange') {
      console.log('Fruit 2', name);
    } else {
      console.log('Fruit 3', 'Not Available');
    }

    //Ternary Operator
    // name === 'Orange'
    //   ? console.log('Fruit', true)
    //   : console.log('Fruit', false);

    // Switch Case
    // switch (name) {
    //   case 'Apple':
    //     console.log('Fruit', true);
    //     break;

    //   default:
    //     console.log('Fruit', false);
    //     break;
    // }

    const marks = 75;
    if (marks >= 75) {
      console.log('A');
    } else if (marks >= 65) {
      console.log('B');
    } else if (marks >= 55) {
      console.log('C');
    } else if (marks >= 35) {
      console.log('s');
    } else {
      console.log('w');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 011</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },
});

export default HomeCC;
