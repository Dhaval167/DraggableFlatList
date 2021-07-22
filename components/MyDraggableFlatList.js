/* Installations => 
              npm i react-native-draggable-flatlist
              npx react-native install react-native-reanimated@1 ,
              npx install react-native-gesture-handler
              npx install react-native-safe-area-view
   
   Reference Link =>
              https://www.npmjs.com/package/react-native-draggable-flatlist        

 */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {CATEGORY} from '../data/dummy-data';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MyDraggableFlatList = props => {
  const [data, setData] = useState(CATEGORY);

  const _renderItem = ({item, drag, isActive}) => {
    return (
      <View style={{margin: 10}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 100,
            backgroundColor: isActive ? 'red' : item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onLongPress={drag}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: 32,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  console.log('Data', data);

  return (
    <GestureHandlerRootView style={styles.screen}>
      <DraggableFlatList
        onDragBegin={number => console.log(number)}
        onRelease={releaseNumber => console.log('Release', releaseNumber)}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        data={data}
        renderItem={_renderItem}
        onDragEnd={({data}) => setData(data)}
        dragItemOverflow={true}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  screen: {},
});

export default MyDraggableFlatList;
