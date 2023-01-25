//Variables globales
let name = prompt("Ingresa tu Nombre");
let age = prompt("Ingresa tu edad");
let weight = prompt("Ingresa tu peso en KG");
let height = prompt("Ingresa tu estatura en CM");
let gender = prompt ("Selecciona tu genero: Masculino o Femenino").toLowerCase();

function bmrCalculation(){
    if(gender =="masculino"){
        let bmrMen = (9,99 * weight) + (6,25 * height) - (492 * age) + 5;
        console.log(bmrMen);
    } else if (gender != "masculino"){
        let bmrWomen = (9,99 * weight) + (6,25 * height) - (492 * age) - 161;
        console.log(bmrWomen);
    } 
    }

bmrCalculation();




//Physic Activity Calculation
/*
let physicAct = prompt("Cuanto te ejercitas? Seleccion de la siguientes opciones").toLowerCase();
let physicActKcal = prompt ("En Calorias, cuanto es tu gasto energetico? Ingresa valor en Kcal");

const bmrXpa = bmr * physicAct;
const bmrXpakcal = bmr + physicActKcal;

while (physicAct!=""){
    switch (physicAct) {
        case "sedentario":
            
            break;
        case "ligeramente activo":

            break;
        case "moderadamente activo":

            break;
        case "muy activo":

            break;
        case "extra activo":

            break
    
        default:
            alert("Ingresar una opcion")
            break;
    }
}




//let result = console.log(nombre +"Necesitas consumir " + bmrXpa + " kCals el dia de hoy. ")
//let result = console.log(nombre +"Necesitas consumir " + bmrXpakcal + " kCals el dia de hoy. ")
*/