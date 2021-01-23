import charactersAtom from '../atoms/characters';
import { selector } from 'recoil';

export default selector({
  key: 'greetings',
  get: ({ get }) => {
    const characters = get(charactersAtom);

    return characters.join(', ');
  },
});
