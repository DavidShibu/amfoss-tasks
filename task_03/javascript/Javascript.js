const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number (n): ', (n) => {
  n = parseInt(n);

  console.log(`The prime numbers up to ${n} are:`);

  for (let i = 2; i <= n; i++) {
    let a = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        a = false;
        break;
      }
    }
    if (a) {
      console.log(i);
    }
  }

  rl.close();
});