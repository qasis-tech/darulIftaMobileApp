import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import Loader from '../../components/common/loader';
import {LoginStyles} from './login.styles';

export default function Login() {
  const [isLoading, setLoader] = useState(false);

  return (
    <View style={LoginStyles.container}>
      {isLoading ? <Loader /> : <Text>Login Page</Text>}
    </View>
  );
}
