import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../theme/colors";
import { Button } from "../components";

const BasicInformation=({navigation}: any)=>{
  const handlePress = () => {
    navigation.navigate('SetLocation');
  };
    return(
      
    <SafeAreaView style={styles.container}>     
        <Text style={styles.txt}>Basic Information</Text>
        <TextInput
        style={styles.input}
        placeholder="Stay/Hotel Name"
        />
        <Text style={styles.txt2}>Taking Bookings Since</Text>
        <TextInput
        style={styles.input2}
        placeholder="2023"
        />
        <Text style={styles.txt2}>Contact Details</Text>
        <TextInput
        style={styles.input}
        placeholder="Contact Number"
        />
         <TextInput
        style={styles.input}
        placeholder="Email Address"
        />
        <View style={styles.buttonContainer}>
            <Button title={'DONE'} onPress={handlePress} />
          </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    txt:{
        marginLeft: '4%',
        fontSize: 25,
        marginTop: '4%',
        fontWeight: '600',
    },
    input: {
        height: '10%',
        margin: '4%',
        borderWidth: 1,
        padding: '2%',
        borderRadius: 10,
        borderColor: Colors.greyBorder,
        fontSize: 20,
        paddingLeft: '6%',
        fontWeight: '600',
        backgroundColor: Colors.white,
    },
    input2: {
        height: '10%',
        margin: '4%',
        width: '20%',
        borderWidth: 1,
        padding: '2%',
        borderRadius: 10,
        borderColor: Colors.greyBorder,
        backgroundColor: Colors.white,
        fontSize: 16,
        paddingLeft: '4%',
        fontWeight: '600',
        overflow: 'hidden',
        },
    txt2:{
        marginLeft: '4%',
        fontSize: 20,
        marginTop: '4%',
        fontWeight: '600',
    },
    bt: {
        marginTop: '18%',
        marginHorizontal: '5%',
        marginBottom: '3%',
        paddingVertical: '3%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lighBlue,
       shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        activeOpacity: 0.7,
      },
    btn: {
        color: Colors.white,
      },
      buttonContainer: {
        marginTop: 48,
        marginLeft: 21,
        width: '90%',
        backgroundColor: Colors.buttonBlue,
        borderRadius: 7,
      },
})
export default BasicInformation;