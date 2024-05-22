const p = new Promise((result, error) => {
  setTimeout(() => {
    let num = Math.random();
    if (num <= 0.8) {
      result(num);
    }
    error('생성된 숫자가 0.8이상임 - ' + num);
  }, 2000);
});

p.then((result) => {
  console.log('처리결과 : ', result);
}).catch((error) => {
  console.log('오류 : ', error);
});

console.log('## Promise 객체 생성!');
