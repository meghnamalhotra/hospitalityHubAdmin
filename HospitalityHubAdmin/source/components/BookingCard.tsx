import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../theme/colors';
import Button from './Button';

interface Props {
    date: any;
    id: any;
    people: number;
    nights: number;
    payment: number;
    roomType: string;
    checkIn: string;
    checkOut: string;
}

const Card: React.FC<Props> = ({date, id, people, nights, payment, roomType, checkIn, checkOut}) => {
    return(
        <View style={styles.main}>
            <View style={styles.headerContainer}>
                <Text style={styles.bookingDate}>
                    Booking on - {date}
                </Text>
                <Text style={styles.bookingId}>
                    Booking ID- {id}
                </Text>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.detailsLeft}>
                    {people} Adults - {nights} nights
                </Text>
                <Text style={styles.detailsRight}>
                    Payment received - ₹{payment}
                </Text>
            </View>
            <View style={styles.roomTypeContainer}>
                <Text style={styles.detailsLeft}>
                {roomType} Room
            </Text>
            </View>
            <View style={styles.checkInOut}>
                <View>
                    <Text style={styles.checkInText}>
                        Check-In
                    </Text>
                    <Text style={styles.checkInDate}>
                        {checkIn} <Text style={styles.time}>10:00AM</Text>
                    </Text>
                </View>
                <View style={styles.toContainer}>
                    <Text>TO</Text>
                </View>
                <View>
                    <Text style={styles.checkInText}>
                        Check-Out
                    </Text>
                    <Text style={styles.checkInDate}>
                        {checkOut} <Text style={styles.time}>10:00AM</Text>
                    </Text>
                </View>
            </View>
            <Button title={'Guest Information'}/>
        </View>
    );
}

export default Card;

const styles= StyleSheet.create({
main: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingVertical: '5%',
    marginVertical: '2%',
    shadowColor: Colors.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
},
headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
},
bookingDate: {
    color: Colors.textBlue,
    fontSize: 15,
    fontWeight: '500',
},
bookingId: {
    color: Colors.buttonBlue,
    fontSize: 10,
    fontWeight: '500',
},
detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginTop: '5%',
},
roomTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
},
detailsLeft: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '500',
},
detailsRight: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '400',
},
checkInOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginVertical: '5%',
},
checkInText: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.black,
},
checkInDate: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '400',
},
toContainer: {
    backgroundColor: Colors.borderGray,
    borderRadius: 15,
    paddingVertical: '1%',
    paddingHorizontal: '2%',
},
time: {
    color: Colors.dullBlack,
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.5,
},
})

