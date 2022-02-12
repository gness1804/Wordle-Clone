import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import tailwind from 'tailwind-rn';

interface Props {
  targetWord: string;
  disabled: boolean;
}

const CandidateRow = ({ targetWord, disabled = true }: Props) => {
  const [word, setWord] = useState<string>('');
  const [firstLetter, setFirstLetter] = useState<string>('');
  const [secondLetter, setSecondLetter] = useState<string>('');
  const [thirdLetter, setThirdLetter] = useState<string>('');
  const [fourthLetter, setFourthLetter] = useState<string>('');
  const [fifthLetter, setFifthLetter] = useState<string>('');

  return (
    <View style={tailwind('flex flex-row mb-2')}>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput
          style={tailwind(`w-full h-full ${disabled && !firstLetter ? 'bg-gray-400' : ''}`)}
          onChangeText={(newText) => setFirstLetter(newText)}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
      </View>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput
          style={tailwind(`w-full h-full ${disabled && !secondLetter ? 'bg-gray-400' : ''}`)}
          onChangeText={(newText) => setSecondLetter(newText)}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
      </View>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput
          style={tailwind(`w-full h-full ${disabled && !thirdLetter ? 'bg-gray-400' : ''}`)}
          onChangeText={(newText) => setThirdLetter(newText)}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
      </View>
      <View style={tailwind('mr-2 border-2 border-gray-300 h-10 w-10')}>
        <TextInput
          style={tailwind(`w-full h-full ${disabled && !fourthLetter ? 'bg-gray-400' : ''}`)}
          onChangeText={(newText) => setFourthLetter(newText)}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
      </View>
      <View style={tailwind('border-2 border-gray-300 h-10 w-10')}>
        <TextInput
          style={tailwind(`w-full h-full ${disabled && !fifthLetter ? 'bg-gray-400' : ''}`)}
          onChangeText={(newText) => setFifthLetter(newText)}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />
      </View>
    </View>
  );
};

export default CandidateRow;
