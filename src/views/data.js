import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Data() {
  const [data, setdata] = useState([]);

  async function getData() {
    fetch('http://192.168.9.6:3001/api/find')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setdata(data.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          {data.map((ele, index) => {
            return (
              <View key={index}>
                <Text>{ele?._id}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
export default Data;
