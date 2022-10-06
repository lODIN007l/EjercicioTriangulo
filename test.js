// const 
const docPrincial=require('./TrianguloJS.js');

// casos de prueba del area de un triangulo 
// 1.ingresar valores positivos o diferentes de 0 
test("'ingrese un valor positivo o diferente de 0  ", () => {
    expect(funcionTipodeltriangulo(3,5,0));
});

// Datos no numericos 
test("'datos no numericos ", () => {
    expect(funcionTipodeltriangulo("a",5,3));
});


//INGRESO DE DATOS NEGATIVOS
test("'datos negativos ", () => {
    expect(funcionTipodeltriangulo(3,-5,6));
});

//Identifica el tipo del triangulo 
test("'equilatero ", () => {
    expect(funcionTipodeltriangulo(3,3,6));
});

test("'isoceles", () => {
    expect(funcionTipodeltriangulo(3,3,3));
});

test(" escaleno", () => {
    expect(funcionTipodeltriangulo(1,3,4));
});