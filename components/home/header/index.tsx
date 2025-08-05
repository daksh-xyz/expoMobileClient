import NotificationBell from '@/assets/svg/bell-icon.svg'
import SOSIcon from '@/assets/svg/sos.svg'
import ThomsonHeader from '@/assets/svg/thomson-logo.svg'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Header = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
                    <ThomsonHeader />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, alignItems: 'center' }}>
                    <SOSIcon />
                    <NotificationBell />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})