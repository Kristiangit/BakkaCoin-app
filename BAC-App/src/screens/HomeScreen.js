import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// const Fetchs = () => {
//   fetch('https://localhost:3000',);
// }

export default function Home({ navigation }) {

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
        <Navbar />
        <View style={{width: '100%', height: '100%', flex: 1, }}>
          <ScrollView contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: 'black',}}>
            <View style={{flex: 1, alignItems:'center'}}>
              <Text style={styles.bTitle}>500.00 BAC</Text>
              {/* <Text style={styles.Title}>BAC</Text> */}
            </View>
            <View style={styles.darkBubble}>
              <Text style={styles.Title}>Historikk</Text>
              <View style={styles.dBubble}>
                <Usertab Navn="Viktor"/>
                  <Usertab Navn="Isak"/>
                <Usertab Navn="Magnus"/>
                <Usertab Navn="Nicolay"/>
                <Usertab Navn="Kristian"/>
              </View>
            </View>

            <View style={{height: 60,}}></View>
          </ScrollView>
          <View style={styles.HotBubble}>
              <TouchableWithoutFeedback style={{flex: 1}}>
                <View style= {{flex: 1, alignItems: 'center'}}>
                  <Image source={require('../static/img/dArrow.png')} style={[styles.arrow, {transform: [{rotateX: '180deg'}]}]}/>
                  <Text style={hotbar}>Send</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback style={{flex: 1}}>
                <View style= {{flex: 1, alignItems: 'center'}}>
                  <Image source={require('../static/img/dArrow.png')} style={styles.arrow}/>
                  <Text style={hotbar}>Be om</Text>
                </View>
              </TouchableWithoutFeedback>
          </View>
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
    borderRadius: '50%',
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
    borderRadius: '50%',
    width: '60%',
    maxWidth: '100%',
    height: '11%',
    bottom: 50,
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
    maxHeight: 500,
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
  margin: 20,
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

let hotbar = {color: "white", fontSize: 12,}
const Usertab = ({Navn}) => {
  return(
    <TouchableWithoutFeedback onPress={() => {console.log("lol")}} >
      <View style={styles.textBubble}>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',}} >
          <View>
          {/* <Image /> */}
            <Text>{Navn}</Text> 
            <Text>...</Text>
          </View>
          <Text>200 BAC</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>  
  );
}
