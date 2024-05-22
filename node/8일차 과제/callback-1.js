const order = (coffee, collback) => {
  console.log(`${coffee} 주문 접수 완료`);
  setTimeout(() => {
    collback(coffee);
  }, 3000);
};

const display = (result) => {
  console.log(`<<3초 경과 후>>`), console.log(`${result} 완료!`);
};

order('아메리카노', display);
