import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';
import TestNavbar from '../components/TestNavbar';
import Footer from '../components/Footer';

const conLogger = (lol) => {
  if (lol){
    console.log(lol)
  }
  else {
    console.log("lol")
  }
}
const SignOut = (navigation) => {
  navigation.navigate("Intro")
}

export default function Profile({ navigation }) {

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
        <TestNavbar navigation={navigation}/>
        <View style={{width: '100%', height: '100%', flex: 1, }}>
          <ScrollView contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: 'black',}}>
            <View style={{flex: 1, alignItems:'center', margin: 25,}}>
              <Text style={{color:"white", fontSize:16}}>Hei, <Text style={{fontWeight:"bold", color:"#501bb8" }}>Test!</Text></Text>
            </View>
            <View style={styles.darkBubble}>
              <Text style={styles.Title}>Test Testeren</Text>
              <View style={styles.dBubble}>
                <Usertab Navn="Innstillinger" handlePress={() => conLogger("wow")}/>
                <Usertab Navn="Om BAC" handlePress={() => conLogger()}/>
                <Usertab Navn="Hjelp og kundeservice"/>
                <Usertab Navn="Logg ut" handlePress={() => SignOut(navigation)}/>
                <Usertab Navn="Slett bruker"/>
              </View>
            </View>

            <View style={{height: 130,}}></View>
          </ScrollView>
        </View>
        <Footer navigation={navigation}/>
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
    flex:1,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: "#b07ce5",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: parseFloat("50%"),
    width: '60%',
    maxWidth: '100%',
    height: '11%',
    bottom: 40,
    alignSelf: "center",
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

const Usertab = (props) => {
  return(
    <TouchableWithoutFeedback onPress={props.handlePress} >
      <View style={styles.textBubble}>
            <Text style={{fontWeight:'bold', }}>{props.Navn}</Text> 
      </View>
    </TouchableWithoutFeedback>  
  );
}
