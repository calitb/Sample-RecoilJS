import { selector } from 'recoil';

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });

export default selector({
  key: 'characters-fetched',
  get: async () => {
    await delay();

    // throw new Error('Failed');

    return ['Rick', 'morty'];
  },
});
