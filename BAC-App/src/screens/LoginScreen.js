import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Touchable, TouchableWithoutFeedback, TextInput, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';


export default function Login({ navigation }) {
  return (
      <SafeAreaView style={styles.container}>
        <Navbar />
        <View style={styles.inContainer}>
          <View style={styles.mainBubble}>
            <Text>Logg inn:</Text>
            <TextInput style={styles.inpBubble} placeholder="E-post"></TextInput>
            <TextInput style={styles.inpBubble} placeholder="Passord"></TextInput>

            
          </View>

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')} >
            <View style={styles.mainBubble}>
              <Text>Login!</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* <View></View> */}
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
    backgroundColor: "#fffff",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical : 50,
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

