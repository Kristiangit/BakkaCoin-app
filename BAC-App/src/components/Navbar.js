import { StyleSheet,  SafeAreaView, Image, TouchableWithoutFeedback, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Navbar({x_able}) {
  const navigation = useNavigation();
  if (x_able){

    return(
    <SafeAreaView style={styles.navbar}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image source={require('../static/img/dArrow.png')} style={styles.logo} />
      </TouchableWithoutFeedback>
      <Image source={require('../static/img/Bakkacoin-logo-hvit2.png')} style={styles.logo}/>
      <View style={{width: 25}}></View>
    </SafeAreaView>
    );
  };
    return (
        <SafeAreaView style={styles.navbar}>
        <View></View>
        <Image source={require('../static/img/Bakkacoin-logo-hvit2.png')} style={styles.logo}/>
        <View></View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff"
    },
    navbar: {
      width: '100%',
      maxHeight: 50,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: '#27272A',
      alignSelf: 'flex-start',
      paddingVertical: 5,
      flexDirection: 'row',
    },
    bText: {
      fontWeight: "bold", 
      fontSize: 32,
      color: "#fff"
    },
    logo: {
      maxHeight: 25,
      maxWidth: 38,
    },
  });