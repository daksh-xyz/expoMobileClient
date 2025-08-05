import { Tabs } from 'expo-router';
import React from 'react';

import AppointmentIcon from '@/components/ui/AppointmentIcon';
import ExploreIcon from '@/components/ui/ExploreIcon';
import HomeIcon from '@/components/ui/HomeIcon';
import ProfileIcon from '@/components/ui/ProfileIcon';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  const width = Dimensions.get("screen").width > 468 ? '30%' : '100%'

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.icon,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 6,
          width: width,
          maxWidth: '100%',
          alignSelf: 'center'
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => {
            return (
              <View style={{ alignItems: 'center', height: '100%', justifyContent: 'flex-start', width: '100%' }}>
                <View><HomeIcon height={24} width={24} color={color} /></View>
                <Text style={{ color: color, fontSize: 10 }}>Home</Text>
                <View style={[styles.underline, focused ? { backgroundColor: color } : '']} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: 'Appointments',
          tabBarIcon: ({ focused, color }) => {
            return (
              <View style={{ alignItems: 'center', height: '100%', justifyContent: 'flex-start', width: '100%' }}>
                <View>
                  <AppointmentIcon height={24} width={24} color={color} />
                </View>
                <Text style={{ color: color, fontSize: 10 }}>Appointments</Text>
                <View style={[styles.underline, focused ? { backgroundColor: color } : '']} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused, color }) => {
            return (
              <View style={{ alignItems: 'center', height: '100%', justifyContent: 'flex-start', width: '100%' }}>
                <View><ExploreIcon height={24} width={24} color={color} /></View>
                <Text style={{ color: color, fontSize: 10 }}>Explore</Text>
                <View style={[styles.underline, focused ? { backgroundColor: color } : '']} />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => {
            return (
              <View style={{ alignItems: 'center', height: '100%', justifyContent: 'flex-start', width: '100%' }}>
                <View>
                  <ProfileIcon color={color} />
                </View>
                <Text style={{ color: color, fontSize: 10 }}>Profile</Text>
                <View style={[styles.underline, focused ? { backgroundColor: color } : '']} />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  underline: {
    minHeight: 4,
    maxHeight: 3,
    minWidth: 80,
    maxWidth: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
});
