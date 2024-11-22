import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawingScreen from '@src/screens/DrawingScreen';
import StatisticsScreen from '@src/screens/StatisticsScreen';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const CustomCenterButton = ({
  borderColor,
  backgroundColor,
}: {
  borderColor: string;
  backgroundColor: string;
}) => {
  return (
    <View style={[styles.customButtonContainer, { borderColor, backgroundColor }]}>
      <Image source={require('@src/../assets/images/app-icon.png')} style={styles.customIcon} />
    </View>
  );
};

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: [styles.tabBarStyle, { backgroundColor: theme.colors.onSecondary }],
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Drawing"
        component={DrawingScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🎨 Drawing</Text>,
        }}
      />

      <Tab.Screen
        name="CenterButton"
        component={() => null}
        options={{
          tabBarIcon: () => null,
          tabBarButton: () => (
            <CustomCenterButton
              backgroundColor={theme.colors.background}
              borderColor={theme.colors.onPrimary}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>📊 Statistics</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    flexDirection: 'row',
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  customButtonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
  },
  customIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
