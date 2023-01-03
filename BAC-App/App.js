import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './src/screens/IntroScreen.js'
import SignUp from './src/screens/SignUpScreen.js'
import Login from './src/screens/LoginScreen.js'
import Home from './src/screens/HomeScreen.js'
import TestScreen from './src/screens/TestScreen.js'
import Unavailable from './src/screens/Unavailable.js'

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
        <Stack.Screen name="Profil" component={TestScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

