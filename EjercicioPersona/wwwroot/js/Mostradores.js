"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuestraHTML2 = exports.MuestraHTML = void 0;
var MuestraHTML = /** @class */ (function () {
    function MuestraHTML() {
    }
    MuestraHTML.prototype.dameContenido = function (MiPersona) {
        return ("<p> ".concat(MiPersona.primerNombre, "  ").concat(MiPersona.apellido1, " </p>"));
    };
    return MuestraHTML;
}());
exports.MuestraHTML = MuestraHTML;
var MuestraHTML2 = /** @class */ (function () {
    function MuestraHTML2() {
    }
    MuestraHTML2.prototype.dameContenido = function (MiPersona) {
        return ("<p> ".concat(MiPersona.primerNombre, "  ").concat(MiPersona.apellido2, " </p>"));
    };
    return MuestraHTML2;
}());
exports.MuestraHTML2 = MuestraHTML2;
