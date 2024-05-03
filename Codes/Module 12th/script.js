// script.js

document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('registerMessage').textContent = data.message;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Registration failed:', error);
        document.getElementById('registerMessage').textContent = 'Registration failed. Please try again.';
    }
});
