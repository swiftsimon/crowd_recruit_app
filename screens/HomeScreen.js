import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  constructor() {
    super()
    this.state = {
     isLoggedIn: false 
    }
  }
  static navigationOptions = {
    // header: null,
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.homeContainer}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.homeTitleContainer}>
            <Text style={styles.homeTitleText}>
              Crowd Sourced Recruiting
            </Text>
            <TextInput
              style={{ height: 40 }}
              placeholder="Email"
              onChangeText={(text) => { this.setState({ userEmail: text }) }}
              onSubmitEditing={(text) => { this.setState({ userEmail: text }) }}    
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Password"
              onChangeText={(text) => {this.setState({ userPassword: text})}}
              onSubmitEditing={(text) => { this.setState({ userEmail: text }) }}              
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  homeTitleContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeTitleText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
