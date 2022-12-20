import login from "./login.json" ; 
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import home from './home'

const UserTextInput = () => {
    const [username, onUserNameChangeText] = useState();
    const [password, onPasswordChangeText] = useState();

    const sumbite = ()=>{
        if(login.username == username){
            if(login.password == password){
                document.window(home)
            }
        }
    }

  return (
    <>
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onUserNameChangeText(text)}
        value={username}
        />
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onPasswordChangeText(text)}
        value={password}
        />
        <button onClick={sumbite}></button>
    </>
  );
}

export default UserTextInput;