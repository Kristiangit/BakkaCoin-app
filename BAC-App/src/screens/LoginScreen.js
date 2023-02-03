import { useState } from 'react';
import { StyleSheet, Text, View, Button, Touchable, TouchableWithoutFeedback, TextInput, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginFetch = (props) => {
  const navigation = useNavigation();
  let error = "notin";
    //const json = JSON.stringify(data, null, 4);
    //console.clear();
    //console.log(json);

    // Setter opp headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json")

      fetch("http://localhost:3000/api/login", {
          "method" : "POST",
          "headers": headers,
          "body": JSON.stringify({
              "mail": mail,
              "password": pass,
          }) // et javascript-object kan vi gjøre til JSON med json-stringify
      }).then(function(response) {
          // Håndterer responsen
          // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
          //let array = response
          //console.log(response)
          if (json.token == "bad"){
            setError("Feil brukernavn eller passord")
            //alert("oops, feil brukernavn eller passord")
          }
          else if(json.token == "feil mail"){
            //console.log("feil ")
            setError("Feil brukernavn eller passord")
            //alert("oops, feil brukernavn eller passord")
          }
          else{
            //console.log(json.token)
            var now = new Date().getTime();
            localStorage.setItem("jwt-token", json.token);
            localStorage.setItem("isAuth", true);
            localStorage.setItem('setupTime', now)
            const token = localStorage.getItem('jwt-token')
            console.log(token)
            
            }
          })
        });
        console.log(error)
        navigation.navigate('Home');
      };
    


export default function Login({ navigation }) {
  const [mailInput, onChangeMail] = useState();
  const [passInput, onChangePass] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {
    console.log(mailInput)
    console.log(passInput)
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
      fetch("http://localhost:3000/api/login", {
          "method" : "POST",
          "headers": headers,
          "body": JSON.stringify({
              "mail": mailInput,
              "password": passInput,
          }) // et javascript-object kan vi gjøre til JSON med json-stringify
      }).then(function(response) {
          // Håndterer responsen
          // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
          //let array = response
          //console.log(response)
          if (json.token == "bad"){
            setError("Feil brukernavn eller passord")
            //alert("oops, feil brukernavn eller passord")
          }
          else if(json.token == "feil mail"){
            //console.log("feil ")
            setError("Feil brukernavn eller passord")
            //alert("oops, feil brukernavn eller passord")
          }
          else{
            //console.log(json.token)
            var now = new Date().getTime();
            AsyncStorage.setItem("jwt-token", json.token);
            AsyncStorage.setItem("isAuth", true);
            AsyncStorage.setItem('setupTime', now)
            const token = AsyncStorage.getItem('jwt-token')
            const token2 = AsyncStorage.getItem('isAuth')
            const token3 = AsyncStorage.getItem('setupTime')
            console.log(token, "lodas", token2, "teh", token3)
            
            };
          })
        });
        console.log(error)
        navigation.navigate('Home');
      };

  return (
      <SafeAreaView style={styles.container}>
        <Navbar />
        <View style={styles.inContainer}>
          <View></View>
          <View style={styles.mainBubble}>
            <Text style={{fontWeight:"bold", fontSize:16,}}>Logg inn:</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.linkText}>eller lage ny bruker?</Text>
            </TouchableWithoutFeedback>
            <TextInput style={styles.inpBubble} placeholder="E-post" value={mailInput} onChangeText={onChangeMail} />
            <TextInput style={styles.inpBubble} placeholder="Passord" secureTextEntry={true} value={passInput} onChangeText={onChangePass} />
          </View>

          <TouchableWithoutFeedback onPress={() => handleSubmit()}>
            <View style={styles.darkBubble}>
              <Text style={styles.bTitle}>Logg inn!</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* <View></View> */}
        </View>
      </SafeAreaView>
  );
};


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
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical : 50,
    borderRadius: parseFloat("30%"),
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
    borderRadius: parseFloat("30%"),
    maxWidth: '100%',
    margin: 25,
  },
  darkBubble: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#461E71',
    borderRadius: parseFloat("30%"),
    borderColor: '#27272A',
    borderWidth: 4,
    maxWidth: '75%',
  },
  bTitle: {
  color: "white", 
  fontWeight:'bold',
  fontSize: 20,
  },
  Title: {
  color: "white", 
  fontSize: 19,
  },
  border: {
    borderWidth: 5,
    borderColor: "#352349",
  },
  linkText: {
    color: "#501bb8",
    fontSize: 14,
  }
  
});

