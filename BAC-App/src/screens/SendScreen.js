import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image, SafeAreaView, TextInput } from 'react-native';
import Navbar from '../components/Navbar';

export default function Send({ route, navigation }) {
  const [penger, setPenger] = useState("");
  const munny = +100; // hvor mye BAC bruker har
  const { send, id } = route.params;
  let buttonMsg;
  if (send){
    buttonMsg = "Send";
  }else {
    buttonMsg = "Be om";
  }

  const onChangePenger = (text) => {
    if (!isNaN(+text) && text != " ") {
      setPenger(+text);
    };
    // if () {

    // }
  };
  const confirmSend = () => {
    // console.log(send, " hah ", id, penger, typeof penger)
    if (penger > munny) {
      alert("bad, you poor");
      return
    };
      
    console.log("money sent")
    navigation.navigate("Chat", {send:send, AccountId:id, })
  };
  const confirmAsk = () => {
    // console.log(send, " hah ", id, penger, typeof penger)
    console.log("money asked")
    navigation.navigate("Chat", {send:send, AccountId:id, })
  };

  const ifSend = () => {
    if (send) {
      confirmSend();
    } else if (!send){
      confirmAsk();
    }
  }
    

  return (
    <SafeAreaView style={{height:'100%', backgroundColor: '#27272A', }}>
        <Navbar x_able={true}/>
        <View style={{width: '100%', height: '100%', flex: 1}}>
          <View contentContainerStyle={styles.scrollContainer} style={{flex:1, backgroundColor: 'black',}}>
            <View style={{alignItems:'center', margin: 30}}>
              <Text style={{color:"white", fontSize: 52, fontWeight:"bold"}}>Send <Text style={{color:"#501bb8" }}>BAC</Text></Text>
            </View>
            <View style={styles.darkBubble}>
              <Text style={{color:"white", fontSize: 36}}>{id} </Text>
              <TextInput style={{color:"white", fontSize: 36}} keyboardType='number-pad' placeholder="Penger" value={penger} onChangeText={onChangePenger} />
              <View>
                <Text style={{color:"white", fontWeight:"bold", }} >Tilgjengelig saldo: {munny} <Text style={{color:"#501bb8" }}>BAC</Text></Text>
              </View>
            </View>
            <TouchableOpacity style={styles.HotBubble} onPress={ifSend}>
              <View>
                <Text>{buttonMsg}</Text>
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
