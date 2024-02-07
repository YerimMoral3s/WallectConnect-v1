import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useWeb3Modal} from '@web3modal/wagmi-react-native';

const Open = () => {
  const {open} = useWeb3Modal();

  return (
    <View style={{marginTop: 100}}>
      <Pressable onPress={() => open()} style={{borderWidth: 1}}>
        <Text>Open Connect Modal</Text>
      </Pressable>
    </View>
  );
};

export default Open;
