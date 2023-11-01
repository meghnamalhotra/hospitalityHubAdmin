import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Navigate} from '../assets/svgs';

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Hotel Information</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
          </Text>
          <Navigate style={styles.navigateIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Images</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
          </Text>
          <Navigate style={styles.navigateIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Amenities</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
          </Text>
          <Navigate style={styles.navigateIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Property Details</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
          </Text>
          <Navigate style={styles.navigateIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Policies & Finance</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
          </Text>
          <Navigate style={styles.navigateIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>User Profile</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur {'\n'}adipiscing elit.
          </Text>
          <Navigate style={styles.navigateIcon} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4ebf5',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 14,
    borderRadius: 10,
    margin: 10,
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
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E91B6',
    paddingBottom: 10,
  },
  text: {
    color: '#787878',
    fontWeight: '500',
    fontSize: 16,
  },
  navigateIcon: {
    position: 'absolute',
    left: '98%',
    top: '50%',
  },
});

export default ProfilePage;
