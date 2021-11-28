// Assignment code here

//code from Xenophobic Xenomorph on Aug 13 2020 on codegrepper.com
function showDiv() {
  document.getElementById('checkbox').style.display = "block";
}

  // Get references to the #generate element

  /*code from https://www.tutorialstonight.com/password-generator-in-javascript.php*/
  const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];

  // Write password to the #password input

  function createPassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }





// Add event listener to generate button

//generateBtn.addEventListener("click", writePassword);
//*/
