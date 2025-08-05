import React from 'react'
import { Text, View } from 'react-native'

const getGreeting = () => {
    const timestamp = new Date()
    const hour = timestamp.getHours()
    if (hour < 12) {
        return 'Good Morning'
    } else if (hour > 12 && hour < 17) {
        return 'Good Afternoon'
    } else {
        return 'Good Evening'
    }
}

const Greeting = () => {
    return (
        <View>
            <Text style={{ fontSize: 14, fontWeight: '500', paddingTop: 4 }} selectable={false}>{`${getGreeting()}, Emily!`}</Text>
            <Text style={{ fontSize: 18, fontWeight: '900', paddingTop: 4 }} selectable={false}>Your upcoming appointments</Text>
        </View>
    )
}

export default Greeting