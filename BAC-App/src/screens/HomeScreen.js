import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

// const Fetchs = () => {
//   fetch('https://localhost:3000',);
// }



// const SearchMenu = (srchmsg) => {

//   const [search, setSearch] = useState("");
//   const updateSearch = (search) => {
//     setSearch(search);
//   };
  

//   return (
//     <View>
//       <SearchBar value={search} onChangeText={updateSearch} ></SearchBar>
//       {/* <TextInput style placeholder={srchmsg} value={textInput} onChangeText={onChangeText}></TextInput> */}
//       <View>
      
//       </View>
//     </View>
//   );
// }

export default function Home({ navigation }) {
  

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
        <Navbar />
        <View style={{width: '100%', height: '100%', flex: 1, }}>
          <ScrollView contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: 'black',}}>
            <View style={{flex: 1, alignItems:'center', margin:25,}}>
              <Text style={{color:"white", fontSize:16}}>Du har:</Text>
              <Text style={styles.bTitle}>1 000 000 BAC</Text>
              {/* <Text style={styles.Title}>BAC</Text> */}
            </View>
            <View style={styles.darkBubble}>
              <Text style={styles.Title}>Historikk</Text>
              <View style={styles.dBubble}>
                <Usertab Navn="TestBruker"/>
                <Usertab Navn="TestBruker"/>
                <Usertab Navn="TestBruker"/>
                <Usertab Navn="TestBruker"/>
                <Usertab Navn="TestBruker"/>
              </View>
            </View>

            <View style={{height: 130,}}></View>
          </ScrollView>
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
    height: 70,
    opacity: 0.75,
    margin: 10,
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
let hotbar = {color: "white", fontSize: 14}


const Usertab = ({Navn}) => {
  const navigation = useNavigation();
  return(
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Chat", {Navn:"lol"})} >
      <View style={styles.textBubble}>
        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',}} >
          <View>
          {/* <Image /> */}
            <Text style={{fontWeight:'bold', }}>{Navn}</Text> 
            {/* <Text>...</Text> */}
          </View>
          <Text>200 BAC</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>  
  );
}
