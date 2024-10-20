document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    // Manejo del formulario de inicio de sesión
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
<<<<<<< HEAD
=======
<<<<<<< HEAD
        const usernameInput = document.getElementById('username').value;
        localStorage.setItem('username', usernameInput);
=======
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013

        const usernameInput = document.getElementById('currentUsername').value;
        localStorage.setItem('currentUsername', usernameInput);

<<<<<<< HEAD
=======
>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
        window.location.href = 'index.html';
    });

    // Redirigir al usuario si ya está autenticado
<<<<<<< HEAD

    const username = localStorage.getItem('currentUsername');

=======
<<<<<<< HEAD
    const username = localStorage.getItem('username');
=======

    const username = localStorage.getItem('currentUsername');

>>>>>>> 64962b6 (semana 4)
>>>>>>> 3e273dff5662dea14505a583e4af9241986f3013
    if (username) {
        window.location.href = 'index.html';
    }
});
