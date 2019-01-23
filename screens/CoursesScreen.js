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
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn how to incorporate basic operators, loops, conditional statements and more in the world's most universal and popular coding language in the Kickstart Java course.</Text>
        <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW'
         />

        </Card>
        <Card borderRadius={5}> 
        <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Python</Text>
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn the world's fastest growing and simplest programming language, used by scientists, engineers, mathematicians and more in our Python 3 curriculum.</Text>
        <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW'
         />

        </Card>
        <Card borderRadius={5}> 
        <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>C++</Text>
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn how to create online games, formulate websites, and build complex programs with online text editors and compilers through the Kickstart C++ course.
                  </Text>
        <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW'
         />

        </Card>
        <Card borderRadius={5}> 
        <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Swift</Text>
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn how to create complex and artistic apps on iOS platforms, including Augmented Reality and GPS tracking systems through our Swift course.</Text>
        <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW'
         />

        </Card>
        <Card borderRadius={5}> 
        <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Math</Text>
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn the basic fundamentals involved in the undestanding of Algebra 2, including functions and their behavior, in the Kickstart math course.</Text>
        <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW'
         />

        </Card>
        <Card borderRadius={5}> 
        <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Personal Finance</Text>
        <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn the necessary steps involved in creating a financially stable future in the Kickstart Personal Finance Course.</Text>
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
