function calculate() {
  const out = document.getElementById('sum');
  const n1 = document.getElementById('num1').value.trim();
  const n2 = document.getElementById('num2').value.trim();

  if (n1 === '' || n2 === '') {
    out.textContent = 'Please enter both numbers.';
    out.style.color = 'crimson';
    return;
  }

  const a = parseFloat(n1);
  const b = parseFloat(n2);

  if (isNaN(a) || isNaN(b)) {
    out.textContent = 'Please enter valid numeric values.';
    out.style.color = 'crimson';
    return;
  }

  const sum = a + b;
  out.textContent = 'Sum: ' + sum;
  out.style.color = ''; // reset color to default
}

// Clear fields and result
function clearFields() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('sum').textContent = '';
}
