/* 
Installations => npm i react-native-snackbar
Reference => https://www.npmjs.com/package/react-native-snackbar
*/

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Snackbar from 'react-native-snackbar';

const MySnackBar = props => {
  const showSnackbar = () => {
    Snackbar.show({
      text: 'Hello world',
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'UNDO',
        textColor: 'yellow',
        onPress: () => {
          console.log('Undo clicked');
        },
      },
    });
  };

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={showSnackbar}>
          <Text>Snackbar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default MySnackBar;
