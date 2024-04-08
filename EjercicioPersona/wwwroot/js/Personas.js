var Persona = /** @class */ (function () {
    function Persona() {
        this.primerNombre = "";
        this.nombreIntermedio = "";
        this.apellido1 = "";
        this.apellido2 = "";
        this.añoNacimiento = 0;
        this.identificador = "";
        this.activo = true;
    }
    return Persona;
}());
var CreadorManualEspañol = /** @class */ (function () {
    function CreadorManualEspañol() {
    }
    CreadorManualEspañol.prototype.damePersona = function () {
        var MiPersona = new Persona();
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
var MuestraHTML = /** @class */ (function () {
    function MuestraHTML() {
    }
    MuestraHTML.prototype.dameContenido = function (MiPersona) {
        return ("<p> ".concat(MiPersona.primerNombre, "  ").concat(MiPersona.apellido1, " </p>"));
    };
    return MuestraHTML;
}());
var MuestraHTML2 = /** @class */ (function () {
    function MuestraHTML2() {
    }
    MuestraHTML2.prototype.dameContenido = function (MiPersona) {
        return ("<p> ".concat(MiPersona.primerNombre, "  ").concat(MiPersona.apellido2, " </p>"));
    };
    return MuestraHTML2;
}());
var Creador = new CreadorManualEspañol();
var ValidadorPersona = new ValidadorIngles();
var Mostrador = new MuestraHTML();
var MiPersona = Creador.damePersona();
if (ValidadorPersona.isValid(MiPersona)) {
    document.writeln(Mostrador.dameContenido(MiPersona).toString());
}
//# sourceMappingURL=Personas.js.map