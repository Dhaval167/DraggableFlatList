/* 
Installations => npm i react-native-credit-card-input
ReferenceLink => https://www.npmjs.com/package/react-native-credit-card-input 
*/

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';

const MyATMCard = props => {
  const _onChange = form => {
    console.log(form);
  };
  return (
    <CreditCardInput
      onChange={form => _onChange(form)}
      requiresName
      allowScroll
    />
  );
};

const styles = StyleSheet.create({});

export default MyATMCard;
