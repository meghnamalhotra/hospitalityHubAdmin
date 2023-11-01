// import React from 'react';
// import {Text, View,StyleSheet} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// const Reviews =({navigation} : any) => {
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => {
//         //   navigation.navigate('SetLocation');
//         }}>
//         <Text style={style.text}>Review screen here</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const style : any = StyleSheet.create({
// text:{
//   fontFamily:'Poppins-Bold'
// }
// })
// export default Reviews;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';
import {ratings} from '../constants/ratings';
import StarRating from '../components/StarRating';
import Seperator from '../components/Separator';
const CustomerReview = () => {
  const renderItem = ({item}) => (
    <>
      <View style={styles.reviewContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: item.image_url}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <StarRating rating={item.rating} size={20} color={Colors.yellow} />
          <Text style={styles.reviewText}>{item.review}</Text>
        </View>
      </View>
      <View style={styles.seperator}>
        <Seperator width={390} height={1} backgroundColor={Colors.grey} />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperHead}>
        <Text style={styles.uppertextHead}>Customer Reviews</Text>
      </View>
      <Seperator width={500} height={1.5} backgroundColor={'black'} />
      <View style={styles.upper}>
        <Text style={styles.uppertext}>{ratings.total_ratings} Ratings</Text>
        <View style={styles.rating}>
          <StarRating
            rating={ratings.average_rating}
            size={38}
            color={Colors.lighBlue}
          />
          <Text style={styles.upperrating}>{ratings.average_rating}</Text>
        </View>
        <Text style={styles.review}>Reviews</Text>
        <View style={styles.seperator}>
          <Seperator width={390} height={1.5} backgroundColor={'black'} />
        </View>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          data={ratings.individual_ratings}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    marginHorizontal: '5%',
  },
  rating: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  uppertext: {
    fontFamily: typography.primary,
    fontSize: 25,
    fontWeight: '500',
    marginTop: '6%',
    color: Colors.lighBlue,
  },
  upperrating: {
    alignSelf: 'flex-start',
    fontFamily: typography.primary,
    fontSize: 40,
    fontWeight: '700',
    color: Colors.lighBlue,
    marginLeft: 10,
  },
  review: {
    fontFamily: typography.primary,
    fontSize: 40,
    fontWeight: '600',
    marginTop: '2%',
    color: Colors.black,
  },
  flatlist: {
    flex: 1,
    marginTop: '1%',
  },
  reviewContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    width: '20%',
    //backgroundColor: 'pink',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  textContainer: {
    width: '80%',
  },
  name: {
    fontFamily: typography.primary,
    fontSize: 18,
    marginBottom: '2%',
    color: Colors.black,
    fontWeight: 'bold',
  },
  reviewText: {
    fontFamily: typography.primary,
    fontSize: 16,
    marginTop: '4%',
    color: Colors.black,
  },
  seperator: {
    alignSelf: 'center',
  },
  upperHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
    margin: 16,
  },
  uppertextHead: {
    fontFamily: typography.primary,
    fontSize: 30,
    fontWeight: '600',
    marginLeft: '5%',
    color: Colors.black,
  },
});
export default CustomerReview;
