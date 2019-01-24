import React from 'react';
import { ScrollView, StyleSheet, Text, Image, SectionList } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default class CoursesScreen extends React.Component {
  static navigationOptions = {
    title: 'Courses',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

          <Card borderRadius={10} width={345} padding={1}> 
          <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Java</Text>
          <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn how to incorporate basic operators, loops, conditional statements and more in the world's most universal and popular coding language in the Kickstart Java course.</Text>
          
                <ScrollView
                horizontal={true}
                style={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                <Card borderRadius={5} width={285}> 
                <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Unit 1</Text>
                <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Programming, Computing, and Software Basics</Text>
                <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW'
                />

                </Card>
                <Card borderRadius={5} width={300}> 
                <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Unit 2</Text>
                <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Variables and Basic Arithmetic Operators</Text>
                <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW'
                />
                </Card>
              </ScrollView>

          </Card>

          <Card borderRadius={10} width={345} padding={1}> 
          <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Python</Text>
          <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn how to incorporate basic operators, loops, conditional statements and more in the world's most universal and popular coding language in the Kickstart Java course.</Text>
          
                <ScrollView
                horizontal={true}
                style={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                <Card borderRadius={5} width={300}> 
                <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Unit 1</Text>
                <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Programming, Computing, and Software Basics</Text>
                <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW'
                />

                </Card>
                <Card borderRadius={5} width={300}> 
                <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Unit 2</Text>
                <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Variables and Basic Arithmetic Operators</Text>
                <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW'
                />
                </Card>
              </ScrollView>

          </Card>

          <Card borderRadius={10} width={345} padding={1}> 
          <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>C++</Text>
          <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Learn how to incorporate basic operators, loops, conditional statements and more in the world's most universal and popular coding language in the Kickstart Java course.</Text>
          
                <ScrollView
                horizontal={true}
                style={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                <Card borderRadius={5} width={300}> 
                <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Unit 1</Text>
                <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Programming, Computing, and Software Basics</Text>
                <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW'
                />

                </Card>
                <Card borderRadius={5} width={300}> 
                <Text style={{alignSelf:'center', fontSize: 24,  paddingTop: 1, color: '#000000', }}>Unit 2</Text>
                <Text style={{alignSelf:'center', fontSize: 12,  padding: 10, color: '#000000', alignContent: 'center', textAlign: 'center' }}>Variables and Basic Arithmetic Operators</Text>
                <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW'
                />
                </Card>
              </ScrollView>

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
  header: {
    backgroundColor : '#e5e5e5',
    fontSize : 20,
    padding: 5,
    color: '#212121',
  }
});
