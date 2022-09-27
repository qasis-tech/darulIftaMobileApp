import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { LoginStyles } from './login.styles';
const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={LoginStyles.container}>
      {/* <Image
        source={require('./assets/blue.jpg')}
        style={{width: '100%', height: 130}}/> */}
      <Text
        style={LoginStyles.mainHeading}>
        DARUL IFTA
      </Text>
      <Text style={LoginStyles.subHeading}>
        A Complete Solution For Islamic Queries
      </Text>
      <Text style={LoginStyles.userName}>User Name</Text>
      <TextInput
        placeholder="UserName"
        style={LoginStyles.userTextInput}
      />
      <Text style={LoginStyles.password}>Password</Text>
      <TextInput
        placeholder="Password"
        style={LoginStyles.passwordTextInput}
      />
      <View style={LoginStyles.viewContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={LoginStyles.rememberMe}>
          Remember me
        </Text>
        <Text style={LoginStyles.forgetPassword}>
          Forget Password ?
        </Text>
      </View>
      <TouchableOpacity
        style={LoginStyles.loginButton}>
        <Text style={LoginStyles.loginText}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={LoginStyles.signInWithGoogle}>
        <Text style={LoginStyles.signInWithGoogleText}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
      <Text style={LoginStyles.dontHaveAnAcc}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};
export default Login;
