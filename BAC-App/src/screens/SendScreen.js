import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
import Navbar from '../components/Navbar';
import TestNavbar from '../components/TestNavbar';
import Footer from '../components/Footer';

export default function Send({ route, navigation }) {
  const [penger, setPenger] = useState("");

  const onChangePenger = (text) => {
    console.log(text)
    console.log(+text)
    console.log(isNaN(+text), "check")
    if (!isNaN(+text) && text != " ") {
      console.log("bad")
      setPenger(text.trim());
      // console.log(penger, " ", text)
    }else {
    };
};
  

  const { send, id } = route.params;

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
        <Navbar />
        <View style={{width: '100%', height: '100%', flex: 1}}>
          <View contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: 'black',}}>
            <View style={{alignItems:'center', margin: 30}}>
              <Text style={{color:"white", fontSize: 52, fontWeight:"bold"}}>Send <Text style={{color:"#501bb8" }}>BAC</Text></Text>
            </View>
            <View style={styles.darkBubble}>
              <TextInput style={{color:"white", fontSize: 36}} keyboardType='number-pad' placeholder="Penger" value={penger} onChangeText={onChangePenger} />
              <View>
                <Text style={{color:"white", }} >Tilgjengelig saldo: 0 BAC</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.HotBubble}>
              <View>

              </View>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textBubble: {
    flexDirection: 'row',
    backgroundColor: "#b07ce5",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: parseFloat("50%"),
    width: 250,
    height: 50,
    opacity: 0.75
  },  
  HotBubble: {
    backgroundColor: "#b07ce5",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: parseFloat("50%"),
    width: 200,
    height: 60,
    alignSelf: "center",
    margin: 30,
  },
  darkBubble: {
    flex: 1,
    backgroundColor: 'rgba(30, 30, 30, 255)', 
    alignItems: 'center', 
    justifyContent: 'space-around',
    borderRadius: 20, 
    borderColor: '#461E71', 
    borderWidth: 5, 
    maxHeight: 550,
    paddingVertical:15,
  },
  dBubble: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-around', 
    padding: 30,
  },
  bTitle: {
  color: "#b07ce5", 
  fontWeight:'bold',
  fontSize: 32,
  },
  pTitle: {
  color: "#AF7BE5", 
  fontSize: 26,
  },
  Title: {
  color: "white", 
  fontSize: 26,
  },
  border: {
    borderWidth: 5,
    borderColor: "#352349",
  },
  arrow: {
    maxHeight: 40,
    maxWidth: 30,
    tintColor: 'white'
  },
});

