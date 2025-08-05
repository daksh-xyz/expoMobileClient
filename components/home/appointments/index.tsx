import { parseAppointmentDateTime } from '@/app/(tabs)/appointments'
import { appointments } from '@/constants/Appointments'
import ItemSeparator from '@/utils/ItemSeparator'
import React from 'react'
import { FlatList, View } from 'react-native'
import Card, { CardProps } from './components/Card'

const renderItem = ({ item }: { item: CardProps }) => {
    return (
        <View>
            <Card {...item} />
        </View>
    )
}

const Appointments = () => {
    const today = new Date();
    const filteredAndSortedAppointments = appointments
        .filter(app => {
            const appointmentDateTime = parseAppointmentDateTime(app.appointmentDate, app.appointmentTime);
            return appointmentDateTime >= today
        })
        .sort((a, b) => {
            const dateA = parseAppointmentDateTime(a.appointmentDate, a.appointmentTime);
            const dateB = parseAppointmentDateTime(b.appointmentDate, b.appointmentTime);
            return dateA.getTime() - dateB.getTime();
        });
    return (
        <View>
            <FlatList
                data={filteredAndSortedAppointments}
                bounces={true}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    )
}

export default Appointments