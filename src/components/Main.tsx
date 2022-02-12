import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import CandidateRow from './CandidateRow';

const Main = () => {
  return (
    <View style={tailwind('items-center justify-center')}>
      <CandidateRow></CandidateRow>
      <CandidateRow></CandidateRow>
      <CandidateRow></CandidateRow>
      <CandidateRow></CandidateRow>
      <CandidateRow></CandidateRow>
      <CandidateRow></CandidateRow>
    </View>
  );
};

export default Main;
