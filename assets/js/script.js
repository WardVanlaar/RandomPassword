// Assignment code here
  
  //var formEl = document.querySelector("#submission-form");

  //code from Xenophobic Xenomorph on Aug 13 2020 on codegrepper.com
  function showDiv() {
    document.getElementById('checkbox').style.display = "block";
  }
    
// Get references to the #generate element

  //code from https://www.tutorialstonight.com/password-generator-in-javascript.php
  const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }

  console.log(keys);

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

  console.log(getKey);

// Write password to the #password input
// Add event listener to generate button
  
  document.getElementById('generateBtn').addEventListener("click", createPassword);

  function createPassword(event) {
    event.preventDefault();

    const MinMax = document.getElementById("length").value;
    console.log(MinMax);
    if (MinMax<8 || MinMax>128) {
      alert("You must select a value between 8 and 128!");
      return;
    }

    const upper = document.getElementById("upperCase").checked;
    console.log(upper);
    const lower = document.getElementById("lowerCase").checked;
    console.log(lower);
    const number = document.getElementById("number").checked;
    console.log(number);
    const symbol = document.getElementById("symbol").checked;
    console.log(symbol);

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
    console.log(password);
    passwordBox.innerHTML = password;
  }


