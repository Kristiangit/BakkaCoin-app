import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Touchable, TouchableWithoutFeedback, TextInput, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';


export default function SignUp({ navigation }) {
  return (
      <SafeAreaView style={styles.container}>
        <Navbar />
        <View style={styles.inContainer}>
          <View style={styles.mainBubble}>
            <Text style={{fontWeight:"bold", fontSize:16,}}>Lag en bruker:</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>eller logge inn?</Text>
            </TouchableWithoutFeedback>

            <TextInput style={styles.inpBubble} placeholder="E-post" value="Testerson@gmail.com"></TextInput>
            <TextInput style={styles.inpBubble} placeholder="Passord" secureTextEntry={true} value="dajobdaod"></TextInput>
            <TextInput style={styles.inpBubble} placeholder="Gjenta passord" secureTextEntry={true} value="dajobdaod"></TextInput>

          </View>

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')} >
            <View style={styles.darkBubble}>
              <Text style={styles.bTitle}>Lag en ny bruker!</Text>
            </View>
          </TouchableWithoutFeedback>
          <View></View>
        </View>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#27272A',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#501b88',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  mainBubble: {
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical : 40,
    borderRadius: "30%",
    maxWidth: '100%',
    borderColor: '#461E71',
    borderWidth: 3,
    margin: 25,
  },
  inpBubble: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 200, 
    padding: 10,
    borderColor: "#27272A",
    borderWidth: 3,
    borderRadius: '30%',
    maxWidth: '100%',
    margin: 25,
  },
  darkBubble: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#461E71',
    borderRadius: '30%',
    borderColor: '#27272A',
    borderWidth: 4,
    maxWidth: '75%',
  },
  bTitle: {
  color: "white", 
  fontWeight:'bold',
  fontSize: 20,
  },
  Title: {
  color: "white", 
  fontSize: 19,
  },
  border: {
    borderWidth: 5,
    borderColor: "#352349",
  },
  linkText: {
    color: "#501bb8",
    fontSize: 14,
  }
  
});

