import BigText from '../components/BigText';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import charactersSelector from '../state/selectors/characters';
import { useRecoilValueLoadable } from 'recoil';

export default function Screen3() {
  const characters = useRecoilValueLoadable(charactersSelector);

  const state = characters.state;

  return (
    <SafeAreaView>
      <BigText>Screen3</BigText>
      <BigText>{state === 'loading' && 'LOADING'}</BigText>
      <BigText>
        {state === 'hasValue' && JSON.stringify(characters.contents)}
      </BigText>
      <BigText>{state === 'hasError' && 'An error occurred'}</BigText>
    </SafeAreaView>
  );
}
