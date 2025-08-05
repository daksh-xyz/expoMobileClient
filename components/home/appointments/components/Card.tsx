import { parseAppointmentDateTime } from '@/app/(tabs)/appointments';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface CardProps {
    doctorName: string,
    ProfileIcon: React.FC<
        SvgProps & {
            fill?: string;
            fillSecondary?: string;
            fillTertiary?: string;
        }
    >,
    appointmentDate: string,
    appointmentTime: string,
}

const handlePress = () => {
    Linking.openURL('https://maps.app.goo.gl/AfT9YCGMYbKJXb5u5');
}

const Card = ({ doctorName, ProfileIcon, appointmentDate, appointmentTime }: CardProps) => {
    const now = new Date();
    const end = new Date(now.getTime() + 360 * 60 * 1000);
    const appDate = parseAppointmentDateTime(appointmentDate, appointmentTime);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <ProfileIcon height={50} width={50} />
                <View>
                    <Text selectable={false}>{doctorName}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.appointmentDetails} selectable={false}>{appointmentDate} | </Text>
                        <Text style={styles.appointmentDetails} selectable={false}>{appointmentTime}</Text>
                    </View>
                </View>
            </View>
            {appDate >= now && appDate <= end ? (
                <View style={styles.navigation}>
                    <View style={{ minHeight: 2, maxHeight: 3, minWidth: '100%', maxWidth: '100%', backgroundColor: '#e7e7e7' }} />
                    <TouchableOpacity
                        onPress={() => handlePress()}
                    >
                        <Text style={styles.navText}>Start Navigation To Clinic</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.navigation}>
                    <View style={{ minHeight: 2, maxHeight: 3, minWidth: '100%', maxWidth: '100%', backgroundColor: '#e7e7e7' }} />
                    <Text style={{ paddingTop: 12, fontSize: 14, textAlign: 'center' }} selectable={false}>Start Navigation To Clinic</Text>
                </View>
            )}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        padding: 12,
        paddingRight: 32,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    appointmentDetails: {
        fontSize: 12,
        fontWeight: '400'
    },
    navigation: {
        padding: 12,
        paddingLeft: 32,
        alignItems: 'center',
    },
    navText: {
        marginTop: 12,
        fontSize: 14,
        fontWeight: '700',
        color: '#913393',
        textAlign: 'center'
    }
})