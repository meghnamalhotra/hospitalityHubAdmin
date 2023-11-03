import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  HotelView,
  FbSVG,
  GoogleSVG,
  FadeCircle,
  FillCircle,
} from '../assets/svgs';
import {Colors} from '../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Separator, Button} from '../components';

const Login = () => {
  const navigation = useNavigation<any>();
  const [isEmail, setEmail] = useState<string>('');
  const [isEmailValid, setEmailValid] = useState<any>([]);
  const [isPassword, setPassword] = useState<string>('');
  const [isPasswordValid, setPasswordValid] = useState<any>([]);
  const [secureEntry, setSecureEntry] = useState<boolean>(true);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handlePress = () => {
    if (!isEmail || !isPassword || (!isEmail && !isPassword)) {
      return Alert.alert('Please fill all fields');
    } else if (!isEmailValid) {
      return Alert.alert('Please enter valid email');
    } else if (!isPasswordValid) {
      return Alert.alert('Please enter a strong password');
    } else {
      navigation.navigate('LikeList');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <SafeAreaView style={styles.main}>
        <ScrollView style={styles.titleText}>
          <View style={styles.headerContainer}>
            <View style={styles.leftHeader}>
              <FadeCircle />
            </View>
            <View>
              <FillCircle />
            </View>
          </View>
          <View style={styles.subtext}>
            <Separator
              width={'30%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
            <Text style={styles.subheading}>Log in</Text>
            <Separator
              width={'30%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
          </View>
          <View style={styles.inputBoxContainer}>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter Email"
                style={styles.inputText}
                onChangeText={email => {
                  setEmail(email);
                  setEmailValid(email.match(emailRegex));
                }}
                placeholderTextColor={Colors.lightgray}
              />
            </View>
          </View>
          <View style={styles.inputBoxContainer}>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter Password"
                style={styles.inputText}
                onChangeText={password => {
                  setPassword(password);
                  setPasswordValid(password.match(PasswordRegex));
                }}
                placeholderTextColor={Colors.lightgray}
                secureTextEntry={secureEntry}
              />
              <TouchableOpacity style={styles.eyeButton} onPress={()=> setSecureEntry(!secureEntry)}>
              {secureEntry ? <MaterialCommunityIcons
                name="eye-off"
                color={Colors.white}
                size={25}
              /> : <MaterialCommunityIcons
              name="eye"
              color={Colors.white}
              size={25}
            />}
              </TouchableOpacity>
            </View>
          </View>

          <Button title={'Continue'} onPress={handlePress} />

          <View style={styles.subtext}>
            <Separator
              width={'35%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
            <Text style={styles.subheading}>or</Text>
            <Separator
              width={'35%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <GoogleSVG />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FbSVG />
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text
              style={styles.disclaimer1}
              onPress={() => navigation.navigate('TermsScreen')}>
              By Continuing, you agree to our{'\n'}
              <Text style={styles.disclaimer2}>Terms of Service</Text>
              <Text> </Text>
              <Text style={styles.disclaimer2}>Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  svg: {
    alignSelf: 'center',
  },
  titleText: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    top: -Dimensions.get('screen').height * 0.1,
    marginBottom: '-15%',
  },
  leftHeader: {
    flex: 3,
  },
  heading: {
    color: Colors.black,
    marginTop: '4%',
    textAlign: 'center',
    fontSize: 30,
  },
  subtext: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: '2%',
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.subHeadingBlack,
    marginVertical: '2%',
  },
  inputBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.06
        : Dimensions.get('screen').height * 0.07,
  },
  inputBox: {
    flexDirection: 'row',
    width: '80%',
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    borderColor: Colors.borderGray,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,

    elevation: 5,
  },
  inputText: {
    height: '100%',
    paddingHorizontal: 5,
    width: '90%',
    fontSize: 16,
    fontWeight: '600',
  },
  eyeButton: {
    borderRadius: 50,
    padding: 3,
    backgroundColor: Colors.buttonBlue,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.056
        : Dimensions.get('screen').height * 0.07,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.borderGray,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  footer: {
    marginTop: '10%',
    alignItems: 'center',
  },
  disclaimer1: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  disclaimer2: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
export default Login;
