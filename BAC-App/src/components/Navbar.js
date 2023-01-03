
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, Button } from 'react-native';


export default function Navbar({}) {

    return (
        <View style={styles.navbar}>
        {/* <Button>Click</Button> */}
        <Image source={require('../static/img/Bakkacoin-logo-hvit2.png')} style={styles.logo}/>
        {/* <Text style={styles.bText}>Bakka<Text style={{color: "#AF7BE5",}}>Coin</Text></Text> */}
        {/* <Button>Click</Button> */}
      </View>
    );
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff"
    },
    navbar: {
      width: '100%',
      maxHeight: 55,
      justifyContent: "center",
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
      marginBottom: -15,
      maxHeight: 25,
      maxWidth: 38,
    },
  });