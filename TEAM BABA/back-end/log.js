async function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (!email || !password) {
        errorMessage.textContent = 'Both fields are required.';
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const data = await response.json();
            errorMessage.textContent = data.message;
            return false;
        }

        document.body.classList.add('fade-out');
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 500);

    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again.';
        return false;
    }

    return false;
}
