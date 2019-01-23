import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    title: 'Courses',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card borderRadius={5}> 
        <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Java</Text>
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium lectus quam id. Mauris in aliquam sem fringilla ut morbi.</Text>
        <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW'
         />

        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5299',
  },
});
