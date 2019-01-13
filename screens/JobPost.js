import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class JobPost extends React.Component {
  static navigationOptions = {
    title: 'Post A Job',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
       <Text>Post a Job Here</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
