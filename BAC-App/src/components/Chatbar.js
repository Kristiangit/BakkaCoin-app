import { useNavigation } from '@react-navigation/native';
import { StyleSheet,  SafeAreaView, Image, TouchableWithoutFeedback, Text, View} from 'react-native';



export default function Chatbar({ Navn }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.navbar}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <Image source={require('../static/img/dArrow.png')} style={styles.logo} />
      </TouchableWithoutFeedback>
      <Text>{Navn}</Text>
      <View></View>
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
      paddingVertical: 1
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

