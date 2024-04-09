"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.alert("hola");
var Configuradores_js_1 = require("./Configuradores.js");
var ConfiguradorGeneral = new Configuradores_js_1.ConfiguradorEspañolBasico();
var GeneradorHTML = ConfiguradorGeneral.dameGenerador();
var _formulario = document.getElementById("formulario");
if (_formulario != null) {
    _formulario.innerHTML = GeneradorHTML.dameHTML().toString();
}
var _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}
function valida() {
    var Creador = ConfiguradorGeneral.dameCreador();
    var ValidadorPersona = ConfiguradorGeneral.dameValidador();
    var Mostrador = ConfiguradorGeneral.dameMostrador();
    var MiPersona = Creador.damePersona();
    var _verde = document.getElementById("verde");
    var _rojo = document.getElementById("rojo");
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
