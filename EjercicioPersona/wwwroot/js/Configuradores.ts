import { IPersonable,CreadorHTML,CreadorManualEspañol } from "./Creadores.js";
import { IValidable,ValidadorEspañol,ValidadorIngles } from "./Validadores.js";
import * as mostradores from "./Mostradores.js";
import * as generadores from "./GeneradoresHTML.js"
import * as libreriasHTML from "./LibreriasHTML.js"
export interface IConfigurable {
    dameGenerador(): generadores.IGeneraHTML;
    dameCreador(): IPersonable;
    dameValidador(): IValidable;
    dameMostrador(): mostradores.IMuestra;
}
export class ConfiguradorEspañolBasico implements IConfigurable {
    dameGenerador(): generadores.IGeneraHTML {
        return new generadores.MiPrimerHTML(new libreriasHTML.HTMLBootStrap());
    }
    dameCreador(): IPersonable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorEspañol();
    }
    dameMostrador(): mostradores.IMuestra {
        return new mostradores.MuestraHTML();
    }

}