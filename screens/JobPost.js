import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';

export default class JobPost extends React.Component {

	constructor() {
		super();
		this.state = {
			text: null,
		}

		this.onPressLearnMore = this.onPressLearnMore.bind(this);
	}

	static navigationOptions = {
		title: 'Post A Job',
	};

	render() {
		return (
			<ScrollView style={styles.container}>
			 <Text>Post a Job Here</Text>
			 <TextInput
				style={{height: 40, borderColor: 'gray', borderWidth: 1}}
				onChangeText={(text) => this.setState({text})}
				value={this.state.text}
			 />

			 <Button
				onPress={this.onPressLearnMore}
				title="Add something to firebase!"
				color="#841584"
				accessibilityLabel="Click to log to firebase!"
			/>
			</ScrollView>
		);
	}

	onPressLearnMore() {
	  alert('hello!')
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});
