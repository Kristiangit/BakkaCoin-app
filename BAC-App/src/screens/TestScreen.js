import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default TestScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();

  fetch("https://10.58.176.209:8000/api", {
    "credentials": 'include',
    "method" : "GET",
    "headers": {
        'Content-Type': 'application/json',

    },

  })
  .then((response) => console.log(response.status))
  .then(() => console.log("d"))
  // .catch((error) => console.log(error))
  .then((response) => console.log(response))
  .then(() => console.log("bur"));
  // .then((data) => setData(data["woop"]));

    return (
  
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <Text>Loading...</Text> : 
        ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Text>{item}</Text>
              )}
            />
          </View>
        )}
      </View>
    );
  };

