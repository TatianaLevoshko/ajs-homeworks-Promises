import GameSavingLoader from '../src/GameSavingLoader';
import GameSaving from '../src/GameSaving';

test('GameSavingLoader.load should return a GameSaving instance', async () => {
  const saving = await GameSavingLoader.load();
  expect(saving).toBeInstanceOf(GameSaving);
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
