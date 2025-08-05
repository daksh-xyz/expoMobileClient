import Card, { CardProps } from '@/components/home/appointments/components/Card';
import NavHeader from '@/components/NavHeader';
import { appointments } from '@/constants/Appointments';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const parseAppointmentDateTime = (dateStr: string, timeStr: string) => {
  // Remove weekday from dateStr
  const parts = dateStr.split(', ');
  const dateWithoutWeekday = parts.length === 2 ? parts[1] : dateStr;
  // Combine for Date parsing
  const combined = `${dateWithoutWeekday} ${timeStr}`;
  // Parse (assumes "5 August 2025 10:30 PM" format)
  return new Date(combined);
}

export default function Appointments() {
  const today = new Date();
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredAndSortedAppointments = appointments
    .filter(app => {
      const appointmentDateTime = parseAppointmentDateTime(app.appointmentDate, app.appointmentTime);
      return selectedTab === 'upcoming'
        ? appointmentDateTime >= today
        : appointmentDateTime < today;
    })
    .sort((a, b) => {
      const dateA = parseAppointmentDateTime(a.appointmentDate, a.appointmentTime);
      const dateB = parseAppointmentDateTime(b.appointmentDate, b.appointmentTime);
      // For both 'upcoming' and 'past', sort so soonest is first
      return selectedTab === "upcoming" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

  return (
    <View
      style={[
        styles.container,
        Dimensions.get("screen").width > 468
          ? { width: '30%', maxWidth: 500, alignSelf: 'center' }
          : { width: '100%' }
      ]}
    >
      <LinearGradient
        colors={['#ECCBEB', '#F6F4F0']}
        locations={[0.5, 1]}
        style={styles.container}
      >
        <NavHeader text={"Appointments"} />

        {/* Pill Switcher */}
        <View style={styles.switcherContainer}>
          <TouchableOpacity
            style={[
              styles.switcherButton,
              selectedTab === 'upcoming' && styles.switcherButtonActive,
            ]}
            onPress={() => setSelectedTab('upcoming')}
          >
            <Text style={[
              styles.switcherText,
              selectedTab === 'upcoming' && styles.switcherTextActive,
            ]}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switcherButton,
              selectedTab === 'past' && styles.switcherButtonActive,
            ]}
            onPress={() => setSelectedTab('past')}
          >
            <Text style={[
              styles.switcherText,
              selectedTab === 'past' && styles.switcherTextActive,
            ]}>
              Past
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredAndSortedAppointments}
          bounces={true}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparator}
          style={{ paddingHorizontal: 12, paddingBottom: 12, borderRadius: 12 }}
        />
      </LinearGradient>
    </View>
  );
}

const renderItem = ({ item }: { item: CardProps }) => (
  <View>
    <Card {...item} />
  </View>
);

const ItemSeparator = () => (
  <View style={{ minWidth: 12, minHeight: 12 }} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switcherContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
    backgroundColor: "#913393",
    borderRadius: 24,
    padding: 4,
    alignSelf: 'center',
  },
  switcherButton: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 24,
    backgroundColor: 'transparent',
  },
  switcherButtonActive: {
    backgroundColor: '#fff',
  },
  switcherText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  switcherTextActive: {
    color: '#000',
  },
});
