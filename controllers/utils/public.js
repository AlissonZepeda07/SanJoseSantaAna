/*
* Controlador es de uso general en las páginas web del sitio público.
* Sirve para manejar las plantillas del encabezado y pie del documento.
*/

// Constante para completar la ruta de la API.
const USER_API = 'services/public/colegio.php';
// Constante para establecer el elemento del contenido principal.
const MAIN = document.querySelector('main');
MAIN.style.paddingTop = '75px';
MAIN.style.paddingBottom = '100px';
MAIN.classList.add('container');
// Se establece el título de la página web.
document.querySelector('title').textContent = 'Colegio San Jose';
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
                        <a class="dropdown-item" href="#">Extracurricular</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`);
}
    // Se agrega el pie de la página web después del contenido principal.
    MAIN.insertAdjacentHTML('afterend', `
       <footer class="test ">
        <footer>
            <div class="footer-container">
                <div class="footer-column">
                    <h3>San Jose</h3>
                    <p class="fw-light">En Colegio Salesiano San José de Santa Ana tiene más de cien años de educar a la juventud para formar Buenos Cristianos y Honrados Ciudadanos.</p>
                </div>
                <div class="footer-column">
                    <p>
                        <h3>Redes Sociales</h3>
                        <a href="hhttps://www.facebook.com/CSSJSA/" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/cssj_sv/?hl=es" target="_blank"><i class="bi bi-instagram"></i></a>
                    </p>
                </div>
                <div class="footer-column">
                    <h3>Company</h3>
                    <p>Educacion<br><br>
                    Formacion<br><br>
                    Valores</p>
                </div>
                <div class="footer-column">
                    <h3>Contact us</h3>
                    <p>Black Hodoris Taekwondo, final calle 17 av 5 de marzo contiguo a colegio San Jose, Santa Ana.<br><br>
                    +503 2486 0800<br><br>
                    recepcion@salesianosanjose.edu.sv
                    </p>
                </div>
            </div>
        </footer>
        <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>Copyright &copy; 2024, All Right Reserved <a
                                        href="https://codepen.io/anupkumar92/">Here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    </footer>
        `);
    }

    /*Funcion para las tarjetas de extracurriculares*/
    function toggleCard(button) {
        const cardFlip = button.closest('.card-flip');
        cardFlip.classList.toggle('flipped');
    }

    $('.owl-testimonials').owlCarousel({
        center: true,
        items:1,
        loop:true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        margin:30,
        responsive:{
          992:{
              items:1
          },
          1200:{
              items:1
          }
        }
      });

  	$('.owl-banner').owlCarousel({
		center: true,
      items:1,
      loop:true,
      nav: true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});

	$('.owl-testimonials').owlCarousel({
	  center: true,
      items:1,
      loop:true,
      nav: true,
	  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      margin:30,
      responsive:{
        992:{
            items:1
        },
		1200:{
			items:1
		}
      }
	});


