/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';



class Welcome extends React.Component {

  componentDidMount(){
    
     fetch('http://35.246.54.179/login/', {
     method: 'POST',
     headers: {
     Accept: 'application/json',
    'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    'email': 'sahandilshan222@gmail.com',
    'pass': 'test1234'
     }),

    }).then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson);

    

    
 })
 .catch((error) => {
   console.error(error);
 });

 fetch('http://35.246.54.179/test/', {
  method: 'POST',
  headers: {
  Accept: 'application/json',
 'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 'shop_name': 'Kandy',
 'branch': 'Kadawatha'
  }),

 }).then((response) => response.json())
 .then((responseJson) => {
 console.log(responseJson);

 
})
.catch((error) => {
console.error(error);
});


fetch('http://35.246.54.179/barcode/', {
  method: 'POST',
  headers: {
  Accept: 'application/json',
 'Content-Type': 'application/json',
  },
  body: JSON.stringify({
   "barcode":"100000001"
  }),

 }).then((response) => response.json())
 .then((responseJson) => {
 console.log(responseJson);

 
})
.catch((error) => {
console.error(error);
});
  //this._storeData();
  this._retrieveData();
    //console.log("moubnted");
  }
  render() {
    return( <Text>Hello</Text>);

  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore', 'I like to save it.');
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };
}

export default Welcome;
