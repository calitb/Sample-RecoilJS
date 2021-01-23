import charactersAtom from '../atoms/characters';
import { selectorFamily } from 'recoil';

export default selectorFamily({
  key: 'filtered-characters',
  get: (filter: string) => ({ get }) => {
    const characters = get(charactersAtom);

    return characters.filter((character) => character.startsWith(filter));
  },
});
