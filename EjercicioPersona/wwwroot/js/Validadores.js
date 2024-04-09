"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadorIngles = exports.ValidadorEspañol = void 0;
var ValidadorEspañol = /** @class */ (function () {
    function ValidadorEspañol() {
    }
    ValidadorEspañol.prototype.isValid = function (MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0);
    };
    return ValidadorEspañol;
}());
exports.ValidadorEspañol = ValidadorEspañol;
var ValidadorIngles = /** @class */ (function () {
    function ValidadorIngles() {
    }
    ValidadorIngles.prototype.isValid = function (MiPersona) {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.nombreIntermedio.length > 0 &&
            MiPersona.primerNombre.length > 0);
    };
    return ValidadorIngles;
}());
exports.ValidadorIngles = ValidadorIngles;
