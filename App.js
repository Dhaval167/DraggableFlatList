import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import MyATMCard from './components/MyATMCard';
import MyDraggableFlatList from './components/MyDraggableFlatList';
import MySnackBar from './components/MySnackBar';
import MyWebView from './components/MyWebView';

const App = () => {
  return (
    <View style={styles.screen}>
      {/* <MyDraggableFlatList />

      <MyWebView />
      <MySnackBar />
                    */}
      <MyATMCard />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
