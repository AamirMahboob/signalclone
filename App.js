import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import LoginScreen from './screens/LoginScreen';

const stack = createNativeStackNavigator();

export default function App() {
  const globalScreenOptions = {
    headerStyle : {backgroundColor:'#2C6BED'},
    headerTitleStyle : {color:'white'},
    headerTintStyle : {color:'white'},
  }
  return (
   < NavigationContainer >
     <stack.Navigator screenOptions={globalScreenOptions}>
      <stack.Screen
       name='Login' component={LoginScreen} />
       <stack.Screen
       name='Register' component={RegisterScreen} />
     </stack.Navigator>
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
