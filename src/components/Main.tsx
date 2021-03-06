import React, { useState } from 'react';
import { Button, View } from 'react-native';
import tailwind from 'tailwind-rn';
import CandidateRow from './CandidateRow';

const Main = () => {
  const [activeRow, setActiveRow] = useState<number>(1);

  const targetWord = 'apple'; // TODO: make dynamic

  const handleSubmit = () => {

  };

  return (
    <View style={tailwind('items-center justify-center')}>
      <View style={tailwind('mb-10')}>
        <CandidateRow
          targetWord={targetWord}
          disabled={activeRow !== 1}
        ></CandidateRow>
        <CandidateRow
          targetWord={targetWord}
          disabled={activeRow !== 2}
        ></CandidateRow>
        <CandidateRow
          targetWord={targetWord}
          disabled={activeRow !== 3}
        ></CandidateRow>
        <CandidateRow
          targetWord={targetWord}
          disabled={activeRow !== 4}
        ></CandidateRow>
        <CandidateRow
          targetWord={targetWord}
          disabled={activeRow !== 5}
        ></CandidateRow>
        <CandidateRow
          targetWord={targetWord}
          disabled={activeRow !== 6}
        ></CandidateRow>
      </View>
      <Button onPress={handleSubmit} title='Submit' />
    </View>
  );
};

export default Main;
