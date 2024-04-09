window.alert("hola");
import { IValidable } from "./Validadores.js";
import { IMuestra } from "./Mostradores.js";
import { IConfigurable,ConfiguradorEspañolBasico } from "./Configuradores.js";
import { IPersonable } from "./Creadores.js";
import { IGeneraHTML } from "./GeneradoresHTML.js";

let ConfiguradorGeneral: IConfigurable = new ConfiguradorEspañolBasico();
let GeneradorHTML: IGeneraHTML = ConfiguradorGeneral.dameGenerador();
let _formulario = document.getElementById("formulario");
if (_formulario != null) {
    _formulario.innerHTML = GeneradorHTML.dameHTML().toString();
}
let _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}

function valida() {

    let Creador: IPersonable = ConfiguradorGeneral.dameCreador();
    let ValidadorPersona: IValidable = ConfiguradorGeneral.dameValidador();
    let Mostrador: IMuestra = ConfiguradorGeneral.dameMostrador();

    let MiPersona = Creador.damePersona();
    let _verde = document.getElementById("verde");
    let _rojo = document.getElementById("rojo");
    if (ValidadorPersona.isValid(MiPersona)) {
        if (_verde != null) {
            _verde.innerHTML = Mostrador.dameContenido(MiPersona).toString();
        }
        if (_rojo != null) { 
            _rojo.innerHTML = "";
        }
    }
    else {
        if (_rojo != null) {
            _rojo.innerHTML = Mostrador.dameContenido(MiPersona).toString();
        }
        if (_verde != null) {
            _verde.innerHTML = "";
        }
    }
}
