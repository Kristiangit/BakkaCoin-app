import AsyncStorage from "@react-native-async-storage/async-storage";

const ClearStorage = async() => {
    const keys = 
    await AsyncStorage.setItem("isAuth", false);
    await AsyncStorage.multiRemove([keys]);
    
};

const Logout = async () => {
    var test1 = await AsyncStorage.getItem("jwt-token");
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    fetch("http://localhost:3000/api/logout", {
      "method" : "POST",
      "headers": headers,
      "body": JSON.stringify({
      "test": test1
      }) // et javascript-object kan vi gjøre til JSON med json-stringify
    }).then(function(response) {
      // Håndterer responsen

      // Vi henter ut json-bodyen i responsen med .json()
      response.json().then(function(json) {
        ClearStorage();
        //console.log(json.test)
        //localStorage.removeItem("isAuth")
        //localStorage.removeItem("isAuth")
        // console.log(test)
      })
    });
  }

export default Logout();