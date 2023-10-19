require('colors');

const funciones = require('./modules/funciones')

const contador = 10;

const main = async() => {

    console.clear();

    const numero = -5;
    funciones.tablaSigno(numero);

    const caracter = 'z';
    funciones.tablaEncontroCaracter(caracter);

    const bebida = 'chocolate';
    funciones.tablaBusquedaBebida(bebida);

    const medio = 'avion';
    funciones.tablaMedioTransporte(medio);

    const cantidad = 5 ;
    const precio = 5000;
    const descuento = 3.5;
    funciones.tablaFacturarProducto(cantidad, precio, descuento);

    const menu = 'pollo';
    funciones.tablaBebidaComida(menu);

    const pago = '2000';
    funciones.tablaSalaJuegos(pago);

    const cont = '15';
    funciones.tablaContarNumero(cont);

    const pares = '10';
    funciones.tablaNumeroPares(pares);

    const numeros = '5';
    funciones.tablaMultiplicar(numeros);

    const caracter1 = 'h';
    const repetir = 6;
    funciones.tablaRepetirCaracter(caracter1,repetir);
    
    const base = '5';
    funciones.tablaContadorBase(base);

    const clave = ["contraseña 5", "contraseña 6", "contraseña 3"];
    funciones.tablaInicioSesion(clave);

    const numeross = ['18', '8', '4', '6'];
    funciones.minimoMaximo(numeross);
        
    const numerosss = ['1', '8', '4', '6'];
    funciones.numerosParess(numerosss);
};

main();