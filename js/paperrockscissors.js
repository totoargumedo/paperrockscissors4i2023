//Eleccion usuario
let usuario = prompt("Ingrese por texto piedra, papel o tijera");
usuario = usuario.toLowerCase();

// if (usuario != "piedra" && usuario != "papel" && usuario != "tijera") {
//   alert(
//     "Programa terminado, deber ingresar piedra, papel o tijera. Reinicie la pagina"
//   );
// }

//Eleccion aleatoria computadora
let random = Math.random() * 3;
random = Math.floor(random);

let computadora;

if (random === 0) {
  computadora = "piedra";
} else if (random === 1) {
  computadora = "papel";
} else {
  computadora = "tijera";
}

// Arte ASCII para representar las opciones
const piedra = `
                 _______
            ---'   ____)
                  (_____)
                  (_____)
                  (____)
            ---.__(___)
            `;

const papel = `
                 _______
            ---'    ____)____
                        ______)
                        _______)
                       _______)
            ---.__________)
            `;

const tijeras = `
                 _______
            ---'   ____)____
                        ______)
                   __________)
                  (____)
            ---.__(___)
            `;

//comprobamos que el usuario ingreso correctamente
if (usuario === "piedra" || usuario === "papel" || usuario === "tijera") {
  //ACA va el programa

  console.log("Elegiste: " + usuario);
  console.log("COmputadora eligio: " + computadora);

  if (usuario === computadora) {
    // si empatan
    console.log("Empate, juguemos denuevo");
  } else if (usuario === "piedra") {
    //si elijo piedra
    if (computadora === "tijera") {
      console.log("Ganaste!!" + piedra);
    } else {
      console.log("Perdiste!!");
    }
  } else if (usuario === "papel") {
    //si elijo papel
    if (computadora === "piedra") {
      console.log("Ganaste!!");
    } else {
      console.log("Perdiste!!");
    }
  } else {
    //si elijo tijera
    if (computadora === "papel") {
      console.log("Ganaste!!");
    } else {
      console.log("Perdiste!!");
    }
  }
} else {
  alert(
    "Programa terminado, deber ingresar piedra, papel o tijera. Reinicie la pagina"
  );
}
