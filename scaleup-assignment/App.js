import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen1 from './HomeScreen1';
import LoginScreen1 from './LoginScreen1'
import MainScreen from './MainScreen'
import QuizMainScreen from './QuizMainScreen'
import UpcomingQuizScreen from './UpcomingQuizScreen'
import NoUpcomingQuizScreen from './NoUpcomingQuizScreen'
import LeaderboardScreen from './LeaderboardScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home1">
        <Stack.Screen name="Home1" component={HomeScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Login1" component={LoginScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Quiz" component={QuizMainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="UpcomingQuiz" component={UpcomingQuizScreen} options={{ headerShown: false }} />
             <Stack.Screen name="NoUpcomingQuiz" component={NoUpcomingQuizScreen} options={{ headerShown: false }} />
                 <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: false }} />
              
      </Stack.Navigator>
    </NavigationContainer>
  );
}
