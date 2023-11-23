function submitForm() {
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;

    if (name == '' || number == '' || email == '') {
        alert('Please fill in all empty fields');
        return;
    }
    
    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = number;
    cell3.textContent = email;

    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('email').value = '';
}

