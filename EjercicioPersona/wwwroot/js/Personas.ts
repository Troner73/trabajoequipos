class Persona {
    primerNombre: string = "";
    nombreIntermedio: string = "";
    apellido1: string = "";
    apellido2: string = "";
    añoNacimiento: number = 0;
    identificador: string = "";
    activo: boolean = true;
}

interface IPersonable {
    damePersona(): Persona;
}


class CreadorManualEspañol implements IPersonable {
    damePersona(): Persona {
        let MiPersona = new Persona();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Ibañez";
        MiPersona.añoNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    }
}

interface IValidable
{
    isValid (MiPersona :Persona): boolean;
}

class ValidadorEspañol implements IValidable
{
    isValid(MiPersona: Persona): boolean {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0); 
    }
}

class ValidadorIngles implements IValidable {
    isValid(MiPersona: Persona): boolean {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.nombreIntermedio.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}

interface IMuestra {
    dameContenido(MiPersona: Persona): String;
}

class MuestraHTML implements IMuestra{
    dameContenido(MiPersona: Persona): String {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido1} </p>`);
    }
}

class MuestraHTML2 implements IMuestra {
    dameContenido(MiPersona: Persona): String {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido2} </p>`);
    }
}

let Creador: IPersonable = new CreadorManualEspañol();
let ValidadorPersona: IValidable = new ValidadorIngles();
let Mostrador: IMuestra = new MuestraHTML();
let MiPersona = Creador.damePersona();
if (ValidadorPersona.isValid(MiPersona)) {
    
    document.writeln(Mostrador.dameContenido(MiPersona).toString());
}

