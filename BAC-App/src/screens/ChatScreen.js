import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, FlatList } from 'react-native';
import Navbar from '../components/Navbar';
import Chatbar from '../components/Chatbar';
import Footer from '../components/Footer';

const data = [
  {
    id: '5001',
    value: '20',
  },
  {
    id: '5002',
    value: '30',
  },
  {
    id: '5003',
    value: '45',
  },
];



export default function Chat({ route, navigation }) {


  const { Navn } = route.params;

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
      <Chatbar Navn={Navn}/>
      <View style={{width: '100%', height: '100%', flex: 29, }}>
        <View style={styles.scrollContainer} >
          <FlatList 
        data={data}
        renderItem={<Message/>}
        keyExtractor={item => item.id}
          />

        </View>
        {/* <ScrollView contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: "black",}}>
          <Message amnt={20} your={true} />
          <Message amnt={40} your={true} />
          <Message amnt={50} your={false} />
          <Message amnt={10} your={true} />
          <Message amnt={30} your={true} />
          <Message amnt={20} your={false} />
          <Message amnt={50} your={true} />
          <Message amnt={10} your={true} />
          <Message amnt={40} your={false} /> */}

          {/* <View>
            <View style={styles.darkBubble}>
              <View style={styles.alignStyle}>
                <Text style={{color:"#b07ce5", fontWeight: 'bold'}}>40 BAC</Text>
              </View>
              <View style={{flex: 1,}}></View>
            </View>
          </View> */}

          {/* <View >
            <View style={{flex: 1,}}></View>
            <View style={styles.darkBubble}>
              <View style={styles.alignStyle}>
                <Text style={{color:"#b07ce5", fontWeight: 'bold'}}>50 BAC</Text>
              </View>
            </View>
          </View> */}

        {/* </ScrollView> */}
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
    padding: 15,
    borderRadius: parseFloat("50%"),
    width: parseFloat('100%%'),
    height: parseFloat('5%'),
    alignSelf: "center",
    width: 200,
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
  },
  alignStyle: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around', 
    width: '100%',
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

const Message = (props ) => {
  console.log(props.your)
  if (props.your) {
    return(
      <View style={styles.alignStyle}>
        <View style={{width: 10}}></View>
        <View style={styles.darkBubble}>
          <Text style={{color:"#b07ce5", fontWeight: 'bold', width:parseFloat('100%')}}>{props.amnt} BAC</Text>
        </View>
      </View>
    )
  }
  return(
    <View style={styles.alignStyle}>
      <View style={styles.darkBubble}>
        <Text style={{color:"#b07ce5", fontWeight: 'bold', width:parseFloat('100%')}}>{props.amnt} BAC</Text>
      </View>
      <View style={{width: 10}}></View>
  </View>
  )
}
