let body = document.getElementById('body');
body.innerHTML = `
     <header>
        <nav class="menu-container"> 
            <!-- burger menu -->
            <input type="checkbox" aria-label="Toggle menu" />
            <span></span>
            <span></span>
            <span></span>
    
            <!-- logo -->
            <a href="#" class="menu-logo">
                <img src="https://www.teleadhesivo.com/es/img/pokgo03-png/folder/products-detalle-png/pegatinas-coches-motos-poke-ball---pokemon.png" alt="Icono-Pokebol" id="pokebol"/>
            </a>
            <!-- menu items -->
            <div class="menu">
                <ul>
                    <li>
                        <a href="#home" id="botonHome">
                        Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" id="botonPokemons">
                        Pokemons
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#signup" id="botonSignUp">
                        Sign-up
                        </a>
                    </li>
                    <li>
                        <a href="#login" id="botonLogin">
                        Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <section id="home">
        <div id="pokemons-destacados">
            <div id="container-pokemons-destacados-titulo">
                <div id="pokemons-destacados-titulo">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" width="125px" height="75px">
                    <h2>Pokemons destacados</h2>
                </div>
            </div>
            <div id="container_pantalla_pokemons_destacados">
                <div id="pantalla_pokemons_destacados"></div>
            </div>
        </div>
        <div id="novedades">
            <div id="container-novedades-titulo">
                <div id="novedades-titulo">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" width="125px" height="75px">
                    <h2>¿Que hay de nuevo?</h2>
                </div>
                <div id="container-novedades-parrafo">
                    <div class="carta-novedades">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis voluptas natus, nesciunt eum nulla atque error deleniti eius, inventore officia quae sunt cumque. Et dolorum sapiente soluta iusto deleniti?</p>
                    </div>
                    <div class="carta-novedades">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis voluptas natus, nesciunt eum nulla atque error deleniti eius, inventore officia quae sunt cumque. Et dolorum sapiente soluta iusto deleniti?</p>
                    </div>
                    <div class="carta-novedades">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis voluptas natus, nesciunt eum nulla atque error deleniti eius, inventore officia quae sunt cumque. Et dolorum sapiente soluta iusto deleniti?</p>
                    </div>
                    <div class="carta-novedades">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perspiciatis voluptas natus, nesciunt eum nulla atque error deleniti eius, inventore officia quae sunt cumque. Et dolorum sapiente soluta iusto deleniti?</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="videos">
            <div id="container-videos-titulo">
                <div id="videos-titulo">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png" width="125px" height="75px">
                    <h2>Videos recomendados</h2>
                </div>
            </div>
            <div id="container-videos">
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RpcgXNMZx9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/i5Zn9I1kHo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UG4nBQkCg2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OwC_PKhbTDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div id="footer-container">
            <h3>poke API</h3>
            <p>Jordi Valls Pla</p>
            <p>Derechos reservado</p>
            <p> © 2023</p>
        </div>
    </div>
    </section>
    <section id="pokemons">
        <div id="container-buscador">
            <a><input type="search" placeholder="Busca tu Pokemon" id="Buscador"/></a>
        </div>
        <div id="pantalla">
        </div>
        <div id="footer-container">
            <h3>poke API</h3>
            <p>Jordi Valls Pla</p>
            <p>Derechos reservado</p>
            <p> © 2023</p>
        </div>
    </div>
    </section>
    <section id="signup">
        <div class="hero-container">
            <div class="environment"></div>
                <h2 class="hero glitch layers" data-text="SIGN-UP"><span>SIGN-UP</span></h2>
            </div>
        </div>
        <div class="form-container">
            <h2>Inicio de sesión</h2>
            <form>
                <div class="form-group-singup">
                    <label for="username">Nombre de usuario:</label>
                    <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" required>
                </div>
                <div class="form-group-singup">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    </section>
    <section id="pepe">
        <div class="hero-container">
            <div class="environment"></div>
            <h2 class="hero glitch layers" data-text="LOGIN"><span>LOGIN</span></h2>
        </div>
    <div id="form-container-login">
    <div class="form-container">
    <h2>Registrarse</h2>
    <form>
        <div class="form-group-singup">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" required>
        </div>
        <div class="form-group-singup">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required>
        </div>
        <button type="submit">Registrarse</button>
    </form>
</div>
    </div>
</section>
`;

let arrayData = [];
let n = 100;
let y = 0;
let botonHome = document.getElementById("botonHome");
let botonPokemons = document.getElementById("botonPokemons");
let signUp = document.getElementById("botonSignUp");
let login = document.getElementById("botonLogin");
let pokebol = document.getElementById("pokebol");
pokemonsDestacados();
pokemons.style.display = "none";
signup.style.display = "none";
pepe.style.display = "none";

botonHome.addEventListener("click", () => {
    console.log("botonHome");
    home.style.display = "flex";
    pokemons.style.display = "none";
    pepe.style.display = "none";
    signup.style.display = "none";
});

botonPokemons.addEventListener("click", () => {
    console.log("botonPokemons");
    home.style.display = "none"
    pepe.style.display = "none";
    signup.style.display = "none";
    pokemons.style.display = "flex"
});

signUp.addEventListener("click", () => {
    home.style.display = "none";
    pokemons.style.display = "none";
    pepe.style.display = "none";
    signup.style.display = "flex";
});

login.addEventListener("click", () => {
    home.style.display = "none";
    pokemons.style.display = "none";
    signup.style.display = "none";
    pepe.style.display = "flex";
});

pokebol.addEventListener("click", () => {
    console.log("pokebol");
});

fetchPokemon();
// 1011
function fetchPokemon() {
    let count = 0;
	for (let pokemon = 1; pokemon <= 400; pokemon++) {
		const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
		fetch(url)
			.then(response => response.json())
			.then(data => {
                arrayData.push(data);
				// console.log(arrayData);
                count++;
                // console.log(count);
                if ( count == 400 ) {
                    arrayData.sort(compararPorID);
                    mostrarCartas();
                };
		});
	}
}

function mostrarCartas() {
    console.log(arrayData)
    for (let i = 0; i < 400; i++) {
        pantalla.innerHTML += 
        `
        <div data-id=${arrayData[i].id} data-rotada="false">
            <div class="cartas">
                <div class="name_container">
                    <h3 class="name_pokemon">${arrayData[i].name}</h3>
                </div>
                <div img-container>
                    <img class="img_pokemon" src="${arrayData[i].sprites.front_default}" alt="pokemon">
                </div>
                <div>
                    <button onclick="mostrarDetalles(${arrayData[i].id})">ver detalles</button>
                </div>
                <div class="stats_name">
                    <span class="type_pokemon">type| </span>
                    <span class="hp_pokemon">hp| </span>
                    <span class="weight_pokemon">weight</span>
                </div>
                <div class="stats">
                    <span class="type_pokemon">${arrayData[i].types.type}| </span>
                    <span class="hp_pokemon">${arrayData[i].stats[0].base_stat}| </span>
                    <span class="weight_pokemon">${arrayData[i].weight}</span>
                </div>
            </div>
            <div class="cartaRotada"><div class="rotar"></div>
            </div>
        </div> 
        `
    } 
}

function compararPorID(a, b) {
    if (a.id < b.id) {
        return -1;
    };
    if (a.id > b.id) {
        return 1;
    };
    return 0;
}

function pokemonsDestacados() {
    for (let i = 0; i < 8; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        let url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                mostrarCartasDestacados(data.id, data.name, data.sprites.front_default, data.types[0].type.name, data.stats[0].base_stat, data.weight); 
            });
    }
}

function mostrarCartasDestacados (id, name, img, type, hp, weight) {
    pantalla_pokemons_destacados.innerHTML += `
    <div data-id=${id} data-rotada="false">
            <div class="cartas">
                <div class="name_container">
                    <h3 class="name_pokemon">${name}</h3>
                </div>
                <div img-container>
                    <img class="img_pokemon" src="${img}" alt="pokemon">
                </div>
                <div>
                    <button onclick="mostrarDetalles(${id})">ver detalles</button>
                </div>
                <div class="stats_name">
                    <span class="type_pokemon">type| </span>
                    <span class="hp_pokemon">hp| </span>
                    <span class="weight_pokemon">weight</span>
                </div>
                <div class="stats">
                    <span class="type_pokemon">${type}| </span>
                    <span class="hp_pokemon">${hp}| </span>
                    <span class="weight_pokemon">${weight}</span>
                </div>
            </div>
            <div class="cartaRotada"><div class="rotar"></div>
            </div>
        </div>
    `;
}

function mostrarDetalles(i) {
    console.log(i);
    const elemento = document.querySelector(`[data-id="${i}"]`);
    const rotar = elemento.querySelector('.rotar');
    const rotada = elemento.querySelector('.cartaRotada');
    const delantera = elemento.querySelector('.cartas');
    console.log(rotada);
    console.log(rotada.style.display);
    if (elemento.getAttribute("data-rotada") == ("false")) {
        console.log('entro');
        rotada.style.display = 'flex';  
        delantera.style.display = 'none';
        rotar.innerHTML = `
        <div>
            <h3 class="name_pokemon">${arrayData[i-1].name.toUpperCase()}</h3>
        </div>
         <div>
            <span><h4>Stats</h4></span>
            <span>
                Attack:${arrayData[i-1].stats[0].base_stat}
                <br>Defense:${arrayData[i-1].stats[1].base_stat}
                <br>Special attack:${arrayData[i-1].stats[2].base_stat}
                <br>Special defense:${arrayData[i-1].stats[3].base_stat}
                <br>Speed:${arrayData[i-1].stats[4].base_stat}
            </span>
        </div>
        <div>
            <button onclick="mostrarDetalles(${i})">ver detalles</button>
        </div>
        `;
        elemento.setAttribute("data-rotada", "true");
    } else {
        rotada.style.display = 'none';
        delantera.style.display = 'flex';       
        elemento.setAttribute("data-rotada", "false");
    };
}

Buscador.addEventListener( "keyup", (e) => {
    console.log(e.target.value);
    pantalla.innerHTML = '';
    for (let i = 0; i < 400; i++) {
        const pokemon = arrayData[i];
        if (pokemon.name.includes(e.target.value.toLowerCase())) {
            mostrarCartas1(pokemon.name, pokemon.stats[0].base_stat, pokemon.types[0].type.name, pokemon.sprites.front_default, pokemon.weight, pokemon.id);
        };
    };
});

function mostrarCartas1(name, hp, type, img, weight, id) {
    pantalla.innerHTML += `
    <div data-id=${id} data-rotada="false">
            <div class="cartas">
                <div class="name_container">
                    <h3 class="name_pokemon">${name}</h3>
                </div>
                <div img-container>
                    <img class="img_pokemon" src="${img}" alt="pokemon">
                </div>
                <div>
                    <button onclick="mostrarDetalles(${id})">ver detalles</button>
                </div>
                <div class="stats_name">
                    <span class="type_pokemon">type| </span>
                    <span class="hp_pokemon">hp| </span>
                    <span class="weight_pokemon">weight</span>
                </div>
                <div class="stats">
                    <span class="type_pokemon">${type}| </span>
                    <span class="hp_pokemon">${hp}| </span>
                    <span class="weight_pokemon">${weight}</span>
                </div>
            </div>
            <div class="cartaRotada"><div class="rotar"></div>
            </div>
        </div>
    `;
}