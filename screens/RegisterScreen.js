import { View, Text, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { useLayoutEffect } from 'react'
import { Button, Input, Image } from 'react-native-elements'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const register = () => {
   auth.createUserWithEmailAndPassword(email,password)
   .then(authUser =>{
    authUser.user.updateProfile(
      {
        displayName:'name',
        photoUrl:imageUrl
      }
    )
   })
   .catch((error)=>alert(error.message))
    
    
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "login"
    })
  }, [navigation])


  return (
    <KeyboardAvoidingView style={styles.container} >
      <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: 'bold' }}>
        Create a Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autoFocus
          value={name}
          type='text'
          onChangeText={(text) => { setName(text) }}
        />
        <Input
          placeholder='Email'

          value={email}
          type='email'
          onChangeText={(text) => { setEmail(text) }}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          value={password}
          type='password'
          onChangeText={(text) => { setPassword(text) }}
        />
        <Input
          placeholder=' Profile Picture Url (optional)'

          value={imageUrl}
          type='text'
          onChangeText={(text) => { setImageUrl(text) }}
          onSubmitEditing={register}
        />
      </View>
      <Button
        raised
        onPress={register}
        title='Register'
        containerStyle={styles.button}

      />




    </KeyboardAvoidingView>
  )
}

export default RegisterScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'

  },
  button: {
    width: 200,
    marginTop: 10,

  },
  inputContainer: {
    width: 300,
  }

});