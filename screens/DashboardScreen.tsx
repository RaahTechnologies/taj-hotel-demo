import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function DashboardScreen() {
  // useEffect(() => {
  //   const url =
  //   'http://scheduler.fcaintegral.com:9702/FWReportService.SVC/GenerateDataSetForDataReport';

  // const body = {
  //   ID: user_id,
  // };

  // fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8',
  //       apikey: '79e10aef-856a-4b02-abfc-5a04163d25fb',
  //       user_id: user_id,
  //       user_type: '0',
  //       company_id: company_id,
  //       division_id: division_id,
  //       session_id: session_id,
  //       Host: 'scheduler.fcaintegral.com:9702',
  //     },
  //     body: JSON.stringify(body),
  //   });

  //   const responseData = response.json();

  // })

  return (
    <View>
      <Text>DashboardScreen</Text>
      <View style={{height: screenHeight, width: screenWidth}}>
        <DataTable
          data={[
            {name: 'Muhammad Rafeh', age: 21, gender: 'male'},
            {name: 'Muhammad Akif', age: 22, gender: 'male'},
            {name: 'Muhammad Umar', age: 21, gender: 'male'},
            {name: 'Amna Shakeel', age: 22, gender: 'female'},
            {name: 'Muhammad Ammar', age: 20, gender: 'male'},
            {name: 'Muhammad Moiz', age: 13, gender: 'male'},
          ]} // list of objects
          colNames={['name', 'age', 'gender']} //List of Strings
          colSettings={[
            {name: 'name', type: COL_TYPES.STRING, width: '40%'},
            {name: 'age', type: COL_TYPES.INT, width: '30%'},
            {name: 'gender', type: COL_TYPES.STRING, width: '30%'},
          ]} //List of Objects
          noOfPages={2} //number
          backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
          headerLabelStyle={{color: 'grey', fontSize: 12}} //Text Style Works
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
