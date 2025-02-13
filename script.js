function checkInputs() {
    const inputForms = document.querySelectorAll('.inputForm');
    let allFilled = true;

    inputForms.forEach(inputForm => {
        const input = inputForm.querySelector('input');
        let warningText = inputForm.querySelector('.warning-text');

        if (!warningText) {
            warningText = document.createElement('span');
            warningText.classList.add('warning-text');
            warningText.textContent = 'Required';
            inputForm.appendChild(warningText);
        }

        if (input.value.trim() === '') {
            inputForm.style.border = '1.5px solid red';
            warningText.style.display = 'block';
            allFilled = false;
        } else {
            inputForm.style.border = '1.5px solid #ecedec';
            warningText.style.display = 'none';
        }
    });

    return allFilled;
}

document.querySelectorAll('.inputForm input').forEach(input => {
    input.addEventListener('input', checkInputs);
});

document.querySelector('.button-submit').addEventListener('click', (e) => {
    if (!checkInputs()) {
        e.preventDefault();
    }
});