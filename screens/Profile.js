import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'My Profile',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>Hello</Text>
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