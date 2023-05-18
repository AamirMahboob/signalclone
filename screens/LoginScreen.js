import { View, Text, KeyboardAvoidingView} from 'react-native'
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react'
import React from 'react'
import { Button,Input,Image } from 'react-native-elements'
import RegisterScreen from './RegisterScreen';
import { auth } from '@react-native-firebase/auth';
const LoginScreen = ({navigation}) => {
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   
   useEffect(()=>{
    
    auth.onAuthStateChanged

   },[])

  return (
    <KeyboardAvoidingView style={ {flex:1,  alignItems:'center',justifyContent:'center',padding:10,backgroundColor:'white'}}>
     <Image  
        source={{
          uri:'https://cdn.pixabay.com/photo/2016/11/30/18/14/chat-1873536_1280.png'
        }}
        style={{
          width:100,
          height:100

        }}
     />
      <View style={{width:300}}>
      <Input placeholder='Email' autoFocus type='email'
       value={email}
       onChangeText={(text)=>{
        setEmail(text)
       }} 
          
          
      />

        <Input 
         placeholder='Password' 
         secureTextEntry  type='password'
         value ={password} 
         onChangeText ={(text)=>{
          setPassword(text)
         }}
          
 
        />
      </View>

       <View  > 
       <Button containerStyle= {styles.button} title='Log in'   />
       <Button onPress={()=>{navigation.navigate("Register")}} containerStyle= {styles.button} title='Register' type='outline' />
       </View>
    
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
   button:{
    width:200,
    marginTop:10
     
   }
});