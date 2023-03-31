import { useNavigation } from '@react-navigation/native';
import { StyleSheet,  SafeAreaView, Image, TouchableWithoutFeedback, Text} from 'react-native';



export default function Chatbar({ Navn }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <Image source={require('../static/img/dArrow.png')} style={styles.logo} />
      </TouchableWithoutFeedback>
      <Text>{Navn}</Text>
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
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#27272A',
      alignSelf: 'flex-start',
      paddingVertical: 1
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

