"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiPrimerHTML = void 0;
var MiPrimerHTML = /** @class */ (function () {
    function MiPrimerHTML(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    MiPrimerHTML.prototype.dameHTML = function () {
        var contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameTextBox("nombre1", "nombre");
        contenido += this.g.dameTextBox("nombreIntermedio", "intermedio");
        contenido += this.g.dameTextBox("apellido1", "apellido1");
        contenido += this.g.dameTextBox("apellido2", "apellido2");
        contenido += "<br />";
        contenido += this.g.dameTextBox("identificativo", "identificativo");
        contenido += this.g.dameNumberBox("nac", "año nacimiento");
        contenido += this.g.dameCheckBox("activo", "Activo");
        contenido += this.g.dameBoton("boton", "Dale");
        return contenido;
    };
    return MiPrimerHTML;
}());
exports.MiPrimerHTML = MiPrimerHTML;
