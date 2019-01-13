import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import JobPost from '../screens/JobPost';
import ViewJobs from '../screens/ViewJobs';
import Profile from '../screens/Profile';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  title: 'Home'
};

const PostStack = createStackNavigator({
  Post: JobPost,
});

PostStack.navigationOptions = {
  title: 'Post Job'
};

const ViewJobsStack = createStackNavigator({
  ViewJobs: ViewJobs,
});

ViewJobsStack.navigationOptions = {
  title: 'View Jobs'
};

const ProfileStack = createStackNavigator({
  Profile: Profile
})

ProfileStack.navigationOptions = {
  title: 'Profile'
}

export default createBottomTabNavigator({
  HomeStack,
  PostStack,
  ViewJobsStack,
  ProfileStack,
});
