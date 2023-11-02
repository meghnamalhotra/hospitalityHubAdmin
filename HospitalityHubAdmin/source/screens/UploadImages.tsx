import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Button} from '../components';
import {Interior} from '../assets/svgs';
const DATA = [
  {
    id: 1,
    image: <Interior />,
  },
  {
    id: 2,
    image: <Interior />,
  },
  {
    id: 3,
    image: <Interior />,
  },
  {
    id: 4,
    image: <Interior />,
  },
  {
    id: 5,
    image: <Interior />,
  },
  {
    id: 6,
    image: <Interior />,
  },
  {
    id: 7,
    image: <Interior />,
  },
  
];

const UploadImage = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('Policies');
  };
  return (
    <SafeAreaView>

        <View style={styles.container}>
        <Button title="Upload Image" onPress={handlePress} />
          <FlatList
            data={DATA}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.irender}>
                <View>{item.image}</View>
              </View>
            )}
          />
         
        </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 35,
  },
  irender: {
    flex: 1,
    marginBottom: 20,
  },
});

export default UploadImage;
