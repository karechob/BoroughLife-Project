
//svg color for manhattan
const svgManPath = document.getElementById('man-svg');

document.getElementById('man-btn').addEventListener('mouseover', () => {
    svgManPath.classList.add('svg-btn-hover');
});

document.getElementById('man-btn').addEventListener('mouseout', () => {
    svgManPath.classList.remove('svg-btn-hover');
});

//svg color for bronx
const svgBronxPath = document.getElementById('bronx-svg');

document.getElementById('bron-btn').addEventListener('mouseover', () => {
    svgBronxPath.classList.add('svg-btn-hover');
});

document.getElementById('bron-btn').addEventListener('mouseout', () => {
    svgBronxPath.classList.remove('svg-btn-hover');
});
//svg color for brooklyn
const svgBrookPath = document.getElementById('brook-svg');

document.getElementById('brook-btn').addEventListener('mouseover', () => {
    svgBrookPath.classList.add('svg-btn-hover');
});

document.getElementById('brook-btn').addEventListener('mouseout', () => {
    svgBrookPath.classList.remove('svg-btn-hover');
});
//svg color for queens
const svgQueensPath = document.getElementById('queens-svg');

document.getElementById('queens-btn').addEventListener('mouseover', () => {
    svgQueensPath.classList.add('svg-btn-hover');
});

document.getElementById('queens-btn').addEventListener('mouseout', () => {
    svgQueensPath.classList.remove('svg-btn-hover');
});
//svg color for staten island
const svgStatenPath = document.getElementById('staten-svg');

document.getElementById('staten-btn').addEventListener('mouseover', () => {
    svgStatenPath.classList.add('svg-btn-hover');
});

document.getElementById('staten-btn').addEventListener('mouseout', () => {
    svgStatenPath.classList.remove('svg-btn-hover');
});