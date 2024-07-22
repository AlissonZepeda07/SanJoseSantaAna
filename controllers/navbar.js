// Codigo para tener el header, para luego mandarlo a llamar
const header = document.querySelector("header");

header.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
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
`