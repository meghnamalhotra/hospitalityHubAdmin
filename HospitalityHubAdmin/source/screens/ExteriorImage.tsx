import React, {useState} from 'react';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { Button } from '../components';

const ExteriorImage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
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
        <FlatList
          data={selectedImage}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.irender}>
              <Image

                source={{uri: item.uri}}
                style={{height: 250, width: 250}}
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
