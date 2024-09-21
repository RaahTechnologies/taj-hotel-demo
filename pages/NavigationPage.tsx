import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';

export default function NavigationPage() {
  const Drawer = createDrawerNavigator();

  // const {response} = route.params;
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen
        name="POS Customer Master"
        component={POSCustomerMasterScreen}
      />
      <Drawer.Screen name="POS Billing" component={POSBillingScreen} />
      <Drawer.Screen name="Day Sales" component={DaySalesScreen} />
      <Drawer.Screen name="Monthly Sales" component={MonthlySalesScreen} />
      <Drawer.Screen name="Yearly Sales" component={YearlySalesScreen} />
      <Drawer.Screen name="Stock Report" component={StockReportScreen} />
    </Drawer.Navigator>
  );
}

const POSCustomerMasterScreen = () => {
  return <View />;
};

const POSBillingScreen = () => {
  return <View />;
};

const DaySalesScreen = () => {
  return <View />;
};

const MonthlySalesScreen = () => {
  return <View />;
};

const YearlySalesScreen = () => {
  return <View />;
};

const StockReportScreen = () => {
  return <View />;
};

const styles = StyleSheet.create({});
