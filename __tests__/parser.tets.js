import read from '../src/parser'; // Замените на путь к вашему файлу

describe('read function', () => {
  it('should return a Promise', () => {
    const result = read();
    expect(result).toBeInstanceOf(Promise);
  });

  it('should resolve to an ArrayBuffer with correct content', async () => {
    const expectedData = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = await read();
    const bufferView = new Uint16Array(buffer);

    // Преобразуем обратно в строку
    let resultData = '';
    for (let i = 0; i < bufferView.length; i++) {
      resultData += String.fromCharCode(bufferView[i]);
    }

    console.log(resultData); // Для отладки

    expect(resultData).toBe(expectedData);
  });

  it('should resolve after approximately 1000ms', async () => {
    const start = Date.now();
    await read();
    const end = Date.now();

    console.log(end - start); // Для отладки

    expect(end - start).toBeGreaterThanOrEqual(1000);
    expect(end - start).toBeLessThan(1100); // Проверка с небольшим запасом времени
  });
});