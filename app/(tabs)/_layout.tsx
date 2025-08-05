import { Tabs } from 'expo-router';
import React from 'react';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
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
                <Entypo name='home' size={24} color={color} />
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
                <Ionicons name="document-text-outline" size={24} color={color} />
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
                <FontAwesome name="newspaper-o" size={24} color={color} />
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
                <Ionicons name="person-outline" size={24} color={color} />
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
