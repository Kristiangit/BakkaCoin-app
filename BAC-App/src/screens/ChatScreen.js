import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import Navbar from '../components/Navbar';
import Chatbar from '../components/Chatbar';
import Footer from '../components/Footer';

const data = [
  {
    id: '5003001',
    amnt: '20',
    your: true,
  },
  {
    id: '5003002',
    amnt: '30',
    your: true
  },
  {
    id: '3005003',
    amnt: '45',
    your: false
  },
  {
    id: '3005004',
    amnt: '10',
    your: true
  },
  {
    id: '3005005',
    amnt: '2',
    your: false
  },
  {
    id: '3005006',
    amnt: '1',
    your: false
  },
];



export default function Chat({ route, navigation }) {

  const { Navn } = route.params;

  const handleScroll = (event) => {
    console.log(event.nativeEvent.contentOffset.x);
    event.nativeEvent.contentOffset.x = 0;
   };


  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
      <Chatbar Navn={Navn}/>
      <View style={{width: '100%', height: '100%', flex: 24, }}>
        <View style={styles.scrollContainer} >
          <FlatList
        data={data.reverse()}
        renderItem={Message}
        keyExtractor={item => item.id}
        inverted={true}
        onScroll={handleScroll}
          />
        </View>
      </View>

        <View style={styles.HotBubble}>
          <TouchableWithoutFeedback style={{flex: 1}} onPress={() => navigation.navigate("Send", {send: true})}>
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
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    display: 'grid',
    backgroundColor: "black",
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#b07ce5",
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 18,
    borderRadius: parseFloat("50%"),
    width: parseFloat('100%%'),
    height: parseFloat('5%'),
    alignSelf: "center",
    width: 200,
    marginVertical: 5, 
  },
  darkBubble: {
    flexDirection: 'row',
    backgroundColor: 'rgba(30, 30, 30, 255)', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 20, 
    borderColor: '#461E71', 
    borderWidth: 5, 
    paddingVertical:15,
    height: 150,
    width: 150,
    textAlign: 'center',
  },
  redBubble: {
    flexDirection: 'row',
    backgroundColor: 'rgba(134, 43, 43,  255)', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 20, 
    borderColor: '#461E71', 
    borderWidth: 5, 
    paddingVertical:15,
    height: 150,
    width: 150,
    textAlign: 'center',
  },
  greenBubble: {
    flexDirection: 'row',
    backgroundColor: 'rgba(38, 120, 18, 255)', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 20, 
    borderColor: '#461E71', 
    borderWidth: 5, 
    paddingVertical:15,
    height: 150,
    width: 150,
    textAlign: 'center',
  },
  alignStyle: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around', 
    width: '100%',
    marginVertical: 18,
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

const Message = ({ item }) => {
  console.log(item.id)
  if (item.your) {
    return(
      <View style={styles.alignStyle}>
        <View style={{width: 10}}></View>
        <View style={[styles.darkBubble, {backgroundColor: '#862B2B4D'}]}>
          <Text style={{color:"#b07ce5", fontWeight: 'bold', width:parseFloat('100%'), textAlign:'center' }}> - {item.amnt} BAC</Text>
        </View>
      </View>
    )
  }
  return(
    <View style={styles.alignStyle}>
      <View style={[styles.darkBubble, {backgroundColor: '#5FA0524D'}]}>
        <Text style={{color:"#b07ce5", fontWeight: 'bold', width:parseFloat('100%'), textAlign:'center'}}> + {item.amnt} BAC</Text>
      </View>
      <View style={{width: 10}}></View>
  </View>
  )
}
