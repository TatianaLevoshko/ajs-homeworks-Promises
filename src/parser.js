export default function json(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
}
