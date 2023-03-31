import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';
import Chatbar from '../components/Chatbar';
import Footer from '../components/Footer';


export default function Chat({ navigation, Navn }) {

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
      <Chatbar Navn={Navn}/>
      <View style={{width: '100%', height: '100%', flex: 49, }}>
        <ScrollView contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: "black",}}>
          <View style={styles.darkBubble}>
            <View style={styles.dBubble}>
              <Text style={{color:"#b07ce5", fontWeight: 'bold'}}>20 BAC</Text>
            </View>
            <View style={{flex: 1,}}></View>
          </View>

          <View>
            <View style={styles.darkBubble}>
              <View style={styles.dBubble}>
                <Text style={{color:"#b07ce5", fontWeight: 'bold'}}>40 BAC</Text>
              </View>
              <View style={{flex: 1,}}></View>
            </View>
          </View>

          <View >
            <View style={{flex: 1,}}></View>
            <View style={styles.darkBubble}>
              <View style={styles.dBubble}>
                <Text style={{color:"#b07ce5", fontWeight: 'bold'}}>50 BAC</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>

        <View style={styles.HotBubble}>
          <TouchableWithoutFeedback style={{flex: 1}} onPress={() => navigation.navigate("Search", {send: true})}>
            <View style= {{flex: 1, alignItems: 'center'}}>
              <Image source={require('../static/img/dArrow.png')} style={[styles.arrow, {transform: [{rotateX: '180deg'}]}]}/>
              <Text style={hotbar}>Sende</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={{flex: 1}} onPress={() => navigation.navigate("Search", {send: false})}>
            <View style= {{flex: 1, alignItems: 'center'}}>
              <Image source={require('../static/img/dArrow.png')} style={styles.arrow}/>
              <Text style={hotbar}>Be om</Text>
            </View>
          </TouchableWithoutFeedback>
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
    display: 'grid',

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
    flexDirection: 'row',
    backgroundColor: "#b07ce5",
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    borderRadius: parseFloat("50%"),
    width: parseFloat('100%%'),
    height: parseFloat('5%'),
    alignSelf: "center",
  },
  darkBubble: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 30, 30, 255)', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderRadius: 20, 
    borderColor: '#461E71', 
    borderWidth: 5, 
    paddingVertical:15,
  },
  dBubble: {
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
let hotbar = {color: "white", fontSize: 14,}

const Usertab = ({Navn}) => {
  return(
    <TouchableWithoutFeedback onPress={() => {console.log("lol")}} >
      <View style={styles.textBubble}>
            <Text style={{fontWeight:'bold', }}>{Navn}</Text> 
      </View>
    </TouchableWithoutFeedback>  
  );
}
