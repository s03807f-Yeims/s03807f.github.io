document.addEventListener("DOMContentLoaded", function() {
  const iconos = [
    "💻", "🧮", "🗃️", "🧩", "📊", "🗄️", "🔎", "🧑‍💻",
    "🏗️", "⚠️", "📦", "🔗", "🌳", "🕸️", "📚", "🏆"
  ];

  const semanas = [
    {
      id: "semana1",
      label: "Semana 1",
      descripcion: "Manuales e informe técnico.",
      archivos: [
        { nombre: "Informe Técnico", enlace: "archivos/semana1_informetecnico.pdf" },
        { nombre: "Manual de cuenta GitHub", enlace: "archivos/semana1_manualgith.pdf" },
        { nombre: "Manual de pagina en github", enlace: "archivos/semana1_manualpag.pdf"}
      ]
    },
    {
      id: "semana2",
      label: "Semana 2",
      descripcion: "Actividades de la semana N° 2.",
      archivos: [
        { nombre: "Diagramas", enlace: "archivos/semana2_diagramas.pdf" },
        { nombre: "Manual de instalacion SQL Server 2022", enlace: "archivos/semana2_manualsql.pdf" }
      ]
    },
    {
      id: "semana3",
      label: "Semana 3",
      descripcion: "Estructuras de datos básicas y ejemplos prácticos.",
      archivos: [
        { nombre: "Estructuras.pdf", enlace: "archivos/semana3_estructuras.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana3_ejercicios.pdf" }
      ]
    },
    {
      id: "semana4",
      label: "Semana 4",
      descripcion: "Funciones y modularidad en la programación.",
      archivos: [
        { nombre: "Funciones.pdf", enlace: "archivos/semana4_funciones.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana4_ejercicios.pdf" }
      ]
    },
    {
      id: "semana5",
      label: "Semana 5",
      descripcion: "Tarea sobre arreglos y matrices.",
      archivos: [
        { nombre: "Matrices.pdf", enlace: "archivos/semana5_matrices.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana5_ejercicios.pdf" }
      ]
    },
    {
      id: "semana6",
      label: "Semana 6",
      descripcion: "Manejo de archivos y persistencia de datos.",
      archivos: [
        { nombre: "Persistencia.pdf", enlace: "archivos/semana6_persistencia.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana6_ejercicios.pdf" }
      ]
    },
    {
      id: "semana7",
      label: "Semana 7",
      descripcion: "Introducción a algoritmos de búsqueda y ordenamiento.",
      archivos: [
        { nombre: "Busqueda.pdf", enlace: "archivos/semana7_busqueda.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana7_ejercicios.pdf" }
      ]
    },
    {
      id: "semana8",
      label: "Semana 8",
      descripcion: "Programación orientada a objetos: conceptos básicos.",
      archivos: [
        { nombre: "POO.pdf", enlace: "archivos/semana8_poo.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana8_ejercicios.pdf" }
      ]
    },
    {
      id: "semana9",
      label: "Semana 9",
      descripcion: "Herencia y polimorfismo en POO.",
      archivos: [
        { nombre: "Herencia.pdf", enlace: "archivos/semana9_herencia.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana9_ejercicios.pdf" }
      ]
    },
    {
      id: "semana10",
      label: "Semana 10",
      descripcion: "Excepciones y manejo de errores.",
      archivos: [
        { nombre: "Excepciones.pdf", enlace: "archivos/semana10_excepciones.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana10_ejercicios.pdf" }
      ]
    },
    {
      id: "semana11",
      label: "Semana 11",
      descripcion: "Estructuras dinámicas: pilas y colas.",
      archivos: [
        { nombre: "Pilas y Colas.pdf", enlace: "archivos/semana11_pilas_colas.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana11_ejercicios.pdf" }
      ]
    },
    {
      id: "semana12",
      label: "Semana 12",
      descripcion: "Listas enlazadas y aplicaciones.",
      archivos: [
        { nombre: "Listas.pdf", enlace: "archivos/semana12_listas.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana12_ejercicios.pdf" }
      ]
    },
    {
      id: "semana13",
      label: "Semana 13",
      descripcion: "Árboles y recorridos básicos.",
      archivos: [
        { nombre: "Árboles.pdf", enlace: "archivos/semana13_arboles.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana13_ejercicios.pdf" }
      ]
    },
    {
      id: "semana14",
      label: "Semana 14",
      descripcion: "Algoritmos de grafos y redes.",
      archivos: [
        { nombre: "Grafos.pdf", enlace: "archivos/semana14_grafos.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana14_ejercicios.pdf" }
      ]
    },
    {
      id: "semana15",
      label: "Semana 15",
      descripcion: "Resumen y repaso general.",
      archivos: [
        { nombre: "Resumen.pdf", enlace: "archivos/semana15_resumen.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana15_ejercicios.pdf" }
      ]
    },
    {
      id: "semana16",
      label: "Semana 16",
      descripcion: "Proyecto final y entrega de documentación.",
      archivos: [
        { nombre: "ProyectoFinal.pdf", enlace: "archivos/semana16_proyecto.pdf" },
        { nombre: "Ejercicios.pdf", enlace: "archivos/semana16_ejercicios.pdf" }
      ]
    }
  ];

  const contenedor = document.getElementById("contenedor-semanas");
  const modal = document.getElementById("modal-tarea");

  // Vista principal: tarjetas de semana
  semanas.forEach(({ id, label, descripcion }, idx) => {
    const card = document.createElement("div");
    card.className = "tarjeta-semana";
    card.innerHTML = `
      <span class="icon-semana">${iconos[idx]}</span>
      <div class="tarjeta-semana-title">${label}</div>
      <div class="tarjeta-semana-desc">${descripcion}</div>
    `;
    card.addEventListener("click", () => abrirModal(idx));
    contenedor.appendChild(card);
  });

  // Modal: tarea fullscreen
  function abrirModal(idx) {
    const semana = semanas[idx];

    let archivosBtns = "";
    semana.archivos.forEach((archivo, i) => {
      archivosBtns += `
        <button class="modal-tarea-archivo-btn" data-file-index="${i}">${archivo.nombre}</button>
      `;
    });

    let archivoActual = semana.archivos[0];
    let visHtml = visualizarArchivo(archivoActual);

    modal.innerHTML = `
      <div class="modal-content">
        <button class="volver-btn" type="button">⟵ Volver</button>
        <div class="modal-tarea-title">${semana.label}</div>
        <div class="modal-tarea-desc">${semana.descripcion}</div>
        <div class="modal-tarea-archivos">${archivosBtns}</div>
        <div class="modal-tarea-vis" id="modal-tarea-vis">${visHtml}</div>
        <a href="${archivoActual.enlace}" target="_blank" class="abrir-pdf-btn">🔗 Abrir en nueva pestaña</a>
      </div>
    `;
    modal.classList.add("mostrar");

    modal.querySelector(".volver-btn").onclick = () => {
      modal.classList.remove("mostrar");
      modal.innerHTML = "";
    };

    const archivoBtns = modal.querySelectorAll('.modal-tarea-archivo-btn');
    archivoBtns[0].classList.add('activo');
    archivoBtns.forEach((btn, i) => {
      btn.onclick = () => {
        archivoBtns.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');
        const vis = modal.querySelector("#modal-tarea-vis");
        vis.innerHTML = visualizarArchivo(semana.archivos[i]);
        const abrirBtn = modal.querySelector('.abrir-pdf-btn');
        abrirBtn.href = semana.archivos[i].enlace;
      };
    });
  }

  function visualizarArchivo(archivo) {
    return `<embed src="${archivo.enlace}" type="application/pdf" />`;
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("mostrar")) {
      modal.classList.remove("mostrar");
      modal.innerHTML = "";
    }
  });
});