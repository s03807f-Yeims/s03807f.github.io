const semanas = Array.from({ length: 16 }, (_, i) => ({
  id: `semana${i + 1}`,
  label: `Semana ${i + 1}`,
  url: "" // Agrega aquí la URL de GitHub para cada semana
}));

const contenedor = document.getElementById("contenedor-semanas");

semanas.forEach(({ id, label, url }) => {
  const detalle = document.createElement("details");
  detalle.setAttribute("id", id);
  detalle.innerHTML = `
    <summary aria-expanded="false" aria-controls="${id}-contenido">
      ${label}
    </summary>
    <div id="${id}-contenido">
      <p>Actividad de la semana</p>
      <a href="${url}" target="_blank" rel="noopener noreferrer">🔗 Ver en GitHub</a>
    </div>
  `;
  detalle.addEventListener("toggle", () => {
    detalle.querySelector("summary")
           .setAttribute("aria-expanded", detalle.open);
  });
  contenedor.appendChild(detalle);
});
