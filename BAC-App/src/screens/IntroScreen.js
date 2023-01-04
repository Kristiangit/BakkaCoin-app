import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Touchable, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Navbar from '../components/Navbar';



export default function Intro({ navigation }) {
  return (
      <SafeAreaView style={[styles.container, {backgroundColor: '#27272A',}]}>
        <Navbar />
        <View style={styles.container}>
          <View style={[styles.textBubble, styles.border]}>
            <Text style={styles.bTitle} >Bli med i Bakka<Text style={{color: "#AF7BE5",}}>Coin</Text>!</Text>
            <Text style={styles.Title}>Elvebakkens digitale</Text>
            <Text style={styles.Title}>økosystem</Text>
          </View>
          
        <View>
          <TouchableWithoutFeedback  onPress={() => navigation.navigate('SignUp')}>
            <View style={styles.textBubble}>
              <Text style={styles.Title}>Lag ny bruker!</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
            <View style={styles.textBubble}>
              <Text style={styles.Title}>Logg inn!</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View></View>
        <StatusBar style="light" />
        </View>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#501b88',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
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

