// Load scripts from JSON file
fetch('scripts.json')
    .then(response => response.json())
    .then(data => {
        const scriptList = document.getElementById('script-list');
        data.forEach(script => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#">${script.title}</a>`;
            li.onclick = () => alert(script.content);
            scriptList.appendChild(li);
        });
    });

// Handle login form submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if ((username === 'Patrosxf' && password === 'Tt123456zxc') || (username === 'timur4923' && password === 'Tt123456zxc')) {
        alert('Login successful');
        window.location.href = 'admin.html';
    } else {
        alert('Invalid credentials');
    }
});

// Handle registration form submission
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add registration logic here if needed
    alert('Registration is not implemented in this static site');
});

// Handle add script form submission
document.getElementById('add-script-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    alert(`Script Added:\nTitle: ${title}\nContent: ${content}`);
    // You can add logic to save the script to the JSON file or local storage here
});
