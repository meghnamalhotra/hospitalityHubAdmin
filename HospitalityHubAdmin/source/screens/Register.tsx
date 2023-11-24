import React from 'react';
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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HotelView, FbSVG, GoogleSVG} from '../assets/svgs';
import {Colors} from '../theme/colors';
import {Separator, Button} from '../components';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';
const Register = () => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate('Verification');
  };

  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <SafeAreaView style={styles.main}>
        <ScrollView style={styles.titleText}>
          <HotelView
            height={
              Dimensions.get('screen').height > 700
                ? Dimensions.get('screen').height * 0.34
                : Dimensions.get('screen').height * 0.4
            }
            style={styles.svg}
          />
          <Text style={styles.heading}>
            Handle your Hotel, {'\n'}skip the hassles!
          </Text>
          <View style={styles.subtext}>
            <Separator
              width={'15%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
            <Text style={styles.subheading}>Log in or sign up</Text>
            <Separator
              width={'15%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
          </View>
          <View style={styles.inputBoxContainer}>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter Email"
                style={styles.inputText}
                placeholderTextColor={Colors.lightgray}
              />
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
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => {
                GoogleSignin.configure({
                  androidClientId:
                    '271773652755-nm71fh26hapkoo9hcdlrbjd5edsndi69.apps.googleusercontent.com',
                  iosClientId:
                    '271773652755-v4kjotnrubln8v6j2qo3e63amg48eg86.apps.googleusercontent.com',
                });
                GoogleSignin.hasPlayServices()
                  .then(hasPlayService => {
                    if (hasPlayService) {
                      GoogleSignin.signIn()
                        .then(userInfo => {
                          console.log(JSON.stringify(userInfo));
                        })
                        .catch(e => {
                          console.log('ERROR IS: ' + JSON.stringify(e));
                        });
                    }
                  })
                  .catch(e => {
                    console.log('ERROR IS: ' + JSON.stringify(e));
                  });
              }}>
              <GoogleSVG />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => {
                LoginManager.logInWithPermissions([
                  'public_profile',
                  'email',
                ]).then(
                  function (result) {
                    if (result.isCancelled) {
                      alert('Login Cancelled ' + JSON.stringify(result));
                    } else {
                      alert(
                        'Login success with  permisssions: ' +
                          result.grantedPermissions.toString(),
                      );
                      alert('Login Success ' + result.toString());
                    }
                  },
                  function (error) {
                    alert('Login failed with error: ' + error);
                  },
                );
              }}>
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
    borderRadius: 5,
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
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.056
        : Dimensions.get('screen').height * 0.07,
    width: '35%',
    marginHorizontal: '2%',
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
export default Register;
