import React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../theme/colors";

const RoomDescription=({navigation}: any)=>{
    return(
    <SafeAreaView style={styles.container}>
        
        <Text style={styles.txt}>Room Description</Text>
        <TextInput
        style={styles.input}
        placeholder="Base Price"
        />
        <TextInput
        style={styles.input}
        placeholder="Number of Extra Adults Allowed"
        />
         <TextInput
        style={styles.input}
        placeholder="Number of Extra Child Allowed"
        />
          <TouchableOpacity
        style={styles.bt}
        onPress={() => {
          navigation.navigate('Policies');
        }}>
        <Text style={styles.btn}>Next</Text>
      </TouchableOpacity>
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
    txt2:{
        marginLeft: '4%',
        fontSize: 20,
        marginTop: '4%',
        fontWeight: '600',
    },
    bt: {
        marginTop: '58%',
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
})
export default RoomDescription;