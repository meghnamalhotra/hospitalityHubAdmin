import React, {useState} from 'react';
import { View, Image, FlatList, StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { Button } from '../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
const names=[]
const ExteriorImage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [check,setCheck]=useState(null)

  const setStringValue = async () => {
   
    try {
      await AsyncStorage.setItem('DATA', JSON.stringify(selectedImage))
    } catch(e) {
      // save error
    }
  
    console.log('save data.')
  }
  const getMyStringValue = async () => {
     names.push(selectedImage)
    try {
      const name = await AsyncStorage.getItem('DATA')
      console.log('get data.',JSON.parse(name))
      setCheck(name)
      // console.log(check)
    } catch(e) {
      // read error
    }
    console.log(names[0])
  }
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      });
      setSelectedImage(doc)
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User cancelled the upload', err);
      else console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title='Upload Image' onPress={selectDoc}/>
      <Button title='save data' onPress={setStringValue}/>
      <Button title='get data' onPress={getMyStringValue}/>
        <FlatList
          data={selectedImage}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.irender}>
              <Image
                source={{uri: item.uri}}
                style={{height: 250, width: 150}}
                resizeMode="contain"
              />
            </View>
          )}
        />
      </View>
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
export default ExteriorImage;
