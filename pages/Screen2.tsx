import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';

import BigText from '../components/BigText';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import filteredCharactersSelected from '../state/selectors/filteredCharacters';
import greetingsSelector from '../state/selectors/greetings';
import { useRecoilValue } from 'recoil';

export default function Screen2() {
  const [filter, setFilter] = React.useState('');

  const msg = useRecoilValue(greetingsSelector);
  const filteredCharacters = useRecoilValue(filteredCharactersSelected(filter));

  function filterChanged(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) {
    setFilter(e.nativeEvent.text);
  }

  return (
    <SafeAreaView>
      <BigText>Screen2</BigText>
      <BigText>{msg}</BigText>

      <TextInput
        value={filter}
        placeholder="Filter"
        onChange={filterChanged}
        onSubmitEditing={filterChanged}
        style={{ borderColor: 'black', borderWidth: 1 }}
      />
      <BigText>{JSON.stringify(filteredCharacters)}</BigText>
    </SafeAreaView>
  );
}
