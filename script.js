/**
 * SISTEMA DE INVENTARIO - LÓGICA CORE (script.js)
 */

// 1. BASE DE DATOS DE PRODUCTOS
const rawProducts = [ 
    "ACEITE DE OLIVA CAPRI 250 ML", "ACEITE GOTA DE ORO", "ACEITE MAZEITE DE 1/ LTS",
    "ACEITE NATUROIL 900 ML", "ACEITE AGROIL 828 ML", "ACEITE PORTUMESA ML",
    "ACEITE VATEL DE 1/2 LT", "ACEITE VATEL SOYA 1 LT", "ACEITUNAS ENTERAS GIRALDA 200 GMS",
    "ACEITUNAS ENTERAS GIRALDA 500 GMS", "ACEITUNAS RELLENS GIRAL 200 GMS", "ADOBO MELBUEN 185GMS",
    "AFRECHO 500 GRS", "ALCAPARRA EUREKA DE 200GMS", "ALINOS CURCUMA",
    "ALIÑO SAN MIGUEL GRAND", "ALIÑO SAN MIGUEL PQ", "ARROZ MASIA 900 GRS",
    "ARROZ DOÑA EMILIA 900 GRS", "ARROZ MARY TRADICIONAL 900 GRS", "ARROS PRIMOR CLASICO NEGRO 1 KG",
    "ARROZ PRIMOR TRADICIONAL 1 KG", "ARROZ LA COMQUISTA 900 GRS", "ATUN MARGARITA",
    "ATUN DIPLOMATICO", "ATUN PEÑERO", "AZUCAR DE JESUS 1 KG", "AVENA MAIZAL 400 GRS",
    "AVENA QUAKER 400 GRS", "AVENA DEVITA 400 GRS", "AVENA DON JORGE 400 GRS",
    "AVENA 8 DE MARZO 400 GRS.", "AZUCAR LA PASTORA 1 KG", "AZUCAR KONFIT 1 KG",
    "AZUCAR MONTALBAN 1 KG", "AVENA EL MAIZALITO 400 GRS", "BOMBILLO LED", "BOMBILLOS AMARILLOS",
    "BOMBILLOS LED 15WAT", "BROTES SANARE", "CACHITO",
    "CAFÉ LO NUESTRO 200 GRS", "CAFÉ MATILDE 200 GRS", "CAFÉ BARINAS 200 GRS",
    "CAFÉ CORDILLERA 200 GRS", "CAFÉ CORDILLERA 500 GRS", "CAFÉ EN GRANO FRONTINO 250 GRS","CAFÉ EN GRANO DULCE AMARGO 250 GRS",
    "CAFÉ EN GRANO COROMOTANA 250 GRS", "CAFÉ EN GRANO FRONTINO 400 GRS",  "CAFÉ EN GRANO DULCE AMARGO 400 GRS", "CAFÉ EN GRANO COROMOTANA 400 GRS",
    "CARAOTA NEGRAS Y ROJAS PESADA 500 GRS", "CARAOTAS NEGRAS D´ VITA 400 GRS", "CARAOTAS NEGRAS MAIZAL 400 GRS",
    "CARNE D SOYA SOY TEX 200 GRS", "CATALINAS NEGRAS", "CATALINAS BLANCA",
    "CEPILLO DENTAL COLGATE", "CERA TULIPAN 1/2 LT BLANCA",
    "CERA TULIPAN 1 LT BLANCA", "CERA TULIPAN DE 1/2 LT COLOR", "CERA TULIPAN DE 1 LT COLOR",
    "CERELAC BOLSA 400 GRS", "CHOCO PILO", "CHOCOLATE ARTESANAL 200 GRS",
    "CHOCOLATE TERRY 200 GRS", "CEPILLO DENTAL KIDS", "CLORO ENMANUEL 1 LT",
    "CLORO TAPA MARILLA 1 LT", "COCADAS", "COMPOTA HEINZ 186 GMS",
    "COMPOTA NATULA CARTON 160 GMS", "COMPOTA NATULAC 186 GMS", "CREMA DE ARROZ SANTONI 400 GRS",
    "CREMA ARROZ PRIMOR 450 GRS", "CREMA GALACTIC", "CREMA ARROZ MARY 450 GRS",
    "CREMA COLGATE 90 ML NORMAL", "CREMA COLGATE TRIPL AXION 60 ML", "CREMA DENTAL ALMESSY 100 GMS",
    "CREMA DENTAL MAKSIN 135 GMS", "CREMA COLGATE KIDS", "DESODORANTE EVERY NIGHT",
    "DESODORANTE LADY SPICK SOBRE", "DIABLITO PLUMROSE", "DIABLITO UNDERWOOD 54 GRM",
    "DESODORANTE LADY SPICK TICK SOBRE", "TWESTY QUESO", "ENCURTIDOS EUREKA 245GMS",
    "ESPONJAS MAX HOGAR", "FIDEOS CAPRI 250 GRS", "FIDEOS ESPECIAL 500 GRS",
    "FLOR DE JAMAICA MELBUEN", "FORORO MELBUEN 500 GRS", "FORORO VALLE HONDO 250 GRS",
    "FORORO VALLE HOND 400 GRS", "FRIJOL PICO NEGRO 400 GRS", "FRUTO SECO MELBUEN",
    "FRUTOS SECO MANI MELBUEN", "GALLETA CHARMY 216 GMS", "GALLETA ARTESANAL",
    "GALLETA CALEDONIA 250 GMS", "GALLETA CLUB SOCIAL", "GALLETA KRAKER/HONNY BRAN",
    "GALLETA MARIA ITALIA", "GALLETA MARIA SELECTA PUIG", "GALLETA OREO",
    "GALLETA SODA CARABOBO", "GALLETA SODA PUIG SOL", "GALLETA TIP TOP 80 GMS",
    "GALLETA TODDY CHIPS", "GALLETAS DUCALES", "GEL MENTOLADO",
    "GELATINA GELLA 90 GMS", "GELATINA EVERY NIGHT 250 GMS", "GELATINA GOLDEN 96 GMS",
    "GELATINA ROLDA 250 GMS", "GELATINA SONRISA 96 GMS", "GEL AVIVIR",
    "HARINA DE TRIGO ESPECIAL TODO USO 1 KG", "HARINA ARAURIGUA 1 KG", "HARINA DE TRIGO LA ESPECIAL LEUDANTE 900 GRS",
    "HARINA DE TRIGO MARY 900 GRS", "HARINA DE AVENA QUAKER 400 GRS", "HARINA DE MAIZ MASIA 1 KG",
    "HARINA DOÑA EMILIA", "HARINA KALY PRIMIUM", "HARINA P.A.N MEZCLA 1 KG",
    "HARINA PAN NORMAL/AMARILLA", "HILO", "JABON LIQUIDO LAS LLAVES", "JABON ACE DE 500 GRS",
    "JABON ALIVE DE 1 KG", "JABON ALIVE DE 500 GRS", "JABON DALAN 125 GMS",
    "JABON EN POLVO ALMESSY 400 GRS", "JABÓN EN POLVO PREMIO 400 GRS", "JABON EVERY NIGHT 110 GMS",
    "JABON JIRAFA ESPECIAL", "JABON LIQUIDO TULIPAN 1 LT", "JABON MULTI CLEAN 400 GRS",
    "JABON PALMOLIVE 85 GMS", "JABON PANEL EXTRA LIMP 250 GMS", "JABON PANEL FRESCA FRAGANCIA",
    "JABON PANELA ESPECIAL", "JABON POLVO LLAVES 400 GRS", "JABON PROTEX 110 GMS",
    "JABON REXONA 110 GMS", "JUGO DEL MONTE 200 ML", "JUGO JUSTY 1,5 LT",
    "JUGO NATULAC 250 ML", "JUGO TUNAL 1 LITRO", "KONGA",
    "LACTOVISOY COLONA 500 GRS", "LAVA LAVA CHARMYS 1 LT",
    "LAVAPLATOS LAS LLAVES CREMA", "LAVAPLATOS AXION 225 GMS", "LECHE CONDEN MAITA",
    "LECHE CONDEN NATULAC 380 ML", "LECHE DESLACTOSADA TUNAL 1 LT", "LECHE LA CAMPIÑA 400 GRS",
    "LECHE LIQUIDA SAN SIMON", "LECHE MONTAÑA FRESCA 400 GRS", "LECHE PURISIMA COMPLETA 1 LT",
    "LECHE PURISIMA DESLACTOSADA 1 LT", "LECHE VALLELAC 375 GRS", "LENTEJAS PESADAS 500 GRS",
    "LENTEJAS D VITA 400 GRS", "LENTEJAS MAIZAL 400 GRS", "LIMPIADOR MAREA CRISTALINA 500 ML",
    "LIMPIA POCETAS MAS", "MAIZ DE COTUFA D´VITA", "MAIZ DE COTUFA MAIZAL 400 GRS",
    "MAIZ DULCE PAFIA", "MAIZ DULCE DEL MONTE 432 GMS", "MAIZINA 200 GRS",
    "MAIZOR BOLSA NORMAL 300 GRS", "MAIZORITO AZUCARADO 240 GRS",
    "MAIZORITO SPACE POP", "MAIZORITO FRUTY AROS 240 GRS", "MAIZORITO PLANET FRUIT",
    "MARG VEMESA DE 500 GMS", "MARGARINA MIRASOL", "MARGARINA MAVESA NORMAL 250 GMS",
    "MARGARINA MAVESA NORMAL 500 GMS", "MARGARINA KEMMY DE 400 GMS", "MARGARINA NELLY 500 GMS",
    "MARGARINA RENDIDORA 400 GMS", "MAYONESA LA ESPECIAL 445 GMS", "MAYONESA KEMY 445 GMS",
    "MAYONESA KRAFT 175 GMS", "MAYONESA KRAFT 445 GMS", "MAYONESA MAVESA 175 GMS",
    "MAYONESA MAVESA 445 GMS", "MAYONESA MAVESA 910 GMS", "MAYONESA REAL 445 GMS",
    "MEGA ARO/BOL/MIEL/FRISGO", "SERVILLETA Z PEQ 160 hojas", "MERMELADA ETNA 250 ML",
    "MEZCLA CACHAPA SEMILLA NUTRITIVA", "MIEL 1/2 CAMPO REAL", "MIEL CARACHE 500 ML",
    "MIEL SAN CARLOS/ENCANTO 350 ML", "MORTADELA ALIBAL 1/2 KL", "MORTADELA ALIBAL 1 KL",
    "MORTADELA PUNTA MONTE 1 KG", "MORTADELA PUNTA MONTE 1/2 KG", "MORTADELA ALPRO 400 GMS",
    "MORTADELA ALPRO 900 GMS", "MORTADELA ARICHUNA 1 KL", "MORTADELA BOLOGÑA 500 GMS",
    "MORTADELA CARACAS 900 GMS", "MORTADELA PLUMROSE 1 KL", "MOSTAZA EUREKA 285 GMS",
    "MULTIUSO TULIPAN 1 LT", "MULTIUSO TULIPAN 1/2 LITRO", "NATILLA GUARALAC 450 GMS",
    "NUTRISOY", "NESTUN BOLSA 225 GMS", "NUTRIBELLA",
    "PAN ARABE", "PAN DE DIOS AZUCARADO", "PAN DE GUAYABA",
    "PAN DE PERROS", "PAN DE SANDWI INTEGRAL", "PAN DE SANDWI NACIONAL 500 GMS",
    "PAN DE SANDWICH PQÑ", "PAN DE TUNJA PEQUEÑO", "PAN HAMBURGUESA 8 UND",
    "PAN SANDWICH GRANDE", "PANELA DULCE DE 500 GMS", "PAÑALES HUGGYS",
    "PAPEL ROSAL 400 HOJAS", "PAPEL LUCIAN NATU 4 RLLO", "PAPEL ROSAL 600 HOJAS",
    "PAPEL ROSAL X4 215 HOJAS", "PASTA CAPRI AZUL CORTA 1 KL", "PASTA CAPRI AZUL LARGA 1 KL",
    "PASTA ESPECIAL LARGA 1 KL", "PASTA ESPECIAL CORTA 1 KL", "PASTA INTEGRAL 8 DE MARZO 500 GRS",
    "PASTA PRIMOR NEGRA LARGA 1 KL", "PASTA PRIMOR NEGRA CORTA 1 KL", "PASTA PRIMOR EXTRA ESPECIAL CORTA 1 KL",
    "PASTA PRIMOR EXTRA ESPECIAL LARGA 1 KL", "PASTA RONCO DE 500 GRS", "PASTELITOS",
    "PASTICHO CAPRI", "PASTICHO RONCO", "PEPITO CHEEZ PEK 75 GMS",
    "PEPITO OSTIS 100 GMS", "PEPITONA MARGARITA 140 GMS",
    "PIZZA LA CHEVERISIMA GRND","PRESTOBARBA ALLISON/ MAX", "PAPEL ALUMINIO ROLLO", "RIKESA",
    "QUINCHONCHO 500 GRS", "REFRESCO GLUP", "REFRESCO PEPSI",
    "REFRESCO GOLDEN", "SAL EN SAL", "SAL ESMERALDA",
    "SALSA CHINA 150 GMS", "SALSA CUMBRE 397 GMS", "SALSA DE SOYA EL REY",
    "SALSA FRIZZ MAIZ 235 GMS", "SALSA FRIZZ PICANTE 250 GMS", "SALSA GIRALDA 397 GMS",
    "SALSA HEINZ/ 397 GMS", "SALSA INGLESA IBERIA 150 GMS", "SALSA NAPOLITANA",
    "SALSA PAMPERO 397 GMS", "SALSA PARA PASTA GIRALDA 190 GMS", "SALSA TIQ FLORES 397 GMS",
    "SALSA ZUYCH MAIZ /TARTAR/CHEDDAR", "SALSAS ROSADA ZUYCH/ 240 GMS", "SARDINA MARGARITA",
    "SALSA MONCAR GRD", "SALSA REAL", "SHAMPO DE SOBRE",
    "SARDINA INCOSA", "SARDINA VEMPORT", "SHAMPU PANTENE",
    "SHAMPU SAVITAL", "SEMILLAS NUTRITIVAS", "SOPA SOBRE MAGGY",
    "SOPA SOBRE IBERIA", "SUAVISANTE DOWNY 700 ML", "SUAVISANTE TULIPAN 1 LT",
    "SUAVISANTE TULIPAN 1/2 LT", "SUAVITEL SOBRE", "SUAVIZANTE SUPER+ SOBRE",
    "SUERO GUARALACT 800 ML", "SUERO KASERO KO 850 ML", "SUERO LAS LAJITAS",
    "SUERO VEGA", "SUERO VEGA PICANTE", "TALLARIN CAPRI",
    "TALLARIN ESPECIAL", "TAMARINDO 400 GMS", "TOALLAS HUMEDAS",
    "TOALLAS ALIVE", "TOALLAS ALLISON DIURNAS", "TOALLAS CONCORD",
    "TOALLAS KOTEX NOCTURNAS", "TOALLIN PAVECA TOWELS 80 HOJAS", "TOBO PLASTICO",
    "TODDY 200 GRS", "UVAS PASAS 200 GRS",
    "VAINILLA", "VELAS POPULAR", "VELAS SEÑOR SEÑOR",
    "VELONES SEÑOR SEÑOR PQ", "VINAGRE KEPA GRANDE DE 1 LT", "VINAGRE EUREKA 1 LT",
    "VINAGRE FRUTA ETNA MANZ 300 ML", "VINAGRE MAVESA 1/2 LT", "VINAGRE MAVESA 1 LT",
    "VINAGRE TIQUIRE FLORES 1/2 LT", "YOGURT LIQ GUARALAC 400 ML"
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
    if(items.length === 0) return alert("No hay nada que exportar.");

    // GUARDAR EN HISTORIAL AUTOMÁTICAMENTE
    saveToLocalStorage();

    const data = items.map(p => ({
        "PRODUCTO": p.name,
        "CANTIDAD": p.qty,
        "DESGLOSE": p.history.join(" + ")
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventario");
    XLSX.writeFile(wb, `Inventario_${new Date().getTime()}.xlsx`);
    
    alert("Excel generado y guardado en Historial.");
}

function resetCurrentInventory() {
    if(confirm("¿Seguro que quieres borrar el conteo actual?")) {
        location.reload();
    }
}

// --- SISTEMA DE HISTORIAL CON VISUALIZACIÓN ---

function saveToLocalStorage() {
    const resp = document.getElementById('responsables').value.trim() || "Sin nombre";
    const countedItems = inventoryData.filter(p => p.qty > 0);
    
    if (countedItems.length === 0) return;

    const history = JSON.parse(localStorage.getItem('inventoryHistory') || "[]");
    const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        staff: resp,
        data: countedItems.map(p => ({
            name: p.name,
            qty: p.qty,
            history: [...p.history]
        }))
    };

    history.push(newEntry);
    localStorage.setItem('inventoryHistory', JSON.stringify(history));
}

function openHistoryModal() {
    const modal = document.getElementById('history-modal');
    const listContainer = document.getElementById('history-list');
    const history = JSON.parse(localStorage.getItem('inventoryHistory') || "[]");

    listContainer.innerHTML = "";

    if (history.length === 0) {
        listContainer.innerHTML = "<p style='text-align:center; color:#888;'>No hay registros guardados.</p>";
    } else {
        [...history].reverse().forEach(inv => {
            const div = document.createElement('div');
            div.style = "display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; border:1px solid #ddd; padding:10px; border-radius:8px; cursor:pointer; background:#fff;";
            
            div.innerHTML = `
                <div onclick="loadInventory(${inv.id})" style="flex-grow:1">
                    <strong style="display:block">${inv.date}</strong>
                    <small>${inv.staff} (${inv.data.length} productos)</small>
                </div>
                <button onclick="deleteFromHistory(${inv.id})" style="background:none; border:none; color:red; font-size:1.2rem; margin-left:10px; cursor:pointer;">🗑️</button>
            `;
            listContainer.appendChild(div);
        });
    }
    modal.style.display = "block";
}

function loadInventory(id) {
    const history = JSON.parse(localStorage.getItem('inventoryHistory') || "[]");
    const selected = history.find(inv => inv.id === id);
    
    if (!selected) return;

    if (confirm(`¿Deseas cargar el inventario de "${selected.staff}"? Se perderá el conteo actual de la pantalla.`)) {
        // Resetear base
        inventoryData.forEach(p => { p.qty = 0; p.history = []; });

        // Cargar datos
        selected.data.forEach(savedItem => {
            let prod = inventoryData.find(p => p.name === savedItem.name);
            if (!prod) {
                prod = { name: savedItem.name, qty: 0, history: [], unitWeight: 1, isWeight: false };
                inventoryData.push(prod);
            }
            prod.qty = savedItem.qty;
            prod.history = [...savedItem.history];
        });

        document.getElementById('display-responsables').innerText = "Viendo Historial: " + selected.staff;
        document.getElementById('setup').classList.remove('active');
        document.getElementById('inventory').classList.add('active');
        
        closeHistoryModal();
        renderSelectedList();
        alert("Inventario cargado correctamente.");
    }
}

function deleteFromHistory(id) {
    if (confirm("¿Borrar definitivamente este registro?")) {
        let history = JSON.parse(localStorage.getItem('inventoryHistory') || "[]");
        history = history.filter(inv => inv.id !== id);
        localStorage.setItem('inventoryHistory', JSON.stringify(history));
        openHistoryModal();
    }
}

function closeHistoryModal() {
    document.getElementById('history-modal').style.display = "none";
}

// INICIAR AL CARGAR EL SCRIPT
initInventory();

// --- FUNCIONES DE RESPALDO Y DESCARGA TOTAL ---

// 1. Descargar TODO el historial en un archivo .json (Respaldo)
function descargarRespaldoCompleto() {
    const history = localStorage.getItem('inventoryHistory');
    if (!history || history === "[]") return alert("No hay historial para descargar.");

    const blob = new Blob([history], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `Respaldo_Inventarios_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 2. Exportar todos los inventarios del historial a un solo Excel (Reporte Maestro)
function exportarTodoAExcel() {
    const history = JSON.parse(localStorage.getItem('inventoryHistory') || "[]");
    if (history.length === 0) return alert("El historial está vacío.");

    const wb = XLSX.utils.book_new();

    history.forEach((inv, index) => {
        const wsData = inv.data.map(p => ({
            "PRODUCTO": p.name,
            "CANTIDAD": p.qty,
            "DESGLOSE": p.history.join(" + ")
        }));
        
        const ws = XLSX.utils.json_to_sheet(wsData);
        // Creamos una pestaña para cada fecha (limitado a 31 caracteres por Excel)
        const sheetName = `Inv ${inv.date.split(',')[0].replace(/\//g, '-')}_${index}`;
        XLSX.utils.book_append_sheet(wb, ws, sheetName.slice(0, 30));
    });

    XLSX.writeFile(wb, "Reporte_Historico_Completo.xlsx");
}

