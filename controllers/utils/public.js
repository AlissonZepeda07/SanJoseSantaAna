/*
* Controlador es de uso general en las páginas web del sitio público.
* Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/cliente.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'IvaneCare - Store';
// Constante para establecer el elemento del título principal.
const MAIN_TITLE = document.getElementById('mainTitle');

/* Función asíncrona para cargar el encabezado y pie del documento.
* Parámetros: ninguno.
* Retorno: ninguno.
*/
const loadTemplate = async () => {
// Petición para obtener en nombre del usuario que ha iniciado sesión.
const DATA = await fetchData(USER_API, 'getUser');
// Se comprueba si el usuario está autenticado para establecer el encabezado respectivo.
if (DATA.session) {
// Se verifica si la página web no es el inicio de sesión, de lo contrario se direcciona a la página web principal.
if (!location.pathname.endsWith('inicio_sesion.html')) {
// Se agrega el encabezado de la página web antes del contenido principal.
MAIN.insertAdjacentHTML('beforebegin', `
<nav class="<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style="width: 400px;">
            <img src="../../resources/img/logoc.png" alt="Logo" style="width: 80px;">
            COLEGIO SALESIANO SAN JOSÉ
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Admisión 2024</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ofertas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contactos</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Otros
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Pilet</a>
                        <a class="dropdown-item" href="#">Historia</a>
                        <a class="dropdown-item" href="#">Extracurricular</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

`);
} else {
location.href = 'index.html';}
} else {
// Se agrega el encabezado de la página web antes del contenido principal.
MAIN.insertAdjacentHTML('beforebegin', `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" style="width: 400px;">
            <img src="../../resources/img/logoc.png" alt="Logo" style="width: 80px;">
            COLEGIO SALESIANO SAN JOSÉ
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Admisión 2024</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ofertas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contactos</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Otros
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Pilet</a>
                        <a class="dropdown-item" href="#">Historia</a>
                        <a class="dropdown-item" href="#">Extracurricular</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`);
}
// Se agrega el pie de la página web después del contenido principal.
MAIN.insertAdjacentHTML('afterend', `
<footer class = "test">
    <div class="social-icons-container ">
        <a href="https://www.instagram.com/ivanecare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank" class="social-icons"></a>
        <a href="https://www.threads.net/@ivanecare" target="_blank" class="social-icons"></a>
        <a href="https://www.facebook.com/profile.php?id=61556911452120" target="_blank" class="social-icons"></a>
    </div>
    <ul class="footer-menu-conteiner">
    </ul>
    <span class="copyright">&copy;2024, IVANE CARE. All rights reserved</span>
</footer>
`);
}