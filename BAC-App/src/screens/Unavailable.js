import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image, SafeAreaView } from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function isIphoneWithNotch() {
    const dimen = Dimensions.get('window');
    console.log(
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTV &&
      (dimen.height === 780 ||
        dimen.width === 780 ||
        dimen.height === 812 ||
        dimen.width === 812 ||
        dimen.height === 844 ||
        dimen.width === 844 ||
        dimen.height === 896 ||
        dimen.width === 896 ||
        dimen.height === 926 ||
        dimen.width === 926
    ));
}


export default function Unavailable({ navigation }) {
    <isIphoneWithNotch/>
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#27272A', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
        <Navbar />
        <View style={{flex:1, backgroundColor: '#501b88', width:'100%', }}>
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Image source={require('../static/img/unavail.png')} style={styles.img}/>
                <Text style={styles.unText}>Denne siden er for øyeblikket utilgjengelig.</Text>
            </View>
        </View>
        <Footer navigation={ navigation }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    img: {
        maxWidth: 150,
        maxHeight: 150,
        tintColor: 'white',
        margin: 10,
    },
    unText: {
        color: 'white',
    },
});