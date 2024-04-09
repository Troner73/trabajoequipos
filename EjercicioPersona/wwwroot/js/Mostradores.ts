import { Persona } from "./Personas.js"
export interface IMuestra {
    dameContenido(MiPersona: Persona): String;
}
export class MuestraHTML implements IMuestra {
    dameContenido(MiPersona: Persona): String {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido1} </p>`);
    }
}
export class MuestraHTML2 implements IMuestra {
    dameContenido(MiPersona: Persona): String {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido2} </p>`);
    }
}