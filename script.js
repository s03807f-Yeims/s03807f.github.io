document.addEventListener("DOMContentLoaded", function() {
  // Tu lista de iconos y semanas igual que antes

  const iconos = [
    "💻", "🧮", "🗃️", "🧩", "📊", "🗄️", "🔎", "🧑‍💻",
    "🏗️", "⚠️", "📦", "🔗", "🌳", "🕸️", "📚", "🏆"
  ];
let semanas = [
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
      descripcion: "Actividades de la semana N°3",
      archivos: [
        { nombre: "Estructuras.pdf", enlace: "archivos/semana3_tarea1.pdf" },
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

  // Tarjetas de semana
  function actualizarTarjetasSemanas() {
    contenedor.innerHTML = "";
    semanas.forEach(({ id, label, descripcion }, idx) => {
      const card = document.createElement("div");
      card.className = "tarjeta-semana";
      card.innerHTML = `
        <span class="icon-semana">${iconos[idx % iconos.length]}</span>
        <div class="tarjeta-semana-title">${label}</div>
        <div class="tarjeta-semana-desc">${descripcion}</div>
      `;
      card.addEventListener("click", () => abrirModal(idx));
      contenedor.appendChild(card);
    });
  }
  actualizarTarjetasSemanas();

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
    if (archivoBtns[0]) archivoBtns[0].classList.add('activo');
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

  // ADMIN PANEL LOGIC
  const ADMIN_PASSWORD = "admin2025";
  const adminBtn = document.getElementById("admin-btn");
  const adminModal = document.getElementById("admin-modal");
  const adminPasswordInput = document.getElementById("admin-password");
  const adminLoginBtn = adminModal.querySelector(".admin-login-btn");
  const adminError = adminModal.querySelector(".admin-modal-error");
  const adminCloseBtn = adminModal.querySelector(".admin-modal-close");
  const panelAdmin = document.getElementById("panel-admin");
  const panelAdminCloseBtn = document.querySelector(".panel-admin-close");
  const adminSemanaList = document.getElementById("admin-semana-list");
  const adminAddSemanaBtn = document.querySelector(".admin-add-semana-btn");

  // Mostrar modal login
  adminBtn.onclick = () => {
    adminModal.classList.add("mostrar");
    adminPasswordInput.value = "";
    adminError.style.display = "none";
  };
  // Cerrar modal login
  adminCloseBtn.onclick = () => {
    adminModal.classList.remove("mostrar");
    adminError.style.display = "none";
    adminPasswordInput.value = "";
  };
  adminModal.addEventListener("click", function(e) {
    if (e.target === adminModal) adminModal.classList.remove("mostrar");
  });

  adminLoginBtn.onclick = () => {
    if (adminPasswordInput.value === ADMIN_PASSWORD) {
      adminModal.classList.remove("mostrar");
      mostrarPanelAdmin();
    } else {
      adminError.textContent = "Contraseña incorrecta.";
      adminError.style.display = "block";
    }
  };
  adminPasswordInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") adminLoginBtn.click();
  });

  // Panel admin
  function mostrarPanelAdmin() {
    panelAdmin.classList.add("mostrar");
    renderAdminSemanas();
  }
  panelAdminCloseBtn.onclick = () => {
    panelAdmin.classList.remove("mostrar");
  };
  panelAdmin.addEventListener("click", function(e) {
    if (e.target === panelAdmin) panelAdmin.classList.remove("mostrar");
  });

  // Render listado semanas y archivos
  function renderAdminSemanas() {
    adminSemanaList.innerHTML = "";
    semanas.forEach((sem, idx) => {
      const div = document.createElement("div");
      div.className = "admin-semana-item";
      div.innerHTML = `
        <span class="admin-semana-label">${sem.label}</span>
        <span class="admin-semana-desc">${sem.descripcion}</span>
        <button class="admin-edit-btn" data-idx="${idx}">Editar</button>
        <button class="admin-delete-btn" data-idx="${idx}">Eliminar</button>
        <div class="admin-archivos-list"></div>
        <button class="admin-add-archivo-btn" data-idx="${idx}">+ Archivo</button>
      `;
      // Archivos
      const archivosList = div.querySelector('.admin-archivos-list');
      sem.archivos.forEach((arch, aidx) => {
        const archDiv = document.createElement("div");
        archDiv.className = "admin-archivo-item";
        archDiv.innerHTML = `
          <span>${arch.nombre}</span>
          <div>
            <button class="admin-edit-archivo-btn" data-idx="${idx}" data-aidx="${aidx}">Editar</button>
            <button class="admin-delete-archivo-btn" data-idx="${idx}" data-aidx="${aidx}">Eliminar</button>
          </div>
        `;
        archivosList.appendChild(archDiv);
      });
      adminSemanaList.appendChild(div);
    });

    // Editar semana
    adminSemanaList.querySelectorAll(".admin-edit-btn").forEach(btn => {
      btn.onclick = function() {
        const idx = +btn.getAttribute("data-idx");
        editarSemana(idx);
      };
    });
    // Eliminar semana
    adminSemanaList.querySelectorAll(".admin-delete-btn").forEach(btn => {
      btn.onclick = function() {
        const idx = +btn.getAttribute("data-idx");
        if (confirm("¿Eliminar esta semana?")) {
          semanas.splice(idx, 1);
          renderAdminSemanas();
          actualizarTarjetasSemanas();
        }
      };
    });
    // Agregar archivo
    adminSemanaList.querySelectorAll(".admin-add-archivo-btn").forEach(btn => {
      btn.onclick = function() {
        const idx = +btn.getAttribute("data-idx");
        agregarArchivoSemana(idx);
      };
    });
    // Editar archivo
    adminSemanaList.querySelectorAll(".admin-edit-archivo-btn").forEach(btn => {
      btn.onclick = function() {
        const idx = +btn.getAttribute("data-idx");
        const aidx = +btn.getAttribute("data-aidx");
        editarArchivoSemana(idx, aidx);
      };
    });
    // Eliminar archivo
    adminSemanaList.querySelectorAll(".admin-delete-archivo-btn").forEach(btn => {
      btn.onclick = function() {
        const idx = +btn.getAttribute("data-idx");
        const aidx = +btn.getAttribute("data-aidx");
        if (confirm("¿Eliminar este archivo?")) {
          semanas[idx].archivos.splice(aidx, 1);
          renderAdminSemanas();
          actualizarTarjetasSemanas();
        }
      };
    });
  }

  // Editar semana
  function editarSemana(idx) {
    const semana = semanas[idx];
    const nuevoLabel = prompt("Editar nombre de la semana:", semana.label);
    if (nuevoLabel !== null && nuevoLabel.trim() !== "") semana.label = nuevoLabel.trim();
    const nuevaDesc = prompt("Editar descripción:", semana.descripcion);
    if (nuevaDesc !== null && nuevaDesc.trim() !== "") semana.descripcion = nuevaDesc.trim();
    renderAdminSemanas();
    actualizarTarjetasSemanas();
  }

  // Agregar nueva semana
  adminAddSemanaBtn.onclick = function() {
    const nuevoLabel = prompt("Nombre de la nueva semana:");
    if (nuevoLabel && nuevoLabel.trim() !== "") {
      const nuevaDesc = prompt("Descripción de la nueva semana:");
      if (nuevaDesc && nuevaDesc.trim() !== "") {
        semanas.push({
          id: "semana" + (semanas.length + 1),
          label: nuevoLabel.trim(),
          descripcion: nuevaDesc.trim(),
          archivos: []
        });
        renderAdminSemanas();
        actualizarTarjetasSemanas();
      }
    }
  };

  // Agregar archivo a semana
  function agregarArchivoSemana(idx) {
    const nombre = prompt("Nombre del archivo:");
    if (!nombre || nombre.trim() === "") return;
    const enlace = prompt("Enlace del archivo (URL o ruta):");
    if (!enlace || enlace.trim() === "") return;
    semanas[idx].archivos.push({
      nombre: nombre.trim(),
      enlace: enlace.trim()
    });
    renderAdminSemanas();
    actualizarTarjetasSemanas();
  }

  // Editar archivo de semana
  function editarArchivoSemana(idx, aidx) {
    const archivo = semanas[idx].archivos[aidx];
    const nuevoNombre = prompt("Editar nombre de archivo:", archivo.nombre);
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") archivo.nombre = nuevoNombre.trim();
    const nuevoEnlace = prompt("Editar enlace de archivo:", archivo.enlace);
    if (nuevoEnlace !== null && nuevoEnlace.trim() !== "") archivo.enlace = nuevoEnlace.trim();
    renderAdminSemanas();
    actualizarTarjetasSemanas();
  }
});