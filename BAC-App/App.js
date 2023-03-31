import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './src/screens/IntroScreen.js';
import SignUp from './src/screens/SignUpScreen.js';
import Login from './src/screens/LoginScreen.js';
import Home from './src/screens/HomeScreen.js';
import TestScreen from './src/screens/TestScreen.js';
import Unavailable from './src/screens/Unavailable.js';
import Profile from './src/screens/ProfileScreen.js';
import Chat from './src/screens/ChatScreen.js';
import Search from './src/screens/SearchScreen.js';
import Send from './src/screens/SendScreen.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feed" component={Unavailable} />
        <Stack.Screen name="Spill" component={Unavailable} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="Search" component={Search} options={{gestureDirection: "vertical"}} />
        <Stack.Screen name="Send" component={Send} options={{animation: "none"}} />
        <Stack.Screen name="Chat" component={Chat} /> 
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

