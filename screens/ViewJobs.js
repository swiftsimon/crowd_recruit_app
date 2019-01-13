import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'View Jobs',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>View All Jobs Below</Text>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
})