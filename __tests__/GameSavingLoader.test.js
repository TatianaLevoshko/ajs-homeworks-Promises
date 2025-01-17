import GameSavingLoader from '../src/GameSavingLoader';

describe('GameSavingLoader', () => {
  test('should load game saving', () => {
    return GameSavingLoader.load()
      .then(saving => {
        expect(saving).toEqual({
          id: 9,
          created: 1546300800,
          userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000
          }
        });
      });
  });
});
