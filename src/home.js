import 'react-native-gesture-handler';  
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Modal, StatusBar} from 'react-native';
import logo from './icon.png';

const HomeScreen = ({ navigation }) => {
      const [modalVisible, setModalVisible] = useState(false);
      return (
          <View style={styles.container}> 
          <StatusBar barStyle="dark-content" />
        <Modal animationType='slide' transparent={true} visible={modalVisible}> 
          <View style={{...styles.container, backgroundColor: '#d6d6d6'}}>  
            <Text style={styles.modalText}>Welcome to SelfTarget.{'\n'}SelfTarget is an app that functions as a to-do-list but expands
            upon this by setting targets and allowing you to keep track of them.{'\n'}
            To use this app just press the 'Create A Task' button which will take you to a new page to create a target. From here you can write
            what you want the target to be and set it. Once you have achieved the target it can be removed by pressing the blue cursor at the
            far right side</Text> 
            <TouchableHighlight
                style={styles.buttonDesign} onPress={() => {setModalVisible(!modalVisible);}}>
                <Text style={styles.buttonText}>Back To Home</Text>
              </TouchableHighlight> 
          </View>
        </Modal>  
        <Text style={styles.textContent}>Welcome To</Text> 
          <Image source={logo} style={{width: 300, height: 300,}}/> 
            <TouchableHighlight onPress={() => navigation.navigate('Task')} 
            style={styles.buttonDesign}> 
              <Text style={styles.buttonText}>Create A Task</Text> 
            </TouchableHighlight> 
            <Text>{'\n'}</Text>
            <TouchableHighlight style={styles.buttonDesign} onPress={() => {setModalVisible(true);}}>
          <Text style={styles.buttonText}>Help</Text> 
        </TouchableHighlight>  
        <Text>{'\n'}</Text>
        <TouchableHighlight style={styles.buttonDesign} onPress={() => navigation.navigate('Preferences')}>
          <Text style={styles.buttonText}>Preferences</Text>
        </TouchableHighlight>
      </View>
    );
  };

  const styles = StyleSheet.create({   
    container: { 
      flex: 1,   
      alignItems: 'center', 
      justifyContent: 'center', 
    },  
    textContent: { 
      color: 'black',
      alignSelf: 'center',  
      fontSize: 30, 
    },
    buttonDesign: { 
      backgroundColor: '#4fe8cc',
      borderRadius: 20, 
      height: 40,
      width: 250,
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 32,
      alignSelf: 'center',
    },
    modalText: {
      fontSize: 24,
      color: 'black',
      alignContent: 'center',
      alignSelf: 'center',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    }
  });

  export default HomeScreen;