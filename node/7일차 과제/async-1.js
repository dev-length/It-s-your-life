function displayA() {
  console.log('A');
}

function displayB(collback) {
  setTimeout(() => {
    console.log('B');
    collback();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
// displayB();
// displayC();
