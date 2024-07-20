import read from '../src/reader';

describe('read', () => {
  test('should read file and return ArrayBuffer', async () => {
    const result = await read();
    const bufferView = new Uint16Array(result);
    expect(bufferView[0]).toBe(123);
  });
});
