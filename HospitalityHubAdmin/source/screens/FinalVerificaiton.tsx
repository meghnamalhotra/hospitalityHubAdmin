import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components';
import {Colors} from '../theme/colors';
const FinalVerification = ({navigation}: any) => {
  const handlePress = () => {
    navigation.navigate('Finance');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 2}}>
        <Text style={styles.headerHeading}>
          Final verification will be done through a third party. Please till
          proper information
        </Text>
        <Text style={styles.margin}>
          We (i.e) OTAs can send e-mail with agreement copy With terms and
          conditions{' '}
        </Text>
        <Text style={styles.margin}>What is mandatory for verification?</Text>
        <Text style={styles.points}>• Hotel GST Details(Optional)</Text>
        <Text style={styles.points}>• Cancelled Check</Text>
        <Text style={styles.points}>• PAN Card </Text>
        <Text style={styles.points}>• Channel Manager Details(Optional)</Text>
        <Text style={styles.points}>
          • PMS Details(Property Management System)
        </Text>
        <Text style={styles.points}>
          • Lease Agreement(If Property on lease)
        </Text>
        <Text style={styles.points}>• Licence</Text>
      </View>
      <View style={styles.button}>
        <Button title="Save & Continue" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
         backgroundColor: Colors.backgroundColor
        },
  headerHeading: {
    color:Colors.black,
    fontWeight: 'bold',
    fontSize: 28,
    margin: 20,
  },
  margin: {
    margin: 20,
  },
  points: {
    color:Colors.black,
    marginHorizontal: 20
},
  button: {
    justifyContent: 'flex-end',
     flex: 1
    },
});
export default FinalVerification;
