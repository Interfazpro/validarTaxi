/* crear un objeto q guarde atributos placa anio*/



//crear la funcion denominada "validar taxi" que reciba
// un objeto literal con varios atributos, incluso el año
// de fabricacion. luego, calcular la vida util del taxi y, si es menor a 10 años 
// devolver true; de lo contrario devolver false


/*
function validarTaxi  (automovil){        // crear una funsion 

let currentYear =2023;
let year =currentYear - automovil.fabricacion


if( currentYear )


}
*/
 

" use stric "
let automovil= {

    placa: "ABA-2135",
    date: 2010,
    color: "lead", // plomo
    chasis: "1GCEC14CXGF123456",
    brand: "Renault",
   //isUsable: false, 
}
function validarTaxi (automovil)
{
  
    let currentYear =2015;   
    let isUsable=currentYear-automovil.date;  // pruebas con promt let currentYear = Number (prompt('ingrese el año de su automovil' ));

    if(isUsable <=10)

    {
        return (true);

    }
else{
   return (false);
}
}


 let = result = validarTaxi (automovil)

alert ("el resultado de su vehiculo es "+result)

// return tru si cumple - return false si no cumple


