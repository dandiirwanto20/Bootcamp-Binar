const calculateTriangleArea = (base, height) => (1/2) * base * height;

const  calculateCubeVolume = (sideLength) => Math.pow(sideLength, 3)

const calculateCylinderVolume = (radius, height) => Math.PI * Math.pow(radius, 2) * height

console.log(`Luas Segitiga: ${calculateTriangleArea(5, 8)}`);
console.log(`Volume Kubus: ${calculateCubeVolume(4)}`);
console.log(`Volume Tabung: ${calculateCylinderVolume(3, 10)}`);


