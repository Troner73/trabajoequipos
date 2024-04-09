"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguradorEspañolBasico = void 0;
var Creadores_js_1 = require("./Creadores.js");
var Validadores_js_1 = require("./Validadores.js");
var mostradores = require("./Mostradores.js");
var generadores = require("./GeneradoresHTML.js");
var libreriasHTML = require("./LibreriasHTML.js");
var ConfiguradorEspañolBasico = /** @class */ (function () {
    function ConfiguradorEspañolBasico() {
    }
    ConfiguradorEspañolBasico.prototype.dameGenerador = function () {
        return new generadores.MiPrimerHTML(new libreriasHTML.HTMLBootStrap());
    };
    ConfiguradorEspañolBasico.prototype.dameCreador = function () {
        return new Creadores_js_1.CreadorHTML();
    };
    ConfiguradorEspañolBasico.prototype.dameValidador = function () {
        return new Validadores_js_1.ValidadorEspañol();
    };
    ConfiguradorEspañolBasico.prototype.dameMostrador = function () {
        return new mostradores.MuestraHTML();
    };
    return ConfiguradorEspañolBasico;
}());
exports.ConfiguradorEspañolBasico = ConfiguradorEspañolBasico;
