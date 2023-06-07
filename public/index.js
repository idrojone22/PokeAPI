let arrayData = [];
let n = 100;
let y = 0;
let botonHome = document.getElementById("botonHome");
let botonPokemons = document.getElementById("botonPokemons");
let signUp = document.getElementById("botonSignUp");
let login = document.getElementById("botonLogin");
let pokebol = document.getElementById("pokebol");
let chat = document.getElementById("chat");
pokemonsDestacados();
pokemons.style.display = "none";
signup.style.display = "none";
pepe.style.display = "none";
chat.style.display = "none";

botonHome.addEventListener("click", () => {
    console.log("botonHome");
    home.style.display = "flex";
    pokemons.style.display = "none";
    pepe.style.display = "none";
    chat.style.display = "none";
    signup.style.display = "none";
});

botonPokemons.addEventListener("click", () => {
    console.log("botonPokemons");
    home.style.display = "none"
    pepe.style.display = "none";
    signup.style.display = "none";
    chat.style.display = "none";
    pokemons.style.display = "flex"
});

signUp.addEventListener("click", () => {
    home.style.display = "none";
    pokemons.style.display = "none";
    pepe.style.display = "none";
    chat.style.display = "none";
    signup.style.display = "flex";
});

login.addEventListener("click", () => {
    home.style.display = "none";
    pokemons.style.display = "none";
    signup.style.display = "none";
    chat.style.display = "none";
    pepe.style.display = "flex";
});

pokebol.addEventListener("click", () => {
    console.log("pokebol");
});

botonchat.addEventListener("click", () => {
    home.style.display = "none";
    pokemons.style.display = "none";
    signup.style.display = "none";
    pepe.style.display = "none";
    chat.style.display = "flex";
    setTimeout( () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Este apartado aun no esta en funcionamiento',
            footer: '<a href="">Why do I have this issue?</a>'
        }, window.location.href = 'https://idrojone22.github.io/pokeAPI/public/#home')
    }, 2500) 
})

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

let login1 = document.getElementById("login");  

login1.addEventListener('submit', function(event) {     
    event.preventDefault(); 
   
    let username = login1.username.value;     
    let password = login1.password.value;     
    console.log(username);         
        
    let data = {       
        username: username,       
        password: password     
    };         
    
    fetch('https://pokeapi-by-idrojone.glitch.me/users/', {       
        method: 'POST',       
        headers: {  
            'Content-Type': 'application/json'       
        },       
        body: JSON.stringify(data)     
        })     
        .then(function(response) {       
            if (response.ok) {         
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Te has registrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })        
                setTimeout( () => {
                    window.location.href = 'https://idrojone22.github.io/pokeAPI/public/';
                }, 2500)  
                userWelcomeContainer.innerHTML = "";
                showMenuItemsOnLogout();
                showUserWelcomeMessage(username); 
            } else {         
                console.log('Error en el registro');       
            }     
        })    
        .catch(function(error) {       
            console.log('Error en la solicitud:', error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error al registrarse',
                showConfirmButton: false,
                timer: 1500
            })      
        }); 
});      

let signupForm = document.querySelector("#signup form");

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = signupForm.querySelector("#username_sign").value;
    let password = signupForm.querySelector("#password_sign").value;

    let data = {
        username: username,
        password: password
    };

    fetch('https://pokeapi-by-idrojone.glitch.me/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Te has registrado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout( () => {
                    window.location.href = 'https://idrojone22.github.io/pokeAPI/public/';
                }, 2500)
                userWelcomeContainer.innerHTML = "";
                showMenuItemsOnLogout();
                showUserWelcomeMessage(username);
            } else {
                throw new Error('Error en el registro');
            }
        })
        .catch(function(error) {
            console.log('Error en la solicitud:', error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error al registrarse',
                showConfirmButton: false,
                timer: 1500
            });
        });

});

function showUserWelcomeMessage(username) {
    const userWelcomeContainer = document.getElementById("userWelcomeContainer");
    userWelcomeContainer.innerHTML = `
        <p>Bienvenido, ${username}</p>
        <button id="logoutButton">Salir</button>
    `;

    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
        pokebol.style.display = "block";
        userWelcomeContainer.innerHTML = "";
    });
}

function showMenuItemsOnLogout() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((menuItem) => {
        menuItem.style.display = "block";
    });
}

function hideMenuItemsOnLogin() {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((menuItem) => {
        menuItem.style.display = "none";
    });
}