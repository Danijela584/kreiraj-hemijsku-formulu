const compounds = [
    { formula: 'HCl', name: 'Hlorovodonična kiselina', cation: 'H⁺', anion: 'Cl⁻' },
    { formula: 'H₂SO₄', name: 'Sumporna kiselina', cation: 'H⁺', anion: 'SO₄²⁻' },
    { formula: 'HNO₃', name: 'Azotna kiselina', cation: 'H⁺', anion: 'NO₃⁻' },
    { formula: 'CH₃COOH', name: 'Sirćetna kiselina', cation: 'H⁺', anion: 'CH₃COO⁻' },
    { formula: 'H₂CO₃', name: 'Ugljena kiselina', cation: 'H⁺', anion: 'CO₃²⁻' },
    { formula: 'NaOH', name: 'Natrijum hidroksid', cation: 'Na⁺', anion: 'OH⁻' },
    { formula: 'KOH', name: 'Kalijum hidroksid', cation: 'K⁺', anion: 'OH⁻' },
    { formula: 'Ca(OH)₂', name: 'Kalcijum hidroksid', cation: 'Ca²⁺', anion: 'OH⁻' },
    { formula: 'Mg(OH)₂', name: 'Magnezijum hidroksid', cation: 'Mg²⁺', anion: 'OH⁻' },
    { formula: 'NaCl', name: 'Natrijum-hlorid', cation: 'Na⁺', anion: 'Cl⁻' },
    { formula: 'KBr', name: 'Kalijum-bromid', cation: 'K⁺', anion: 'Br⁻' },
    { formula: 'CaCO₃', name: 'Kalcijum-karbonat', cation: 'Ca²⁺', anion: 'CO₃²⁻' },
    { formula: 'Na₂SO₄', name: 'Natrijum-sulfat', cation: 'Na⁺', anion: 'SO₄²⁻' },
    { formula: 'KNO₃', name: 'Kalijum-nitrat', cation: 'K⁺', anion: 'NO₃⁻' },
    { formula: 'NaHCO₃', name: 'Natrijum-hidrogenkarbonat', cation: 'Na⁺', anion: 'HCO₃⁻' },
    { formula: 'CaCl₂', name: 'Kalcijum-hlorid', cation: 'Ca²⁺', anion: 'Cl⁻' },
    { formula: 'MgSO₄', name: 'Magnezijum-sulfat', cation: 'Mg²⁺', anion: 'SO₄²⁻' },
    { formula: 'CuSO₄', name: 'Bakar(II)-sulfat', cation: 'Cu²⁺', anion: 'SO₄²⁻' },
    { formula: 'H₃PO₄', name: 'Fosforna kiselina', cation: 'H⁺', anion: 'PO₄³⁻' },
    { formula: 'HBr', name: 'Bromovodonična kiselina', cation: 'H⁺', anion: 'Br⁻' },
    { formula: 'HI', name: 'Jodovodonična kiselina', cation: 'H⁺', anion: 'I⁻' },
    { formula: 'H₂S', name: 'Vodonik-sulfid', cation: 'H⁺', anion: 'S²⁻' },
    { formula: 'LiOH', name: 'Litijum hidroksid', cation: 'Li⁺', anion: 'OH⁻' },
    { formula: 'Ba(OH)₂', name: 'Barijum hidroksid', cation: 'Ba²⁺', anion: 'OH⁻' },
    { formula: 'CsOH', name: 'Cezijum hidroksid', cation: 'Cs⁺', anion: 'OH⁻' },
    { formula: 'Sr(OH)₂', name: 'Stroncijum hidroksid', cation: 'Sr²⁺', anion: 'OH⁻' },
    { formula: 'K₂SO₃', name: 'Kalijum-sulfit', cation: 'K⁺', anion: 'SO₃²⁻' },
    { formula: 'AgNO₃', name: 'Srebro-nitrat', cation: 'Ag⁺', anion: 'NO₃⁻' },
    { formula: 'Na₂CO₃', name: 'Natrijum-karbonat', cation: 'Na⁺', anion: 'CO₃²⁻' },
    { formula: 'K₂SO₄', name: 'Kalijum-sulfat', cation: 'K⁺', anion: 'SO₄²⁻' },
    { formula: 'NH₄Cl', name: 'Amonijum-hlorid', cation: 'NH₄⁺', anion: 'Cl⁻' },
    { formula: 'CaSO₄', name: 'Kalcijum-sulfat', cation: 'Ca²⁺', anion: 'SO₄²⁻' },
    { formula: 'FeCl₃', name: 'Gvožđe(III)-hlorid', cation: 'Fe³⁺', anion: 'Cl⁻' },
    { formula: 'CuCl₂', name: 'Bakar(II)-hlorid', cation: 'Cu²⁺', anion: 'Cl⁻' },
    { formula: 'ZnCl₂', name: 'Cink-hlorid', cation: 'Zn²⁺', anion: 'Cl⁻' },
    { formula: 'AlCl₃', name: 'Aluminijum-hlorid', cation: 'Al³⁺', anion: 'Cl⁻' },
    { formula: 'PbCl₂', name: 'Olovo(II)-hlorid', cation: 'Pb²⁺', anion: 'Cl⁻' }
];

let currentCompound = null;
let selectedCation = null;
let selectedAnion = null;
let cationCount = 0;
let anionCount = 0;

function loadGame() {
    const compoundDiv = document.getElementById('compound');
    const cationDiv = document.getElementById('cations');
    const anionDiv = document.getElementById('anions');
    compoundDiv.innerHTML = '';
    cationDiv.innerHTML = '';
    anionDiv.innerHTML = '';

    const shuffledCompounds = [...compounds].sort(() => Math.random() - 0.5);
    currentCompound = shuffledCompounds[0];

    const compoundName = document.createElement('h2');
    compoundName.textContent = currentCompound.name;
    compoundDiv.appendChild(compoundName);

    const shuffledCations = [...compounds].sort(() => Math.random() - 0.5);
    const shuffledAnions = [...compounds].sort(() => Math.random() - 0.5);

    shuffledCations.forEach((compound, index) => {
        const cationButton = document.createElement('button');
        cationButton.textContent = compound.cation;
        cationButton.dataset.cation = compound.cation;
        cationButton.dataset.index = index;
        cationButton.onclick = () => selectCation(index);
        cationDiv.appendChild(cationButton);
    });

    shuffledAnions.forEach((compound, index) => {
        const anionButton = document.createElement('button');
        anionButton.textContent = compound.anion;
        anionButton.dataset.anion = compound.anion;
        anionButton.dataset.index = index;
        anionButton.onclick = () => selectAnion(index);
        anionDiv.appendChild(anionButton);
    });
}

function selectCation(index) {
    const cationButton = document.querySelector(`#cations button[data-index="${index}"]`);
    if (selectedCation === index) {
        cationCount
