// =========================================================================
// BASE DE DATOS DE SECTORES (EDITAR RESPONSABLES E INDICACIONES AQUÍ)
// =========================================================================
const SECTORES = [
    {
        codigo: "0099",
        nombre: "Báscula",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "A 70 metros del portón de entrada sobre mano izquierda. Detener el vehículo sobre la balanza.",
        foto: "img/0099.jpg",
        x: 118, y: 508,
        ruta: [[48, 505], [118, 525], [118, 508]]
    },
    {
        codigo: "0100",
        nombre: "Pretratamiento M1",
        grupo: "M1",
        responsable: "A designar (Editar aquí)",
        indicacion: "Pasando los 3 Reactores M1, doblar hacia el sur (abajo) bordeándolos hasta el sector de rejas y canales M1.",
        foto: "img/0100.jpg",
        x: 869, y: 547,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [1020, 430], [1020, 518], [869, 518], [869, 534]]
    },
    {
        codigo: "0101",
        nombre: "Tratamiento Biológico M1 (3 Reactores)",
        grupo: "M1",
        responsable: "A designar (Editar aquí)",
        indicacion: "Los 3 reactores rectangulares del Módulo 1, a la derecha de Administración y Sala de Soplantes M1.",
        foto: "img/0101.jpg",
        x: 852, y: 473,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [852, 430], [852, 446]]
    },
    {
        codigo: "0101-SOP",
        nombre: "Sala de Soplantes M1",
        grupo: "M1",
        responsable: "A designar (Editar aquí)",
        indicacion: "Ubicada inmediatamente a la derecha de Administración y antes de los 3 Reactores M1.",
        foto: "img/soplantes_m1.jpg",
        x: 737, y: 466,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [737, 430], [737, 446]]
    },
    {
        codigo: "0102",
        nombre: "Sedimentación Secundaria M1 (3 Clarificadores)",
        grupo: "M1",
        responsable: "A designar (Editar aquí)",
        indicacion: "Los 3 clarificadores circulares ubicados frente a los 3 Reactores Biológicos M1.",
        foto: "img/0102.jpg",
        x: 856, y: 370,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [856, 430], [856, 394]]
    },
    {
        codigo: "0104",
        nombre: "Deshidratación de Lodos M1",
        grupo: "M1",
        responsable: "A designar (Editar aquí)",
        indicacion: "Ubicada a la derecha del Taller de Mantenimiento (un poco hacia abajo) y frente a Clarificadores M1.",
        foto: "img/0104.jpg",
        x: 749, y: 383,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [749, 430], [749, 400]]
    },
    {
        codigo: "0108",
        nombre: "Laboratorio",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "Pasando los 3 Reactores M1 hacia el este, es el edificio de la izquierda (junto al Pañol).",
        foto: "img/0108.jpg",
        x: 957, y: 400,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [957, 430], [957, 416]]
    },
    {
        codigo: "0109",
        nombre: "Administración",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "En el corredor central (entre Clarificadores M2 y Reactores M1), edificio inferior debajo del Taller.",
        foto: "img/0109.jpg",
        x: 704, y: 473,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 473], [692, 473]]
    },
    {
        codigo: "0110",
        nombre: "Taller de Planta (Mantenimiento)",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "Ubicado inmediatamente arriba de Administración, sobre el corredor central.",
        foto: "img/0110.jpg",
        x: 704, y: 362,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 362], [692, 362]]
    },
    {
        codigo: "0111",
        nombre: "Pañol",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "Pasando los 3 Reactores M1, a la derecha del Laboratorio y a la izquierda de Oficina Topkapy.",
        foto: "img/0111.jpg",
        x: 988, y: 400,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [988, 430], [988, 416]]
    },
    {
        codigo: "HIDROCARB",
        nombre: "Depósito de Hidrocarburos",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "Ubicado arriba a la derecha del Clarificador 2 M2, sobre la curva de la calle central.",
        foto: "img/hidrocarburos.jpg",
        x: 662, y: 337,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 337], [671, 337]]
    },
    {
        codigo: "OF-FUNC",
        nombre: "Oficina de Funcionamiento (Topkapy)",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "Ubicada inmediatamente al lado derecho del Pañol (pasando Laboratorio y Pañol).",
        foto: "img/topkapy.jpg",
        x: 1020, y: 395,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [1020, 430], [1020, 406]]
    },
    {
        codigo: "0200",
        nombre: "Pretratamiento M2",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Seguir toda la calle principal hasta el sector este (derecha del plano). Uso de EPP obligatorio.",
        foto: "img/0200.jpg",
        x: 1170, y: 425,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 335], [880, 312], [1065, 375], [1105, 425], [1170, 425]]
    },
    {
        codigo: "TRAT-GRASAS",
        nombre: "Tratamiento de Grasas",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "En el sector este de Pretratamiento M2, ubicado inmediatamente por encima del Desarenador.",
        foto: "img/grasas.jpg",
        x: 1170, y: 358,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 335], [880, 312], [1095, 385], [1144, 385], [1144, 358]]
    },
    {
        codigo: "0201",
        nombre: "Sedimentación Primaria",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Sedimentadores circulares 1 y 2 en el sector este de la planta.",
        foto: "img/0201.jpg",
        x: 1080, y: 445,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 335], [880, 312], [1065, 375], [1080, 445]]
    },
    {
        codigo: "0202",
        nombre: "Tratamiento Biológico M2",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Reactor Biológico M2 (piletas rectangulares centrales), a la derecha de Sala de Soplantes M2.",
        foto: "img/0202.jpg",
        x: 496, y: 440,
        ruta: [[48, 505], [135, 525], [496, 525], [496, 440]]
    },
    {
        codigo: "0202-SOP",
        nombre: "Sala de Soplantes M2",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Edificio ubicado inmediatamente a la izquierda del Reactor Biológico M2. Uso de protección auditiva.",
        foto: "img/soplantes_m2.jpg",
        x: 428, y: 476,
        ruta: [[48, 505], [135, 525], [428, 525], [428, 498]]
    },
    {
        codigo: "0203",
        nombre: "Sedimentación Secundaria M2",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Clarificadores M2 (4 unidades circulares en el centro de la planta).",
        foto: "img/0203.jpg",
        x: 604, y: 424,
        ruta: [[48, 505], [135, 525], [675, 525], [675, 430], [604, 424]]
    },
    {
        codigo: "0204",
        nombre: "Espesamiento de Lodos",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Girar a la izquierda hacia el sector norte (Línea de Lodos) hasta el extremo este de esa zona.",
        foto: "img/0204.jpg",
        x: 615, y: 235,
        ruta: [[48, 505], [135, 525], [380, 525], [380, 370], [300, 285], [300, 120], [415, 120], [485, 165], [530, 235], [590, 185], [620, 235]]
    },
    {
        codigo: "0205",
        nombre: "Flotación de Lodos",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "En zona norte (Línea de Lodos), entre Gasómetro y Espesador.",
        foto: "img/0205.jpg",
        x: 553, y: 196,
        ruta: [[48, 505], [135, 525], [380, 525], [380, 370], [300, 285], [300, 120], [415, 120], [485, 165], [530, 235], [553, 196]]
    },
    {
        codigo: "0206",
        nombre: "Digestión y Producción de Gas",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "ZONA ATEX (Digestor, Calderas y Gasómetro). Prohibido fumar o ingresar con llamas abiertas.",
        foto: "img/0206.jpg",
        x: 463, y: 260,
        ruta: [[48, 505], [135, 525], [380, 525], [380, 370], [300, 285], [300, 225], [463, 225], [463, 260]]
    },
    {
        codigo: "0207",
        nombre: "Almacenamiento de Lodos",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Silos de Lodos en el sector noroeste. Maniobrar camiones con balizas encendidas.",
        foto: "img/0207.jpg",
        x: 340, y: 165,
        ruta: [[48, 505], [135, 525], [380, 525], [380, 370], [300, 285], [300, 165], [340, 165]]
    },
    {
        codigo: "0208",
        nombre: "Deshidratación M2",
        grupo: "M2",
        responsable: "A designar (Editar aquí)",
        indicacion: "Edificio de Deshidratación M2 al pie de los Silos de Lodos, en el sector noroeste.",
        foto: "img/0208.jpg",
        x: 338, y: 248,
        ruta: [[48, 505], [135, 525], [380, 525], [380, 370], [300, 285], [300, 248], [338, 248]]
    },
    {
        codigo: "SUB-EST-3",
        nombre: "Sub Estación Transf 3",
        grupo: "General",
        responsable: "A designar (Editar aquí)",
        indicacion: "ÁREA RESTRINGIDA. Ubicada inmediatamente debajo de Deshidratación M2, en el sector noroeste.",
        foto: "img/subestacion3.jpg",
        x: 338, y: 277,
        ruta: [[48, 505], [135, 525], [380, 525], [380, 370], [300, 285], [300, 277], [338, 277]]
    }
];

// =========================================================================
// LÓGICA DE INTERFAZ, ZOOM Y ARRASTRE
// =========================================================================
let sectorSeleccionado = null;
let zoomActual = 1;
let panX = 0, panY = 0;
let arrastrando = false, inicioX = 0, inicioY = 0;

function iniciar() {
    dibujarPines();
    configurarArrastre();
}

function aplicarTransform() {
    const capa = document.getElementById('capaTransform');
    capa.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomActual})`;
    document.getElementById('nivelZoomTxt').textContent = `${Math.round(zoomActual * 100)}%`;
}

function cambiarZoom(delta) {
    zoomActual = Math.min(2.75, Math.max(1, +(zoomActual + delta).toFixed(2)));
    if (zoomActual === 1) { panX = 0; panY = 0; }
    aplicarTransform();
}

function resetearZoom() {
    zoomActual = 1;
    panX = 0;
    panY = 0;
    aplicarTransform();
}

function configurarArrastre() {
    const visor = document.getElementById('contenedorVisor');
    visor.addEventListener('pointerdown', (e) => {
        if (e.target.closest('[data-pin="true"]')) return;
        arrastrando = true;
        inicioX = e.clientX - panX;
        inicioY = e.clientY - panY;
    });
    window.addEventListener('pointermove', (e) => {
        if (!arrastrando || zoomActual === 1) return;
        panX = e.clientX - inicioX;
        panY = e.clientY - inicioY;
        aplicarTransform();
    });
    window.addEventListener('pointerup', () => { arrastrando = false; });
}

function dibujarPines() {
    const contenedor = document.getElementById('pinesSectores');
    contenedor.innerHTML = SECTORES.map(s => {
        const activo = sectorSeleccionado && sectorSeleccionado.codigo === s.codigo;
        const colorPin = activo ? '#f59e0b' : (s.grupo === 'M1' ? '#22d3ee' : (s.grupo === 'M2' ? '#2dd4bf' : '#a78bfa'));
        return `
            <g data-pin="true" onclick="seleccionarSector('${s.codigo}')" style="cursor:pointer;">
                <circle cx="${s.x}" cy="${s.y}" r="11" fill="transparent"/>
                ${activo ? `<circle cx="${s.x}" cy="${s.y}" r="20" fill="#f59e0b" fill-opacity="0.4" class="pulso-destino"/>` : ''}
                <circle cx="${s.x}" cy="${s.y}" r="${activo ? 9.5 : 5.8}" fill="${colorPin}" stroke="#0f172a" stroke-width="2"/>
                ${activo ? `
                    <rect x="${s.x - 105}" y="${s.y - 32}" width="210" height="20" rx="5" fill="#0f172a" fill-opacity="0.96" stroke="#f59e0b" stroke-width="1.2"/>
                    <text x="${s.x}" y="${s.y - 18}" fill="#fde68a" font-size="10.5" font-weight="bold" text-anchor="middle">${s.nombre}</text>
                ` : ''}
            </g>
        `;
    }).join('');
}

function seleccionarSector(codigo) {
    const sec = SECTORES.find(s => s.codigo === codigo);
    if (!sec) return;
    sectorSeleccionado = sec;

    const linea = document.getElementById('lineaRuta');
    linea.setAttribute('points', sec.ruta.map(p => p.join(',')).join(' '));
    linea.classList.remove('hidden');

    document.getElementById('indicadorRuta').textContent = `Destino: ${sec.nombre}`;

    dibujarPines();

    document.getElementById('estadoVacio').classList.add('hidden');
    const detalle = document.getElementById('contenidoDetalle');
    detalle.classList.remove('hidden');
    detalle.classList.add('flex');

    document.getElementById('detCodigo').textContent = sec.codigo;
    document.getElementById('detZona').textContent = sec.grupo === 'M1' ? 'Módulo 1 (M1)' : (sec.grupo === 'M2' ? 'Módulo 2 (M2)' : 'Sector General');
    document.getElementById('detNombre').textContent = sec.nombre;
    document.getElementById('detResponsable').textContent = sec.responsable;
    document.getElementById('detIndicacion').textContent = sec.indicacion;

    const imgEl = document.getElementById('detFoto');
    const sinFotoEl = document.getElementById('detSinFoto');
    imgEl.classList.remove('hidden');
    sinFotoEl.classList.add('hidden');
    imgEl.src = sec.foto;
    imgEl.onerror = () => {
        imgEl.classList.add('hidden');
        sinFotoEl.classList.remove('hidden');
    };
}

function resetearMapa() {
    sectorSeleccionado = null;
    resetearZoom();
    document.getElementById('lineaRuta').classList.add('hidden');
    document.getElementById('indicadorRuta').textContent = 'Tocá un punto del plano para trazar camino';
    document.getElementById('estadoVacio').classList.remove('hidden');
    document.getElementById('contenidoDetalle').classList.add('hidden');
    document.getElementById('contenidoDetalle').classList.remove('flex');
    dibujarPines();
}

iniciar();
