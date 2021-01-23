import {
  NativeSyntheticEvent,
  SafeAreaView,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';

import BigText from '../components/BigText';
import React from 'react';
import charactersAtom from '../state/atoms/characters';
import { useRecoilState } from 'recoil';

export default function Screen1() {
  // const characters = useRecoilValue(charactersAtom); //get
  // const setCharacters = useSetRecoilState(charactersAtom); // set
  const [characters, setCharacters] = useRecoilState(charactersAtom);

  function addCharacter(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) {
    setCharacters([...characters, e.nativeEvent.text]);
  }

  return (
    <SafeAreaView>
      <BigText>Screen1</BigText>
      <BigText>{JSON.stringify(characters)}</BigText>
      <TextInput
        placeholder="new character"
        onSubmitEditing={addCharacter}
        style={{ borderColor: 'black', borderWidth: 1 }}
      />
    </SafeAreaView>
  );
}
