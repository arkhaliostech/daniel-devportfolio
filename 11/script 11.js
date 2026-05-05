function ForLoop() {
  const num = parseInt(document.getElementById("forNum").value);
  const text = document.getElementById("forText").value;

  if (isNaN(num) || !text) {
    document.getElementById("forOutput").innerHTML = "Please enter a valid number and text.";
    return;
  }

  let output = "";
  for (let i = 1; i <= num; i++) {
    output += i + ". " + text + "<br>";
  }
  document.getElementById("forOutput").innerHTML = output;
}

function WhileLoop() { 
  const num = parseInt(document.getElementById("whileNum").value);
  const text = document.getElementById("whileText").value;

  if (isNaN(num) || !text) {
    document.getElementById("whileOutput").innerHTML = "Please enter a valid number and text.";
    return;
  }

  let i = 1, output = "";
  while (i <= num) {
    output += i + ". " + text + "<br>";
    i++;
  }
  document.getElementById("whileOutput").innerHTML = output;
}

function DoWhileLoop() {
  const num = parseInt(document.getElementById("doNum").value);
  const text = document.getElementById("doText").value;

  if (isNaN(num) || !text) {
    document.getElementById("doOutput").innerHTML = "Please enter a valid number and text.";
    return;
  }

  let i = 1, output = "";
  do {
    output += i + ". " + text + "<br>";
    i++;
  } while (i <= num);

  document.getElementById("doOutput").innerHTML = output;
}

function clearOutput(id) {
  document.getElementById(id).innerHTML = "";
}
