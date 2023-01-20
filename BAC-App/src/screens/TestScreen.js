import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, SafeAreaView} from 'react-native';

const Test = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getInfo = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getInfo();
  }, []);
  
  return (
    <SafeAreaView style={{flex: 1, padding: 24}}>
      <View >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text>{data.message}</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Test;