import { StyleSheet,  SafeAreaView, Image, TouchableWithoutFeedback, View} from 'react-native';
// import { isIphoneWithNotch } from '../screens/IntroScreen'



export default function TestNavbar({ navigation}) {
    return (
        <SafeAreaView style={{padding: 5,}}>
        <View style={styles.navbar}>
            {/* <Button>Click</Button> */}
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Intro')} >
                <View>
                    <Image source={require('../static/img/sign_out.png')} style={styles.logo}/>
                </View>
            </TouchableWithoutFeedback>
            <Image source={require('../static/img/Bakkacoin-logo-hvit2.png')} style={styles.logo}/>
                <View></View>
            {/* <Text style={styles.bText}>Bakka<Text style={{color: "#AF7BE5",}}>Coin</Text></Text> */}
            {/* <Button>Click</Button> */}
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff"
    },
    navbar: {
      width: '100%',
      flexDirection:"row",
      maxHeight: 50,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: '#27272A',
      alignSelf: 'flex-start',
      paddingVertical: 1,
      marginHorizontal: 2,
    },
    bText: {
      fontWeight: "bold", 
      fontSize: 32,
      color: "#fff"
    },
    logo: {
      maxHeight: 25,
      maxWidth: 38,
      tintColor: "white",
    },
  });