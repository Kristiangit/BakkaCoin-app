import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, Button, TouchableWithoutFeedback } from 'react-native';
// import { isIphoneWithNotch } from '../screens/IntroScreen'


export default function Footer({ navigation }) {
  return (
      <SafeAreaView style={styles.footer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}><Image source={require('../static/img/home-sym.png')} style={styles.logo}/></TouchableWithoutFeedback>
        {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Feed')}><Image source={require('../static/img/feed.png')} style={styles.prof}/></TouchableWithoutFeedback> */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Spill')}><Image source={require('../static/img/Controller.png')} style={styles.logo}/></TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profil')}><Image source={require('../static/img/profile.png')} style={styles.logo}/></TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff"
    },
    footer: {
      flexDirection: 'row',
      width: '100%',
      height: 50,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: '#27272A',
      alignSelf: 'flex-start',
    },
    bText: {
      marginBottom: -15,
      fontWeight: "bold", 
      fontSize: 32,
      color: "#fff"
    },
    logo: {
      maxHeight: 30,
      maxWidth: 40,
      tintColor: 'white',
    },
    prof: {
      maxHeight: 40,
      maxWidth: 35,
      tintColor: 'white',

    }
  });