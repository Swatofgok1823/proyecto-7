const funciones  = {};

const signo =  (numero) => {
    if (numero >= 0 ) {
        return `postivo`
    } else {
        return `negativo`
    }
}

const tablaSigno = (numero) => {
    console.log(`*******************************`.green);
    console.log(`*       FUNCION SIGNO         *`.green);
    console.log(`*******************************`.green);
    console.log(`*   El numero ${numero} es ` 
                + funciones.signo(numero) + `    *`.green);
    console.log(`*******************************\n`.green);
}

const encontroCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return 'se encontro';
    } else {
        return ' no se encontro';
    }
}

const tablaEncontroCaracter = (caracter) => {
    console.log(`*******************************`.red);
    console.log(`*  FUNCION ENCONTRO CARACTER  *`.red);
    console.log(`*******************************`.red);
    console.log(`* El caracter ${caracter.toUpperCase()}` 
                + funciones.encontroCaracter(caracter.toUpperCase()) +   `*`);
    console.log(`*******************************\n`.red);

}

const busquedaBebida = (bebida) => {
    const bebidas = [`vino`, 'cerveza', 'gaseosa', 'agua'];
    if (bebidas.includes(bebida)) {
        return ' ve a la barra';
    } else {
        return ' ve a la tienda'
    }

}

const tablaBusquedaBebida = (bebida) => {
    console.log(`*******************************`.bgBlue);
    console.log(`*    FUNCION BUSCAR BEBIDA    *`.bgBlue);
    console.log(`*******************************`.bgBlue);
    console.log(`*`.bgBlue + `Se busco ${bebida},`
                + funciones.busquedaBebida(bebida) 
                + `` +     `*`.bgBlue);
    console.log(`*******************************\n`.blue);

}

const medioTransporte = (medio) => {
    switch (medio) {
        case `avion`:
            return (`Recuerda tener \n dinero para el pasaje`);
             break;
        case `flota`:
            return (`Recuerda tener \n dinero para el pasaje`);
              break;
        case `carro`:
          return (`Recuerda llevar \n ropa apropiada`);
          break;
          case `bicicleta`:
            return (`Recuerda llevar \n ropa apropiada`);
            break;
        default: 'otro tipo de transporte'
            return `lo piensa...`
            break;
    }

}

const tablaMedioTransporte = (medio) => {
    console.log(`*******************************`.yellow);
    console.log(`* FUNCION MEDIO DE TRANSPORTE *`.yellow);
    console.log(`*******************************`.yellow);
    console.log(`*`.yellow + ` "${medio}": `
                + funciones.medioTransporte(medio) 
                 +     `        *`.yellow) ;
    console.log(`*******************************\n`.yellow);

}

const facturarProducto = (cantidad, precio, descuento) => {
    if (cantidad > 0 || precio > 0 || descuento >= 0 || descuento <= 100) {
        const subtotal = cantidad * precio;
        const descuentoPrecio = (descuento / 100 ) * subtotal;
        const precioFinal = subtotal - descuentoPrecio;
        return precioFinal

    } else {
        return 'verifica el valor'
    }
}

const tablaFacturarProducto = (cantidad, precio, descuento) => {
    console.log(`*******************************`.yellow);
    console.log(`*  FUNCION FACTURAR PRODUCTO  *`.yellow);
    console.log(`*******************************`.yellow);
    console.log(`*`.blue + `   Valor producto : ` +
     funciones.facturarProducto(cantidad, precio, descuento)
                  + ` \n   Descuento es de : ${cantidad, precio, descuento}`+`       *`.yellow);
    console.log(`*******************************\n`.yellow);

}

const bebidaComida = (menu) => {
switch (menu) {
    case 'carne':
        return (` Sele recomienda vino tinto`);
        break;
    case 'pescado':
        return (` Se le recomienda vino blanco`);
        break;
    case 'verdura':
        return (`    Se le recomienda agua`);
    default: 'otro menu'
        return  (`    se le recomienda agua`)
        break;
    }
}

const tablaBebidaComida = (menu) => {
    console.log(`*******************************`.cyan);
    console.log(`*   RECOMENDACION DE BEBIDA   *`.cyan);
    console.log(`*******************************`.cyan);
    console.log(`*`.cyan + `       Al menu "${menu}" \n ` 
                + funciones.bebidaComida(menu) + `    *`.cyan);
    console.log(`*******************************\n`.cyan);
}

const salaJuegos = (pago) => {
    switch (pago) {
        case '4000':
            return ('   Tienes acceso a Consolas,\n      Juegos 2D, Juegos 3D y\n      Realidad Virtual');
            break;
        case '3000':
            return ('  Tienes acceso a Consolas,\n    Juegos 2D y Juegos 3D');
            break;
        case '2000':
            return ('   Tienes acceso a \n    Consolas y Juegos 2D');
            break;
        case '1000':
            return ('  Tienes acceso a Consolas');
        default: 'pago menos'
            return ('    Ingrese mas dinero')
            break;
    }
}

const tablaSalaJuegos = (pago) => {
    console.log(`*******************************`.magenta);
    console.log(`*   RECOMENDACION DE BEBIDA   *`.magenta);
    console.log(`*******************************`.magenta);
    console.log(`*`.magenta + `      Pagaste: "${pago}" \n ` 
                + funciones.salaJuegos(pago) + `       *`.magenta);
    console.log(`*******************************\n`.magenta);

}

const contarNumero = (cont) => {
    let enterosPositivos = "";
    for (var i = 1; i < cont; i++) {
        console.log (`*`.green + `        ` + (i) 
        + `                   *`.green);
      }
      return enterosPositivos.trim();
}

const tablaContarNumero = (cont) => {
    console.log(`*******************************`.green);
    console.log(`*     CONTADOR DE ENTEROS     *`.green);
    console.log(`*******************************`.green);
    console.log(`*`.green + `  LLEGAMOS A  ${cont}` + 
    funciones.contarNumero(cont) + `            *`.green);
    console.log(`*******************************\n`.green);

}

const numeroPares = (pares) => {
    let hola = "";
    for (let i = 0; i <= pares; i++) {
        if (i % 2 === 0) {
          console.log(`*              `.red + 
          (i) + `             *`.red);
        }
    }
    return hola.trim();
}

const tablaNumeroPares = (pares) => {
    console.log(`*******************************`.red);
    console.log(`*       CONTADOR DE PARES     *`.red);
    console.log(`*******************************`.red);
    console.log(`*`.red + `      Llegamos a : ${pares}  ` 
                + funciones.numeroPares(pares) + `      *`.red);
    console.log(`*******************************\n`.red);
}

const tablaMultiplicar = (numeros) => {

    console.log(`*******************************`.magenta);
    console.log(`*     TABLA DE MULTIPLICAR    *`.magenta);
    console.log(`*******************************`.magenta);

    for (let i = 0; i <= 10; i++) {
        const multiplicar = numeros*i;
        console.log(`*         `.magenta + `${numeros} x ${i} = ${multiplicar}` + `          *`.magenta);
      }
      console.log(`*******************************\n`.magenta);
      
}

const repetirCaracter = (caracter1,repetir) => {
           let resultado = '';
          for (let i = 0; i < repetir; i++){
            resultado += caracter1;
        }
       return resultado;
    }
    

const tablaRepetirCaracter = (caracter1, repetir) => {
    console.log(`*******************************`.magenta);
    console.log(`*    CONTADOR DE CARCATER     *`.magenta);
    console.log(`*******************************`.magenta);
    console.log(`*`.green + `  CONTANDO  ${caracter1,repetir} ` + 
    funciones.repetirCaracter(caracter1,repetir) + `          *`.magenta);
    console.log(`*******************************\n`.magenta);

}

// const contadorBase = (base) => {
//     if (base < 2 || base > 16) {
//     return "Base no válida. Debe estar entre 2 y 16.";
//   }

//   const numeros = [];

//   for (let i = 0; i < base; i++) {
//     for (let j = 0; j < base; j++) {
//       const numero = i * base + j;
//       numeros.push(numero.toString(base).padStart(2, "0"));
//     }
//   }

//   return numeros;
// }

// const tablaContadorBase = (base) => {
//     console.log(`**********************************`.green);
//     console.log(`*GENERADOR DE NUMEROS EN BASE (n)*`.green);
//     console.log(`**********************************`.blue);
//     console.log(`*`.blue + `        CONTANDO  ${base} ` + 
//     funciones.contadorBase(base) + `             *`.green);
//     console.log(`***********************************\n`.green);

// }

const contadorBase = (base) => {
    if (base < 2 || base > 16) {
      return [];
    }
  
    const twoDigitNumbers = [];
  
    for (let firstDigit = 0; firstDigit < base; firstDigit++) {
      for (let secondDigit = 0; secondDigit < base; secondDigit++) {
        const numberInBaseN = `${firstDigit}${secondDigit}`;
        twoDigitNumbers.push(numberInBaseN);
      }
    }
  
    return twoDigitNumbers;
  };
  
  const baseTenNumbers = contadorBase(10);
  console.log(baseTenNumbers);
  
  const tablaContadorBase = (base) => {
      console.log(`**********************************`.blue);
      console.log(`*GENERADOR DE NUMEROS EN BASE (n)*`.blue);
      console.log(`**********************************`.blue);
      console.log(`*`.blue + ` El numero base es ${base}: ` + 
      funciones.contadorBase(base) + `*`.blue);
      console.log(`***********************************\n`.blue);
  
  }
  
const inicioSesion = (clave) => {

    const contraseñas = ["contraseña 1", "contraseña 2", "contraseña 3"];
    let intentosFallidos  = 3;
    for (let intento = 0; intento < 3; intento++) {
    
            if (contraseñas.includes(clave[intento])){
                console.log('Acceso permitido');
                return;
            }else{
                intentosFallidos= intento+1;
                console.log(`Intento ${intentosFallidos} fallido. te quedan ${3 - intentosFallidos}intentos.`);
            }
    }
            if (intentos === 3) {
                return('Aiuda me estan robando');
            }
}

    
    
const tablaInicioSesion = (clave) => {
    console.log(`**********************************`.magenta);
    console.log(`*       FUNCION CONTRASEÑA       *`.magenta);
    console.log(`**********************************`.magenta);
    console.log(`*`.magenta  +     funciones.inicioSesion(clave) + `          *`.magenta);
    console.log(`**********************************\n`.magenta);
  
} 

const minimoMaximo = (numeross) => {
    if (!Array.isArray(numeross) || numeross.length === 0) {
      return;
    }
  
    const minNumero = Math.min(...numeross);
    const maxNumero = Math.max(...numeross);
    const sum = numeross.reduce((total, num) => total + num, 0);
    const Promedio = sum / numeross.length;

    console.log(`*******************************`.green);
    console.log(`*   FUNCION MIN, MAX Y PROX   *`.green);
    console.log(`*******************************`.green);
    console.log(`*******************************`.green);
    console.log(`*      `.yellow + `Número menor: ${minNumero}` + `        *`.yellow);
    console.log(`*      `.yellow + `Número mayor: ${maxNumero}` + `        *`.yellow);
    console.log(`*      `.yellow + `Promedio: ${Promedio}` + `        *`.yellow);
    console.log(`*******************************\n`.yellow);
  };

  const numerosParess = (numerosss) => {
    if (!Array.isArray(numerosss) || numerosss.length === 0) {
        return;
      }
    
      const numerosParess = numerosss.filter(numer => numer % 2 === 0);
      const numerOFnumerosParess = numerosParess.length;
    
      console.log(`*******************************`.yellow);
      console.log(`* FUNCION MEDIO DE TRANSPORTE *`.yellow);
      console.log(`*******************************`.yellow);
      console.log(`*`.yellow + `Cantidad de números pares: ${numerOFnumerosParess}` + ` *`.yellow);
      if (numerOFnumerosParess > 0 ) {
        console.log(`*`.yellow + `Números pares: ${numerosParess.join(", ")}` + `       *`.yellow);
        console.log(`*******************************`.yellow);
      }
    };

funciones.signo = signo;
funciones.tablaSigno = tablaSigno;
funciones.encontroCaracter = encontroCaracter;
funciones.tablaEncontroCaracter = tablaEncontroCaracter;
funciones.busquedaBebida = busquedaBebida;
funciones.tablaBusquedaBebida = tablaBusquedaBebida;
funciones.medioTransporte = medioTransporte;
funciones.tablaMedioTransporte = tablaMedioTransporte;
funciones.facturarProducto = facturarProducto;
funciones.tablaFacturarProducto = tablaFacturarProducto;
funciones.bebidaComida = bebidaComida;
funciones.tablaBebidaComida = tablaBebidaComida;
funciones.salaJuegos = salaJuegos;
funciones.tablaSalaJuegos = tablaSalaJuegos;
funciones.contarNumero = contarNumero;
funciones.tablaContarNumero = tablaContarNumero;
funciones.numeroPares = numeroPares;
funciones.tablaNumeroPares = tablaNumeroPares;
funciones.tablaMultiplicar = tablaMultiplicar;
funciones.repetirCaracter = repetirCaracter;
funciones.tablaRepetirCaracter = tablaRepetirCaracter;
funciones.contadorBase = contadorBase;
funciones.tablaContadorBase = tablaContadorBase;
funciones.inicioSesion = inicioSesion;
funciones.tablaInicioSesion = tablaInicioSesion;
funciones.minimoMaximo = minimoMaximo;
funciones.numerosParess = numerosParess;

module.exports= funciones