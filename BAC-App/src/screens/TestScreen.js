import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';

export default TestScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('http://127.0.0.1:5000/api');
      console.log(response.status)
      console.log(response.body)
      console.log(response.content)
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  // fetch("http://10.58.176.209:8003", {
  //   "credentials": 'include',
  //   "method" : "GET",
  //   "headers": {
  //       'Content-Type': 'application/json',
  //   },
  // })
  // .then((response) => console.log(response.status))
  // .then(() => console.log("d"))
  // // .catch((error) => console.log(error))
  // .then((response) => console.log(response))
  // .catch(function(error) {
  //   console.log(error)
  //   console.log(error.message)
  // });
  // // .then((data) => setData(data["woop"]));

    return (
  
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>

          </View>
        )}
      </View>
    );
  };
