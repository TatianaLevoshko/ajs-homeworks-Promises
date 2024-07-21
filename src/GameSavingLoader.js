import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(data => json(data))
      .then(value => JSON.parse(value))
      .catch(error => {
        throw new Error('Failed to load game saving: ' + error.message);
      });
  }
}
