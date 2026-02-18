/**
 * SISTEMA DE INVENTARIO - LÓGICA CORE (script.js)
 */

// 1. BASE DE DATOS DE PRODUCTOS
const rawProducts = [ 
    "ACEITE DE OLIVA CAPRI 250 ML", "ACEITE GOTA DE ORO", "ACEITE MAZEITE DE 1/ LTS",
    "ACEITE NATUROIL 900 ML", "ACEITE AGROIL 828 ML", "ACEITE PORTUMESA MLº",
    "ACEITE VATEL DE 1/2 LT", "ACEITE VATEL SOYA 1 LIT", "ACEITUNAS ENTERAS GIRALDA 200 GMS",
    "ACEITUNAS ENTERAS GIRALDA 500 GMS", "ACEITUNAS RELLENS GIRAL 200", "ADOBO MELBUEN 185GRS",
    "AFRECHO 500 GRS", "ALCAPARRA EUREKA DE 200GMS", "ALINOS CURCUMA",
    "ALIÑO SAN MIGUEL GRAND", "ALIÑO SAN MIGUEL PQ", "ARROZ MASIA",
    "ARROZ DOÑA EMILIA 900 GR", "ARROZ MARY TRADICIONAL 900 GRS", "ARROS PRIMOR CLASICO NEGRO",
    "ARROZ PRIMOR TRADICIONAL 1 K", "ARROZ LA COMQUISTA", "ATUN MARGARITA",
    "ATUN DI PLOMATICO", "ATUNPEÑERO", "AZUCAR DE JESUS", "AVENA MAIZAL",
    "AVENA QUAKER", "AVENA DEVITA 400 GRS", "AVENA DON JORGE 400 GMS",
    "AVENA 8 DE MARZO.", "AZUCAR LA PASTORA 1 KG", "AZUCAR CONFI 1 KILO",
    "AZUCAR MONTALBAN", "AVENA MAIZALITO", "BOMBILLO LED", "BOMBILLOS AMARILLOS",
    "BOMBILLOS LED 15WAT", "BROTES SANARE", "CACHITO *20 TODOS",
    "CAFÉ LO NUESTRO 200 GMS", "CAFÉ MATILDE", "CAFÉ BARINAS",
    "CAFÉ CORDILLERA 200 GRS", "CAFÉ CORDILLERA 500 GRS", "CAFÉ EN GRANO 250 FRONT- DULCE",
    "CAFÉ EN GRANO 250 GRS COROMOTANA", "CAFÉ EN GRANO 400 FRONT- DULCE", "CAFÉ EN GRANO 400 GRS COROMOTANA",
    "CARAOTA NEGRAS Y ROJAS PSD", "CARAOTAS NEGRAS D´ VITA 400G", "CARAOTAS NEGRAS MAIZAL 400 GRS",
    "CARNE D SOYA SOY TEX/ SOY+VIT200 GRS", "CATALINAS /NEGRAS* 10", "CATALINAS BLANCA",
    "CURCUMA", "CEPILLO DENTAL COLGATE", "CERA TULIPAN 1/2 LT BLANCA",
    "CERA TULIPAN 1LT BLANCA", "CERA TULIPAN DE 1/2LT COLOR", "CERA TULIPAN DE 1LT COLOR",
    "CERELAC BOLSA 400 GRS", "CHOCO PILO", "CHOCOLATE ARTESANAL 200 GRS",
    "CHOCOLATE TERRY 200 GMS", "CEPILLO DENTAL KIDS", "CLORO ENMANUEL 1 LT",
    "CLORO TAPA MARILLA 1 LT", "COCADAS", "COMPOTA HEINZ 186 GRS",
    "COMPOTA NATULA CARTON 160 GR", "COMPOTA NATULAC 186 GMS", "CREMA DE ARROZ SANTONI",
    "CREMA ARROZ PRIMOR 450 grs", "CREMA GALACTIC", "CREMA ARROZ MARY 450 gr",
    "CREMA COLGATE 90 NORMAL", "CREMA COLGATE TRIPL AXION 60 ML", "CREMA DENTAL ALMESSY 100 GRS",
    "CREMA DENTAL MAKSIN 135 GR", "CREMA COLGATE KIDS", "DESODORANTE EVERY NIGHT",
    "DESODORANTE LADY SPICK SOBRE", "DIABLITO PLUMROSE", "DIABLITO UNDERWOOD 54 GR PQ",
    "DSDNTE LADY SPICK TICK SOBRE", "TWESTY QUESO", "ENCURTIDOS EUREKA 245GRS",
    "ESPONJAS MAXHOGAR", "FIDEOS CAPRI 250 GRS", "FIDEOS ESPECIAL 500 GRS",
    "FLOR DE JAMAICA MELBUEN", "FORORO MELBUEN 500 GRS", "FORORO VALLE HOND 250",
    "FORORO VALLE HOND 400GR", "FRIJOL PICO NEGRO", "FRUTO SECO MELBUEN",
    "FRUTOS SECO/ MANI MELBUEN", "GALLETA CHARMY 216 GRS", "GALLETA ARTESANAL",
    "GALLETA CALEDONIA /250 GRS", "GALLETA CLUB SOCIAL", "GALLETA KRAKER/ HONNY BRA",
    "GALLETA MARIA ITALIA", "GALLETA MARIASELECTA PUIG", "GALLETA OREO 1 TUBO",
    "GALLETA SODA CARABOBO", "GALLETA SODA PUIG /SOL", "GALLETA TIP TOP 80 GRS",
    "GALLETA TODDY CHIPS", "GALLETAS DUCALES 1 TACO", "GEL MENTOLADO",
    "GELATINA GELLA 90 GR", "GELATINA EVERY NIGHT 250 GRS", "GELATINA GOLDEN 96 GRS",
    "GELATINA ROLDA 250 GRS", "GELATINA SONRISA 96 GRS", "GEL AVIVIR",
    "HARINA DE TRIGO ESPECIAL TODO USO", "HARINA ARAURIGUA 1 KILO", "HARINA D TRIGO LA ESPECIAL LEU 900 GR",
    "HARINA D TRIGO MARY 900 GR", "HARINA DE AVENA QUAKER 400 GRS", "HARINA DE MIAZ MASIA",
    "HARINA DOÑA EMILIA", "HARINA KALY PRIMIUM ( NUEVA )", "HARINA P.A.N MEZCLA 1 KILO",
    "HARINA PAN NORMAL/ AMARILLA", "HARINA T.DULCE MAR LEUDANTE", "HARINA T.DULCE MAR TODO USO 1 KG",
    "HILO", "JABON LIQUIDO LAS LLAVES", "JABON ACE DE 500 GRS",
    "JABON ALIVE DE 1KILO", "JABON ALIVE DE 500 GR", "JABON DALAN 125 GRS",
    "JABON EN POLVO ALMESSY400 GRS", "JABÓN EN POLVO PREMIO 400GR", "JABON EVERY NIGHT 110 GR",
    "JABON JIRAFA ESPECIAL", "JABON LIQUIDO TULIPAN 1 LITRO", "JABON MULTI CLEAN 400 GR",
    "JABON PALMOLIVE 85 gms", "JABON PANEL EXTRA LIMP 250 GRS", "JABON PANEL FRESCA F GRS",
    "JABON PANELA ESPECIAL", "JABON POLVO LLAVES 400 GRS", "JABON PROTEX 110 GRS",
    "JABON REXONA 110 GR", "JUGO DEL MONTE 200 ML", "JUGO JUSTY 1,5 LTRS",
    "JUGO NATULAC 250 ML", "JUGO TUNAL 1 LITRO", "KONGA SABOR DE LIMON 30 GRS",
    "LACTOVISOY COLONA 500 GRS", "LAVA LAVA CHARMYS 1 LITRO", "LAVAP ALMMESY",
    "LAVAP LAS LLAVES CREMA", "LAVAPLATOS AXION 225 GR", "LECHE CONDEN MAITA",
    "LECHE CONDEN NATULAC 380 ML", "LECHE DESLACTOSADA TUNAL 1LT", "LECHE LA CAMPIÑA 400 GRS",
    "LECHE LIQUIDA SAN SIMON", "LECHE MONTAÑA FRESCA 400GR", "LECHE PURISIMA COMP1 LT",
    "LECHE PURISIMA DESC1 LT", "LECHE VALLELAC 375 GRS", "LENTEJAS PESADAS 500 GRS",
    "LENTEJAS D VITA 400 GRS", "LENTEJAS MAIZAL", "LIMP, MAREA CRISTALINA 500 cc",
    "LIMPIA POCETAS MAS", "MAIZ DE COTUFA D\"VITA", "MAIZ DE COTUFA MAIZAL 400 GR",
    "MAIZ DULCE PAFIA", "MAIZ DULCE DEL MONTE 432 GMS", "MAIZINA 200 GRS",
    "MAIZOR BOLSA NORMAL 300 GRS", "MAIZOR BOLSA NORMAL 500 GR", "MAIZORIT AZUCARADO 240 GR",
    "MAIZORIT SPACE POP", "MAIZORIT FRUTI AROS 240 GR", "MAIZORIT PLANET FRUT",
    "MARG VEMESA DE 500G", "MARG MIRASOL", "MARG MAVESA NORMAL 250 GR",
    "MARG MAVESA NORMAL 500 GR", "MARG KEMMY DE 400GR", "MARGARINA NELLY 500 GRS",
    "MARGARINA RENDIDORA 400 GRS", "MAYONESA LA ESPECIAL 445 GRS", "MAYONESA KEMY 445G",
    "MAYONESA KRAFT 175 GRS", "MAYONESA KRAFT 445 GRS", "MAYONESA MAVESA 175 GRS",
    "MAYONESA MAVESA 445 GRS", "MAYONESA MAVESA 910GRS", "MAYONESA REAL 445GRS",
    "MEGA ARO /BOL/MIEL/FRISGO", "SERVILLETA Z PEQ,20*160 haja", "MERMELADA ETNA 250ML",
    "MEZ, CACHAPA SEMILLA NUTRITIVA", "MIEL 1/2 CAMPO REAL", "MIEL CARACHE 500 ML",
    "MIEL SAN CARLOS/ENCANTO 350 ML", "MORTADELA ALIBAL 1/2 KILO", "MORTADELA ALIBAL1 KILO",
    "MORTADELA /PUNTA MTE 1 KG", "MORTADELA /PUNTA MTE 1/2 KG", "MORTADELA ALPRO 400 GM",
    "MORTADELA ALPRO 900 GMS", "MORTADELA ARICHUNA 1 KILO", "MORTADELA BOLOGÑA 500 GR",
    "MORTADELA CARACAS 900 GRS", "MORTADELA PLUMROSE 1 KILO", "MOSTAZA EUREKA 285 GR",
    "MULTIUSO TULIPAN 1 LITRO", "MULTIUSO TULIPAN 1/2 LITRO", "NATILLA GUARALAC 450 GRS",
    "NUTRISOY", "NESTUN BOLSA 225 GRS 3 CEREALES", "NUTRIBELLA",
    "PAN ARABE", "PAN DE DIOS AZUCARADO", "PAN DE GUAYABA",
    "PAN DE PERROS", "PAN DE SANDWI INTEGRAL", "PAN DE SANDWI NACIONAL 500 GR",
    "PAN DE SANDWICH PQÑ", "PAN DE TUNJA PEQUEÑO", "PAN HAMBURGUESA 8 UND",
    "PAN SANDWICH GRANDE", "PANELA DULCE DE 500GR", "PAÑALES HUGGYS",
    "PAPEL ROSAL 400 HOJAS", "PAPEL LUCIAN NATU 4 RLLO", "PAPEL ROSAL 600 HOJAS",
    "PAPEL ROSAL X4 215 HOJAS", "PASTA CAPRI AZUL CORTA 1 KL", "PASTA CAPRI AZUL LARGA 1 KG",
    "PASTA ESPECIAL LARGA 1 KG", "PASTA ESPECIAL CORTA 1 KG", "PASTA INTEGRAL 8 DE MARZO 500 GR",
    "PASTA PRIMOR NEGRA LARGA", "PASTA PRIMOR 1 KG NEGRA CORTA", "PASTA PRIMOR EXTRA ESPECIAL1 KG CORTA",
    "PASATA PRIMOR EXTRA ESPECIAL LARGA", "PASTA RONCO DE 500 GRS", "PASTELITOS",
    "PASTICHO CAPRI", "PASTICHO RONCO", "PEPITO CHEEZ PEK 75 GMS",
    "PEPITO OSTIS 100 GRS", "PEPITONA MARGARITA 140 GR", "PERRARIN SUPER CAN CACHOR 1/2",
    "PERRARINA DOGGCHAU 1/2 KILO", "PERRARINA DOGOURMET 1/2 KG", "PERRARINA KANINA 1/2 KG",
    "PERRARINA PURINA 1/2KG", "PERRARINA SUPER CAN 1/2 KG", "PIZZA LA CHEVERISIMA GRND",
    "PRESTOBARBA ALLISON/ MAX", "PAPEL ALUMINIO ROLLO", "RIKESA",
    "QUINCHONCHO 1/2", "REFRESCO GLUP", "REFRESCO PEPSI",
    "refresco golden", "sal en sal", "SAL ESMERALDA",
    "SALSA CHINA 150GR", "SALSA CUMBRE 397GR", "SALSA DE SOYA EL REY",
    "SALSA FRIZZ MAIZ 235 GR", "SALSA FRIZZ PICANTE 250 GRS", "SALSA GIRALDA 397 GRS",
    "SALSA HEINZ/ 397 GRS", "SALSA INGLESA IBERIA 150CC", "SALSA NAPOLITANA",
    "SALSA PAMPERO 397 GRS", "SALSA PARA PASTA GIRALDA 190GM", "SALSA TIQ FLORES 397 GR",
    "SALSA ZUYCH MAIZ /TARTAR/CHEDDAR", "SALSAS ROSADA ZUYCH/ 240 GR", "SARDINA MARGARITA",
    "SALSA MONCAR GDE", "SALSA REAL", "SHAMPO DE SOBRE",
    "SARDINA INCOSA", "SARDINA VEMPORT", "SHAMPU PANTENE 400",
    "SHAMPU SAVITAL", "SEMILLAS NUTRITIVAS", "SOPA SOBRE MAGGY",
    "SOPA SOBRE IBERIA", "SUAVISANTE DOWNY 700 ML", "SUAVISANTE TULIPAN 1 LT",
    "SUAVISANTE TULIPAN 1/2 LT", "SUAVITEL SOBRE", "SUAVIZANTE SUPER+ SOBRE",
    "SUAVISANTE DOWNY 700 ML", "SUAVISANTE TULIPAN 1 LT", "SUAVISANTE TULIPAN 1/2 LT",
    "SUERO GUARALACT 800 ML", "SUERO KASERO KO 850 ML", "SUERO LAS LAJITAS",
    "SUERO VEGA", "Suero vega picante", "TALLARIN CAPRI",
    "TALLARIN ESPECIAL", "TAMARINDO 400 GRS TODOS", "TOALLAS HUMEDAS",
    "TOALLAS ALIVE", "TOALLAS ALLISON DIURNAS", "TOALLAS CONCORD",
    "TOALLAS KOTEX NOCTURNAS", "TOALLIN PAVECA TOWELS 80 HOJAS", "TOBO PLASTICO",
    "TODDY 200 GRS", "TWISTY QUESO 200 GRS", "UVAS PASAS 200 GRM",
    "VAINILLA", "VELAS * 4 UN POPULAR", "VELAS SEÑOR SEÑOR 4 UNID",
    "VELONES SEÑOR SEÑOR PQ", "VINAGRE KEPA GRANDE DE 1 LTS", "VINAGRE EUREKA 1 LITRO",
    "VINAGRE FRUTA ETNA MANZ 300 ML", "VINAGRE MAVESA 1/2LTS", "VINAGRE MAVESA 1LT",
    "VINAGRE TIQUIRE FLORES 1/2", "YOGURT LIQ GUARALAC 400 ML", "YOGURT POLAR 250ML POTE"
];

// 2. ESTADO GLOBAL
let inventoryData = [];
let currentProduct = null;
let currentDisplay = "";

// 3. INICIALIZACIÓN
function initInventory() {
    inventoryData = rawProducts.map(name => {
        let uWeight = 1; 
        const upper = name.toUpperCase();
        
        if(upper.includes("900 GR") || upper.includes("900 GRS") || upper.includes("900 ML")) uWeight = 0.9;
        else if(upper.includes("1/2") || upper.includes("500 GRS") || upper.includes("500 GMS") || upper.includes("500 ML") || upper.includes("500 GR")) uWeight = 0.5;
        else if(upper.includes("250 GRS") || upper.includes("250 GMS") || upper.includes("250 ML")) uWeight = 0.25;
        else if(upper.includes("200 GMS") || upper.includes("200 GRS") || upper.includes("200 ML") || upper.includes("200 GR")) uWeight = 0.2;
        else if(upper.includes("1 KG") || upper.includes("1 KILO") || upper.includes("1 LIT") || upper.includes("1 LTS") || upper.includes("1LT")) uWeight = 1.0;
        else if(upper.includes("1,5 LTRS")) uWeight = 1.5;
        else if(upper.includes("400 GRS") || upper.includes("400 GMS") || upper.includes("400 GR")) uWeight = 0.4;
        else if(upper.includes("185GRS") || upper.includes("186 GRS")) uWeight = 0.185;

        return {
            name: name,
            qty: 0,
            history: [],
            unitWeight: uWeight,
            isWeight: uWeight !== 1 
        };
    });
}

// 4. FUNCIONES DE PANTALLA
function startInventory() {
    const resp = document.getElementById('responsables').value.trim();
    if(!resp) return alert("Ingrese los nombres de los responsables.");
    
    document.getElementById('display-responsables').innerText = "Responsables: " + resp;
    document.getElementById('setup').classList.remove('active');
    document.getElementById('inventory').classList.add('active');
    renderSelectedList();
}

// 5. BUSCADOR
function filterProducts() {
    const term = document.getElementById('search').value.toUpperCase().trim();
    const container = document.getElementById('results');
    
    if (term === "") { 
        container.innerHTML = `<div style="text-align:center; padding:20px; color:#888;">Busca un producto</div>`;
        return; 
    }

    const filtered = inventoryData.filter(p => p.name.toUpperCase().includes(term));
    container.innerHTML = '';
    
    filtered.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card search-item';
        card.onclick = () => openCalc(prod);
        card.innerHTML = `
            <div style="flex-grow: 1;">
                <span class="badge ${prod.isWeight ? 'badge-weight' : ''}">${prod.isWeight ? '⚖️' : '📦'} ${prod.name}</span>
            </div>
            <div style="color: #27ae60; font-weight: bold;">+ Añadir</div>
        `;
        container.appendChild(card);
    });
}

// 6. CALCULADORA
function openCalc(prod) {
    currentProduct = prod;
    currentDisplay = ""; 
    
    const infoW = document.getElementById('weight-calc-info');
    if(infoW) {
        infoW.style.display = prod.isWeight ? 'block' : 'none';
        infoW.innerHTML = prod.isWeight ? `⚠️ Modo Pesaje: Convirtiendo ${prod.unitWeight} kg a 1 unidad` : '';
    }

    document.getElementById('calc-product-name').innerText = prod.name;
    document.getElementById('calc-modal').style.display = "block";
    updateCalcDisplay();
    renderHistory();
}

function pressKey(num) {
    if (num === '.' && currentDisplay.includes('.')) return;
    currentDisplay += num;
    updateCalcDisplay();
}

function clearCalc() {
    currentDisplay = "";
    updateCalcDisplay();
}

function updateCalcDisplay() {
    document.getElementById('calc-display').innerText = currentDisplay || "0";
}

function addToHistory() {
    if (currentDisplay === "" || currentDisplay === ".") return;
    
    let val = parseFloat(currentDisplay);
    if (currentProduct.isWeight) {
        val = Math.round((val / currentProduct.unitWeight) * 100) / 100;
    }
    
    currentProduct.history.push(val);
    currentProduct.qty = Math.round(currentProduct.history.reduce((a, b) => a + b, 0) * 100) / 100;
    
    currentDisplay = "";
    updateCalcDisplay();
    renderHistory();
}

function saveCalc() {
    if (currentDisplay !== "" && currentDisplay !== ".") addToHistory();
    document.getElementById('calc-modal').style.display = "none";
    document.getElementById('search').value = "";
    filterProducts();
    renderSelectedList();
}

function closeCalc() {
    document.getElementById('calc-modal').style.display = "none";
}

function renderHistory() {
    const historyDiv = document.getElementById('calc-history');
    historyDiv.innerText = currentProduct.history.length > 0 
        ? `${currentProduct.history.join(" + ")} = ${currentProduct.qty}`
        : "Sin registros";
}

// 7. GESTIÓN DE LISTA
function renderSelectedList() {
    const container = document.getElementById('selected-list');
    container.innerHTML = '';
    const selectedItems = inventoryData.filter(p => p.qty > 0);

    if (selectedItems.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888; padding:10px;">No hay productos contados</p>';
        return;
    }

    selectedItems.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card selected-item';
        card.innerHTML = `
            <div style="flex-grow: 1;" onclick="openCalcById('${prod.name.replace(/'/g, "\\'")}')">
                <span style="font-weight:600; display:block;">${prod.name}</span>
                <small style="color: #2980b9;">Suma: ${prod.history.join(" + ")}</small>
            </div>
            <div style="text-align: right; display: flex; align-items: center; gap: 15px;">
                <div>
                    <div style="font-size: 1.2rem; font-weight: bold;">${prod.qty}</div>
                </div>
                <button class="delete-item-btn" onclick="removeProduct('${prod.name.replace(/'/g, "\\'")}')">🗑️</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function openCalcById(name) {
    const prod = inventoryData.find(p => p.name === name);
    if(prod) openCalc(prod);
}

function removeProduct(name) {
    if(confirm("¿Eliminar este producto del conteo?")) {
        const prod = inventoryData.find(p => p.name === name);
        if(prod) {
            prod.qty = 0;
            prod.history = [];
            renderSelectedList();
        }
    }
}

function addNewProductPrompt() {
    const name = prompt("Nombre del nuevo producto:");
    if (name && name.trim() !== "") {
        const upper = name.toUpperCase();
        if(inventoryData.find(p => p.name.toUpperCase() === upper)) return alert("El producto ya existe");
        
        const newProd = { name: upper, qty: 0, history: [], unitWeight: 1, isWeight: false };
        inventoryData.push(newProd);
        openCalc(newProd);
    }
}

// 8. EXPORTACIÓN Y PERSISTENCIA
function exportToExcel() {
    const items = inventoryData.filter(p => p.qty > 0);
    if(items.length === 0) return alert("No hay datos para exportar");

    const data = items.map(p => ({
        "PRODUCTO": p.name,
        "CANTIDAD": p.qty,
        "DETALLE": p.history.join(" + "),
        "FECHA": new Date().toLocaleString()
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventario");
    XLSX.writeFile(wb, `Inventario_${new Date().getTime()}.xlsx`);
    
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const history = JSON.parse(localStorage.getItem('inventoryHistory') || "[]");
    const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        staff: document.getElementById('display-responsables').innerText,
        data: inventoryData.filter(p => p.qty > 0)
    };
    history.push(newEntry);
    localStorage.setItem('inventoryHistory', JSON.stringify(history));
}

function resetCurrentInventory() {
    if(confirm("¿Seguro que quieres borrar el conteo actual?")) {
        location.reload();
    }
}

// INICIAR
initInventory();
