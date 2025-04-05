// Learnt a new way to call fucntions which is calling them straight from html using an onclick atrribute as an eventlistener and calling the js function within the html
// Global scope
let passengerCount = document.getElementById("passengerCount");
dayStarted = false; // flag variable
// you intend to add in a variable to check if the button:active attribut is true, to see if it's possible to add when the button reduces in size and not after, perhaps see if you can add a delay so it doesnt just spam add

function increment() {
  if (!dayStarted) {
    // checks if the dayStarted variable is falsy (Basically 'if dayStarted is false, execute the following' and dayStarted is actually false so the condition evaluates to true )
    let confirmation = prompt("Are you ready to begin your day?");
    if (
      confirmation &&
      (confirmation.toLowerCase() == "yes" ||
        confirmation.toLowerCase() == "yeah" || confirmation.toLowerCase() == "y" || confirmation.toLowerCase() == "yup")
    ) {
      // tolowercase() is a function, so remember to call it as one and have it and other functions called in a () of their own. You also need to evaluate all other cases separately when using functions
      dayStarted = true;
      passengerCount.textContent = -1;
    } else {
      alert("Invalid entry.");
      return; // exit function
    }
  }
  let totalCount = +passengerCount.textContent + 1;
  passengerCount.textContent = totalCount;
}

// creating a function to display the alert only once
let decrementVar = false
function decrementAlert() {
  while (decrementVar == false) {
    alert (
      "You can't spit out more humans than have already entered your bus fool"
    )
    decrementVar = true
  }
}
// remember the functions are being called inside the html document
function decrement() {
  if (passengerCount.textContent == "None") {
    alert("You have yet to start your day");
  } else if (passengerCount.textContent > 0) {
    let totalCount = +passengerCount.textContent - 1;
    passengerCount.textContent = totalCount;
  } else {
    decrementAlert()
  }
}
