"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreadorHTML = exports.CreadorManualEspañol = void 0;
var Personas_js_1 = require("./Personas.js");
var CreadorManualEspañol = /** @class */ (function () {
    function CreadorManualEspañol() {
    }
    CreadorManualEspañol.prototype.damePersona = function () {
        var MiPersona = new Personas_js_1.Persona();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Ibañez";
        MiPersona.añoNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    };
    return CreadorManualEspañol;
}());
exports.CreadorManualEspañol = CreadorManualEspañol;
var CreadorHTML = /** @class */ (function () {
    function CreadorHTML() {
    }
    CreadorHTML.prototype.damePersona = function () {
        var MiPersona = new Personas_js_1.Persona();
        MiPersona.primerNombre = this.dameValorTexto("nombre1");
        MiPersona.nombreIntermedio = this.dameValorTexto("nombreIntermedio");
        MiPersona.apellido1 = this.dameValorTexto("apellido1");
        MiPersona.apellido2 = this.dameValorTexto("apellido2");
        MiPersona.identificador = this.dameValorTexto("identificativo");
        MiPersona.añoNacimiento = this.dameValorNumero("nac");
        MiPersona.activo = this.dameValorBooleano("activo");
        return MiPersona;
    };
    CreadorHTML.prototype.dameValorNumero = function (elementoId) {
        return Number(this.dameValorTexto(elementoId));
    };
    CreadorHTML.prototype.dameValorBooleano = function (elementoId) {
        return document.getElementById(elementoId).checked;
    };
    CreadorHTML.prototype.dameValorTexto = function (elementoId) {
        return document.getElementById(elementoId).value;
    };
    return CreadorHTML;
}());
exports.CreadorHTML = CreadorHTML;
