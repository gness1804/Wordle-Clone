import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import tailwind from 'tailwind-rn';

const CandidateRow = () => {
  const [word, setWord] = useState('');

  return (
    <View style={tailwind('flex flex-row mb-2')}>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput style={tailwind('w-full h-full')} />
      </View>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput style={tailwind('w-full h-full')} />
      </View>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput style={tailwind('w-full h-full')} />
      </View>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput style={tailwind('w-full h-full')} />
      </View>
      <View style={tailwind('border-2 border-gray-300 h-10 w-10')}>
        <TextInput style={tailwind('w-full h-full')} />
      </View>
    </View>
  );
};

export default CandidateRow;
