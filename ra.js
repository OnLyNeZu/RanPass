const readline = require('readline');
const gradient = require('gradient-string');

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(gradient.vice("Selamat datang di password generator!"));

rl.question("Masukkan panjang password yang diinginkan: ", function(passwordLength) {
  var password = generatePassword(passwordLength);
  console.log("Password Anda adalah: " + password);
  rl.close();
});
