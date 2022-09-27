import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{backgroundColor: 'pink'}}>
      {/* <Image
        source={require('./assets/blue.jpg')}
        style={{width: '100%', height: 130}}/> */}
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          marginTop: 80,
          fontWeight: 'bold',
          color: 'blue',
          marginBottom: 2,
          margin: 25,
        }}>
        DARUL IFTA
      </Text>
      <Text style={{textAlign: 'center', color: 'blue'}}>
        A Complete Solution For Islamic Queries
      </Text>
      <Text style={{marginTop: 90, margin: 20}}>User Name</Text>
      <TextInput
        placeholder="UserName"
        style={{
          borderRadius: 4,
          height: 50,
          margin: 20,
          marginTop: 2,
          marginBottom: 5,
          backgroundColor: '#f5f5f5',
        }}
      />
      <Text style={{marginTop: 20, margin: 20}}>Password</Text>
      <TextInput
        placeholder="Password"
        style={{
          borderRadius: 4,
          height: 50,
          margin: 20,
          marginBottom: 5,
          backgroundColor: '#f5f5f5',
          marginTop: 2,
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{textAlign: 'left', marginLeft: 20, marginTop: 10}}>
          Remember me
        </Text>
        <Text style={{textAlign: 'right', marginRight: 20, marginTop: 10}}>
          Forget Password ?
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginRight: 20,
          borderRadius: 10,
          justifyContent: 'center',
          marginLeft: 20,
          marginTop: 20,
          height: 45,
          backgroundColor: 'green',
        }}>
        <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginRight: 20,
          borderRadius: 10,
          justifyContent: 'center',
          marginLeft: 20,
          marginTop: 20,
          height: 45,
          backgroundColor: 'white',
        }}>
        <Text style={{color: 'black', fontSize: 16, textAlign: 'center'}}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', marginTop: 20}}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};
export default Login;
