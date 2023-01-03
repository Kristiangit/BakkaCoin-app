import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Touchable, TouchableWithoutFeedback, TextInput } from 'react-native';
import Navbar from '../components/Navbar';


export default function Login({ navigation }) {
  return (
      <View style={styles.container}>
        <Navbar />
        <View style={styles.textBubble}>

          <TextInput style={styles.inpBubble} ></TextInput>
        </View>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')} >
          <View style={styles.textBubble}>
            <Text>Login!</Text>
          </View>
        </TouchableWithoutFeedback>
        <View></View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#501b88',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBubble: {
    backgroundColor: "#27272A",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 12,
    maxWidth: '100%',
    borderColor: '#461E71',
    borderWidth: 3,
    margin: 25,
  },
  inpBubble: {
    backgroundColor: "#27272A",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 12,
    maxWidth: '100%',
    margin: 25,
  },
  darkBubble: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: -50,
    borderRadius: 12,
    borderColor: '#461E71',
    borderWidth: 1,
    maxWidth: '75%',
  },
  bTitle: {
  color: "white", 
  fontWeight:'bold',
  fontSize: 24,
  marginBottom: 9,
  },
  Title: {
  color: "white", 
  fontSize: 19,
  },
  border: {
    borderWidth: 5,
    borderColor: "#352349",
  }
  
});

