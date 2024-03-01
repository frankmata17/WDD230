// form.js

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.querySelector('.submitBtn');
    const message = document.querySelector('#formMessage');

    function checkPasswordMatch() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password !== confirmPassword || password === '') {
            message.textContent = '❗ Passwords DO NOT MATCH or Password is empty!';
            message.style.visibility = 'visible';
            confirmPasswordInput.style.backgroundColor = '#fff0f3';
            submitBtn.setAttribute('disabled', 'disabled');
        } else {
            message.style.visibility = 'hidden';
            confirmPasswordInput.style.backgroundColor = '#fff';
            submitBtn.removeAttribute('disabled');
        }
    }

    confirmPasswordInput.addEventListener('input', checkPasswordMatch);
    confirmPasswordInput.addEventListener('change', checkPasswordMatch);
});
