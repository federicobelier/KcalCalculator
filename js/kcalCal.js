//Variables globales
let name = prompt("Ingresa tu Nombre");
let age = prompt("Ingresa tu edad");
let weight = prompt("Ingresa tu peso en KG");
let height = prompt("Ingresa tu estatura en CM");
let gender = prompt ("Selecciona tu genero: Masculino o Femenino").toLowerCase();

function bmrCalculation(){
    if(gender =="masculino"){
        const bmrMen = Math.round ((9.99 * weight) + (6.25 * height) - (4.92 * age) + 5);
        alert(name + ", tu tasa metabolica basal es de "+ bmrMen + " kCals");
    } else if (gender != "masculino") {
        const bmrWomen = Math.round ((9.99 * weight) + (6.25 * height) - (4.92 * age) - 161);
        alert(name + ", tu tasa metabolica basal es de "+ bmrWomen + " kCals");;
    } else {
        alert("Ingresar un genero")}
    }

//Physic Activity Calculation

function paCalculation() {
    let conteo = prompt("Cuentas tu gasto energetico? \n Si o No").toLowerCase();
    if (conteo != "si") {
        let physicAct = prompt("Cuanto te ejercitas? Seleccion de la siguientes opciones:\n - Sedentario \n - Ligeramente Activo \n - Moderradamente Activo \n - Muy Activoo \n - Extra Activo").toLowerCase();
        switch (physicAct) {
            case "sedentario":
                physicAct = 1.2;
                break;
            case "ligeramente activo":
                physicAct = 1.375;
                break;
            case "moderadamente activo":
                physicAct = 1.55;
                break;
            case "muy activo":
                physicAct = 1.725;
                break;
            case "extra activo":
                physicAct = 1.9
                break
            default:
                alert("Ingresar una opcion")
                break;
        }
        let resultadoUno = bmr + physicAct;
        alert("En base a tu actividad fisica necesitas un consumo de " + resultadoUno + " kCals para mantenerte con energia.")
    
    } else if(conteo == "si"){
        let physicActKcal = prompt ("En Calorias, cuanto es tu gasto energetico? Ingresa valor en Kcal");
        let calculoDos = bmr + physicActKcal;
        alert("en base a tu actividad fisica necesitas un consumo de " + calculoDos + " kCals para mantenerte con energia.")
    } else {
        alert("Ingresa una opcion")
    }
}
 
bmrCalculation();
const bmr = parseInt(bmrCalculation)
paCalculation();