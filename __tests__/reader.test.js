import read from '../src/reader';

describe('read function', () => {
  it('should return a promise', () => {
    const result = read();
    expect(result).toBeInstanceOf(Promise);
  });

  it('should resolve to an ArrayBuffer with the correct data', async () => {
    const buffer = await read();
    const bufferView = new Uint16Array(buffer);

    const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    
    // Проверяем, что длина буфера соответствует длине данных
    expect(bufferView.length).toBe(data.length);
    
    // Проверяем, что данные в буфере совпадают с исходными данными
    for (let i = 0; i < data.length; i++) {
      expect(bufferView[i]).toBe(data.charCodeAt(i));
    }
  });
});
