import { useNavigation } from '@react-navigation/native';
import { StyleSheet,  SafeAreaView, Image, TouchableWithoutFeedback, Text, View} from 'react-native';



export default function Chatbar({ Navn }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <Image source={require('../static/img/dArrow.png')} style={styles.logo} />
      </TouchableWithoutFeedback>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>{Navn}</Text>
      <View style={{width: 38, }}></View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff"
    },
    navbar: {
      flexDirection: 'row',
      width: '100%',
      maxHeight: 50,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: '#27272A',
      alignSelf: 'flex-start',
      paddingVertical: 5
    },
    bText: {
      fontWeight: "bold", 
      fontSize: 32,
      color: "#fff"
    },
    logo: {
      maxHeight: 30,
      maxWidth: 38,
    },
  });

