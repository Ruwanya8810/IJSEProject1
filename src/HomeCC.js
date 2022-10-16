import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Assignment = () => {
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

    marks >= 75
      ? console.log('Aa')
      : marks >= 65
      ? console.log('Bb')
      : marks >= 55
      ? console.log('Cc')
      : marks >= 35
      ? console.log('Ss')
      : console.log('Ww');

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

    switch (true) {
      case marks >= 75:
        console.log('A', marks);
        break;

      case marks >= 65:
        console.log('B', marks);
        break;

      case marks >= 55:
        console.log('C', marks);
        break;

      case marks >= 35:
        console.log('S', marks);
        break;

      default:
        console.log('W', true);
        break;
    }

    //   const marks = 75;
    //   if (marks >= 75) {
    //     console.log('A');
    //   } else if (marks >= 65) {
    //     console.log('B');
    //   } else if (marks >= 55) {
    //     console.log('C');
    //   } else if (marks >= 35) {
    //     console.log('S');
    //   } else {
    //     console.log('W');
    //   }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 11</Text>
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

export default Assignment;
