import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Touchable, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';


export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#27272A'}]}>
        <Navbar />
        <View style={styles.container}> 
          <Text>SignUpPage</Text>
          <Button title="Next" onPress={() => navigation.navigate('Test')} style={styles.textBubble}/>
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

