import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {Switch, View, Text, StyleSheet, StatusBar } from 'react-native';



const PreferencesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={{ flex: 1, flexDirection: 'column',}}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.headers}>General</Text>
        <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Turn off sounds</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Disable Animations</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Allow Push Notifications</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Quick Start-Up</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Allow Location Tracking</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Reminders</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Dark Mode</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Share to Social Media</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      <View style={{flex: 1, flexDirection: 'row', padding: 10 }}>
        <Text style={styles.switchText}>Hide Adverts</Text>
        <Switch
        trackColor={{ false: "#4f4f4f", true: "#2bb800" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#4f4f4f"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      </View>
      
    );
  
};

const styles = StyleSheet.create({

switchText: {
  fontSize: 18,
  color: 'black',
  padding: 5,

},

headers: {
  fontSize: 24,
  padding: 5,
},

});

export default PreferencesScreen;