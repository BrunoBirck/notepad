import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditScreen';
const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name='List' component={ListScreen} />
    <Screen name='EditNote' component={EditNoteScreen} />
  </Navigator>
);