import { SafeAreaView, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import Main from './src/components/Main';

export default function App() {
  return (
    <SafeAreaView>
      <Text style={tailwind('mb-6 text-center text-3xl')}>Wordle</Text>
      <Main />
    </SafeAreaView>
  );
}
