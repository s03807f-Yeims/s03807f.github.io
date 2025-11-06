// script.js - Versión revisada: visor PDF más grande y botón al repositorio GitHub
document.addEventListener("DOMContentLoaded", function () {
  const GITHUB_REPO_URL = "https://github.com/YeimsSarmiento/Repositorio-Academico"; // enlace al repositorio (ajusta si lo deseas)

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
          { nombre: "Documento de diseño lógico", enlace: "archivos/semana3_tarea1.pdf" },
          { nombre: "Documento de preguntas", enlace: "archivos/semana3_tarea2.pdf" },
          { nombre: "Cuadro comparativo", enlace: "archivos/semana3_tarea3.pdf" }
        ]
      },
      {
        id: "semana4",
        label: "Semana 4",
        descripcion: "Documentos de la semana 4.",
        archivos: [
          { nombre: "Ventajas y desventajas Cliente-Servidor o Nube", enlace: "archivos/semana4_tarea1.pdf" },
          { nombre: "Arquitectura para una hospital regional", enlace: "archivos/semana4_tarea2.pdf" },
          { nombre: "Diagrama ER de un Banco", enlace: "archivos/semana4_tarea3.pdf" },
          { nombre: "Requerimientos Funcionales y no Funcionales", enlace: "archivos/semana4_tarea4.pdf" }
        ]
      },
      {
        id: "semana5",
        label: "Semana 5",
        descripcion: "Creacion de base de datos QhantuPeru.",
        archivos: [
          { nombre: "Tablas Base de datos de QhatuPeru", enlace: "archivos/semana5_tablas.pdf" },
          { nombre: "Incision de datos a la DB de QhatuPeru", enlace: "archivos/semana5_incision.pdf" },
          { nombre: "Base de datos de QhatuPeru", enlace: "archivos/semana5_creacionDB.pdf" },
          { nombre: "Manual para cuenta institucional", enlace: "archivos/semana5_manualcuenta.pdf" }
        ]
      },
      {
        id: "semana6",
        label: "Semana 6",
        descripcion: "Semana 6 y sus actividades.",
        archivos: [
          { nombre: "Actividades de la semana 6", enlace: "archivos/semana6_actividades.pdf" }
        ]
      },
    { 
      id: "semana7", 
      label: "Semana 7", 
      descripcion: "Tareas de la semana 7.", 
      archivos: [
          { nombre: "Tablas Base de datos de QhatuPeru", enlace: "archivos/semana5_tablas.pdf" },
          { nombre: "Incision de datos a la DB de QhatuPeru", enlace: "archivos/semana5_incision.pdf" },
          { nombre: "Base de datos de QhatuPeru", enlace: "archivos/semana5_creacionDB.pdf" },
          { nombre: "Manual para cuenta institucional", enlace: "archivos/semana5_manualcuenta.pdf" }
      ]
    },
    
    { id: "semana9", label: "Semana 9", descripcion: "Enunciados con consultas avanzadas", archivos: [
      { nombre: "Consultas avanzadas.pdf", enlace: "archivos/semana9_enunciados.pdf" }
    ]},
     
    { id: "semana10", label: "Semana 10", descripcion: "PRACTICA y tareas de la semana 10", archivos: [
      { nombre: "PRACTICA SEMANA 10", enlace: "archivos/semana10_PRACTICA.pdf" },
      { nombre: "Ejercicios de la semana 10", enlace: "archivos/semana10_ejercicios.pdf" }
    ]}
    
    /*,

    { id: "semana11", label: "Semana 11", descripcion: "Estructuras dinámicas: pilas y colas.", archivos: [
      { nombre: "Pilas y Colas.pdf", enlace: "archivos/semana11_pilas_colas.pdf" },
      { nombre: "Ejercicios.pdf", enlace: "archivos/semana11_ejercicios.pdf" }
    ]},
    { id: "semana12", label: "Semana 12", descripcion: "Listas enlazadas y aplicaciones.", archivos: [
      { nombre: "Listas.pdf", enlace: "archivos/semana12_listas.pdf" },
      { nombre: "Ejercicios.pdf", enlace: "archivos/semana12_ejercicios.pdf" }
    ]},
    { id: "semana13", label: "Semana 13", descripcion: "Árboles y recorridos básicos.", archivos: [
      { nombre: "Árboles.pdf", enlace: "archivos/semana13_arboles.pdf" },
      { nombre: "Ejercicios.pdf", enlace: "archivos/semana13_ejercicios.pdf" }
    ]},
    { id: "semana14", label: "Semana 14", descripcion: "Algoritmos de grafos y redes.", archivos: [
      { nombre: "Grafos.pdf", enlace: "archivos/semana14_grafos.pdf" },
      { nombre: "Ejercicios.pdf", enlace: "archivos/semana14_ejercicios.pdf" }
    ]},
    { id: "semana15", label: "Semana 15", descripcion: "Resumen y repaso general.", archivos: [
      { nombre: "Resumen.pdf", enlace: "archivos/semana15_resumen.pdf" },
      { nombre: "Ejercicios.pdf", enlace: "archivos/semana15_ejercicios.pdf" }
    ]},
    { id: "semana16", label: "Semana 16", descripcion: "Proyecto final y entrega de documentación.", archivos: [
      { nombre: "ProyectoFinal.pdf", enlace: "archivos/semana16_proyecto.pdf" },
      { nombre: "Ejercicios.pdf", enlace: "archivos/semana16_ejercicios.pdf" }
    ]}*/
  ]; 

  const contenedor = document.getElementById("contenedor-semanas");
  const modal = document.getElementById("modal-tarea");

  // ----- Render tarjetas -----
  function actualizarTarjetasSemanas() {
    contenedor.innerHTML = "";
    semanas.forEach(({ label, descripcion }, idx) => {
      const card = document.createElement("div");
      card.className = "tarjeta-semana";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.innerHTML = `
        <span class="icon-semana">${iconos[idx % iconos.length]}</span>
        <div class="tarjeta-semana-title">${label}</div>
        <div class="tarjeta-semana-desc">${descripcion}</div>
      `;
      card.addEventListener("click", () => abrirModal(idx));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") abrirModal(idx); });
      contenedor.appendChild(card);
    });
  }
  actualizarTarjetasSemanas();

  // ----- Utilities: manejo de scroll y foco -----
  function disableBodyScroll() { document.body.style.overflow = "hidden"; }
  function enableBodyScroll() { document.body.style.overflow = ""; }

  let previousActiveElement = null;
  let focusTrapHandler = null;
  let escHandler = null;

  function trapFocus(container) {
    const selector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(container.querySelectorAll(selector)).filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    focusTrapHandler = function (e) {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    container.addEventListener("keydown", focusTrapHandler);
    first.focus();
  }
  function releaseFocus(container) {
    if (focusTrapHandler) container.removeEventListener("keydown", focusTrapHandler);
    focusTrapHandler = null;
  }

  // ----- Viewer element creation (evita innerHTML) -----
  function crearViewerElemento(archivo) {
    const wrapper = document.createElement("div");
    wrapper.style.width = "100%";
    wrapper.style.height = "100%";
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";

    if (!archivo || !archivo.enlace) {
      wrapper.textContent = "Archivo no disponible";
      wrapper.style.color = "#555";
      wrapper.style.padding = "1rem";
      return wrapper;
    }

    const enlace = archivo.enlace.toLowerCase();
    if (/\.(pdf)(\?.*)?$/i.test(enlace)) {
      const embed = document.createElement("embed");
      embed.src = archivo.enlace;
      embed.type = "application/pdf";
      embed.style.width = "100%";
      embed.style.height = "100%";
      wrapper.appendChild(embed);
      return wrapper;
    }

    if (/\.(png|jpe?g|gif|webp|svg)$/i.test(enlace)) {
      const img = document.createElement("img");
      img.src = archivo.enlace;
      img.alt = archivo.nombre || "Archivo";
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      wrapper.appendChild(img);
      return wrapper;
    }

    const p = document.createElement("div");
    p.style.padding = "1rem";
    p.style.textAlign = "center";
    const a = document.createElement("a");
    a.href = archivo.enlace;
    a.target = "_blank";
    a.rel = "noopener";
    a.className = "abrir-pdf-btn";
    a.textContent = "Abrir archivo en nueva pestaña";
    p.appendChild(a);
    wrapper.appendChild(p);
    return wrapper;
  }

  // ----- Navegación por flechas en lista de archivos -----
  function enableArrowNavigation(listContainer) {
    const items = Array.from(listContainer.querySelectorAll(".file-item"));
    if (!items.length) return;
    items.forEach((it, idx) => {
      it.setAttribute("role", "button");
      it.setAttribute("tabindex", "0");
      it.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") { e.preventDefault(); items[(idx + 1) % items.length].focus(); }
        else if (e.key === "ArrowUp") { e.preventDefault(); items[(idx - 1 + items.length) % items.length].focus(); }
        else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); it.click(); }
      });
    });
  }

  // ----- Cerrar modal (limpia escuchas y restaura foco) -----
  function closeModal() {
    if (!modal.classList.contains("mostrar")) return;
    modal.classList.remove("mostrar");
    modal.setAttribute("aria-hidden", "true");
    enableBodyScroll();

    modal.innerHTML = "";

    if (escHandler) { document.removeEventListener("keydown", escHandler); escHandler = null; }

    if (previousActiveElement && typeof previousActiveElement.focus === "function") previousActiveElement.focus();
    previousActiveElement = null;
  }

  // ----- Abrir modal (crea DOM de forma segura) -----
  function abrirModal(idx) {
    const semana = semanas[idx];
    const tieneArchivos = Array.isArray(semana.archivos) && semana.archivos.length > 0;
    const primerArchivo = tieneArchivos ? semana.archivos[0] : null;

    previousActiveElement = document.activeElement;

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.setAttribute("role", "dialog");
    modalContent.setAttribute("aria-modal", "true");
    modalContent.setAttribute("aria-label", semana.label);

    const top = document.createElement("div");
    top.className = "modal-top";
    const info = document.createElement("div");
    const title = document.createElement("div");
    title.className = "modal-tarea-title";
    title.textContent = semana.label;
    const desc = document.createElement("div");
    desc.className = "modal-tarea-desc";
    desc.style.color = "var(--text-main)";
    desc.style.fontSize = "0.95rem";
    desc.textContent = semana.descripcion || "";
    info.appendChild(title);
    info.appendChild(desc);

    const topRight = document.createElement("div");
    const volverBtn = document.createElement("button");
    volverBtn.className = "volver-btn";
    volverBtn.type = "button";
    volverBtn.textContent = "⟵ Volver";
    volverBtn.addEventListener("click", closeModal);
    topRight.appendChild(volverBtn);

    top.appendChild(info);
    top.appendChild(topRight);

    const body = document.createElement("div");
    body.className = "modal-body";

    const filesCol = document.createElement("div");
    filesCol.className = "modal-files";
    filesCol.id = "modal-files";
    const h3 = document.createElement("h3");
    h3.textContent = "Archivos";
    filesCol.appendChild(h3);

    if (tieneArchivos) {
      semana.archivos.forEach((a, i) => {
        const btn = document.createElement("button");
        btn.className = "file-item";
        btn.type = "button";
        btn.setAttribute("data-file-index", String(i));
        btn.textContent = a.nombre;
        btn.addEventListener("click", function () {
          filesCol.querySelectorAll(".file-item").forEach(b => b.classList.remove("activo"));
          btn.classList.add("activo");
          const viewerArea = modalContent.querySelector("#viewer-area");
          viewerArea.innerHTML = "";
          viewerArea.appendChild(crearViewerElemento(a));
          const abrir = modalContent.querySelector(".abrir-pdf-btn");
          if (abrir) abrir.href = a.enlace || "#";
        });
        filesCol.appendChild(btn);
      });
    } else {
      const empty = document.createElement("div");
      empty.style.padding = "0.8rem";
      empty.style.color = "#555";
      empty.style.textAlign = "center";
      empty.textContent = "No hay archivos.";
      filesCol.appendChild(empty);
    }

    const viewerCol = document.createElement("div");
    viewerCol.className = "modal-viewer";
    const viewerArea = document.createElement("div");
    viewerArea.className = "viewer-area";
    viewerArea.id = "viewer-area";

    if (primerArchivo) viewerArea.appendChild(crearViewerElemento(primerArchivo));
    else {
      const sel = document.createElement("div");
      sel.style.padding = "1rem";
      sel.style.color = "#555";
      sel.textContent = "Selecciona un archivo";
      viewerArea.appendChild(sel);
    }

    const viewerBottom = document.createElement("div");
    viewerBottom.className = "viewer-bottom";

    // Left: abrir en nueva pestaña (PDF / archivo)
    const leftGroup = document.createElement("div");
    if (primerArchivo) {
      const abrirLink = document.createElement("a");
      abrirLink.className = "abrir-pdf-btn";
      abrirLink.href = primerArchivo.enlace || "#";
      abrirLink.target = "_blank";
      abrirLink.rel = "noopener";
      abrirLink.textContent = "🔗 Abrir en nueva pestaña";
      leftGroup.appendChild(abrirLink);
    }

    // Right: botón al GitHub (siempre visible)
    const rightGroup = document.createElement("div");
    const githubBtn = document.createElement("a");
    githubBtn.className = "abrir-github-btn";
    githubBtn.href = GITHUB_REPO_URL;
    githubBtn.target = "_blank";
    githubBtn.rel = "noopener";
    githubBtn.textContent = "Repositorio GitHub";
    rightGroup.appendChild(githubBtn);

    viewerBottom.appendChild(leftGroup);
    viewerBottom.appendChild(rightGroup);

    viewerCol.appendChild(viewerArea);
    viewerCol.appendChild(viewerBottom);

    body.appendChild(filesCol);
    body.appendChild(viewerCol);

    modalContent.appendChild(top);
    modalContent.appendChild(body);

    modal.innerHTML = "";
    modal.appendChild(modalContent);
    modal.classList.add("mostrar");
    modal.setAttribute("aria-hidden", "false");
    disableBodyScroll();

    const fileButtons = filesCol.querySelectorAll(".file-item");
    if (fileButtons.length) fileButtons[0].classList.add("activo");

    enableArrowNavigation(filesCol);
    trapFocus(modalContent);

    escHandler = function (e) { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", escHandler);

    modal.addEventListener("click", function onOutsideClick(e) {
      if (e.target === modal) closeModal();
    }, { once: true });
  }

  // ----- Eventos globales básicos -----
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("mostrar")) closeModal();
  });
  modal.addEventListener("mousedown", function (e) {
    if (e.target === modal) e.preventDefault();
  });

  // ----- ADMIN PANEL (igual que antes) -----
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

  function openAdminModal() {
    adminModal.classList.add("mostrar");
    adminModal.setAttribute("aria-hidden", "false");
    adminPasswordInput.value = "";
    adminError.style.display = "none";
    previousActiveElement = document.activeElement;
    trapFocus(adminModal.querySelector(".admin-modal-content"));
    disableBodyScroll();
  }
  function closeAdminModal() {
    adminModal.classList.remove("mostrar");
    adminModal.setAttribute("aria-hidden", "true");
    adminError.style.display = "none";
    enableBodyScroll();
    releaseFocus(adminModal.querySelector(".admin-modal-content") || document);
    if (previousActiveElement && typeof previousActiveElement.focus === "function") previousActiveElement.focus();
    previousActiveElement = null;
  }

  adminBtn.addEventListener("click", openAdminModal);
  adminCloseBtn.addEventListener("click", closeAdminModal);
  adminModal.addEventListener("click", function (e) { if (e.target === adminModal) closeAdminModal(); });

  adminLoginBtn.addEventListener("click", function () {
    if (adminPasswordInput.value === ADMIN_PASSWORD) {
      closeAdminModal();
      mostrarPanelAdmin();
    } else {
      adminError.textContent = "Contraseña incorrecta.";
      adminError.style.display = "block";
      adminError.setAttribute("aria-live", "assertive");
    }
  });
  adminPasswordInput.addEventListener("keydown", function (e) { if (e.key === "Enter") adminLoginBtn.click(); });

  function mostrarPanelAdmin() {
    panelAdmin.classList.add("mostrar");
    panelAdmin.setAttribute("aria-hidden", "false");
    previousActiveElement = document.activeElement;
    trapFocus(panelAdmin.querySelector(".panel-admin-content"));
    disableBodyScroll();
    renderAdminSemanas();
  }
  function closePanelAdmin() {
    panelAdmin.classList.remove("mostrar");
    panelAdmin.setAttribute("aria-hidden", "true");
    enableBodyScroll();
    releaseFocus(panelAdmin.querySelector(".panel-admin-content") || document);
    if (previousActiveElement && typeof previousActiveElement.focus === "function") previousActiveElement.focus();
    previousActiveElement = null;
  }
  panelAdminCloseBtn.addEventListener("click", closePanelAdmin);
  panelAdmin.addEventListener("click", function (e) { if (e.target === panelAdmin) closePanelAdmin(); });

  // ----- Render admin semanas y bind events (idéntico a la versión previa) -----
  function renderAdminSemanas() {
    adminSemanaList.innerHTML = "";
    semanas.forEach((sem, idx) => {
      const div = document.createElement("div");
      div.className = "admin-semana-item";

      const header = document.createElement("div");
      header.style.display = "flex";
      header.style.justifyContent = "space-between";
      header.style.alignItems = "center";

      const left = document.createElement("div");
      const lbl = document.createElement("div");
      lbl.className = "admin-semana-label";
      lbl.textContent = sem.label;
      const desc = document.createElement("div");
      desc.className = "admin-semana-desc";
      desc.style.fontSize = "0.95rem";
      desc.style.color = "#555";
      desc.textContent = sem.descripcion;
      left.appendChild(lbl);
      left.appendChild(desc);

      const right = document.createElement("div");
      const editBtn = document.createElement("button");
      editBtn.className = "admin-edit-btn";
      editBtn.textContent = "Editar";
      editBtn.dataset.idx = String(idx);
      const delBtn = document.createElement("button");
      delBtn.className = "admin-delete-btn";
      delBtn.textContent = "Eliminar";
      delBtn.dataset.idx = String(idx);
      right.appendChild(editBtn);
      right.appendChild(delBtn);

      header.appendChild(left);
      header.appendChild(right);

      const archivosList = document.createElement("div");
      archivosList.className = "admin-archivos-list";

      sem.archivos.forEach((arch, aidx) => {
        const archDiv = document.createElement("div");
        archDiv.className = "admin-archivo-item";
        archDiv.style.display = "flex";
        archDiv.style.justifyContent = "space-between";
        archDiv.style.alignItems = "center";

        const span = document.createElement("span");
        span.style.flex = "1";
        span.textContent = arch.nombre;

        const controls = document.createElement("div");
        controls.style.display = "flex";
        controls.style.gap = "0.4rem";

        const editA = document.createElement("button");
        editA.className = "admin-edit-archivo-btn";
        editA.textContent = "Editar";
        editA.dataset.idx = String(idx);
        editA.dataset.aidx = String(aidx);

        const delA = document.createElement("button");
        delA.className = "admin-delete-archivo-btn";
        delA.textContent = "Eliminar";
        delA.dataset.idx = String(idx);
        delA.dataset.aidx = String(aidx);

        controls.appendChild(editA);
        controls.appendChild(delA);
        archDiv.appendChild(span);
        archDiv.appendChild(controls);
        archivosList.appendChild(archDiv);
      });

      const addArchivoWrap = document.createElement("div");
      addArchivoWrap.style.marginTop = "0.6rem";
      const addArchivoBtn = document.createElement("button");
      addArchivoBtn.className = "admin-add-archivo-btn";
      addArchivoBtn.textContent = "+ Archivo";
      addArchivoBtn.dataset.idx = String(idx);
      addArchivoWrap.appendChild(addArchivoBtn);

      div.appendChild(header);
      div.appendChild(archivosList);
      div.appendChild(addArchivoWrap);
      adminSemanaList.appendChild(div);
    });

    adminSemanaList.querySelectorAll(".admin-edit-btn").forEach(btn => {
      btn.addEventListener("click", function () { editarSemana(+this.dataset.idx); });
    });
    adminSemanaList.querySelectorAll(".admin-delete-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const idx = +this.dataset.idx;
        if (confirm("¿Eliminar esta semana?")) {
          semanas.splice(idx, 1);
          renderAdminSemanas();
          actualizarTarjetasSemanas();
        }
      });
    });
    adminSemanaList.querySelectorAll(".admin-add-archivo-btn").forEach(btn => {
      btn.addEventListener("click", function () { agregarArchivoSemana(+this.dataset.idx); });
    });
    adminSemanaList.querySelectorAll(".admin-edit-archivo-btn").forEach(btn => {
      btn.addEventListener("click", function () { editarArchivoSemana(+this.dataset.idx, +this.dataset.aidx); });
    });
    adminSemanaList.querySelectorAll(".admin-delete-archivo-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const idx = +this.dataset.idx, aidx = +this.dataset.aidx;
        if (confirm("¿Eliminar este archivo?")) {
          semanas[idx].archivos.splice(aidx, 1);
          renderAdminSemanas();
          actualizarTarjetasSemanas();
        }
      });
    });
  }

  // ----- Editar / Agregar / Eliminar funciones admin -----
  function editarSemana(idx) {
    const semana = semanas[idx];
    const nuevoLabel = prompt("Editar nombre de la semana:", semana.label);
    if (nuevoLabel !== null && nuevoLabel.trim() !== "") semana.label = nuevoLabel.trim();
    const nuevaDesc = prompt("Editar descripción:", semana.descripcion);
    if (nuevaDesc !== null && nuevaDesc.trim() !== "") semana.descripcion = nuevaDesc.trim();
    renderAdminSemanas();
    actualizarTarjetasSemanas();
  }

  adminAddSemanaBtn.addEventListener("click", function () {
    const nuevoLabel = prompt("Nombre de la nueva semana:");
    if (nuevoLabel && nuevoLabel.trim() !== "") {
      const nuevaDesc = prompt("Descripción de la nueva semana:");
      semanas.push({
        id: "semana" + (semanas.length + 1),
        label: nuevoLabel.trim(),
        descripcion: (nuevaDesc && nuevaDesc.trim()) ? nuevaDesc.trim() : "",
        archivos: []
      });
      renderAdminSemanas();
      actualizarTarjetasSemanas();
    }
  });

  function agregarArchivoSemana(idx) {
    const nombre = prompt("Nombre del archivo:");
    if (!nombre || nombre.trim() === "") return;
    const enlace = prompt("Enlace del archivo (URL o ruta):");
    if (!enlace || enlace.trim() === "") return;
    semanas[idx].archivos.push({ nombre: nombre.trim(), enlace: enlace.trim() });
    renderAdminSemanas();
    actualizarTarjetasSemanas();
  }

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
