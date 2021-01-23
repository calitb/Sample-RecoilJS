import BigText from '../components/BigText';
import ErrorBoundary from '../ErrorBoundary';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import charactersSelector from '../state/selectors/characters';
import { useRecoilValue } from 'recoil';

export default function Screen4() {
  return (
    <SafeAreaView>
      <BigText>Screen4</BigText>
      <ErrorBoundary>
        <React.Suspense fallback={<BigText>'LOADING'</BigText>}>
          <CharactersView />
        </React.Suspense>
      </ErrorBoundary>
    </SafeAreaView>
  );
}

function CharactersView() {
  const characters = useRecoilValue(charactersSelector);

  return <BigText>{JSON.stringify(characters)}</BigText>;
}
