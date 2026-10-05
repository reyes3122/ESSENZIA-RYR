const hero = document.querySelector(".hero");
const img = hero.querySelector("img");
const inclinacion = 12; // grados máximos. Más número = más movimiento

const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!sinMovimiento) {
  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    img.style.transition = "transform 0.1s ease-out";
    img.style.transform =
      `perspective(1000px) rotateY(${x * inclinacion}deg) rotateX(${-y * inclinacion}deg) scale(1.04)`;
  });

  hero.addEventListener("mouseleave", () => {
    img.style.transition = "transform 0.6s ease";
    img.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  });
}


// DIVS PERFUMES EFECTO //
const tarjetas = document.querySelectorAll(".perfume");
const inclinacionTarjeta = 10; // grados máximos. Más número = más movimiento

const sinMovimientoTarjetas = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!sinMovimientoTarjetas) {
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("mousemove", (e) => {
      const r = tarjeta.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      tarjeta.style.transition = "transform 0.1s ease-out";
      tarjeta.style.transform =
        `perspective(800px) rotateY(${x * inclinacionTarjeta}deg) rotateX(${-y * inclinacionTarjeta}deg) scale(1.03)`;
    });

    tarjeta.addEventListener("mouseleave", () => {
      tarjeta.style.transition = "transform 0.5s ease";
      tarjeta.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
  });
}

// FIN EFECTO PERFUMES //


// INICIO VOLTEAR TARJETAS AL HACER CLIC //
// (va FUERA del if de arriba para que funcione siempre)

tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("volteada");
  });
});

// FIN VOLTEAR TARJETAS //


// INICIO CATALOGO HOMBRE - MUJER //

const botonesFiltro = document.querySelectorAll(".filtro-btn");
const catalogoHombre = document.getElementById("catalogo-hombre");
const catalogoMujer = document.getElementById("catalogo-mujer");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    // quita "activo" de todos los botones y se lo pone solo al que se hizo clic
    botonesFiltro.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    if (boton.dataset.genero === "hombre") {
      catalogoHombre.classList.remove("oculto");
      catalogoMujer.classList.add("oculto");
    } else {
      catalogoMujer.classList.remove("oculto");
      catalogoHombre.classList.add("oculto");
    }
  });
});

// FIN CATALOGO HOMBRE - MUJER //